---
layout: page
title: "Q166621: XADM: Gateway Out Threads Not Set Correctly by Perfwiz.exe"
permalink: /kb/166/Q166621/
---

## Q166621: XADM: Gateway Out Threads Not Set Correctly by Perfwiz.exe

{% raw %}

	Article: Q166621
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Administrators of Microsoft Exchange Server version 5 may find that after they
	install the Internet Mail Service (IMS) and run the Performance Optimizer
	provided with Microsoft Exchange, the number of outbound gateway threads will
	still be set to the default value of 2.
	
	CAUSE
	=====
	
	The following specific options must be selected and specific conditions met to
	see the symptom:
	
	- The NT server must have more than 128 megabytes memory.
	
	- The administrator selected 'POP3 Only' in the optimizer.
	
	(To inspect the value, run Perfwiz.exe with the -v switch.)
	
	RESOLUTION
	==========
	
	A logic error in Perfwiz.exe is the source of the trouble.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem was corrected in the latest Microsoft Exchange Server
	5.0 U.S. Service Pack. For information on obtaining the service pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
