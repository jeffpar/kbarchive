---
layout: page
title: "Q114426: Installing RAS for Workgroup Add-On for MS-DOS 3.11"
permalink: kb/114/Q114426/
---

## Q114426: Installing RAS for Workgroup Add-On for MS-DOS 3.11

	Article: Q114426
	Product(s): Microsoft Access Distribution Kit
	Version(s): MS-DOS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Workgroup Add-On for MS-DOS, version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Workgroup Add-On for MS-DOS 3.11 ships with a Remote Access Services
	(RAS) driver, but it doesn't contain the files that allow you to use RAS. To use
	Remote Access Services with Workgroup Add-On for MS-DOS, you must install the
	RAS 1.1 Client software.
	
	RAS 1.1 is available as a stand-alone package or as part of The Microsoft Network
	Client software package. To order either package, call Microsoft Sales
	Information Center (MSIC) Sales at (800) 426-9400.
	
	MORE INFORMATION
	================
	
	When you add the MS-DOS Remote Access media access control (MAC) driver during
	the setup of Workgroup Add-On for MS-DOS, Setup adds the needed lines to the
	AUTOEXEC.BAT file, but the actual files are not installed on the hard disk. When
	the RAS Client 1.1 software is installed, its setup program adds the proper
	files and completes the installation. The entries that Workgroup Add-On for
	MS-DOS Setup adds to the AUTOEXEC.BAT file are as follows
	
	  C:\NET\NET INITIALIZE
	  C:\NET\RAS\ASYBEUI.EXE
	  C:\NET\RAS\VCOMMIOD.EXE
	  C:\NET\RAS\WANTSR.EXE
	  C:\NET\NET START NETBIND
	
	where C:\NET is your Workgroup Add-On for MS-DOS directory.
	
	The RAS 1.1 Client software does not have a setup file that works with Workgroup
	Add-On for MS-DOS. To install RAS, use the following steps:
	
	1. Change to the Workgroup Add-On for MS-DOS directory (C:\NET in this example)
	  and type "RASCOPY.BAT" (without the quotation marks). This is a batch file
	  that extracts only the files that Workgroup Add-On for MS-DOS needs for the
	  installation of RAS.
	
	2. When prompted, insert the RAS 1.1 disk in drive A. (Drive A is the only
	  option.)
	
	3. Once all the files are extracted, type "setup" (without the quotation marks)
	  from the C:\NET directory and choose to install the MS-DOS Remote Access MAC
	  driver.
	
	4. After installation, restart the computer. This loads all the necessary RAS
	  files.
	
	5. Change to the C:\NET\RAS directory and type "setup" (without the quotation
	  marks). This starts RAS Setup and allows for modem and port configuration.
	  COM ports 1 and 2 are the only options for MS-DOS systems. Error messages
	  appear and RAS does not work properly if any other COM port is entered.
	
	6. Exit Setup. The AUTOEXEC.BAT, PROTOCOL.INI, and the COMDEV.INI files will be
	  updated.
	
	NOTE: When the AUTOEXEC.BAT and PROTOCOL.INI files are updated, the network
	entries are removed, leaving no network installed. Microsoft is researching this
	problem and will post more information here in the Microsoft Knowledge Base as
	it becomes available. Continue with these instructions to complete the network
	reinstallation.
	
	1. Edit the AUTOEXEC.BAT file. Beneath the line C:\NET\NET START NETBIND, type
	  "c:\net\net start" (without the quotation marks) as in the example below:
	
	     C:\NET\NET START NETBIND
	     C:\NET\NET START
	
	2. Change to the C:\NET subdirectory and type "setup" (without the quotation
	  marks). Install and set up the network interface card.
	
	3. Exit Setup and reboot.
	
	Additional query words: 3.11 1.1 1.1a wgao RAS nic add on dos connect dial
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311DOS
	Version           : MS-DOS:3.11
	
	=============================================================================
	
