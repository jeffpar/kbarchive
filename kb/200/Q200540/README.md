---
layout: page
title: "Q200540: Quick Viewer Displays Black Screen When You Try Remote Control"
permalink: /kb/200/Q200540/
---

## Q200540: Quick Viewer Displays Black Screen When You Try Remote Control

	Article: Q200540
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbtool kbRemote kbsms kbHelpDesk kbRemoteProgkbfaq
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SMS Remote Control Agent service running on Microsoft Windows NT Systems
	Management Server-based client computer requires access to the desktop. This is
	enabled by default and should not be changed to ensure proper functionality. If
	you change the SMS Remote Control Agent service properties so that it can not
	interact with the desktop, the Quick Viewer Window displays a black screen and
	not the client computer's actual desktop.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Start the Services tool in Control Panel, and then view the Startup section
	  of the SMS Remote Control Agent.
	
	2. Enable the "Allow Service To Interact With The Desktop" feature, stop and
	  then restart the service.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbRemote kbsms kbHelpDesk kbRemoteProg kbfaq
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
