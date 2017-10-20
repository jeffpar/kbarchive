---
layout: page
title: "Q163777: XFOR: How to set up Directory Replication over the IMC or IMS"
permalink: /kb/163/Q163777/
---

## Q163777: XFOR: How to set up Directory Replication over the IMC or IMS

{% raw %}

	Article: Q163777
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server, version 4.0 Internet Mail Connector (IMC) and the
	Microsoft Exchange Server, version 5.0 Internet Mail Service (IMS) can be used
	as a transport for Directory Replication and as a Site Connector. This
	facilitates low cost connections for Wide Area Networks where Microsoft Exchange
	Servers may not be directly linked or 100% available.
	
	MORE INFORMATION
	================
	
	To create a connected Microsoft Exchange Site over the IMC or IMS, start the
	Microsoft Exchange Administrator program and add the other Site (Site A) into
	the Connected Sites tab of the IMC or IMS and define an address space (for SMTP
	Mail transfer) for the other site. On Site B, add Site A as a connected Site in
	the Connected Sites property page. Also, add the address space to allow for SMTP
	mail transfer between the two Sites.
	
	When setting up the Directory Replication connector, specify that:
	
	  No, the remote site is not on this network.
	
	You will need to configure each Site separately.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
