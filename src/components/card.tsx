import { type Listing } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

function Card({ listing }: { listing: Listing }) {
  return (
    <div className="card max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-700">
      <div className="relative h-32 w-full">
        <Image className="object-cover" src="/shoe.png" alt="" fill />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {listing.name} - ${listing.price}
          </h5>
        </a>
        <p className="mb-3 h-20 font-normal text-gray-700 dark:text-gray-400">
          {listing.description}
        </p>
        <Link href={`/listings/${listing.id}`} passHref>
          <a className="btn btn-primary">View</a>
        </Link>
      </div>
    </div>
  );
}

export default Card