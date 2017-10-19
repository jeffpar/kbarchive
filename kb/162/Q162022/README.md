---
layout: page
title: "Q162022: SMS: Client Inventory Fails After Applying SMS 1.2 SP1"
permalink: /kb/162/Q162022/
---

## Q162022: SMS: Client Inventory Fails After Applying SMS 1.2 SP1

	Article: Q162022
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2 SP1,2.0
	Operating System(s): 
	Keyword(s): kbnetwork kbInventory smsinvkbfixlist
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2 SP1, 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After applying Systems Management Server 1.2 Service Pack 1, client inventory
	that previously functioned correctly while running Smsls or Runsms.bat may stop
	responding at three to four percent during client inventory. A verbose output of
	the inventory agent shows different messages, based on the type of client.
	
	Client computers running Windows 3.1, Windows for Workgroups, or Windows 95
	running the Smsls.scr logon script from a NetWare logon server will see the
	following message:
	
	  Found Path to SMS.INI
	  Found Path to DOMAIN.INI
	  Cannot find \\<Netware Logon Server>\SYS\SMS\LOGON.SRV\DOMAIN.INI
	  Inventory cannot be taken
	
	A client computer running Windows for Workgroups logging into a Windows NT Server
	domain will see the following message:
	
	  Found path to domain.ini
	
	The client may also experience the following error immediately after the
	message:
	
	  An unexpected network error has occurred.
	
	CAUSE
	=====
	
	The client is looking for the Domain.ini file on a randomly selected server,
	rather than the current server.
	
	WORKAROUND
	==========
	
	To work around this problem, replace the Initmain.exe file from Systems
	Management Server 1.2 Service Pack 1 with the version on the Systems Management
	Server 1.2 compact disc, by copying it to the following directory:
	
	  Sms\Site.srv\Maincfg.box\Client.src\X86.bin
	
	The file will be automatically copied to the logon servers' Sms\Logon.srv\X86.bin
	directory during the next watchdog cycle. To speed up the process, you can
	manually copy the file to the Sms\Logon.srv\X86.bin directory on all Systems
	Management Server logon servers.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 1.2 Service Pack 1.
	
	
	A supported fix is now available, but is not fully regression-tested and should
	be applied only to systems experiencing this specific problem. Unless you are
	severely impacted by this specific problem, Microsoft recommends that you wait
	for the next Service Pack that contains this fix. Contact Microsoft Technical
	Support for more information.
	
	
	Additional query words: prodsms nw login failure
	
	======================================================================
	Keywords          : kbnetwork kbInventory smsinv kbfixlist
	Technology        : kbSMSSearch kbSMS200 kbSMS120SP1
	Version           : :1.2 SP1,2.0
	Issue type        : kbbug
	
	=============================================================================
	
