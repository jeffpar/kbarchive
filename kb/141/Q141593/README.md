---
layout: page
title: "Q141593: PRB: STOP 0x0000001e Using HP NetServer Assist"
permalink: kb/141/Q141593/
---

## Q141593: PRB: STOP 0x0000001e Using HP NetServer Assist

	Article: Q141593
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Hewlett-Packard (HP) NetServer Assist in Windows NT 3.51, the
	following STOP error message appears:
	
	  STOP 0x0000001e (0x80000003 0x8012E2A8 0x00000000) MODE_EXCEPTION_NOT_HANDLED
	  0x8012E2A8 has base at 0x80100000
	
	RESOLUTION
	==========
	
	To correct this problem, rename Snmpext.dll in the %SystemRoot%\HPNETSERVER
	directory to another file name. Refer to the Readme file included with HP
	NetServer Assist.
	
	For more information, contact HP Technical Support at (208) 323-2551.
	
	HP NetServer Assist is manufactured by Hewlett-Packard, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: stop 0x1e trap
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
