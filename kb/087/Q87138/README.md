---
layout: page
title: "Q87138: Core Technologies CNT-MCK Disk Controllers with Windows"
permalink: /kb/087/Q87138/
---

## Q87138: Core Technologies CNT-MCK Disk Controllers with Windows

	Article: Q87138
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are using Windows version 3.0 and a Core Technologies Busmaster CNT-MCK
	Disk Controller with ROM version 2.08 or 2.11, the file BPPARMS.SYS must be
	present and referenced in the CONFIG.SYS file. The first line in the CONFIG.SYS
	file should read as follows:
	
	      DEVICE=x:\BPPARMS.SYS /M /R
	
	If you are using Windows version 3.1, ROM version 2.11 is necessary and the
	DEVICE=BPPARMS.SYS line is not required.
	
	MORE INFORMATION
	================
	
	With ROM version 2.08, even with the BPPARMS.SYS driver, EMM386 cannot be used.
	If EMM386 is used, trying to run Windows 3.0 in 386 enhanced mode will lock the
	system or return you the MS-DOS command prompt. ROM version 2.11 for the
	controller corrects this problem.
	
	The driver can be downloaded from Core Technologies BBS at (407) 241-2929 or by
	contacting Core Technologies technical support at (407) 997-6033.
	
	Additional query words: 3.00 3.10 hang crashes crash hangs stops freezes freeze 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
