---
layout: page
title: "Q267245: XIMS: Internet Mail Service Returns NDR or Silently Drops E-Mail"
permalink: /kb/267/Q267245/
---

## Q267245: XIMS: Internet Mail Service Returns NDR or Silently Drops E-Mail

	Article: Q267245
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
	
	When you send an e-mail message, if the Domain Name System (DNS) records for a
	target domain are unreachable or a remote server denies the Internet Protocol
	(IP) address of the Exchange Server computer, the Internet Mail Service may
	either silently drop the e-mail message or incorrectly return a non-delivery
	report (NDR) message without trying to send the message again. This occurs even
	though the Internet Mail Service should try to send the e-mail message again,
	because at least one IP address may be temporarily unreachable.
	
	CAUSE
	=====
	
	This issue can occur if the Exchange Server computer incorrectly sets retry for
	an outbound message when there are several mail exchanger (MX) records for a
	target domain in DNS.
	
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
	
	
	Additional query words: IMS
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
