import React from 'react';

import Navbar from '../Navbar/Navbar.js';

export const MainLayout = ({ content }) => (
	<div className="main-layout">
		<Navbar> </Navbar>
		{content}
	</div>
)