---
layout: page
title: "Q125933: STOP 0x0000007B: Inaccessible Boot Device After Removing CD-ROM"
permalink: kb/125/Q125933/
---

## Q125933: STOP 0x0000007B: Inaccessible Boot Device After Removing CD-ROM

	Article: Q125933
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you have installed Windows NT version with an IDE CD-ROM that is daisy
	chained with your IDE hard disk, and have configured the CD-ROM as a slave and
	the hard disk as the master, the following STOP message appears when you reboot
	after removing the CD-ROM:
	
	  STOP 0x0000007B
	  Inaccessible Boot Device
	
	CAUSE
	=====
	
	During the installation of Windows NT, ATAPI.SYS, not ATDISK.SYS, is copied to
	the <%systemroot%>\SYSTEM32\DRIVERS subdirectory.
	
	If you encounter this error, always check to make sure that the system is not
	infected with a virus, particularly a boot sector virus.
	
	RESOLUTION
	==========
	
	Before you remove the IDE CD-ROM, do the following:
	
	1. If you are running Windows NT 3.5 or 3.51, go to the Windows NT Setup program
	  and choose Add/Remove SCSI Adapters. If you are running Windows NT 4.0, go to
	  the SCSI Adapters option in Control Panel.
	
	2. Select "IDE CD-ROM (ATAPI 1.2)" and choose Remove. Exit of Windows NT Setup,
	  or the Control Panel.
	
	3. In Control Panel, choose the Devices icon.
	
	4. Select the device ATAPI and choose Startup. For Startup Type, select Disabled
	  and choose OK.
	
	5. If there are no SCSI disks installed in the system, select the device
	  SCSIDISK and choose Startup. For Startup Type, select Disabled and choose OK.
	
	6. Select the device ATDISK and choose Startup. For Startup Type, select Boot
	  and choose OK.
	
	7. Copy ATDISK.SYS from the \I386 subdirectory of the Windows NT Server or
	  Workstation version 3.5 CD to the <%systemroot>\SYSTEM32\DRIVERS
	  subdirectory.
	
	8. Shutdown Windows NT and remove the CD-ROM. Change the jumper configuration on
	  the hard disk from Master to Stand-alone.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Windows NT versions listed
	above. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base if it becomes available.
	
	
	
	Additional query words: prodnt trap 0x7b 0x07b
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
