---
layout: page
title: "Q81683: PC Guardian: Known Incompatibilities with Windows 3.1"
permalink: /kb/081/Q81683/
---

## Q81683: PC Guardian: Known Incompatibilities with Windows 3.1

	Article: Q81683
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	PC Guardian is not fully compatible with Microsoft Windows. There are three
	known incompatibilities:
	
	- The program authentication module of Virus Protection detects any changes
	  made to .COM or .EXE files. This mode of PC Guardian causes the Windows Setup
	  program to stop (hang).
	
	- If Windows is successfully installed, it isn't able to run successfully in
	  enhanced mode.
	
	- The virus protection module of PC Guardian has a utility called SUSPMSW.EXE.
	  This utility attempts to lock the keyboard in Windows after a preset time
	  period. When SUSPMSW.EXE is executed, it causes Windows to enter a continuous
	  loop of Cancel/Retry error messages, effectively hanging Windows.
	
	MORE INFORMATION
	================
	
	The following are a few of the PC Guardian terminate-and-stay-resident (TSR)
	programs that can cause problems with Windows 3.1.
	
	  Files
	  -----
	
	  LOGON.SYS
	  SUSPEND.SYS
	  AUTHORIZ.SYS
	  XLGUARD.SYS
	
	WARNING: Do not remove these TSRs from the CONFIG.SYS file manually. To remove PC
	Guardian, run the PC Guardian uninstall routines. Failure to do so may result in
	lost files.
	
	The PC Guardian product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3rdParty win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
