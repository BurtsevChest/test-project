
// Типа сервис авторизации, просто юзанем localStorage

/**
 * Авторизован ли пользователь
 */
export const getAuth = async (userId: number) => {
    const user = localStorage.getItem('user');
    return user && user === `${userId}`;
}

/**
 * Авторизовать пользователя
 * @param userId 
 */
export const authUser = async (userId: number) {
    // some logic
}
