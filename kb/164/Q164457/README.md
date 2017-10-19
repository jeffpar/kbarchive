---
layout: page
title: "Q164457: XFOR: IMC Returns NDR When Sending to &quot;Specify by E-mail Domain&quot;"
permalink: /kb/164/Q164457/
---

## Q164457: XFOR: IMC Returns NDR When Sending to &quot;Specify by E-mail Domain&quot;

	Article: Q164457
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Messages sent to an Internet domain that contains two or more ending characters
	that match the local Microsoft Exchange Server domain may be returned with the
	following nondelivery report (NDR):
	
	  Your message did not reach some or all the intended recipients.
	     Subject: <subject>
	     Sent: (Date/Time>
	  The following recipient(s) could not be reached:
	     '<Recipient>' on date / time
	        The recipient name is not recognized
	        MSEXCH:IMC:<ORG>:<Site>:<Server name> 3902 Host Unknown
	
	CAUSE
	=====
	
	This NDR occurs if the Internet domain's last two or more characters matches the
	local Microsoft Exchange Server domain. Also, the local Microsoft Exchange
	Server domain is added to the Internet Mail Connector's "Specify by E-mail
	Domain," with delivery set to use DNS.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft Exchange Server
	version 4.0. This problem was corrected in the latest Microsoft Exchange 4.0
	U.S. Service Pack. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
