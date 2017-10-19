---
layout: page
title: "Q107473: WFWG 3.11 Err Msg: Access Denied"
permalink: /kb/107/Q107473/
---

## Q107473: WFWG 3.11 Err Msg: Access Denied

	Article: Q107473
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive one of the following error messages when you try to copy files
	when 32-bit file access enabled:
	
	- Access Denied
	
	  -or-
	
	- Sharing Violation
	
	CAUSE
	=====
	
	These errors may occur when you are using 32-bit file access and trying to copy
	files in Microsoft Windows for Workgroups, especially if there is a low-memory
	situation. These errors occur because 32-bit file access is not handling the
	error messages correctly.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Disable 32-bit file access.
	
	  -or-
	
	- Increase the amount of memory available to Windows.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows for Workgroups
	version 3.11. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 3.11 error message insufficient memory access is denied
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
