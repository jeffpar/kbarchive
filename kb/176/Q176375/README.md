---
layout: page
title: "Q176375: XFOR: CCMC Shuts Down and Logs Events 82 and 83"
permalink: /kb/176/Q176375/
---

## Q176375: XFOR: CCMC Shuts Down and Logs Events 82 and 83

{% raw %}

	Article: Q176375
	Product(s): Microsoft Exchange
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server Connector for Lotus CC-Mail (CCMC) logs the
	following events in the Windows NT Event Viewer:
	
	  Event ID 82
	  An exception has occurred. The information is as follows:
	  Exception code c0000005. Exception flags: 0. Exception address 2e3d3d3d.
	  Number of parameters: 2. Exception information 0 2e3d3d3d.
	
	  Event ID 83:
	  The exception UNKNOWN was caught in function dwCCExport.
	
	These errors repeat 25 times, until the following event is logged:
	
	  Event ID 85:
	  The maximum number the thread restarts has been reached and the Microsoft 
	  Exchange Connector for Lotus cc:Mail will be shutdown. Try restarting the
	  Microsoft Exchange Connector for Lotus cc:Mail service.
	
	Restarting the CCMC does not resolve the problem. Moving the contents of
	\EXCHSRVR\CCMCDATA\EXPORT to another directory allows the CCMC to restart.
	
	CAUSE
	=====
	
	The file created by Export contains an illegal section name that is not handled
	properly by the CCMC.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.0. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.0. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : 5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
