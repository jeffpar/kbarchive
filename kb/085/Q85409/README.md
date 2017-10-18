---
layout: page
title: "Q85409: MS-DOS 5.0a Upgrade README.TXT: Setup Notes"
permalink: kb/085/Q85409/
---

## Q85409: MS-DOS 5.0a Upgrade README.TXT: Setup Notes

	Article: Q85409
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5.0a Upgrade
	README.TXT file.
	
	MORE INFORMATION
	================
	
	2. NOTES ON SETUP
	-----------------
	
	2.1 Priam and Everex Disk-Partitioning Software
	-----------------------------------------------
	
	For information about Priam and Everex, see the section "Setup displays the
	'Incompatible hard disk or device driver' message" in Chapter 4 of Getting
	Started.
	
	2.2 SyQuest Removable Hard Disk
	-------------------------------
	
	For information about SyQuest, see the section "Setup displays the 'Incompatible
	hard disk or device driver' message" in Chapter 4 of Getting Started.
	
	2.3 Bernoulli Drive
	-------------------
	
	If Setup refers you to this section, contact Iomega before you install MS-DOS 5.0
	to get information about an updated RCD.SYS device driver.
	
	2.4 Disk Manager
	----------------
	
	If you are using DOS 3.x on a system that has a Disk Manager partition larger
	than 512MB, contact Ontrack Computer Systems to get an upgraded version of Disk
	Manager and instructions for making the partition compatible with MS-DOS 5.0.
	
	If Setup could not update your Disk Manager driver and referred you to this
	section, do the following:
	
	1. Back up your current DMDRVR.BIN and XBIOS.OVL device drivers.
	
	2. Replace the DMDRVR.BIN and XBIOS.OVL files by using the EXPAND command to
	  expand and copy the DMDRVR.BI_ and XBIOS.OV_ files from Disk 2 for 5.25"
	  disks or from Disk 3 for 3.5" disks. NOTE: Do NOT reboot your computer.
	
	3. Type the following:
	
	  " setup /u " (without the quotation marks)
	
	2.5 SpeedStor and Volume Expansion
	----------------------------------
	
	If you have a Novell or Xenix partition, and Setup referred you to this section,
	see the section "Setup displays the 'Incompatible hard disk or device driver'
	message" in Chapter 4 of the Microsoft MS-DOS Getting Started guide.
	
	If your system is an IBM PS/2 or has MicroChannel architecture, contact your
	software vendor for disk- partitioning software that is compatible with MS-DOS
	5.0.
	
	2.6 Novell Partitions
	---------------------
	
	If your system includes Novell partitions, upgrade to MS-DOS 5.0 by typing the
	following:
	
	  " setup /u " (without the quotation marks)
	
	2.7 Vfeature Deluxe
	-------------------
	
	Contact Golden Bow Systems for information about Vfeature upgrades. Alternately,
	you can install MS-DOS 5.0 on floppy disks or delete Vfeature partitions by
	repartitioning your hard disk.
	
	2.8 Columbia Data Products Device Driver
	----------------------------------------
	
	If you use a Columbia Data Products device driver, do the following:
	
	1. Remove the DEVICE=SSTBIOS.SYS and DEVICE=SSTDRIVE.SYS commands from your
	  CONFIG.SYS file before running Setup.
	
	2. Restart your system.
	
	3. Run Setup.
	
	4. Reinstall the device drivers by returning the DEVICE= commands to your
	  CONFIG.SYS file and restarting your system.
	
	2.9 Incompatible Primary DOS Partition
	--------------------------------------
	
	If Setup referred you to this section, and no other section in part 2 of this
	README.TXT file is relevant to your system, you have a partition that is
	incompatible with MS- DOS 5.0. You must delete the partition from your hard
	disk. See the section "Your primary DOS partition is too small or incompatible"
	in Chapter 4 of the Microsoft MS-DOS Getting Started guide. Make sure you back
	up the files on your hard drive before deleting your partition.
	
	2.10 WYSE Partition
	-------------------
	
	If you have partitions created by WYSE DOS 2.11 or 3.1, you must delete them from
	your hard disk before running Setup. See the section "Your primary DOS partition
	is too small or incompatible" in Chapter 4 of the Microsoft MS-DOS Getting
	Started guide. Make sure you back up the files on your hard drive before
	deleting your partition.
	
	2.11 286 Accelerator Card
	-------------------------
	
	If your system includes a 286 accelerator card, Setup may not be able to
	determine the amount of extended memory you have and may incorrectly install
	MS-DOS 5.0. If this occurs, disable the card before running Setup. If you can't
	disable the card, install MS-DOS 5.0 manually. For information, see the section
	"How do I set up MS-DOS 5.0 Upgrade manually?" in Chapter 5 of the Microsoft
	MS-DOS Getting Started guide.
	
	2.12 Bernoulli Cache
	--------------------
	
	Before running Setup, do the following:
	
	1. Remove the CONFIG.SYS DEVICE= command that installs the caching software for
	  your Iomega Bernoulli drive.
	
	2. Restart your system.
	
	3. Run Setup.
	
	4. Reinstall the caching software by returning the DEVICE command to your
	  CONFIG.SYS file and restarting your system.
	
	2.13 AT&T 6300 Computer
	-----------------------
	
	If you use an AT&T 6300 computer and your ROM BIOS is version 1.20 or
	earlier, contact your vendor for a ROM BIOS upgrade. The ROM BIOS version number
	is displayed when you start your computer.
	
	2.14 Western Digital SCSI Hard-Disk Controller
	----------------------------------------------
	
	If you are using a Western Digital WD 7000 FASST or AT/XT SCSI controller with
	hard-disk ROM version 3.35 or earlier, contact Columbia Data Products Customer
	Services for an upgrade before installing MS-DOS 5.0. The ROM version number is
	displayed when you start your computer.
	
	2.15 Machine-Specific HIMEM.SYS Switches
	----------------------------------------
	
	This section contains HIMEM.SYS /machine switch values that are not included in
	the section "You receive the 'ERROR: Unable to control A20 line' message" in
	Chapter 4 of the Microsoft MS-DOS 5.0 Getting Started guide.
	
	    Computer             /machine value
	    --------             --------------
	    Abacus 386                 1
	    Chaplet                    1
	    Everex AT Plus 1800        1
	    Everex Notebook ELX        1
	    Excel Computer Systems    13
	    OPT 386-25 motherboard     1
	    Pak 386SX                  1
	    PC Limited                 4
	    PC380/33C, PC350/33C,
	      or PC 300/33C BIOS
	      revision 1.14            2
	
	2.16 Toshiba with a Hard RAM Disk
	---------------------------------
	
	These instructions apply to Toshiba models T1200, T1600, T1200XE and T1000LE.
	
	To use the hard RAM disk, do the following before installing MS-DOS 5.0:
	
	1. Back up your hard RAM disk.
	
	2. Using the Toshiba Setup program, delete the hard RAM disk by allocating zero
	  kilobytes to it. All data on the hard RAM disk will be lost.
	
	3. Restart your system.
	
	4. Install MS-DOS 5.0.
	
	5. Use the Toshiba Setup program to reinstall the hard RAM disk.
	
	6. Run FDISK, change to drive 2, and create a primary DOS partition. Quit FDISK.
	
	7. Use the FORMAT command to format drive D.
	
	2.17 Unix And Xenix Partitions
	------------------------------
	
	If your system includes Unix or Xenix partitions in addition to standard DOS
	partitions, and you receive a message saying a partition is incompatible with
	MS-DOS 5.0, install MS-DOS 5.0 by typing the following:
	
	  " setup /u " (without the quotation marks)
	
	2.18 Apricot XEN-S Computer
	---------------------------
	
	To install MS-DOS 5.0 on an Apricot XEN-S computer:
	
	1. Remove the DEVICE=AEMM386.SYS command from your CONFIG.SYS file.
	
	2. Restart your system.
	
	3. Run Setup.
	
	4. Put the DEVICE=AEMM386.SYS command back in your CONFIG.SYS file and restart
	  your system.
	
	2.19 4DOS
	---------
	
	Setup replaces the SHELL command in your CONFIG.SYS file with one that invokes
	COMMAND.COM. To recover your 4DOS SHELL command, retrieve it from the original
	CONFIG.SYS file, which is saved as CONFIG.DAT on your Uninstall disk.
	
	If external DOS utilities display messages that refer to error numbers, contact
	JP Software for an upgrade.
	
	2.20 LapLink
	------------
	
	If you use Traveling Software LapLink, disable the LapLink device driver before
	you install MS-DOS version 5.0. The driver conflicts with the Setup program.
	Once you install MS-DOS version 5.0, reenable the LapLink driver.
	
	2.21 Stacker
	------------
	
	If you have Stacker version 2.0 or later, follow the instructions in your Stacker
	manual to update to MS-DOS 5.0. If you have Stacker version 1.1 or earlier,
	obtain an automatic update utility from Stac Electronics.
	
	2.22 Dell DOS 3.30
	------------------
	
	Some Dell DOS 3.30 installations were done with a utility called AFORMAT, which
	creates and formats multiple 32 MB partitions. These extended partitions become
	invisible with MS-DOS 5.0 unless you run a utility called FIXPART before or
	after upgrading to MS-DOS 5.0. Contact Dell to obtain the FIXPART utility.
	
	2.23 Tandy with ROM DOS
	-----------------------
	
	Contact your hardware manufacturer for information about upgrading a Tandy
	computer with ROM DOS to MS-DOS 5.0. This applies to the following models:
	1000HX, 1000SL, 1000SL2, 1000TL, 1000TL2, 1000TL3, 2500XL, 2500XL2.
	
	2.25 SpeedStor BootAll option
	-----------------------------
	
	If Setup directed you to this section, you have a hard disk that Setup cannot
	make compatible with MS-DOS 5.0. You need to install MS-DOS 5.0 manually. For
	instructions, see the section "How do I set up MS-DOS 5 Upgrade manually?" in
	Chapter 5 of Getting Started.
	
	Additional query words: 5.00a update noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500a
	Version           : MS-DOS:5.0a
	
	=============================================================================
	
