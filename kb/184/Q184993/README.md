---
layout: page
title: "Q184993: XFOR: ReadReceipts and NDRs Appear with Message Class Icon"
permalink: /kb/184/Q184993/
---

## Q184993: XFOR: ReadReceipts and NDRs Appear with Message Class Icon

	Article: Q184993
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): exc5
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Read receipts and non-delivery report (NDR) messages from cc:Mail to Microsoft
	Exchange Server do not display the proper message icon.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0.
	
	MORE INFORMATION
	================
	
	All messages from Exchange Server to the Exchange Connector for cc:Mail are
	submitted as normal messages. There are no other message classes in this
	connector. All messages from the connector for cc:Mail to Exchange Server are
	submitted as IPM.Notes. A subset of failed messages heading from Exchange Server
	to the connector for cc:Mail will have MAPI NDRs generated, but not all. After a
	message is handed off to IMPORT, only a text NDR can be returned.
	
	Additional query words: ccmc NDR icon
	
	======================================================================
	Keywords          : exc5 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
