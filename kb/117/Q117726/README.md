---
layout: page
title: "Q117726: Server Operator Cannot Unlock Workstation"
permalink: /kb/117/Q117726/
---

## Q117726: Server Operator Cannot Unlock Workstation

{% raw %}

	Article: Q117726
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51
	Operating System(s): 
	Keyword(s): kbother
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	A user who is a member of the Server Operator group within Windows NT
	Advanced Server does NOT have the authority to unlock the workstation.
	
	The table on page 392 of the Windows NT 3.1 Advanced Server "System Guide"
	and the first paragraph of page 395 state that the Server Operator can lock
	and unlock the server.
	
	The Server Operator does not have the ability to unlock the workstation
	when it has been locked by another user. Only the administrator and the
	currently logged on user can unlock the workstation.
	
	This is also true for Windows NT Server 3.5 and 3.51; the "System Guide"
	contains the table on page 398 and the text on page 401 that incorrectly
	show or state that the Server Operator has the authority to unlock the
	workstation.
	
	
	Additional query words: prodnt rights security
	
	======================================================================
	Keywords          : kbother 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT350search kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNT310Search
	Version           : 3.1 3.5 3.51
	
	=============================================================================
	

{% endraw %}
