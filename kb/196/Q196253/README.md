---
layout: page
title: "Q196253: XFOR: Service Properties are Blank or Equal Zero"
permalink: /kb/196/Q196253/
---

## Q196253: XFOR: Service Properties are Blank or Equal Zero

{% raw %}

	Article: Q196253
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	MORE INFORMATION
	================
	
	
	When the Microsoft Exchange Chat Server is first installed, the Parameters
	service key is not populated. This is because the service, at first install,
	uses all default values set by the code. The only way to populate the Parameters
	key is to open the Service Properties, click each tab, and then click OK. This
	writes all service values to the Parameters key.
	
	SYMPTOMS
	========
	
	When the Microsoft Exchange Chat Server snap-in is first added to the Microsoft
	Management Console (MMC), the service name is blank, and both Limits boxes are
	set to zero when the service is in a paused state.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Chat Server.
	
	
	Additional query words: mcischat
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
