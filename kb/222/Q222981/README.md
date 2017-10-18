---
layout: page
title: "Q222981: SMS: Setup Cannot Remove SMS 2.0 Components"
permalink: kb/222/Q222981/
---

## Q222981: SMS: Setup Cannot Remove SMS 2.0 Components

	Article: Q222981
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbBindery
	Last Modified: 20-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After a Systems Management Server (SMS) site server has been installed, you
	cannot remove platform binary files from the server. For example, after Alpha
	binary files have been installed on a site, those binary files cannot be removed
	by Setup or by any other means.
	
	WORKAROUND
	==========
	
	Select only the SMS platforms and components that are necessary to operate your
	site because you cannot remove additional platforms and components.
	
	MORE INFORMATION
	================
	
	In addition, you cannot use SMS Setup to remove the following site components
	after they are installed:
	
	- SMS Administrator Console
	- Software Metering
	- Software Metering Console
	- Remote Tools
	- SMS Installer
	- Network Monitor
	- Package Automation Scripts
	- Crystal Reports
	- NetWare Bindery Support
	- NetWare NDS Support
	- Product Compliance Database
	
	During the initial installation, the Setup Installation Options screen
	instructions state: "Clear options you do not want installed."
	
	You can clear options only during the initial site installation. After an SMS 2.0
	site is installed, you cannot clear component options by using SMS Setup to
	remove the components.
	
	Note that you can remove SMS Installer and Crystal Reports by using the
	Add/Remove Programs tool in Control Panel. If you remove Crystal Reports in this
	manner, however, SMS Setup provides no means to reinstall it.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbBindery 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
