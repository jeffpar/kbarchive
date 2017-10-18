---
layout: page
title: "Q90481: File Manager Err Msg: An Error Occurred Reading Drive x:"
permalink: kb/090/Q90481/
---

## Q90481: File Manager Err Msg: An Error Occurred Reading Drive x:

	Article: Q90481
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive the following error message while running Microsoft Windows for
	Workgroups File Manager for version 3.1:
	
	  Error occurred reading drive <x>:
	
	CAUSE
	=====
	
	If you receive this message, check the By File Type setting for invalid
	characters. You can access the By File Type dialog box by choosing By File Type
	from the View menu.
	
	NOTE: This does not apply to Microsoft Windows File Manager version 3.1.
	
	The By File Type dialog box permits invalid MS-DOS characters such as commas and
	square brackets. Using these as search characters returns an MS-DOS error to the
	File Manager and causes the error message above.
	
	WORKAROUND
	==========
	
	Type
	
	  *.*
	
	(asterisk-period-asterisk) in the By File Type dialog box.
	
	If this doesn't correct the problem, there is likely a true disk error.
	
	NOTE: The search string *,* (asterisk-comma-asterisk) can look like *.*
	(asterisk-period-asterisk) on a fuzzy monitor or in a small type face.
	
	Additional query words: 3.10 err msg
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
