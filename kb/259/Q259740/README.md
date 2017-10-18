---
layout: page
title: "Q259740: SMS: Remote Control Prompts for User's Credentials"
permalink: kb/259/Q259740/
---

## Q259740: SMS: Remote Control Prompts for User's Credentials

	Article: Q259740
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbui
	Last Modified: 30-JUN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you attempt to remote control a Microsoft Systems Management Server (SMS) 2.0
	Windows NT client, the following dialog box may appear:
	
	  Credentials Required
	
	  The currently logged-in user does not have rights to access the client
	  machine. You must provide the username, domain, and password of an account in
	  the client's remote control operators group.
	
	The Permitted Viewer list is correct and has been verified against another
	working SMS client computer.
	
	CAUSE
	=====
	
	This behavior occurs because the Microsoft Windows NT LAN Manager (LM) Security
	Support Provider Service is not enabled.
	
	RESOLUTION
	==========
	
	To resolve this problem, follow these steps:
	
	1. Using a remote connection, connect to the client computer through Server
	  Manager.
	
	2. Start the Windows NT LM Security Support Provider Service, and then set the
	  service to automatic.
	
	3. Stop, and then restart the SMS Remote Control Agent service.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbui 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
