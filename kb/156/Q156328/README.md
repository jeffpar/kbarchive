---
layout: page
title: "Q156328: Description of Windows NT Emergency Repair Disk"
permalink: kb/156/Q156328/
---

## Q156328: Description of Windows NT Emergency Repair Disk

	Article: Q156328
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup kbtool
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During Windows NT 4.0 Setup, you are given the option to create an Emergency
	Repair Disk (ERD). Microsoft recommends that you create an ERD during Setup so
	that you will have the proper tools in case fault recovery becomes necessary.
	
	MORE INFORMATION
	================
	
	Maintaining a current ERD is just as important as having a current system
	backup. When system configuration changes are made (such as installing new
	software or changing software configuration, altering network configuration,
	hardware changes, operating system updates) you should update your ERD with the
	Rdisk utility included with Windows NT.
	
	Following is an excerpt from the Windows NT 3.51 Resource Kit Update 2, page
	127:
	
	A current Emergency Repair Disk is your most valuable tool in recovering
	information that you need to start your system. The Emergency Repair Disk is
	intended to provide just enough recovery to restore a system to a bootable state
	and is not a replacement for regular backups.
	
	Windows NT Server and Windows NT Workstation include the RDISK command for
	building and maintaining repair information. You can use this tool to update the
	repair information stored in the Winnt\Repair folder and to copy the information
	to a floppy disk. You can use the Emergency Repair Disk to replace damaged
	system files, restore damaged or incorrect registry information, and rebuild the
	startup environment.
	
	You should update the repair information and create a new Emergency Repair Disk
	any time you change the system configuration in any significant way. For
	example, if you add or remove hardware from the system or change the disk drive
	configuration, you should update the repair information.
	
	To maintain your current registry configuration, you must update your ERD.
	Otherwise, each repair disk only contains the registry information from the time
	Windows NT was first installed. To create an updated ERD, use one of the
	following methods:
	
	- Type "rdisk /s" (without the quotation marks) in the Open box.
	
	- Type "rdisk" (without the quotation marks) in the Open box, and then click
	  Update Repair Info.
	
	Additional query words: prodnt corrupt
	
	======================================================================
	Keywords          : kbsetup kbtool 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
