---
layout: page
title: "Q73825: Windows: MS-DOS-Based Applications Require Valid Video Grabber"
permalink: /kb/073/Q73825/
---

## Q73825: Windows: MS-DOS-Based Applications Require Valid Video Grabber

	Article: Q73825
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows versions 3.0 and 3.0a, you receive one of the following messages when
	you try to run an MS-DOS-based application in either standard or 386 enhanced
	mode:
	
	  Cannot find the grabber (WINOLDAP.GRB); check to ensure that the grabber is
	  in the path defined by the SYSTEM.INI file's '286grabber=' entry
	
	  -or-
	
	  Application Execution Error: Cannot find file; check to ensure the path and
	  filename are correct
	
	In Windows version 3.1, you receive one of the following messages when you try to
	run an MS-DOS-based application.
	
	In 386 enhanced mode:
	
	  Cannot find file <MS-DOS-based application (or one of its
	  components)>.
	  Check to ensure the path and filename are correct and that all required
	  libraries are available.
	
	In standard mode:
	
	  Cannot find the file WINOLDAP.GRB. Make sure that the file is in the path
	  defined by '286grabber=' value in SYSTEM.INI
	
	CAUSE
	=====
	
	Windows cannot find the 286 or 386 video grabber file.
	
	RESOLUTION
	==========
	
	Ensure that a valid video grabber is available in the SYSTEM.INI file under the
	[BOOT] section for the appropriate Windows operating mode. The grabber is
	necessary for Windows to launch an MS-DOS-based application.
	
	Additional query words: 3.00 3.0 3.0a 3.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin311
	Version           : WINDOWS:3.0,3.0a,3.11
	
	=============================================================================
	
