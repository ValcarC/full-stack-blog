import React from 'react'
import Image from'../components/Image'
import { Link } from 'react-router-dom'
import PostMenuAction from '../components/PostMenuActions'
import Search from '../components/Search'

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>

      {/* Detail */}
      <div className='flex gap-8'>
        <div className='lg:w-3/5 flex flex-col gap-8'>
          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem tenetur cum quae quis. Repellendus optio deserunt numquam..</h1>
          <div className='flex items-center gap-2 text-gray-400 text-sm'>

          <span>Written By</span>
          <Link className='text-blue-800'>Jogn Doe</Link>
          <span>on</span>
          <Link className='text-blue-800'>Web Desing</Link>
          <span>2 days ago</span>

          </div>
          <p className='text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta, ea minus perspiciatis excepturi iste. Vero ut, ullam iure ratione autem necessitatibus nisi quisquam voluptas aliquid quia fuga hic excepturi.</p>
        </div>
        <div className='hidden lg:block w-2/5 '>
          <Image src='postImg.jpeg' className='rounded-2xl' w='600'/>
        </div>
      </div>

      {/* Content */}
      <div className='flex flex-col md:flex-row gap-12'>
        {/* Text */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maxime dolorum quaerat velit sed in sint quia ea, veritatis laborum, eveniet eius tempora similique voluptas laudantium. Sit sapiente eveniet maiores!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident maiores tempore atque hic beatae fuga fugiat soluta, magni iste pariatur, natus praesentium suscipit! Consequuntur aut sint in dolorem voluptas.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maxime dolorum quaerat velit sed in sint quia ea, veritatis laborum, eveniet eius tempora similique voluptas laudantium. Sit sapiente eveniet maiores!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident maiores tempore atque hic beatae fuga fugiat soluta, magni iste pariatur, natus praesentium suscipit! Consequuntur aut sint in dolorem voluptas.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maxime dolorum quaerat velit sed in sint quia ea, veritatis laborum, eveniet eius tempora similique voluptas laudantium. Sit sapiente eveniet maiores!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident maiores tempore atque hic beatae fuga fugiat soluta, magni iste pariatur, natus praesentium suscipit! Consequuntur aut sint in dolorem voluptas.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maxime dolorum quaerat velit sed in sint quia ea, veritatis laborum, eveniet eius tempora similique voluptas laudantium. Sit sapiente eveniet maiores!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident maiores tempore atque hic beatae fuga fugiat soluta, magni iste pariatur, natus praesentium suscipit! Consequuntur aut sint in dolorem voluptas.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maxime dolorum quaerat velit sed in sint quia ea, veritatis laborum, eveniet eius tempora similique voluptas laudantium. Sit sapiente eveniet maiores!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident maiores tempore atque hic beatae fuga fugiat soluta, magni iste pariatur, natus praesentium suscipit! Consequuntur aut sint in dolorem voluptas.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maxime dolorum quaerat velit sed in sint quia ea, veritatis laborum, eveniet eius tempora similique voluptas laudantium. Sit sapiente eveniet maiores!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident maiores tempore atque hic beatae fuga fugiat soluta, magni iste pariatur, natus praesentium suscipit! Consequuntur aut sint in dolorem voluptas.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maxime dolorum quaerat velit sed in sint quia ea, veritatis laborum, eveniet eius tempora similique voluptas laudantium. Sit sapiente eveniet maiores!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident maiores tempore atque hic beatae fuga fugiat soluta, magni iste pariatur, natus praesentium suscipit! Consequuntur aut sint in dolorem voluptas.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maxime dolorum quaerat velit sed in sint quia ea, veritatis laborum, eveniet eius tempora similique voluptas laudantium. Sit sapiente eveniet maiores!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident maiores tempore atque hic beatae fuga fugiat soluta, magni iste pariatur, natus praesentium suscipit! Consequuntur aut sint in dolorem voluptas.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maxime dolorum quaerat velit sed in sint quia ea, veritatis laborum, eveniet eius tempora similique voluptas laudantium. Sit sapiente eveniet maiores!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident maiores tempore atque hic beatae fuga fugiat soluta, magni iste pariatur, natus praesentium suscipit! Consequuntur aut sint in dolorem voluptas.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum maxime dolorum quaerat velit sed in sint quia ea, veritatis laborum, eveniet eius tempora similique voluptas laudantium. Sit sapiente eveniet maiores!.Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium provident maiores tempore atque hic beatae fuga fugiat soluta, magni iste pariatur, natus praesentium suscipit! Consequuntur aut sint in dolorem voluptas.
          </p>
   
        </div>
        {/* Menu */}
        <div className='px-4 h-max sticky top-8'>
          <h1 className='mb-4 text-sm font-medium'>Author</h1>
          <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-8'>
            <Image src='userImg.jpeg' className='w-12 h-12 rounded-full object-cover' w='48' h='48' />
            <Link className='text-blue-800'>John Doe</Link>
            </div>
            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempore veritatis ratione dolorem impedit odio adipisci nam, nesciunt architecto, expedita a temporibus iste similique! Cum officia illum rem perspiciatis explicabo.</p>
            <div className='flex gap-2'>
              <Link>
                <Image src='facebook.svg' />
              </Link>
              <Link>
                <Image src='instagram.svg' />
              </Link>
              </div>
          </div>
          <PostMenuAction />
          <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
          <div className='flex flex-col gap-2 text-sm'>
          <Link className='underline'>All</Link>
          <Link to='/' className='underline'>
          Web Design
          </Link>
          <Link to='/' className='underline'>
          Development
          </Link>
          <Link to='/' className='underline'>
          Databases
          </Link>
          <Link to='/' className='underline'>
          Search Engines
          </Link>
          <Link to='/' className='underline'>
          Marketing
          </Link>
          </div>
          <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
          <Search />
        </div>
      </div>
      
    </div>
  )
}

export default SinglePostPage
