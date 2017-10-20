---
layout: page
title: "Q196184: XADM: Regenerate Offline Address Books after the Move"
permalink: /kb/196/Q196184/
---

## Q196184: XADM: Regenerate Offline Address Books after the Move

{% raw %}

	Article: Q196184
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running the Microsoft Exchange Move Server Wizard, if you are unable view
	the organization's Offline Address Book or the Address book view icon is missing
	in the Microsoft Exchange administrator, you should regenerate Offline Address
	Books after the move.
	
	Wait until directory replication is complete in the destination site before
	regenerating Offline Address Books.
	
	MORE INFORMATION
	================
	
	You can regenerate offline Address Books in the DS Site Configuration Properties
	page by selecting the Offline Address Book tab. Select a server name under
	Offline Address Book server, and choose Generate All. After you regenerate
	Offline Address Books, your users can download them.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
