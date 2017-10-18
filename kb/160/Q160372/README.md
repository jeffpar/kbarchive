---
layout: page
title: "Q160372: Intermittent File Corruption when Compiling on NTFS Partition"
permalink: kb/160/Q160372/
---

## Q160372: Intermittent File Corruption when Compiling on NTFS Partition

	Article: Q160372
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In rare instances, corruption can occur when compiling files on NTFS when using
	VC++ 4.2. This will only occur with lazy writer callback on file produced by
	mapping.
	
	WORKAROUND
	==========
	
	This problem has been fixed in the new Ntfs.sys file available in Windows NT 4.0
	Service Pack 2 and later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.00. This
	problem has been corrected in the latest U.S. Service Pack for Windows NT
	version 4.00. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: visual C Winnt prodnt
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
