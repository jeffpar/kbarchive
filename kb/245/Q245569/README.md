---
layout: page
title: "Q245569: XFOR: Connector for Notes: Error Opening Mailbox Domain/Server"
permalink: /kb/245/Q245569/
---

## Q245569: XFOR: Connector for Notes: Error Opening Mailbox Domain/Server

	Article: Q245569
	Product(s): Microsoft Exchange
	Version(s): 3.2,5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 03-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Exchange 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start the Microsoft Exchange Connector for Lotus Notes, the Convert and
	Transfer processes may be displayed as stopped in the Exchange Connectivity
	Administrator program.
	
	CAUSE
	=====
	
	This is because there is an absent or corrupted Exchange.bad mailbox on the
	Lotus Notes server. The Exchange.bad mailbox is created throughout installation
	of the Exchange Connector for Lotus Notes. However, in some cases the file is
	not created and an attempt to create the Exchange.bad mailbox may not work.
	
	WORKAROUND
	==========
	
	At the Lotus Notes administrator client, add a mail router mailbox for
	Exchange.bad to the Notes desktop:
	
	1. On the File menu, click Database, and then click New.
	
	2. In the Template list, click Mail Router Mailbox.
	
	3. In the Title box, type "Exchange Bad Mail" (without the quotation marks) to
	  name the file.
	
	4. In the File Name box, type "exchange.bad" (without the quotation marks).
	
	5. Click OK to save the changes.
	
	6. In the C:\Notes\Data folder, verify that the Exchange.bad file exists.
	
	7. Restart the Exchange Connector for Lotus Notes service.
	
	Additional query words: exc5, domino
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbLinkAgeSearch kbLinkAge320 kbExchange2000Serv
	Version           : :3.2,5.5
	Issue type        : kbprb
	
	=============================================================================
	
