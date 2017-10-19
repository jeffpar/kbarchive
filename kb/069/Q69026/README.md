---
layout: page
title: "Q69026: Operations on Hidden Files"
permalink: /kb/069/Q69026/
---

## Q69026: Operations on Hidden Files

	Article: Q69026
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:2.x,3.x,4.0,4.01
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 2.11, 3.1, 3.2, 3.21, 3.3, 3.3a, 4.0, 4.01 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	There are several MS-DOS commands that can be used on files that have the hidden
	attribute set; however, they all require that you know the filename. These
	commands are:
	
	  Command     Versions
	  -------     --------
	
	  TYPE        All versions listed above
	  FIND        All versions listed above
	  FC          3.20 through 4.x
	  PRINT       3.00, 3.10, 3.20, 3.30
	  ATTRIB      5.00
	
	Commands such as DEL, ERASE, DIR, REN, XCOPY, ATTRIB, and COPY return the message
	"File not found" or "Invalid path" when used on hidden files.
	
	Additional query words: 2.11 3.00 3.10 3.20 3.30 4.00 4.01 noupd
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS321 kbMSDOS400 kbMSDOS320 kbMSDOS330a kbMSDOS310 kbMSDOS330 kbMSDOS401 kbMSDOS211
	Version           : MS-DOS:2.x,3.x,4.0,4.01
	
	=============================================================================
	
