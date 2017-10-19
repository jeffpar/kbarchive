---
layout: page
title: "Q71867: MS-DOS 5 Upgrade README.TXT: Setup Notes"
permalink: /kb/071/Q71867/
---

## Q71867: MS-DOS 5 Upgrade README.TXT: Setup Notes

	Article: Q71867
	Product(s): Microsoft Disk Operating System
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information was taken from the Microsoft MS-DOS 5 Upgrade
	README.TXT file.
	
	MORE INFORMATION
	================
	
	2. NOTES ON SETUP
	-----------------
	
	2.1 Priam and Everex Disk-Partitioning Software:
	
	If your system uses Priam or Everex disk-partitioning software, and Setup has
	referred you to this section, you must do the following to install MS-DOS 5.0:
	
	1. Install MS-DOS 5.0 on floppy disks by typing the following command:
	
	  " setup /f" (without the quotation marks)
	
	2. Back up your DOS directory.
	
	3. Start MS-DOS 5.0 by using the floppy disks you created.
	
	4. Make sure you can access all your drives.
	
	5. If you can access all drives, insert the floppy disk that contains the
	  SYS.COM file into drive A and type the following command:
	
	  " sys c:" (without the quotation marks)
	
	6. Create a DOS directory on your hard disk.
	
	7. Copy all files on your floppy disks to the DOS directory.
	
	8. Update your CONFIG.SYS and AUTOEXEC.BAT files to refer to the new DOS files.
	  See Chapter 12 of the MS-DOS User's Guide and Reference for more information
	  about updating your CONFIG.SYS file.
	
	2.2 SyQuest Removable Hard Disk:
	
	If your system contains a SyQuest removable hard disk, use the following
	procedure to install MS-DOS 5.0:
	
	1. Remove the DEVICE=SYQ55.SYS command from your CONFIG.SYS file.
	
	2. Restart your system.
	
	3. Run Setup.
	
	After installing MS-DOS 5.0, put the DEVICE=SYQ55.SYS command back in your
	CONFIG.SYS file.
	
	2.3 Bernoulli Drive:
	
	If Setup refers you to this section, contact Iomega before you install MS-DOS 5.0
	to get information about an updated RCD.SYS device driver.
	
	2.4 Disk Manager:
	
	If you are using DOS 3.x on a system that has a Disk Manager partition greater
	than 512MB, contact Ontrack Computer Systems to get an upgraded version of Disk
	Manager and instructions for making the partition compatible with MS-DOS 5.0.
	Otherwise,do the following:
	
	1. Back up your current DMDRVR.BIN and XBIOS.OVL device drivers.
	
	2. Replace the DMDRVR.BIN and XBIOS.OVL files by using the EXPAND command to
	  expand and copy the DMDRVR.BI_ and XBIOS.OV_ files from Disk 6 for 5.25"
	  disks or from Disk 3 for 3.5" disks.
	
	3. Type the following:
	
	  " setup /u" (without the quotation marks)
	
	2.5 SpeedStor and Volume Expansion:
	
	If you have a Novell partition, and Setup referred you to this section, see
	section 2.6. If you have a Xenix partition and Setup referred you to this
	section, see section 2.17.
	
	If your system is an IBM PS/2 or has MicroChannel architecture, contact your
	software vendor for disk-partitioning software that is compatible with MS-DOS
	5.0. Otherwise, do the following to upgrade Storage Dimensions' SpeedStor or
	Hewlett-Packard's Volume Expansion:
	
	1. Use the EXPAND command to expand and copy the driver named SSTOR.SY_ to your
	  hard disk from Disk 6 for 5.25" disks or Disk 3 for 3.5" disks. Name the
	  driver SSTOR.SYS.
	
	2. If you have a DEVICE=HARDRIVE.SYS command in your CONFIG.SYS file, replace it
	  with a DEVICE=SSTOR.SYS command.
	
	3. Type the following:
	
	  " setup /u" (without the quotation marks)
	
	2.6 Novell Partitions:
	
	If your system includes Novell partitions, upgrade to MS-DOS 5.0 by typing the
	following:
	
	  " setup /u " (without the quotation marks)
	
	2.7 Vfeature Deluxe:
	
	Contact Golden Bow Systems for information about Vfeature upgrades. Alternately,
	you can install MS-DOS 5.0 on floppy disks or delete Vfeature partitions by
	repartitioning your hard disk.
	
	For information about installing on floppy disks and deleting partitions on your
	hard disk, see the "Microsoft MS-DOS Getting Started" guide.
	
	2.8 Columbia Data Systems Device Driver:
	
	If you use a Columbia Data Systems device driver, do the following:
	
	1. Remove the DEVICE=SSTBIOS.SYS and DEVICE=SSTDRIVE.SYS commands from your
	  CONFIG.SYS file before running Setup.
	
	2. Restart your system.
	
	3. Run Setup.
	
	4. Reinstall the device drivers by returning the DEVICE= commands to your
	  CONFIG.SYS file and restarting your system.
	
	2.9 Incompatible Partition:
	
	If Setup referred you to this section, and no other section in part 2 of the
	readme is relevant to your system, you have a partition that is incompatible
	with MS-DOS 5.0. You must delete the partition from your hard disk. See the
	procedure for repartitioning your hard disk in Chapter 4 of the "Microsoft
	MS-DOS Getting Started" guide.
	
	2.10 WYSE Partition:
	
	If you have partitions created by WYSE DOS 2.11 or 3.1, you must delete them from
	your hard disk before running Setup. See the procedure for repartitioning your
	hard disk in Chapter 4 of the "Microsoft MS-DOS Getting Started" guide.
	
	2.11 286 Accelerator Card:
	
	If your system includes a 286 accelerator card, Setup may not be able to
	determine the amount of extended memory you have and may incorrectly install
	MS-DOS 5.0. If this occurs, disable the card before running Setup. If you can't
	disable the card, install MS-DOS 5.0 manually. For information about manually
	installing MS-DOS 5.0, see the "Microsoft MS-DOS Getting Started" guide.
	
	2.12 Bernoulli Cache:
	
	Before running Setup, do the following:
	
	1. Remove the CONFIG.SYS DEVICE= command that installs the caching software for
	  your Iomega Bernoulli drive.
	
	2. Restart your system.
	
	3. Run Setup.
	
	4. Reinstall the caching software by returning the DEVICE= command to your
	  CONFIG.SYS file and restarting your system.
	
	2.13 AT&T 6300 Computer:
	
	If you use an AT&T 6300 computer and your ROM BIOS is version 1.20 or
	earlier, contact your vendor for a ROM BIOS upgrade. The ROM BIOS version number
	is displayed when you start your computer.
	
	2.14 Western Digital SCSI Hard-Disk Controller:
	
	If you are using a Western Digital WD 7000 FASST or AT/XT SCSI controller with
	hard-disk ROM version 3.35 or earlier, contact your vendor for an upgrade before
	installing MS-DOS 5.0. The ROM version number is displayed when you start your
	computer.
	
	2.15 Machine-Specific HIMEM.SYS Switches:
	
	Before you install MS-DOS 5.0 on a system listed in this section, you must edit
	your CONFIG.SYS file as follows:
	
	1. If there is no DEVICE=HIMEM.SYS command, add it to your CONFIG.SYS file,
	  provided you have extended memory and don't have an extended-memory manager.
	
	2. Add the appropriate /machine switch to the DEVICE=HIMEM.SYS command. For
	  example, if you have an Intel 301z, your DEVICE=HIMEM.SYS command would look
	  like this:
	
	  device=c:\dos\himem.sys /machine:8
	
	3. After changing the CONFIG.SYS file, run Setup.
	
	  System                    Switch
	  ------                    ------
	  Bull Micral 60            /machine:16
	  COMPUADD 386 systems      /machine:1 or /machine:8
	  Datamedia 386/486         /machine:2
	  Hitachi HL500C            /machine:8
	  Intel 301z or 302         /machine:8
	  JDR 386/33                /machine:1
	  Toshiba 5100              /machine:7
	  UNISYS PowerPort          /machine:2
	
	2.16 Toshiba T1600 and a Hard RAM Disk:
	
	To use the hard RAM disk, do the following before installing MS-DOS 5.0:
	
	1. Back up your hard RAM disk.
	
	2. Using the Toshiba Setup program, delete the hard RAM disk by allocating zero
	  KB to it. All data on the hard RAM disk will be lost.
	
	3. Restart your system.
	
	4. Install MS-DOS 5.0.
	
	5. Use the Toshiba Setup program to reinstall the hard RAM disk.
	
	6. Run FDISK, change to drive 2, and create a primary DOS partition. Quit FDISK.
	
	7. Use the FORMAT command to format drive D.
	
	2.17 Unix And Xenix Partitions:
	
	If your system includes Unix or Xenix partitions in addition to standard DOS
	partitions, and you receive a message saying a partition is incompatible with
	MS-DOS 5.0, install MS-DOS 5.0 by typing the following:
	
	  " setup /u" (without the quotation marks)
	
	2.18 Apricot XEN-S Computer:
	
	To install MS-DOS 5.0 on an Apricot XEN-S computer:
	
	1. Remove the DEVICE=AEMM386.SYS command from your CONFIG.SYS file.
	
	2. Restart your system.
	
	3. Run Setup.
	
	4. Put the DEVICE=AEMM386.SYS command back in your CONFIG.SYS file and restart
	  your system.
	
	2.19 Installing MS-DOS 5.0 on an OS/2 Dual-Boot System:
	
	If you install your operating system by using the BOOT /OS2 or BOOT /DOS command,
	install MS-DOS 5.0 as follows:
	
	1. Start DOS by using the BOOT /DOS command.
	
	2. Run Setup.
	
	If you use the form of an OS/2 dual-boot system that prompts you at startup to
	select an operating system, do the following:
	
	1. Install MS-DOS 5.0 on your hard disk.
	
	2. Create a system disk by inserting a disk in drive A and typing the FORMAT A:
	  /S command.
	
	3. Delete the COMMAND.COM file from the floppy disk.
	
	4. On the floppy disk, create a CONFIG.SYS file that includes the following:
	
	  shell=c:\dos\command.com /p /e:256
	
	5. On the floppy disk, create an AUTOEXEC.BAT file that includes the following
	  commands:
	
	  path=c:\dos
	  append /e
	  append c:\dos
	  prompt $p$g
	  set comspec=
	
	6. Reinstall the OS/2 operating system on your hard disk.
	
	7. Insert in drive A the system disk you created and restart your computer.
	
	8. Run the dual-boot program (C:\DUALBOOT\DUALBOOT.EXE).
	
	2.20 4DOS:
	
	Setup replaces the SHELL command in your CONFIG.SYS file with one that invokes
	COMMAND.COM. To recover your 4DOS SHELL command, retrieve it from the original
	CONFIG.SYS file, which is saved as CONFIG.DAT on your Uninstall disk.
	
	If external DOS utilities display messages that refer to error numbers, contact
	JP Software for an upgrade.
	
	2.21 8514 Display Adapters:
	
	If you install MS-DOS 5.0 on a system that includes an 8514 display adapter, do
	the following after completing the MS-DOS 5.0 installation:
	
	1. Check the PACKING.LST file to determine which disk has VGA.GR_ and EGA.VI_
	  files.
	
	2. Use the EXPAND command to expand and copy the VGA.GR_ file from the disk to
	  your DOS directory. Name the file DOSSHELL.GRB.
	
	3. Use the EXPAND command to expand and copy the EGA.VI_ file from the disk to
	  your DOS directory. Name the file DOSSHELL.VID.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : :5.0
	
	=============================================================================
	
