---
layout: page
title: "Q152876: XCON: MTA Hung After Deletion of X.400 Connectors"
permalink: /kb/152/Q152876/
---

## Q152876: XCON: MTA Hung After Deletion of X.400 Connectors

{% raw %}

	Article: Q152876
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbusage exc4 exc5
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you delete one of the Microsoft Exchange Connectors (X.400, Site, or
	Dynamic RAS), the Microsoft Exchange Message Transfer Agent (MTA) might hang.
	
	This is usually followed by an event in the Windows NT Application Log:
	
	  MSExchangeMTAEvent ID 9405
	
	  An unexpected error has occurred which may cause the MTA to terminate.
	  Error: Exception c0000005 occurred at Address 206bc86. [BASE OPERATOR 22] (16)
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem was corrected in Microsoft Exchange Server 4.0 U.S.
	Service Pack 2. For information on obtaining the service pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server version 4.0 might develop a problem when connectors
	are deleted. When a connector is deleted, the information should be passed along
	to a storage area pending deletion by a Microsoft Exchange background cleanup
	routine. However, this does not happen. The deleted object is left as an Entry
	Control Block (ECB) that can be interpreted by the system as an active object.
	This in turn can result in the above error.
	
	This problem is most often experienced after deleting multiple connectors at a
	time, however, it can be seen after deleting only one connector.
	
	Additional query words: hang msexchangemta stop
	
	======================================================================
	Keywords          : kbusage exc4 exc5 
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0
	
	=============================================================================
	

{% endraw %}
