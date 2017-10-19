---
layout: page
title: "Q165820: Iomega Jaz Drive Not Recognized on Some Compaq Portables"
permalink: /kb/165/Q165820/
---

## Q165820: Iomega Jaz Drive Not Recognized on Some Compaq Portables

	Article: Q165820
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Windows NT version 4.0, the Iomega External Jaz Removable Disk
	Drive may not be recognized when it is configured for use attached to the
	Adaptec APA-1460 Slim SCSI PC Card to Host Adapter or a Jaz Traveler in a Compaq
	LTE 5000 series portable computer. This is true when the top PC Card slot is
	being used for the adapter.
	
	CAUSE
	=====
	
	The problem is associated with the firmware revision of the COMPAQ ROM BIOS
	dated 10/96 or earlier.
	
	It has been tested with the Compaq LTE 5380 using the Adaptec APA-1460 Slim SCSI
	PC Card to Host Adapter and the driver included with the Windows NT 4.0 CD. On
	the Compaq LTE 5200, both PC Card slots have also been reported as not
	recognizing the removable disk when using the earlier dated System BIOS.
	
	RESOLUTION
	==========
	
	Always follow normal troubleshooting steps before performing the firmware
	upgrade. Look for proper SCSI termination, updated device drivers, physical
	cabling, configuration settings, and correctly configured startup devices.
	
	Replace the Compaq Firmware Revision dated 10/96 or earlier with the most current
	Compaq Firmware Revision.
	
	More information can be found on the Compaq Website: http://www.compaq.com
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	
	=============================================================================
	
