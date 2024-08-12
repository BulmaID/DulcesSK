import { CardBlog } from './CardBlog';
import HeaderCarrousel from './HeaderCarrousel';
import shoppingInitialState from '@/public/dataset/file';

function CarouselApp() {
  const carouselBlogs = [...shoppingInitialState, ...shoppingInitialState];

  return (
    <div className='App'>
      <HeaderCarrousel />
      <div className='container my-5'>
        <div className='overflow-hidden w-full'>
          <div className='flex animate-scroll'>
            {carouselBlogs.map((blog, index) => (
              <CardBlog blog={blog} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselApp;
