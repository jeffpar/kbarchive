---
layout: page
title: "Q255980: SMS: Incorrect Domain or Computer Name Added as a Logon Point"
permalink: kb/255/Q255980/
---

## Q255980: SMS: Incorrect Domain or Computer Name Added as a Logon Point

	Article: Q255980
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork kbConfig kbMMC kbServer kbsms200
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	The SMS_NT_LOGON_Server_Manager thread of the SMS Executive service may report
	the following status message in the Systems Management Server (SMS) 2.0
	Administrator console:
	
	  Message ID 4610, SMS_NT_LOGON_SERVER_MANAGER may be experiencing a problem.
	
	If logging is enabled for the SMS_NT_LOGON_Server_Manager thread, the
	NT_Logon.log file (located in the SMS\Logs folder on your site server) may also
	contain the following error message:
	
	  ~NetGetDCName domain: TEST server return: 2453 SMS_NT_LOGON_SERVER_MANAGER
	  ~Warning could not find domain controller for TEST
	  $$SMS_NT_LOGON_SERVER_MANAGER
	
	CAUSE
	=====
	
	These error messages can occur if you add an invalid domain name in Windows
	Networking Logon Discovery or Windows Networking Logon Client Installation
	properties.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Delete the incorrect domain name in the SMS Administrator console:
	
	  a. In the SMS Administrator console, click Client Installation Methods or
	     Discovery Methods.
	
	  b. Click Windows Networking Logon Client Installation or Windows Networking
	     Logon Discovery Method.
	
	  c. Delete the incorrect domain name.
	
	2. Remove the incorrect domain name from the registry:
	
	  a. Start Regedit.exe.
	
	  b. Click the following registry location:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Components\SMS_NT_LOGON_SERVER_MANAGER\DOMAINS
	
	  c. Delete the incorrect domain name key.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbnetwork kbConfig kbMMC kbServer kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0,2.0 SP1,2.0 SP2
	Issue type        : kbprb
	
	=============================================================================
	
