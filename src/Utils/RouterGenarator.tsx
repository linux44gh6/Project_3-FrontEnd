
export const routeGenarator=(items: any[])=>{
    const routes = items.reduce((acc: { path: any; element: any; }[], item) => {
        if (item.path && item.element) {
            acc.push({
                path: item.path,
                element: item.element,
            });
        }
    
        if (item.children) {
            item.children.forEach((child: { path: any; element: any; }) => {
                if (child.path && child.element) {
                    acc.push({
                        path: child.path,
                        element: child.element,
                    });
                }
            });
        }
    
        return acc;
    }, []);
    return routes
}