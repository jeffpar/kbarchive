---
layout: page
title: "Q192887: XFOR: MS Mail Connector Doesn't Support Turkish Characters"
permalink: /kb/192/Q192887/
---

## Q192887: XFOR: MS Mail Connector Doesn't Support Turkish Characters

	Article: Q192887
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55sp2fix
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	When sending messages containing Turkish characters between Exchange and
	Microsoft Mail using the Microsoft Mail Connector, translation errors can occur.
	Sending from Exchange to Microsoft Mail, Turkish characters are incorrectly
	mapped. Sending from Microsoft Mail to Exchange, Turkish characters are replaced
	by "?".
	
	This affects both the header and the body of a message.
	
	CAUSE
	=====
	
	There is no "Turkish" option on the Interchange tab of the Microsoft Mail
	Connector properties. Because of this, certain characters are converted to their
	nearest English equivalents or are replaced by "?".
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For more information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Microsoft Mail Connector
	
	  File Name      Version
	  -------------------------
	  Mt.exe         5.5.2324.0
	  Conadmin.dll   5.5.2324.0
	  Mtmsg.dll      5.5.2324.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 2.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp2fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
