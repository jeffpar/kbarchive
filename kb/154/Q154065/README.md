---
layout: page
title: "Q154065: Cannot Boot to Duplexed Drive Using Compaq Fast Wide SCSI-2"
permalink: kb/154/Q154065/
---

## Q154065: Cannot Boot to Duplexed Drive Using Compaq Fast Wide SCSI-2

	Article: Q154065
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use Windows NT Server 4.0 with a duplexed mirror set (using two
	controllers with the primary drive on one and the shadow drive on the other
	controller), you will not be able to boot to the shadow drive if the primary
	fails, when the shadow drive is on the CPQFWS2e controller. This applies to
	starting either from the hard drive or a NT boot floppy disk.
	
	CAUSE
	=====
	
	Even though Disk Administrator displays two drives and will allow the mirror set
	to be created, there is no way to boot to the shadow drive. Even with the
	correct Ntbootdd.sys file and correct arc path, boot fails to find the second
	drive. Turning off the BIOS, setting both drives to use 64-head 32-sector
	translation, and insuring the partition table and BIOS PARAMETER block in the
	boot sector are identical does not help.
	
	RESOLUTION
	==========
	
	In may be necessary to use a non-standard arc path in the Boot.ini file with
	this driver. The standard arc path would be:
	
	  scsi(1)disk(0)rdisk(0)partition(2)\WINNT="Windows NT Server 4.0"
	
	The arc path above would work for starting from the 2nd SCSI controller, with the
	shadow drive on SCSI ID 0, and assuming an EISA partition on both drives.
	
	If this does not work, substitute SCSI(0) in the arc path. Otherwise, the normal
	procedure for starting from a floppy disk applies: the disk must have been
	formatted under Windows NT. The NTLDR, Boot.ini, and Ntdetect.com files must be
	on the floppy disk. Ntbootdd.sys, the hotfixed version of Cpq32fs2.sys renamed,
	must also be on the floppy disk.
	
	Under Windows NT Server 3.51 you will have to move the shadow drive to the first
	controller and setting the system partition active will allow the computer to
	start normally, either from the hard disk drive directly or from the boot floppy
	disk. An arc path using the multi(0) syntax is required in this case.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
