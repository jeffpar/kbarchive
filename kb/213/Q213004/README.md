---
layout: page
title: "Q213004: SMS: Windows Networking Logon Client Installation and Discovery"
permalink: /kb/213/Q213004/
---

## Q213004: SMS: Windows Networking Logon Client Installation and Discovery

	Article: Q213004
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 04-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article compares the Windows Networking Logon Discovery method to the
	Windows Networking Logon Client Installation method.
	
	MORE INFORMATION
	================
	
	When you use either the Windows Networking Logon Discovery method or the Windows
	Networking Logon Client Installation method, the "Keep logon point lists for
	discovery and installation synchronized" option is available by default. This
	option ensures that the domain entries in the Logon Points list are the same for
	both the Windows Networking Logon Discovery and Windows Networking Logon Client
	Installation methods.
	
	Windows Networking Logon Discovery
	----------------------------------
	
	To enable Windows Networking Logon Discovery, follow these steps:
	
	1. In the Systems Management Server (SMS) Administrator console, click to expand
	  the Site Settings folder.
	
	2. Click to expand Discovery Methods.
	
	3. Right-click "Windows Networking Logon Discovery", and then click Properties.
	
	4. Click General, and then click to select "Enable Windows Networking Logon
	  Discovery".
	
	  NOTE: If you install the site server by using the Express Setup option, this
	  discovery method is available by default. The "Keep Logon Point Lists for
	  Discovery and Installation Synchronized" option is enabled by default. If you
	  intend to use this discovery method to discover resources only, and not
	  install them, you can click to clear this option.
	
	5. Click New in the Logon Points list of the Properties dialog box, type a
	  domain name, and then click OK to add a Windows NT domain to the list.
	
	  NOTE: Each domain controller in the domain that is specified is installed as a
	  logon point for the SMS site.
	
	Windows Networking Logon Client Installation
	--------------------------------------------
	
	To enable Windows Networking Logon Client Installation, follow these steps:
	
	1. In the SMS Administrator console, click to expand the Site Settings folder.
	
	2. Click to expand "Client Installation Methods".
	
	3. Right-click "Windows Networking Logon Client Installation", and then click
	  Properties.
	
	4. Click the General tab, and then click to select "Enable Windows Networking
	  Logon Client Installation".
	
	  NOTE: If you install the site server with the Express Setup option, this
	  installation method is available by default.
	
	5. Click New in the Logon Points list, type a domain name, and then click OK to
	  add a Windows NT domain to the list.
	
	  NOTE: Each domain controller in the domain that is specified is installed as a
	  logon point for the SMS site.
	
	6. Click OK to begin the site configuration process and to install the logon
	  point.
	
	Results of Enabling and Disabling Windows Networking
	----------------------------------------------------
	
	The following examples describe what occurs when you enable and disable the
	Windows Networking Logon options.
	
	Example One
	-----------
	
	When you enable both Windows Networking Logon Client Installation and Windows
	Networking Logon Discovery, if you specify a domain, Logon Server Manager
	creates the SMSLogon share on all domain controllers, and then copies the files
	that are needed to support both the discovery and the installation.
	
	Example Two
	-----------
	
	When you disable Windows Networking Logon Client Installation, and enable Windows
	Networking Logon Discovery, if you specify a domain, Logon Server Manager
	creates the SMSLogon share on all domain controllers, and then copies only the
	files that are needed for logon discovery. The Logon Discovery Agent is then
	created and it starts on all domain controllers only when the discovery method
	is available.
	
	Example Three
	-------------
	
	When Windows Networking Logon Client Installation is enabled, and Windows
	Networking Logon Discovery is disabled, if you specify a domain, Logon Server
	Manager creates the SMSLogon share on all domain controllers, and then copies
	only the files that are needed for logon installation.
	
	Example Four
	------------
	
	When both Windows Networking Logon Client Installation and Windows Networking
	Logon Discovery are disabled, no logon points are created on the specified
	domains.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
