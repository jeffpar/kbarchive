---
layout: page
title: "Q158362: Drive Letters Assigned In Disk Admin Disappear On Restart"
permalink: kb/158/Q158362/
---

## Q158362: Drive Letters Assigned In Disk Admin Disappear On Restart

	Article: Q158362
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbenv kbsetup
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A drive letter is assigned to a SCSI device in Disk Administrator. The drive is
	accessible in File Manager, but after you restart your computer, the drive
	letter is no longer visible in File Manager.
	
	In Disk Administrator, the SCSI drive is shown as formatted with either FAT or
	NTFS but the drive letter that was assigned earlier is now gone. The drive
	letter no longer appears for this drive in File Manager.
	
	
	CAUSE
	=====
	
	This problem is caused by one of the following:
	
	- An IDE device attached to the computer is the boot device AND where the SCSI
	  device does not contain the operating system files AND where the SCSI device
	  is configured for BOOT in the Control Panel Devices tool.
	
	  -or-
	
	- On Compaq systems that require a Compaq SSD, drive letters assigned by Disk
	  Administrator may not be retained after rebooting the machine if the latest
	  Compaq SSD has not been applied.
	
	RESOLUTION
	==========
	
	WARNING: If your system boots from SCSI devices this problem should NOT be
	occurring and you should NOT execute the following series of steps. Performing
	these steps may cause the system to become non-bootable.
	
	1. Click the Start button, point to Settings, and click Control Panel.
	
	2. Double-click the Devices icon, and change the SCSI device driver from a
	  Startup setting of BOOT to a Startup setting of SYSTEM. For example, if using
	  an Adaptec 2940 series SCSI controller, set the AIC78xx device by clicking
	  the Startup button, selecting SYSTEM, rather than BOOT, and then clicking OK.
	
	3. If running Windows NT V3.5x, then change the SCSIDISK device driver from
	  Startup setting of BOOT to a Startup setting of SYSTEM.
	
	4. Close Control Panel.
	
	5. Open Disk Administrator, select the SCSI drive, and then assign a drive
	  letter. Close Disk Administrator.
	
	6. Restart the computer. Verify that the drive letter still exists in File
	  Manager.
	
	-or-
	
	Download and install the latest appropriate SSD from Compaq. Information on and
	locations of SSDs may be found on Compaq's ftp site:
	
	  ftp://ftp.compaq.com/pub/softpaq/allfiles.txt
	
	MORE INFORMATION
	================
	
	The products mentioned here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: system device
	
	======================================================================
	Keywords          : kbenv kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
