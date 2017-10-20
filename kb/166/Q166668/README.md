---
layout: page
title: "Q166668: XFOR: How to Eliminate Duplicates in Exchange GAL"
permalink: /kb/166/Q166668/
---

## Q166668: XFOR: How to Eliminate Duplicates in Exchange GAL

{% raw %}

	Article: Q166668
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You have a large number of Microsoft Exchange Server users who also have Notes
	accounts. You perform directory synchronization (dirsync) and you want the users
	to show up in Exchange Server with only one entry in the Global Address List and
	you want to have all mail forwarded to the Exchange Account.
	
	MORE INFORMATION
	================
	
	The only way to perform this task is manually.
	
	1. From Notes you need to modify each user's Person Page. Change the Available
	  For Dirsync field to NO and fill in the forward field with the Notes proxy
	  address of the Exchange account. This Notes proxy address can be obtained
	  from the e-mail message's Addresses tab for the relevant mailbox in the
	  Exchange Server Administrator program. When the message arrives in Exchange
	  Server, the From field will be, for example:
	
	     John Doe@Notes.
	
	2. To prevent replies to these messages from leaving the Exchange system and
	  being returned to Notes, you must create a secondary Notes proxy in Exchange
	  Server that matches this address: John Doe @Notes. When Exchange Server
	  receives the reply, it will resolve the destination locally.
	
	Lotus Notes is manufactured by Lotus, a vendor independent of Microsoft; we make
	no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	
	=============================================================================
	

{% endraw %}
