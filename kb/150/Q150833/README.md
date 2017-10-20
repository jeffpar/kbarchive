---
layout: page
title: "Q150833: Memory Deallocation Failure in SRV.SYS Directory Notification"
permalink: /kb/150/Q150833/
---

## Q150833: Memory Deallocation Failure in SRV.SYS Directory Notification

{% raw %}

	Article: Q150833
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
	
	Windows NT Version 3.51 may a experience a memory leak in SRV.sys which can
	slowly consume paged pool resources. This can degrade system performance and
	cause the system to stop responding.
	
	MORE INFORMATION
	================
	
	The leak will not necessarily occur on all systems and specifically involves
	File System Run Time allocations (FSrt).
	
	To detect the leak, use performance monitor to determine that the Object Counter
	Memory: Pool Paged Bytes increases abnormally over time.
	
	
	CAUSE
	=====
	
	The directory notification package allocates a buffer that is not later
	deallocated under certain circumstances
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: 3.50 3.51 prodnt memory leak
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
