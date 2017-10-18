---
layout: page
title: "Q262231: SMS: Site Server Installation on Windows 2000 Terminal Server"
permalink: kb/262/Q262231/
---

## Q262231: SMS: Site Server Installation on Windows 2000 Terminal Server

	Article: Q262231
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Prior to Systems Management Server (SMS) 2.0 Service Pack 2, you could not
	install an SMS site server on a server with Microsoft Windows 2000 Terminal
	Server installed.
	
	With Service Pack 2 or later, you are now able to install an SMS primary site, or
	secondary site on a server with Windows 2000 Terminal Server installed. This
	capability does not include support for Microsoft Windows NT Server 4.0,
	Terminal Server Edition.
	
	MORE INFORMATION
	================
	
	If you configure Terminal Services for Application Server mode, it is necessary
	to place the server in Install mode prior to running SMS Setup. To accomplish
	this, simply start the SMS Setup program from the Add/Remove Programs tool in
	Control Panel, or use the "change user" command from the command prompt. Because
	of this, you cannot install a secondary site in Application Server mode, on a
	server with Windows 2000 Terminal Server installed, by initiating the
	installation from the primary site. In this situation, you must install the
	secondary site directly from an SMS installation location.
	
	If you configured Terminal Services for Remote Administration mode, it is not
	necessary to take any additional steps to configure the server prior to
	installing the site server.
	
	Prior to installing a new site server, it might be necessary to prepare the SMS
	installation files by updating them with the SMS service pack files. See the
	Readme.1st file that is supplied with the SMS service pack for more details.
	
	For more information about the supported features on a system that is running
	Terminal Services, please see the following Microsoft Web site:
	
	  http://www.microsoft.com/smsmgmt/deployment/wincompat.asp
	
	Additional query words: prodsms terminal server install
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbinfo
	
	=============================================================================
	
