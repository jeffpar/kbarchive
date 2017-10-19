---
layout: page
title: "Q58258: Windows Err Msg: This is Not a Valid Help File"
permalink: /kb/058/Q58258/
---

## Q58258: Windows Err Msg: This is Not a Valid Help File

	Article: Q58258
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are attempting to receive help from a Windows application, such as
	Microsoft Excel, running under Microsoft Windows, one of the following error
	messages is displayed:
	
	  This is not a valid helpfile
	
	  -or-
	
	  This is not a Windows help file
	
	CAUSE
	=====
	
	These errors occur because your WIN.INI file [extensions] section contains the
	following entry:
	
	     [extensions]
	     hlp=winhelp.exe ^.hlp
	
	This entry allows help files to be opened in Windows Help by running them in File
	Manager. However, Windows applications that use a help module with the extension
	.HLP (such as EXCELHLP.HLP) do not function correctly with this entry present.
	
	Additional query words: 3.00 win30 3.00a 3.10 3.11 winhelp
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
