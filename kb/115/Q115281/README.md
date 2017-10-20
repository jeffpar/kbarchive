---
layout: page
title: "Q115281: Renaming Files Over Network Causes Out of Memory Error"
permalink: /kb/115/Q115281/
---

## Q115281: Renaming Files Over Network Causes Out of Memory Error

{% raw %}

	Article: Q115281
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you repeatedly rename files over a network, Windows NT may run out of
	virtual memory.
	
	As you run out of virtual memory, an error message appears. It recommends that
	you increase your page file size. If you monitor Paged Pool Bytes and page file
	usage in Performance Monitor, you will see that they increase over time.
	
	CAUSE
	=====
	
	There is a memory leak in the server code that handles renames and string
	manipulation. Memory is allocated, used, but never freed. This causes the page
	pool memory, and thus the page file, to consume all available memory over time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem has been corrected in Windows NT
	Workstation and Windows NT Server version 3.5. This problem has also been
	corrected in the latest U.S. Service Pack for Windows NT and Windows NT Advanced
	Server version 3.1. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
