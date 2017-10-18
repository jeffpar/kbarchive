---
layout: page
title: "Q238865: SMS: SMSMon32 Process Hangs on Client After Applying SMS 2.0 SP1"
permalink: kb/238/Q238865/
---

## Q238865: SMS: SMSMon32 Process Hangs on Client After Applying SMS 2.0 SP1

	Article: Q238865
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 smssetup
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you upgrade a Systems Management Server (SMS) 2.0 site to Service Pack 1
	(SP1), client computers connected to the site may respond slowly or even appear
	to stop responding (hang). On these computers, the Smsmon32.exe process may be
	taking up most of the CPU processing time and not yielding to other processes.
	
	CAUSE
	=====
	
	The Smsmon32.exe process may hang during client upgrades to SP1 for any of the
	following reasons:
	
	- One or more sites were upgraded in a single domain, multiple-site model. For
	  additional information, see the following article in the Microsoft Knowledge
	  Base:
	
	  Q236596 SMS: Client Components Fail to Install with SMS 2.0 SP1
	
	- When clients from a site that has not been upgraded log on and run the SMS
	  logon script, they receive the updated base components from the SMS logon
	  point. However, when the client connects to the Client Access Point (CAP), a
	  version mismatch (because the CAP is not upgraded) could cause Smsmon32.exe
	  to hang on the client computers.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	When a client receives the version mismatch, a complete removal and
	reinstallation of the SMS client is necessary to correct the problem.
	
	If there are active outstanding advertisements available for the clients when
	they upgrade from SMS 2.0 to SP1, Smsmon32.exe may appear to hang and the client
	computer may need to be restarted.
	
	When the client computers reach this point, a complete removal and reinstallation
	of the SMS client is necessary. After the reinstallation is finished, the client
	has the updated components from the CAP server and functions properly.
	
	If the client computers belong to more than one site, and if one of the sites no
	longer exists, Smsmon32.exe may hang when trying to contact the nonexistent site
	during the upgrade from SMS 2.0 to SP1. To work around this issue:
	
	1. Stop all SMS services on a Windows NT client computer.
	
	2. Edit the registry. Delete the site code of the nonexistent site from the
	  following registry key:
	
	  HKEY_LOCAL_MACHINE\Microsoft\SMS\Client\InstalledSites
	
	3. Start the client services.
	
	MORE INFORMATION
	================
	
	To avoid some of these issues, see the following article in the Microsoft
	Knowledge Base before you upgrade SMS 2.0 to SP1:
	
	  Q238780 Best Practices for Applying SMS 2.0 SP1
	
	For additional information, please click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server Service Pack
	
	  Q237543 SMS: Service Pack Upgrade Considerations for Clients
	
	  Q236596 SMS: Client Components Fail to Install with SMS 2.0 SP1
	
	  Q238864 SMS: Windows 95/98 Clients Stop Responding or Become Unstable After
	  SP1 Upgrade
	
	
	Additional query words: multisite smsfaqtop
	
	======================================================================
	Keywords          : kbsetup kbsms200 smssetup 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbprb
	
	=============================================================================
	
