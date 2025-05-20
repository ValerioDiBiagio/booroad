export default function InstantSearchInput({ value, onChange, placeholder = 'Cerca...', className = '' }) {
  return <form className={`mb-4 d-flex justify-content-end align-items-center ${className}`} onSubmit={e => e.preventDefault()}>
    <input
      type='search'
      className='form-control w-25 me-2'
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      aria-label='Search'
    />
  </form>
};