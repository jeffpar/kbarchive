---
layout: page
title: "Q222871: Err Msg: &quot;Drive Is Not Ready for Use&quot; with Removable Media"
permalink: kb/222/Q222871/
---

## Q222871: Err Msg: &quot;Drive Is Not Ready for Use&quot; with Removable Media

	Article: Q222871
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use removable media devices (such as the Iomega Zip drive or the Iomega
	Jaz drive) with Windows NT, the following error message may be displayed after
	startup:
	
	  The drive is not ready for use; its door may be open. Please check drive
	  \<Device>\<Harddisk1>\<Partition1> and make sure that a
	  disk is inserted and that the drive door is closed.
	
	NOTE: The <Device>, <Harddisk>, and <Partition> values may be
	different, based on your configuration.
	
	CAUSE
	=====
	
	This behavior occurs because removable media can be reported as malfunctioning
	if a cartridge is not present in the removable media device.
	
	When the disk controller BIOS queries a removable media device, it stores the
	device status information in memory. At startup, Windows NT sends a query to
	determine the status of devices connected to the disk controller. Depending on
	the firmware installed, the BIOS revision, or the characteristics of the disk
	controller, removable media can be reported as malfunctioning if a cartridge is
	not present in the removable media device.
	
	RESOLUTION
	==========
	
	To resolve this problem, place a cartridge in the removable media device and
	restart Windows NT.
	
	MORE INFORMATION
	================
	
	This problem may occur on either IDE-based or SCSI-based systems.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q171213 Copy to Removable Drive in Explorer May Fail After Media Swap
	
	  Q159456 Using IOMEGA Zip IDE Insider under Windows NT
	
	Additional query words: syquest
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
