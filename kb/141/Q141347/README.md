---
layout: page
title: "Q141347: Err Msg: No Transport Provider Was Available for Delivery..."
permalink: /kb/141/Q141347/
---

## Q141347: Err Msg: No Transport Provider Was Available for Delivery...

	Article: Q141347
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send an e-mail message using Microsoft Exchange, it may be returned
	immediately as undeliverable. Opening the message generates the following error
	message:
	
	  No transport provider was available for delivery to this recipient.
	
	CAUSE
	=====
	
	This behavior can occur for either of the following reasons:
	
	- You specified a service that is not installed in the message's address. For
	  example, this behavior can occur if you specify an address such as
	  "Fax:John@555-1212" when the Microsoft Fax service is not installed.
	
	- You replied to an address that has not been added to your local copy of the
	  address book.
	
	RESOLUTION
	==========
	
	To send the message, use the appropriate method:
	
	- If you specified a service that is not installed, install the service and
	  then send the message again.
	
	- If you are using a local copy of the address book, either use the address
	  book on the server, or update your copy of the address book.
	
	  To use the address book on the server, follow these steps:
	
	  1. In Control Panel, double-click Mail And Fax.
	
	  2. Click Microsoft Mail, and then click Properties.
	
	  3. On the LAN Configuration Tab, click the Use Local Copy check box to clear
	     it, and then click OK.
	
	  To update your local copy of the address book, follow these steps:
	
	  1. Start Microsoft Exchange.
	
	  2. On the Tools menu, click Microsoft Mail Tools.
	
	  3. Click Download Address List.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
