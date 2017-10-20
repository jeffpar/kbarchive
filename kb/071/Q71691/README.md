---
layout: page
title: "Q71691: What MS-DOS 5 Upgrade Setup Does"
permalink: /kb/071/Q71691/
---

## Q71691: What MS-DOS 5 Upgrade Setup Does

{% raw %}

	Article: Q71691
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS 5 Upgrade Setup program does the following:
	
	1. Warns you that you will need one to two disks for the uninstall disk(s)
	  depending on the capacity of the floppy disk.
	
	2. Asks you if a network is being used. If the answer is yes, you will be
	  encouraged to read Chapter 3, "Updating Networks for MS-DOS Version 5.0," in
	  the "Microsoft MS-DOS Getting Started" version 5.0 manual for information on
	  upgrading to MS-DOS 5.0 when connected to a network. You will also be warned
	  that you may need to update your network software after upgrading to MS-DOS
	  5.0.
	
	3. Gives you the opportunity to back up your hard disk before upgrading to
	  MS-DOS 5.0. If you choose to back up your hard drive, Setup uses HDBACKUP to
	  accomplish this. These backups can be restored using HDRESTORE or RESTORE.
	
	4. Asks for the directory in which the current version of MS-DOS is installed.
	  The MS-DOS 5.0 files will be copied to the specified directory.
	
	5. Asks whether MS-DOS Shell should be executed automatically upon bootup. If
	  you answer yes, the DOSSHELL command will be added to the end of the
	  AUTOEXEC.BAT file.
	
	6. Asks for the video display type. This information is used in setting up the
	  correct display driver for Shell.
	
	7. Creates the OLD_DOS.<x> directory (where <x> is a number, 1-99).
	  The files from the previous version of DOS are saved to this directory.
	
	  For more information on OLD_DOS, query on the following words:
	
	  " OLD_DOS and MSDOS " (without the quotation marks)
	
	8. Creates the uninstall disk(s). Usually, one disk will be created.
	
	  Occasionally, two disks will be created. The information of the previous
	  version of DOS, including copies of your previous CONFIG.SYS and AUTOEXEC.BAT
	  files, are stored on the uninstall disk(s).
	
	MORE INFORMATION
	================
	
	The following lines are added to the CONFIG.SYS and AUTOEXEC.BAT files:
	
	CONFIG.SYS
	----------
	
	  Updates paths to all DOS drivers installed, such as SMARTDRV.SYS,
	  RAMDRIVE, HIMEM.SYS, EMM386.SYS, and ANSI.SYS.
	
	  DEVICE=C:\DOS\SETVER.EXE
	
	  DEVICE=C:\DOS\HIMEM.SYS
	     (If 286 or higher processor and no XMS driver present.)
	
	  DOS=HIGH
	     (For 286 or higher processor.)
	
	  SET SHELL=C:\DOS\COMMAND.COM C:\DOS\ /P
	     (If there is no SHELL statement. The default environment size
	     is 256; if there is already a SHELL statement with a /E value,
	     the previous value is copied.)
	
	AUTOEXEC.BAT
	------------
	
	Updates paths for all MS-DOS programs that are run from AUTOEXEC.BAT.
	
	Adds the directory specified in step 4 to the beginning of ALL occurrences of
	path statements. If there is no path statement, it adds PATH=C:\DOS.
	
	For more detailed information about Setup, please refer to the "Microsoft MS-DOS
	Getting Started" version 5.0 manual.
	
	Additional query words: 5.00 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0
	
	=============================================================================
	

{% endraw %}
