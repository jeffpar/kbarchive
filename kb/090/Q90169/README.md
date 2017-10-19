---
layout: page
title: "Q90169: WinLogin Err Msg: STFSETUP.INF Has Missing..."
permalink: /kb/090/Q90169/
---

## Q90169: WinLogin Err Msg: STFSETUP.INF Has Missing...

	Article: Q90169
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11; :1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft WinLogin, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the STFSETUP.INF file is corrupt or has an extra character in front of either
	the [SHELL COMMANDS] or [SOURCE MEDIA DESCRIPTIONS] sections, you will receive
	the error:
	
	  C:\MS-SETUP.T\STFSETUP.INF has missing or mis-formed
	  [Source Media Descriptions]
	
	This error can also be caused if either of these section names are missing from
	the file.
	
	RESOLUTION
	==========
	
	To correct this error, edit the file with the Windows Notepad and either delete
	the extra character(s) or add the missing section names as needed.
	
	MORE INFORMATION
	================
	
	This error appears at the first screen when first installing WinLogin. The
	ADMIN.WRI file that comes with WinLogin mentions editing this file to add
	customized options, such as adding filenames to the [FALLBACKFILES] section. It
	would be very possible to add a character in front of the [SHELL COMMANDS]
	section while editing this file.
	
	This information applies to version 1.0 of Microsoft WinLogin. For information
	about ordering Microsoft WinLogin, call the Microsoft Sales Information Center
	(MSIC) at (800) 426-9400, or mail the form supplied with the Windows Resource
	Kit (WRK) for the Microsoft Windows operating system version 3.1.
	
	Additional query words: 1.00 winlogin
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbWinLoginSearch kbZNotKeyword3 kbWin310 kbWin311 kbWinLogin100
	Version           : WINDOWS:3.1,3.11; :1.0
	
	=============================================================================
	
