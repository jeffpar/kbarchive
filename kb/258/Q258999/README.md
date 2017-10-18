---
layout: page
title: "Q258999: XIMS: Internet Mail w. Original Address of Mail From:&lt;&gt; Changed"
permalink: kb/258/Q258999/
---

## Q258999: XIMS: Internet Mail w. Original Address of Mail From:&lt;&gt; Changed

	Article: Q258999
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If the following conditions exist:
	
	- The Internet Mail Service is configured to forward all messages to a
	  particular Simple Mail Transfer Protocol (SMTP) host
	
	- The routing is configured with either the "Do not Reroute incoming STMP Mail"
	  or "Re-route incoming SMTP Mail" option set and the SMTP domain accepted as
	  incoming
	
	- A custom recipient exists in the global address list for a user in that
	  domain
	
	when Internet mail arrives for that user with a null From address, the From
	address is changed from "Mail From:<>" to the following:
	
	  Mail From:<unknown>
	
	For example, if the following conditions exist
	
	- The SMTP host is smtp.microsoft.com with a user called user@microsoft.com
	
	- A Custom Recipient (Internet mail) is created on the Exchange Server computer
	  for user@microsoft.com
	
	- In the Internet ConnIMC properties, on the Connection tab, "Forward all
	  messages to host" is selected with the value "smtp.microsoft.com," and on the
	  Routing tab "Do not Reroute incoming SMTP Mail" is selected
	
	when Internet mail arrives with a null From address as "Mail From:<>" to
	user@microsoft.com at the Internet Mail Service connector, the Internet Mail
	Service accepts the mail and attempts to forward the mail to smtp.microsoft.com,
	but the From address is changed from "Mail From:<>" to the following:
	
	  Mail From:<unknown>
	
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, click the following article number to view the
	article in the Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft Exchange Server
	Version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words: gal ims
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
