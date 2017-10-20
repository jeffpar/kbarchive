---
layout: page
title: "Q162012: XADM: Unable to Change the Routing Calculation Server"
permalink: /kb/162/Q162012/
---

## Q162012: XADM: Unable to Change the Routing Calculation Server

{% raw %}

	Article: Q162012
	Product(s): Microsoft Exchange
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	In a Microsoft Exchange Server Site, with multiple Servers, you may choose to
	change the Routing Calculation Server on the Site Addressing property page in
	the Microsoft Exchange Administrator program. After making the change, the Apply
	button is grayed out and if you click the OK button and reopen the property page
	to check the setting, the Routing Calculation Server will be set back to the
	original Server.
	
	WORKAROUND
	==========
	
	After changing the Server selection, select and deselect the Share Address Space
	with other X.400 Systems checkbox. This will enable the Apply button and allow
	you to successfully change the Routing Calculation Server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Exchange Server 4.0. It has been
	corrected in Exchange Server 5.0.
	
	Additional query words: routing server change calculation
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : 4.0
	
	=============================================================================
	

{% endraw %}
