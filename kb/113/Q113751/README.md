---
layout: page
title: "Q113751: Using 32-Bit Disk Access on WD 2540 Hard Disk Drives"
permalink: /kb/113/Q113751/
---

## Q113751: Using 32-Bit Disk Access on WD 2540 Hard Disk Drives

	Article: Q113751
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	
	The following article contains information about the use of Windows and
	Windows for Workgroups with third-party products or configurations that
	have not been tested and are not supported by Microsoft.
	
	If the steps or procedures described in this article do not function
	properly, contact the manufacturer of the third-party product for
	more information or use a supported configuration.
	
	SYMPTOMS
	========
	
	After you enable 32-bit disk access (FastDisk), the system becomes unstable or
	stops responding (hangs) during startup, or Windows displays one of the
	following error messages:
	
	- The Microsoft Windows 32-bit disk driver (WDCTRL) validation failed at phase
	  XX, XX.
	
	- Windows: This application has tried to access your hard disk in a way that is
	  incompatible with the Windows 32-bit disk access feature (WDCTRL). This may
	  cause your system to become unstable.
	
	- Insufficient memory or address space to run Windows in Enhanced mode. Remove
	  TSR programs to free memory.
	
	CAUSE
	=====
	
	These errors occur when you use a hard disk with more than 1024 cylinders. IDE
	hard disks must have CMOS settings with the following upper limits to use 32-bit
	disk access:
	
	  Cylinders:      1024
	  Heads:          16
	  Sectors/Track:  63
	  Bytes/Sector:   512
	
	You can use the Microsoft Diagnostics (MSD) utility to view these settings, or
	you can examine the CMOS settings for your computer to confirm the values for
	these settings. Please see your hardware documentation for instructions about
	accessing your computer's CMOS settings.
	
	If your hard disk is incompatible with 32-bit disk access, you can disable this
	feature by following these steps:
	
	1. In Control Panel, double-click the 386 Enhanced icon.
	
	2. Choose the Virtual Memory button, then choose Change.
	
	3. Clear the Use 32-Bit Disk Access check box.
	
	NOTE: You can also disable 32-bit disk access by starting Windows with the /D:F
	switch, or by setting 32BitDiskAccess to OFF in the [386Enh] section of the
	SYSTEM.INI file.
	
	RESOLUTION
	==========
	
	The following list of workarounds is grouped by manufacturer. If your hard disk
	does not appear in this list, please contact your hard disk manufacturer for
	more information.
	
	Conner
	------
	
	7546AT:
	
	The 7546AT Conner drive is a 540 megabyte (MB) drive with 1048 cylinders, 16
	heads, and 63 sectors per track. Reducing the number of cylinders in the CMOS
	settings to 1024, then repartitioning and reformatting the disk may allow 32-bit
	disk access and 32-bit file access to work.
	
	WARNING: Be sure to back up your data before you repartition or reformat your
	hard disk. Repartitioning or reformatting the disk will remove all information
	from the disk.
	
	IBM
	---
	
	If you have an IBM ValuePoint computer that supports IDE hard disks with more
	than 1024 cylinders, you should download two files from the IBM BBS. The files
	are VPWINBHF.DSK and LDF.COM. For information about how to enable 32-bit disk
	access using these files, please contact IBM.
	
	Maxtor
	------
	
	7540AV:
	
	To use 32-bit disk access with the Maxtor 7540AV hard disk, you may need to
	reduce the cylinder count from 1048 to 1024.
	
	7546AT:
	
	To use 32-bit disk access with the Maxtor 7546AT hard disk, you may need to
	reduce the cylinder count from 1048 to 1024.
	
	7548AT:
	
	The Maxtor 7548AT IDE hard disk drive has 1060 cylinders, 16 heads, and 63
	sectors per track. Reducing the cylinder count in the CMOS settings to 1024
	allows 32-bit disk access to work. If you continue to get an error message, you
	may need to add the NOMOVEXBDA parameter to the EMM386.EXE command in the
	CONFIG.SYS file.
	
	For more information about Maxtor hard disks and 32-bit disk access
	compatibility, please contact Maxtor.
	
	Quantum
	-------
	
	LPS-540AT:
	
	The Quantum LPS-540AT hard disk defaults to 1120 cylinders, 59 logical sectors
	per track, and 16 heads. According to Quantum technical support, this drive can
	be configured with 1024 cylinders, 63 logical sectors per track, and 16 heads to
	make this drive compatible with 32-bit disk access.
	
	NOTE: Quantum's BBS has a self-extracting file, IDE_DOS.EXE, that contains an
	MS-DOS utility that allows the drive to be formatted to 540 megabytes. Included
	in this file is IDE_WIN.386, which is the Quantum replacement for WDCTRL.
	
	For more information about configuring your Quantum hard disk or about using the
	files listed above, please contact Quantum.
	
	Samsung SHD-30560A
	------------------
	
	Samsung recommends 1024 cylinders, 16 heads, and 63 sectors (for a total of 528.0
	MB) to use 32-bit disk access.
	
	Western Digital
	---------------
	
	WDAC-2420:
	
	The Western Digital 2420 hard disk is incompatible with 32-bit disk and file
	access in Windows. For information about using this hard disk with 32-bit disk
	and file access in Windows, please contact Western Digital.
	
	Caviar WDAC-2540:
	
	Western Digital has confirmed that the Caviar model 2540 516 MB hard disk uses
	BIOS parameter settings that are incompatible with the 32-bit disk access driver
	(WDCTRL) included with Windows.
	
	To work around this problem, use one of the following methods:
	
	- If the BIOS in your computer does not support drives with more than 1024
	  cylinders, download a utility program called WDSWT.COM from the Western
	  Digital BBS. This utility stamps the disk with a parameter translation brand
	  so that it reports 1024 cylinders to the Windows 32-bit disk access driver.
	  This procedure is reversible should the need arise.
	
	  NOTE: WDSWT.COM is for use with the AC2540 drive only. It is not intended for
	  use on the AC2700 (730 MB) or AC31000 (1083 MB) drives.
	
	
	- Download the self-extracting file WIN31.EXE from the Western Digital BBS.
	  This file contains the driver WDCDRV.386, which can be used to replace
	  WDCTRL.
	
	- Update your computer's ROM BIOS to a version that supports logical block
	  addressing (LBA) to automatically translate more than 1024 cylinders.
	
	- Disable 32-bit disk access.
	
	- Change the CMOS settings for the drive to 1024 cylinders or fewer, and then
	  run FDISK and reformat the disk. This workaround allows the use of WDCTRL,
	  but results in a loss of 11.8 MB of disk space.
	
	  WARNING: Be sure to back up your data before you repartition or reformat your
	  hard disk. Repartitioning or reformatting the disk will remove all
	  information from the disk.
	
	For more information about these workarounds, please contact Western Digital.
	
	
	MORE INFORMATION
	================
	
	32-bit disk access is a set of protected-mode device drivers that work together
	to enhance your computer's BIOS. It filters interrupt (INT) 13H calls to the
	hard disk controller and directs them in the most efficient way for the system
	(either through the 32-bit interface with the hard disk controller or through
	the system BIOS).
	
	In Windows for Workgroups version 3.11, a hard disk that is incompatible with
	32-bit disk access may still be able to use 32-bit file access. The largest
	performance gain is accomplished using 32-bit file access. Using 32- bit file
	access provides compatibility with future versions of Windows.
	
	The Windows 32-bit disk access driver (WDCTRL) supports disk controllers that are
	compatible with the Western Digital 1003 controller interface standard, but is
	compatible only with hard disks with 1024 or fewer cylinders.
	
	
	REFERENCES
	==========
	
	For more information about 32-bit disk access, see the Microsoft Windows for
	Workgroups "Resource Kit," version 3.11, pages 1-19.
	
	Additional query words: 3.10 3.1 3.11 VFAT dmdrvr.bin disk manager WDCTRL 07, 1F 1F, 071F 540 03, 3f 033f 33f P5-66
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : :3.1,3.11
	
	=============================================================================
	
