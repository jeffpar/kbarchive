---
layout: page
title: "Q119743: Error Attempting to Delete Groups with Member Groups Present"
permalink: /kb/119/Q119743/
---

## Q119743: Error Attempting to Delete Groups with Member Groups Present

	Article: Q119743
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbusage
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
	
	If you attempt to delete a group that still contains members, the following
	message may appear:
	
	  The following error occurred when trying to delete group <groupname>:
	  This operation is not allowed on this special group.
	
	This message can be misleading; in actuality, this message could indicate that
	certain members still have this group defined as their Primary Group.
	
	When you attempt to remove certain members from the group, who have this group
	set as their Primary Group, you may receive the following error message:
	
	  The following error occurred changing the properties of the global group
	  <groupname>:
	
	  This operation is not allowed on this special group.
	
	WORKAROUND
	==========
	
	To avoid receiving this message, check to see if a group is defined as a primary
	group for any members, then reset the primary group if any are found, before you
	delete the group.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Workstation and
	Server versions 3.5, 3.51, and 4.0. We are researching this problem and will
	post new information here in the Microsoft Knowledge Base as it becomes
	available.
	
	Additional query words: prodnt err msg
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
