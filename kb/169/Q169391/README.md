---
layout: page
title: "Q169391: Error Messages After Opening Add/Remove Programs"
permalink: kb/169/Q169391/
---

## Q169391: Error Messages After Opening Add/Remove Programs

	Article: Q169391
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbui
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may experience one or more of the following problems in Windows NT:
	
	- After you open Control Panel and click the Windows NT Setup tab in the
	  Add/Remove Programs properties window, an error message occurs. The error is
	  a small dialog box with a header information of "E". Inside the dialog box is
	  a red X and the letter S.
	
	- Internet Explorer 3.02 Setup may fail with the following error message:
	
	  Installation failed. An error occurred while trying to open the Ohrome.inf
	  file.
	
	- When you click the Appearance tab in the Display Properties window, no fonts
	  are available for text-based items. For example, if you click Active Title
	  Bar in the Item list, no fonts appear in the Font list.
	
	- When you click the Pointers tab in the Mouse Properties window, no schemes
	  are listed in the Scheme list.
	
	- When you attempt to add a SCSI device, you receive the following error
	  message:
	
	  Error occurred getting driver list from INF file Err=0.
	
	- When you try to install a device that uses an .inf file, nothing happens. For
	  example, when you try to configure a modem, nothing happens.
	
	- When you try to add a printer, you receive the following error message:
	
	  Printer operation cannot continue due to lack of resources.
	
	  Also, no printers are available.
	
	CAUSE
	=====
	
	These problems may occur for any of the following reasons:
	
	- Setupapi.dll is corrupted.
	
	- Setupapi.dll was replaced by a third-party version and is not functioning
	  properly with Windows NT.
	
	- The Plug and Play service is not set to an automatic startup type.
	
	RESOLUTION
	==========
	
	To resolve this problem, use the appropriate method:
	
	Expand Setupapi.dll File
	------------------------
	
	Expand the Setupapi.dll file from the Windows NT 4.0 CD-ROM. To do so:
	
	1. Make sure Control Panel is closed.
	
	2. In Windows NT Explorer or My Computer, rename Setupapi.dll to Setupapi.old.
	  Setupapi.dll is in the %SystemRoot%\System32 folder.
	
	3. Click the Start button, point to Programs, and then click Command Prompt.
	
	4. Go to the i386 folder on the Windows NT 4.0 compact disc.
	
	5. Type the following command to expand the compressed .dll file:
	
	  expand setupapi.dl_ %SystemRoot%\system32\setupapi.dll
	
	
	Configure the Plug and Play Service to an Automatic Startup Type
	----------------------------------------------------------------
	
	To do so, use the following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click the Plug And Play service, and verify that the Status is Started, and
	  that the Startup is Automatic. If they are not, configure them appropriately,
	  and then click OK.
	
	Additional query words: resources
	======================================================================
	Keywords          : kbui 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
