---
layout: page
title: "Q85267: FastBack Plus Err Msg: WARNING #31 FastBack Plus Was"
permalink: kb/085/Q85267/
---

## Q85267: FastBack Plus Err Msg: WARNING #31 FastBack Plus Was

	Article: Q85267
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to run Fifth Generation System's FastBack Plus from Microsoft
	Windows operating system version 3.1, you may receive the following error
	message:
	
	  WARNING #31 FastBack Plus will not be able to use Extended memory as
	  requested.
	
	WORKAROUND
	==========
	
	1. Edit the AUTOEXEC.BAT file with a standard ASCII text editor, such as
	  Notepad.
	
	2. Remark out the line "Set FBP_EXT=500," as follows:
	
	  REM Set FBP_EXT=500
	
	This stops FastBack Plus from looking for extended memory.
	
	Additional query words: 3.10 3.1 3.11 fastbackplus fast back
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
