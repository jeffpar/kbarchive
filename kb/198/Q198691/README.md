---
layout: page
title: "Q198691: SMS: Forcing Changes in RC Settings to 32-bit Clients"
permalink: /kb/198/Q198691/
---

## Q198691: SMS: Forcing Changes in RC Settings to 32-bit Clients

	Article: Q198691
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbClient kbRemote kbsms200 kbRemoteProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When settings are changed at the site for the Systems Management Server Remote
	Control Agent, some of these changes are not automatically implemented at
	existing clients in the site. In particular, the protocol, the compression type,
	and the video acceleration are not changed on existing clients. Newly installed
	clients will get current settings for the Remote Control Agent.
	
	MORE INFORMATION
	================
	
	This action is by design. You can, however, force an update on clients by using
	any of the following methods:
	
	- At the client, start Control Panel and double-click the Systems Management
	  icon to initiate a component reinstallation. On the Components tab, click the
	  Remote Control component, and then click the Repair Installation button. When
	  the agent is reinstalled on the client, it will receive the current settings.
	
	- At the client, run the following command line:
	
	  %WinDir%\MS\SMS\CLICOMP\REMCTRL\RCHWCFG.EXE install
	
	  This will cause the current settings for the items listed above to be
	  refreshed. This option can also be implemented using the software
	  distribution capabilities of Systems Management Server.
	
	- Use Systems Management Server Administrator to disable the remote tools
	  client agent, wait for the component to be removed on the clients. (The
	  client becomes active and uninstalls the agent at the next polling interval,
	  every 23 hours.) Change the settings as appropriate and enable the agent so
	  that the clients will reinstall that component and receive the current
	  settings.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q198717 SMS: Client Requirements for Remote Control
	
	You can also find information in the online Help topics:
	
	- Remote Tools Client Agent Properties Dialog Box: Advanced Tab
	
	- Changing Advanced Tab Settings for Existing Clients
	
	
	Additional query words: prodsms RC32
	
	======================================================================
	Keywords          : kbClient kbRemote kbsms200 kbRemoteProg 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
