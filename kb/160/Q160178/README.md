---
layout: page
title: "Q160178: XADM: Exchange Information Store Performance Monitor Counters"
permalink: kb/160/Q160178/
---

## Q160178: XADM: Exchange Information Store Performance Monitor Counters

	Article: Q160178
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbtool kbusage
	Last Modified: 11-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the Performance Monitor counters associated with the
	Microsoft Exchange information store.
	
	MORE INFORMATION
	================
	
	For information about the counters that appear for each object associated with
	the information store, see the appropriate section below. For additional
	information, click the appropriate counter in Performance Monitor, and then
	click Explain.
	
	MSExchangeIS Private and MSExchangeIS Public
	--------------------------------------------
	
	Average Time for Delivery:
	
	The average time between the submission of a message to the information store and
	submission to the message transfer agent (MTA) for the last 10 messages.
	
	Average Time for Local Delivery:
	
	The average time between the submission of a message to the information store and
	delivery to all local recipients (recipients on the same server as the sender)
	for the last 10 messages.
	
	Categorization Count:
	
	The number of categorizations that exist in the information store.
	Categorizations are created when you create a filtered view or perform a search.
	When the information store must maintain a large number of categorizations,
	performance can be affected.
	
	Folder Count:
	
	The number of folders that exist in the information store.
	
	Folder Opens/Sec:
	
	The rate that requests to open folders are submitted to the information store.
	
	Logon Active Count:
	
	The number of clients that performed an action related to the information store
	in the last 10 minutes.
	
	Logon Count:
	
	The number of clients (including system processes) currently logged on to the
	information store.
	
	Logon Peak:
	
	The maximum number of people that were logged on to the information store at one
	time since it was started.
	
	Message Opens/Sec:
	
	The rate that requests to open messages are submitted to the information store.
	
	Message Recipients Delivered:
	
	The total number of recipients that messages have been delivered to since the
	information store was started.
	
	Message Recipients Delivered/Min:
	
	The rate that recipients receive messages.
	
	Messages Delivered:
	
	The total number of messages delivered to the information store since it was
	started.
	
	Messages Delivered/Min:
	
	The rate that messages are delivered to the information store.
	
	Messages Sent/Min:
	
	The rate that messages are sent to other storage providers via the message
	transfer agent (MTA).
	
	Messages Submitted:
	
	MSExchangeIS Private: The total number of messages submitted to the information
	store (including messages submitted from gateways) since it was started.
	
	MSExchangeIS Public: The total number of messages submitted to the information
	store since it was started. The only processes that submit messages to the
	public information store are public folder rules and public folder replication
	messages.
	
	Messages Submitted/Min:
	
	The rate that messages are submitted to the information store.
	
	Receive Queue Size:
	
	The number of messages in the receive queue.
	
	Send Queue Size:
	
	The number of messages in the send queue.
	
	Single Instance Ratio:
	
	The ratio between the total number of message references and the total number of
	messages stored in the information store. This ratio indicates the amount of
	storage saved by single instance storage.
	
	MSExchangeIS
	------------
	
	Connection Count:
	
	The number of different client processes connected to the information store. This
	number does not indicate how many individual people are logged on. To determine
	how many people are logged on, select the User Count counter.
	
	RPC Requests:
	
	The number of client requests that are currently being processed by the
	information store.
	
	RPC Requests Peak:
	
	The maximum number of client requests that were processed simultaneously by the
	information store since it was started.
	
	Read Bytes RPC Clients/Sec:
	
	The rate that bytes are read from RPC clients.
	
	RPC Operations/Sec:
	
	The rate of RPC operations.
	
	RPC Packets/Sec:
	
	The rate of RPC packets.
	
	User Count:
	
	The number of people connected to the information store.
	
	Write Bytes RPC Clients/Sec
	
	The rate that bytes are written to RPC clients.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	
	=============================================================================
	
