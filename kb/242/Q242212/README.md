---
layout: page
title: "Q242212: XADM: Mailbox Exclusion Info Stored Using MBX Proxy Address"
permalink: /kb/242/Q242212/
---

## Q242212: XADM: Mailbox Exclusion Info Stored Using MBX Proxy Address

{% raw %}

	Article: Q242212
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server Mailbox Manager allows you to select mailboxes
	that you want to exclude from automated message deletion. With MBClean, there
	was a limit to the number of mailboxes that could be excluded. This limitation
	was caused by the way in which the mailbox exclusion information was being
	stored. To overcome this limitation, Mailbox Manager stores the exclusion
	information on the mailbox itself. Mailbox Manager uses a custom proxy address
	of type MBX and adds this proxy address to each mailbox that is excluded. For
	example, if you use Mailbox Manager to exclude a mailbox named "Test," a proxy
	address of type MBX is added to the Test mailbox. When Mailbox Manager processes
	the mailboxes for cleanup, it ignores the mailboxes that have the proxy address
	MBX.
	
	Additional query words: MCA
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
