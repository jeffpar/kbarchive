---
layout: page
title: "Q182989: XCON: Attempt to Start MTA Fails with Error 1058"
permalink: /kb/182/Q182989/
---

## Q182989: XCON: Attempt to Start MTA Fails with Error 1058

	Article: Q182989
	Product(s): Microsoft Exchange
	Version(s): 2000,4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbusage
	Last Modified: 30-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	- Microsoft Exchange 2000 Server 
	- Microsoft Small Business Server 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start the message transfer agent (MTA) from Control Panel /
	Services, you may receive the following error message:
	
	  Could not start the Microsoft Message Transfer Agent service on
	  <servername>.
	  Error 1058: The specified service is disabled and cannot be started.
	
	You may receive this error starting any service, including the Simple Mail
	Transfer Protocol(SMTP) service or any Microsoft Exchange service.
	
	CAUSE
	=====
	
	This behavior can occur if the service is disabled within the current hardware
	profile.
	
	RESOLUTION
	==========
	
	To resolve this behavior, perform the following steps:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  the Services icon.
	
	2. Select the Microsoft Exchange Message Transfer Agent service, and then click
	  Hardware Profiles.
	
	3. Click the current hardware profile, click Enable, and then click OK.
	
	4. Ensure that the Startup Type for the service is set to Manual or Automatic.
	
	5. Click Start to start the service.
	
	The Hardware Profile Setting is designed to assist computers that have multiple
	configurations. Third-party applications often disable this service to ensure
	that these services do not disrupt their product. To check and correct Hardware
	Profile behaviors:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  the Services icon.
	
	2. Click the service that is not responding, and then click Hardware Profiles.
	
	3. Verify that the setting for the original configuration is enabled. If the
	  setting for the original configuration is not enabled, double-click to change
	  the setting.
	
	NOTE: This behavior can occur for any service listed under Services in Control
	Panel.
	
	MORE INFORMATION
	================
	
	For additional information about other causes of error 1058, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q181835 Unable to Start the Server Service
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          : kberrmsg kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2 kbExchange2000Search kbSBServSearch kbZNotKeyword3 kbExchange2000Serv kbSBServ2000
	Version           : :2000,4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
