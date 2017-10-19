---
layout: page
title: "Q70467: Windows Err Msg: Cannot Find KRNLxxx.EXE"
permalink: /kb/070/Q70467/
---

## Q70467: Windows Err Msg: Cannot Find KRNLxxx.EXE

	Article: Q70467
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11,95
	Operating System(s): 
	Keyword(s): win31 win95 win98
	Last Modified: 16-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may receive one of the following error messages when you try to start
	Windows or Windows for Workgroups:
	
	  Cannot find KRNL386.EXE
	
	  Cannot find KRNL286.EXE
	
	  Cannot find KRNL.EXE (version 3.0 only)
	
	  Cannot find or load required file KRNL386.EXE. The file was not found.
	
	CAUSE
	=====
	
	These messages indicate that Windows cannot find the kernel necessary to run 386
	enhanced, standard, or real mode (version 3.0 only). The kernel provides system
	services such as memory and resource management.
	
	This problem can also occur if the WIN386.EXE file is located in the Windows
	folder. This file is run by WIN.COM, causing Windows to belive the Windows
	folder is the Windows\System folder.
	
	RESOLUTION
	==========
	
	There are two methods for resolving this issue.
	
	If Windows 95/98 Was Not Installed/Uninstalled
	----------------------------------------------
	
	1. Boot with clean AUTOEXEC.BAT and CONFIG.SYS files.
	
	2. Make sure that your Windows directory is on your MS-DOS path.
	
	3. Make sure that your path statement does not contain more than 128 characters.
	
	4. Make sure that the correct kernel file indicated in the warning message
	  actually exists in your Windows SYSTEM subdirectory. If you are running a
	  shared copy of Windows, make sure the file is in the shared Windows
	  directory.
	
	5. Add the Windows SYSTEM subdirectory to your MS-DOS path.
	
	6. Make sure your MS-DOS version is compatible with your computer.
	
	7. If you are using a shared installation of Windows on a network server, make
	  sure that your personal Windows directory and the shared Windows directory
	  are on your MS-DOS path and are listed in that order.
	
	8. Ensure you don't have any upper memory block (UMB) conflicts. For more
	  information, query on the following words in the Microsoft Knowledge Base:
	
	  troubleshooting and emm386.exe 4.45
	
	9. Rebuild the SYSTEM.INI file.
	
	10. As a last resort, reinstall Windows.
	
	If Windows 95/98 Was Installed/Uninstalled
	------------------------------------------
	
	1. Remove the WIN386.EXE file from the Windows folder. If there is no WIN386.EXE
	  file in the Windows\System folder, move the file from the Windows folder to
	  the Windows\System folder.
	
	2. Restart the computer.
	
	3. If these steps do not solve the problem, use the steps in the "If Windows
	  95/98 Was Not Installed/Uninstalled" section.
	
	
	Additional query words: tshoot 3.00 3.0 3.00a 3.0a 3.10 3.1 3.11 kernel kernel286 kernel386 KRNL386 KRNL286 win31 wfw wfwg win95
	
	======================================================================
	Keywords          : win31 win95 win98 
	Technology        : kbAudDeveloper kbWin3xSearch kbWin95search kbWin98search kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311 kbWin98
	Version           : WINDOWS:3.0,3.0a,3.1,3.11,95
	Issue type        : kbprb
	
	=============================================================================
	
