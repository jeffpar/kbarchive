---
layout: page
title: "Q141190: Disk Administrator Stops When Zip Drive is Present"
permalink: /kb/141/Q141190/
---

## Q141190: Disk Administrator Stops When Zip Drive is Present

{% raw %}

	Article: Q141190
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When entering Disk Administrator, Dr. Watson appears and notes that there has
	been an error in the application and that it will be closed. This occurs when a
	zip drive is present and while the progress bar titled "Disk Administrator is
	Initializing" is present.
	
	CAUSE
	=====
	
	A zip drive is the only (or first) device on the SCSI controller with the lowest
	base I/O address, making it the controller that is queried first by Disk
	Administrator. The failure occurs only if there is not a disk in the zip drive.
	Otherwise, the media will be properly reported as Drive 0, with its size and
	appropriate logical drive letter.
	
	RESOLUTION
	==========
	
	There are a few solutions:
	
	- Always insert a disk into the zip drive before launching Disk Administrator.
	
	- Connect the zip drive to the SCSI controller that the system's hard disk
	  drives are connected to and remove the secondary controller.
	
	- If possible, set the I/O address of the secondary controller to be higher (in
	  hexadecimal) than the address of the controller with the system's hard disk
	  drive(s).
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. We are
	researching this problem and will post new information here as it becomes
	available.
	
	
	MORE INFORMATION
	================
	
	This occurs when two SCSI controllers are present in a system. PCI-based SCSI
	controllers are given very high I/O addresses (such as FC00 - FCFF), so any
	additional ISA or EISA SCSI controller present in the system will have the lower
	address. When Disk Administrator cannot find the media for this first device, an
	error occurs.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	
	=============================================================================
	

{% endraw %}
