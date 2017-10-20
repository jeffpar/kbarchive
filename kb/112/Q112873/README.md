---
layout: page
title: "Q112873: SNMPTRAP Quits When Sending Information"
permalink: /kb/112/Q112873/
---

## Q112873: SNMPTRAP Quits When Sending Information

{% raw %}

	Article: Q112873
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SNMPTRAP.EXE generates and exception and quits when it tries to send information
	to client applications that are registered to receive but have since exited.
	
	CAUSE
	=====
	
	Simple Network Management Protocol (SNMP) uses the executable file SNMPTRAP.EXE
	to detect traps and alert client applications of them.
	
	SNMPTRAP.EXE creates named pipes through which it sends trap information to
	client applications that want to receive it. If a requesting application ends,
	however, and the pipe is broken, SNMPTRAP quits when it tries and fails to send
	information over that pipe.
	
	RESOLUTION
	==========
	
	A correction was made to MGMTAPI.DLL to handle this condition and eliminates the
	symptom from SNMPTRAP.EXE.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1. This problem was corrected in the latest U.S.
	Service Pack for Windows NT and Windows NT Advanced Server version 3.1. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW310 kbWinNTSsearch kbWinNTS310 kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1
	
	=============================================================================
	

{% endraw %}
