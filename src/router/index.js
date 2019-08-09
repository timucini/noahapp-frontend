import HelloWorld from '../views/HelloWorld';
import Test from '../views/Test';

//routes
export default [
{   
    path: '/',
    name: 'Hello',
    component: HelloWorld,
    },
    {
    path: '/test',
    name: 'Test',
    component: Test
    }
]