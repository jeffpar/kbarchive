---
layout: page
title: "Q79894: QWINFIX, QEMM 6.0 and Enhanced Mode Windows"
permalink: /kb/079/Q79894/
---

## Q79894: QWINFIX, QEMM 6.0 and Enhanced Mode Windows

{% raw %}

	Article: Q79894
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When Microsoft Windows is running in 386 enhanced mode on a machine using QEMM
	version 6.0 as the memory manager, Windows may display the logo screen and then
	abort with an error message stating:
	
	  To run Windows enhanced mode, run QWINFIX before running Windows again.
	
	WORKAROUND
	==========
	
	To eliminate this error message and allow Windows to function properly in
	enhanced mode, use the current version of HIMEM.SYS as the memory manager
	(instead of QEMM386.SYS).
	
	MORE INFORMATION
	================
	
	QWINFIX is a utility provided by Quarterdeck Office Systems in conjunction with
	the Quarterdeck Expanded Memory Manager (QEMM) version 6.0. QWINFIX modifies the
	Windows SYSTEM.INI file by adding the line
	
	     SystemROMBreakPoint=false
	
	to the [386Enh] section of SYSTEM.INI. This is required because QEMM386.SYS, when
	invoked with the RAM parameter, remaps system ROM into RAM.
	
	For further information on the use of SystemROMBreakPoint, see the Windows readme
	file SYSINI3.TXT, or query on the words
	
	  QEMM and SystemROMBreakPoint
	
	QWINFIX is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: 3.00 3.00a QEMM 5.1 6.0qemm enhanced 3.1 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
