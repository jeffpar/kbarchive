---
layout: page
title: "Q263846: Secondary Site Installation May Not Work with Terminal Services"
permalink: kb/263/Q263846/
---

## Q263846: Secondary Site Installation May Not Work with Terminal Services

	Article: Q263846
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On a Microsoft Windows 2000-based server running Terminal Services in
	Application Server mode, you attempt to install a secondary site from the
	primary site using the Secondary Site Installation Wizard.
	
	This attempted installation may cause the Smssetup.log file on the secondary site
	to display the following log entry on your computer system:
	
	  Setup has detected that Windows Terminal Server is running on this computer
	  and the current user session is in the Execute mode. You must set the current
	  user session to the Install mode in order to run Microsoft Systems Management
	  Server (SMS) Setup.
	
	CAUSE
	=====
	
	This behavior can occur because the Terminal Services-based server is not in
	Install mode when the SMS Setup program is run.
	
	WORKAROUND
	==========
	
	To work around this behavior, perform the following instructions: when Terminal
	Services is running in Application Server mode, the secondary site must be
	installed on the local server directly from an SMS installation location.
	However, before you use the SMS Setup program, run the change user /install
	command.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
