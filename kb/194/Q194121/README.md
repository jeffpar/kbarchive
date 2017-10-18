---
layout: page
title: "Q194121: XADM: Update DLs When Their Expansion Server is Moved"
permalink: kb/194/Q194121/
---

## Q194121: XADM: Update DLs When Their Expansion Server is Moved

	Article: Q194121
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you have distribution lists (DLs) defined for a site, and the expansion
	server for those distribution lists is moved out of the site, you need to
	specify a new expansion server for those distribution lists. The distribution
	lists continue to work, but the lists cannot be modified until the expansion
	server value is updated.
	
	To update the expansion server value:
	
	1. In the Exchange Server Administrator program, click Site, then Recipients,
	  and select the distribution list.
	
	2. From the File menu, choose Properties.
	
	3. On the General tab, select a new value in the Expansion Server list, and then
	  click Apply.
	
	Additional query words: Move Server Wizard
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
