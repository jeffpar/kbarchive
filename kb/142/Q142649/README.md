---
layout: page
title: "Q142649: STOP 0x0000000A on ALR Revolution"
permalink: /kb/142/Q142649/
---

## Q142649: STOP 0x0000000A on ALR Revolution

{% raw %}

	Article: Q142649
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
	
	ALR Revolution Quad P6 systems running Windows NT 3.51, and possibly other
	systems from other manufacturers, may experience the following kernel mode stop
	error message:
	
	  STOP 0x0000000A
	
	CAUSE
	=====
	
	This is due to a problem with Ntfs.sys. During a particular kind of internal
	operation involved in extending a file, the Windows NT File System (NTFS) thread
	that is performing the extension must have exclusive access to certain internal
	data structures. The thread may or may not already have exclusive ownership of
	the resources before it begins this function, and should only release the
	resources after performing the extension if it did not already own the
	resources. The STOP 0x0000000A is caused by the NTFS thread releasing the
	resources before it should, allowing other thread(s) an opportunity to interfere
	with the work it is doing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	
	Additional query words: prodnt 0xa
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
