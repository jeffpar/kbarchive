---
layout: page
title: "Q95554: Not Using the /P Switch with the SHELL Command"
permalink: /kb/095/Q95554/
---

## Q95554: Not Using the /P Switch with the SHELL Command

	Article: Q95554
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv msdos win95 win98 win98se
	Last Modified: 28-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01, 5.0, 5.0a, 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the SHELL command's /P switch and covers the following
	information:
	
	- Effects of Not Using /P
	
	- Disabling AUTOEXEC.BAT by Removing /P
	
	- Background Information on SHELL and /P
	
	MORE INFORMATION
	================
	
	Effects of Not Using /P
	-----------------------
	
	If you do not use the /P switch with the SHELL command in the CONFIG.SYS file,
	the following problems may occur:
	
	- The AUTOEXEC.BAT file is not processed.
	
	- The EXIT command is not disabled and causes the system to stop responding
	  ("hang") in MS-DOS 2.x through 5.0.
	
	- In MS-DOS 6.0 and later the EXIT command causes the following error message:
	
	  Bad or missing Command Interpreter
	  Enter correct name of Command Interpreter (e.g., C:\COMMAND.COM)
	
	- SET, PATH, PROMPT, and other environment variable-related commands behave
	  erratically.
	
	- A "Required parameter missing" message is displayed if the /MSG switch is in
	  the SHELL command in CONFIG.SYS (MS-DOS 4.x and 5.0 only).
	
	- Other system instabilities appear.
	
	Microsoft does not recommend using SHELL without the /P switch to load
	COMMAND.COM. The following SHELL command demonstrates correct usage of the /P
	switch:
	
	  shell=c:\command.com c:\ /p
	
	If you use the /K switch on the SHELL= line, you should also use the /P switch to
	prevent COMMAND.COM from being unloaded.
	
	Effects of Not Using /P with Windows 95:
	
	If you are using Windows 95 and you do not use the /P switch on the SHELL= line,
	Windows 95 boots only to a command prompt, with the error message "File creation
	error." You can start Windows 95 by typing "win" (without the quotation marks)
	after you receive the error message.
	
	Disabling AUTOEXEC.BAT by Removing /P
	-------------------------------------
	
	When using some disk-compression configurations, you cannot always disable the
	AUTOEXEC.BAT file by renaming it. In such cases, you can cause MS-DOS to boot
	without processing AUTOEXEC.BAT by modifying the SHELL command in the CONFIG.SYS
	file. For example, change the line
	
	  shell=c:\dos\command.com c:\dos /p /e:1024
	
	-to-
	
	  shell=c:\dos\command.com c:\dos
	
	NOTE: If you are using Stacker version 2.0 or later, see "Stacker 2.0 and /SYNC
	Switch" below.
	
	When Is Renaming the AUTOEXEC.BAT File Not Possible?
	
	Disk-compression utilities such as Stacker and SuperStor can be configured to
	create a compressed drive, which is then swapped with the actual drive C. In
	these cases, the AUTOEXEC.BAT file is not actually stored on drive C.
	
	Booting from a standard MS-DOS floppy disk allows access to the real hard disk,
	but not to the compressed drive. Booting from the hard disk while loading
	COMMAND.COM without the /P switch will disable AUTOEXEC.BAT processing so that
	you can boot from the hard disk and troubleshoot the AUTOEXEC.BAT file. If the
	CONFIG.SYS file includes a SHELL= command, remove the /P switch. If no editor is
	available, the command
	
	  echo shell=c:\command.com c:\ >> config.sys
	
	appends the line
	
	  shell=c:\command.com c:\ 
	
	to the end of the CONFIG.SYS file, overriding any SHELL= commands elsewhere in
	the CONFIG.SYS file.
	
	Stacker 2.0 and /SYNC Switch
	
	Beginning with Stacker version 2.0, the drive-swapping utility SSWAP includes a
	/SYNC switch. The /SYNC switch causes SSWAP to attempt to synchronize the
	AUTOEXEC.BAT and CONFIG.SYS files on the real drive with those on the compressed
	drive. If you are using Stacker version 2.0, do the following:
	
	- Verify that the /SYNC switch is enabled in the CONFIG.SYS file
	
	- Make modifications to the AUTOEXEC.BAT file on the real drive (including
	  renaming it if necessary)
	
	- Allow SSWAP to synchronize the changes between the drives. By default, it
	  copies the file with the later date/time stamp over the earlier version of
	  the file.
	
	Background Information on SHELL and /P
	--------------------------------------
	
	The SHELL command tells the system what command interpreter to load during
	startup. (The term "shell" is taken from UNIX to describe the user's operating
	environment; it is not related to MS-DOS Shell.) The purpose of SHELL is to
	allow you to use an alternative to the MS-DOS default COMMAND.COM (for example,
	JP Software's 4DOS), or to tailor how COMMAND.COM loads. If no SHELL command
	exists, \COMMAND.COM /P is invoked on startup.
	
	The /P switch tells COMMAND.COM that this copy of COMMAND.COM is permanent; thus,
	EXIT is disabled and the environment space is initialized. Finally, if the
	AUTOEXEC.BAT file exists, it is processed; if not, COMMAND.COM executes TIME and
	DATE before presenting the drive C command prompt.
	
	
	Additional query words: 6.22 2.0 2.11 3.0 3.1 3.2 3.21 3.3 3.30a 4.0 4.01 4.01a 5.02.00 3.00 3.10 3.20 3.30 4.00 5.00 option parameter 6.00 6.20 win95x msdos
	
	======================================================================
	Keywords          : kbenv msdos win95 win98 win98se 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600 kbMSDOS310 kbMSDOS500 kbMSDOS330 kbMSDOS401 kbMSDOS500a kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.x,5.x,6.0,6.2,6.21,6.22; WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	
