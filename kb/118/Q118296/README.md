---
layout: page
title: "Q118296: ANNOUNCE and ANNDELTA Entries in Registry are Ignored"
permalink: /kb/118/Q118296/
---

## Q118296: ANNOUNCE and ANNDELTA Entries in Registry are Ignored

{% raw %}

	Article: Q118296
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Announce and Anndelta entries in the Registry in Windows NT and Windows NT
	Advanced Server version 3.1 are ignored. These entries are located in the
	Registry under:
	
	  HKEY_LOCAL_MACHINE\ 
	     SYSTEM\ 
	        CurrentControlSet\Services\LanmanServer\Parameters.
	
	The Resource Kit for Windows NT states these keys are used to tune the Lanman
	Server portion of Windows NT. However, changing these entries has no effect on
	the performance of Windows NT.
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. We are researching this problem and will post new
	information in the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
