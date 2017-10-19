---
layout: page
title: "Q178283: Cannot Browse CD that has Both Audio and Video"
permalink: /kb/178/Q178283/
---

## Q178283: Cannot Browse CD that has Both Audio and Video

	Article: Q178283
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A CD that contains audio, video, and data-formatted media will launch the CD
	player when Autorun.inf is run. The CD Player will operate correctly but an
	attempt to browse the CD-ROM drive using Windows NT Explorer or My Computer,
	will result in the following error:
	
	  Drive letter X:\ is not accessible. The parameter is incorrect. Retry or
	  Cancel.
	
	  -or-
	
	  Drive letter X:\ is not accessible. The file or directory is corrupt and
	  non-readable. Retry or Cancel.
	
	NOTE: X is the drive letter of the CD ROM drive.
	
	CAUSE
	=====
	
	The Windows NT CD file system does not support the functionality of dual formats
	on CD-ROMs.
	
	WORKAROUND
	==========
	
	Windows 95 does support this function and using this operating system will allow
	its usage.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	
	Additional query words: err msg errmsg
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
