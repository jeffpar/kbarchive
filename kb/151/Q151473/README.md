---
layout: page
title: "Q151473: XFOR: MSMI Crashes Starting a New Thread, Reads a Null Pointer"
permalink: /kb/151/Q151473/
---

## Q151473: XFOR: MSMI Crashes Starting a New Thread, Reads a Null Pointer

	Article: Q151473
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Connector interchange (MSMI) stops processing outbound mail.
	This can be evidenced by the following symptoms:
	
	- A backlog builds in the message transfer agent's (MTA's) MSMI queue.
	
	- In Performance Monitor, observe thread object "% processor time" counter for
	  all MT.EXE threads. One or more threads above number 3 will show no processor
	  utilization (threads 0 through 3 typically show no processor utilization
	  except during startup, shutdown, or thread and data refresh).
	
	- With MSMI logging set to maximum the application event log will cease logging
	  "Sent" events (ID 2448) (although other MSMI events may still be logged).
	
	- The service stops with no event log warning or DrWtsn32.LOG.
	
	- The service may not respond to control functions nor appear stopped. In the
	  severe, Kill.exe fails to free the service and the computer has to be
	  restarted.
	
	CAUSE
	=====
	
	During thread restart, an exception occurs while accessing a [null] pointer in
	the thread environment block (TEB) that is supposed to hold a pointer to the
	thread's thread local storage (TLS) area.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 4.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server version
	5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
