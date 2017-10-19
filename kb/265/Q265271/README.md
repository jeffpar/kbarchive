---
layout: page
title: "Q265271: Error Message Appears When Using Iomega Zip Drive"
permalink: /kb/265/Q265271/
---

## Q265271: Error Message Appears When Using Iomega Zip Drive

	Article: Q265271
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After starting a computer that is running Windows NT Workstation 4.0 and that
	has an Iomega Parallel Port Zip 100 drive, version 1.2 or 1.41, installed, you
	may receive the following error message:
	
	  Stop 0x0000000A driver scsiport.sys (corrupted file).
	
	The error message may not cite parameters. If you remove the Zip drive, the error
	message no longer appears.
	
	RESOLUTION
	==========
	
	To resolve this behavior, do one or more of the following:
	
	1. Verify that the Zip drive is turned on and is connected to the parallel port.
	
	2. Try a different parallel port mode in the system BIOS settings.
	
	3. Try removing any printer drivers that might be conflicting with the Zip
	  drive.
	
	MORE INFORMATION
	================
	
	You may want to try reinstalling the Zip drivers. This procedure explains how to
	install the Parallel Port Zip drivers on Windows NT Workstation 4.0.
	
	1. Obtain Iomega Tools for Windows NT, version 1.5 or later.
	
	2. On the Windows NT Workstation 4.0 desktop, in Control Panel, double-click
	  SCSI Adapters.
	
	3. Click Drivers, and then click Add.
	
	4. Click Have Disk, and then insert the first installation disk.
	
	5. Click OK, make sure Iomega Zip Parallel Port / Jaz Traveler Driver is
	  selected, and then click OK.
	  You may be prompted with the following question: The driver(s) for this SCSI
	  Adapter are already on the system. Do you want to use the currently installed
	  drivers(s) or install new one(s)?
	
	6. Click New, and then click Yes to restart the computer.
	  Once the computer restarts, the drive letter should be assigned.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
