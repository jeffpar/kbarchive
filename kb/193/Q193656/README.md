---
layout: page
title: "Q193656: &quot;The File Format Is Invalid&quot; Playing Large AVI File"
permalink: kb/193/Q193656/
---

## Q193656: &quot;The File Format Is Invalid&quot; Playing Large AVI File

	Article: Q193656
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool osr2 win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to play a large audio-video interleave (AVI) file, you may receive
	the following error message:
	
	  The file format is invalid.
	
	CAUSE
	=====
	
	This error message can occur when you try to play an AVI file that is larger
	than 2 gigabytes (GB) in size. Limitations exist with Microsoft Video for
	Windows solutions that limit AVI files to the same maximum file size as the
	FAT16 file system, which is 2 GB minus 1 byte.
	
	On computers using the FAT32 file system, the maximum file size is 4 GB minus 2
	bytes, which is larger than Video for Windows is designed to handle. AVI files
	created by Video for Windows that exceed 2 GB in size appear invalid or damaged
	to AVI file players.
	
	RESOLUTION
	==========
	
	When you are using Video for Windows-based programs, limit the size of AVI files
	that you create to less than 2 GB.
	
	MORE INFORMATION
	================
	
	Programs using Microsoft DirectShow can create AVI files that exceed 2 GB in
	size on computers using the FAT32 or NTFS file system.
	
	Additional query words: corrupted
	
	======================================================================
	Keywords          : kberrmsg kbtool osr2 win95 
	Technology        : kbWin95search kbWin98search kbOPKSearch kbWin98 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
