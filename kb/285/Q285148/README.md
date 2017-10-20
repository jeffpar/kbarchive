---
layout: page
title: "Q285148: Event ID 637 Is Logged Stating that a User Removed Another User"
permalink: /kb/285/Q285148/
---

## Q285148: Event ID 637 Is Logged Stating that a User Removed Another User

{% raw %}

	Article: Q285148
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool kbWinNTsearch
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Audit feature of account management is enabled, an administrator may
	receive an event ID 637 message stating that a user removed another user from a
	group even though the user has not removed any users.
	
	CAUSE
	=====
	
	This behavior can occur whenever the user views the group even in situations
	where the user is only viewing the group, not deleting any other users.
	
	If a member of a group had been previously deleted, and then a user uses the User
	Manager tool (Usrmgr.exe) to only view the group, the tool shows that users have
	been deleted.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool kbWinNTsearch 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
