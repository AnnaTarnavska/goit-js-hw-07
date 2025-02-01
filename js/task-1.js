const categoriesList = document.getElementById('categories');
const categoriesCount = categoriesList.querySelectorAll('.item').length;
console.log(`Кількість категорій: ${categoriesCount}`);

const categoryItems = categoriesList.querySelectorAll('.item');
categoryItems.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;

  const subItemsCount = item.querySelectorAll('ul > li').length;

  console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${subItemsCount}`);
});