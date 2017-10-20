---
layout: page
title: "Q147022: XCON: MTA Strips Message Body Using X400 Connector With ISO 6937"
permalink: /kb/147/Q147022/
---

## Q147022: XCON: MTA Strips Message Body Using X400 Connector With ISO 6937

{% raw %}

	Article: Q147022
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Message Transfer Agent (MTA) may fail to deliver the
	message contents when sending a message across an X400 connector configured to
	use ISO 6937 body parts.
	
	MORE INFORMATION
	================
	
	This problem was introduced in version 995.50 of the MTA. This problem is
	independent of the type of X400 MTA that receives the message that originates
	from Microsoft Exchange. Messages will be delivered successfully to the intended
	recipients but the message body will be missing.
	
	This problem will only occur when using MTA builds 995.50, 995.51, 995.52, and
	995.53 when an X400 connector is configured as follows:
	
	  General Tab
	  -----------
	  Remote Clients Support MAPI is not checked
	
	  Advanced Tab
	  ------------
	  ISO 6937 Body Part is checked
	  Allow MS Exchange Contents is not checked
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 4.0. This problem has been corrected in the latest Microsoft Exchange
	Server version 4.0 U.S. Service Pack. For information on obtaining the Service
	Pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
