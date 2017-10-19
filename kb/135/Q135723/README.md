---
layout: page
title: "Q135723: Migrating Macintosh Volumes from NetWare to Windows NT"
permalink: /kb/135/Q135723/
---

## Q135723: Migrating Macintosh Volumes from NetWare to Windows NT

	Article: Q135723
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbtoolkbfaq
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Migration Tool for NetWare (Nwconv.exe) may cause file corruption if you
	attempt to migrate a NetWare Macintosh volume to a Windows NT Macintosh volume.
	
	CAUSE
	=====
	
	The Migration Tool for NetWare does not support the migration of Macintosh files
	from a NetWare Macintosh volume to a Windows NT Macintosh volume.
	
	RESOLUTION
	==========
	
	To transfer directories and files from a NetWare server to a Windows NT server:
	
	1. From a Macintosh client, mount both the NetWare and the Windows NT volumes.
	
	2. Select the NetWare directory structure and drag it to the Windows NT
	  directory structure.
	
	Additional query words: migrate convert mac nwconv
	
	======================================================================
	Keywords          : kbtool kbfaq
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51,4.0
	
	=============================================================================
	
