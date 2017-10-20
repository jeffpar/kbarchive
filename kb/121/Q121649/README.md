---
layout: page
title: "Q121649: Err Msg: The Domain is Not Available"
permalink: /kb/121/Q121649/
---

## Q121649: Err Msg: The Domain is Not Available

{% raw %}

	Article: Q121649
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to log on to a domain from a Windows NT workstation with proper
	user name and password, the following error message may appear:
	
	  The Domain Is Not Available
	
	CAUSE
	=====
	
	This error may occur if the machine account does not exist but the workstation
	was once a member of the domain.
	
	
	RESOLUTION
	==========
	
	To resolve this problem, remove and re-add the Windows NT workstation from
	Server Manager on the primary domain controller.
	
	NOTE: The removal of a machine name from Server Manager requires 15 minutes.
	
	Additional query words: prodnt 3.10
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
