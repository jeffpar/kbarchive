---
layout: page
title: "Q195839: Windows Explorer Display Not Updated with NEC PD Media Change"
permalink: kb/195/Q195839/
---

## Q195839: Windows Explorer Display Not Updated with NEC PD Media Change

	Article: Q195839
	Product(s): Microsoft Windows NT
	Version(s): WINNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 SP4 
	- Microsoft Windows NT Server version 4.0 SP4 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 SP4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using a NEC ODX-series PD Optical Disk Drive, Windows Explorer may
	not automatically update the file and folder display if you swap a Phase-Change
	Dual (PD) rewritable cartridge that has been formatted with the FAT file system
	with another cartridge that has been formatted with the NTFS file system. Also,
	when you click the Refresh command on the View menu in Windows Explorer, the
	display may not be updated, and data written to the NTFS-formatted cartridge may
	be damaged.
	
	Note that this behavior occurs only if you install the NEC PD Optical Disk Drive
	after you install Service Pack 4.
	
	CAUSE
	=====
	
	This problem is caused by the drive's firmware. When you change cartridges, the
	drive does not return valid sense data indicating that a new cartridge has been
	inserted.
	
	RESOLUTION
	==========
	
	To correct this problem, install the NEC ATAPI PD driver (Atapi.sys). You can
	contact NEC Technical Support for an updated version of their ATAPI disk driver
	at (800)-338-9549 or visit their Web site at:
	
	  http://www.nec.com
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	For information about diagnosing optical disk drive problems, see the following
	article in the Microsoft Knowledge Base:
	
	  Q126380 Troubleshooting CD-ROM Problems in Windows NT
	
	MORE INFORMATION
	================
	
	Note that the issues described in this article occur only with IDE PD drives,
	not with SCSI PD drives.
	
	
	Additional query words: storage
	
	======================================================================
	Keywords          : kb3rdparty kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400search kbWinNT400search kbWinNTW400sp4 kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400sp4 kbWinNTS400sp4 kbWinNTS400search
	Version           : WINNT:4.0
	Hardware          : ALPHA x86
	Issue type        : kbprb
	
	=============================================================================
	
