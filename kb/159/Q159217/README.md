---
layout: page
title: "Q159217: RESKIT: RshSvc Leaks Process Handles"
permalink: /kb/159/Q159217/
---

## Q159217: RESKIT: RshSvc Leaks Process Handles

{% raw %}

	Article: Q159217
	Product(s): Microsoft Windows NT
	Version(s): WinNT:3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running the Remote Shell service from the Windows NT Resource Kit, you may
	notice that after the service operates for a while, Windows NT is unable to
	start any new process. For example, Windows NT is unable to launch any new
	applications or the command shell from the server console.
	
	
	CAUSE
	=====
	
	The RSHSVC service is not freeing process handles correctly.
	
	RESOLUTION
	==========
	
	To resolve this problem, stop the Remote Shell service to free all used handles
	and allow new processes to start.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51 and 4.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: RshSvc Rsh leak handle
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT400search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS351search
	Version           : WinNT:3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
