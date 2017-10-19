---
layout: page
title: "Q153993: Windows NT May Cache Data Even if Write-through Flag is Set"
permalink: /kb/153/Q153993/
---

## Q153993: Windows NT May Cache Data Even if Write-through Flag is Set

	Article: Q153993
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a file is created on a server using CreateFile Api with GENERIC_WRITE,
	FILE_SHARE_WRITE and FILE_FLAG_WRITE_THROUGH flags, the last few bytes may be
	cached which could result in data corruption.
	
	
	CAUSE
	=====
	
	There was a problem in Windows NT Cache Manager where a page was not getting
	written through.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
