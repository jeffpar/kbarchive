---
layout: page
title: "Q196853: XADM: Mac Attachments Have Two Sets of Double Quotes Around Name"
permalink: kb/196/Q196853/
---

## Q196853: XADM: Mac Attachments Have Two Sets of Double Quotes Around Name

	Article: Q196853
	Product(s): Microsoft Exchange
	Version(s): 5.5,5.5 SP1,5.5 SP2
	Operating System(s): 
	Keyword(s): exc55 exc55sp1 exc55sp2 EXC55SP3Fix
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.5 SP1, 5.5 SP2 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When a message that originates from a Macintosh client is processed through the
	Internet Mail Service, if the name of the attachment includes a set of double
	quotes, the Internet Mail Service adds another set to the file name.
	
	For example, if a message from a Macintosh client has an attachment with the name
	"filename", the Internet Mail Service adds another set of double quotes to the
	name changing it to ""filename"".
	
	CAUSE
	=====
	
	The Internet Mail Service incorrectly recognizes the quotes as part of the
	filename.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	  Component: Message Transfer Agent (MTA)
	
	  File Name    Version
	  -----------------------
	  Gapi32.dll   5.5.2504.0
	  Mdbmsg.dll   5.5.2504.0
	  Store.exe    5.5.2504.0
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 exc55sp1 exc55sp2 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange550SP1 kbExchange550SP2
	Version           : :5.5,5.5 SP1,5.5 SP2
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
