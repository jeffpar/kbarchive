---
layout: page
title: "Q92393: Installing MS-DOS 6.x Upgrade with Dual-Boot Schemes"
permalink: kb/092/Q92393/
---

## Q92393: Installing MS-DOS 6.x Upgrade with Dual-Boot Schemes

	Article: Q92393
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to install MS-DOS 6.x Upgrade Upgrade on systems
	running Windows NT, OS/2, or UNIX/XENIX.
	
	WINDOWS NT
	----------
	
	To install MS-DOS on a machine that is already running Windows NT, the C
	partition must be formatted as an MS-DOS FAT drive and set as the primary,
	active partition.
	
	If the file system on drive C is not an MS-DOS FAT partition, refer to section
	1.9 of the README.TXT file on the MS-DOS Setup Disk 1.
	
	If Windows NT is installed on a FAT partition, the procedure you use for
	installing MS-DOS depends on whether or not you already have a version of MS-DOS
	installed.
	
	If You Are Running Windows NT but Do Not Have MS-DOS Installed
	--------------------------------------------------------------
	
	1. Run Setup by placing the MS-DOS Setup Disk 1 in drive A and restarting your
	  computer. You may receive a message stating that MS-DOS files were found on
	  the system, even though there is no version of MS-DOS on the machine. If you
	  receive this message, continue Setup.
	
	  NOTE: If your MS-DOS disks are not compatible with your drive A, follow the
	  instructions in the "Manually Installing MS-DOS" section below.
	
	2. Follow the prompts on the screen.
	
	3. Setup may overwrite the Windows NT boot sector. As a result, Windows NT may
	  not load after Setup reboots your computer. To restore the Windows NT boot
	  sector, follow the instructions in the "Restoring the Windows NT Flex Boot
	  Loader" section below.
	
	You Are Running Windows NT and MS-DOS Is Installed (Boot Loader)
	----------------------------------------------------------------
	
	1. When you start the computer, choose MS-DOS as the operating system.
	
	2. Run MS-DOS Setup by inserting Setup Disk 1 in drive A or B, typing "a:setup"
	  (without the quotation marks) or "b:setup" (without the quotation marks) at
	  the MS-DOS command prompt, and then pressing ENTER. Follow the instructions
	  on the screen.
	
	3. Setup may overwrite the Windows NT boot sector. As a result, Windows NT may
	  not load after Setup reboots your computer. To restore the Windows NT boot
	  sector, follow the instructions in the "Restoring the Windows NT Flex Boot
	  Loader" section below.
	
	Manually Installing MS-DOS on a Windows NT Machine
	--------------------------------------------------
	
	Use this procedure if the MS-DOS Upgrade disks are not compatible with your A
	drive.
	
	1. Create a bootable floppy disk for drive A by going to another computer that
	  is running MS-DOS, inserting the MS-DOS Setup Disk 1, typing "a:setup /f"
	  (without the quotation marks) or "b:setup /f" (without the quotation marks),
	  and pressing ENTER. Follow the instructions on the screen to create the
	  Startup disk.
	
	2. Place the newly created Startup disk in drive A of the Windows NT computer on
	  which you want to install MS-DOS.
	
	3. Restart your computer by pressing CTRL+ALT+DEL.
	
	4. Transfer the system files from drive A to C. To do this, type "sys a: c:"
	  (without the quotation marks) at the MS-DOS command prompt and press ENTER.
	
	5. Put the MS-DOS Setup Disk 1 in the floppy disk drive and run Setup with the
	  /U and /Q parameters to manually copy all MS-DOS files to the hard disk
	  drive. For example, put Setup Disk 1 in drive B, type "b:setup /u /q"
	  (without the quotation marks) at the MS-DOS command prompt, and then press
	  ENTER.
	
	6. Setup may overwrite the Windows NT boot sector. As a result, Windows NT may
	  not load after Setup reboots your computer. To restore the Windows NT boot
	  sector, follow the instructions in the "Restoring the Windows NT Flex Boot
	  Loader" section.
	
	Restoring the Windows NT Flex Boot Loader
	-----------------------------------------
	
	1. To re-enable the Windows NT boot sector, start your system using Windows NT
	  Disk 1 - Setup Disk for Floppy Disk Installation (or Disk 1 - Setup Disk for
	  CD-ROM Installation if Windows NT was set up using a CD-ROM).
	
	2. At the first blue screen, press R for Repair.
	
	3. When prompted to do so, insert the Emergency Repair Disk that was created for
	  this computer when you first installed Windows NT. Follow the instructions on
	  the screen.
	
	4. Several options appear on the screen, and all of them are selected by
	  default. Clear all these options except "Verify Boot Files on Your C:
	  Drive."
	
	  To clear an option, use the ARROW keys to select the option, and then press
	  SPACEBAR to clear it.
	
	5. Select Continue, and press the ENTER key. The Emergency Repair Disk runs
	  CHKDSK, verifies the startup files are valid, and then rebuilds them if
	  necessary.
	
	6. When the procedure has completed, you are prompted to restart your computer.
	  When the system restarts, the Windows NT Boot Loader screen appears, allowing
	  you to choose MS-DOS or Windows NT.
	
	OS/2
	----
	
	If OS/2 is installed on your system without a dual-boot scheme in place (such as
	Dual Boot or Boot Manager), refer to the MS-DOS 6 "User's Guide," Chapter 1,
	page 5.
	
	The setup programs for MS-DOS 6 Upgrade and MS-DOS 6.2 preserve OS/2
	command-line-driven dual-boot programs but disable OS/2 boot-sector-driven (that
	is, menu-displayed) dual-boot schemes. The newer boot-sector-driven programs,
	such as Boot Manager, can easily be restored after Setup completes the
	installation of MS-DOS.
	
	Boot-Sector-Driven Schemes (OS/2 Versions 1.1 and 1.2)
	------------------------------------------------------
	
	Microsoft OS/2 version 1.1 and Compaq OS/2 version 1.2 use the boot-sector-
	driven dual-boot feature. With these schemes, the boot sector loads a menu from
	which you choose the operating system you want to start. MS-DOS Setup overwrites
	this information, thus disabling OS/2; you must reinstall OS/2 to enable this
	feature.
	
	Command-Line-Driven Dual-Boot Schemes (OS/2 Versions 1.3, 2.0, and 2.1)
	-----------------------------------------------------------------------
	
	The command-line-driven dual-boot feature (referred to as Dual Boot) uses a
	scheme in which the boot sector of the bootable partition (usually C) is
	rewritten to point to either DOS or OS/2 boot files in the same partition. The
	BOOT command (BOOT /DOS or BOOT /OS2) is used to set the desired boot record.
	After running the BOOT command, the machine must be rebooted to load the
	operating system.
	
	Before running the MS-DOS Setup program, the system must be booted to the MS-DOS
	operating system. To do this, run the BOOT /DOS command and reboot the computer.
	MS-DOS Setup does not affect the Dual Boot configuration.
	
	Boot Manager (OS/2 Versions 2.0 and 2.1)
	----------------------------------------
	
	Boot Manager uses a 1-megabyte non-DOS partition on the boot disk. A menu is
	displayed at startup, allowing you to select which operating system to load. The
	menu can be set to a zero time-out; in which case, the default operating system
	is automatically loaded and no menu is displayed. Once a selection is made from
	the menu, Boot Manager turns over control to the logical boot sector on the
	partition that was selected and boots that operating system.
	
	To run the setup program for either MS-DOS 6 Upgrade or MS-DOS 6.2 Upgrade, boot
	to the MS-DOS operating system, and then run MS-DOS 6.0 or 6.2 Setup. After
	Setup has installed MS-DOS, Boot Manager is disabled because the MS-DOS FAT
	partition is the active partition. To re-enable Boot Manager, run the Fdisk
	program to set the 1-megabyte non-DOS partition to Active.
	
	NOTE: The Boot Manager utility that ships with OS/2 versions 2.0 and 2.1 can also
	be used on systems running OS/2 version 1.3.
	
	
	UNIX or XENIX
	-------------
	
	If your system is set up for dual-boot functionality and you have not installed
	the MS-DOS 6 Upgrade or the MS-DOS 6.2 Upgrade, you should manually install
	MS-DOS. If your system was set up for dual-boot functionality with UNIX or XENIX
	and you installed MS-DOS using the /U switch, use the following procedure to
	restore the dual-boot functionality:
	
	1. Run FDISK.EXE.
	
	2. Choose 2 and press ENTER to set the active partition.
	
	3. Choose the UNIX partition.
	
	4. Exit Fdisk.
	
	5. Restart your computer.
	
	6. Consult your UNIX or XENIX documentation to restore the dual-boot
	  functionality.
	
	For more information on installing the MS-DOS 6 Upgrade on a system with UNIX or
	XENIX partitions, refer to the following section in Chapter 8 of the Microsoft
	MS-DOS 6 "User's Guide":
	
	Setup displays the "Incompatible hard disk or device driver" screen
	
	Additional query words: 6.22 6.00 dual boot startup system menu
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
