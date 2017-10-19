---
layout: page
title: "Q155979: Windows NT/2000 Backup Does Not Recognize Windows 95/98 Backup"
permalink: /kb/155/Q155979/
---

## Q155979: Windows NT/2000 Backup Does Not Recognize Windows 95/98 Backup

	Article: Q155979
	Product(s): Microsoft Windows NT
	Version(s): 2000
	Operating System(s): 
	Keyword(s): kbtool kbOSWinNT400 kbOSWin2000
	Last Modified: 25-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server 
	- Microsoft Windows NT Workstation 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to use the Backup tool in Windows NT 4.0 or Windows 2000 to
	restore data from a backup tape created with Microsoft Windows 95 or Microsoft
	Windows 98, you receive the following error message:
	
	  Foreign Tape
	  The tape in the drive must be erased before it can be used.
	
	  Unreconized Media
	  The backup file us unusable. You must erase it, or choose another file.
	
	CAUSE
	=====
	
	The Backup tool in Windows NT and Windows 2000 uses a different format for tapes
	and files than the Backup tool in Windows 95/98. The two formats are not
	interchangeable.
	
	RESOLUTION
	==========
	
	You must restore the data from the tape or file using the Backup tool on a
	computer running Windows 95/98.
	
	Additional query words: prodnt qic compatible ntbackup win9x win98 win95 ntrelease
	
	======================================================================
	Keywords          : kbtool kbOSWinNT400 kbOSWin2000 
	Technology        : kbWinNTsearch kbWinNTWsearch kbwin2000Serv kbWinNTSsearch kbwin2000ServSearch kbwin2000Search
	Version           : :2000
	
	=============================================================================
	
