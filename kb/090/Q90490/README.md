---
layout: page
title: "Q90490: WFWG Err Msg: An Error Occurred While Trying to Reconnect..."
permalink: kb/090/Q90490/
---

## Q90490: WFWG Err Msg: An Error Occurred While Trying to Reconnect...

	Article: Q90490
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start or exit Windows for Workgroups, the following error message may
	be displayed:
	
	  An error occurred while trying to reconnect (local identifier) to (shared
	  resource) SYSXXXX.
	
	This error may occur more than once, and may reference the same or different
	shares.
	
	WORKAROUND
	==========
	
	Information for persistent connections is stored in the CONNECT.DAT file. In
	certain circumstances, this file may become damaged (that is, when switching
	between MS-DOS and Windows level connectivity). You may delete this file to
	correct this problem.
	
	NOTE: You will have to reestablish any persistent connections using File Manager,
	Print Manager, and/or NET.EXE (both shares you are connecting to, and resources
	you are sharing).
	
	
	For further information on the SYSXXXX-type error messages, query on the
	following words in the Microsoft Knowledge Base:
	
	  wfwg and error and codes and sys
	
	Additional query words: 3.10 3.11 err msg sys0053 sys 0053
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
