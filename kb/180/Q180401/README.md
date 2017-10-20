---
layout: page
title: "Q180401: XADM: Directory Replication After Site Address Is Changed"
permalink: /kb/180/Q180401/
---

## Q180401: XADM: Directory Replication After Site Address Is Changed

{% raw %}

	Article: Q180401
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 28-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up intersite directory replication when the
	site addressing of a site is changed from the default.
	
	MORE INFORMATION
	================
	
	Intersite directory replication occurs when the Microsoft Exchange directory
	service on the bridgehead server in one site sends messages to the directory
	service on the bridgehead server in another site. The messages are delivered to
	the other site by the message transfer agent (MTA). To determine which address
	the directory service sends these messages to, view the Connected Sites page in
	the properties of the connector between the two sites.
	
	If the site address of a site is changed, the information provided on the
	Connected Sites pages of all connectors that connect to that site must also be
	changed.
	
	For example, consider two Microsoft Exchange sites, Site1 and Site2, connected
	via an X.400 Connector. The X.400 Site Address of Site1 is changed on the Site
	Addressing page of the Site Addressing object.
	
	In order for directory replication between Site1 and Site2 to complete, follow
	these steps:
	
	1. Run the Exchange Administrator program against a server in Site1.
	
	2. Get the properties of the <Site>\Configuration\Site Addressing object.
	
	3. Go to the Site Addressing page.
	
	4. Note the X.400 Site Address.
	
	5. Connect the Administrator program to a server in Site2.
	
	6. Get the properties of the X.400 Connector to Site1.
	
	7. Go to the Connected Sites page.
	
	8. Make sure that the X.400 address on the Connected Sites page is the same as
	  the address determined in Step 4.
	
	If these addresses do not match, directory service messages sent from Site2 to
	Site1 will be returned as non-deliverable.
	
	The above information is correct no matter which connector is used between the
	two sites. However, if directory replication is being performed between sites
	using the Internet Mail Connector (Internet Mail Service in Exchange Server
	versions 5.0 and 5.5), the SMTP address specified on the Connected Sites page of
	the Internet Mail Connector in Site2 should be exactly the same as the SMTP
	address in the Site Addressing page of the Site Addressing object of Site1.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
