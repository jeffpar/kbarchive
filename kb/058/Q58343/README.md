---
layout: page
title: "Q58343: Windows 3.0 SYSTEM.INI &#91;nonwindowsapp&#93; Section"
permalink: /kb/058/Q58343/
---

## Q58343: Windows 3.0 SYSTEM.INI &#91;nonwindowsapp&#93; Section

{% raw %}

	Article: Q58343
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
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
	
	[NONWINDOWSAPP] SECTION
	-----------------------
	
	The [NonWindowsApp] section contains settings that affect the
	performance of non-Windows applications.
	
	The [NonWindowsApp] section can contain the following settings:
	
	------------------------------------------------------------
	ScreenLines=<number>
	Default: 25
	Purpose: Specifies the number of lines per screen that will be
	        displayed when a non-Windows application is run. An
	        application that specifies a different screen mode can
	        override this setting.
	To change: Use Notepad to edit the SYSTEM.INI file.
	------------------------------------------------------------
	SwapDisk=<drive-colon-directory>
	Default: (the Windows directory)
	Purpose: Provides the name of the disk drive and directory to which
	        Windows sends temporary files for applications in standard
	        mode.
	To change: Use Notepad to edit the SYSTEM.INI file.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	

{% endraw %}
