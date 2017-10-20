---
layout: page
title: "Q122362: Error C0000004 When Running Process-Monitoring Tools"
permalink: /kb/122/Q122362/
---

## Q122362: Error C0000004 When Running Process-Monitoring Tools

{% raw %}

	Article: Q122362
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	3.10 3.50
	
	WINDOWS
	
	kbnetwork kberrmsg kbbug3.10 kbbug3.50
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run process-monitoring tools such as PSTAT, PMON, TLIST, QSLICE, KILL,
	and PVIEW against a Windows NT computer that contains a large amount of System
	Process Information, the following message appears:
	
	  Error C0000004
	
	CAUSE
	=====
	
	These utilities currently pass the system a buffer that is too small to contain
	all the process and thread information that might be present in an extremely
	large server configuration.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.1 and 3.5.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	

{% endraw %}
