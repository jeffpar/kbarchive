---
layout: page
title: "Q181513: XCON: MTA DRAS Connection Terminates With 1294 and 9316 Events"
permalink: /kb/181/Q181513/
---

## Q181513: XCON: MTA DRAS Connection Terminates With 1294 and 9316 Events

{% raw %}

	Article: Q181513
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Server 5.5 message transfer agent (MTA) may fail to
	maintain a connection over a DRAS connection. Events similar to the following
	may appear in the Application event log:
	
	  Event: 1294
	  Source: MTA
	  An association with entity
	  /O=MICROSOFT/OU=THEFORCE/CN=CONFIGURATION/CN=CONNECTIONS/CN=DAGOBAH TO
	  PLEASUREDOME ended abnormally. [4 1 0 0 PLATFORM KERNEL 16 130] (10)
	
	  Event: 9316
	  Source: MTA
	  An RPC communications error occurred. No data was sent over the RPC
	  connection. Locality table (LTAB) index: 4. Windows NT error: 1783. The
	  MTA will attempt to recover the RPC connection. [BASE IL PIPE RAS 24
	  230] (12)
	
	CAUSE
	=====
	
	The Windows NT error 1783 in Event 9316 equates to "Bad Stub Data." This problem
	occurs when the number of messages in the outbound DRAS connector's queue
	exceeds the DRAS connector's configured threshold. By default, the Threshold
	value is set to 50. When the queue exceeds this threshold, an additional
	association is generated. However, the sending MTA passes an invalid context
	handle to the receiving MTA, which terminates the connection because the handle
	is invalid.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem has been corrected in the latest U.S. Service Pack for
	Microsoft Exchange Server version 5.5. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
