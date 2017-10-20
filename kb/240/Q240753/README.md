---
layout: page
title: "Q240753: XWEB: How to Change the TCP/IP Port for Outlook Web Access"
permalink: /kb/240/Q240753/
---

## Q240753: XWEB: How to Change the TCP/IP Port for Outlook Web Access

{% raw %}

	Article: Q240753
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Outlook Web Access, version 5.5 Service Packs 1, 2, 3 
	- Microsoft Internet Information Server version 4.0 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You may need to set up Internet Information Server (IIS) to allow access to
	Outlook Web Access (OWA) on a TCP/IP port other than the default port of 80.
	
	MORE INFORMATION
	================
	
	With IIS 4.0, you can set the TCP/IP port used for HTTP connections to the
	server. You can only change this setting on the Web site itself, not in a
	particular virtual folder (such as Exchange). Therefore, if this is set up, all
	access to the Web site and its virtual folders must take place over the new
	designated TCP/IP port. After this change is made, users must reference the new
	port number in the site's URL address, as in the following example:
	
	  http://<iisservername>:1010/exchange
	
	The new port number is 1010 in this example.
	
	If Microsoft Proxy Server 2.0 is installed between the IIS server and the
	Internet, you may prefer to have OWA installed on a server behind the Proxy
	Server (on the internal LAN), instead of on the Proxy Server itself. If this
	configuration is set on an IIS/OWA server that is also the Proxy Server, you
	must also set all internal browser clients to connect to the new Proxy Server
	over the newly designated port.
	
	Steps to Change the Port Address for HTTP
	-----------------------------------------
	
	1. Open the Management Console for IIS 4.0.
	
	2. Expand the tree view of the server on which OWA is installed.
	
	3. Right-click the Web site on which OWA is installed, and then click
	  Properties.
	
	4. Click the Web Site tab.
	
	5. Change the TCP Port field from 80 to the port you want to use.
	
	6. Apply the changes, close, and save.
	
	If you are using Proxy Server 2.0, proceed to the next step.
	
	7. Open the new port for inbound and outbound traffic on the Proxy Server.
	
	Additional query words: xcln, mmc,
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbiisSearch kbExchangeSearch kbExchange550 kbiis400 kbZNotKeyword2 kbOWASearch kbOWA550 kbOWA550SP1 kbOWA550SP2 kbOWA550SP3
	Version           : WINDOWS:5.5; winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
