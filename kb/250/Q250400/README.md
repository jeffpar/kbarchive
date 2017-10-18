---
layout: page
title: "Q250400: XADM: DXANOTES Writes Mail Server Data to the Personal Document"
permalink: kb/250/Q250400/
---

## Q250400: XADM: DXANOTES Writes Mail Server Data to the Personal Document

	Article: Q250400
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you send mail from Lotus Notes, you are able to write to an incorrect mail
	server value, which results in incorrect document properties in your mail. You
	may experience issues sending mail.
	
	CAUSE
	=====
	
	A line in your Mapmex.tbl file specifies the wrong mail server. Notes directory
	synchronization (DXANOTES) writes the mail server data based on the mail server
	that is specified in the Mapmex.tbl file. The location of the Mapmex.tbl file is
	as follows:
	
	  Exchsrvr\Connect\Exchconn\Dxanotes\Mapmex.tbl
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
