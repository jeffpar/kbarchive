---
layout: page
title: "Q126009: Windows NT 3.5 SETUP.TXT File"
permalink: /kb/126/Q126009/
---

## Q126009: Windows NT 3.5 SETUP.TXT File

{% raw %}

	Article: Q126009
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains the complete text of the Windows NT 3.5 SETUP.TXT file.
	
	MORE INFORMATION
	================
	
	PRE-INSTALLATION NOTES FOR
	MICROSOFT WINDOWS NT VERSION 3.5
	
	Install Windows NT from CD-ROM or floppy disks as
	described in Chapter 1 of the Installation Guide.
	This file contains additional information you may
	need prior to installing Windows NT on some
	hardware configurations
	
	CONTENTS=========================================
	
	Additional Installation Information
	Installing over the Network Without Floppy Disks
	Boot Floppy Disks
	Creating Backup Disks
	Upgrading Windows NT 3.1 to
	  Windows NT Server 3.5
	Upgrading When Third-Party System
	  Software is Present
	Running Windows NT 3.5 on PCI Bus Systems
	Update Required when Retaining Windows NT 3.1
	Installation Directory
	Installing to Mirrored Partitions
	Selecting Keyboard Layout
	NextStep Changes to Partition Tables
	Disk Fragmentation Can Prevent Installation
	MS-DOS Undelete Sentry Blocks
	Using MS-DOS Based Disk Utilities
	Interrupt Conflicts
	ROM Shadowing on Multiprocessor Systems
	CD-ROM Installations Require Local CD-ROM Drive
	SCSI Devices Must Be On for Setup
	Disconnect UPS Serial Connections
	ACER AcerFrame 3000 MP
	Digital Alpha AXP Firmware Must Be Upgraded
	Gateway Nomad and TI Travelmate Notebooks
	IBM Personal System/2
	IBM ThinkPad
	Intel EtherExpress 16 LAN Adapter
	Toshiba T4400SX Monochrome
	Caching Disk Controllers and Drives
	Installing Windows NT on an ESDI
	  Disk Drive with More Than 1024 Cylinders
	
	=================================================
	
	Additional Installation Information
	-----------------------------------
	For general hardware information, see Chapter 2,
	"Troubleshooting," in the Installation Guide. This
	chapter contains general troubleshooting
	information about interrupt conflicts, unsupported
	peripherals, network adapter cards, SCSI drives,
	and video display adapters.
	
	See the Windows NT Hardware Compatibility List to
	determine which hardware components have been
	tested by Microsoft for compatibility with Windows NT.
	
	After you install Windows NT, read the following
	three text files:
	
	README.WRI contains general information about
	Windows NT, including information on specific
	hardware and software.
	
	PRINTER.WRI contains information about specific
	printer problems or components.
	
	NETWORK.WRI contains information about networks,
	including information on network adapter cards and
	network interoperability.
	
	Installing over the Network Without Floppy Disks
	-------------------------------------------------
	If you are upgrading or installing Windows NT from
	a share on your network, you can start WINNT.EXE
	or WINNT32.EXE with the /b switch and you will not
	need to use floppy disks during the process. You
	must have 4 MB of free hard disk space in addition
	to the minimum required for Windows NT files.
	
	To use this switch, the device your computer boots
	from must also be supported by Windows NT without
	requiring drivers from the equipment manufacturer.
	Most boot devices are supported by Windows NT
	without needing additional drivers.
	
	Microsoft suggests that when the Setup program
	offers to create boot floppies you accept the
	offer because these floppies are required when
	using the Repair disk to repair a Windows NT
	installation.
	
	Boot Floppy Disks
	-----------------
	The boot floppy disks supplied with the CD-ROM
	version are identical to those used for a
	floppy disk installation of Windows NT.
	
	Creating Backup Disks
	---------------------
	If you are a registered user and are having
	difficulty in creating a backup copy of the
	installation disks, contact your local subsidiary
	or Inside Sales regarding fulfillment disks.
	
	Disks formatted with DMF (Setup Disk 4 and beyond)
	cannot be copied to a standard high density 3.5"
	disk using the MS-DOS DISKCOPY or Windows COPY
	command.
	
	Because DMF is a new format, many existing disk
	utilities such as Norton Disk Doctor, Central
	Point?s PC Tools, and Microsoft?s ScanDisk do not
	recognize DMF and may try to write over the file
	on the installation disks.  Therefore, you should
	NOT attempt to use disk utilities to diagnose DMF-
	formatted disks.
	
	Upgrading Windows NT 3.1 to Windows NT Server 3.5
	-------------------------------------------------
	You can upgrade Windows NT 3.1 systems to Windows
	NT 3.5 Server.
	
	You cannot upgrade the computer to be a primary or
	backup domain controller. You can only upgrade the
	computer to be a server that does not participate
	in validating users.
	
	Upgrading When Third-Party System Software is Present
	----------------------------------------
	If you are using third-party system software
	that installs its own services, such as network
	redirectors, contact the software vendor to determine
	if any of these services should be disabled before
	upgrading.
	
	Running Windows NT 3.5 on PCI Bus Systems
	-----------------------------------------
	To run Windows NT on a PCI bus system, it may be
	necessary to enable the interrupts either via the
	CMOS screen or by switching jumpers on the
	motherboard.  Refer to system documentation to
	find out how to enable interrupts for your system.
	
	Update Required when Retaining Windows NT 3.1
	---------------------------------------------
	Caution:  If you are installing Windows NT 3.5 and
	also keeping a copy of Windows NT 3.1 on the same
	computer, you must run UDPATE.EXE if you want to
	prevent damage to FAT partitions and to ensure
	that any version of Windows NT 3.1 installed on
	your computer can still access files on your NTFS
	partitions.  If you do not run UPDATE.EXE, then
	after Setup is complete, the files on NTFS
	partitions cannot be seen by Windows NT 3.1.
	Also, using long filenames on FAT partitions might
	render those partitions inaccessible from within
	Windows NT 3.1.
	
	You do not need to run UPDATE.EXE if you are
	upgrading or reinstalling this new version and do
	not want to keep the older version of Windows NT
	on your computer.
	
	To update your Windows NT 3.1 system with
	UPDATE.EXE
	
	1. Before running the Windows NT 3.5 Setup
	  program, switch to the \FS31UPD\system_type
	  directory on the Windows NT 3.5 CD-ROM.
	  For example, you might switch to
	  E:\FS31UPD\I386 for x86-based systems.
	  - Or -
	  For x86-based computers only, insert the
	  Microsoft Windows NT 3.1 Update Disk in drive A
	  and make that the active drive.
	
	2. Run UPDATE.EXE.
	
	Follow the directions on the screen to complete
	the update.
	
	Installation Directory
	----------------------
	You should not install Windows NT 3.5 in the
	directory that contains Windows NT 3.1 unless you
	are upgrading. That is, Windows NT Setup might
	indicate that it has found a version of Windows NT
	on C:\WINNT, for example, and offer to upgrade the
	old installation. If you answer No to upgrading,
	then do not select this same directory (C:\WINNT)
	for installing version 3.5.
	
	Installing to Mirrored Partitions
	---------------------------------
	Setup cannot write to partitions that are part of
	a fault-tolerant configuration.  Therefore, it is
	necessary to break the mirror of a fault-tolerant
	set before installing to or upgrading an existing
	installation on that partition.  Additionally,
	Setup must be able to write to the system
	partition, so it is necessary to break the mirror
	of system partitions that are configured as fault-
	tolerant sets.
	
	Since Setup treats fault-tolerant sets as though
	they have no free space, you will receive a "not
	enough space" error if you attempt an installation
	on a fault-tolerant partition.  If you encounter
	such a message, and you are sure that you have
	enough space, check to see if your system
	partition and/or installation partition are fault-
	tolerant sets.  If either or both partitions are
	mirrored, then break the mirror(s), and attempt
	the installation again.
	
	Selecting Keyboard Layout
	-------------------------
	Be sure that usernames and passwords that are
	set for all users on a system are available on the
	default keyboard layout chosen for that system at
	setup time because there is no way to change
	keyboards at the logon screen.
	
	If you have selected a keyboard that does not
	include characters used in your username and
	password, and if you have the screen saver on with
	the lock option, then if you leave the system idle
	and the lock option is activated, you have no way
	of inputting your username and password without
	knowing the ALT+NUMPAD codes for the characters
	making it up.
	
	NextStep Changes to Partition Tables
	------------------------------------
	NextStep makes unconventional changes to partition
	tables. These changes can distort measurement of
	the amount of space remaining on a drive. If more
	space is reported than is actually available,
	installation can fail because of the lack of space
	on the drive.
	
	Disk Fragmentation Can Prevent Installation
	-------------------------------------------
	If your disk is too fragmented, there may not be
	enough room for Windows NT Setup to create
	essential system files. If this occurs, Setup will
	not be able to convert a volume at the conclusion
	of installation. Before trying to convert the
	volume again, either delete some files, or back up
	and reformat the drive.
	
	MS-DOS Undelete Sentry Blocks
	-----------------------------
	Windows NT cannot recognize free space that was
	created on a FAT partition using the undelete
	sentry feature in MS-DOS version 6.2. With the
	sentry method, MS-DOS reserves part of the hard
	drive to remember deleted files, then compensates
	during MS-DOS queries about free space. Because
	Windows NT doesn?t understand sentry, it reports
	the space on the FAT partition as used.
	
	Using MS-DOS Based Disk Utilities
	----------------------------------
	The new long filename format introduced in Windows
	NT 3.5 uses file elements on FAT partitions
	differently than MS-DOS. Using MS-DOS-based
	disk utilities on FAT partitions used by Windows
	NT 3.5 can cause files to be deleted or long
	filenames to be lost. Microsoft recommends that
	you run only disk utilities specifically designed
	for Windows NT 3.5 or, when running MS-DOS, the
	chkdsk or scandisk utilities.
	
	To prevent the Windows NT 3.5 FAT file system from
	using long names, you must set to 1 the following
	Registry entry:
	
	HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet
	 \Control\FileSystem\Win31FileSystem
	
	After changing the entry, you must restart your
	computer for the change to take effect.
	
	Caution:  PCTools? diskfix utility is known to
	delete all files on the FAT partition. If you use
	MS-DOS-based disk utilities on a FAT disk
	partition used by Windows NT 3.5, the utility may
	cause the loss of long filenames or delete files
	on the FAT partition unless this Registry entry is
	set to 1. You should back up the FAT partition
	before running any disk utility other than chkdsk.
	
	Interrupt Conflicts
	-------------------
	A common problem in a computer with several
	supported devices is conflicting interrupts, I/O
	ports, or memory usage. Where possible, we have
	identified such cases in this document. However,
	if one of the supported devices does not seem to
	work, it may be due to the particular hardware
	configuration. For more specific information, see
	your hardware manual or contact your system
	manufacturer.
	
	ROM Shadowing on Multiprocessor Systems
	---------------------------------------
	If you encounter persistent installation problems
	on multiprocessor systems, try installing with ROM
	shadowing disabled.
	
	CD-ROM Installations Require Local CD-ROM Drive
	-----------------------------------------------
	Installation from CD-ROM requires a supported SCSI
	CD-ROM drive physically attached to your computer.
	
	SCSI Devices Must Be On for Setup
	---------------------------------
	You should ensure all SCSI devices are on prior to
	installing or upgrading Windows NT version 3.5.
	
	Disconnect UPS Serial Connections
	---------------------------------
	UPS serial-monitoring cable connections should be
	disconnected during Setup. Windows NT attempts to
	automatically detect devices connected to serial
	ports, which could cause problems with UPS
	equipment connected to a serial port.
	
	ACER AcerFrame 3000 MP
	----------------------
	Before installing Windows NT, disable shadow RAM
	Video BIOS.
	
	Digital Alpha AXP Firmware Must Be Upgraded
	-------------------------------------------
	Before installing Microsoft Windows NT Workstation
	or Windows NT Server 3.5 on an Alpha AXP system,
	you must upgrade your system's firmware to the
	latest version.
	
	Read the README.TXT file provided in the following
	locations to understand the firmware revisions
	needed for your specific Alpha AXP system. This
	document also provides specific instructions for
	obtaining and applying the firmware update.
	
	The README.TXT file is available in the following
	locations:
	
	*  On CompuServe, in the DEC4WNT forum in the
	  Library Section [4], Hardware Support.
	
	*  Via FTP on GATEKEEPER.DEC.COM. Once connected
	  to the gatekeeper, the README.TXT file can be
	  found in /private/fwaxp.
	
	If you are still unsure about your particular
	upgrade requirements, call the Digital Equipment
	Corporation technical support line at
	1-800-354-9000 for further assistance.
	
	Gateway Nomad and TI Travelmate Notebooks
	-----------------------------------------
	To successfully install Windows NT on these
	machines, you must choose "Custom Setup." If you
	encounter problems running setup while scanning
	for SCSI Adapters, you can skip SCSI detection to
	solve the problem.
	
	To properly use the floppy drive with Windows NT,
	configure the system using its setup utility. Set
	the Advanced Operating System option to Auto. When
	power management drivers for these machines are
	available from Texas Instruments, using the Auto
	option will not be necessary.
	
	IBM Personal System/2
	---------------------
	On some IBM PS/2 systems only planar memory is
	recognized when booting from the Windows NT CD-ROM
	boot disk or Disk #1 of the floppy disk
	installation set. This is a memory card problem.
	You may encounter this problem if your system
	contains a card with the following part numbers:
	
	FRU-88F0075
	Option 87F9856 or 87F9860
	
	Newer model cards are available that correct this
	problem. Part numbers for the newer cards are:
	
	FRU-87F9916 or 34F2825
	Option 34F3077 or 34F3011
	
	Using Kingston expansion memory can also correct
	this problem.
	
	It is recommended that before you install Windows
	NT, you update your system configuration using the
	PS/2 Reference Diskette version 1.21 or later.
	
	IBM ThinkPad
	------------
	The IBM ThinkPad 700c and 720c portables require
	an ABIOS patch to install and run Windows NT. Copy
	the following files from the ThinkPad Reference
	Diskette onto C:\ 
	    ABIOS.SYS
	    SF*.BIO
	
	
	Intel EtherExpress 16 LAN Adapter
	---------------------------------
	In some cases, selecting "early" in the I/O
	Channel Ready box can stop the network adapter
	card from functioning correctly and may require
	reconfiguring with the Intel SoftSet utility. If
	you are unsure whether your system can take
	advantage of this network setting, consult your
	hardware vendor.
	
	Toshiba T4400SX Monochrome
	--------------------------
	The Toshiba T4400SX display is not supported when
	an external monitor is connected.
	
	Caching Disk Controllers and Drives
	-----------------------------------
	Windows NT supports caching disk controllers and
	drives only if one of the following is true:
	
	*  The controller has a driver that specifically
	  supports caching (several of these exist: DPT
	  and IBM SCSI Caching Adapter).
	
	*  Write-through is active (i.e. write caching is
	  disabled) by setting it either manually or by
	  default when the computer starts.
	
	*  The entire cache option is off, by setting it
	  either manually or by default when the computer
	  starts.
	
	Using a caching controller or drive in other
	situations risks loss of data if the computer is
	rebooted or a power failure occurs before the
	cache has flushed itself. You can minimize risk by
	waiting at least 1 minute (less if you know the
	maximum time the cache waits before flushing
	itself) after all system activity stops before
	rebooting.  The disk activity light is a good
	indicator of how write caching is being done on
	your system. This applies to the initial Windows
	NT installation as well as shutdown. Note that
	unexpected power failure at any time can
	potentially corrupt data on the disk, possibly to
	the extent that the disk becomes unreadable.
	Making the delay time that write data is cached
	before being flushed to disk as small as possible
	reduces this risk.
	
	Certain applications are data-sensitive and
	require that write-through is active. Examples of
	this are SQL Server-based applications and NTFS
	partitions.
	
	Installing Windows NT on an ESDI
	Disk Drive with More Than 1024 Cylinders
	----------------------------------------
	In some cases, on disk drives with more than 1024
	cylinders, Windows NT installation proceeds
	normally until the first boot from the hard drive
	where Windows NT is installed. The Windows NT Boot
	Loader will load various files and then produce a
	Fatal System Error: 0x0000006b with the message
	that Phase 1 Process Initialization failed.
	Following this message will be some type of
	hexadecimal dump, and the system will be locked
	up. If you experience this difficulty, the
	following information can help.
	
	Microsoft has tested the ESDI controllers
	listed in README.WRI using a hard drive with a
	capacity exceeding 516 MB (MB=1,048,576 bytes)
	formatted. The MS-DOS limit of 1024 cylinders
	creates a situation where special BIOS mapping on
	the controller is used to change the geometry of
	the drive. ESDI drives are capable of being
	prepared with various values of sectors per track
	(spt) such as 53 or 63 spt geometry during a low-
	level format, as shown in the following example:
	
	1024 cylinders x 15 heads x 53 spt x 512 bytes per
	sector = 398 MB formatted capacity
	
	- Or -
	
	1024 cylinders x 15 heads x 63 spt x 512 bytes per
	sector = 472 MB formatted capacity
	
	Thus, using 63 spt will yield 74 MB more space.
	Windows NT is perfectly compatible with either
	geometry and, depending on the drive or
	controller, can access the remaining cylinders
	beyond 1024. This space can be partitioned and
	formatted but not accessed by MS-DOS. However,
	some controllers can successfully remap the
	remaining cylinders beyond 1024 so that either
	MS-DOS or Windows NT can use the entire capacity.
	For example:
	
	1632 cylinders x 15 heads x 53 spt x 512 bytes per
	sector = 634 MB formatted capacity
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
