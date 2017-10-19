---
layout: page
title: "Q141242: STOP Msg: 0x0000001E Testing New Fault Tolerance Boot Disk"
permalink: /kb/141/Q141242/
---

## Q141242: STOP Msg: 0x0000001E Testing New Fault Tolerance Boot Disk

	Article: Q141242
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbother smsfault kbFaultTolerance
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In the Windows NT "Concepts and Planning Guide," Chapter 7, Page 17, titled
	"Managing fault tolerance and UPS," the section, Testing Your Newly Created Boot
	Disk, states:
	
	  After creating your fault-tolerant boot floppy disk, you can perform the
	  following simple test to reassure yourself that it will work when needed.
	
	1. Insert the fault-tolerant boot floppy disk and restart the computer.
	
	2. If your boot selection correctly specifies the alternate ARC path to the
	  secondary mirrored partition, your system should begin to boot and then fail
	  with the following STOP message:
	
	  ***STOP: 0x0000006B (0xC000000D, 0x00000002, 0x00000000, 0x00000000)
	  PROCESS1_INITIALIZATION_FAILED
	
	MORE INFORMATION
	================
	
	You may experience a different stop message than the one listed above, but this
	also indicates that the FT boot floppy is working correctly:
	
	  *** STOP: 0x0000001E (0xc0000006,0x801Abe58,0x00000000, 0x00000000)
	  KMODE_EXCEPTION_NOT_HANDLED
	
	To fully test the Fault-Tolerant Boot disk to ensure it will boot from your
	mirrored drive, disable the primary NT drive by removing power to the drive.
	
	Keep in mind that it will be necessary to change the rdisk(x) entry in the
	Boot.ini file to compensate for the missing drive if the rdisk(x) value is
	greater than (0) on the fault-tolerant disk.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q119467 Creating a Boot Disk for an NTFS or FAT Partition
	
	Additional query words: prodnt 4.0 6b 1E mirror
	
	======================================================================
	Keywords          : kbother smsfault kbFaultTolerance 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
