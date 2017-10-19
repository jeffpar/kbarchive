---
layout: page
title: "Q130839: NTFS Performance Problem with Many Files"
permalink: /kb/130/Q130839/
---

## Q130839: NTFS Performance Problem with Many Files

	Article: Q130839
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
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An NTFS volume containing a very large number of files may exhibit degradation
	in performance when you create new files.
	
	CAUSE
	=====
	
	In an effort to provide consistently good performance, the Windows NT file
	system (NTFS) reserves a portion of disk space for use by the file system
	itself. In situations where very little disk space is available, Windows NT may
	need to release some of this space in order to allocate space for user files. In
	the vast majority of cases, this algorithm works well. In one specialized case,
	however, it is possible for the algorithm to actually degrade performance by a
	significant amount.
	
	The worst case occurs if all of the following conditions are true:
	
	- NTFS is formatted with a smaller cluster factor than the default.
	
	- Less than 1/8th of the total disk space is available.
	
	- The volume has never had more files on it at one time than it has now.
	
	The problem described here only occurs when you create new files, and the total
	number of files is being increased to a number greater than ever before. The
	magnitude of the performance degradation depends on the history of file creation
	on the volume. It is possible to observe degradation with as few as several
	hundred thousand files. It is also possible to create more than two million
	files on a single volume without observing significant performance degradation
	depending on the pattern of file creation.
	
	WORKAROUND
	==========
	
	To work around this problem, reduce the total number of files on the volume or
	reformat the volume. To minimize the impact of the problem when a very large
	number of files is required, attempt to create the smaller files first before
	most of the disk space is already in use.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. A fix to
	this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: 3.10 prodnt huge one-eight
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
