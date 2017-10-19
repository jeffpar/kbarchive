---
layout: page
title: "Q250262: NTOP Installation Error Message: Cannot Detect OS Type"
permalink: /kb/250/Q250262/
---

## Q250262: NTOP Installation Error Message: Cannot Detect OS Type

	Article: Q250262
	Product(s): Internet Information Server
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to install the Windows NT Option Pack (NTOP) on a Windows NT
	Server 4.0-based computer, the following error message may occur:
	
	  Error:
	
	  Cannot detect OS type
	
	When you click OK, the NTOP installation ends immediately.
	
	CAUSE
	=====
	
	This error message indicates that the WINS Client service in the Network
	bindings may be disabled.
	
	WORKAROUND
	==========
	
	To work around this problem, do the following:
	
	1. In Control Panel, double-click the Network icon, and then click Bindings.
	
	2. Select All Protocols, and make sure the WINS Client (TCP/IP) option is
	  enabled.
	
	3. Restart the server.
	
	MORE INFORMATION
	================
	
	The error message appears if the WINS Client option is disabled, regardless of
	which Windows NT Service Pack is currently installed.
	
	If the WINS Client option is disabled on the server, Internet Explorer may not
	function correctly when connecting to the Internet. At the same time, a series
	of related events appear in the System Log:
	
	  Event ID 7000, Service Control Manager
	  The WINS Client(TCP/IP) service failed to start due to the following error: A
	  device attached to the system is not functioning.
	
	  Event ID 7001, Service Control Manager
	  The DHCP Client service depends on the WINS Client(TCP/IP) service which
	  failed to start because of the following error: A device attached to the
	  system is not functioning.
	
	  Event ID 7001, Service Control Manager
	  The Computer Browser service depends on the Server service which failed to
	  start because of the following error: A device attached to the system is not
	  functioning.
	
	  Event ID 7023, Service Control Manager
	  The Server service terminated with the following error: A device attached to
	  the system is not functioning.
	
	  Event ID 5728, Workstation
	  Could not load any transport.
	
	  Event ID 7024, Service Control Manager
	  The Workstation service terminated with service-specific error 5728.
	
	  Event ID 7001, Service Control Manager
	  The Alerter service depends on the Workstation service which failed to start
	  because of the following error: The service has returned a service-specific
	  error code.
	
	  Event ID 7002, Service Control Manager
	  The TCP/IP NetBIOS Helper service depends on the NetworkProvider group and no
	  member of this group started.
	
	  Event ID 7001, Service Control Manager
	  The Messenger service depends on the Workstation service which failed to start
	  because of the following error: The service has returned a service-specific
	  error code.
	
	The above events can be used to determine if the server has the WINS Client
	service disabled.
	
	
	
	Additional query words: NTOP, WINS Client, IIS4
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
