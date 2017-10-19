---
layout: page
title: "Q90222: Printer Manager and Critical Errors Can Halt Servers"
permalink: /kb/090/Q90222/
---

## Q90222: Printer Manager and Critical Errors Can Halt Servers

	Article: Q90222
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are two known problems that can temporarily halt server operation in
	Windows for Workgroups.
	
	MORE INFORMATION
	================
	
	Print Manager Menus
	-------------------
	
	If you activate a menu in Print Manager on the server machine, all print jobs
	temporarily stop spooling. Once the menu is closed, spooling resumes. No other
	shared resources are affected.
	
	Critical Errors in MS-DOS or Windows
	------------------------------------
	
	Critical errors on the server machine, those that cause the system to halt until
	the error is resolved, stop all network communication. Critical errors in MS-DOS
	Prompt sessions and in Windows usually result in the options Abort, Retry or
	Fail. Once you respond to one of the options and the critical error has been
	resolved, all network communication will resume.
	
	If the server is also the browse-master for its workgroup, other users attempting
	to browse will notice a long delay before a connection or network settings
	dialog box appears.
	
	The server automatically ignores critical errors that happen on remote clients,
	and returns an appropriate error code to the client that encountered the error
	(Fail).
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
