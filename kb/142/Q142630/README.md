---
layout: page
title: "Q142630: NTFS with Full Logfile Condition May Cause Trap"
permalink: /kb/142/Q142630/
---

## Q142630: NTFS with Full Logfile Condition May Cause Trap

	Article: Q142630
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	
	While deleting an extremely large directory (100,000+ files) on an NTFS formatted
	drive, a hang condition occurs in an application (Winfile.exe or other)
	performing the file delete.
	
	
	CAUSE
	=====
	
	
	A deadlock in NTFS may occur due to a log full condition is on a system logfile
	owned by NTFS.
	
	
	RESOLUTION
	==========
	
	This problem has been resolved by a hotfix to Ntfs.sys.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
