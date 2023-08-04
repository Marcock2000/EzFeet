import { type Listing } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";

function Card({ listing }: { listing: Listing }) {
  return (
      
    <div className="card lg:card-side bg-base-100 shadow-xl w-3/4  h-1/2" style={{ maxHeight: '40vh' }}> 
    <figure className= "lg: w-1/3" >
       <img src={listing.imageUrl} alt="Movie" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

    </figure>
    <div className="card-body font-serif ">

   
    <h2 className="font-serif text-right ">{listing.createdAt.toDateString()}</h2>
    <h2 className="card-title font-serif ">{listing.name}</h2>

    <p className="font-serif ">{listing.price} $</p>
    <p className="font-serif ">{listing.description} </p>


    <div className="card-actions justify-end">
            
        <Link legacyBehavior href={`/listings/${listing.id}`} passHref>
          <a className="btn btn-primary font-serif">Contact Seller</a>
        </Link>
    </div>
  </div>
    

      </div>
  );
}





const Home: NextPage = () => {
  const listings = api.listings.list.useQuery();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-screen flex-col gap-12">
        <h1 className="mt-12 pl-4 text-2xl text-white font-serif text-justify">Selling your feet pics can't get any easier</h1>
        <div className="flex flex-col gap-4 overflow-y-auto items-center" >
          {listings?.data?.map((listing) => (
            <Card key={listing.id} listing={listing} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;




