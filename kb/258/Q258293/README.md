---
layout: page
title: "Q258293: XFOR: Services Required for NNTP Clients"
permalink: /kb/258/Q258293/
---

## Q258293: XFOR: Services Required for NNTP Clients

{% raw %}

	Article: Q258293
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 11-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Exchange Server supports the Network News Transfer Protocol (NNTP) protocol in
	two ways:
	
	- Server connections (feeds)
	
	- Client connections
	
	The Exchange Server Internet News service (MSExchangeINS) does not need to be
	running for NNTP clients (for example, Microsoft Outlook Express or Agent) to
	gain access to public folders that are configured in the newsgroup hierarchies.
	The information store (at port 119) handles these client requests.
	
	The Exchange Server Internet News service must be configured and running to allow
	NNTP feeds (server-to-server communication).
	
	Additional query words:
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
