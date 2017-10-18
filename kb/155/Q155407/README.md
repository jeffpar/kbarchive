---
layout: page
title: "Q155407: Setting Up Windows NT on Motorola PowerStack When Drive Is New"
permalink: kb/155/Q155407/
---

## Q155407: Setting Up Windows NT on Motorola PowerStack When Drive Is New

	Article: Q155407
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the steps necessary to install Windows NT on a Motorola
	PowerStack computer, when the drive is new or has been low-level formatted. When
	all boot information on the drive is missing, the system will display the
	following information when the computer is started:
	
	  AutoBoot about to begin.. Press <ESC> to Bypass, <SPC> to Continue
	  Scanning System for Attached Mass Storage Devices
	  Attempting BOOT from Device(s) of Type = FDISK
	  Attempting BOOT from Device(s) of Type = CDROM
	  Attempting BOOT from Device(s) of Type = TAPE
	  Attempting BOOT from Device(s) of Type = HDISK
	
	  Autoboot Failed
	  PPC1-Diag>
	
	If your computer is in this state, follow the instructions below.
	
	MORE INFORMATION
	================
	
	The following materials must be available before beginning:
	
	- PPC Boot Disk (Available from Motorola)
	
	- Arcinst.exe (Available from Motorola)
	
	- FW.IMG on disk (Available from Motorola)
	
	- Windows NT compact disc (Available from Microsoft)
	
	1. Start the computer from the PPC boot disk.
	
	2. When the firmware loads:
	
	  a. Insert the disk that has Arcinst.exe in the floppy disk drive.
	
	  b. Select Run a Program.
	
	  c. In Program to Run type the following:
	
	     a:\arcinst
	
	  d. Press Enter.
	
	3. Select Configure Partitions.
	
	4. Select Create PowerPC Boot Partition. If more than one SCSI bus is available,
	  select the appropriate SCSI bus. You will receive the following message:
	
	  Partition successfully created.
	  Press any key to continue...
	
	  The partition will be automatically formatted. Then the following message will
	  be displayed:
	
	  Partition formatted successfully.
	  Press any key to continue
	
	5. Press a key; the following prompt is shown:
	
	  Enter pathname for the PowerPC BootLoader:
	
	  Insert the disk with the correct Fw.img file into the floppy disk drive and
	  type:
	
	  a:\fw.img
	
	  The following messages will be shown:
	
	  Reading ARC from:
	  multi(1)disk(0)fdisk(0)\fw.img
	  Load Image Size = 288000
	  Press any key to continue...
	
	  Boot Software Copied Successfully.
	  Press any key to continue...
	
	  Successfully installed PowerPC Boot Loader.
	
	6. On the ARCINST menu select Create Partition. If required, select the
	  appropriate SCSI bus.
	
	7. At the "Enter the size in MB (1-1000):" prompt, type the size for the system
	  partition; this will typically be 10 MB. The following message is displayed:
	
	  Partition successfully created.
	  Press any key to continue...
	
	  You will get this prompt:
	
	  Do you want to make this the system partition (y/n)?
	
	  Type 'y' (without quotation marks) and press ENTER. The partition will be
	  automatically formatted. The "Partition formatted successfully" message will
	  be displayed again. Press any key to continue.
	
	8. Quit ARCINST.
	
	9. On the firmware menu, select the "Run a program" option and type:
	
	  cd:\ppc\setupldr
	
	10. Windows NT Setup will start. Setup can be used to partition the remainder of
	  the drive and install a new copy of Windows NT.
	
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
