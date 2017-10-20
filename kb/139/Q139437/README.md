---
layout: page
title: "Q139437: Windows 95 Emergency Recovery Utility"
permalink: /kb/139/Q139437/
---

## Q139437: Windows 95 Emergency Recovery Utility

{% raw %}

	Article: Q139437
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Microsoft Windows 95 Emergency Recovery Utility.
	
	MORE INFORMATION
	================
	
	You can use the Windows 95 Emergency Recovery Utility to create a backup of your
	system configuration and registry files in case a problem should occur.
	
	This utility is located on the Windows 95 CD-ROM in the Other\Misc\ERU folder.
	
	Backing Up Your Configuration
	-----------------------------
	
	To create a backup of your system configuration files, double-click the Eru.exe
	file and follow the instructions on the screen.
	
	You will need to choose a location for storing the backup information. By
	default, the information is stored on a floppy disk in drive A. However, you can
	choose to store the backup information in another location, such a local hard
	disk or a mapped network drive. The files that are backed up by default are:
	
	  Config.sys
	  Autoexec.bat
	  Win.ini
	  System.ini
	  Protocol.ini
	  User.dat
	  System.dat
	  Io.sys
	  Command.com
	  Msdos.sys
	  Explorer.exe
	
	Note that the User.dat file that is backed up is the User.dat file in the Windows
	folder. The User.dat file in the Windows\Profiles\<username> folder is not
	backed up by default.
	
	Custom Backups
	--------------
	
	If you want to back up only certain files, click the Custom button in the file
	list screen. You can choose to back up only the files you want.
	
	Restoring Your Configuration
	----------------------------
	
	To restore the backup information, start your computer at a command prompt and
	then run Erd.exe. If you do not want to restore all the files, press SPACEBAR to
	select or deselect files. Note that you cannot run Erd.exe within Windows 95.
	You must run this utility at a command prompt. If you saved your backup
	information to a network drive, you must be able to access the network drive at
	the MS-DOS level.
	
	To start your computer at a command prompt, restart your computer, press the F8
	key when you see the "Starting Windows 95" message, and then choose Command
	Prompt Only from the Startup menu. Then, change to the floppy drive or directory
	containing the backup information and run Erd.exe.
	
	Microsoft recommends that you use the Emergency Recovery Utility to create a new
	backup each time you make significant changes to your system, such as adding new
	hardware or software.
	
	For information about a potential problem backing up files with the Emergency
	Recovery Utility, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q141014 Emergency Recovery Utility Does Not Back Up Files
	
	Note that the Emergency Recovery Utility cannot back up all the configuration
	files if there is not enough room on the destination disk. If there is not
	enough room on the destination disk, the Emergency Recovery Utility backs up as
	many files as will fit, skipping the largest files first. For example, the
	Emergency Recovery Utility usually cannot back up the registry files (System.dat
	and User.dat) if you try to back up the configuration files to your Windows 95
	Startup disk.
	
	Additional query words: backup
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	

{% endraw %}
