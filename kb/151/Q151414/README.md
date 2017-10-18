---
layout: page
title: "Q151414: Windows 95/98 Partition Types Not Recognized by Windows NT"
permalink: kb/151/Q151414/
---

## Q151414: Windows 95/98 Partition Types Not Recognized by Windows NT

	Article: Q151414
	Product(s): Microsoft Windows NT
	Version(s): ; winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenvkbfaq
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	Windows NT does not recognize Windows 95/98 FAT32 partitions. There are
	currently no plans to create a FAT32 driver for Windows NT.
	
	MORE INFORMATION
	================
	
	OEM versions of Windows 95 support four partition types for FAT file systems
	that Windows NT does not recognize. The partition type can be identified by the
	System ID byte in the partition table. This byte is located at the following
	offsets:
	
	  0x1C2 = Partition 1
	  0x1D2 = Partition 2
	  0x1E2 = Partition 3
	  0x1F2 = Partition 4
	
	The four values used by Windows 95 that Windows NT does not recognize are as
	follows:
	
	  0x0B      Primary  Fat32 Partitions up to 2047 GB
	  0x0C      Same as 0x0B, uses Logical Block Address Int 0x13 extensions
	  0x0E      Same as 0x06, uses Logical Block Address Int 0x13 extensions
	  0x0F      Same as 0x05, uses Logical Block Address Int 0x13 extensions
	
	The FAT partition types that Windows NT version 3.X and 4.0 can recognize are:
	
	  0x01      Fat12 < 10 megabytes
	  0x04      Fat16 < 32 megabytes
	  0x06      Fat16 > 32 megabytes
	  0x05      Extended (may be FAT, HPFS or NTFS)
	
	To work around this issue when you install Windows NT 4.0, make sure that both
	your boot partition and the partition you are installing to is either formatted
	with the FAT16 or NTFS file system, or is not formatted.
	
	For more information about the FAT32 file system or troubleshooting Windows NT
	4.0 Setup, click an article number below to view that article in the Microsoft
	Knowledge Base:
	
	  Q126690 Windows NT 4.0 Setup Troubleshooting Guide
	
	  Q154997 Description of the FAT32 File System
	
	  Q173694 Err Msg: ERROR: Setup Was Unable to Install the Boot Loader
	
	
	
	Additional query words: 3.10 3.50 3.51 4.00 prodnt
	
	======================================================================
	Keywords          : kbenv kbfaq
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTAdvSerSearch kbWinNTS351search
	Version           : :; winnt:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
