---
layout: page
title: "Q91152: WFWG Err Msg: One or More Files Could Not Be Found that..."
permalink: /kb/091/Q91152/
---

## Q91152: WFWG Err Msg: One or More Files Could Not Be Found that...

	Article: Q91152
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you perform a network installation of Windows for Workgroups (using the SETUP
	/N command), the following error message may be displayed when you attempt to
	start Windows for Workgroups:
	
	  One or more files could not be found that were needed to start Windows in
	  enhanced or standard mode.
	
	With a local installation, you would get a list of files that it could not find,
	but in this case the list is empty.
	
	CAUSE
	=====
	
	This message occurs when a network connection to the shared Windows for
	Workgroups directory has not been established, and WIN.COM cannot find the files
	it needs to start Windows for Workgroups.
	
	RESOLUTION
	==========
	
	To solve this problem, start the redirector, log on, and connect to the server
	containing the shared Windows for Workgroups directory.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
