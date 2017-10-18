---
layout: page
title: "Q125243: Adding Non-SCSI CD-ROM Drivers After Installing Windows NT"
permalink: kb/125/Q125243/
---

## Q125243: Adding Non-SCSI CD-ROM Drivers After Installing Windows NT

	Article: Q125243
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you install Windows NT without adding a driver for your non-SCSI CD-ROM drive
	and you do not have a complete set of the Windows NT setup floppy disks, you can
	add support for the drive after installation by copying the proper driver from
	one of the three Windows NT Setup Boot Disks or from the Windows NT 3.5x CD-ROM
	disc on another computer.
	
	MORE INFORMATION
	================
	
	Windows NT Setup does not autodetect the existence of non-SCSI CD-ROM drives.
	Therefore, if you perform setup using either WINNT.EXE or WINNT32.EXE and you do
	not specifically tell Setup to add the driver for the non-SCSI CD-ROM drive,
	Windows NT will install without adding driver.
	
	If you then attempt to add the driver for your non-SCSI CD-ROM drive using the
	Windows NT Setup icon, you will be prompted to insert either the Windows NT
	CD-ROM or one of the Windows NT Setup disks. Because some packages of Windows NT
	include only the CD-ROM Setup Disc and three Setup Boot Disks (not the complete
	floppy setup disk set), you might not be able to insert the requested disk. This
	typically happens with the following drives:
	
	  Panasonic
	  Sony
	  Mitsumi
	  IDE Interface drive
	  Creative Labs Sound Blaster CD-ROM Interface
	
	To work around this problem:
	
	1. Copy the proper non-SCSI CD-ROM or sound card driver (see the table below for
	  the driver name and location) from one of the three Windows NT Setup Boot
	  Disks to the following directory:
	
	  \%SystemRoot%\SYSTEM32\DRIVERS
	
	  If you do not have the three boot floppies and cannot access the CD-ROM drive,
	  copy the required driver file to a floppy disk from another computer that can
	  access the Windows NT CD-ROM disc, and then copy the driver file from the
	  floppy disk to the root directory of drive C on the computer that requires
	  the driver. You may also copy the driver file over a network.
	
	2. From the Program Manager Main group, run Windows NT Setup.
	
	3. From the Options menu, choose Add/Remove SCSI Adapters.
	
	4. Choose Add.
	
	5. Select the driver for your non-SCSI CD-ROM drive and choose Install.
	
	  NOTE: The Sound Blaster CD-ROM driver is not listed by name in Windows NT
	  Setup under Options after you select Add SCSI driver.
	
	6. When asked for the location of the driver, specify
	  \%SystemRoot%\SYSTEM32\DRIVERS or C:\, depending on what you did in step 1.
	
	7. If you are notified that the driver already exists on the system, choose the
	  Current button.
	
	8. Choose Close and quit Windows NT Setup.
	
	9. Shutdown and restart Windows NT.
	
	Non-SCSI CD-ROM Driver Names and CD-ROM Setup Boot Disk Locations
	-----------------------------------------------------------------
	
	IDE CD-ROM (ATAPI 1.2)  ATAPI.SYS     Disk 3
	Mitsumi CD-ROM          MITSUMI.SYS   Disk 3
	Panasonic CD-ROM        MKECR5XX.SYS  Disk 3
	SONY CD-ROM             SLCD32.SYS    Disk 3
	Sound Blaster CD-ROM    MKECR5XX.SYS  Disk 3
	
	NOTE: It is also possible to add the Panasonic CD-ROM driver using the following
	steps:
	
	1. After copying the correct driver outlined in the above article, restart
	  Windows NT.
	
	2. Start Control Panel and choose Devices.
	
	3. Find the driver copied in the earlier step.
	
	4. Mark the driver for automatic startup.
	
	5. Restart Windows NT.
	
	Additional query words: prodnt compact Matsushita-Kotobuki CR- 52x CR-56x device
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	
