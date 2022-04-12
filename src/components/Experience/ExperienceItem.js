import React from 'react';

export default ({
	date,
	title,
	company,
	description = [],
	skills= [],
}) => {
	return (
		<div className='experienceItem' >
			<h5 className='date'>{date}</h5>
			<h3 className='title'>{title}</h3>
			<h4 className='company'>{company}</h4>
			<ul>
				{description.map((item, key) => <li key={key}>{item}</li>)}
			</ul>
			{skills.map((skill, key) => <span key={key} className='skill'>{skill}</span>)}
		</div>
	);
};