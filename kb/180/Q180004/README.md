---
layout: page
title: "Q180004: Public Folder Permissions Are Cumulative"
permalink: kb/180/Q180004/
---

## Q180004: Public Folder Permissions Are Cumulative

	Article: Q180004
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Public folder permissions are designed to be optimistic. Optimistic here implies
	the "least restrictive" set of permissions.
	
	The Permissions that apply to the user include the set of permissions that the
	user inherits from each of the groups the user belongs to, in addition to the
	explicit permissions granted directly to the individual user account. A user's
	permission level is always the least restrictive of that user's explicit
	permissions and the permissions of any and all groups to which that user
	belongs.
	
	This means that if different permissions are given to the same mailbox, the
	summation of all the given rights is what the mailbox will end up with.
	
	MORE INFORMATION
	================
	
	For example:
	
	Users A and B exist on a site. The administrator creates two distribution lists
	(DLs): Manager and Supervisor. Both User A and User B are added to the
	Supervisor DL; only user A is added to the Manager DL. Then, on folder X, the
	Manager DL is given the Owner role, and the Supervisor DL is given the
	Contributor role. User A will ultimately have Owner permissions on folder X,
	even though user A is a member of the Supervisor DL which only has the
	Contributor role.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
