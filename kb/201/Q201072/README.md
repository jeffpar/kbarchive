---
layout: page
title: "Q201072: XFOR: Mail to Postmaster Account Doesn't Arrive"
permalink: /kb/201/Q201072/
---

## Q201072: XFOR: Mail to Postmaster Account Doesn't Arrive

{% raw %}

	Article: Q201072
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Internet mail sent to an Exchange Server account named Postmaster from any
	client through a version 4.0 or 5.0 Exchange Server Internet Mail Connector does
	not arrive in the Postmaster's mailbox on Exchange Server.
	
	MORE INFORMATION
	================
	
	This is by design. Mail destined for the Exchange Server Postmaster account is
	sent to the alias listed in the Administrator entry on the Internet Mail
	Connector's Internet Mail tab.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
