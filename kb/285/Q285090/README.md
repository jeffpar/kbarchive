---
layout: page
title: "Q285090: XFOR: Retiring an Internet Mail Service"
permalink: kb/285/Q285090/
---

## Q285090: XFOR: Retiring an Internet Mail Service

	Article: Q285090
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 10-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to retire an Internet Mail Service.
	
	MORE INFORMATION
	================
	
	It is a common misunderstanding that if you stop or disable an unused Internet
	Mail Service, the service is taken out of commission and messages are not lost.
	It is also a misconception that if you set the transfer mode of an Internet Mail
	Service to None or Inbound Only, messages from the Exchange Server organization
	are not routed to outbound destinations. However, this is not the case. In both
	cases, messages can still be routed to the disabled Internet Mail Service and
	continually be queued in the XAPI mailbox on the server that houses the retired
	Internet Mail Service. When messages arrive in the Internet Mail Service mailbox
	(MTS-OUT queue), the message transfer agent (MTA) is not able to reroute them to
	other destinations, and non-delivery reports (NDRs) are not generated.
	Therefore, if the Internet Mail Service that you disabled is never started
	again, the messages are lost.
	
	To prevent messages from being sent to an Internet Mail Service that has been
	taken out of commission, use the following method to retire the Internet Mail
	Service:
	
	1. If an MX record points to an Internet Mail Service that has been taken out of
	  commission, modify the MX record so that it refers to another Internet Mail
	  Service in your organization that receives inbound Internet mail.
	
	2. On the Internet Mail Service, set the transfer mode to Outbound Only, and
	  then restart the Internet Mail Service so that all outbound mail messages are
	  sent. The Internet Mail Service then no longer accepts inbound mailflow; this
	  mail must be sent to another inbound Internet Mail Service.
	
	3. Remove the address space from the Address Space tab in the Internet Mail
	  Service properties. Messages are then no longer routed to this connector, and
	  the MTS-OUT queue does not grow.
	
	Monitor the retired Internet Mail Service for a few days to ensure that the
	previous Internet Mail Service settings have been transferred, and that no
	issues develop if this Internet Mail Service is taken out of commission. If no
	issues have occurred in a few days, it is safe to remove the Internet Mail
	Service from the computer.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
