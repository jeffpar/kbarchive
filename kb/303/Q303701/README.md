---
layout: page
title: "Q303701: Configuring Incoming/Outgoing Connections for IIS SMTP Server"
permalink: /kb/303/Q303701/
---

## Q303701: Configuring Incoming/Outgoing Connections for IIS SMTP Server

{% raw %}

	Article: Q303701
	Product(s): Internet Information Server
	Version(s): 2000,5.0
	Operating System(s): 
	Keyword(s): kbAudITPro kbHOWTOmaster
	Last Modified: 15-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Services version 5.0 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	
	IN THIS TASK
	------------
	
	- SUMMARY
	
	   - Requirements
	- Configure Incoming and Outgoing Connections for an IIS SMTP Server
	
	SUMMARY
	=======
	
	This step-by-step guide describes how to configure incoming and outgoing
	connections for an Internet Information Services (IIS) SMTP server.
	
	Requirements
	------------
	
	- Windows 2000 Professional, Windows 2000 Server, or Windows 2000 Advanced
	  Server
	- IIS 5.0 with SMTP services installed
	
	Configure Incoming and Outgoing Connections for an SMTP Server
	--------------------------------------------------------------
	
	1. Click Start, point to Programs, point to Administrative Tools, and then click
	  Internet Services Manager.
	
	2. In the Internet Information Services console tree (left pane), click the
	  server that contains the SMTP virtual server that you want to configure, and
	  then expand the server node by clicking the plus sign (+) next to the server
	  name.
	
	3. Right-click the SMTP virtual server that you want to configure, and then
	  click Properties.
	
	4. On the General tab, click Connection to open the Connections dialog box.
	
	5. In the SMTP Virtual Server property sheet, under Incoming, click the Limit
	  Connections to: check box to enable this setting (the default is no limit),
	  and then set the following options:
	
	   - In the Limit connections to: text box, type the maximum number of incoming
	     connections allowed by the SMTP server. The default is 1,000 connections.
	     The minimum is 1.
	
	   - In the Time-out: text box, type the maximum number of minutes that an
	     incoming connection can remain inactive before the server closes the
	     connection.
	
	6. In the SMTP Virtual Server property sheet, under Outgoing, click the Limit
	  connections to: check box to enable this setting (the default is no limit),
	  and then set the following options:
	
	   - In the Limit connections to: text box, type the maximum number of outbound
	     connections allowed to all remote domains. The default setting is 1,000
	     connections and the minimum is 1.
	
	   - In the Time-out: text box, type the maximum number of minutes that an
	     outgoing connection can remain inactive before the server closes the
	     connection.
	
	7. In the SMTP Virtual Server property sheet, under Outgoing, select Limit
	  connections per domain to: to enable this setting (the default is no limit).
	  In the text box provided, type the number of concurrent outgoing connections
	  that each domain is allowed to have.
	
	8. In the TCP Port: text box, type the port to be used by the SMTP server for
	  outgoing connections.
	
	You have now configured the incoming and outgoing connections for your SMTP
	server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAudITPro kbHOWTOmaster 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbiisSearch kbiis500 kbWinAdvServSearch
	Version           : :2000,5.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
