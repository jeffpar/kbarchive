---
layout: page
title: "Q168293: Zip Cartridges Formatted in LBA Mode are Unreadable"
permalink: /kb/168/Q168293/
---

## Q168293: Zip Cartridges Formatted in LBA Mode are Unreadable

	Article: Q168293
	Product(s): Microsoft Windows NT
	Version(s): 3.51,4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbsetup kbHardware
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Iomega Zip IDE Insider drive to re-partition and reformat a Zip
	cartridge using LBA mode, the cartridge will be unreadable from other SCSI,
	Parallel, IDE Zip drives (operating in non-LBA mode), or ATAPI Zip drives.
	
	CAUSE
	=====
	
	The standard translated geometry for all Zip drives is 512 cylinders, 12 heads,
	and 32 sectors per track. LBA translation of the drive geometry results in a
	translated geometry of 97 cylinders, 32 heads, and 63 sectors per track. Zip
	drives using standard Zip disk geometry will be unable to read the alternate
	disk geometry presented by Zip cartridges formatted under LBA mode.
	
	
	RESOLUTION
	==========
	
	In the computer's CMOS setup, disable LBA translation on the Zip IDE Insider
	drive. Enter the correct cylinder, head, and sector information, as indicated
	above.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: Iomega IDE Insider removable Zip
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : :3.51,4.0
	
	=============================================================================
	
