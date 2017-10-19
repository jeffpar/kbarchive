---
layout: page
title: "Q149904: Compaq LTE 5100, 5200 Notebooks Stop When Swapping Floppy &amp; CD"
permalink: /kb/149/Q149904/
---

## Q149904: Compaq LTE 5100, 5200 Notebooks Stop When Swapping Floppy &amp; CD

	Article: Q149904
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Compaq 5100 LTE Elite and Compaq 5200 LTE Elite notebook computers allow for
	cold swapping of floppy disk and CD-ROM drives. If Windows NT is set up from the
	CD-ROM drive and then later started with the floppy disk drive inserted, the
	following STOP message appears:
	
	  STOP: 0x0000007f (0x00000006, 0x00000000, 0x00000000, 0x00000000)
	  unexpected_kernel_mode_trap
	
	RESOLUTION
	==========
	
	To correct this problem, obtain the latest BIOS update file available from
	Compaq. The file name is SP1459.exe. The readme.txt file that accompanies the
	executable file states the following:
	
	  Windows NT 3.5.1 Support
	
	   - Phantom drive problem fixed
	
	   - Diskette drives are no longer rendered as unusable when in MultiBay
	     Expansion Base
	
	   - Boot now possible with second hard drive present
	
	   - No longer get a blue screen when CD and floppy drive are swapped
	
	The Compaq 5100 LTE Elite and Compaq 5200 LTE Elite notebook computers are
	manufactured by Compaq Computer Corporation, a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
