---
layout: page
title: "Q113283: WFWG Err Msg: Schedule+ Has Not Been Installed on Your Mail..."
permalink: kb/113/Q113283/
---

## Q113283: WFWG Err Msg: Schedule+ Has Not Been Installed on Your Mail...

	Article: Q113283
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Microsoft Windows for Workgroups Schedule+ or choose Work Online
	from the File menu, the following error message occurs:
	
	  Schedule+ has not been installed on your mail server. Contact your system
	  administrator.
	
	  Do you want to work offline?
	
	CAUSE
	=====
	
	You may receive the above error message when Schedule+ tries to go online and no
	CAL subdirectory exists on the post office.
	
	RESOLUTION
	==========
	
	To correct this problem, create a directory called CAL under the post office
	directory on the post office machine. The Workgroups post office directory name
	is WGPO by default.
	
	Additional query words: 3.10 3.1 3.11 plus + error on-line off-line
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
