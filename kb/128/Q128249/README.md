---
layout: page
title: "Q128249: Windows NT Hangs During Network File Copy with 3C679"
permalink: /kb/128/Q128249/
---

## Q128249: Windows NT Hangs During Network File Copy with 3C679

	Article: Q128249
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
	
	When you copy files to a Hewlett-Packard (HP) NetServer computer using a 3Com
	3C679 network interface card (NIC) with an 8-bit IBMTOK.SYS driver, Windows NT
	3.5 may stop responding (hang) or the copied files may become corrupted. The NIC
	is not on the Windows NT 3.5 Hardware Compatibility List (HCL).
	
	WORKAROUND
	==========
	
	To work around this problem, run the EISA Configuration utility for the computer
	and set the NIC data path width value to 8 bits. The default value is 32 bits.
	
	The products discussed here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	Additional query words: prodnt hp mac
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
