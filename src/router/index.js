import HelloWorld from '../views/HelloWorld';
import Test from '../views/Test';
import List from '../views/List'

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
    },
    {
    path: '/list',
    name: 'Liste',
    component: List
    }
]