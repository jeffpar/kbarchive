---
layout: page
title: "Q150454: INFO: Assigning Different LUs to Common Groups in SNA Server"
permalink: /kb/150/Q150454/
---

## Q150454: INFO: Assigning Different LUs to Common Groups in SNA Server

	Article: Q150454
	Product(s): Microsoft SNA Server
	Version(s): 2.0,2.1,2.11,3.0,4.0
	Operating System(s): 
	Keyword(s): kbnetwork kbnetserv
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, 3.0, 4.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not recommended that you assign different LUs to user groups that have
	members in common because the results cannot be predicted.
	
	MORE INFORMATION
	================
	
	According to the SNA Server version 3.0 "Administration Guide," Chapter 3:
	
	  If a user is assigned LUs through one or more accounts, such as group
	  accounts and the user's individual account, the LUs do not accumulate.
	  Instead, one account determines the access for that user. The account that
	  determines this access is the account found first in the following search
	  order:
	
	  1. User accounts (highest priority)
	
	  2. Domain groups
	
	  3. Local groups
	
	  4. Well-known groups such as Everyone (lowest priority)
	
	However, it does not explain clearly what will happen if two groups are at the
	same level (2 local groups).
	
	SNA Server will use the LUs assigned to whichever group is returned first from
	Microsoft Windows NT, and there is no way to predict the order in which the
	groups will be returned.
	
	Additional query words: ProdSNA
	
	======================================================================
	Keywords          : kbnetwork kbnetserv 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : :2.0,2.1,2.11,3.0,4.0
	Issue type        : kbinfo
	
	=============================================================================
	
