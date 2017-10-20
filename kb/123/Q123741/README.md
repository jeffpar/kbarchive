---
layout: page
title: "Q123741: Cannot Run RAS Programs When a Service References RASAPI32.DLL"
permalink: /kb/123/Q123741/
---

## Q123741: Cannot Run RAS Programs When a Service References RASAPI32.DLL

{% raw %}

	Article: Q123741
	Product(s): Microsoft Windows NT
	Version(s): 3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If any service running from the local system account references RASAPI32.DLL, no
	RAS programs can be run (including Remote Access [RASPHONE.EXE]).
	
	CAUSE
	=====
	
	RASCAUTH allocates shared memory in local system context that is unavailable to
	a user context instance that starts later.
	
	WORKAROUND
	==========
	
	To work around this problem, start Remote Access before your start the service.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Windows NT Server version 3.5. This problem was corrected in the latest U.S.
	Service Pack for Windows NT version 3.5. For information on obtaining the
	Service Pack, query on the following word in the Microsoft Knowledge Base
	(without the spaces):
	
	S E R V P A C K
	
	Additional query words: prodnt 3.50 ras phone rasphone
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : :3.5
	
	=============================================================================
	

{% endraw %}
