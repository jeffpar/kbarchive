---
layout: page
title: "Q162846: Preparing to Create or Modify a Fault Tolerant Set"
permalink: /kb/162/Q162846/
---

## Q162846: Preparing to Create or Modify a Fault Tolerant Set

	Article: Q162846
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides some basic procedures and a checklist for creating and
	modifying a fault tolerant set. For this article, a fault tolerant set includes
	a stripe set, stripe set with parity, volume set, and disk mirror/duplex.
	
	Basic Procedures
	----------------
	
	1. To create a fault tolerant set, perform a full backup of all data. Back up
	  anything that cannot be reinstalled and back up any data that you cannot
	  regenerate on physical media, other than the drives you are going to use.
	
	2. Because information about fault tolerant sets is kept in the registry, it is
	  preferable that you back up the disk key in the system hive separately. You
	  can easily do this by using the Save option of the Configuration entry under
	  the Partition menu in Disk Administrator. This option will copy the disk key
	  in an uncompressed format to a floppy disk. The disk key keeps the Disk
	  Signature and any fault tolerant set information of the drives in your
	  system.
	
	  NOTE: It does not save the master boot record, boot sector, or any partition
	  information. You may also want to use RDISK to back up the rest of the
	  registry including the entire SYSTEM hive.
	
	
	
	3. All third-party services and drivers need to be stopped through Services tool
	  and Devices tool in Control Panel. These services may not only be limited to
	  virus scanners, backup agents, and network services, but may extend to
	  utilities that may maintain open files, or access system services directly
	  (low-level hardware access such as Compaq Insight Manager). Also,
	  applications such as Microsoft Exchange Server and SQL Server, among others
	  that perform low-level disk I/O, need to be stopped.
	
	  The drive needs to be checked for file structure and physical corruption with
	  a utility such as CHKDSK. For CHKDSK use the /r to search for bad sectors and
	  /f to fix any errors it finds. If possible, use the SCSI controller low-level
	  media test to run a nondestructive test (consult your hardware vendor for
	  details and availability).
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q100110
	  TITLE : Overview of Redundant Arrays of Inexpensive Disks (RAID)
	
	  ARTICLE-ID: Q114872
	  TITLE : Restoring Disk Configuration Information
	
	Stripe Sets
	-----------
	
	Stripe sets offer no data redundancy, unlike striping with parity. All data is
	lost in the set if one drive fails in a stripe set. Better performance usually
	results because of the ability to read and write to several drives
	simultaneously. To do this, the drives and controller must support the read and
	write request simultaneously. In general, most SCSI controllers and drives allow
	this, while IDE controllers and drives only allow one device per channel at a
	time to accept read and write requests. Making a stripe set out of IDE drives
	will not improve performance.
	
	Stripe sets with parity offer data redundancy. They maintain a fairly high level
	of performance. Read performance matches a stripe set without parity. When
	writing data, however, everything is written twice -- once to the disk and once
	to the parity strip. The pagefile should not be placed on a stripe set with
	parity because redundant data is written and performance degrades. After a
	stripe set is created, it cannot be enlarged or extended without backing up the
	data and reformatting the set. You cannot incorporate the Windows NT system or
	boot files into a stripe set.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q113933
	  TITLE : Disk Striping and Disk Striping with Parity in Windows NT
	
	  ARTICLE-ID: Q108082
	  TITLE : Windows NT Cannot Regenerate Stripe Set with Parity
	
	Volume Set
	----------
	
	Volume sets offer no data redundancy but allow you to span multiple drives, and
	to assign them one drive letter. When you use NTFS on a volume set, it is
	possible to add another drive to volume set without formatting the drive. FAT
	does not allow extending the drive without reformatting and restoring from a
	backup. When extending a volume set, take the same precautions as when you
	create any other fault tolerant set.
	
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base Article related to Volume Sets:
	
	  ARTICLE-ID: Q113503
	  TITLE : Overview of Disk Volume Sets in Windows NT
	
	Disk Mirror/Duplex
	------------------
	
	Disk mirroring and disk duplexing offer full data redundancy under Windows NT
	Server. The difference between the two is that mirroring assumes you have two
	hard drives and one controller, while duplexing has a controller for each hard
	drive. Duplexing provides maximum protection if a controller or a hard drive
	fails. The type and size of your hard drive does not matter, but there must be
	enough free space available on the shadow drive. When duplexing, drive
	translation can be an issue on SCSI drives. When the BIOS is enabled on a SCSI
	controller, the drive translation is done by the BIOS. For controllers not under
	BIOS control, Windows NT defaults to 64 heads and 32 sectors per track. This
	happens because Windows NT cannot read the translation scheme from the disabled
	BIOS. An issue arises when there are two identical controllers and two identical
	drives, with two different sizes under Disk Administrator. In this situation,
	even if the mirror can be established, recovery in the event of failure may be
	extremely difficult.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q114779
	  TITLE : Overview of Disk Mirroring (RAID Level 1) in Windows NT
	
	  ARTICLE-ID: Q113977
	  TITLE : Booting From Mirror After Primary Partition Is Lost
	
	  ARTICLE-ID: Q141702
	  TITLE : How to Recover Mirroring Windows NT Using IDE devices
	
	  ARTICLE-ID: Q161563
	  TITLE : How Windows NT Handles Drive Translation
	
	  ARTICLE-ID: Q148425
	  TITLE : Duplexed Mirror Fails with Insufficient Space
	
	  ARTICLE-ID: Q172912
	  TITLE : Windows NT May Appear to Hang When a Mirrored IDE Drive Fails
	
	MORE INFORMATION
	================
	
	Windows NT Server support for RAID is software based; information about the
	configuration is kept in the registry. Hardware-based RAID has many advantages
	over software-based RAID, such as support for hot swapping of hard drives.
	Hardware-based RAID provides better performance because it runs independently of
	the operating system and does not need to scan a series of drivers. The
	operating system can be placed on a hardware-based RAID because the array is
	built in the controller BIOS, and not by a driver that the operating system
	supplies.
	
	Compaq is independent of Microsoft; we make no warranty, implied or otherwise,
	regarding this companies product's performance or reliability.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q96735
	  TITLE : Hardware/Software Requirements for Fault Tolerance
	
	Additional query words: prepare harddrive
	
	======================================================================
	Keywords          : kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : WinNT:3.5,3.51,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
