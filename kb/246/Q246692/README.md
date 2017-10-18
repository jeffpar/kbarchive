---
layout: page
title: "Q246692: XADM: Searching Contacts in Public Folders May Be Slow"
permalink: kb/246/Q246692/
---

## Q246692: XADM: Searching Contacts in Public Folders May Be Slow

	Article: Q246692
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbenv exc55
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you perform a search for contacts in a public folder in Microsoft Outlook
	(on the Tools menu, click Find), you may experience poor response times.
	
	MORE INFORMATION
	================
	
	When you perform a search for contacts in public folders, the server performs a
	sequential search and you receive correspondingly poor response times with a
	large number of records. The Find command is not a database query and does not
	use view indexes for searching.
	
	For faster results, type the first few characters of the name you are looking for
	while the Contacts folder is selected. This action highlights the first matching
	contact.
	
	Additional query words: advanced
	
	======================================================================
	Keywords          : kbenv exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
