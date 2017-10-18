---
layout: page
title: "Q293117: SMS: Client Install Fails Due to Pending Client Deinstallation"
permalink: kb/293/Q293117/
---

## Q293117: SMS: Client Install Fails Due to Pending Client Deinstallation

	Article: Q293117
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kberrmsg kbsetup kbClient kbConfig kbsms200 kbUpgrade
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	New client installations are not successful when you use Logon Installation or
	Windows NT Remote Client installation. If you review the Wnmanual.log,
	Wn_logon.log, or Wn_remote.log in the %SystemRoot%\MS\SMS\Logs folder, the
	following error message is logged:
	
	  Client deinstall flag set - no new assignments will be processed.
	
	CAUSE
	=====
	
	This behavior occurs because the client computer has the following registry key
	value that prevents SMS from installing SMS Client components:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Configuration\Client
	  Properties\SMS Client Deinstall=True
	
	WORKAROUND
	==========
	
	To work around this behavior:
	
	1. Run the 20clicln.bat file to remove SMS Client components and registry keys.
	
	2. Run either the Smsman.exe or Smsls.bat program, or if you are using Windows
	  NT Remote Client installation, allow any pending Client Configuration
	  Requests (CCR) to retry. Pending requests are located in the
	  \SMS\inboxes\ccrretry.box folder on the site server.
	
	MORE INFORMATION
	================
	
	For additional information about methods to deinstall the client, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q199078 SMS: How to Remove a Systems Management Server 2.0 Client
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kberrmsg kbsetup kbClient kbConfig kbsms200 kbUpgrade 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3
	Version           : :2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
