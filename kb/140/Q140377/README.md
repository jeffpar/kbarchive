---
layout: page
title: "Q140377: InitiateSystemShutdown API Ignores Timed Delay"
permalink: /kb/140/Q140377/
---

## Q140377: InitiateSystemShutdown API Ignores Timed Delay

{% raw %}

	Article: Q140377
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
	
	If an application attempts to shutdown or reboot a Windows NT system using the
	InitiateSystemShutdown API, the time delay passed to the target system is
	ignored if that system has been locked by the current user. The target system
	shuts down or reboots immediately. If the target system has not been locked the
	time delay is honored and it shuts down or reboots as expected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in Windows NT Workstation and Server version
	4.0.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.50 3.51
	
	=============================================================================
	

{% endraw %}
