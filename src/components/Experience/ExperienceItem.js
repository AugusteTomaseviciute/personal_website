import React from 'react';
import FullPage from '../../components/FullPage';

export default ({
	date,
	title,
	company,
	description = [],
	// skills= [],
}) => {
	return (
		<FullPage>
			<div>
				<h5 className='date'>{date}</h5>
				<h3 className='title'>{title}</h3>
				<h4 className='company'><span>@</span>{company}</h4>
				<ul>
					{description.map((item, key) => <li key={key}>{item}</li>)}
				</ul>
				{/*TODO figure out how display skills*/}
				{/*{skills.map((skill, key) => <span key={key} className='skill'>{skill}</span>)}*/}
			</div>
		</FullPage>
	);
};