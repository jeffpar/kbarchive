---
layout: page
title: "Q152048: File Manager Incorrectly Reports Free Space on 3.5-inch Disk"
permalink: /kb/152/Q152048/
---

## Q152048: File Manager Incorrectly Reports Free Space on 3.5-inch Disk

{% raw %}

	Article: Q152048
	Product(s): Microsoft Windows NT
	Version(s): 3.50 3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use File Manager to check the available free space of a blank 3.5- inch
	disk, it will report 1,457,152 bytes. However, CHKDSK or WINMSD will report
	1,457,664 bytes available, a difference in free space of 512 bytes
	
	CAUSE
	=====
	
	This is a problem with the way File Manager displays free disk space. The
	available space reported by CHKDSK is correct.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
