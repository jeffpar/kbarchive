---
layout: page
title: "Q102870: Reading the Boot Sector of a Drive"
permalink: /kb/102/Q102870/
---

## Q102870: Reading the Boot Sector of a Drive

	Article: Q102870
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbSample kbOSWin310 kb16bitonly
	Last Modified: 21-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	BOOTSEC demonstrates how to use Interrupt 25h (absolute disk read) to read the
	boot sector (the first sector on head 0, cylinder 0) off of a drive (either a
	floppy disk drive or hard disk).
	
	BOOTSEC checks to see whether the drive is one of the following:
	
	  Drive            Detection Method
	  ---------------------------------
	  CD-ROM           Interrupt 2F calls to MSCDEX.
	  Net drive        Windows API WNetGetConnection().
	  RAM drive        Checks the boot sector to see if there is one FAT.
	  Hard disk        Checks the media BYTE of the boot sector. If it is
	                   equal to 0xF8h then it is a hard disk.
	  Floppy disk      Checks the media BYTE of the boot sector. If it is
	                   not equal to 0xF8h and it is not a RAM drive, net
	                   drive, or CD-ROM drive, then it is a floppy disk drive.
	
	BOOTSEC also shows how to implement a dialog box as a main window using a private
	dialog class.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Bootsec.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The following information is contained in the boot sector:
	
	- The jump instruction to the boot strap routine
	
	- The name of the OEM and the version of MS-DOS
	
	- Bytes per sector
	
	- Sectors per cluster
	
	- Reserved sectors
	
	- Number of file allocation tables
	
	- Number of root directory entries
	
	- Number of sectors
	
	- Media descriptor
	
	- Number of sectors occupied by each FAT
	
	- Number of sectors on a single track
	
	- Number of read/write heads on the drive
	
	- Number of hidden sectors
	
	- Number of huge sectors
	
	- Whether the disk is the first hard disk drive
	
	- The boot signature
	
	- The volume serial number
	
	- The volume label
	
	- The file system type
	
	NOTE: The information contained in the boot sector was changed in MS-DOS 5.0. If
	this program is run on a disk that was formatted with a previous version of
	MS-DOS, then some of the fields in the structure will not be filled out, and the
	program may display garbage. The elements of the structure that were not changed
	will be displayed correctly.
	
	Additional query words: INT softlib BOOTSEC.EXE KBFILE
	
	======================================================================
	Keywords          : kbfile kbSample kbOSWin310 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
