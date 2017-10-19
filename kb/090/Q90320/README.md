---
layout: page
title: "Q90320: How To: File Handles Open When WFWG Server Is Down"
permalink: /kb/090/Q90320/
---

## Q90320: How To: File Handles Open When WFWG Server Is Down

	Article: Q90320
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a server from which you are editing a file (for example, a Word for Windows
	document) is restarted, the file handle(s) associated with the open file(s) will
	no longer be valid. If this happens, you may not be able to continue editing the
	file(s), and you will not be able to save them.
	
	The error message you receive when attempting to edit or save the file(s) after
	the server is restarted may not accurately indicate the problem. The wording for
	the error message is not consistent from one application to another.
	
	WORKAROUND
	==========
	
	The only solution is to save a copy of the file to a directory on your computer,
	and edit it from there.
	
	Additional query words: 3.10 3.11 re-started re-booted rebooted
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	
	=============================================================================
	
