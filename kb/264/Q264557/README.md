---
layout: page
title: "Q264557: XFOR: Internet Mail Service Routes SMTP Mssgs for Other Domains"
permalink: /kb/264/Q264557/
---

## Q264557: XFOR: Internet Mail Service Routes SMTP Mssgs for Other Domains

{% raw %}

	Article: Q264557
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to configure the Internet Mail Service to route
	Simple Mail Transfer Protocol (SMTP) messages for different domains.
	
	MORE INFORMATION
	================
	
	To configure the Internet Mail Service to route messages for a different
	domain:
	
	1. Start the Exchange Server Administrator program, expand the Site container,
	  expand the Configuration container, and then click the Connections container.
	
	2. Double-click the Internet Mail Service connector to open the Internet Mail
	  Service Properties dialog box.
	
	3. Click the Routing tab, click Add, and then type the domain that you want to
	  add in the E-mail sent to this domain box in the Edit Routing Table Entry
	  dialog box, for example, <server>.<domain>2.com.
	
	4. Verify that "Should be accepted as "inbound"" is selected.
	
	5. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	6. Click Microsoft Exchange Internet Mail Service, click Stop, and then click
	  Start.
	
	7. Make sure that your Internet service provider or Domain Name System (DNS)
	  server has two mail exchange (MX) records that point to the same host A
	  record that contains the IP address of the Exchange Server computer.
	
	8. To add more e-mail domains, repeat this procedure.
	
	Additional query words: IMS
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
