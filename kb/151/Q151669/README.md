---
layout: page
title: "Q151669: XFOR: MSMI Stops Processing Mail"
permalink: /kb/151/Q151669/
---

## Q151669: XFOR: MSMI Stops Processing Mail

{% raw %}

	Article: Q151669
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Mail Connector interchange (MSMI) stops processing mail. This can
	be evidenced by the following symptoms:
	
	A backlog builds in the message transfer agent's (MTA's) MSMI queue.
	
	P1 files build up in Exchsrvr\Connect\Msmcon\Maildata\P1.
	
	In Performance Monitor, observe the thread object"% processor time" counter for
	all MT.EXE threads. All threads above number 3 except one (typically number 6 on
	a singleCPU computer) will show no processor utilization (threads 0 through 3
	typically show no processor utilization except during startup, shutdown, or
	thread and data refresh).
	
	The following MSMI event messages are repeatedly logged in pairs:
	
	  2380 - A memory access violation has occurred that prevents further
	  processing of a message. The access violation that occurred is an attempt to
	  read from <same memory address>. Please refer to the immediately
	  following event(s) logged by MS Mail Connector interchange for more
	  information on the message that could not be processed.(Exception address:
	  %2.)
	
	  2450 - MS Mail Connector Interchange has failed processing message from
	  Exchange. The message is left in the delivery queue. Use the MS Exchange
	  Administrator to view the details for this message or remove it from the
	  queue. This message is from <same originator address>. This error
	  message will be logged again the next time MS Connector is restarted if the
	  message is not removed from the queue
	
	CAUSE
	=====
	
	The MSMI's outbound processing thread(s) have raised a handled exception while
	"owning" a thread synchronization object (mutex) that other threads are waiting
	for. While the exception is handled, the mutex is not properly released,
	resulting in "blocked" execution of the other threads.
	
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
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
