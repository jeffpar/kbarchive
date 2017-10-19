---
layout: page
title: "Q137380: How Windows 95 Setup Handles SUBST, JOIN, APPEND, and ASSIGN"
permalink: /kb/137/Q137380/
---

## Q137380: How Windows 95 Setup Handles SUBST, JOIN, APPEND, and ASSIGN

	Article: Q137380
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 95 Setup may not be able to finish successfully if any of the following
	commands are used in the Config.sys or Autoexec.bat file:
	
	  SUBST
	  JOIN
	  APPEND
	  ASSIGN
	
	Setup attempts to continue when these commands are used. However, it may be
	necessary to remove them to install Windows 95 successfully.
	
	MORE INFORMATION
	================
	
	Setup attempts to work with these MS-DOS-based terminate-and-stay-resident
	programs (TSRs) loaded. Although these TSRs may not cause problems, you may have
	to remove them.
	
	APPEND and ASSIGN
	-----------------
	
	Setup does not halt or remove these TSRs.
	
	These programs are not provided in MS-DOS versions later than 5.0. You must
	expand these programs from your MS-DOS 5.0 disks to regain their functionality,
	and then run Setver.exe to set them to MS-DOS version 5.0.
	
	The Append.exe file is also available on the Windows 95 CD-ROM in the
	<drive>:\other\oldmsdos directory.
	
	NOTE: These commands can be run only in MS-DOS mode.
	
	JOIN
	----
	
	If this TSR is detected, Setup halts and warns you that there are cross- linked
	files on the hard disk. Remove Join.exe from the Autoexec.bat file to finish
	Setup.
	
	Using the JOIN command may cause additional problems. For example, running an
	MS-DOS session while Windows Explorer is open may result in the following error
	message:
	
	  Cannot find command.com
	
	SUBST
	-----
	
	Setup does not halt or remove this TSR. Setup replaces any references to
	Subst.exe in the Autoexec.bat file with the location of the Windows 95 version
	of the file.
	
	Using Setver.exe
	----------------
	
	You can use the SETVER command to enable programs and device drivers that require
	an earlier version of MS-DOS to run in Windows 95.
	
	You must use the SETVER command to enable Assign.exe, Append.exe, and Join.exe to
	run in Windows 95.
	
	For example, to add Append.exe to the version table, use the following command:
	
	  setver c:\dos append.exe 5.00
	
	REFERENCES
	==========
	
	For information about using Setver.exe, type "Setver /?" at a command prompt, or
	see the following article in the Microsoft Knowledge Base:
	
	  Q96767 Using the SETVER Command
	
	For information about using the SUBST, JOIN, and APPEND commands, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q71667 SUBST, JOIN, and APPEND Commands with Windows
	
	Additional query words: substitute
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
