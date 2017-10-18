---
layout: page
title: "Q99283: Clean Boot Procedure with CD-ROM Drive"
permalink: kb/099/Q99283/
---

## Q99283: Clean Boot Procedure with CD-ROM Drive

	Article: Q99283
	Product(s): Miscellaneous Windows Products
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Sound System, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When troubleshooting problems with Microsoft CD products, you may have to
	restart your machine using your MS-DOS startup disks (that is, perform a "clean
	boot"). This procedure helps eliminate possible conflicts with third-party
	device drivers and other terminate-and-stay-resident (TSR) programs. This
	article discusses performing this procedure with a CD-ROM drive.
	
	MORE INFORMATION
	================
	
	When performing a "clean boot", you may need to retain access to the computer's
	CD-ROM drive. The following lines must be retained in the computer's system
	files:
	
	REQUIRED
	--------
	
	  AUTOEXEC.BAT File
	  -----------------
	  <drive>:\<path>\mscdex.exe <switches>
	
	  CONFIG.SYS File
	  ---------------
	
	  device=<drive>:\<path>\<cd-rom driver> <switches>
	
	where <drive> represents the drive letter that contains the file,
	<path> represents the path to the file, <cd-rom driver> represents
	the filename of the CD-ROM driver and <switches> represents any relevant
	software switches required by the device.
	
	MAY BE REQUIRED
	---------------
	
	  CONFIG.SYS File
	  ---------------
	
	  device=<drive>:\<path>\setver.exe
	
	where <drive> represents the drive letter that contains the file and
	<path> represents the path to the file. This line will be needed if the
	version of Microsoft CD-ROM Extensions (MSCDEX) was written for an earlier
	version of MS-DOS than is currently installed on the system.
	
	  device=<drive>:\<path>\smartdrv.exe /double_buffer
	
	where <drive> represents the drive letter that contains the file and
	<path> represents the path to the file. Some older CD-ROM drives require
	this entry for Windows to access the drive. For additional information about
	this entry, query on the following words in the Microsoft Knowledge Base:
	
	  troubleshooting and smartdrive and cd-rom abd emm386.exe and noems
	
	In addition, some CD-ROM drives (such a some from Creative Labs) require a batch
	file to be run at MS-DOS that will install additional switches required for the
	MSCDEX.
	
	Additional query words: tshoot 1.00 Publisher Nautilus
	
	======================================================================
	Keywords          :  
	Technology        : kbWinSoundSysSearch kbWinSoundSys100
	
	=============================================================================
	
