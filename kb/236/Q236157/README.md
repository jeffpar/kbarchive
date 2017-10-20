---
layout: page
title: "Q236157: XFOR: Adding Exchange Address Book to Lotus Notes Client"
permalink: /kb/236/Q236157/
---

## Q236157: XFOR: Adding Exchange Address Book to Lotus Notes Client

{% raw %}

	Article: Q236157
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you successfully install the Microsoft Exchange Connector for Lotus Notes,
	you may find that the Address Book file, Exchange.nsf (the default name of the
	target address book), does not appear when you address messages in the Lotus
	Notes client.
	
	CAUSE
	=====
	
	The Lotus Notes server's Notes.ini file does not contain a pointer to the
	Exchange.nsf database.
	
	RESOLUTION
	==========
	
	Edit the Lotus Notes server's Notes.ini file. Change the line that reads
	
	  NAMES=names.nsf
	
	to
	
	  NAMES=names.nsf,exchange.nsf
	
	After you make the change and restart the Notes server, Lotus Notes client users
	have the option of selecting names from the Exchange Server Address Book as well
	as the Lotus Notes Name and Address Book.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
