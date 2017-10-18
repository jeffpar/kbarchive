---
layout: page
title: "Q114779: Overview of Disk Mirroring (RAID Level 1) in Windows NT"
permalink: kb/114/Q114779/
---

## Q114779: Overview of Disk Mirroring (RAID Level 1) in Windows NT

	Article: Q114779
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	This article provides an overview of disk mirroring (RAID Level 1) under
	Windows NT.
	
	In disk mirroring, partitions on two drives store identical information so
	that one is the mirror of the other.  All data written to the partition on
	the primary disk is also written to the mirror, or secondary, partition.
	If one disk fails, the system is able to use the data from the other disk.
	
	The following facts apply to disk mirroring under Windows NT:
	
	- Only Windows NT Server can create and break mirror sets.
	
	- Mirrors are file system independent. Any partition using a file system that
	  Windows NT recognizes or that is blank can be used to create a mirror.
	
	- Mirrors are not dependent on disk geometry. The only requirement is that free
	  disk space used to place the mirror on be equal to or greater than the size
	  of the primary partition. Mirroring is not restricted to a partition of
	  identical geometry (size, number of heads, cylinders, tracks, sectors, etc.)
	  nor is it restricted to a drive of the same type (IDE, ESDI, SCSI, etc.).
	
	- Primary and mirror partitions must be on separate hard disk drives. They
	  cannot be on the same physical hard disk drive.
	
	- Whether the two hard disks containing the primary and mirrored partitions are
	  on the same or different disk controllers, Windows NT still defines this as
	  mirroring and makes no distinction. (Placing the disks on separate
	  controllers is sometimes referred to as disk duplexing.)
	
	- A single mirror set is limited to two hard disks only. Use disk striping with
	  parity if fault tolerance over more than two disks is needed.
	
	- Mirror sets are invisible to the user. When a mirror set is created, both
	  partitions are assigned the same drive letter.
	
	- Mirroring is the only Windows NT fault tolerant option available for use on
	  boot and system partitions.
	
	- If the boot or system partition is mirrored and the primary partition is
	  damaged, the computer can boot off the secondary or mirror partition by using
	  a fault tolerant boot floppy disk. See the Concepts and Planning Guide or
	  online documentation for information on how to create a fault tolerant boot
	  floppy disk.
	
	- Only the Windows NT Server installation that created the mirror set will
	  normally recognize it. Other operating systems will not recognize the
	  mirrored partition. MS-DOS will identify the partitions of the mirror as
	  "Non-DOS" partitions. Windows NT and other installations of Windows NT Server
	  will identify the primary and mirror partitions as having an "Unknown" file
	  system type in Disk Administrator.
	
	  NOTE: Windows NT and other installations of Windows NT Server can recognize a
	  mirror set created by Windows NT Server by restoring disk configuration
	  information.
	
	- A new installation of Windows NT cannot be installed on an existing mirror
	  set. During setup, when selecting the partition to install Windows NT on,
	  setup identifies the mirror set as "Windows NT Fault Tolerance." If you
	  attempt to select this partition for installation, a message appears, stating
	  that Windows NT does not recognize this partition, and it must be deleted for
	  setup to use it.
	
	- The fault tolerance driver makes the loss of one partition in a mirror set
	  invisible; you will be able to read from and write to the remaining partition
	  as if the mirror set was healthy. However, if only one partition of a mirror
	  set is functioning, then it is no longer fault tolerant. Loss of the
	  remaining partition will result in an unrecoverable loss of all data in the
	  mirror set.
	
	- A key to determining the condition of a mirror set is the status bar in Disk
	  Administrator. When you select one of the partitions of a mirror set, Disk
	  Administrator displays information about the mirror in the lower left corner
	  of the window. For example, "Mirror set #0 [HEALTHY]" indicates the status of
	  mirror set #0 is healthy. Other status indicators include:
	
	  [NEW] appears immediately after the mirror set has been created in Disk
	  Administrator, but before shutting down the system and actual generation of
	  the mirror begins.
	
	  [REGENERATING] is displayed when generation of the mirror set by the system
	  has been started but is not yet complete.
	
	  [RECOVERABLE] appears when either one of the partitions in the set has been
	  lost but the other partition is undamaged. This message also appears when one
	  partition loses synchronization with the other.
	
	- No loss in performance occurs when a member of a mirror set fails.
	
	- Disk mirroring provides better overall write performance than striping with
	  parity and better read performance in the event of a drive failure.
	
	For additional information, click the article number below 
	to view the article in the Microsoft Knowledge Base:
	
	  Q167045 Reasons Why Windows NT will not Boot from a Shadow Mirror Drive
	
	Additional query words: prodnt tshoot repair
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
