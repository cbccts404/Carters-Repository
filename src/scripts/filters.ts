/** Client helpers for the StudyFilters component (quiz and flashcard pages). */

export interface Filterable {
  region: string;
  systems: string[];
  highYield: boolean;
}

/** Wire "Select all" / "Clear" buttons so each only affects its own group. */
export function wireSelectAll(form: HTMLFormElement, onChange: () => void) {
  for (const b of form.querySelectorAll<HTMLButtonElement>('[data-all]')) {
    b.addEventListener('click', () => {
      for (const i of b.closest('fieldset')!.querySelectorAll<HTMLInputElement>('input[type=checkbox]'))
        i.checked = b.dataset.all === '1';
      onChange();
    });
  }
}

/** ?system=x or ?region=y (from a system/region page link) narrows that group to one choice. */
export function applyUrlFilters(form: HTMLFormElement) {
  const params = new URLSearchParams(location.search);
  for (const name of ['system', 'region']) {
    const want = params.get(name);
    const boxes = [...form.querySelectorAll<HTMLInputElement>(`input[name=${name}]`)];
    if (want && boxes.some((b) => b.value === want)) boxes.forEach((b) => (b.checked = b.value === want));
  }
}

export function selected(form: HTMLFormElement) {
  const fd = new FormData(form);
  return { regions: fd.getAll('region') as string[], systems: fd.getAll('system') as string[], hy: fd.get('hy') === 'on' };
}

export function matches(item: Filterable, sel: ReturnType<typeof selected>) {
  return (
    sel.regions.includes(item.region) && item.systems.some((s) => sel.systems.includes(s)) && (!sel.hy || item.highYield)
  );
}

/** Map of value → label for a checkbox group, read from the rendered form. */
export function labels(form: HTMLFormElement, name: string) {
  return new Map(
    [...form.querySelectorAll<HTMLInputElement>(`input[name=${name}]`)].map((i) => [
      i.value,
      i.closest('label')!.querySelector('span')!.textContent!,
    ]),
  );
}
