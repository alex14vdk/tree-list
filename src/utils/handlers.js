const Handlers = {
    setSameBlockHeight: (block) => {
        Handlers.runByEvent(() => {
            const getElements = (items) => {
                return [].map.call(items, ((e) => {
                    return e.children[0]
                }))
            }

            let elements;
            elements = getElements(block)

            let maxHeight = 0;
            for (let i = 0; i < elements.length; ++i) {
                elements[i].removeAttribute("style")
                maxHeight = Math.max(maxHeight, elements[i].offsetHeight);
            }
            for (let i = 0; i < elements.length; ++i) {
                elements[i].style.height = maxHeight + "px";
            }

        }, ['resize'])
    },
    runByEvent: (callback, events) => {
        (callback)();
        events.map(e => {
            window.addEventListener(e, () => {
                callback();
            })
        })
    },
}
export default Handlers;