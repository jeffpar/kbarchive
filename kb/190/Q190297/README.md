---
layout: page
title: "Q190297: XFOR: Connector for cc:Mail Doesn't Support Long File Names"
permalink: kb/190/Q190297/
---

## Q190297: XFOR: Connector for cc:Mail Doesn't Support Long File Names

	Article: Q190297
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an Exchange user sends a message with an attachment that has a long file
	name (Longfilename.txt, for example) to a cc:Mail recipient using the 32-bit
	cc:Mail client, the attachment name is shortened to 8.3 format (Longfi~1.txt).
	
	However, when sending an attachment with a long file name from the 32-bit cc:Mail
	client to Exchange, the attachment's long file name is retained.
	
	CAUSE
	=====
	
	The Microsoft Exchange Connector for Lotus cc:Mail (CCMC) converts long file
	name attachments to 8.3 format to support older 16-bit clients.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange versions 5.0
	and 5.5.
	
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
