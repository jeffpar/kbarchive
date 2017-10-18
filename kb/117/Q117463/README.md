---
layout: page
title: "Q117463: Macintosh Sees Incorrect File Size when Volume is Over 2 GB"
permalink: kb/117/Q117463/
---

## Q117463: Macintosh Sees Incorrect File Size when Volume is Over 2 GB

	Article: Q117463
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When copying a file from a Macintosh client to a Windows NT Advanced Server
	Macintosh volume that is larger than two gigabytes (GB) in size, the file size
	is displayed incorrectly.
	
	For example, a 12 KB file will appear as 11,176 bytes (because of the difference
	in disk formats) on the Windows NT computer and -1,721 bytes on the Macintosh
	computer.
	
	MORE INFORMATION
	================
	
	This problem is caused by the Macintosh Finder. The Macintosh Finder was
	designed to handle volumes less than 2 GB and assume that the free volume space
	plus the used volume space equals the total volume size. Because of this,
	Windows NT Advanced Server reports file information to Macintosh clients through
	a filter. The filter reports that the total volume size and the free space on
	the volume are 2 GB if either is larger than 2 GB. In the case of the problem
	above, Finder attempts to reconcile and report the file size information based
	on the assumption that the total volume size is 2 GB + 12 KB.
	
	Additional query words: prodnt dazed mac
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
