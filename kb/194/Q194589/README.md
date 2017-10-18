---
layout: page
title: "Q194589: XCON: Event ID 57 from the Exchange Message Transfer Agent"
permalink: kb/194/Q194589/
---

## Q194589: XCON: Event ID 57 from the Exchange Message Transfer Agent

	Article: Q194589
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a high volume of mail is queued up to other Exchange servers in the same
	site, across a site connector, or across an X.400 connector, the Microsoft
	Exchange Message Transfer Agent (MTA) may log the following event in the
	Application Event Log:
	
	  Event:57
	  Source: MSExchangeMTA
	  Category: X.400 Service
	  Description:
	  The limit on the number of associations allowed to and from entity
	  /O=ORGANIZATION/OU=SITENAME/CN=CONFIGURATION/CN=SERVERS/CN=SERVERNAME/CN=MICROSOFT
	  MTA has been reached. The limit is 9. [MTA MAIN BASE 1 43] (14)
	
	Event ID 57 indicates that the number of messages in the queue exceeds the
	maximum number of allowable associations between MTAs.
	
	Mail may still flow sporadically or at a restricted rate, if the link and/or
	remote MTA is still functional. MTAs of Exchange Server computers communicating
	within a Site or across a site connector will use Remote Procedure Calls (RPCs).
	We will refer to those MTAs as "MTAs communicating through RPC".
	
	MORE INFORMATION
	================
	
	The text of Event ID 57 is as follows: The limit on the number of associations
	allowed to and from entity <X.500 Distinguished Name referring to a remote
	server> has been reached. The limit is 9. [MTA XFER-IN 16 34] (14)
	
	Microsoft Exchange Server 4.0 and 5.0 handle associations differently than
	Microsoft Exchange Server 5.5. Exchange Server 4.0 and 5.0 used 1 Control Block
	(CB) per connector and had an unnecessarily complex algorithm to allocate which
	association had use of the CB. Exchange Server 5.5 simplified the relationship
	between associations and CB. There is now one association per CB. A control
	block specifies how mail is processed within an association, or connection.
	
	There can be multiple associations (or connections) between two Exchange Server
	computers across an X.400 connector or between Exchange Server computers
	communicating through RPC. Note that a connector is not the same thing as a
	connection. The following discussion focuses primarily on the way Exchange
	Server 5.5 handles associations between MTAs.
	
	Exchange Server 5.5 allows a maximum of 10 associations between MTAs over an
	X.400 connector or through RPC. This is further broken down to nine available
	associations for low/normal priority mail and one association, which can be
	opened for urgent mail.
	
	A new association is opened up by default for every 50 queued messages to a
	remote server. This setting is the Threshold value. It is found in one of two
	different places, depending on how the servers are communicating to each other.
	
	- If the MTAs are communicating across an X.400 connector, the Threshold value
	  is found in the Exchange Administrator program if you click the X.400
	  Connector's property pages, click the Override tab, click Association
	  Parameters, and then click Threshold (msgs). The default value of 50 would
	  allow 450 Normal and Low priority messages to flow (9 times 50) and 50 High
	  priority messages to flow (1 times 50) before the maximum number of
	  Associations are opened. Increasing this Threshold value to 100 would allow
	  900 Normal and Low priority messages to flow and 100 High priority messages
	  to flow.
	
	- If the MTAs are communicating within a site, look in the Exchange
	  Administrator program, click Configuration, click MTA Site Configuration,
	  click the Messaging Defaults tab, click Association Parameters, and then
	  click Threshold (msgs). If these servers are communicating across a site
	  connector, the Threshold value should match at the MTA Site Configuration
	  level.
	
	Increasing the Threshold value will decrease the number of associations that have
	to be opened to a remote MTA, and thus reduce or eliminate Event ID 57s.
	However, if the bottleneck is the available bandwidth between servers, mail will
	not necessarily move any faster.
	
	Additional query words: association MTA Message Transfer Agent control block
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
