---
layout: page
title: "Q166534: XCLN: Synchronization of Offline Folders over RAS or Net Hangs"
permalink: /kb/166/Q166534/
---

## Q166534: XCLN: Synchronization of Offline Folders over RAS or Net Hangs

{% raw %}

	Article: Q166534
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you synchronize offline folders over RAS or the network, Microsoft Exchange
	Server 5.0 periodically stops responding. The progress dialog box on the screen
	is still animated, it but does not advance, leaving the network or RAS
	connection open. Moving the mouse causes synchronization to resume.
	
	CAUSE
	=====
	
	The problem is in the behavior of the Win32 API MsgWaitForMultipleObjects as it
	is used by the Windows NT notification engine in its ScMsgWaitForSignal call.
	MsgWaitForMultipleObjects does not notice a window message posted from the
	notification thread to the main thread, enabling it to deliver pending
	notifications. The reason is that the message was PeekMessage'd by code in the
	main thread (may have been OLE, but could be anywhere) and
	MsgWaitForMultipleObjects interprets peeked messages as intentionally left on
	the queue, and therefore does not return as it does with new, unpeeked messages.
	In our case the message is responsible for initiating delivery of notifications,
	but because the thread is waiting for notifications to be delivered, the process
	stops until a genuinely new message (such as a mouse move) is posted to the
	message queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	
	=============================================================================
	

{% endraw %}
