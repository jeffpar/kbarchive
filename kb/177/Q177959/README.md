---
layout: page
title: "Q177959: XADM: Information Store Does Not Start, Error -1022"
permalink: /kb/177/Q177959/
---

## Q177959: XADM: Information Store Does Not Start, Error -1022

{% raw %}

	Article: Q177959
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 20-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you upgrade a computer running Microsoft Exchange Server version 5.0 to
	version 5.5, the Information Store and message transfer agent (MTA) may stop
	unexpectedly. Attempting to manually restart the MTA will be successful;
	however, the Information Store will be unable to start. The event viewer will
	return the following information:
	
	  MSExchangeIS ((120)) System parameter preferred version pages was
	  changed from 6528 to 1623 due to physical memory limitation.
	  MSExchangeIS ((120)) The database engine 05.1950.0000 started.
	  MSExchangeIS ((120)) The database engine is initiating recovery steps.
	  MSExchangeIS ((120)) The database engine is replaying log file
	  c:\exchsrvr\MDBDATA\edb.log.
	
	CAUSE
	=====
	
	The system has run out of disk space during the conversion process, which forces
	the conversion process to shut down unexpectedly. Portions of code that allow
	the conversion process to think that the Information Store is shutting down
	successfully are not being flushed.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Free some disk space and restart the Information Store. Restart the upgrade
	  process to perform a soft recovery.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem Microsoft Exchange Server version
	5.0.
	
	This problem has been corrected in the latest U.S. Service Pack for Microsoft
	Exchange Server version 5.0. For information on obtaining the Service Pack,
	query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
