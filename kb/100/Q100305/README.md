---
layout: page
title: "Q100305: DOCERR: Incomplete Description of SetErrorMode() Function"
permalink: kb/100/Q100305/
---

## Q100305: DOCERR: Incomplete Description of SetErrorMode() Function

	Article: Q100305
	Product(s): Windows for Workgroups and Windows NT Networking Issues
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The description of the SetErrorMode() API does not list the flag to reset the
	default behavior of Windows; that is, to display all the error message boxes.
	
	MORE INFORMATION
	================
	
	On page 840, the Microsoft Windows Software Development Kit (SDK) "Programmer's
	Reference, Volume 2: Functions" manual for version 3.1 lists the following three
	flags for the SetErrorMode function:
	
	     SEM_FAILCRITICALERRORS
	
	     SEM_NOGPFAULTERRORBOX
	
	     SEM_NOOPENFILEERRORBOX
	
	These flags can be combined to prevent the display of message boxes for critical
	error faults, general protection (GP) faults, and file-not-found errors,
	respectively. However, the SetErrorMode() API description doesn't list the
	default flag that is used to display all the error message boxes.
	
	To allow the SetErrorMode() API to display all error message boxes, pass a zero
	as the fuErrorMode parameter.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
