---
layout: page
title: "Q63625: Windows 3.0 and Third-Party Hard Disk Partitioning Software"
permalink: kb/063/Q63625/
---

## Q63625: Windows 3.0 and Third-Party Hard Disk Partitioning Software

	Article: Q63625
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows development team, working closely with several hardware
	and software vendors, has identified two rare situations that could result in
	loss or corruption of data. These situations involve using third-party
	disk-partitioning software with Microsoft's SMARTDrive disk- caching utility. We
	have shipped several hundred thousand copies of Microsoft Windows version 3.0
	and have only 12 customers with verified problems.
	
	Microsoft Windows 3.0 itself works correctly on these systems. The conflict
	arises between the disk caching-utility SMARTDrive included with Windows and the
	listed third-party disk-partitioning software. Windows 3.0 is fully functional
	without the optional disk-caching utility.
	
	MORE INFORMATION
	================
	
	SYSTEMS THAT MIGHT BE AT RISK
	-----------------------------
	
	Situation 1:
	
	Your system IS at risk if the following is true:
	
	  You are using third-party disk-positioning software, such as those listed
	  below; a hard disk on your system has more than 1024 cylinders; and you are
	  using the Microsoft Windows SMARTDrive disk-caching utility.
	
	NOTE: This can only occur if you are running third-party disk-partitioning
	software, because the MS-DOS FDISK partitioning software does not support disks
	that have more than 1024 cylinders.
	
	Situation 2:
	
	Your system MAY be at risk if the following is true:
	
	  You are using third-party disk-positioning software, such as those listed
	  below; your system contains a hard disk that is not directly supported by the
	  system's ROM BIOS; you are using Microsoft Windows' SMARTDrive; and you are
	  using DOS version 3.30 or later.
	
	The risk probability is greater if your system was customized with off-the-shelf
	parts. Name-brand computers ship with ROM BIOS versions that support the hard
	drives installed by the manufacturer.
	
	DETERMINING THE RISK
	--------------------
	
	Below is a list of known disk-partitioning systems that pose a risk when used in
	conjunction with SMARTDrive.
	
	Each software package uses a device= line in the CONFIG.SYS file in your root
	directory. The device= entry tells your system that the software exists.
	
	Open your CONFIG.SYS file with any text editor and see if one of the following
	device= lines exists:
	
	  Software:     Disk Manager from Ontrack Computer Systems
	  CONFIG.SYS    device=DMDRVR.BIN
	
	  Software:     SpeedStor from Storage Dimensions
	  CONFIG.SYS:   device=SSTOR.SYS or device=HARDRIVE.SYS
	
	  Software:     innerSpace from Priam Systems
	  CONFIG.SYS:   device=EDVR.SYS
	
	  Software:     Vfeatures Deluxe from Golden Bow Systems
	  CONFIG.SYS:   device=FIXT_DRV.SYS
	
	NOTE: At the end of this article, you'll find a procedure for using Disk Manager
	to diagnose the risk. Use that procedure if you have Disk Manager by Ontrack.
	
	Removing the Risk:
	
	If you've identified your system to be at risk, you can either remove SMARTDrive
	or repartition your hard disk using the MS-DOS FDISK utility instead of
	third-party disk-partitioning software.
	
	To remove SMARTDrive from your system:
	
	1. Open your CONFIG.SYS file with any text editor.
	
	2. Delete the following line:
	
	       device=smartdrv.sys
	
	3. Save the changes to CONFIG.SYS.
	
	4. Press CTRL+ALT+DEL to reboot your system (or turn off your system and then
	  turn it back on).
	
	IF YOU USE DISK MANAGER
	-----------------------
	
	The following procedure applies to Disk Manager users only. Use it to determine
	if your system is at risk.
	
	To determine if you have a hard drive with more than 1024 cylinders. do the
	following:
	
	1. At the MS-DOS prompt, invoke Disk Manager in manual mode by typing "DM /M"
	  (without the quotation marks).
	
	2. Type "C:" (without the quotation marks) to display the disk configuration.
	
	3. If any of the disks displayed have an Actual Cylinder Count over 1024, you
	  are at risk when using SMARTDrive.
	
	To determine if your hard disk is not supported in the system BIOS, do the
	following:
	
	1. At the MS-DOS prompt, type "VER" (without the quotation marks) to display the
	  version of DOS you are running. If it is earlier than version 3.30, you are
	  not at risk. Otherwise continue.
	
	2. At the MS-DOS prompt, invoke Disk Manager in manual mode by typing "DM /M".
	
	3. Type "C:" to display the disk configuration.
	
	4. If the display says "Parameters Are Standard," you are not at risk. If it
	  says "Parameters Are Replaced," continue this process.
	
	5. For each disk in your system, compare the Setup Parameters to the Actual
	  Parameters displayed. If all of the disks displayed have a Setup Head Count
	  that matches the Actual Head Count, and a Setup Sector Count that matches the
	  Actual Sector Count, then you are not at risk. Otherwise, that drive is
	  referred to as nonhomogeneous, and you need to continue.
	
	6. From the Disk Manager Main menu, type "S" to select the nonhomogeneous drive.
	
	7. Type "P" to see the partition table for this drive.
	
	8. If the drive contains a partition with the Type "DOS", and one of the
	  following
	
	  Type "Write-Read" or "Read-Only" partitions
	
	  then you are at risk.
	
	9. Repeat Steps 6 through 8 for each nonhomogeneous drive in your system.
	
	Additional query words: 3.00 3.00a 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : :3.0,3.0a,3.1,3.11
	
	=============================================================================
	
