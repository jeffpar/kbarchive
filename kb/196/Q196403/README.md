---
layout: page
title: "Q196403: XADM: Newly Replicated Folders Appear Not to Have Content"
permalink: /kb/196/Q196403/
---

## Q196403: XADM: Newly Replicated Folders Appear Not to Have Content

	Article: Q196403
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you create a new replica of an existing public folder, data may not
	initially be available for some users.
	
	MORE INFORMATION
	================
	
	The public folder hierarchy possesses a higher replication value than the
	folder's content. Depending on affinity, clients local to the newly created
	replica may see it as accessible but void of content until the data has also
	been completely replicated. This is often seen on public folders with large
	content or where the replica is being copied over a slow or heavy traffic link.
	
	This is by design.
	
	Additional query words: public folder empty missing
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
