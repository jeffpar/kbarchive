---
layout: page
title: "Q125358: STOP Message Installing Windows NT on NEC Image Computer"
permalink: kb/125/Q125358/
---

## Q125358: STOP Message Installing Windows NT on NEC Image Computer

	Article: Q125358
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A STOP message appears when you install Windows NT on an NEC Image computer when
	Setup attempts to install the KEYBOARD.SYS driver:
	
	  STOP: 0x0000001E (0xC0000005, 0x00000000, 0x00000000, 0x00000000)
	  Kmode_Exception_Not_Handled.
	
	
	CAUSE
	=====
	
	This is due to a problem in the NEC BIOS revision.
	
	RESOLUTION
	==========
	
	Obtain a new BIOS revision 1.00.27 from NEC. You can download the update from
	the NEC BBS at: (508) 635-4706.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
