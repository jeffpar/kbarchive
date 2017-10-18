---
layout: page
title: "Q85185: Disabling Setup from Prompting CONFIG.SYS, AUTOEXEC.BAT Save"
permalink: kb/085/Q85185/
---

## Q85185: Disabling Setup from Prompting CONFIG.SYS, AUTOEXEC.BAT Save

	Article: Q85185
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows version 3.1 SETUP.SHH file's [endinstall] section can use
	a CONFIGFILES=DONTSAVE switch to disable Setup from prompting you to save and
	rename the CONFIG.SYS and AUTOEXEC.BAT files to CONFIG.WIN and AUTOEXEC.WIN.
	
	This is useful when installing Windows to a diskless workstation that is using
	boot ROMs that contain images of the CONFIG.SYS and AUTOEXEC.BAT files. Without
	this setting, Windows displays error messages during Setup that require you to
	make choices. This defeats the purpose of using SETUP.SHH to automate the setup
	process.
	
	You can have the switches CONFIGFILES=DONTSAVE and CONFIGFILES=MODIFY in the same
	SETUP.SHH file at the same time. In the case of a boot ROM, you would only want
	the CONFIGFILES=DONTSAVE switch active, or you will get an error message. After
	setup, you should make sure that the boot ROM's CONFIG.SYS file is loading
	Windows 3.1's HIMEM.SYS.
	
	MORE INFORMATION
	================
	
	The Windows Automated Setup option (also called Batch Mode Setup) allows you to
	write a script file for Setup (an example called SETUP.SHH comes with Windows
	3.1), which automates the setup and requires little user input. You can
	configure Setup to automatically install certain printers, applications,
	hardware options, and other options. The following is a sample command line:
	
	  SETUP /N:X:\NETWIN\SETUP.SHH /N
	
	NOTE: SETUP.SHH is an example; you can use any acceptable filename with an
	extension of .SHH.
	
	For more information on this feature, refer to pages 75-82 of the "Microsoft
	Windows Resource Kit" manual for operating system version 3.1.
	
	Additional query words: 3.10 prom eprom bootrom floppy floppyless
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
