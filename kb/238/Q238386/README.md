---
layout: page
title: "Q238386: XADM: High Network Use When Generating Address Book View"
permalink: kb/238/Q238386/
---

## Q238386: XADM: High Network Use When Generating Address Book View

	Article: Q238386
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you create an Address Book view, you may generate a large amount network
	traffic.
	
	MORE INFORMATION
	================
	
	To generate the Address Book view, Exchange Server sorts the attributes of all
	of the items on the global address list and then replicates these changes
	throughout the organization.
	
	Depending on the amount of items on the global address list, network traffic may
	become exponentially busier. Microsoft recommends that you generate the Address
	Book view at a time when network bandwidth is available, preferably after
	hours.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q229883 HOWTO: Create Address Book View Using ADSI
	
	Additional query words: abv netmon monitor tcp ip msrpc
	
	======================================================================
	Keywords          : exc55 
	Component         : Admin
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Hardware          : ALPHA x86
	Issue type        : kbinfo
	
	=============================================================================
	
