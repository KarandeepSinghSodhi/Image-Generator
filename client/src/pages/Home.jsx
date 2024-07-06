import React,{useState,useEffect} from 'react'
import {Loader, Card, FormField } from '../components';

const RenderCards=({data,title})=>{
    if(data?.length>0)
         return data.map((post)=><Card key={post._id}{...post}></Card>)
    return (
        <h2 classname="mt-5 font-bolt">{title}</h2>
    )
}

const Home = () => {
    const[loading,setLoading]=useState(false);
    const[allPosts, setAllPosts]=useState(null);
    const[searchText, setSearchText]= useState('');
  return (
    <section className="max-w-7xl mx-auto">
        <div>
            <h1 className="font-extrabolt text-[32px]">
                The Community Showcase
            </h1>
            <p className="mt-2 text-[#666e75] text-[14px] max-w-500px">
                Browse through a collection of imaginative and visually stunning images generated using DELL-E AI
            </p>
        </div>
        <div className="mt-16" >
           <FormField/>
        </div>
        <div className="mt-10" >
            {loading?(
                <div className="flex justify-center items-center">
                    <Loader>

                    </Loader>
                </div>
            ):(
                <>
                    {searchText && (
                        <h2 className="font-medium text-xl mb-3">
                            Showing results for <span>{searchText}</span>
                        </h2>
                    )}
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap=3'>
                        {searchText?(
                            <RenderCards data={[]} title="nosearchresult">
                                
                            </RenderCards>
                        ):(
                            <RenderCards data={[]} title="No posts found">

                            </RenderCards>
                        )}

                    </div>

                </>
            )}
        </div>
    </section>
  )
}

export default Home
