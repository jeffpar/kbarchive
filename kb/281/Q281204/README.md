---
layout: page
title: "Q281204: SMS: Installing SMS 2.0 Clients on Terminal Server Clients"
permalink: kb/281/Q281204/
---

## Q281204: SMS: Installing SMS 2.0 Clients on Terminal Server Clients

	Article: Q281204
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 15-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Systems Management Server 2.0 (SMS) provides several methods that you can use to
	install the SMS client software onto computers. In one method, you use Microsoft
	Windows NT Remote Client Installation in conjunction with Network Discovery to
	install client software on computers that are running Microsoft Windows 2000.
	
	MORE INFORMATION
	================
	
	If Windows NT Terminal Server clients are present on the network in which the
	Windows NT Remote Client Installation is being used, and if those Terminal
	Server clients are operating in Application Server mode, you may experience
	problems when you install the SMS client software by using Windows NT Remote
	Client Installation.
	
	Windows NT Remote Client Installation does not configure Terminal Server clients
	for Installation mode prior to installing the SMS client software. For this
	reason, you should not use Windows NT Remote Client Installation to install the
	SMS client software on clients that are running Terminal Server in Application
	Server mode. In this situation, you should install the SMS client software onto
	the Terminal Server clients prior to initiating Windows NT Remote Client
	Installation.
	
	To install the SMS client software onto Terminal Server clients, follow these
	steps:
	
	1. From a command prompt, type "change user /install" (without the quotation
	  marks) to place the Terminal Server client in Install mode.
	
	2. Run Smsman.exe, or SMS Login script to install the SMS client software.
	
	3. After the SMSMAN wizard or the login script completes, in Control Panel,
	  double-click the Systems Management icon, click Components, and then note the
	  progress of the installation. Continue to click Refresh occasionally until
	  all of the components that you configured are installed successfully.
	
	4. From a command prompt, type "change user /execute" (without the quotation
	  marks) to place the Terminal Server client back in Application Server mode.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q262231 SMS: Site Server Installation on Windows 2000 Terminal Server
	
	  Q263386 Error Installing Systems Management Server Components on Windows NT
	  4.0 Terminal Server Edition
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
