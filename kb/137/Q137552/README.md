---
layout: page
title: "Q137552: Monitor Service Generates Event 7005"
permalink: /kb/137/Q137552/
---

## Q137552: Monitor Service Generates Event 7005

{% raw %}

	Article: Q137552
	Product(s): Microsoft Windows NT
	Version(s): 
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
	
	MONITOR.EXE and DATALOG.EXE are included with the Microsoft Windows NT Resource
	Kit. These utilities allow Performance Monitor to start as a service and
	automatically append information to a log file. The service starts and stops
	correctly, but generates event 7005 in the system log each time it is stopped.
	The description in the event is:
	
	  The RpcImpersonateClient call failed with the following error:
	  No security context is available to allow impersonation.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	
	=============================================================================
	

{% endraw %}
