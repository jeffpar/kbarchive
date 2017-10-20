---
layout: page
title: "Q149420: Setting Up a Creative Labs IDE CD-ROM in Windows NT"
permalink: /kb/149/Q149420/
---

## Q149420: Setting Up a Creative Labs IDE CD-ROM in Windows NT

{% raw %}

	Article: Q149420
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT 3.5 includes with an IDE CD-ROM (ATAPI 1.2) driver that should
	support all compact discs, versions 4x and later, that Creative Labs currently
	packages in its multimedia kits. This driver can be set up during or after NT
	Setup. The setup and troubleshooting procedures are listed below.
	
	This article addresses the following topics:
	
	  -Setting Up IDE CD-ROM Support During NT Setup
	  -Adding IDE CD-ROM Support to NT After NT Setup
	  -Troubleshooting Creative Labs IDE CD-ROMs in NT
	
	MORE INFORMATION
	================
	
	Setting Up IDE CD-ROM Support During NT Setup:
	----------------------------------------------
	
	During NT Setup, you will be asked if you want to perform a mass storage device
	scan. If you press Enter at this time, NT should find the IDE CD-ROM driver
	during its scan and continue.
	
	Another option is to press S to skip the mass storage device scan, then press S
	again to specify your own SCSI devices, and scroll up through the list to IDE
	CD-ROM (ATAPI 1.2).
	
	B. Adding IDE CD-ROM Support to NT After NT Setup:
	--------------------------------------------------
	
	1. In the Main Group, start the Windows NT Setup Program.
	
	2. Under Options and click Add SCSI Adapters.
	
	3. Select IDE CD-ROM (ATAPI 1.2) and click Install.
	
	  NOTE: If Setup asks for disks at this point instead of prompting for the
	  Current driver, quit Setup, copy the file Atapi.sys from Disk 3 of the
	  Microsoft Windows NT Setup disk set to the %Systemroot%\System32\Drivers
	  directory, and try this procedure again.
	
	4. Close the Setup program and restart NT.
	
	C. Troubleshooting Creative Labs IDE CD-ROMs in NT
	--------------------------------------------------
	
	Check to make sure that the IDE address, IRQ, and port match the table below:
	
	IDE Port                              I/O Address     IRQ Lines
	---------------------------------------------------------------
	Primary                               1F0             14
	Secondary                             170             15
	Tertiary (not currently supported)    1E8             11, 12
	Quaternary (not currently supported)  168             10, 11
	
	Try all the settings above except for Primary, 1F0, 14, which is reserved for
	boot device. Reinstall the driver and shut down and restart the system each time
	a configuration change is made.
	
	Check the Event Viewer in the Administrative Tools group to see if the driver
	loaded properly.
	
	Use the NT Diagnostics program in the Administrative Tools group to find hardware
	conflicts.
	
	If the CD-ROM drive is the only device on its cable, make sure that it is set to
	Master. If the CD-ROM drive shares its cable with a hard drive, set the hard
	drive to Master and the CD-ROM drive to Slave.
	
	Disable the Sound Blaster IDE port via jumpers on the Sound Blaster card (refer
	to the Creative Labs documentation for jumper settings) and try the CD- ROM
	drive on the existing IDE port.
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: Creative Labs IDE CD-ROM ATAPI
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
