---
layout: page
title: "Q181742: XFOR: Message from Notes to Exchange Gets Stuck in Exchange.box"
permalink: /kb/181/Q181742/
---

## Q181742: XFOR: Message from Notes to Exchange Gets Stuck in Exchange.box

	Article: Q181742
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you send a message from Notes to Exchange via the Exchange Notes Connector,
	the message may get stuck in the Exchange.box database. The message that fails
	is usually from the Notes News Service. When the Exchange Notes Connector can
	not convert the message, the connector shuts down and the Connector Admin
	Process Manager shows the process with a gray icon rather than a green one. Once
	this message is stuck, it must be removed before mail can flow.
	
	CAUSE
	=====
	
	The message that originated from the Notes News Service does not have nulls in
	the Comment field attached to the CD_LINKEXPORT2 record. The Exchange Notes
	Connector expects nulls in this field. When the nulls are not there, the
	connector fails to convert the message.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words: Linkage Lotus LSNTSMEX.EXE LSMEXNTS.EXE
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
