---
layout: page
title: "Q131778: System-wide Pool Paged Bytes Allocated By Files Are Not Released"
permalink: kb/131/Q131778/
---

## Q131778: System-wide Pool Paged Bytes Allocated By Files Are Not Released

	Article: Q131778
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you close files in Windows NT 3.5, the file handles are released, but the
	pool paged bytes allocated for the files are not released by the Cache Manager.
	Because Windows NT Cache Manager allocates 100 megabytes of system-wide pool
	paged memory for every 100 gigabytes of files accessed on the computer
	(including file accessed multiple times), the maximum number of bytes can be
	used quickly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 3.5. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	This problem was also corrected in Windows NT version 3.51.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	
	=============================================================================
	
