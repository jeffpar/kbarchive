---
layout: page
title: "Q176455: XADM: NDR When Attempting to Send to Large Number of Recipients"
permalink: /kb/176/Q176455/
---

## Q176455: XADM: NDR When Attempting to Send to Large Number of Recipients

{% raw %}

	Article: Q176455
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to send a message to 10 or more recipients or send a message that
	is larger than 4,096 bytes, the message may appear in the Outbox for an
	unusually long time and then you may receive a non- delivery report (NDR) that
	contains the following text:
	
	  Unable to deliver the message due to a recipient problem
	
	CAUSE
	=====
	
	When data is written to the message transfer agent (MTA), a 16-KB buffer is
	used. If the server attempts to transfer more than 16 KB at a time, you may
	experience the symptoms described above.
	
	When a message is addressed to fewer than 10 recipients or is 4,096 bytes or
	smaller, one recipient descriptor is transferred at a time. In this case, the
	server rarely exceeds the 16-KB buffer limit for writing data to the MTA.
	However, when a message is addressed to 10 or more recipients or is larger than
	4,096 bytes, ten recipient descriptors are transferred at a time instead of one.
	When this occurs, the server frequently exceeds the 16- KB buffer limit.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
