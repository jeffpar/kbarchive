---
layout: page
title: "Q58645: UB Drivers Specified in LANMAN.INI/AUTOEXEC.BAT Truncated"
permalink: /kb/058/Q58645/
---

## Q58645: UB Drivers Specified in LANMAN.INI/AUTOEXEC.BAT Truncated

	Article: Q58645
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	If the combined length (in characters) of the filenames and the loader exceeds
	128 characters, MS-DOS truncates the string and issues a "file not found" error
	message.
	
	CAUSE
	=====
	
	This message is seen only when the loader is executed from the AUTOEXEC.BAT
	file. However, if the command is issued from the LANMAN.INI file from the
	services group, it produces an unsatisfactory error, "could not load ub
	drivers."
	
	WORKAROUND
	==========
	
	Limit the sum character length (spaces inclusive) to be equal to or less than
	128 characters.
	
	MORE INFORMATION
	================
	
	Example
	-------
	
	Assume LAN Manager operates from the directory LANMAN20.DOS. The following
	command is in the AUTOEXEC.BAT file:
	
	c:\lanman20.dos\drivers\ub\loadniu.exe -r -d -m:d8 -p:4 -i:5 c:\lanman20.do
	drivers\ub\ex2niuw.xfm c:\lanman20.dos\drivers\ub\stdlc
	
	At run time, the last file will be truncated to
	
	  c:\lanman20.dos\drivers\ub\ 
	
	and the following error message will be issued:
	
	  File not found
	
	Additional query words: 2.00 2.10 dos fail
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
