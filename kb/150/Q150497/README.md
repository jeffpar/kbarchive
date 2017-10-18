---
layout: page
title: "Q150497: How to Repair Windows NT System Files Without a CD-ROM Attached"
permalink: kb/150/Q150497/
---

## Q150497: How to Repair Windows NT System Files Without a CD-ROM Attached

	Article: Q150497
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you perform a Windows NT Setup from a non-supported CD-ROM drive, or you set
	up Windows NT over the network by doing a WINNT or WINNT /B setup, you will not
	be able to repair system files during the emergency repair process without a
	supported CD-ROM attached.
	
	If you choose "Verify Windows NT System Files" on the repair menu, the repair
	process will read the Setup.log located on the emergency repair disk (ERD). This
	file contains the name of the Windows NT system files to check along with the
	cyclical redundancy check (CRC) value of each file.
	
	If the repair process finds a system file that is corrupted or missing, it will
	prompt you, asking if the file should be repaired. If you reply yes, and your
	system contains no CD-ROM drive, the repair process will prompt you for a
	Windows NT Setup floppy disk that contains the file that needs repair.
	
	Because Windows NT server only ships on compact disc, it will not be possible to
	provide a valid Windows NT Setup disk to repair the file.
	
	Before proceeding, please review the following Knowledge base articles if any
	Windows NT Service Pack is installed:
	
	Q146887Repairing Windows NT After the Application of Service Pack 3
	
	Q162837Replacing TCPIP after SP2 causes STOP 0x00000050
	
	Q148262Removing Windows NT 3.51 SP4 or SP5 May Cause Logon Failures
	
	WORKAROUND
	==========
	
	To correct this problem you will need to run through the repair process twice.
	The first time through, choose not to replace the files that are found to be
	missing or corrupt, but write down a list of these files. Next, modify the
	Setup.log file on the ERD as outlined below, and then perform another repair
	process, this time choosing to replace the files.
	
	**NOTE** - NT V4.0 requires that the setupdd.sys located on setup diskette
	          #2 be replaced with one from NT V4.0 Service pack#2 or later in
	          order to perform a repair without a cd-rom attached.
	
	1. Make a copy of the hidden read-only file called Setup.log found on the ERD.
	
	2. Remove the hidden read-only attributes.
	
	3. Using Notepad, modify the entry for each file that needs repair by adding a
	  "path","media name","tag file name" entry at the end of each line.
	
	  Example before modification:
	
	  WINNT\system32\clipsrv.exe = "clipsrv.exe","1168c"
	  WINNT\system32\command.com = "command.com","16281"
	  WINNT\system32\control.exe = "control.exe","16566"
	
	  Example after modification:
	
	  WINNT\system32\clipsrv.exe = "clipsrv.exe","1168c","\","floppy","d1.txt"
	  WINNT\system32\command.com = "command.com","16281","\","floppy","d1.txt"
	  WINNT\system32\control.exe = "control.exe","16566","\","floppy","d1.txt"
	
	4. On a separate disk, make a file called the same name as the "tag file name"
	  at the end of the files you modified (in the example above, this file will be
	  called d1.txt) and place it in the root directory of the diskette.
	
	5. Finally, on a machine that has a CD-ROM drive installed, copy the files that
	  need repair from the Windows NT Setup compact disc to the floppy disk.
	
	If multiple diskettes are required use a different tag file name in the setup.log
	to correspond to the different diskettes IE: d1.txt, d2.txt ...
	
	Now perform another repair process, and this time choose to repair the files.
	
	1. The repair process should prompt you to insert the floppy disk that you made,
	  which contains the files to repair.
	
	2. If the files cannot all fit on a single disk, simply delete from the disk the
	  files that have already been repaired and copy the additional files onto the
	  same disk and continue with the repair process or use different diskettes
	  with different tag file on each one to match the tag file entry in the
	  setup.log.
	
	ALTERNATE METHOD
	----------------
	
	
	Note: This Process assumes that the system can still boot at this time or the
	system is in a dual boot environment with access to the source media. This
	process also assumes adequate disk space to be available of approximately
	100mb.
	
	With some proactive planning, one could have a copy of the installation CD-ROM
	\i386 directory on the hard disk of the system. When the repair process is runs
	it refers to those repair files already located on the local hard disk.
	
	To run the repair process off the Hard disk, please use the following steps.
	
	1. Create a directory on any Hard disk to hold the system files. For this
	  example c:\repair.
	
	2. Copy the system files from the retail CD-ROM to the Hard Dive keeping the
	  directory structure intact. The platform directory (i386) and the CDROM_W.40
	  file for Workstation or CDROM_S.40 file for Server must be copied at the very
	  minimum.
	
	Upon completion your c:\repair directory should contain the following:
	
	\repair
	     \i386    (directory containing all the system files)
	CDROM_W.40     (For Workstation in the root of \repair)
	or
	CDROM_S.40     (For Server in the root of \repair)
	
	3. Create the three setup boot floppies using the following commands on the
	  Windows NT installation CD-ROM:
	
	  - For Win95/DOS = CD to \i386 directory then Winnt /ox
	  - For Windows NT = CD to \i386 directory then Winnt32 /ox
	
	Note: Make sure to replace the file setupdd.sys on disk #2 with the updated file
	from the Windows NT Service Pack-2 or later.
	
	Q168015Files Not Replaced When Running Emergency Repair
	
	4. Using any text editor make the following changes to the txtsetup.sif file on
	  your first setup boot disk.
	
	The lines that you must change are commented with a ";***" on the previous
	lines.
	
	[SetupData]
	;
	; SetupSourceDevice is optional and specifies the nt device path
	; of the device to be used as the setup source. This overrides
	; the CD-ROM or winnt local source.
	;
	;***remove the semicolon from the following line and make sure it
	;***references the physical location of the system files.
	;***In the example this will be partition1 since C: is the first
	;*** partition on the disk.
	;
	SetupSourceDevice = \device\harddisk0\partition1
	;
	; SetupSourcePath specifies the path relative to the source device
	; where the setup source tree is to be found.
	; All media descriptors are relative to this.
	;
	;*** Change the "SetupSourcePath" line to the path of your system
	;*** repair files.
	;*** In the example, I would change the variable to equal \repair.
	;
	SetupSourcePath=\repair
	MajorVersion = 4
	MinorVersion = 0
	DefaultPath=\WINNT
	OsLoadOptions = "/nodebug"
	
	5. Save the changes to the floppy and start the repair process by booting the
	  system using the modified setup boot disk. The repair process will operate as
	  normal but will not prompt the user for a CD-ROM.
	
	Note: Again that this process assumes that the flat already exists on the hard
	disk or user can boot to another OS and copy the files over. If you are in a
	situation where the system cannot boot or cannot afford the extra HD space that
	the system files will take up, you may want to use the above process to create
	the structure on a spare HD or removable media (Jazz drive, etc...). In the
	event of a failure that requires the system files to be repaired, you can attach
	the drive to the system.
	
	Additional query words: repair
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	
	=============================================================================
	
