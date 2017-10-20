---
layout: page
title: "Q170478: XCON: Err Msg: The Recipient could not be Processed"
permalink: /kb/170/Q170478/
---

## Q170478: XCON: Err Msg: The Recipient could not be Processed

{% raw %}

	Article: Q170478
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If a Microsoft Exchange Server is removed from a Microsoft Exchange Site and
	Organization and then re-installed using a different Organization and Site name,
	messages sent to that Server may appear to loop or stick in the Microsoft
	Exchange Server Message Transfer Agent (MTA) for a long period of time.
	Eventually, they are returned to their originators with a Non-Delivery Report
	(NDR) that includes the following text:
	
	  The recipient could not be processed due to congestion in the message
	  transfer service.
	
	RESOLUTION
	==========
	
	There are two scenarios that can cause this type of behavior:
	
	1. Once a Microsoft Exchange Server is removed from the Site and Organization
	  that it was replicating with, the other Servers in the Site will not
	  instantly know that the Server was removed. Users will be able to send
	  messages to recipients on the old Server and the messages will be routed to
	  the proper queue. They will wait there until their internal 512 hop count is
	  exceeded and then NDR with the above error message. To prevent this, once a
	  Server is removed from the Organization or Site, force a replication session
	  among all of the remaining Servers so that users from the old Server will no
	  longer appear in the Global Address List (GAL).
	
	2. Another scenario is when a Server is removed from a Site, the sitename is
	  changed, and then the Server is re-added to the Organization. Messages that
	  are pending to go to the old Site will see that the Site is back, based on
	  the MTA name. The MTA has no method of detecting that the messages are
	  invalid since the old MTA name still exists as a valid route. Again, the
	  messages will loop until their 512 hop limit is exceeded and they NDR. This
	  problem is also easily avoidable. Once the Server is removed from the Site,
	  delete any messages pending for users on the old Server. This can be done by
	  going to each Server in the Site and looking at its pending queue to the old
	  Server. When the messages are deleted from the queue, they will NDR back to
	  the originators. This behavior is by product design.
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0 5.5
	Issue type        : kbprb kbinfo
	
	=============================================================================
	

{% endraw %}
