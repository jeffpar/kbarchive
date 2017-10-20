---
layout: page
title: "Q149401: Event 560, 562 When No Objects Have Been Selected for Auditing"
permalink: /kb/149/Q149401/
---

## Q149401: Event 560, 562 When No Objects Have Been Selected for Auditing

{% raw %}

	Article: Q149401
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you choose Audit on the Policies menu and enable the Auditing File and
	Objects Access option in User Manager for Domains without specifying any objects
	to be audited, event 560 and event 562 will be logged in the security log file.
	Any action performed by the Administrator account in User Manager for Domains
	(or Server Manager) will be logged as an event 560 for the Administrator account
	and as an event 562 for the System account.
	
	CAUSE
	=====
	
	By default, the Auditing File and Objects Access option audits all action
	performed in User Manager for Domains (and in Server Manager).
	
	RESOLUTION
	==========
	
	This is by design. Security Account Manager (SAM), by default, assigns security
	access control lists (SACLs) to all objects it creates, and managing them with
	User Manager causes an object access audit to occur.
	
	Additional query words: prodnt event id
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	

{% endraw %}
