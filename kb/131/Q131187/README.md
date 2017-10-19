---
layout: page
title: "Q131187: Installing Windows NT on a NEC Versa P/75 (Enhanced IDE)"
permalink: /kb/131/Q131187/
---

## Q131187: Installing Windows NT on a NEC Versa P/75 (Enhanced IDE)

	Article: Q131187
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
	
	When you install Windows NT on an NEC Versa P/75 with an enhanced IDE drive,
	Setup may not be able to locate your hard drive.
	
	
	CAUSE
	=====
	
	This problem occurs because the machine BIOS does the logical block addressing
	(LBA), and the LBA is not initialized on new machines.
	
	RESOLUTION
	==========
	
	To correct this problem:
	
	1. Run the computer CMOS setup program and look at the drive parameters. There
	  will be more than 1024 cylinders if it has an enhanced IDE drive.
	
	2. Save these settings. If you press escape, the parameters will not be saved
	  and Windows NT will not install.
	
	3. Reboot the computer and install Windows NT.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
