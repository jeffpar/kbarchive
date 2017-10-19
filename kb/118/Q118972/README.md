---
layout: page
title: "Q118972: Parallel Port Printing Problems on IBM Thinkpad"
permalink: /kb/118/Q118972/
---

## Q118972: Parallel Port Printing Problems on IBM Thinkpad

	Article: Q118972
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50 3.51
	
	WINDOWS
	
	kbprint
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you print from an IBM ThinkPad to a parallel port, various problems may
	appear in the output.
	
	CAUSE
	=====
	
	Printing problems may occur when the Parallel Port Arbitration is not disabled.
	
	WORKAROUND
	==========
	
	To disable Parallel Port Arbitration in the system setup:
	
	1. Power-on the ThinkPad.
	
	2. Press CTRL+ALT+INS after the memory count-up and while the cursor is staying
	  in the upper-right corner of screen. Enter password if it's set. The blue IBM
	  logo then appears.
	
	3. Press ENTER.
	
	4. Select Set Configuration, and then press ENTER.
	
	5. Select Change Configuration, then press ENTER.
	
	6. Select Parallel Port Arbitration Level, and then press the F6 key several
	  times until "Disabled" appears.
	
	7. Press the F10 key to save the setting, and then press ENTER.
	
	8. Press the F3 key twice, and then press ENTER to start the operating system.
	
	This forces the parallel port to no-DMA ISA machine compatible mode and resolves
	the error with some printers.
	
	The IBM product discussed here is manufactured by IBM (International Business
	Machines Corp.), a vendor independent of Microsoft; we make no warranty, implied
	or otherwise, regarding this product's performance or reliability.
	
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50 3.51
	
	=============================================================================
	
