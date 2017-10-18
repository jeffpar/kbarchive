---
layout: page
title: "Q133400: XCON: Callout Schedule Not Affected by Message Priority"
permalink: kb/133/Q133400/
---

## Q133400: XCON: Callout Schedule Not Affected by Message Priority

	Article: Q133400
	Product(s): Microsoft Exchange
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 11-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use the Microsoft Exchange Server message transfer agent (MTA), all
	high-priority messages are moved to the top of the MTA work queue. However, the
	MTA will transfer the messages depending on the schedule of the X.400 connector
	or site connector used. In other words, all messages (high or low priority) wait
	for the X.400 connector or site connector to establish the connection based on
	the connector's schedule, but all high- priority messages will be at the top of
	the work queue.
	
	MORE INFORMATION
	================
	
	Each X.400 connector or site connector in Exchange Server has its own schedule,
	which defines the specific times and blocks of time when the Exchange Server MTA
	can initiate connections to the other Exchange Server MTA or foreign mail
	system. This schedule can be set from the X.400 Connector's or Site Connector's
	Schedule property page from the Microsoft Exchange Administrator program.
	
	Whenever a message is handed over to the Exchange Server MTA, the MTA decides,
	based on the routing information, which X.400 connector or site connector to use
	to send the message. Once a connector is identified by the Exchange Server MTA,
	the MTA moves the message into that connector's queue. If the message is high
	priority, it is placed at the top of the queue for that connector.
	
	The Exchange Server MTA cannot initiate a connection on the connector until the
	connector's schedule permits it to do so. This means that all messages (with
	either high or low priority) will sit in the queue until the X.400 connector or
	site connector is scheduled to connect and transfer messages.
	
	Example
	-------
	
	A site called DALLAS has the following connectors to three other sites:
	
	- X.400 connector to New York on X.25 transport stack is scheduled to connect
	  only between 11:00 P.M. and 5:00 A.M.
	
	- Site connector to Seattle is scheduled to connect always.
	
	- X.400 connector to Houston on Remote Access Services (RAS) transport stack is
	  scheduled to connect only between 8:00 P.M. to 8:00 A.M.
	
	If a user at site Dallas sends a high-priority message to users in New York,
	Seattle, and Houston at 10:00 A.M., the message is transferred at the following
	times:
	
	- The message is put at the top of the work queue for the X.400 connector to
	  New York because it is a high-priority message. The X.400 connector to New
	  York will connect at 11:00 P.M. and will then move the message to New York.
	
	- Because the site connector to Seattle is scheduled to connect always, the
	  message is moved as soon as the Exchange Server MTA hands the message to this
	  connector.
	
	- The message is put at the top of the work queue for the X.400 connector to
	  Houston because it is a high-priority message. The X.400 connector to Houston
	  will initiate a call at 8:00 P.M. and then move the message to Houston.
	
	Additional query words: TCP/IP TP4 DIAL faq
	
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0 5.0
	
	=============================================================================
	
