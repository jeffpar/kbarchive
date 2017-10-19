---
layout: page
title: "Q86356: README.TXT: Microsoft Windows &amp; MS-DOS 5 Upgrade"
permalink: /kb/086/Q86356/
---

## Q86356: README.TXT: Microsoft Windows &amp; MS-DOS 5 Upgrade

	Article: Q86356
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 3.1 
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Windows & MS-DOS 5 Upgrade
	README.TXT file.
	
	MORE INFORMATION
	================
	
	MICROSOFT WINDOWS 3.1 & MS-DOS 5 UPGRADE
	
	README.TXT
	====================================
	
	This file provides important information not included in the
	"Microsoft Getting Started" manual, the "Microsoft MS-DOS User's Guide
	and Reference," the "Windows User's Guide" or in online Help.
	Specifically, this file addresses problems with setting up MS-DOS.
	
	For information about other files and documentation, see the "Welcome"
	section of "Getting Started."
	
	Look through the following table of contents to determine whether your
	software or hardware is included.
	
	Note: APPNOTES.TXT contains critical information about using CodeView
	     and Intel Aboveboard with MS-DOS 5.0.
	
	The following topics are discussed in this file:
	
	1. Readme Conventions
	2. Notes on Setup
	  2.1 Priam and Everex Disk-Partitioning Software
	  2.2 SyQuest Removable Hard Disk
	  2.3 Iomega Bernoulli Products
	  2.4 Disk Manager
	  2.5 SpeedStor and Volume Expansion
	  2.6 Novell Partitions
	  2.7 Vfeature Deluxe
	  2.8 Columbia Data Products Device Driver
	  2.9 Incompatible Primary DOS Partition
	  2.10 WYSE Partition
	  2.11 286 Accelerator Card
	  2.12 Iomega Bernoulli Products
	  2.13 AT&T 6300 Computer
	  2.14 Western Digital SCSI Hard-Disk Controller
	  2.15 Machine-Specific HIMEM.SYS Switches
	  2.16 Toshiba with a Hard RAM Disk
	  2.17 Unix and Xenix Partitions
	  2.18 Apricot XEN-S Computer
	  2.19 4DOS
	  2.20 LapLink
	  2.21 Stacker
	  2.22 Dell DOS 3.30
	  2.23 Tandy with ROM DOS
	  2.25 SpeedStor Bootall option
	  2.26 Setup switches for corporate administrators
	  2.27 Setting up MS-DOS on floppy disks if your Setup disks
	       are a higher density than your drive A
	  2.28 Your non-Windows application runs out of memory
	       after Setup
	  2.29 MS-DOS Shell doesn't work correctly on a computer
	       with an 8514 display or ATI Ultra card
	  2.30 DR-DOS, Superstor, and DELWATCH
	  2.31 You receive the "Unable to control the A20 line"
	       message
	  2.32 You receive the "You must have the file WINA20.386 in the
	       root of your boot drive to run Windows in Enhanced Mode."
	  2.33 Bootsafe
	  2.34 Reinstalling MS-DOS after installing Windows and MS-DOS
	3. Notes on Memory Management
	  3.1 386MAX (5.11 or Earlier)
	  3.2 All Computers Inc. Expanded-Memory Driver
	      (ALLEMM4.SYS)
	  3.3 Problems Loading into the Upper Memory Area
	  3.4 Intel Expanded-Memory Driver (EMM.SYS)
	  3.5 XMAEM.SYS and XMA2EMS.SYS
	  3.6 Using QEMM or 386Max to load high
	4. Making Your Hardware Compatible with MS-DOS 5.0
	  4.1 Acer 1100/33 and CTRL+ALT+DEL
	  4.2 Amstrad Systems and KEYB.COM
	  4.3 Apricot Qi 386 Systems
	  4.4 AT&T Computer with VDC 750 Display Adapter Card
	  4.5 Compaq EXTDISK.SYS Driver
	  4.6 Corel Corporation Disk Drivers
	  4.7 External Floppy Disk Drives
	      * Nth
	      * Procomm
	      * Sysgen
	  4.8 Hardcard
	  4.9 IBM PS/1, installing MS-DOS 5.0
	  4.10 NCR VGA BIOS
	  4.11 Olivetti System with a CGA Video Board
	  4.12 Toshiba T3100SX
	  4.13 Western Digital VGA Card
	  4.14 ATI WonderCard 3.x
	  4.15 XGA and EMM386.EXE
	  4.16 Zenith Computer
	  4.17 Zeos 486 and Task Swapper
	5. Documentation Corrections and Additions
	  5.1 New CV.COM for CodeView
	  5.2 Documentation Corrections
	  5.3 Hercules Display Adapter (MSHERC.COM)
	  5.4 QBasic "On Error" Command
	
	1. README CONVENTIONS
	=====================
	If you have questions about procedures or commands mentioned in this
	file, you will probably find answers in the Microsoft "MS-DOS User's
	Guide and Reference." The following paragraphs describe frequently
	mentioned topics that the guide covers in more detail.
	
	Many sections of the readme discuss changing your CONFIG.SYS file. For
	detailed information about modifying a CONFIG.SYS file, see Chapter 11
	of the "MS-DOS User's Guide and Reference."
	
	The readme often refers to DEVICE commands in your CONFIG.SYS file.
	These DEVICE= statements are meant to be examples of the type of
	command you might need to add to your CONFIG.SYS file. You need to
	modify these statements to reflect the configuration of your system.
	For more information, see the DEVICE command in Chapter 14 of the
	"MS-DOS User's Guide and Reference."
	
	The readme sometimes asks you to use the EXPAND command to copy files
	from the distribution disks to your hard disk. See Chapter 14 of the
	"MS-DOS User's Guide and Reference" for more information about using
	the EXPAND command.
	
	2. NOTES ON SETUP
	=================
	For information about the Windows portion of Setup and Setup conflicts
	with terminate-and-stay-resident (TSR) programs, see the SETUP.TXT
	file.  For the location of the file, see the PACKING.LST file on Setup
	disk 1.
	
	2.1 Priam and Everex Disk-Partitioning Software
	-----------------------------------------------
	For information about Priam and Everex, see the section "Setup
	displays the 'Incompatible hard disk or device driver' screen" in
	Chapter 3 of "Getting Started."
	
	2.2 SyQuest Removable Hard Disk
	-------------------------------
	For information about SyQuest, see the section "Setup displays the
	'Incompatible hard disk or device driver' screen" in Chapter 3 of
	"Getting Started."
	
	2.3 Iomega Bernoulli Products
	-----------------------------
	Bernoulli Cache
	
	For information about Bernoulli Cache, see the section "Setup displays
	the 'Incompatible hard disk or device driver' screen" in Chapter 3 of
	"Getting Started."
	
	Note: The most recent Iomega products may include Future Systems
	     Solutions' SpeedCache+, which is usually loaded with a command
	     in the AUTOEXEC.BAT file. If you use SpeedCache+, open your
	     AUTOEXEC.BAT file with any text editor, type "rem" and a space
	     in front of the command that loads the SCPLUS.EXE file, and save
	     the file, and restart your computer by pressing CTRL+ALT+DEL.
	     For example, the modified command line should look like this:
	
	     REM SCPLUS INSTALL
	
	     After you have installed Windows and MS-DOS, remove the "rem"
	     from the command line, save the file, and restart your computer.
	
	Fixed Drive and Bernoulli Removable Drive
	
	If your computer has a fixed disk drive, the fixed disk drive should
	be used to boot your computer. The ROM on the Iomega PC2B or PC4B
	adapter should be disabled. Refer to the Host Adapter Installation
	guide for more information.
	
	Bernoulli OAD and RCD Drivers
	
	All versions of Iomega OAD drivers are compatible with MS-DOS 5.0.
	The OAD drivers began shipping in May 1992
	
	If you are using an Iomega RCD driver, such as RCD.SYS or RCD4.SYS,
	you need at least version 4.7 for a PC2 adapter or version 6.2 for
	a PC4 adapter. If you have an Iomega PC0 adapter (A10-20.COM) or a
	PC3B adapter (RCD3.SYS), you will need a new adapter card. Contact
	Iomega Customer Service for more information.
	
	If you have problems installing Windows and MS-DOS 5.0 on a bootable
	Bernoulli drive, and you are using the new Iomega OAD driver, disable
	the driver in the CONFIG.SYS file before running Setup. To disable the
	driver, open your CONFIG.SYS file with any text editor and type "rem"
	and a space in front of the command that loads the driver. The command
	line should look something like this:
	
	REM DEVICE=C:\OADDOS\DOSOAD.SYS
	
	Save the file and restart your computer by pressing CTRL+ALT+DEL. Then
	Run Setup again. If you cannot set up Windows and MS-DOS, contact
	Iomega Customer Service for more information.
	
	If you are able to set up Windows and MS-DOS, remove the "rem" from
	the command line that loads the OAD driver, save the file, and
	restart your computer.
	
	2.4 Disk Manager
	----------------
	For information about Disk Manager, see the section "Setup displays
	the 'Incompatible hard disk or device driver' screen" in Chapter 3 of
	"Getting Started."
	
	2.5 SpeedStor and Volume Expansion
	----------------------------------
	If you have a SpeedStor partition on your computer, Setup probably
	referred you to this section for one of the following reasons:
	
	* Setup could not find in your CONFIG.SYS file a command
	 for the device driver that supports your SpeedStor partition.
	 If this is the case, add the command line to your CONFIG.SYS
	 file, restart your computer, and run Setup. For more information
	 about adding the command line to your CONFIG.SYS file, see your
	 SpeedStor documentation.
	
	* Your CONFIG.SYS file has a DEVICE=HARDRIVE.SYS line in it.
	 If this is the case, carry out the following procedure:
	  1. Use the EXPAND command to expand and copy the SSTOR.SYS
	     file to your hard disk. Make sure you copy the SSTOR.SYS
	     file to the same path as the HARDRIVE.SYS file.
	
	     See the PACKING.LST file on Setup disk 1 for the location
	     of the SSTOR.SYS file on the Setup disks and for instructions
	     on how to expand and copy it to your hard drive.
	
	  2. Replace the DEVICE=HARDRIVE.SYS file with a DEVICE=SSTOR.SYS
	     command. For example, if the command that loaded the
	     HARDRIVE.SYS file was "DEVICE=C:\SSTOR\HARDRIVE.SYS", you
	     would replace it with the following:
	
	     DEVICE=C:\SSTOR\SSTOR.SYS
	
	  3. Restart your computer by pressing CTRL+ALT+DEL.
	
	  4. To make sure you can access your hard drive, type the following
	     at the command prompt:
	
	     dir
	
	  5. Insert Setup disk 1 in drive A, and type the following at the
	     command prompt:
	
	     a:setup
	
	If you have a Novell or Xenix partition, see the section "Setup
	displays the 'Incompatible hard disk or device driver' screen" in
	Chapter 3 of "Getting Started."
	
	If your system is an IBM PS/2 or has MicroChannel architecture,
	contact your software vendor for disk-partitioning software that is
	compatible with MS-DOS 5.0.
	
	2.6 Novell Partitions
	---------------------
	For information about Novell Partitions, see the section "Setup
	displays the 'Incompatible hard disk or device driver' screen" in
	Chapter 3 of "Getting Started."
	
	2.7 Vfeature Deluxe
	-------------------
	For information about Vfeature Deluxe, see the section "Setup displays
	the 'Incompatible hard disk or device driver' screen" in Chapter 3 of
	"Getting Started."
	
	2.8 Columbia Data Products Device Driver
	----------------------------------------
	If you use a Columbia Data Products device driver, carry out the
	following procedure:
	
	  1. Remove the DEVICE=SSTBIOS.SYS and DEVICE=SSTDRIVE.SYS commands
	     from your CONFIG.SYS file before running Setup.
	  2. Restart your system.
	  3. Run Setup.
	  4. Reinstall the device drivers by returning the DEVICE=
	     commands to your CONFIG.SYS file and restarting your system.
	
	2.9 Incompatible Primary DOS Partition
	--------------------------------------
	If Setup referred you to this section, and no other section in part 2
	of this README.TXT file is relevant to your system, you have a
	partition that is incompatible with MS-DOS 5.0. You must delete the
	partition from your hard disk. See the section "Setup detects a
	problem with your primary DOS partition" in Chapter 3 of "Getting
	Started." Make sure you back up the files on your hard drive before
	deleting your partition.
	
	2.10 WYSE Partition
	-------------------
	If you have partitions created by WYSE DOS 2.11 or 3.1, you must
	delete them from your hard disk before running Setup. See the section
	"Setup detects a problem with your primary DOS partition" in Chapter 3
	of "Getting Started." Make sure you back up the files on your hard
	drive before deleting your partition.
	
	2.11 286 Accelerator Card
	-------------------------
	If your system includes a 286 accelerator card, Setup may not be able
	to determine the amount of extended memory you have and may
	incorrectly install MS-DOS 5.0. If this occurs, disable the card
	before running Setup. If you can't disable the card, install MS-DOS
	5.0 manually. Use the procedure in the "Priam and Everex" section of
	"Setup displays the 'Incompatible hard disk or device driver' screen"
	in Chapter 3 of "Getting Started."
	
	2.12 Iomega Bernoulli Products
	------------------------------
	If Setup refers you to this section, see section 2.3 of this file.
	
	2.13 AT&T 6300 Computer
	-----------------------
	If you use an AT&T 6300 computer and your ROM BIOS is version 1.20 or
	earlier, contact your vendor for a ROM BIOS upgrade. The ROM BIOS
	version number is displayed when you start your computer.
	
	2.14 Western Digital SCSI Hard-Disk Controller
	----------------------------------------------
	If you are using a Western Digital WD 7000 FASST or AT/XT SCSI
	controller with hard-disk ROM version 3.35 or earlier, contact
	Columbia Data Products Customer Services for an upgrade before
	installing Windows and MS-DOS 5.0. The ROM version number is displayed
	when you start your computer.
	
	2.15 Machine-Specific HIMEM.SYS Switches
	----------------------------------------
	For HIMEM.SYS /machine switch values, see "You receive the 'Missing
	HIMEM.SYS' message" in Chapter 4 of "Getting Started," and page 545 of
	the "User's Guide" for Microsoft Windows version 3.1.
	
	2.16 Toshiba with a Hard RAM Disk
	---------------------------------
	These instructions apply to Toshiba models T1200, T1600, T1200XE and
	T1000LE.
	
	To use the hard RAM disk, do the following before installing MS-DOS
	5.0:
	 1. Back up your hard RAM disk.
	 2. Using the Toshiba Setup program, delete the hard RAM
	    disk by allocating zero kilobytes to it. All data on
	    the hard RAM disk will be lost.
	 3. Restart your system.
	 4. Install Windows and MS-DOS.
	 5. Use the Toshiba Setup program to reinstall the hard RAM
	    disk.
	 6. Run FDISK, change to drive 2, and create a primary DOS
	    partition. Quit FDISK.
	 7. Use the FORMAT command to format drive D.
	
	2.17 Unix And Xenix Partitions
	------------------------------
	If you have a Novell or Xenix partition, see the section "Setup
	displays the 'Incompatible hard disk or device driver' screen" in
	Chapter 3 of "Getting Started."
	
	2.18 Apricot XEN-S Computer
	---------------------------
	To install Windows and MS-DOS on an Apricot XEN-S computer:
	  1. Remove the DEVICE=AEMM386.SYS command from your CONFIG.SYS file.
	  2. Restart your system.
	  3. Run Setup.
	  4. Put the DEVICE=AEMM386.SYS command back in your CONFIG.SYS file
	     and restart your system.
	
	2.19 4DOS
	---------
	Setup replaces the SHELL command in your CONFIG.SYS file with one that
	invokes COMMAND.COM. To recover your 4DOS SHELL command, retrieve it
	from the original CONFIG.SYS file, which is saved as CONFIG.DAT on
	your Uninstall disk.
	
	If external DOS utilities display messages that refer to error
	numbers, contact JP Software for an upgrade.
	
	2.20 LapLink
	-------------
	If you use Traveling Software LapLink, disable the LapLink device
	driver before you install Windows and MS-DOS. The driver conflicts
	with the Setup program. Once you install Windows and MS-DOS, reenable
	the LapLink driver.
	
	2.21 Stacker
	------------
	
	If you are using Stacker data-compression software on your computer,
	begin by determining which drives are compressed and which are
	uncompressed.
	
	To determine which drives are compressed and which are uncompressed
	
	*   Type the following at the command prompt:
	
	   [drive]:\stacker\swapmap
	
	   For the [drive] parameter, type the letter of the drive
	   that contains your Stacker directory.
	
	   If drive C was drive C at boot time, carry out Procedure 1.
	
	   Otherwise, the drive that was C at boot time is the uncompressed
	   drive. The drive that is now C is compressed. Carry out Procedure
	   2.
	
	Procedure 1
	
	To set up Windows and MS-DOS
	
	1   Type the following at the command prompt:
	
	   a:setup
	
	2   When the "A disk-compression program is in use" screen
	   appears, choose Continue Setup.
	
	3   Follow the instructions on your screen.
	
	Procedure 2
	
	You need to determine whether there is enough disk space on your
	uncompressed drive to set up MS-DOS 5.0
	
	To determine whether there is enough disk space
	
	*   Type the following at the command prompt:
	
	   chkdsk [drive]:
	
	   For the [drive] parameter, type the letter of the
	   uncompressed drive.
	
	   Information about your hard disk appears. If the bytes
	   available on disk are more than 3,000,000, carry out
	   Procedure 1. Otherwise, carry out Procedure 3.
	
	Procedure 3
	
	To set up Windows and MS-DOS on a computer that has Stacker installed:
	
	1   Quit Setup if you have not already done so.
	
	2   Set up MS-DOS on floppy disks by typing the
	   following at the command prompt:
	
	   a:setup /f
	
	   Follow the instructions on your screen.
	
	   NOTE
	   If your Setup disks are a higher density than your drive A, see
	   section 2.27 of the README.TXT file to set up MS-DOS on floppy
	   disks.
	
	3   Restart your computer from the hard disk by removing disks
	   from all floppy disk drives, and restarting your computer by
	   pressing CTRL+ALT+DEL.
	
	4   To determine the path of COMMAND.COM file, type the following
	   at the command prompt:
	
	   set
	
	   A list of environment variables appears on your screen.
	
	   The line that begins with COMPSPEC= indicates the location of the
	   COMMAND.COM file. For example, the following indicates that the
	   COMMAND.COM file is in the DOS directory:
	
	   COMSPEC=C:\DOS\COMMAND.COM
	
	5   Type the following at the command prompt:
	
	   c:\stacker\swapmap
	
	   The drive that was C at boot time is the uncompressed drive. The
	   drive that is now C is the compressed drive.
	
	6   Create an OLDDOS directory by typing the following at the command
	   prompt:
	
	   md c:\olddos
	
	7   Copy your old DOS files to the OLDDOS directory. For example, if
	   your files are in C:\DOS, type the following at the command
	   prompt:
	
	   copy c:\dos\*.* c:\olddos
	
	8   Delete your original DOS files from your DOS directory. For
	   example, if your original files are in the DOS directory on
	   drive C, type the following at the command prompt:
	
	   del c:\dos\*.*
	
	9   Copy all files from the Startup/Support disk to the directory that
	   contained your original DOS files.
	
	   For example, if the Startup/Support disk is in drive A, and you
	   want to copy the files to the DOS directory on drive C, type the
	   following:
	
	   copy a:*.* c:\dos
	
	10  If the COMSPEC variable indicates that the COMMAND.COM file is in
	   a directory other than the one your original DOS files were in,
	   copy the COMMAND.COM file to the directory the COMSPEC variable
	   specifies.
	
	11  Copy the COMMAND.COM file to the DOS directory on the uncompressed
	   drive. (Refer to Step 5 to determine which drive uncompressed.)
	   For example, if the Startup/ Support disk is in drive A and the
	   DOS directory is on the uncompressed drive E, type the following
	   at the command prompt:
	
	   copy a:command.com e:\dos
	
	12  Insert the Help/BASIC/Edit/Utility disk in drive A, and copy all
	   the files from it to your DOS directory on drive C. Then insert
	   the Supplemental disk in drive A, and copy all the files from it
	   to your DOS directory on drive C.
	
	13  On the uncompressed drive, update any drivers in your CONFIG.SYS
	   file that load before the STACKER.COM file.
	
	   Typically, these files are located in the DOS directory on the
	   uncompressed drive. For example, if the DOS directory contains the
	   SETVER.EXE, EMM386.EXE, and HIMEM.SYS files, copy these files
	   From your floppy disks to the DOS directory on the uncompressed
	   drive. To determine the location of the device driver files on the
	   Startup/Support, Help/BASIC/Edit/Utility, and Supplemental disks,
	   open the PACKING.LST file on Setup Disk 1 by using any text
	   editor.
	
	   If a driver you need is not located on one of these disks, expand
	   and copy the driver from the Setup disks. To determine the
	   location of the driver you need, open the PACKING.LST file on
	   Setup Disk 1 by using any text editor. The PACKING.LST file also
	   contains instructions on how to expand the compressed files on the
	   Setup disks.
	
	   Note: Do not update the SMARTDRV.EXE or SMARTDRV.SYS files. Setup
	   will update these file for you.
	
	14  Copy the CHKDSK.EXE file from the DOS directory on drive C to the
	   DOS directory on your uncompressed drive.
	
	15  Insert the Startup/Support disk in drive A, and restart your
	   computer by pressing CTRL+ALT+DEL. Then type the following at the
	   command prompt:
	
	   sys a: c:
	
	16  Remove disks from all floppy disk drives, and restart your
	   computer by pressing CTRL+ALT+DEL. If Stacker prompts you to
	   update the COMMAND.COM file, choose Yes.
	
	17  To make sure you can access your hard disk, type the following at
	   the command prompt:
	
	   c:
	   dir
	
	18  Insert the Startup/Support disk in drive A, and type the following
	   at the command prompt:
	
	   a:
	   sys a: c:
	
	19  Repeat step 16.
	
	20  Before setting up Windows, read the following information.
	
	If you are using Stacker to compress your hard disk, there are
	certain steps you need to take before setting up Windows.
	
	*  If you have not set up MS-DOS 5.0, and you want to set up
	  Windows only on a computer with an older version of Stacker,
	  your computer might halt on Setup disk 3 while it is analyzing
	  your system software. If this happens, remove the Setup disk,
	  restart your computer by pressing CTRL+ALT+DEL, and run
	  Setup again by typing the following at the command prompt:
	
	  a:setup /w /c
	
	  Note: Before you run Setup again, make sure all the commands
	        that load memory-resident programs have been disabled
	        in your AUTOEXEC.BAT and CONFIG.SYS files. To disable
	        a command, type "rem" and a space in front of the command
	        in your CONFIG.SYS and AUTOEXEC.BAT file. Then save the
	        file, and restart your computer.
	
	*  If you want to use a swap file with Windows, you must
	  set up the swap file on the uncompressed drive. When
	  setting up Stacker, you can leave at least 1 megabyte (MB)
	  of disk space uncompressed for storing system files. To
	  leave enough space for the swap file, it is recommended
	  that you allocate as uncompressed disk space twice the
	  amount of your system memory. For example, if your
	  system has 4 MB of memory, you should leave at least 8 MB
	  of disk space uncompressed. For more information about
	  swap files, see "Working with Windows Swap Files" in Chapter 14,
	  "Optimizing Windows," in the "Microsoft Windows User's Guide."
	
	  If Stacker is already set up on your computer and there is not
	  enough uncompressed disk space for a swap file, you can run
	  the STAC utility provided with Stacker to increase the amount
	  of uncompressed disk space. For more information, see your
	  Stacker documentation.
	
	*  If you upgraded from an earlier version of Stacker to
	  Stacker 2.0 or later, choose the Custom Setup option
	  when you run Setup. When Setup prompts you, don't choose to let
	  Setup modify your CONFIG.SYS and AUTOEXEC.BAT files. Modify
	  these files yourself after Setup is complete by carrying out
	  the following steps:
	
	  * In your AUTOEXEC.BAT, add Windows to your path.
	
	  * Copy the HIMEM.SYS and EMM386.EXE files to your
	    uncompressed drive, unless you use a different memory
	    manager, such as QEMM-386.
	
	  * Add DEVICE commands for HIMEM.SYS and EMM386.EXE to
	    your CONFIG.SYS file, unless you use a different memory
	    manager such as QEMM-386. The command lines that load these
	    drivers should appear before the command that loads
	    STACKER.COM.
	
	  * Make sure a copy of SMARTDRV.EXE is on the
	    uncompressed drive. In your CONFIG.SYS file, the
	    SMARTDRV.EXE command line should include the
	    "/double_buffer" switch and should be the path
	    of the file at boot time. For example, if SMARTDRV.EXE
	    is in the root directory at boot time, you would include
	    the following command in your CONFIG.SYS:
	
	    DEVICE=C:\SMARTDRV.EXE /DOUBLE_BUFFER
	
	    SMARTDRV.EXE should be loaded before STACKER.COM in the
	    CONFIG.SYS file.
	
	  * In the AUTOEXEC.BAT file, the SMARTDRV.EXE command
	    line should be the path of the file after disk drives
	    are swapped. Also, add the /L switch to the SMARTDRV.EXE
	    command in your AUTOEXEC.BAT file.
	
	*  If you are using Stacker version 2.0 or later, but didn't
	  upgrade from Stacker version 1.1, choose the Express Setup
	  option when you are prompted. Setup will modify your CONFIG.SYS
	  and AUTOEXEC.BAT files for you. When Setup is finished making
	  the modifications, it displays a message at the end
	  of the Windows portion of Setup that notifies you of the
	  modifications that have been made. If you have used Stacker to
	  swap your startup drive, when you restart your system Stacker will
	  ask whether you want to update to the new version of the
	  CONFIG.SYS or AUTOEXEC.BAT file. Choose Yes.
	
	*  If you are using a version of Stacker earlier than 2.0, you
	  need to modify your CONFIG.SYS and AUTOEXEC.BAT files
	  yourself, using the CONFIG.WIN and AUTOEXEC.WIN files that
	  Setup generates. For information about using these files,
	  see "Modifying Your CONFIG.SYS and AUTOEXEC.BAT Files Yourself,"
	  following this topic.
	
	*  After you have set up MS-DOS manually, type the following at
	  the command prompt to set up Windows:
	
	  a:setup /w
	
	  Note: After you have set up Windows and know your system is
	        working correctly, you might want to delete the DOS files
	        in your OLDDOS directory.
	
	Modifying Your CONFIG.SYS and AUTOEXEC.BAT Files Yourself
	---------------------------------------------------------
	
	If Setup cannot modify your startup files, Setup writes proposed
	changes to the CONFIG.WIN and AUTOEXEC.WIN files. (These files may
	also be named CONFIG.00x and AUTOEXEC.00x if CONFIG.WIN and
	AUTOEXEC.WIN already exist.) In this case, you must either move
	the HIMEM.SYS, SMARTDRV.EXE, and EMM386.EXE files to a drive
	that is available when you start your computer, or use a
	text editor to modify your CONFIG.SYS or AUTOEXEC.BAT file
	so that any references to HIMEM.SYS, SMARTDRV.EXE, and
	EMM386.EXE appear after the DEVICE command that loads
	the drivers for your disk drives. Refer to the CONFIG.WIN
	and AUTOEXEC.WIN files for the proposed changes.
	
	Note: You have the choice of using HIMEM.SYS and EMM386.EXE
	     as your memory managers, or of using a third-party
	     memory manager, such as QEMM-386. If you decide to
	     use a third-party memory manager, do not copy HIMEM.SYS
	     or EMM386.EXE to a drive that is available when you
	     start your computer, and do not add commands for these
	     files to your AUTOEXEC.BAT or CONFIG.SYS file. These files
	     should already include the correct command lines for your
	     memory manager.
	
	     If you decide to use HIMEM.SYS and EMM386.EXE instead
	     of the third-party memory manager, delete the commands
	     that load the third-party memory manager in your
	     CONFIG.SYS or AUTOEXEC.BAT file. Then add command lines
	     for HIMEM.SYS and EMM386.EXE in your CONFIG.SYS or
	     AUTOEXEC.BAT file.
	
	2.22 Dell DOS 3.30
	------------------
	Some Dell DOS 3.30 installations were done with a utility called
	AFORMAT, which creates and formats multiple 32 MB partitions. These
	extended partitions become invisible with Windows and MS-DOS unless
	you run a utility called FIXPART before or after installing Windows
	and MS-DOS. Contact Dell to obtain the FIXPART utility.
	
	2.23 Tandy with ROM DOS
	-----------------------
	Contact your hardware manufacturer for information about upgrading a
	Tandy computer with ROM DOS to MS-DOS 5.0. This applies to the
	following models: 1000HX, 1000SL, 1000SL2, 1000TL, 1000TL2, 1000TL3,
	2500XL, 2500XL2.
	
	2.25 SpeedStor BootAll option
	-----------------------------
	If you have SpeedStor BootAll, see the section "Setup displays the
	'Incompatible Partition' screen" in Chapter 3 of "Getting Started."
	
	2.26 Setup switches for corporate administrators
	------------------------------------------------
	The following Setup switches can be used when installing Windows and
	MS-DOS:
	
	/G              Does not create the Uninstall Disk, does
	               not ask if the user is on a network, and does
	               not offer the hard disk backup option.
	
	/G /H:filespec  Runs the MS-DOS portion of Setup in Batch-mode
	               and uses the default Setup options. Also
	               runs the Windows portion of Setup according to
	               FILESPEC file.
	
	/J              Does not ask if the user is on a network and
	               does not offer the hard disk backup option.
	
	/W              Installs Windows only.
	
	/A              Expands and copies Windows files on Setup disks
	               to a network server.
	
	               Note: Typing "setup" at the command prompt for
	                     the network drive will run Windows-only
	                     Setup.
	
	                     To set up both Windows and MS-DOS from a
	                     network share point, you must use the procedure
	                     in section 3, "General Notes," of the
	                     NETWORKS.TXT file. If you use this procedure,
	                     typing "dwsetup" will install both Windows and
	                     MS-DOS.
	
	2.27 Setting up MS-DOS on floppy disks if your Setup disks
	    are a higher density than your drive A
	----------------------------------------------------------
	To make a setup of floppy disks, carry out the following procedure:
	
	1    Insert Setup disk 1 in your high density drive (for example,
	    drive B) and a formatted floppy disk in drive A.
	2    Type the following at the command prompt:
	    b:setup /f /m
	    Specify drive A for the Startup/Support disk. Follow the
	    instructions on your screen.
	3    Insert Setup disk 1 in your high density drive (for example,
	    drive B), and type the following at the command prompt:
	    b:setup /f
	    Follow the instructions on your screen.
	
	Use the disk you created in step 2 as your boot disk. Use the disks
	you created in step 3 when you want to use an MS-DOS command.
	
	2.28 Your non-Windows application runs out of memory after Setup
	----------------------------------------------------------------
	If you are running a non-Windows application that uses a lot of
	memory, and it runs out of memory from the command line, try the
	following:
	
	* Lower the amount of memory that SMARTDrive uses. For more
	 information, see "Using the SMARTDrive Command Line" in Chapter
	 14, "Optimizing Windows," in the "Microsoft Windows User's Guide."
	
	* Run the non-Windows application from Windows. For more information,
	 see Chapter 7, "Non-Windows Applications," in the "Microsoft Windows
	 User's Guide."
	
	2.29 MS-DOS Shell doesn't work correctly on a computer with an 8514
	    display or ATI Ultra card
	-------------------------------------------------------------------
	If the MS-DOS Shell doesn't work correctly after installing Windows
	and MS-DOS and your system has an 8514 display or ATI Ultra card,
	carry out the following procedure:
	
	1    Run Setup again.
	2    Choose the Install MS-DOS only option.
	3    Change the Video Type to 8514.
	4    Complete Setup.
	
	2.30 DR-DOS, Superstor, and DELWATCH
	------------------------------------
	Superstor
	
	If you use SuperStor on a computer with DR-DOS, do not use the DR-DOS
	version of SSTORDRV.SYS driver with MS-DOS 5.0. This driver has not
	been tested with MS-DOS 5.0. Instead, carry out the following
	procedure:
	
	1    Back up all of your data files onto floppy disks.
	2    Install MS-DOS onto floppy disks by typing the following at the
	    command prompt:
	
	    a:setup /f /m
	
	3    Reformat your hard drive and transfer your system files by
	    inserting the Startup/Support disk in drive A, and typing the
	    following at the command prompt:
	
	    format c: /s
	
	4    Run Setup to install Windows and MS-DOS.
	5    Restore your data files to the hard drive.
	
	DELWATCH
	
	If you are using the DELWATCH utility with DR DOS, carry out
	the following procedure.
	
	Note: To determine if DELWATCH is on your system, and has been
	     creating "pending delete" files, run the DR-DOS CHKDSK utility.
	
	Note: Even if you run DELWATCH from a floppy disk, you need to run
	     the DELPURGE utility as described in step 3 below.
	
	1    Before running Setup, open your CONFIG.SYS or AUTOEXEC.BAT file,
	    and remove the command that loads the DELWATCH file. Then save
	    the file.
	2    Restart your computer.
	3    Run the DELPURGE utility to purge your hard drive of "pending"
	    delete" files.
	4    Run Windows and MS-DOS Setup.
	
	2.31 You receive the "Unable to control the A20 line"
	    message
	-----------------------------------------------------
	If you receive this message during Setup, carry out Procedure 1.
	If you receive this message after Setup, your computer is an 80386 or
	80486, and you are trying to run Windows 3.0, carry out Procedure
	2.
	
	Procedure 1
	
	1    Quit Setup if you have not already done so.
	2    Run Setup again.
	3    Choose the Install MS-DOS only option.
	4    When you restart your computer, observe whether this message
	    appears on your screen.
	
	    If you receive this message again, you need to add a /MACHINE
	    switch to the command that loads the HIMEM.SYS file in your
	    CONFIG.SYS file. See the table in "You receive the 'Missing
	    HIMEM.SYS' message" in Chapter 4, "Troubleshooting During System
	    Startup," in "Getting Started" to determine what switch to use.
	    After you have added the switch to your CONFIG.SYS file, restart
	    your computer by pressing CTRL+ALT+DEL.
	
	5    Run Setup again.
	6    Choose the Install Windows only option.
	
	Procedure 2
	
	*    Expand the WINA20.386 file from the Setup disks and copy it to
	    the root directory of drive C. See the PACKING.LST file on Setup
	    disk 1 for the location of the WINA20.386 and for instructions
	    on how to expand and copy the file.
	
	2.32 You receive the "You must have the file WINA20.386 in the root
	    of your boot drive to run Windows in Enhanced Mode."
	------------------------------------------------------------------
	
	If you receive this message after Setup, your computer is an 80386
	or 80486, and you are running QEMM-386, carry out the following
	procedure:
	
	1    Open your CONFIG.SYS file with any text editor.
	2    Add the following line to the end of the file:
	
	    switches=/w
	
	3    Save the file, and restart your computer by pressing
	    CTRL+ALT+DEL.
	4    Run Windows.
	
	2.33 Bootsafe
	-------------
	If you are running Bootsafe, you may experience problems while
	running Setup. Carry out the following procedure:
	
	1    Open your AUTOEXEC.BAT with any text editor.
	2    Type "REM" and a space in front of the line that loads
	    Bootsafe. For example, the line might look something like this:
	
	    rem c:\cpav\bootsafe
	
	3    Save the file, and restart your computer by pressing
	    CTRL+ALT+DEL.
	4    Run Setup again.
	5    After installing Windows and MS-DOS, remove the "REM" and space
	    you added before the command that loads Bootsafe in your
	    AUTOEXEC.BAT file. Then save the file, and restart your computer
	    by pressing CTRL+ALT+DEL.
	
	2.34 Reinstalling MS-DOS after installing Windows and MS-DOS
	------------------------------------------------------------
	Before you reinstall MS-DOS, note the SMARTDRV.EXE switches which may
	be in your AUTOEXEC.BAT file. Because setting up MS-DOS alone will
	remove all existing SMARTDRV.EXE switches, you will need to manually
	restore any switches which Setup removes.
	
	3. NOTES ON MEMORY MANAGEMENT
	=============================
	
	3.1 386MAX (5.11 or Earlier)
	----------------------------
	If you have used the SETVER command to report a different version
	number to a program you are loading into the upper memory area with
	386LOAD.COM or MAXHI.COM, also use the SETVER command to report that
	number to 386LOAD.COM or MAXHI.COM. For information about the SETVER
	command, see Chapter 14 of the "MS-DOS User's Guide and Reference."
	
	The new version number is reported to all programs loaded by
	386LOAD.COM and MAXHI.COM.
	
	MAXHI.COM programs supplied with versions of 386MAX earlier than 5.0
	are incompatible with MS-DOS 5.0.
	
	3.2 All Computers Inc. Expanded-Memory Driver (ALLEMM4.SYS)
	-----------------------------------------------------------
	Version 2.5 or later of the All Computers expanded-memory driver
	(ALLEMM4.SYS) is compatible with MS-DOS 5.0 HIMEM.SYS. Contact All
	Computers to get an updated driver.
	
	3.3 Problems Loading into the Upper Memory Area
	-----------------------------------------------
	Some computers with bus master DMA controllers may not be able to load
	device drivers or programs into the upper memory area. Add a
	"DEVICE=SMARTDRV.EXE /DOUBLE_BUFFER" command before any DEVICEHIGH
	commands in your CONFIG.SYS file. Make sure the command includes the
	full path of the SMARTDRV.EXE file. For example, if the SMARTDRV.EXE
	file is in the WINDOWS directory on drive C, the command would look
	like this:
	
	DEVICE=C:\WINDOWS\SMARTDRV.EXE /DOUBLE_BUFFER
	
	Also, add an /L switch to the SMARTDRV.EXE command in your
	AUTOEXEC.BAT file. This is required if you use the /DOUBLE_BUFFER
	switch in your CONFIG.SYS file.
	
	3.4 Intel Expanded-Memory Driver (EMM.SYS)
	------------------------------------------
	If you use Intel's EMM.SYS driver with Aboveboard, use EMM.SYS version
	4.0 revision D or later. If you have an earlier version, contact Intel
	for a free upgrade.
	
	3.5 XMAEM.SYS and XMA2EMS.SYS
	-----------------------------
	Setup disables the CONFIG.SYS commands that load XMAEM.SYS and
	XMA2EMS.SYS. If your system uses both drivers, replace the commands
	with a DEVICE=EMM386.EXE command in your CONFIG.SYS file.
	
	If your system includes an XMA card, remove the REM command that
	precedes the DEVICE=XMA2EMS.SYS command in your CONFIG.SYS file.
	
	3.6 Using QEMM or 386Max to load high
	-------------------------------------
	If you use QEMM or 386Max to load device drivers high, Setup will not
	detect and update these device drivers. If you load your device rivers
	high, carry out the following procedure:
	
	1     Open your CONFIG.SYS or AUTOEXEC.BAT file with any text editor,
	     and remove the commands or switches that load the device drivers
	     high.
	
	2     Run Setup again, and choose the Install MS-DOS Only option.
	
	3     When Setup is complete, open your CONFIG.SYS or AUTOEXEC.BAT
	     file with any text editor, and insert the commands or switches
	     that load your device drivers high.
	
	4     Save the file, and restart your computer by pressing
	     CTRL+ALT+DEL.
	
	4. MAKING YOUR HARDWARE COMPATIBLE WITH MS-DOS 5.0
	==================================================
	
	4.1 Acer 1100/33 and CTRL+ALT+DEL
	---------------------------------
	If you have an Acer 1100/33 computer with an Award BIOS, you may not
	be able to restart your system by using CTRL+ALT+DEL. Contact Acer for
	a ROM BIOS upgrade.
	
	4.2 Amstrad Systems and KEYB.COM
	--------------------------------
	If your Amstrad system has a ROM BIOS version earlier than 1.4, and
	you can't use your keyboard after loading KEYB.COM, contact your
	vendor for a ROM BIOS upgrade.
	
	4.3 Apricot Qi 386 Systems
	--------------------------
	If your Apricot Qi 300 fails to start while loading EMM386.EXE,
	contact Apricot for a ROM BIOS upgrade.
	
	Some Apricot Qi660 and Qi900 computers may not work if MS-DOS 5.0 is
	loaded into the high memory area. Run MS-DOS 5.0 in conventional
	memory, or contact Apricot Computers for more information.
	
	4.4 AT&T Computer with VDC 750 Display Adapter Card
	------------------------------------------------------
	Before using the MS-DOS Shell Task Swapper on an AT&T computer with a
	VDC 750 display adapter card, remove the DEVICE=EGA.SYS command from
	your CONFIG.SYS file.
	
	4.5 Compaq EXTDISK.SYS Driver
	-----------------------------
	Compaq EXTDISK.SYS driver version 3.00 or later is compatible with MS-
	DOS 5.0. Contact your vendor for an upgrade.
	
	4.6 Corel Corporation Disk Drivers
	----------------------------------
	If your Corel Corporation disk driver doesn't work correctly, contact your
	vendor for an upgrade.
	
	4.7 External Floppy Disk Drives
	-------------------------------
	If you can't use your Nth, Procomm, or Sysgen external floppy disk
	drive, contact your vendor for an update.
	
	4.8 Hardcard
	------------
	a) Hardcard II
	
	  If you can't use Plus Development Hardcard II or Hardcard
	  II XL when running EMM386.EXE, specify the exclude (x=)
	  switch to prevent EMM386 from conflicting with the card's
	  BIOS address.
	
	  See your Hardcard II manual to determine which address
	  space to exclude. See the "MS-DOS User's Guide and
	  Reference" for more information about the exclude switch.
	
	b) Hardcard 40 or Passport
	
	  If you are using Hardcard 40 or a Passport removable
	  disk, and you have a DEVICE command for PLUSDRV.SYS in
	  your CONFIG.SYS file, carry out the following procedure
	  before installing Windows and MS-DOS:
	
	  1. Disable or remove the DEVICE command for PLUSDRV.SYS
	     command line in your CONFIG.SYS file.
	  2. Run Setup.
	  3. Reenable or return the DEVICE command for PLUSDRV.SYS
	     in your CONFIG.SYS file. Make it the last line in the
	     file.
	
	4.9 IBM PS/1, installing MS-DOS 5.0
	-----------------------------------
	If your IBM PS/1 stops running after installing Windows and MS-DOS,
	see "MS-DOS or Windows won't start after you run Setup" in Chapter 4
	of "Getting Started."
	
	4.10 NCR VGA BIOS
	-----------------
	If you have an NCR VGA BIOS and can't switch between screens when
	running MS-DOS Shell or QBasic, see your NCR manual for information
	about making your VGA BIOS PS/2 compatible.
	
	4.11 Olivetti System with a CGA Video Board
	-------------------------------------------
	An Olivetti system with a CGA video board may not scroll correctly.
	Add the /s switch to the DEVICE=ANSI.SYS command in your CONFIG.SYS
	file.
	
	4.12 Toshiba T3100SX
	--------------------
	Toshiba T3100SX computer's suspend/resume feature is incompatible with
	EMM386.EXE. Either disable the feature or do not use EMM386.EXE.
	
	4.13 Western Digital VGA Card
	-----------------------------
	If you have a Western Digital VGA card and are using RAMBIOS.EXE and
	RAMBIOS.SYS, load RAMBIOS.SYS before ANSI.SYS and DISPLAY.SYS in your
	CONFIG.SYS file, and load RAMBIOS.EXE before GRAPHICS.COM in your
	AUTOEXEC.BAT file.
	
	4.14 ATI WonderCard 3.x
	-----------------------
	If you have an ATI WonderCard, see "Setup screens are unreadable" in
	Chapter 3 of "Getting Started."
	
	4.15 XGA and EMM386.EXE
	-----------------------
	If you use an XGA display with EMM386.EXE, you may need to exclude
	certain memory ranges with the EMM386 EXCLUDE option (x=). To
	determine which memory ranges to exclude, use the reference disk that
	came with your computer to view the memory map.
	
	4.16 Zenith Computer
	--------------------
	To use the GRAPHICS command with a Zenith computer, set the STACKS
	command in your CONFIG.SYS file to at least STACKS=9,256. For
	information about the STACKS command, see Chapter 14 of the "MS-DOS
	User's Guide and Reference."
	
	4.17 Zeos 486 and Task Swapper
	------------------------------
	If you have a Zeos 486 computer with a Mylex BIOS, you may not be able
	to use Task Swapper in MS-DOS Shell. Contact Zeos for a ROM BIOS
	upgrade.
	
	5. DOCUMENTATION CORRECTIONS AND ADDITIONS
	==========================================
	
	5.1 New CV.COM for CodeView
	---------------------------
	Users of CodeView versions 3.0 to 3.13 should use the program CV.COM
	to start CodeView.  For more details, see the section on CodeView in
	the file APPNOTES.TXT.
	
	5.2 Documentation Corrections
	-----------------------------
	The following are corrections to the Microsoft "MS-DOS User's
	Guide and Reference":
	
	FORMAT Command:
	    If you can't use the FORMAT command to format an unformatted
	    disk, try using the /u switch.
	
	MIRROR Command:
	    You cannot use the MIRROR command with a network drive
	    or any drive you created by using the ASSIGN, SUBST, or
	    JOIN command.
	
	UNDELETE Command:
	    Do not use the UNDELETE command in the following
	    circumstances:
	    * When other programs are active.
	    * With the LOAD= command or the Shift+Enter key
	      combination in Windows or MS-DOS Shell.
	    * With Task Swapper in MS-DOS Shell.
	
	UNFORMAT Command:
	    The UNFORMAT /p switch is not compatible with the /j
	    switch.
	
	RAMDRIVE.SYS Device Driver:
	    Valid values for the RAMDrive DiskSize parameter are
	    4 through 32767.
	
	The following is a correction to the command-line Help:
	
	COMP /? Help:
	    Online help for the COMP command /d switch should state
	    that the default format is hexadecimal.
	
	5.3 Hercules Display Adapter (MSHERC.COM)
	-----------------------------------------
	If you use MS-DOS Editor or QBasic with a Hercules display adapter,
	include the MSHERC.COM command in your AUTOEXEC.BAT file.
	
	5.4 QBasic "On Error" Command
	-----------------------------
	Online help for Microsoft QBasic incorrectly states that ON ERROR
	RESUME NEXT is a valid statement. The correct syntax is as follows:
	
	  ON ERROR GOTO <LINE/LABEL>
	
	Additional query words: 3.1 3.10 5 5.0 5.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbMSDOSSearch kbMSDOS500
	Version           : :
	
	=============================================================================
	
