---
layout: page
title: "Q166603: XFOR: Messages Rejected by X400 System"
permalink: kb/166/Q166603/
---

## Q166603: XFOR: Messages Rejected by X400 System

	Article: Q166603
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a message comes into Microsoft Exchange Server over the X.400 Connector from
	a foreign X.400 Message Transfer Agent (MTA), and is sent out over the Microsoft
	Mail Interchange (MSMI) to a Microsoft Mail for PC Networks recipient, and the
	message does not contain a FreeFormName field, when the recipient attempts to
	reply or forward the message, the new message might be rejected by the foreign
	X400 system. This happens because Microsoft Exchange Server will create a psuedo
	address like:
	
	  c=FR;a=ATLAS;p=Societe;o=Siege;s=Marceau;g=Marcel
	
	that can be longer than 64 characters. If it is longer than 64 characters, the
	foreign X400 system will reject it.
	
	CAUSE
	=====
	
	The FreeFormName field is limited to 64 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: XCON XCLN
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
