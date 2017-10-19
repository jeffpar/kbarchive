---
layout: page
title: "Q152291: Removing Windows NT with Winntp.exe/D: Option"
permalink: /kb/152/Q152291/
---

## Q152291: Removing Windows NT with Winntp.exe/D: Option

	Article: Q152291
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use Winntp.exe from the Windows NT Resource Kit 3.51 with the /D:
	option to remove your current installation of Windows NT, the following error
	message appears:
	
	  Windows NT Profile Setup
	
	  Setup is unable to find the Repair.WinntFiles section in the setup log file
	  named below.
	
	  C:\WINNT35\REPAIR\SETUP.LOG
	
	  Setup is unable to remove Windows NT files from the specified directory.
	
	CAUSE
	=====
	
	The Setup.log does not contain a Repair.WinntFiles section. Adding the
	Repair.WinntFiles in place of the Files.WinNt in the Setup.log allows Winntp.exe
	to detect the Setup.log but does not remove the current installation of Windows
	NT.
	
	WORKAROUND
	==========
	
	The following paragraphs describe how to remove Windows NT from the system
	without reformatting the disk drive.
	
	NOTE: This method only works if the drive has been formatted for a FAT file
	system and the partition is less than or equal to 2 gigabytes (GB).
	
	By default, Windows NT creates the following directories of the ROOT of the
	drive:
	
	  \WINNT35
	  \USERS
	  \WIN32APP
	
	By default, Windows NT places the following files in the ROOT of the drive:
	
	  Boot.ini
	  Ntldr.
	  Ntdetect.com
	  Pagefile.sys
	  Bootsec.dos (if MS-DOS is on the system)
	  Fatboot.bin (if the current install was done by CPS)
	
	To remove Windows NT from the system without reformatting the drive, perform the
	following steps:
	
	1. Create an MS-DOS boot floppy
	
	2. Place the following files on the boot floppy:
	
	   - Sys.com
	
	   - Attrib.com
	
	   - Deltree.exe
	
	   - Scandisk.exe
	
	   - Defrag.exe
	
	3. Create a batch file called Cleanup.bat
	
	4. Enter the following into Cleanup.bat:
	
	     @echo off
	     a:
	     SYS C:
	     DELTREE /Y C:\WINNT35
	     DELTREE /Y C:\WIN32APP
	     DELTREE /Y C:\USERS
	     DEL C:\PAGEFILE.SYS
	     A:\ATTRIB -S -H -R C:\BOOT.INI
	     DEL C:\BOOT.INI
	     A:\ATTRIB -S -H -R C:\NTDETECT.COM
	     DEL C:\NTDETECT.COM
	     A:\ATTRIB -S -H -R C:\NTLDR.
	     DEL NTLDR.
	     A:\ATTRIB -S -H -R C:\BOOTSECT.DOS
	     DEL C:\BOOTSECT.DOS
	     DEL C:\FATBOOT.BIN
	     REM
	     REM It is important that maintenance is
	     REM done on the drive to prevent an unreasonable
	     REM amount of fragmentation.
	     REM
	     A:\SCANDISK C: /CUSTOM
	     A:\DEFRAG C: /F
	
	5. Boot the computer from the boot floppy created in step 1 and run Cleanup.bat
	
	When this procedure is complete, Windows NT has been completely removed from the
	system while all other existing data and files remain intact.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5x Resource
	Kit Winntp.exe. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : :3.5,3.51
	
	=============================================================================
	
