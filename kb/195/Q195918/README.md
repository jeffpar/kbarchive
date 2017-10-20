---
layout: page
title: "Q195918: XADM: Slow Intersite Directory Replication"
permalink: /kb/195/Q195918/
---

## Q195918: XADM: Slow Intersite Directory Replication

{% raw %}

	Article: Q195918
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An organization's intersite directory replication that has previously been
	running without problems may start to fail to keep up with the changes made to
	it's (the organization's) directory.
	
	This can be caused by a Directory Replication bridgehead server being unable to
	cope with the sheer volume of replication messages that it is having to send and
	receive. This is likely to be because the schedule set on the organization's
	Directory Replication Connectors is too demanding for the intersite replication
	topology and messaging infrastructure trying to support it.
	
	The Intersite Directory Replication Schedule
	--------------------------------------------
	
	Each Directory Replication Connector can be scheduled. The default for this
	schedule is once every three hours. Administrators can make this schedule more
	(or less) frequent, up to four times an hour.
	
	The schedule controls when and how often the intersite replication connector
	sends out update requests to the destination directory replication connector.
	
	When making the decision about how often directory replication should take place,
	Administrators must consider the potential load put on the organization's
	Directory Replication bridgehead servers and the messaging infrastructure.
	
	NOTE: When setting the activation schedule, if the detail view is set to '1
	Hour', selecting a one-hour time block, will activate the connector four times,
	if you only want to activate the connector once an hour you must use the 15
	minute detail view.
	
	How Intersite Directory Replication Works
	-----------------------------------------
	
	Below are the minimum set of events seen when a directory replication connector
	is activated (as according to the schedule) and the diagnostic logging category
	'Replication' (on the Directory Service object) is turned to Maximum (on both
	adjacent directory bridgehead servers).
	
	The requesting bridgehead connector for each context will log the following:
	
	  1068 - Ask for updates for naming context (either site or
	         configuration)
	  1100 -> Message submitted
	  1058 - Completed successfully
	
	For each request message, the responding bridgehead server will log the
	following:
	
	  1099 <- Message received from requesting directory
	  1070 - The context to get, from the starting USN
	  1071 - The number of objects retrieved, and entries up to the USN
	  1101 -> Message submitted back to the requesting connector
	
	Finally, the requesting bridgehead server will log the following for each
	received message:
	
	  1099 <- Message received back from the remote Directory
	
	This entire set of events will be seen twice (once for the configuration naming
	context and once for the site naming context) for each site listed as an
	'Inbound site' on the requesting directory replication connector's Sites tab.
	
	NOTE: Every message sent out by the requesting bridgehead server will result in a
	reply from the remote bridgehead server.
	
	Maximum Objects Sent per Request
	--------------------------------
	
	A maximum of 512 objects will be sent back to a requesting bridgehead server in
	any one response message. If the remote directory bridgehead server has more
	than 512 objects to send, it will send an additional message indicating that it
	has more objects. Subsequently, the requesting bridgehead server, when ready,
	will issue a request for the next set of objects. This prevents the requesting
	bridgehead server from becoming overloaded (that is, when doing a 'refresh all
	items in directory' for example).
	
	The Number of Directory Replication Messages a Day in the Organization
	----------------------------------------------------------------------
	
	To work out the minimum number of messages intersite directory replication will
	generate in your organization on a typical day, you can apply the simple
	formula:
	
	  N = number of sites participating in intersite directory replication
	
	  M = (N-1) * 2 = number of replication messages sent out (for both naming
	  contexts)
	
	  F = The number of times each connector is active a day (24 / 3 by default =
	  8)
	
	  2 = factor for every request must get a reply
	
	  N sites * (M * F * 2) = Intersite Replication Messages per day
	
	  For example, using the default schedule:
	
	  10 sites * (18 * 8 * 2) = 2880 messages a day 20 sites * (38 * 8 * 2) = 12160
	  messages a day 30 sites * (58 * 8 * 2) = 27840 messages a day
	
	NOTE: Additional replication messages will be generated for the 'address book
	views' naming context, but these are a relatively small number and their
	quantity is not effected by the directory replication schedule set.
	
	CAUSE
	=====
	
	Directory replication will slow up significantly if the Directory Replication
	Connector becomes active (as according to the schedule) and the replies from the
	remote bridgehead server have not been processed from the previous cycle.
	
	In this situation, the connector must presume that the replies that have not been
	processed will not be forthcoming. Thus, the connector will request the same
	updates (plus any other which have happened) from the remote bridgehead server.
	
	It is possible that in a large organization where an aggressive schedule for
	intersite replication has been set, these messages may be getting held up in the
	directory service mailbox on the directory bridgehead server.
	
	NOTE: It might be reasonable for this to happen in organizations that have
	implemented the widely adopted hub and spoke directory replication topology,
	where central hub server(s) are responsible for passing directory updates
	between the spokes.
	
	The process of taking the messages from the directory service's inbox and giving
	them to the Directory Replication Agent is performed on a single thread in the
	Directory service (DSAMAIN). The messages in the inbox must also be sorted
	(TABLE_SORT_ASCEND) on the client submit time (PR_CLIENT_SUBMIT_TIME), this
	becomes a computationally expensive operation as messages build up.
	
	To see the number of messages waiting to be processed by the Directory
	Replication Agent, view the "Total no. Items" column for the Directory Service
	on the mailbox resources page of the Private Information Store object in the
	Exchange Server Administrator program.
	
	If you believe messages are building up in this mailbox you might want to observe
	what the Directory Service is doing. To do this using Performance Monitor, add
	the following counter:
	
	  Object: Thread
	  Counter: % Processor Time
	  Instance: All the instances for DSAMAIN (use shift key to select)
	
	If the directory service is failing to keep up with the demand, you will notice a
	single thread consuming the majority of Processor Time (between 50 percent and
	90 percent), whilst the remaining threads are using less than 5 percent. The
	busy thread is responsible for passing the messages from the Directory Service
	inbox to the Directory Replication Agent while keeping the inbox sorted on
	'client submit time'.
	
	WORKAROUND
	==========
	
	To work around this problem, perform one of the following:
	
	- Reduce the replication schedule for ALL replication connectors on the
	  directory bridgehead servers adjacent to (connected to) the backlogged
	  bridgehead server. (Microsoft strongly recommends that the schedule is NEVER
	  more regular than the default: once every 3 hours).
	
	  -AND-
	
	- Reduce the replication schedule on ALL replication connectors on the
	  backlogged server. (Microsoft strongly recommends that the schedule is NEVER
	  more regular than the default: once every 3 hours).
	
	  -AND/OR-
	
	- Move some of the directory replication connectors off the backlogged server
	  to another Exchange Server computer in the site.
	
	  NOTE: If the third workaround is to be adopted, then it must be understood
	  that a full refresh of all replicated contexts is automatically triggered
	  (both ways). This is likely to compound the problem if the first and second
	  workarounds are not applied first.
	
	  NOTE: The third workaround is preferable to removing a directory replication
	  connector. If the directory replication connector is removed, the adjacent
	  connector must also be removed. Before a replication connector can be
	  re-added, a Knowledge Consistency Check must be successfully completed on
	  both directories. This will delete the objects that had been replicated
	  between the two sites.
	
	  -AND/OR-
	
	- If the backlog in the Directory Service mailbox has become far too large
	  (10,000 or more messages) it maybe necessary to remove these messages to give
	  the DRA a chance to catch up. This can be done using one of the following two
	  options:
	
	  a. If the private information store on this computer has no other mailboxes
	     on it other than the Directory Service and the System Attendant mailbox,
	     you can rename the Priv.edb file:
	
	     1. Stop the MSExchangeIS.
	
	     2. Rename [Drive]:\Exchsrvr\Mdbdata\Priv.edb to
	        [Drive]:\Exchsrvr\Mdbdata\Priv.old
	
	     3. Start the MSExchangeIS. A new Priv.edb will be created when the IS
	        starts, the mailbox for the directory service will be created when the
	        directory service starts.
	
	  b. If you know the Exchange service account user name and password, you can
	     use an Exchange/Outlook client to log on to the Directory service mailbox
	     and remove the messages from the Inbox.
	
	MORE INFORMATION
	================
	
	It is likely that this problem will be initially triggered by extra- ordinary
	behavior; either in the number of Directory Replication messages generated over
	a period of time (such as adding sites to the Exchange Server organization), or
	a failure in the messaging infrastructure supporting the intersite replication
	(such as Message Transfer Agent downtime).
	
	After a Directory service mailbox has a backlog of messages (which it has to keep
	sorted on client submit time), it will become increasingly difficult for it to
	pass messages to the Directory Replication Agent. If none of the above
	resolutions are adopted quickly, the remote bridgehead server connectors will
	continue to send their requests into the Directory service inbox, compounding
	the problem.
	
	Real world experience has shown that after a Directory Service mailbox grows to
	exceed more that 1,500+ replication messages, it will never be able to recover
	until at least one of the above resolutions are applied.
	
	For more detailed information on designing intersite replication topologies,
	please see the white paper "Advanced Backbone Design and Optimization" first
	published on the August 1998 TechNet CD.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
