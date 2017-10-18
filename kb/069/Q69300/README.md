---
layout: page
title: "Q69300: QEMM386: Exiting Windows 3.0 and Starting Word Reboots System"
permalink: kb/069/Q69300/
---

## Q69300: QEMM386: Exiting Windows 3.0 and Starting Word Reboots System

	Article: Q69300
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Quarterdeck's QEMM386 memory manager version 5.11 or earlier causes any program
	that uses expanded memory to reboot the system after you exit Microsoft Windows
	version 3.0. For example, if you start Microsoft Word for MS-DOS, version 5.0 or
	5.5, immediately after you exit Windows, the system will reboot.
	
	CAUSE
	=====
	
	Quarterdeck Systems has confirmed this to be a problem with versions 5.11 and
	earlier of the QEMM386 driver.
	
	WORKAROUND
	==========
	
	You can avoid the problem by doing the following:
	
	1. Start Word with the /x switch to disable Word's use of expanded memory.
	
	2. Use the extended memory manager HIMEM.SYS included with Windows 3.0 (instead
	  of QEMM386.SYS).
	
	MORE INFORMATION
	================
	
	Quarterdeck corrected the problem in the QEMM386 memory manager version 5.12. A
	complementary upgrade to version 5.12 can be obtained from Quarterdeck's
	technical support.
	
	NOTE: The information in this article was obtained from Quarterdeck technical
	support and has not been confirmed or tested by Microsoft.
	
	The product included here is manufactured by a vendor independent of Microsoft.
	We make no warranty, implied or otherwise, regarding this product's performance
	or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a win30 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
