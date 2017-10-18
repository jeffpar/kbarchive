---
layout: page
title: "Q157043: XADM: Message Rerouted Between Servers and Disappears"
permalink: kb/157/Q157043/
---

## Q157043: XADM: Message Rerouted Between Servers and Disappears

	Article: Q157043
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 13-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Mail that is sent over site connectors between two sites reroutes numerous
	times, but then disappears without a delivery or a nondelivery report (NDR).
	
	The following configuration produced this problem:
	
	  Site1 (site1.test.com) <-----SC-----> Site2 (site2.test.com)
	
	  Site1's Site connector address space includes SMTP* and X400. Site2's Site
	  connector address space only includes X400 (and no SMTP address space is
	  defined).
	
	A message from site1, addressed to "<username>@site2.test.com" would be
	expected to reroute 512 times, after which an NDR would be returned to the
	originator.
	
	CAUSE
	=====
	
	Decode failure occurs for a message after it has been rerouted multiple times.
	An incorrect value was returned when read while processing the message.
	
	
	WORKAROUND
	==========
	
	Properly configuring the Internet Mail Connector (IMC), when installed, to have
	an address space for SMTP mail would avoid the rerouting and result in either
	delivery or NDR, as appropriate. Alternatively, configuring a site connector
	with an SMTP address space would achieve the same result.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange version 4.0.
	This problem was corrected in the latest Microsoft Exchange 4.0 U.S. Service
	Pack. For information on obtaining the service pack, query on the following word
	in the Microsoft Knowledge Base:
	
	  " SERVPACK" (without the quotation marks)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
