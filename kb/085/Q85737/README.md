---
layout: page
title: "Q85737: ALR EISA Err Msg: EMM386: Unrecoverable Privileged...Error #05"
permalink: kb/085/Q85737/
---

## Q85737: ALR EISA Err Msg: EMM386: Unrecoverable Privileged...Error #05

	Article: Q85737
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an Advanced Logic Research (ALR) EISA computer system, such as the
	PowerPro and the Business VEISA, with the Microsoft Windows 3.1 EMM386.EXE
	version 4.44 utility loaded, your system stops responding (hangs) or displays
	the following error message when you press CTRL+ALT+DEL to restart your
	computer:
	
	  EMM386:
	  Unrecoverable privileged operation error #05 press ENTER to reboot
	
	NOTE: This error also occurs when you try to load SHARE immediately after
	EMM386.EXE in the CONFIG.SYS file and you incorrectly use the
	DEVICE=C:\DOS\SHARE.EXE command instead of the correct INSTALL=C:\DOS\SHARE.EXE
	command.
	
	WORKAROUND
	==========
	
	To work around this error, use one of the following:
	
	- If you are using MS-DOS 6.0 or 6.2, add the ALTBOOT switch to the device
	  statement for EMM386.EXE in your CONFIG.SYS file. For example:
	
	  device=c:\dos\emm386.exe noems altboot
	
	  -or-
	
	- Obtain the updated ALR BIOS version 1.00.17.
	
	  -or-
	
	- Obtain a modified copy of EMM386.EXE from ALR. The version number is
	  4.35.06X. You can obtain this by calling ALR Technical Support or by
	  downloading EMM386.ZIP from ALR's bulletin board service (BBS) at (714)
	  458-6834. The following are the file details:
	
	  EMM386.EXE     91742 12-10-91   5:58p
	
	MORE INFORMATION
	================
	
	There are two versions of the ALR Business VEISA: the ASIC and the Discrete. The
	ASIC BIOS version ends with the letter "A." If you are using the Discrete
	version, you must exclude the range from E000 to EFFF.
	
	Excluding the Range
	-------------------
	
	Using EMM386.EXE in the CONFIG.SYS:
	
	       DEVICE=EMM386.EXE X=E000-EFFF
	
	Using EMMEXCLUDE statement in the [386Enh] section of the SYSTEM.INI file:
	
	       EMMEXCLUDE=E000-EFFF
	
	
	Additional query words: 3.10 3.1 3.11 #5 visa power hang lock-up warm boot lock
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
