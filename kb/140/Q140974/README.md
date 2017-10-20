---
layout: page
title: "Q140974: XCON: HP Openmail Messages with FTBP Attachments NDR"
permalink: /kb/140/Q140974/
---

## Q140974: XCON: HP Openmail Messages with FTBP Attachments NDR

{% raw %}

	Article: Q140974
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 13-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain conditions, when a message is sent with an FTBP attachment from an
	HP Openmail user to a Microsoft Exchange user, the message will be returned with
	a Non-Delivery Receipt (NDR) by the Microsoft Exchange Message Transfer Agent
	(MTA). This problem only occurs when you use newer versions of HP Openmail that
	support FTBP.
	
	CAUSE
	=====
	
	The Microsoft Exchange MTA does not support constructed FileTransferData
	encoding.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: Openmail Attachment NDR FTBP
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
