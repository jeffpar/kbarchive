---
layout: page
title: "Q154177: IBM Model 320 Microchannel Does Not Utilize Multiprocessor"
permalink: /kb/154/Q154177/
---

## Q154177: IBM Model 320 Microchannel Does Not Utilize Multiprocessor

	Article: Q154177
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you run 16-bit applications under Windows NT on an IBM Model 320
	Microchannel computer with multiple processors, only the first processor is
	used. This is not true for the EISA version of the IBM Model 320. Because the
	second processor on MCA computers does not perform, some applications perform
	more slowly on a dual processor computer of this model than one with a single
	processor.
	
	MORE INFORMATION
	================
	
	There is a note on the March 1996 Windows NT Hardware Compatibility List
	concerning the following models:
	
	  IBM PC Server 320 Pentium/90 8640-MXT (2p)  13
	  IBM PC Server 320 Pentium/90 8640-MYR (2p)  13
	  IBM PC Server 320 Pentium/90 8640-MYT (2p) 13
	
	The note on these models reads:
	
	  13 Contact the manufacturer for information on running
	  Windows NT on this computer.
	
	STATUS
	======
	
	The IBM Model 320 is manufactured by IBM, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words: processor affinity
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
