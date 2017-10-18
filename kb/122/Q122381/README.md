---
layout: page
title: "Q122381: Err Msg: Hard Drive Partition... w/Quantum 540 MB IDE Drive"
permalink: kb/122/Q122381/
---

## Q122381: Err Msg: Hard Drive Partition... w/Quantum 540 MB IDE Drive

	Article: Q122381
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade or install Windows NT version 3.5 on a Dell Dimension XPS P60
	PCI computer with a Quantum 540 megabyte (MB) IDE hard disk drive, the following
	error message may appear:
	
	  Hard drive partition containing the free space selected for installation is
	  not accessible to the computer's startup program.
	
	CAUSE
	=====
	
	This problem occurs if the hard disk drive does not support Logical Block
	Addressing (LBA) mode. LBA is supported on Quantum IDE hard disk drives with the
	BIOS revision starting with the letters EC.
	
	WORKAROUND
	==========
	
	To correct this problem:
	
	1. Verify the BIOS revision of the hard disk drive starting with the letters EC.
	  Call Dell Technical Support at (800) 624-9896 for more information.
	
	2. Back up all contents on the hard disk drive. Go to the system CMOS
	  configuration and change the hard disk drive information from AUTO to 1024
	  cylinders, 16 heads and 63 sectors.
	
	3. Repartition the hard disk drive.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: prodnt hd 3rdparty
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : 3.5
	
	=============================================================================
	
