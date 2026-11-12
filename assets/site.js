const filters = document.querySelectorAll('[data-filter]');
const records = document.querySelectorAll('[data-type]');
const count = document.querySelector('#publication-count');

if (filters.length && count) {
  filters[0].parentElement.hidden = false;
  const selectFilter = (selected) => {
    const category = selected.dataset.filter;
    let visible = 0;
    for (const button of filters) {
      button.setAttribute('aria-pressed', String(button === selected));
    }
    for (const record of records) {
      record.hidden = category !== 'all' && !record.dataset.type.split(' ').includes(category);
      if (!record.hidden) visible += 1;
    }
    count.textContent = visible + (visible === 1 ? ' record' : ' records');
  };
  for (const button of filters) {
    button.addEventListener('click', () => selectFilter(button));
  }
}
