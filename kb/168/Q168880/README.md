---
layout: page
title: "Q168880: Mastering Web Development Does Not Run On Windows NT 3.51"
permalink: /kb/168/Q168880/
---

## Q168880: Mastering Web Development Does Not Run On Windows NT 3.51

	Article: Q168880
	Product(s): Microsoft Mastering Series
	Version(s): WINDOWS:1.0; winnt:3.51
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbinterop kbsetup
	Last Modified: 09-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Microsoft Mastering Web Site Development, version 1.0 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Mastering program listed at the top of this
	article, you will receive the following message:
	
	  MWD.EXE - Ordinal not found
	  The ordinal 421 could not be located in the Dynamic Link Library
	  Oleaut32.dll
	
	Followed by:
	
	  MWD.EXE - Application Error
	  The application failed to initialize properly (0xc0000138)
	  Click OK to terminate the application
	
	CAUSE
	=====
	
	Mastering Web Development will not run on Windows NT Workstation version 3.51.
	This program requires Windows 95 or Windows NT Workstation version 4.0 or later.
	
	RESOLUTION
	==========
	
	If the program listed at the top of this article has been installed on a system
	running Windows NT Workstation version 3.51 or earlier, you need to remove the
	program by manually deleting the directory and files installed by the Mastering
	program.
	
	The Uninstall program included with Mastering Web Development will not function
	correctly in Windows NT Workstation 3.51.
	
	Additional query words: multi multi-media mm media 1.00
	
	======================================================================
	Keywords          : kbenv kberrmsg kbinterop kbsetup 
	Technology        : kbMSPressSearch kbOSWinSearch kbOSWinNT351 kbOSWinNTSearch
	Version           : WINDOWS:1.0; winnt:3.51
	
	=============================================================================
	
