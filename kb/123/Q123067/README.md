---
layout: page
title: "Q123067: CDFS Does Not Support Lowercase Filenames"
permalink: kb/123/Q123067/
---

## Q123067: CDFS Does Not Support Lowercase Filenames

	Article: Q123067
	Product(s): Microsoft Windows NT
	Version(s): 3.10 3.50
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to access a filename on a CD-ROM that is in lowercase, the
	following error message appears:
	
	  File not found.
	
	The same is true when you attempt to access a directory in lowercase.
	
	CAUSE
	=====
	
	ISO 9660 defines uppercase filenames only. The Windows NT CD-ROM file system
	(CDFS) adheres to this and therefore expects names to be in uppercase.
	
	STATUS
	======
	
	This feature is under review and will be considered for inclusion in a future
	release.
	
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.10 3.50
	
	=============================================================================
	
