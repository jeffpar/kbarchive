---
layout: page
title: "Q245090: Err Msg: The Procedure Entry Point Netuio_isdbcs Could Not..."
permalink: /kb/245/Q245090/
---

## Q245090: Err Msg: The Procedure Entry Point Netuio_isdbcs Could Not...

	Article: Q245090
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start User Manager on a computer running Microsoft Windows NT Server
	3.51, you may receive the following error message:
	
	  The procedure entry point netuio_isdbcs could not be located in the dynamic
	  link library netuio.dll
	
	When you start Server Manager, you may receive a similar error message for the
	Msvcrt.dll file.
	
	CAUSE
	=====
	
	This behavior can occur if you have the client version of Server Tools installed
	on the computer.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove the client version of Server Tools, and then
	install the server version of Server Tools on the Windows NT 3.51-based
	computer.
	
	Additional query words: msvcrt.dll
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Issue type        : kbprb
	
	=============================================================================
	
