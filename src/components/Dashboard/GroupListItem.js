import React from 'react'
import {IoExitOutline} from 'react-icons/io5'
import {AiOutlineStar,AiFillStar} from 'react-icons/ai'
import SubscriptionType from './SubscriptionType'
import {AiOutlineSetting} from 'react-icons/ai'
import {MdPersonAddAlt} from 'react-icons/md'

export default function GroupListItem({name, email,imagePath,joinDate, isCreated,isSelected,handleRowSelect}) {

    // console.log("isSelected---",isSelected);

    const [isFavourite, setIsFavourite] = React.useState(false);
    const handleFavoriteClick = () => {
        setIsFavourite(!isFavourite);
    }
    
  return (
    <>
       
   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td className="w-4 p-4">
            <div className="flex items-center">
              <input  id="checkbox-table-search-2" type="checkbox" checked={isSelected}  onChange={() => handleRowSelect(email)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
            </div>
          </td>
          <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <img className="w-10 h-10 rounded-full" src={imagePath} alt={name+" image"} />
            <div className="pl-3">
              <div className="text-base font-semibold">{name}</div>
              <div className="font-normal text-gray-500">{email}</div>
            </div>
          </th>
          <td className="px-6 py-4">
            {joinDate}
          </td>
          <td className="px-6 py-4">
            <SubscriptionType/>
          </td>

          <td className="px-6 py-4">
  <div className="flex items-center justify-end space-x-2">
    {isCreated && <AiOutlineSetting  className="w-7 h-7 p-1  rounded-full cursor-pointer" onClick={() => {}} title="Settings" />}
    {isCreated && <MdPersonAddAlt className="w-7 h-7 p-1  rounded-full cursor-pointer" onClick={() => {}} title="Add Person" />}
    <IoExitOutline className="w-7 h-7 p-1  rounded-full cursor-pointer" onClick={() => {}} title="Exit" />
    {isFavourite?(<AiFillStar className="w-7 h-7 p-1  rounded-full cursor-pointer" onClick={handleFavoriteClick} title="Remove from Favorites" />): (<AiOutlineStar className="w-7 h-7 p-1  rounded-full cursor-pointer" onClick={handleFavoriteClick} title="Add to Favorites" />)}
  </div>
</td>





          
        </tr>
      
    </>
  )
}