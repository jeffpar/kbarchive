---
layout: page
title: "Q88099: INI File Sizes Become 0 Bytes After Starting WinLogin"
permalink: /kb/088/Q88099/
---

## Q88099: INI File Sizes Become 0 Bytes After Starting WinLogin

	Article: Q88099
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In WinLogin 1.0, if the fallbackdir= entry in the [WINLOGIN] section of the
	WINLOGIN.INI file is incorrectly set to the Windows directory, .INI files in the
	WINDOWS directory may become 0 bytes in size.
	
	The fallbackdir= entry should be set to the Windows \FALLBACK subdirectory.
	
	MORE INFORMATION
	================
	
	If problems occur when running the WinLogin Client software and the .INI files
	in the WINDOWS directory have become 0 bytes, the fallbackdir= line in the
	[WINLOGIN] section of the WINLOGIN.INI may be set incorrectly. It should NOT be
	set to the local WINDOWS directory. Instead, it should be set to
	WINDOWS\FALLBACK or any other directory that did not already contain the .INI
	files listed in the WLMERGE.INI file.
	
	Edit WINLOGIN.INI and set fallbackdir= correctly,then replace the lost .INI files
	with backup copies, provided they are available.
	
	This information applies to version 1.0 of Microsoft WinLogin. For information
	about ordering Microsoft WinLogin, call the Microsoft Sales Information Center
	(MSIC) at (800) 426-9400, or mail the form supplied with the Windows Resource
	Kit (WRK) for the Microsoft Windows operating system version 3.1.
	
	Additional query words: 1.00 1.0 3.10 3.1 LAN Manager LANman remove novell network share winlog
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
