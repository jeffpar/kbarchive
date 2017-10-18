---
layout: page
title: "Q126462: Windows NT Setup Err Msg on NEC Express/II: STOP 0x0000000E"
permalink: kb/126/Q126462/
---

## Q126462: Windows NT Setup Err Msg on NEC Express/II: STOP 0x0000000E

	Article: Q126462
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
	
	When you attempt to install Windows NT version 3.5 on an NEC Express/II 433 ST
	or 466 ST, the following error message appears:
	
	  TRAP 0x0000000E Page Fault at linear address xxxxxxxx
	
	This screen appears after you boot your computer from the Windows NT Setup Boot
	Disk.
	
	CAUSE
	=====
	
	There is a problem in the L2 cache implementation on the NEC Express/II 433 ST
	and 466 ST machines. These machines will be removed from future versions of the
	Windows NT Hardware Compatibility List (HCL).
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	Additional query words: STOP 0xE 0000000E prodnt blue screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
