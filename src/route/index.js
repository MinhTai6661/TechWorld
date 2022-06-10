import { HomePage, ContactPage } from '~/page';
import { DefaultLayout } from '~/layout';
const publicRoute = [
    { path: '/', component: HomePage, layout: DefaultLayout },
    { path: '/contact', component: ContactPage, layout: DefaultLayout },
];

const privateRoute = [];
export { publicRoute, privateRoute };
