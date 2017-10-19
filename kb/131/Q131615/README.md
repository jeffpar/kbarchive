---
layout: page
title: "Q131615: Windows NT Backup Does Not Support Special-Character Filenames"
permalink: /kb/131/Q131615/
---

## Q131615: Windows NT Backup Does Not Support Special-Character Filenames

	Article: Q131615
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows NT Backup 3.1 allows you to backup files with special characters
	(such as ~ [umlaut]) in the file name. However, if you attempt to restore the
	file, the special characters in the file name is replaced with non-printable
	characters.
	
	
	WORKAROUND
	==========
	
	To work around this problem, upgrade to Windows NT 3.5 or 3.51.
	
	The problem does not occur when you backup and restore the files with Windows NT
	Backup under Windows NT 3.5 and 3.51.
	
	Additional query words: prodnt 3.10 back up restoration
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
