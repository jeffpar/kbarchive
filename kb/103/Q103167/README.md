---
layout: page
title: "Q103167: SYSEDIT Err Msg: Cannot Open This File"
permalink: /kb/103/Q103167/
---

## Q103167: SYSEDIT Err Msg: Cannot Open This File

{% raw %}

	Article: Q103167
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	NOTE: SYSEDIT is an undocumented text editor that ships with Microsoft
	Windows. Microsoft Product Support Services does not support this tool.
	
	SYMPTOMS
	========
	
	If you run SYSEDIT in Windows, you may encounter one of the following error
	messages:
	
	- Cannot open this file (in Windows 3.1 and Windows for Workgroups 3.1)
	
	  -or-
	
	- Can't open the file: <filename> (in Windows 3.0 and 3.0a)
	
	Also, it is possible that the AUTOEXEC.BAT and CONFIG.SYS files displayed may not
	be the ones that are actually used to boot your machine.
	
	CAUSE
	=====
	
	This problem can be caused by the following:
	
	- You are booting from a drive other than C.
	
	- Your files were saved in format other than ASCII.
	
	- One or more of your files is too large to be edited in SYSEDIT. For example,
	  you may receive errors saying AUTOEXEC.BAT, CONFIG.SYS, or WIN.INI cannot be
	  opened if your WIN.INI file is larger than 40 kilobytes.
	
	RESOLUTION
	==========
	
	If you boot your machine from a drive other than C, edit the appropriate
	AUTOEXEC.BAT and the CONFIG.SYS files using a text editor other than SYSEDIT
	(for example, Microsoft Windows Notepad).
	
	If your boot files are on C:
	
	- Ensure the files are saved in ASCII format.
	
	  -and-
	
	- Ensure the files are not too large to be edited in SYSEDIT.
	
	MORE INFORMATION
	================
	
	SYSEDIT looks only in the root directory of drive C when trying to open the
	AUTOEXEC.BAT and CONFIG.SYS files. If you boot your machine from a floppy disk,
	or if the CONFIG.SYS file contains a drive letter swapping program (for example,
	SWAP.COM from STAC Electronics), SYSEDIT may generate one of the above error
	messages or display the incorrect AUTOEXEC.BAT and CONFIG.SYS files.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.1 syseditor sysedit.exe ANSI editor system configuration
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	

{% endraw %}
