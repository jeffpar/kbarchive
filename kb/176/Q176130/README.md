---
layout: page
title: "Q176130: XCON: MTA Stops When You Select Items in MTA Queue"
permalink: /kb/176/Q176130/
---

## Q176130: XCON: MTA Stops When You Select Items in MTA Queue

{% raw %}

	Article: Q176130
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you use the Microsoft Exchange Server Administrator program to manipulate
	items in the message transfer agent (MTA) queue, the MTA may stop responding and
	log the following error in the Windows NT Event Viewer Application log:
	
	  Event ID:2050   Source:MSExchangeMTA
	  Category:Internal Processing
	  Description:"A fatal internal MTA error occurred. Contact Microsoft
	  Product Support Services. An illegal PUT to element (some memory
	  address) occurred at offset (some #). "
	
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
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
