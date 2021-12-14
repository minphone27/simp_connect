function normalizePozition(event, menu){
    const scope = document.querySelector('body');
    const { clientX: mouseX, clientY: mouseY} = event;
    let {
        left: scopeOffsetX,
        top: scopeOffsetY,
    } = scope.getBoundingClientRect();
    
    scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
    scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;
    
    const scopeX = mouseX - scopeOffsetX;
    const scopeY = mouseY - scopeOffsetY;

    //  check if the element will go out of bounds
    const outOfBoundsOnX =
        scopeX + menu.clientWidth > scope.clientWidth;

    const outOfBoundsOnY =
        scopeY + menu.clientHeight > scope.clientHeight;

    let normalizedX = mouseX;
    let normalizedY = mouseY;

    //  normalize on X
    if (outOfBoundsOnX) {
        normalizedX =
        scopeOffsetX + scope.clientWidth - menu.clientWidth;
    }

    //  normalize on Y
    if (outOfBoundsOnY) {
        normalizedY =
        scopeOffsetY + scope.clientHeight - menu.clientHeight;
    }

    return { normalizedX, normalizedY };
}

function showContextMenu(event, menu){
    const { normalizedX, normalizedY } = normalizePozition(event, menu); 
    menu.style.top = `${normalizedX}px`
    menu.style.left = `${normalizedY}px`
}

export default showContextMenu;