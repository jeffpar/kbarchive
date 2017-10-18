---
layout: page
title: "Q257182: SMS: Remote Tools Window Displays Incorrect Port Number"
permalink: kb/257/Q257182/
---

## Q257182: SMS: Remote Tools Window Displays Incorrect Port Number

	Article: Q257182
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbHelpDesk kbsms200preSP3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a remote control session of a Systems Management Server (SMS) 2.0 Service
	Pack 2 (SP2) client computer, the title bar may display the following text:
	
	  Remote Control - '<computer name>':1761
	
	This may occur even though the correct port number being used for this type of
	remote control session is 2701, so the title bar should display the following
	text:
	
	  Remote Control - '<computer name>':2701
	
	You may be able to observe the same behavior in a Remote Reboot window.
	
	NOTE: For Remote Control sessions to pre-SP2 clients, the port number that is
	used is still 1761. Ports that are used for Remote Tools were changed in SP2.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 SP2.
	
	MORE INFORMATION
	================
	
	This problem does not impair any functionality. 2701 is the correct port number
	to use for a remote control session to an SP2 client. For additional information
	about port changes in SMS 2.0 Sp2, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q256884 SMS: TCP and UDP Ports Used by Remote Control Have Changed in SP2
	
	Additional query words: prodsms IP IANA
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbHelpDesk kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
