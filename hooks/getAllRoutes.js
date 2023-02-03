const getAllRoutes = () => {

  const menuItemCollect = [];
  process.env.localesFiles.map((page, index) => {
      // Filter common translation file
      if(page != 'common'){
        let item = {};
        if (page == 'index'){
          item.index = "0";
          item.name = page;
          menuItemCollect.push( item );
        } else if (page == 'blog'){
          item.index = "1";
          item.name = page;
          menuItemCollect.push( item );
        } else if (page == 'contact'){
          item.index = "2";
          item.name = page;
          menuItemCollect.push( item );
        }
      }
  })

  menuItemCollect.sort(function(a, b) {
    // reorder all menus manuel index number
    return a.index - b.index;
  });

  return menuItemCollect;
};
 
export default getAllRoutes;
