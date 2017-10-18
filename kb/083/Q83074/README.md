---
layout: page
title: "Q83074: During Setup, Windows 3.1 Fails to Start Standard-Mode Windows"
permalink: kb/083/Q83074/
---

## Q83074: During Setup, Windows 3.1 Fails to Start Standard-Mode Windows

	Article: Q83074
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Under the Microsoft Windows version 3.1 Setup program, when the MS-DOS section
	of Setup is completed, Setup starts Windows in standard mode. Standard mode is
	executed to complete the graphical portion of the setup process. While trying to
	enter standard mode, Windows may fail to start. The Setup program will then stop
	responding (hang).
	
	This article covers some reasons Setup may fail to start standard-mode Windows.
	
	MORE INFORMATION
	================
	
	Reasons Windows 3.1 Setup May Fail to Start Standard-Mode Windows
	-----------------------------------------------------------------
	
	1. Incorrect hardware options may have been selected. Run a custom setup and
	  ensure the descriptions of hardware and software in the System Information
	  screen match the system.
	
	2. The standard-mode (protected-mode) memory manager DOSX.EXE is incompatible
	  with an expanded-memory-specification (EMS) or upper-memory-block (UMB)
	  provider. Remove any EMS or UMB provider.
	
	3. An incorrect display driver may have been selected. The BOOTLOG.TXT file
	  should indicate that the display driver failed its initialization. Windows
	  may succeed in starting, but then show a jumbled display. This sometimes
	  indicates that the driver is working properly, but that the monitor cannot
	  synchronize to the vertical/horizontal scan rates required for that
	  particular display mode.
	
	4. Check for the existence of the following three files in the Windows SYSTEM
	  subdirectory:
	
	   - SETUP.EXE
	
	   - WIN.INI
	
	   - SYSTEM.INI.
	
	  If any of these files exist in the SYSTEM subdirectory, they should be
	  deleted.
	
	Additional query words: tshoot 3.10 lock locks up boot standard mode protected
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
