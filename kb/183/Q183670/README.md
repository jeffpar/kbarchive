---
layout: page
title: "Q183670: XADM: Setup Fails with DS_E_INSUFFICIENT_ACCESS_RIGHTS"
permalink: /kb/183/Q183670/
---

## Q183670: XADM: Setup Fails with DS_E_INSUFFICIENT_ACCESS_RIGHTS

{% raw %}

	Article: Q183670
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 20-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server version 4.0 or 5.0 Setup, you may receive
	the following error message:
	
	  DS_E_INSUFFICIENT_ACCESS_RIGHTS
	
	When joining an existing site after selecting to join an existing site, you may
	receive a Stop error message:
	
	  Microsoft Exchange Server Setup
	  Failed to connect to the server 'SERVERNAME' with the following error.
	  You do not have permissions required to complete the operation.
	  Microsoft Exchange Directory
	  ID no. DS_E_INSUFFICIENT_ACCESS_RIGHTS
	
	WORKAROUND
	==========
	
	To work around this problem, install the RPC Configuration Service in Networks
	under Control Panel.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
