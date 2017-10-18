---
layout: page
title: "Q167129: STOP 0x7A or System Lockup in NTBACKUP with MINIQIC"
permalink: kb/167/Q167129/
---

## Q167129: STOP 0x7A or System Lockup in NTBACKUP with MINIQIC

	Article: Q167129
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist kbfixlist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After selecting Hardware Setup in NTBACKUP, and pressing the OK button when the
	MINIQIC device is shown, the SCSI bus may stop responding. The system will send
	a SCSI RESET numerous times before it gives up. If the boot device happens to be
	on the same SCSI bus, the system will blue screen with the following error
	message:
	
	  STOP 0x0000007A KERNEL_DATA_INPAGE_ERROR
	
	This problem seems to occur with every MINIQIC device. This only happens when a
	MINIQIC device is attached to a SCSI host adapter controlled by Aic78xx.sys.
	
	
	CAUSE
	=====
	
	A bit was not getting reset during a PCI Master Abort condition, causing all
	SCSIPORT requests to not make it to the SCSI bus.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist kbfixlist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	Issue type        : kbbug
	
	=============================================================================
	
