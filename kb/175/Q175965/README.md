---
layout: page
title: "Q175965: XFOR: MSMI Crashes Logging NDR Event, Generates Event ID 2380"
permalink: /kb/175/Q175965/
---

## Q175965: XFOR: MSMI Crashes Logging NDR Event, Generates Event ID 2380

	Article: Q175965
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Microsoft Mail interchange (MSMI) stops and may
	log the following events in the Windows NT Event Viewer Application log:
	
	  MSExchangeMSMI Event ID 2380:
	  Source: MSMI
	  Category: SessionError
	  Description: A memory access violation occurs that prevents further
	  processing of a messsage
	
	  MSExchangeMSMI Event ID 10003:
	  Source: MSMI
	  Category: SessionError
	  Description: Fatal Assert: File sfsems.cpp line 837.  Mailer thread
	  failed.
	
	CAUSE
	=====
	
	The MSMI is attempting to log an event for an NDR of a message with invalid
	sender and recipients.
	
	WORKAROUND
	==========
	
	Resetting the INQUEUE3 Key and Mbg file on the shadow post office will allow the
	MSMI to restart, but will result in the loss of any messages in the queue.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	versions 4.0 and 5.0.
	
	For Microsoft Exchange Server, version 4.0, we are currently researching this
	problem and will post more information here in the Microsoft Knowledge Base as
	it becomes available.
	
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	
	
	Additional query words: backup restore
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
