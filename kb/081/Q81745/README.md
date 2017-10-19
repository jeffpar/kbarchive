---
layout: page
title: "Q81745: MSD May Return Incorrect Values for Extended Partitions"
permalink: /kb/081/Q81745/
---

## Q81745: MSD May Return Incorrect Values for Extended Partitions

	Article: Q81745
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Diagnostics (MSD) returns both the fixed disk parameters (drive type,
	cylinders, sectors) and the CMOS fixed disk parameters for each logical drive.
	The CMOS fixed disk parameters are correct for the primary MS-DOS partition
	only, and can be ignored for each logical drive in the extended partition.
	
	MORE INFORMATION
	================
	
	The CMOS fixed disk parameters are only accurate for the primary partition. The
	CMOS information for each logical drive of the extended partition containsfalse
	values. This is a result of the MS-DOS partitioning scheme and the way partition
	information is stored.
	
	Additional query words: 3.10 win31 KBHW 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
