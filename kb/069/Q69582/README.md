---
layout: page
title: "Q69582: CHKDSK Does Not Subtract EBDA Memory"
permalink: /kb/069/Q69582/
---

## Q69582: CHKDSK Does Not Subtract EBDA Memory

	Article: Q69582
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The total memory that the CHKDSK utility in MS-DOS versions 4.x and later
	reports does not reflect the missing memory caused by the extended BIOS data
	area (EBDA). Running CHKDSK from MS-DOS version 3.3 shows that 1K is missing on
	some PS/2-compatible machines with an extended BIOS; running CHKDSK in MS-DOS
	version 4.x or later reports that memory as part of the total memory.
	
	MORE INFORMATION
	================
	
	After CHKDSK obtains the total amount of memory through Int 12h, it determines
	the amount of memory used by the EBDA and adds that memory to the total
	previously obtained. Thus, the reduction of total memory due to the EBDA is
	nullified by CHKDSK.
	
	Because the CHKDSK report shows the total memory and not available memory, it is
	correct that EBDA size be included in the total. To see a report of available
	memory, use the MEM command.
	
	Additional query words: 6.22 4.00 4.01 4.01a 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS400 kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS500 kbMSDOS401 kbMSDOS500a
	Version           : MS-DOS:4.x,5.x,6.0,6.2,6.21,6.22
	
	=============================================================================
	
