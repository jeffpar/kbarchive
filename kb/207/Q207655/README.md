---
layout: page
title: "Q207655: XWEB: Setting Up Web Publishing and OWA Access Through a Proxy"
permalink: kb/207/Q207655/
---

## Q207655: XWEB: Setting Up Web Publishing and OWA Access Through a Proxy

	Article: Q207655
	Product(s): Microsoft Exchange
	Version(s): 2.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Proxy Server version 2.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up Web Publishing and Outlook Web Access (OWA)
	on the same server, or on different servers. This enables users to access their
	Exchange mailboxes through the Internet by means of the proxy server and host
	their company's main Web site.
	
	MORE INFORMATION
	================
	
	1. Start the Internet Service Manager (ISM), which loads the Internet
	  Information Server snap-in for the Microsoft Management Console (MMC).
	
	2. On the Action menu, click Web Proxy, and click Properties.
	
	3. On the Publishing tab, click to select the Enable Web Publishing check box.
	
	4. Select "Send incoming requests to the local server".
	
	5. Add an exception to send requests for
	
	  http://<FQDN>/exchange/
	
	  -to-
	
	  http://<Server>/exchange/
	
	  Where:
	
	  FQDN = The registered MX record
	  Server = The NetBIOS name or IP address of the Exchange Server running.
	
	6. When accessing OWA, use the Fully Qualified Domain Name (FQDN) of the
	  Exchange Server computer.
	
	If the Proxy Server, IIS Server, Exchange Server and OWA are running on the same
	computer, it is not necessary to set an exception for OWA. However, the Default
	Web Site's IP Address should be bound to "All Unassigned".
	
	If the Proxy Server and the Outlook Web Access server are on different servers,
	you will need to add an exception to send requests for:
	
	  http://<FQDN>/exchange/
	
	  -to-
	
	  http://<Server>/exchange/
	
	Where:
	
	  FQDN = The Fully Qualified Domain Name of the Proxy server
	  Server = The NetBIOS name or IP address of the IIS server running Outlook Web
	  Access.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbAudDeveloper kbExchangeSearch kbExchange550 kbZNotKeyword2 kbProxyServSearch kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3 kbProxyServ200
	Version           : :2.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
