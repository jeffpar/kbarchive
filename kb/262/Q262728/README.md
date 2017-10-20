---
layout: page
title: "Q262728: XFOR: Inbody Addressing Doesn't Work aft. Moving SNADS Connector"
permalink: /kb/262/Q262728/
---

## Q262728: XFOR: Inbody Addressing Doesn't Work aft. Moving SNADS Connector

{% raw %}

	Article: Q262728
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After moving a working SNADS connector to a different server in a different
	site, the Inbody addressing feature may not work correctly.
	
	CAUSE
	=====
	
	This problem may be a result of the SNADS addressing using the previous Exchange
	Server Routing Group Name when the default SNADS address used for Inbody
	addressing was changed to the new default site name.
	
	The default SNADS address uses the first eight characters of the Exchange Server
	site name.
	
	Example: SNADS SITENAME(&m)
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	- Change the Routing Group Name in SNA Directory services, to match the
	  existing SNADS site addressing on Exchange Server.
	
	  or
	
	- Change Site Addressing on the new Exchange Server site to match the SNADS
	  address that is configured on the host in SNA Directory services.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
