---
layout: page
title: "Q138489: ScanJet IIp Connected to AHA1542 SCSI May Not Work Correctly"
permalink: /kb/138/Q138489/
---

## Q138489: ScanJet IIp Connected to AHA1542 SCSI May Not Work Correctly

	Article: Q138489
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Hewlett-Packard ScanJet IIp scanner connected to an Adaptec
	AHA1542 SCSI adapter, Windows 95 may stop responding (hang) when you try to use
	the scanner.
	
	CAUSE
	=====
	
	The new Adaptec ASPI drivers may not work correctly with the default Windows 95
	Aha154x.mpd miniport driver.
	
	
	RESOLUTION
	==========
	
	Replace the Windows 95 miniport driver. A new driver is available on the Windows
	95 CD-ROM or from online services.
	
	Installing the Driver from CD-ROM
	---------------------------------
	
	1. Restart your computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then choose Command Prompt from the Startup menu.
	
	2. Type the following command, and then press ENTER:
	
	  " cd windows\system\iosubsys " (without the quotation marks)
	
	3. Type the following command, and then press ENTER:
	
	  " ren aha154x.mpd aha154x.xxx " (without the quotation marks)
	
	4. Restart your computer normally.
	
	5. In an MS-DOS session, type the following command, and then press ENTER
	
	  " copy <cdrom>:\drivers\storage\adaptec\aha154x.mpd<space>
	  c:\windows\system\iosubsys " (without the quotation marks)
	
	  where <cdrom> is the drive letter of the CD-ROM drive.
	
	  NOTE: Type the above command on one line.
	
	6. Type "exit" (without the quotation marks) and then press ENTER.
	
	7. Shut down and restart your computer.
	
	Installing the Driver from an Online Service
	--------------------------------------------
	
	1. Download the A333.exe file from the following Microsoft File Transfer
	  Protocol (FTP) site:
	
	  ftp://ftp.microsoft.com/Services/whql/drivers/win95/stoscs/
	
	2. Double-click the A333.exe file to extract its contents.
	
	3. Perform steps 1-4 above.
	
	4. In an MS-DOS session, type the following line, and then press ENTER
	
	  " copy <path>:\aha154x.mpd c:\windows\system\iosubsys " (without the
	  quotation marks)
	
	  where <path> is the path to the folder containing the file you down-
	  loaded in step 1.
	
	5. Type "exit" (without the quotation marks) and then press ENTER.
	
	6. Shut down and restart your computer.
	
	Additional query words: hp
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
