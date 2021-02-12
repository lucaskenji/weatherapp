import React from 'react';

function SearchForm(props) {
	return (
		<div id='search-form' className='fades-in'>
			<div>
				<form onSubmit={props.fetchData}>
					<div className='error-message'>{props.errorMessage}</div>
					<input type='text' placeholder='Type a location...' name='location_name' className='search-bar' />
					<button type='submit' className='submit-btn'>Search</button>
					
					<div id='my-info'>
						<a target='blank' rel="noopener noreferrer" href='https://github.com/lucaskenji'>my github</a> / <a target='blank' rel="noopener noreferrer" href='https://www.theodinproject.com'>the odin project</a>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SearchForm;