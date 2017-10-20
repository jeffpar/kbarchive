---
layout: page
title: "Q229821: XFOR:GroupWise Dirsync Fails If Directory Synch/Exchange Set to"
permalink: /kb/229/Q229821/
---

## Q229821: XFOR:GroupWise Dirsync Fails If Directory Synch/Exchange Set to

{% raw %}

	Article: Q229821
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Directory synchronization (dirsync) between Novell GroupWise and Exchange Server
	may not finish when you request an update from GroupWise to Exchange Server.
	
	CAUSE
	=====
	
	The Microsoft Exchange Connector for Novell GroupWise is hardcoded to expect a
	full directory list of the GroupWise system as part of the dirsync process.
	Entries in the directory list are compared to current entries in Exchange
	Server, and any updates or new GroupWise users are subsequently imported into
	the Exchange Server directory. Thus, the concept of an update dirsync cycle does
	not exist from GroupWise to Exchange Server. However, if the Directory
	Synch/Exchange configuration on the API gateway is set to Synchronization, then
	the GroupWise Connector cannot ask for a directory list from GroupWise. Instead,
	any modifications or additions in GroupWise result in an immediate update sent
	to the API_OUT directory. The router for GroupWise automatically processes these
	API files as part of its polling cycle.
	
	RESOLUTION
	==========
	
	Perform the following steps to check the configuration of the GroupWise API
	Gateway:
	
	GroupWise 5.x
	-------------
	
	1. Start the NetWare Administrator program.
	
	2. Select the API Gateway object.
	
	3. Select the Optional Gateway Settings tab.
	
	4. Under Directory Synch/Exchange, make sure the Exchange option is selected and
	  that the Synchronization and Both options are not selected.
	
	5. Save the changes if any, and restart the API Gateway if needed.
	
	GroupWise 4.x
	-------------
	
	1. Start the GroupWise Administrator program (Ad.exe).
	
	2. Select the API Gateway object.
	
	3. On the Action menu, select Edit.
	
	4. Select the Optional Properties tab.
	
	5. Make sure Directory Synchronization is set to No.
	
	6. Make sure that Directory Exchange is set to Yes.
	
	7. Save changes, if any and restart the API Gateway if needed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Connector for
	Novell GroupWise.
	
	MORE INFORMATION
	================
	
	The GroupWise Connector logs will indicate that the connector is waiting for the
	inbound dirsync files from GroupWise. The connector will time out after an hour
	and log an error indicating that dirsync was incomplete.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
