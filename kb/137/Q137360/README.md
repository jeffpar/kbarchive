---
layout: page
title: "Q137360: No Scheduled Tasks in System Agent After Running Lfnbk.exe"
permalink: /kb/137/Q137360/
---

## Q137360: No Scheduled Tasks in System Agent After Running Lfnbk.exe

	Article: Q137360
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use Lfnbk.exe to back up long filenames, you may not see any scheduled
	tasks in System Agent.
	
	CAUSE
	=====
	
	When you restart your computer after running Lfnbk.exe to back up long
	filenames, the path to the System Agent configuration file (Sage.dat) becomes
	invalid. Lfnbk.exe renames the default folder from
	
	  C:\Program Files\Plus!\System
	
	to:
	
	  C:\Progra~1\Plus!\System
	
	System Agent cannot use the short filenames, and cannot locate the Sage.dat file.
	
	RESOLUTION
	==========
	
	To work around this problem, copy the Sage.dat file from the
	Progra~1\Plus!\System folder to the root folder on drive C, and then restart
	Windows 95.
	
	
	Additional query words: sage
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	
	=============================================================================
	
