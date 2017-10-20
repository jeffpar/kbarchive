---
layout: page
title: "Q157941: XFOR: Attachment Moved When Sent Over MS Mail Connector"
permalink: /kb/157/Q157941/
---

## Q157941: XFOR: Attachment Moved When Sent Over MS Mail Connector

{% raw %}

	Article: Q157941
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use an English Microsoft Mail client running on Korean Windows 3.1 to
	send a message containing Korean characters to another English Microsoft Mail
	client running on Korean Windows 3.1, the Korean characters can be viewed
	correctly by the recipient. However, when the message contains an attachment and
	it is sent from a Korean Microsoft Exchange client running on Korean Windows NT
	3.51 to an English Microsoft Mail client running on Korean Windows 3.1, the
	attachment's position in the message is modified and some Korean characters will
	be garbled. This occurs when the Microsoft Exchange MS Mail Connector is used to
	connect English Microsoft Mail to Microsoft Exchange Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	To transfer messages containing Korean characters between an English Microsoft
	Mail client running on Korean Windows 3.1 and a Korean Microsoft Exchange client
	through the Microsoft Exchange MS Mail Connector, the Primary Language for
	Clients property of the Microsoft Exchange MS Mail Connector must be set to
	Korean(v3.1a/US).
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q156963 XFOR: Korean Characters Are Corrupted by the MS Mail Connector
	
	
	Additional query words: 4.0a DBCS KOR
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	

{% endraw %}
