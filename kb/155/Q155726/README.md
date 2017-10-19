---
layout: page
title: "Q155726: Scivdd.dll Generates Error Messages at Windows NT Startup"
permalink: /kb/155/Q155726/
---

## Q155726: Scivdd.dll Generates Error Messages at Windows NT Startup

	Article: Q155726
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After installing Windows NT 4.0 on a Toshiba laptop computer, you may receive
	error messages involving the Scivdd.dll file when you start your computer. These
	error messages may be similar to:
	
	  X m. An installable Virtual Device Driver Failed Dll initialization.
	
	  16 bit Windows Subsystem
	  Hidden Console of WOW VDM
	  An installable Virtual Device Driver failed Dll initialization. Choose 'Close'
	  to terminate the application.
	
	CAUSE
	=====
	
	This problem can occur if you installed Windows NT in any folder other than the
	<drive>:\Winnt folder when you install the Toshiba utilities. The problem
	is caused by the SCI drivers. The Advanced Power Management (APM) subsystem from
	Toshiba by itself does not cause the problem.
	
	The SCI drivers are used by the 16-bit utilities that allow you to modify the
	BIOS settings. The 16-bit utilities that require the Scivdd.dll file are the
	Toshiba Hardware Setup and Max Time Manager utilities.
	
	You can avoid installing the SCI drivers during Setup by clicking cancel for the
	SCI drivers installation during the Toshiba utilities installation process.
	
	The problem occurs because the Scivdd.dll file is hard coded to look for other
	DLLs in the Winnt\System32 folder. When they are not found, the DLL does not
	load and you receive the error message.
	
	
	RESOLUTION
	==========
	
	Contact Toshiba for more information regarding this product.
	
	A possible workaround is to create a <drive>:\Winnt folder and copy all the
	SCI related DLLs to this folder in the same structure.
	
	MORE INFORMATION
	================
	
	This problem can affect all 16-bit programs run under Windows NT. This includes
	not only character-based programs, but 16-bit Windows-based programs as well.
	
	The third-party product discussed in this article is manufactured by a vendor
	independent of Microsoft; we make no warranty, implied or other- wise, regarding
	this product's performance or reliability.
	
	Additional query words: prodnt winnt
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
