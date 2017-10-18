---
layout: page
title: "Q11685: PRB: MAPSYM 3.10 Truncating Line-Number Information"
permalink: kb/011/Q11685/
---

## Q11685: PRB: MAPSYM 3.10 Truncating Line-Number Information

	Article: Q11685
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Using Version 3.10 of the MAPSYM utility that came with the Windows Development
	Toolkit, you get an incorrect entry point (Program entry point at 0000:0000) for
	.SYM files and the map-file information (the line numbers) are truncated. You
	use close to 100 segments and generate more than 1000 line numbers.
	
	CAUSE
	=====
	
	Version 3.10 of MAPSYM has a limitation of 10,000 symbols and 150 segments.
	Additionally, if a pathname and segment name line (in the map-file line
	numbering) is greater than 80 characters, the line-number information is
	truncated.
	
	RESOLUTION
	==========
	
	To correct this problem, shorten this line to less than 80 characters. For
	example, change the following line
	
	  Line numbers for D:\TESTER\C\FILENAME.OBJ(d:\tester\c\filename.c)
	  segment filename_TEXT
	
	  to this:
	
	  Line numbers for D:\FILENAME.OBJ(d:\filename.c) segment filename_TEXT
	
	Additional query words: 3.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
