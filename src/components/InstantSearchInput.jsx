export default function InstantSearchInput({ value, onChange, title, placeholder = 'Cerca...', className = '' }) {
  return <form className={`mt-3 mb-4 d-flex justify-content-between align-items-center ${className}`} onSubmit={e => e.preventDefault()}>
    <h2 className='mt-3 p-0'><strong> {title}: </strong></h2>
    <input
      type='search'
      className='form-control w-25'
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      aria-label='Search'
    />
  </form>
};