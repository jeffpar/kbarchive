---
layout: page
title: "Q234702: XGEN: MTA Queue to Information Store Processing Slowly"
permalink: /kb/234/Q234702/
---

## Q234702: XGEN: MTA Queue to Information Store Processing Slowly

	Article: Q234702
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	If you view the message transfer agent (MTA) queues by means of the Exchange
	Server Administrator program or Performance Monitor, the information store
	(either public or private, or both) may exhibit a backlog in the message queue.
	This behavior is often evident on servers with two to four processors and 800
	megabytes (MB) or more of RAM. Manual tuning of the registry allows full use of
	hardware resources and more efficient clearing of the message backlog under
	high-traffic conditions.
	
	CAUSE
	=====
	
	Because computer hardware has become less expensive, many companies use more RAM
	and processors on Exchange Server computers to increase performance. However,
	Performance Optimizer (Perfwiz.exe) does not automatically tune some registry
	parameters to fully use all of these hardware resources.
	
	You can confirm this behavior in Performance Monitor through the counters
	specified below:
	
	  Object: MSExchangeMTA Connections
	  Counter: Queue Length
	  Instance: Microsoft Private MDB
	  Description: Queue Length is the number of outstanding messages queued for
	  transfer to the entity.
	
	  Object: Private Information Store
	  Counter: Receive Queue Size
	  Description: Receive Queue Size is the number of messages in the private
	  information store's receive queue.
	
	If these two values are more or less equivalent, the information store is not
	effectively processing the inbound transactions from the MTA, and the bottleneck
	is a result of the information store's inability to handle these transactions in
	a timely manner. Also, the MTA may not be handing off mail quickly enough for
	the information store. In addition, MTA and information store CPU use (as
	monitored by Performance Monitor) may be low on the affected server.
	
	WORKAROUND
	==========
	
	To work around this problem, increase resource (thread) settings from the
	defaults:
	
	1. From a command prompt go to the Exchsrvr\Bin directory, and run "perfwiz -v"
	  to start Performance Optimizer in verbose mode. Verbose mode stops all
	  services and offers options not available in normal mode. You do not need to
	  analyze hard disks or move files; this procedure presents the opportunity to
	  change some resource (thread) settings from the defaults. In the Microsoft
	  Exchange Performance Optimizer property page, in the "Users on this server"
	  and "Users in organization" areas, be sure you allocate enough resources to
	  handle your work load. If your number of users falls in the high end of a
	  range, select the next (higher) range. In the Memory Usage area, don't limit
	  Exchange Server memory usage.
	
	  To view the current settings without stopping services, at a command prompt,
	  run "perfwiz -r". You can also use the Perfopt.log file in the Winnt\System32
	  folder to view any changes that Performance Optimizer makes to the system.
	
	2. In Performance Optimizer, click Next until the "# of background threads"
	  property page is displayed. Note this value, but don't change it. Click Next.
	
	3. In the Public and Private Information Store property page, increase each of
	  the four send and delivery thread values to 8.
	
	4. Click Back to move back to the "# of background threads" property page, and
	  increase that value accordingly. For example, if you increased each of the
	  four send and delivery thread values from a default setting of 2 to 8 (by 6
	  threads each) in step 3, then in the "# of background threads" property page
	  increase the background threads value by a total of 24.
	
	  You can make these changes manually to the registry, but these values are not
	  visible by default. Running "perfwiz -v" automatically adds these values for
	  you and eliminates any worry about the spelling or case sensitivity of a
	  value.
	
	5. Click Next until the "# of submit/deliver threads" property page is
	  displayed. The MTA uses these threads to pass mail off to the information
	  store. Increase this value to 8 also; its maximum default setting is 3.
	
	6. Click Next, click Finish, and then restart services. Monitor the MTA queue to
	  the information store to verify whether the changes have any effect on the
	  queue.
	
	Increasing these threads' value to 8 allows for a larger "pipe" between the MTA
	and the information store, and more efficient clearing of the message backlog
	under high-traffic conditions.
	
	For additional information about this problem, click the article numbers below to
	view the articles in the Microsoft Knowledge Base:
	
	  Q230691 XADM: Space Tree Fragmentation in Exchange Database Engine Can
	  Degrade Server Performance
	
	  Q195006 XADM: Resource Failure Error on Computers with More Than 800 MB of RAM
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
