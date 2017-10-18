---
layout: page
title: "Q199993: SMS: Using SMS Service Manager to Query/Start/Stop SMS Services"
permalink: kb/199/Q199993/
---

## Q199993: SMS: Using SMS Service Manager to Query/Start/Stop SMS Services

	Article: Q199993
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 04-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	SMS Service Manager is a Systems Management Server 2.0 component that is used to
	monitor, start, and stop Systems Management Server services. To start the SMS
	Service Manager, do the following:
	
	1. Start the Systems Management Server Administrator Console.
	
	2. Go to Site Database/Tools/SMS Service Manager.
	
	3. On the Action menu, click Start SMS Service Manager.
	
	To use SMS Service Manager, you navigate a tree that has two main branches:
	Components and Servers. Under the Components branch, each Systems Management
	Server service and thread is listed with servers running the specified component
	listed below the component's name. The Components branch is useful for querying
	and/or modifying the status of a service or thread on numerous servers. The
	Servers branch allows access to Systems Management Server services and threads
	listed by server. This branch is very useful for querying and/or modifying
	numerous services on a single server.
	
	Using either branch, services are selected by using the tree in the left pane.
	When services are selected, they appear in the table on the right pane. No
	information about a service or thread is initially available until you query the
	service on the applicable server. To query the services, you must select the
	services and/or threads you want and then click Query on the Component menu. The
	services will then be queried, and the status of the selected services and/or
	threads will be displayed under the Status column. The components can also be
	started, stopped, paused, and resumed by selecting them and selecting the
	appropriate action on the Component menu.
	
	MORE INFORMATION
	================
	
	The SMS Executive service performs numerous tasks and has numerous jobs, which
	are each spawned as one or more threads within the SMS Executive service. These
	threads can be stopped and started individually by using the SMS Service
	Manager, by following the procedures above. Care should always be taken when
	using SMS Service Manager to manipulate individual threads of SMS Executive.
	Stopping, starting, pausing, or resuming one thread of SMS Executive may
	sometimes affect other threads or the SMS Executive service itself.
	
	When a service or thread needs the be halted, it can be stopped and started or it
	can be paused and resumed. Although both of these procedures halt processing,
	they are different. When a service or thread is stopped, it halts processing and
	whatever instruction is currently being processed will be dropped. If the
	instruction has not completed, it may not complete. When you restart that
	service or thread, it will begin processing on the next available instruction.
	Pausing a service or thread stops the processing without any instructions being
	dropped. When a paused service is restarted, it continues processing from the
	point it was stopped, and the current instruction is completed.
	
	
	Additional query words: prodsms query smsstat
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
