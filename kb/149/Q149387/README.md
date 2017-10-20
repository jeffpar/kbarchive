---
layout: page
title: "Q149387: XFOR: MSMI Terminating with Memory Access Violation, Event ID 23"
permalink: /kb/149/Q149387/
---

## Q149387: XFOR: MSMI Terminating with Memory Access Violation, Event ID 23

{% raw %}

	Article: Q149387
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The MS Mail Connector Interchange (MSMI) may terminate unexpectedly with the
	following events reported to the application log:
	
	  Event ID: 2380
	  Source: MSExchangeMSMI
	  Description:
	  A memory access violation has occurred that prevents further processing of a
	  message. The access violation that occurred is an attempt to read from
	  0x480df78. Please refer to the immediately following event(s) logged by MS
	  Mail Connector Interchange for more information on the message that could not
	  be processed. (Exception address: 0x4496c2.)
	
	NOTE: The exception addresses above are examples; they will not match exactly
	every time.
	
	CAUSE
	=====
	
	The MSMI is freeing a block of heap memory before the actual process is done
	with it. When the process tries to access this freed area of memory, an access
	violation occurs.
	
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
	
	
	Additional query words: heap corruption crash
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
