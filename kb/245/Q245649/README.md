---
layout: page
title: "Q245649: SMS: License Server Manager Causes Full Synchronization Requests"
permalink: kb/245/Q245649/
---

## Q245649: SMS: License Server Manager Causes Full Synchronization Requests

	Article: Q245649
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbnetwork kbtool kbsms200 kbsms200bug kbsms200sp2fixkbfixlist
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Systems Management Server (SMS) License Server Manager (a thread of the SMS
	Executive), is responsible for maintaining Software Metering Servers on a
	reoccurring basis. If the following conditions exist, License Server Manager
	causes Microsoft Windows NT-based Backup Domain Controllers (BDCs) to request
	full synchronizations of the SAM, BUILTIN, and LSA databases every 15 minutes:
	
	- The SMS Site Server is a Windows NT-based BDC.
	
	- The SMS Site Server is configured as a Software Metering Server.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Systems Management
	Server version 2.0. For additional information, click the following article
	number to view the article in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	
	
	WORKAROUND
	==========
	
	To work around this problem, remove the SMS Software Metering role from your
	Windows NT-based BDCs. Note that if Software Metering is desired in a site, you
	can configure a member server for that role and specify a local account on that
	member server in place of a domain account.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem was first corrected in Systems Management Server
	version 2.0 Service Pack 2.
	
	MORE INFORMATION
	================
	
	To install the hotfix, use the appropriate method.
	
	Using the Hotfix Installer
	--------------------------
	
	NOTE: This method is only for I386-based computers.
	
	1. Copy the hotfix folder structure to a share on your network. Q245649.exe is a
	  Microsoft Windows Installer file that updates specific files on your site
	  server.
	
	2. Log on to your site server by using an account with administrative
	  privileges.
	
	3. On the site server, quit the Systems Management Server Administrator console.
	
	4. Run Q245649.exe, and then follow the instructions in the wizard. You can run
	  the file in Quiet mode by using the /s switch.
	
	Manual Installation
	
	-------------------
	
	1. Quit the Systems Management Server Administrator console and stop all SMS
	  services.
	
	2. Replace the Licsvcfg.dll file in the
	  <sms_root_directory>\bin\<platform_name> folder on your site
	  server with the version obtained from the hotfix, where
	  <sms_root_directory> is your SMS root directory, and
	  <platform_name> is the appropriate platform.
	
	3. Restart the SMS services.
	
	Additional query words: prodsms license full sync bdc
	
	======================================================================
	Keywords          : kbnetwork kbtool kbsms200 kbsms200bug kbsms200sp2fix kbfixlist
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : winnt:2.0,2.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
