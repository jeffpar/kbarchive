---
layout: page
title: "Q58344: Windows 3.0 SYSTEM.INI &#91;standard&#93; Section"
permalink: /kb/058/Q58344/
---

## Q58344: Windows 3.0 SYSTEM.INI &#91;standard&#93; Section

	Article: Q58344
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information is contained in the Microsoft Windows version 3.0
	SYSINI.TXT readme file. The Windows Setup program copies this file to the
	Windows 3.0 directory.
	
	MORE INFORMATION
	================
	
	[STANDARD] SECTION
	------------------
	
	The [standard] section contains settings that are specific to running
	Windows applications in standard mode.
	
	The [standard] section can contain the following settings:
	
	----------------------------------------------------------------------
	Int28Filter=<number>
	Default: 10
	Purpose: Specifies how many INT28 messages that Windows should reflect
	        from standard mode to real mode. Windows will reflect every
	        nth message, where n is the value of this setting. Increasing
	        this value may reduce Windows' interference with background
	        communications.
	To change: Use Notepad to edit the SYSTEM.INI file.
	----------------------------------------------------------------------
	NetHeapSize=<kilobytes>
	Default: 8
	Purpose: Specifies the size (in kilobytes) of the buffers that
	        standard-mode Windows allocates in conventional memory for
	        transferring data over a network. Some networks require a
	        larger buffer than the default. Increasing this value will
	        diminish the amount of memory available to applications.
	To change: Use Notepad to edit the SYSTEM.INI file.
	------------------------------------------------------------
	ReserveLowMemory=<kilobytes>
	Default: 0
	Purpose: Specifies the amount of conventional memory to be reserved
	        for use by something other than Windows running in standard
	        mode.
	To change: Use Notepad to edit the SYSTEM.INI file.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
