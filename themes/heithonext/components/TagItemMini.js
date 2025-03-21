import Link from 'next/link'

const TagItemMini = ({ tag, selected = false }) => {
  return (
    <Link
      key={tag}
      href={selected ? '/' : `/tag/${encodeURIComponent(tag.name)}`}
      passHref
      className={`cursor-pointer inline-block rounded hover:bg-gray-500 hover:text-white duration-200
        mr-2 py-0.5 px-1 text-xs whitespace-nowrap dark:hover:text-white
         ${
           selected
             ? 'text-white dark:text-gray-300 bg-black dark:bg-black dark:hover:bg-gray-900'
             : `text-gray-600 hover:shadow-xl dark:border-gray-400 notion-${tag.color}_background dark:bg-red-950`
         }`}>
      <div className='font-light dark:text-red-300'>
        {selected && <i className='fas fa-tag mr-1' />}{' '}
        {tag.name + (tag.count ? `(${tag.count})` : '')}{' '}
      </div>
    </Link>
  )
}

export default TagItemMini
