---
layout: page
title: "Q152837: ControlService() Results in Services.exe Memory Leak"
permalink: /kb/152/Q152837/
---

## Q152837: ControlService() Results in Services.exe Memory Leak

{% raw %}

	Article: Q152837
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
	
	Applications that repeatedly use the Win 32 call ControlService() with the
	SERVICE_CONTROL_INTERROGATE flag may result in a memory leak in services.exe.
	
	To identify the leak, monitor memory allocations of Services.exe using Pmon.exe,
	or monitor private bytes of Services.exe using performance monitor. The
	allocated bytes will increase abnormally over time.
	
	CAUSE
	=====
	
	A pointer was allocated to hold the service image name that was not freed after
	querying the status for a driver.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt 3.51
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
