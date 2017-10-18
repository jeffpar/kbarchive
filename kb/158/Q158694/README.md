---
layout: page
title: "Q158694: XFOR: Dir-Sync: Map Template Info Between MSMail &amp; Exchange"
permalink: kb/158/Q158694/
---

## Q158694: XFOR: Dir-Sync: Map Template Info Between MSMail &amp; Exchange

	Article: Q158694
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During directory synchronization, Microsoft Mail postoffices can exchange
	template information with each other and with Microsoft Exchange. In order to
	accomplish this, each Microsoft Mail template attribute must be mapped to a
	Microsoft Exchange property using the Microsoft Exchange Server Administrator
	program. Additionally, Microsoft Exchange can also send template information to
	Microsoft Mail postoffices during directory synchronization. This information
	must also be mapped in the same manner.
	
	MORE INFORMATION
	================
	
	1. Start the Microsoft Exchange Server Administrator program and open the
	  Configuration Container - Servers - Directory Synchronization.
	
	2. For Microsoft Exchange to Microsoft Mail template mapping, click the Outgoing
	  Templates tab, or, for Microsoft Mail to Microsoft Exchange template mapping,
	  click the Incoming Templates tab.
	
	3. Click New. You will be asked for the Microsoft Mail attribute as it appears
	  in the *.tpl file (without punctuation: that is, "Address", not "~Address")
	  and the Microsoft Exchange attribute to map to\from.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
