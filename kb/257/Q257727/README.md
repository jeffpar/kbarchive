---
layout: page
title: "Q257727: XCON: Slow Mail Flow Across X.400 with 289 and 1294 Warnings"
permalink: /kb/257/Q257727/
---

## Q257727: XCON: Slow Mail Flow Across X.400 with 289 and 1294 Warnings

{% raw %}

	Article: Q257727
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 30-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The two following error messages may be displayed:
	
	  Event ID - 289
	  Source - MSExchangeMTA
	  Description - A connection to 1% could not be opened.
	
	  Event ID -1294
	  Source - MSExchangeMTA
	  Description - An association with entity 1% ended abnormally.
	
	Messages also intermittently back up on a message transfer agent (MTA) queue for
	an X.400 Connector to a remote site. When you stop and restart the MTA, mail
	flow resumes.
	
	CAUSE
	=====
	
	This issue can occur as a result of poor network quality.
	
	WORKAROUND
	==========
	
	To work around this issue:
	
	1. Open the X.400 Connector properties, and click the Override tab.
	
	2. Under the Request to Send (RTS) values, set Checkpoint Size to 10 (30 is the
	  default), and Window Size to 3 (default value is 5). In the Association
	  Parameters box, set Disconnect to 360 (default value is 120).
	
	3. Stop and restart the MTA service.
	
	Mail flow should resume and continue.
	
	MORE INFORMATION
	================
	
	Checkpoint size. Sets the amount of data to be transferred before a checkpoint
	is inserted. If an error occurs and the message must be retransferred, the
	process restarts from the most recent checkpoint. If you specify zero, no
	checkpoint is set. If you use a checkpoint, you slightly reduce the transmission
	speed. Decrease the checkpoint size when the connection is less reliable.
	
	Window size. The number of checkpoints that can go unacknowledged before data
	transfer is suspended. The greater the window size, the greater the transfer
	rate. The window size determines the amount of resources set aside for the
	receiving station. Specify window size only if the checkpoint size is greater
	than zero.
	
	Disconnect. The amount of time to wait before a connection is terminated because
	of a previously terminated association.
	
	Additional query words: XMRP
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
