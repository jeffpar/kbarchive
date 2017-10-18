---
layout: page
title: "Q178543: XCLN: Err Msg: Can't open this item. Cannot add the attachment."
permalink: kb/178/Q178543/
---

## Q178543: XCLN: Err Msg: Can't open this item. Cannot add the attachment.

	Article: Q178543
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you are using Exchange Client or Outlook Client, the following error
	message may appear when you open a message coming from the Internet:
	
	  Can't open this item. Cannot add the attachment; no data source was
	  provided.
	
	CAUSE
	=====
	
	This is caused by a Multipurpose Internet Mail Extensions (MIME) message with an
	attachment coded with:
	
	  Content-Type = application/mac-binhex40
	  Content-transfer-encoding: BASE64
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
