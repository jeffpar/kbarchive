---
layout: page
title: "Q163880: COPY Command Causes File Cache to Grow"
permalink: kb/163/Q163880/
---

## Q163880: COPY Command Causes File Cache to Grow

	Article: Q163880
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the COPY command of Cmd.exe to copy files that are significantly
	larger than the physical memory, Windows NT appears to slow down and user
	interface performance decreases.
	
	When you look at this in performance monitor, the cache is very large (from 50 to
	90 percent of physical memory) and the process working sets have shrunk.
	
	MORE INFORMATION
	================
	
	The CreateFile API has a flag (FILE_FLAG_SEQUENTIAL_SCAN) that is useful when
	copying files. It tells Cache Manager to not grow the file cache when requests
	for this handle arrive. Therefore, Memory Manager does not have to shrink the
	application's working set to accommodate the larger cache. The CopyFile and
	CopyFileEx APIs make use of this flag.
	
	Although the COPY command uses the CopyFile API, it opens the file without the
	mentioned flag first to inspect the source and destination files.
	
	WORKAROUND
	==========
	
	Use XCOPY, File Manager or Windows Explorer to copy large files.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the hotfix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
