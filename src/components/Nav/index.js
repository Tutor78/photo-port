import React from 'react';

function Nav() {
    const categories = [
        {
            name: 'Commercial',
            description: 'Photos of grocery stores, food trucks, and other commercial projects'
        },
        {
            name:'Potraits',
            description: 'Portaits of people in my life'
        },
        {
            name: 'Food',
            description: 'Delicious delicacies'
        },
        {
            name: 'Landscape',
            description: 'Fields, farmhouses, waterfalls, and the beauty of nature'
        }
    ]

    function categorySelected(name) {
        console.log(`${name} clicked`);
    }

    return (
        <header className='flex-row'>
            <h2>
                <a href='/' data-testid="link" className='mx-2'>
                    <span role='img' aria-label='camera'>📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li>
                        <a href='#about' data-testid='about' className='mx-2'>
                            About Me
                        </a>
                    </li>
                    <li className='mx-2'>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className='mx-2'
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
        
    );
}

export default Nav;