---
layout: page
title: "Q148459: SKFENT.SYS Causes Stop 0xA"
permalink: kb/148/Q148459/
---

## Q148459: SKFENT.SYS Causes Stop 0xA

	Article: Q148459
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The server intermittently crashes with the following error:
	
	  STOP 0x0000000a (00000008 00000002 00000000 fbef1225)
	
	CAUSE
	=====
	
	This problem may occur if you are using a SYSKONNECT (SKFENT.SYS) driver dated
	December 1995.
	
	RESOLUTION
	==========
	
	Use Microsoft's SYSKONNECT driver instead of using the newer driver.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.51
	
	=============================================================================
	
