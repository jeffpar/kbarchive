---
layout: page
title: "Q112583: Domain Users are Validated as Guests Only"
permalink: /kb/112/Q112583/
---

## Q112583: Domain Users are Validated as Guests Only

	Article: Q112583
	Product(s): Microsoft Windows NT
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you remove the Domain Users global group from the Users local group on a
	Windows NT server, users of the domain may only be validated in the Guests local
	group. If you disable the Guests group, users might not be validated at all.
	
	MORE INFORMATION
	================
	
	To make local domain administration easier, a local group consists of users and
	global groups from one or more domains. You can use local groups to manage
	resource use in the local domain.
	
	If the Domain Users global group is not listed in the Users local group, users
	might not get validated as legitimate domain users; they may only receive guest
	privileges. Although the best solution is to put Domain Users in Users, you can
	also enter specific domain users in the Users group.
	
	Reference(s): Concepts and Planning Guide, Chapter 3.
	
	Additional query words: prodnt access
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNT310Search
	Version           : 3.1
	
	=============================================================================
	
