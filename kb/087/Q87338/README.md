---
layout: page
title: "Q87338: PRB: Font Files Not Found by Chinese Windows 3.0 Setup"
permalink: kb/087/Q87338/
---

## Q87338: PRB: Font Files Not Found by Chinese Windows 3.0 Setup

	Article: Q87338
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Far East Software Development Kit (FESDK) for Windows version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During the process of installing the Chinese version of Microsoft Windows 3.0
	from the Far East Software Development Kit (FESDK) CD-ROM (compact- disk
	read-only memory), the Setup program requests the Chinese Windows 3.0 Setup disk
	#5 and displays an error message that it cannot find some font files.
	
	CAUSE
	=====
	
	The active code page in the system is not code page 437. Some font files
	available in the English version of Windows 3.0 for other code pages are not
	available in Chinese Windows.
	
	RESOLUTION
	==========
	
	There are two methods to work around this problem:
	
	- Exit from the Setup program to MS-DOS. Change the active code page to code
	  page 437. Then run Setup again.
	
	  -or-
	
	- Because the font files are available in the English version of Windows 3.0,
	  copy the font (FON) files from the Setup disks to an empty disk. Provide this
	  disk when the Chinese Windows Setup program prompts for Setup disk #5.
	
	MORE INFORMATION
	================
	
	The MS-DOS MODE command provides information about the active code page, the
	hardware code page, and any prepared code pages in the system. If the active
	code page is 437, the Chinese Windows 3.0 Setup program should run without
	problems. Otherwise, either the hardware code page or one of the prepared code
	pages must be 437. While most machines have hardware code page 437, some do not.
	If code page 437 is available in hardware, issue the following MS-DOS command to
	switch to code page 437:
	
	  CHCP 437
	
	Otherwise, it is necessary to modify the CONFIG.SYS and AUTOEXEC.BAT files to
	load the appropriate display driver and install code page 437. Then issue the
	CHCP command to switch to the loaded code page. For more information, refer to
	the "MS-DOS User's Guide and Reference" manual.
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSDKSearch kbSDKFESearch kbWinSDKSearch kbSDKFE310
	Version           : :3.1
	Issue type        : kbprb
	
	=============================================================================
	
