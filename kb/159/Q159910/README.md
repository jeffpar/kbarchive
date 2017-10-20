---
layout: page
title: "Q159910: Memory Corruption on a Windows NT Alpha Platform"
permalink: /kb/159/Q159910/
---

## Q159910: Memory Corruption on a Windows NT Alpha Platform

{% raw %}

	Article: Q159910
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This problem is specific to the Alpha processor platform only. When an
	application makes a function call that resolves to the Windows NT call of
	ZwMapViewOfSection, and the call is made two or more times in a row (before
	calling ZwUnMapViewOfSection), an assertion will sometimes occur (depending on
	the size of the mapped region and the physical address passed in). If the
	assertion is ignored, some of the PTEs are overwritten.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Windows NT 4.0 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt ntblue sp2
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
