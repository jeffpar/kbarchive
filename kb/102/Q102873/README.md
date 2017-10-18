---
layout: page
title: "Q102873: BOOT.INI and ARC Path Naming Conventions and Usage"
permalink: kb/102/Q102873/
---

## Q102873: BOOT.INI and ARC Path Naming Conventions and Usage

	Article: Q102873
	Product(s): Microsoft Windows NT
	Version(s): 3.1,3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation versions 3.1, 3.5, 3.51, 4.0 
	- Microsoft Windows NT Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the conventions in the Advanced RISC Computing (ARC)
	specifications that are used to define the path to a Windows NT installation on
	Intel x86-processor-based computers and RISC-based computers. This article
	consists of the following sections:
	
	- x86-Based and RISC-Based ARC Paths Comparison
	
	- Differences Between the MULTI(X) and SCSI(X) Syntax and Application
	
	- Examples of x86-Based and RISC-Based ARC Paths
	
	x86-Based and RISC-Based ARC Paths Comparison
	---------------------------------------------
	
	The path to each Windows NT installation is described in a single line in the
	BOOT.INI file for x86-based computers, however, on RISC-based computers a set of
	four lines is used in the computer firmware BOOT- options to point to a single
	Windows NT installation. If there are multiple installations of Windows NT on
	your x86-based computer, the BOOT.INI has one ARC path for each installation in
	it. You are prompted with a boot menu during the boot process to choose the
	installation you want to boot.
	
	There are two basic forms in which an ARC path can appear, one form starting with
	MULTI() and the other form starting with SCSI(). Both forms are used on
	x86-based computers, however, only the SCSI() form is used on RISC computers:
	
	x86-Based Computers
	-------------------
	
	The following are generic examples of two possible BOOT.INI ARC paths:
	
	  multi(X)disk(Y)rdisk(Z)partition(W)\<winnt_dir>
	
	  -or-
	
	  scsi(X)disk(Y)rdisk(Z)partition(W)\<winnt_dir>
	
	where X, Y, Z, and W are numbers that identify the item to their left.
	
	Both ARC-path examples above allow Windows NT find the %SystemRoot% directory to
	complete the boot process by loading files in that reside in that directory. For
	additional information, see the Differences Between The MULTI(X) And SCSI(X)
	Syntax And Application section below.
	
	RISC-Based Computers
	--------------------
	
	Because the RISC-based architecture requires that the firmware points to
	different areas of the system, the ARC path to a single Windows NT installation
	consists of a group of four definitions with ARC paths (versus only a one-line
	ARC-path definition on x86-based computers). Each ARC path that follows one of
	the four definitions starts with SCSI() after the definition name:
	
	  SYSTEMPARTITION scsi(X)disk(Y)rdisk(Z)partition(W)
	  OSLOADER  scsi(X)disk(Y)rdisk(Z)partition(W)\os\<nt_dir>\osloader.exe
	  OSLOADPARTITION scsi(X)disk(Y)rdisk(Z)partition(W)
	  OSLOADFILENAME  \<winnt_dir>
	
	The following explains each line of the four-line group above.
	
	Definition 1 (SYSTEMPARTITION):
	
	  Defines the path to the SYSTEMPARTITION, the small, File Allocation Table
	  (FAT) partition which holds OSLOADER.EXE and HAL.EXE:
	
	  scsi(X)disk(Y)rdisk(Z)partition(W)
	
	Definition 2 (OSLOADER):
	
	  Defines the path to the OSLOADER file. This is the same as the
	  SYSTEMPARTITION, but it includes a path descriptor:
	
	  scsi(X)disk(Y)rdisk(Z)partition(W)\os\<nt_dir>\osloader.exe
	
	  where <nt_dir> indicates the directory in which OSLOADER.EXE resides.
	
	Definition 3 (OSLOADPARTITION):
	
	  Defines the boot partition which contains the rest of the Windows NT system
	  files:
	
	  scsi(X)disk(Y)rdisk(Z)partition(W)
	
	Definition 4 (OSLOADFILENAME):
	
	  Defines the name of the Windows NT installation directory (winnt_dir) with no
	  drive letter:
	
	  \<winnt_dir>
	
	Differences Between the MULTI(X) and SCSI(X) Syntax and Application
	-------------------------------------------------------------------
	
	MULTI(X) Syntax
	---------------
	
	The MULTI(X) syntax of the ARC path is only used on x86-based computers. In
	Windows NT version 3.1 this path is only valid for IDE and ESDI drives; in
	Windows NT version 3.5, 3.51 and 4.0 it is valid for SCSI drives as well.
	
	The MULTI() syntax indicates to Windows NT that it should rely on the computers
	BIOS to load system files. This means that the operating system will be using
	interrupt (INT) 13 BIOS calls to find and load NTOSKRNL.EXE and any other files
	needed to boot Windows NT.
	
	The X, Y, Z, and W parameters have the following meaning:
	
	- X is the ordinal number of the adapter and should always be 0 (see the text
	  below for the reason).
	
	- Y is always 0 (zero) if the ARC path starts with MULTI(), because MULTI()
	  invokes the INT 13 call as described above and therefore does not need the
	  DISK() parameter information.
	
	- Z is the ordinal for the disk on the adapter and is usually a number between
	  0 and 3.
	
	- W is the partition number. All partitions receive a number except for type 5
	  (MS-DOS Extended) and type 0 (unused) partitions, with primary partitions
	  being numbered first and then logical drives. NOTE: The first valid number
	  for W is 1, as opposed to X, Y, and Z which start at 0 (zero).
	
	Theoretically, this syntax could be used to start Windows NT on any drive in the
	system. However, this would require that all drives are correctly identified
	through the standard INT 13 interface; since support for this varies from disk
	controller to disk controller and most system BIOS only identify a single disk
	controller through INT 13, in practice it is only safe to use this syntax to
	start Windows NT from the first two drives connected to the primary disk
	controller, or the first four drives in the case of a dual-channel EIDE
	controller.
	
	In a pure IDE system, the MULTI() syntax will work for up to the four drives
	maximum on the primary and secondary channels of a dual-channel controller.
	
	In a pure SCSI system, the MULTI() syntax will work for the first two drives on
	the first SCSI controller (that is, the controller whose BIOS loads first).
	
	In a mixed SCSI and IDE system, the MULTI() syntax will work only for the IDE
	drives on the first controller.
	
	SCSI(X) Syntax
	--------------
	
	The SCSI() syntax is used on both RISC and x86-based computers and is used in all
	versions of Windows NT. Using SCSI() notation indicates that Windows NT will
	load a boot device driver and use that driver to access the boot partition.
	
	On an x86-based computer, the device driver used is NTBOOTDD.SYS, which can be
	found in the root of the system drive (generally of drive C) and is a copy of
	the device driver for the drive controller in use.
	
	On a RISC computer, the driver is built into the firmware as required by the RISC
	standards, so no file is required.
	
	The X, Y, Z, and W parameters have the following meaning when using the SCSI()
	syntax:
	
	- X is the ordinal number of the adapter as identified by the NTBOOTDD.SYS
	  driver.
	
	- Y is the SCSI ID of the target disk.
	
	- Z is the SCSI logical unit number (LUN) of the target disk. This number is
	  almost always 0 (zero).
	
	- W is the partition number. All partitions receive a number except for type 5
	  (MS-DOS Extended) and type 0 (unused) partitions, with primary partitions
	  being numbered first and then logical drives.
	
	  NOTE: This first valid number for W is 1, as opposed to X, Y, and Z which
	  start with 0.
	
	When using SCSI() notation the value of X depends upon NTBOOTDD.SYS. Each SCSI
	driver under Windows NT has its own method of ordering controllers, although
	generally they conform to the order that the BIOS on the controllers load (that
	is, if the BIOS is loaded).
	
	Additionally, if you have multiple controllers that use different device drivers,
	you should only count those controlled by NTBOOTDD.SYS when determining the
	value of the X parameter. For instance, if you have an Adaptec 2940 (which uses
	the driver AIC78XX.SYS) and an Adaptec 1542 (which uses AHA154X.SYS) X will
	always be 0. What will change is the NTBOOTDD.SYS file:
	
	- If you load Windows NT from a drive on the Adaptec 2940, NTBOOTDD.SYS is a
	  copy of AIC78XX.SYS.
	
	- If you load Windows NT from a drive on the Adaptec 1542, NTBOOTDD.SYS is a
	  copy of AHA154X.SYS.
	
	
	Example of x86-Based and RISC-Based ARC Paths
	---------------------------------------------
	
	The following are examples of valid ARC paths. The first two examples are ARC
	paths on x86-based computers. Example three is taken from a single boot entry on
	a DEC Alpha AXP 150 RISC-based computer, but should be correct for all
	RISC-based computers with similar drive configurations.
	
	NOTE: If you have multiple ARC paths in the BOOT.INI file and a combination of
	different SCSI adapters in your computer as shown in example 1 and 2 below, you
	must copy the appropriate SCSI driver to the NTBOOTDD.SYS file name in the root
	directory of the system partition (generally drive C), before you shut down to
	boot from a Windows NT installation that resides on a drive connected to the
	other SCSI controller. This is because regardless on which drive the other
	Windows NT installation resides, NTBOOTDD.SYS always resides on the system
	partition.
	
	Example 1: Multiple SCSI controllers
	------------------------------------
	
	This is an example of an x86-based computer with the following drives and
	controllers installed:
	
	- Two Adaptec 2940 SCSI controllers, each with two 1 gigabyte (GB) hard drives
	  at ID 0 and 1.
	
	- One Adaptec 1542 SCSI disk controller, with two 1 GB hard drives at ID 0 and
	  4.
	
	Each hard drive has a single, 1 GB primary partition. For the purpose of
	explaining this example, the partitions are numbered from 1 through 6, with
	partition 1 and 2 identifying disk one and two attached to the Adaptec 2940
	controller, partition 3 and 4 identifying the disks attached to the second
	Adaptec 2940 controller, and partition 5 and 6 on the disks on the Adaptec 1542.
	One of the following ARC paths appears in BOOT.INI depending on what partition
	you installed Windows NT. This example assumes that Windows NT is installed in a
	directory named WINNT35:
	
	Windows NT Installed On Corresponding ARC Path
	----------------------------------------------
	
	Partition1(on 1st Adaptec 2940) multi(0)disk(0)rdisk(0)partition(1)
	
	  \WINNT35
	
	Partition2(on 1st Adaptec 2940) multi(0)disk(0)rdisk(1)partition(1)
	
	  \WINNT35
	
	Partition3(on 2nd Adaptec 2940) scsi(1)disk(0)rdisk(0)partition(1)\WINNT35
	Partition4(on 2nd Adaptec 2940) scsi(1)disk(1)rdisk(0)partition(1)\WINNT35
	Partition5(on Adaptec 1542)     scsi(0)disk(0)rdisk(0)partition(1)\WINNT35
	Partition6(on Adaptec 1542)     scsi(0)disk(4)rdisk(0)partition(1)\WINNT35
	
	NOTES: For partition 3 and 4, NTBOOTDD.SYS is a copy of AIC78XX.SYS, for
	partition 5 and 6 NTBOOTDD.SYS is a copy of AHA154X.SYS. As an alternative to
	the ARC paths of partition 1 and 2, you can substitute the following paths
	provided that you have an NTBOOTDD.SYS file that is a copy of the AIC78XX.SYS
	driver:
	
	Windows NT Installed On Corresponding ARC Path
	----------------------------------------------
	
	Partition1(on 1st Adaptec 2940) scsi(0)disk(0)rdisk(0)partition(1)\WINNT35
	Partition2(on 1st Adaptec 2940) scsi(0)disk(1)rdisk(0)partition(1)\WINNT35
	
	However, Windows NT Setup always uses MULTI() syntax for these first two drives.
	
	Example 2: Mixed IDE and SCSI Environment
	-----------------------------------------
	
	This is an example of an x86-based computer with the following drives and
	controllers installed:
	
	- A dual-channel EIDE controller with three 1 GB drives, two on the primary
	  channel and one on the secondary channel.
	
	- An Adaptec 2940 SCSI controller with a single 4 GB hard drive at ID 3.
	
	The three EIDE drives have one 1 GB partition each, the SCSI drive has four 1 GB
	partitions. For the purpose of explaining this example, the partitions are
	numbered from 1 through 7, with partition 1 and 2 identifying disks one and two
	on the primary channel of the EIDE controller, partition 3 on the secondary
	channel, and partitions 4, 5, 6, and 7 on the SCSI drive. One of the following
	ARC paths appears in BOOT.INI depending on what partition you installed Windows
	NT. This example assumes that Windows NT is installed in a directory named
	WINNT35:
	
	Windows NT Installed On Corresponding ARC Path
	----------------------------------------------
	
	Partition1 (pri. EIDE channel) Multi(0)disk(0)rdisk(0)partition(1)\WINNT35
	Partition2 (pri. EIDE channel) multi(0)disk(0)rdisk(1)partition(1)\WINNT35
	Partition3 (sec. EIDE channel) multi(0)disk(0)rdisk(2)partition(1)\WINNT35
	Partition4 (on Adaptec 2940)   scsi(0)disk(3)rdisk(0)partition(1)\WINNT35
	Partition5 (on Adaptec 2940)   scsi(0)disk(3)rdisk(0)partition(2)\WINNT35
	Partition6 (on Adaptec 2940)   scsi(0)disk(3)rdisk(0)partition(3)\WINNT35
	Partition7 (on Adaptec 2940)   scsi(0)disk(3)rdisk(0)partition(4)\WINNT35
	
	NOTES: Loading Windows NT from partitions 4 through 7 requires an NTBOOTDD.SYS
	file which is a copy of AIC78XX.SYS.
	
	Example 3: Boot variables on a DEC Alpha AXP 150
	------------------------------------------------
	
	On a RISC computer, all boot paths are defined through the firmware. When
	creating a new boot entry for a RISC computer the firmware steps you through a
	series of prompts which aids you in defining the paths correctly; so unless you
	are editing a boot entry that is not working any more, you should never have to
	directly edit the ARC paths on a RISC computer.
	
	The following example is a boot entry on a DEC Alpha AXP 150, with a single hard
	drive at ID 0 that is partitioned as follows:
	
	- One 4 MB system partition.
	
	- One 396 MB boot partition.
	
	Windows NT is installed on the boot partition in a directory named WINNT35 and
	the OSLOADER directory is also named OS\WINNT35, however, it is on the system
	partition. The boot entry has the following values:
	
	  SYSTEMPARTITION scsi(0)disk(0)rdisk(0)partition(1)
	  OSLOADER  scsi(0)disk(0)rdisk(0)partition(1)\os\winnt35\osloader.exe
	  OSLOADPARTITION scsi(0)disk(0)rdisk(0)partition(2)
	  OSLOADFILENAME  \WINNT35
	
	Additional query words: 3.10 kbfaqw2ksetup
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : :3.1,3.5,3.51,4.0
	Issue type        : kbhowto
	
	=============================================================================
	
