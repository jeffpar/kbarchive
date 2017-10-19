---
layout: page
title: "Q95118: Windows for Workgroups Open File Handle Limits"
permalink: /kb/095/Q95118/
---

## Q95118: Windows for Workgroups Open File Handle Limits

	Article: Q95118
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows for Workgroups version 3.1 is limited to 255 open file handles per
	machine. This Windows for Workgroups limitation is caused by the MS-DOS limit of
	255 open files at one time.
	
	Windows for Workgroups 3.11 has the following open file handle limits:
	
	- In an MS-DOS virtual machine (VM) you are limited to 254 file handles.
	
	- The Windows for Workgroups Server VM provides file and print services. The
	  Server VM allows 1024 file handles for remote users if 32-bit file access is
	  enabled and 255 files handles if it is not.
	
	- If you are using 32-bit file access, there is a theoretical limit equal to
	  the amount of free RAM.
	
	MORE INFORMATION
	================
	
	Some applications may require a server to have more than 255 files open at one
	time. For example, a database application may have 255 files open at one time on
	a Windows for Workgroups server. If this limit is exceeded, you may receive
	application-specific error message concerning open files or memory.
	
	There are no workarounds to these limitations for Windows for Workgroups.
	
	REFERENCES
	==========
	
	"MS-DOS User's Guide and Reference," version 5.0, pages 252, 493-494
	
	Additional query words: 3.10 maximum fox dbase paradox
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
