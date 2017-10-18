---
layout: page
title: "Q73797: Windows Hangs if Coprocessor Is Incorrectly Reported"
permalink: kb/073/Q73797/
---

## Q73797: Windows Hangs if Coprocessor Is Incorrectly Reported

	Article: Q73797
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If a system board DIP switch setting(s) reports a coprocessor is installed and
	none is present, Windows 3.0 may stop responding (hang) when you insert Disk 2
	during setup. (Disk 3 if installing Windows 3.1.) If Windows has already been
	installed, it may hang on the opening graphic screen when executed.
	
	MORE INFORMATION
	================
	
	All 8086/8088 (PC/XT class) machines and many clone 80286, 80386 (AT class and
	above) machines use system board DIP switch settings to indicate the presence of
	a coprocessor. If the system board switches indicate to system BIOS that a
	coprocessor is installed and none is present, Windows may hang when you insert
	Disk 2 (or disk 3 with version 3.1). If Windows has been previously installed
	and is working before the switch setting is incorrectly changed, it may now hang
	on the opening graphic screen when executed.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.1 3.10 3.11 3rdparty KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
