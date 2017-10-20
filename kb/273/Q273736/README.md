---
layout: page
title: "Q273736: XFOR: GroupWise Calendar Connector Event ID 5016"
permalink: /kb/273/Q273736/
---

## Q273736: XFOR: GroupWise Calendar Connector Event ID 5016

{% raw %}

	Article: Q273736
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 03-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to view the free-and-busy information of a Novell GroupWise
	user, you may receive the following event in the application Event Log:
	
	  Event ID: 5016
	  Source: MSExchangeGWiseCal
	  Description:
	  Could not receive a returning probe message. Please make sure both Microsoft
	  Exchange Router for Novell GroupWise service and GroupWise API Gateway are
	  running. Probe message checking, Continue.
	
	CAUSE
	=====
	
	Although this behavior can point to an incorrectly configured Calendar
	Connector, it can also point to an incorrectly configured Microsoft Exchange
	Connector for Novell GroupWise.
	
	The Connector for Novell GroupWise requires that you put the API gateway name and
	the API gateway domain name as parameters under the Options tab. These two
	parameters do not affect the functionality of the connector; all that it needs
	to run is the correct API gateway path. So, the API gateway name and the API
	gateway domain name can be incorrect, and the Connector for Novell GroupWise
	still runs correctly. However, if these two parameters are incorrect, the
	Calendar Connector does not work, and the event in the "Symptoms" section is
	written to the Event Log.
	
	RESOLUTION
	==========
	
	Modify the Connector for Novell GroupWise to point to the correct API gateway
	name and API gateway domain name.
	
	MORE INFORMATION
	================
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q260690 XFOR: Event ID 5016 from the GroupWise Calendar Connector
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
