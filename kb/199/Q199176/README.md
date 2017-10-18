---
layout: page
title: "Q199176: XFOR: GroupWise/Lotus Notes DXA Slow to Respond to Full Reload"
permalink: kb/199/Q199176/
---

## Q199176: XFOR: GroupWise/Lotus Notes DXA Slow to Respond to Full Reload

	Article: Q199176
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:3.2; winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-FEB-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- LinkAge Message Exchange, version 3.2 
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Immediately after starting the Lotus Notes/GroupWise connector, administrators
	may find that performing a Full Reload on the connector will result in a delayed
	response of up to two minutes. It will appear as if the Directory Exchange Agent
	(DXA) had not yet received the directory synchronization (dirsync) request.
	
	CAUSE
	=====
	
	The directory synchronization notification design of the DXA is based on polling
	changes to the Pcta.tbl file. When the DXA is starting up, it may miss the
	polling interval to check for changes to the Pcta.tbl file. When this happens,
	it has to wait until the next scheduled polling interval (approximately a
	minute) before attempting to check for new dirsync requests.
	
	RESOLUTION
	==========
	
	Wait a minute or two before attempting to manually schedule a full dirsync
	request on the connector. If a full dirsync is attempted immediately after the
	connector starts up, simply wait for the response from the connector. Do not
	attempt to issue any more requests to the DXA.
	
	STATUS
	======
	
	Microsoft acknowledges this to be a problem.
	
	MORE INFORMATION
	================
	
	The design of the directory synchronization component in the GroupWise connector
	is based on former connectors, such as the Lotus Notes connector. This problem
	will also affect the older LinkAge 3.2 connectors.
	
	Additional query words: slow response; full reload
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword6 kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2 kbLinkAgeSearch kbLinkAge320
	Version           : WINDOWS:3.2; winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
