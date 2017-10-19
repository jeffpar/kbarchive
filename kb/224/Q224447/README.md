---
layout: page
title: "Q224447: XADM: How to Change LDAP Port Assignments in Exchange Server"
permalink: /kb/224/Q224447/
---

## Q224447: XADM: How to Change LDAP Port Assignments in Exchange Server

	Article: Q224447
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the LDAP Server Service for ports 389 and 636, after
	you install Exchange Server on a computer running Windows 2000, you may find the
	following Event IDs in the Application Event Log.
	
	  Event ID: 1306
	  Type: Error
	  Source: MSExchangeDS
	  Description: Register LDAP protocol failed with error 10048. If port number
	  389 is used by another application, change to an unused port, then shut down
	  and restart Microsoft Exchange Directory Services. Contact Microsoft Support
	  Service if condition persists.
	
	  Event ID: 1309
	  Type: Error
	  Source: MSExchangeDS
	  Description: Register LDAP SSL protocol failed with error 10048. The LDAP SSL
	  server is not available. Make sure port number 636 is not used by another
	  application.
	
	CAUSE
	=====
	
	Windows 2000 uses its own LDAP Server service which initializes prior to
	Exchange Server's LDAP Server service. This service uses Ports 389 and 636. When
	Exchange Server starts, the Exchange Directory attempts to initialize the same
	ports (for Secure Sockets Layer connectivity). The above stop errors are
	generated for this initialization failure.
	
	WORKAROUND
	==========
	
	Within the Exchange Administrator program, you have the ability to change the
	LDAP well-known port of 389 to another port that is currently not in use.
	
	NOTE: Use caution when you select a new port number. For additional information,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q150543 Windows NT, Terminal Server, and Microsoft Exchange Services Use
	  TCP/IP Ports
	
	This article lists many of the port numbers that Microsoft services use. For
	example, if you change the port number from 389 to 3389 and then install
	Microsoft Terminal Services, a Terminal Services client will be unable to
	connect to the computer that is running Termianl Services because Terminal
	Services listens on port 3389 by default.
	
	To change the port assignment for the Exchange Server LDAP service:
	
	1. Start the Exchange Server Administrator program.
	
	2. To change LDAP port assignments for all servers within the Site, make the
	  following changes:
	
	  a. Expand on <Site Name>\Configuration\Protocols\LDAP (Directory) Site
	     Defaults object.
	
	  b. Change the port assignment from 389 to a port which is currently not in
	     use. This can be done by going to a command prompt, and typing the
	     following command:
	
	  "netstat -an" (without the quotation marks)
	
	     This command will display all active ports that are listening on all
	     interfaces. Choose a port number that does not conflict with any of those
	     ports that are in use.
	
	  c. Click OK, stop, and restart the Exchange Directory service.
	
	Now all servers within the site will listen for LDAP requests on the newly
	assigned port. This requires "Use site defaults for all properties" to be
	selected for the LDAP protocol on each of the servers within the site.
	
	3. To change LDAP port assignments for individual servers within the Site, make
	  the following changes:
	
	  a. Expand on <Site Name>\Configuration\Servers\Protocols\LDAP
	     (Directory) Settings object.
	
	  b. Change the port assignment from 389 to a port which is currently not in
	     use. This can be done by going to a command prompt, and typing the
	     following command:
	
	  "netstat -an" (without the quotation marks)
	
	     This command will display all active ports that are listening on all
	     interfaces. Choose a port number that does not conflict with any of these
	     ports.
	
	  c. Click to clear the "Use site defaults for all properties" option, which
	     will direct the server to read the newly assigned LDAP port instead of
	     using the port assignment from the Site Configuration.
	
	  d. Click OK, stop, and restart the Exchange Directory service.
	
	Now these specifically-configured servers within the site will listen for LDAP
	requests on the newly assigned port.
	
	MORE INFORMATION
	================
	
	To change the SSL port assignment for LDAP within Exchange Server, please refer
	to the following Knowledge Base article:
	
	  Q232606 XIMS: Exchange Server 5.5 LDAP Service Running on Windows 2000
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
