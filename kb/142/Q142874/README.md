---
layout: page
title: "Q142874: Services for Macintosh Reports Incorrect Free Volume Space"
permalink: kb/142/Q142874/
---

## Q142874: Services for Macintosh Reports Incorrect Free Volume Space

	Article: Q142874
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	After you upgrade to Windows NT 3.51 Service Pack 2, incorrect amount of free
	space on the Services for Macintosh volume is displayed on the Macintosh client
	computer.
	
	CAUSE
	=====
	
	This problem occurs if one of the following conditions are met:
	
	- If one or more files are removed from the Macintosh volume directory on the
	  Windows NT Server from the Macintosh client computer.
	
	  -or-
	
	- If one or more files are removed or copied from the Macintosh volume on the
	  NTFS partition of the Windows NT Server from a non-Macintosh client computer.
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 Service
	Pack 2. This problem was corrected in the latest Windows NT 3.51 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt appletalk sp2 sfm
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT351search kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
