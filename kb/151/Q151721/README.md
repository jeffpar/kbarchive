---
layout: page
title: "Q151721: PRB: Mastering/Windows NT Err Msg: Cannot Find File"
permalink: kb/151/Q151721/
---

## Q151721: PRB: Mastering/Windows NT Err Msg: Cannot Find File

	Article: Q151721
	Product(s): Microsoft Mastering Series
	Version(s): 1.0,1.0a; winnt:3.51
	Operating System(s): 
	Keyword(s): kbmm kbsetup kbnokeyword
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- MSPRESS Mastering Microsoft Exchange Development ISBN 1-57231-337-4, version 1.0 
	- MSPRESS Mastering Microsoft Access Programming ISBN 1-55615-912-9, versions 1.0, 1.0a 
	- the operating system: Microsoft Windows NT 3.51 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install Mastering Exchange Development or Mastering Microsoft Access
	Programming on a machine running Windows NT 3.51, you receive the following
	error message when you try to run the program:
	
	  Application Execution Error (Title in dialog box)
	  Cannot find file MED or MACC (or one of its components);
	  check to ensure the path and filename are correct and that all required
	  libraries are available.
	
	NOTE: Setup will have completed successfully.
	
	CAUSE
	=====
	
	This occurs when there are spaces in the directory name. For example, if you
	name your installation directory MY DIR, Windows NT 3.51 does not allow the use
	of spaces when naming directories.
	
	RESOLUTION
	==========
	
	Remove the program and install the application using a directory name that does
	not contain spaces.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: 1.00 1.10a multi media multimedia multi- mmtitles
	
	======================================================================
	Keywords          : kbmm kbsetup kbnokeyword 
	Technology        : kbMSPressSearch kbOSWinSearch kbOSWinNT351 kbZNotKeyword2 kbOSWinNTSearch
	Version           : :1.0,1.0a; winnt:3.51
	Issue type        : kbprb
	
	=============================================================================
	
