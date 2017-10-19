---
layout: page
title: "Q236052: SMS: Recovering When a Client Connection Account Is Locked Out"
permalink: /kb/236/Q236052/
---

## Q236052: SMS: Recovering When a Client Connection Account Is Locked Out

	Article: Q236052
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbsms200 kbCAP kbsms200preSP3kbfaq
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to recover Systems Management Server (SMS) 2.0
	clients when the SMSClient_<SiteCode> account password is changed and the
	clients are no longer able to connect to a Client Access Point (CAP) server.
	
	This situation can occur if only one client connection account exists and its
	password is changed in User Manager for Domains. Clients store passwords locally
	in an encrypted value in the registry. After the password is changed, clients
	are unable to connect to the CAP to update their configuration with the new
	password.
	
	When you view the Ccim32.log file on the client, the following error message is
	displayed:
	
	  Warning - could not read files from site TB1 (#2147942405)
	  $$<CCIM32><Tue Jan 04 15:19:23.375 2000><thread=112
	  (0x70)>
	  Warning - CNALPathEx::GetAccessiblePath returned error 2147942405
	  $$<CCIM32><Tue Jan 04 15:19:28.613 2000><thread=112
	  (0x70)>
	  CClientSiteCfgArray - Can't get accessible path for site TB1 config info
	  $$<CCIM32><Tue Jan 04 15:19:28.623 2000><thread=112
	  (0x70)>
	  CCIM32 - Retry in 60 minutes $$<CCIM32><Tue Jan 04 15:19:28.663
	  2000><thread=112 (0x70)>
	
	MORE INFORMATION
	================
	
	You can use the following methods to recover from this situation:
	
	- Run Smsman or Smsls on the client.
	
	- Set the "Site Config Last Checked" registry value.
	
	- Enable the guest account on CAP servers.
	
	NOTE: These methods assume that the currently logged on user does not have local
	administrative privileges on the workstation.
	
	Run Smsman.exe or Smsls.bat on the Client
	-----------------------------------------
	
	NOTE: You must enable Windows NT Logon Discovery and/or Windows NT Logon
	Installation to use this method.
	
	1. You can run Smsman.exe to perform an installation, using either of the
	  following methods:
	
	   - Open the \\<LogonPointServer>\smslogon\x86.bin\00000409 folder and
	     run Smsman.exe.
	
	   - Open the %WinDir%\MS\SMS\Core\Bin\00000409 folder locally on the client
	     computer and run Smsman.exe (if a local copy of Smsman.exe is available,
	     you can use it in place of the copy from the logon point server)
	
	2. Uninstall and reinstall the client by running Smsman.exe with the /u switch
	  from either of the following locations:
	
	  \\<LogonPointServer>\smslogon\x86.bin\00000409
	  %WinDir%\MS\SMS\Core\Bin\00000409
	
	  NOTE: This action uninstalls the client from the site. You can also specify
	  the /q switch for quiet mode so no dialog boxes are displayed on the client.
	
	Set the "Site Config Last Checked" Registry Value
	-------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	NOTE: This method causes the client to consider itself an orphan, which causes
	the client to uninstall all SMS components. The next time you run an
	installation, the client is reinstalled.
	
	1. Start Registry Editor.
	
	2. Locate the following registry key on the client:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Client\Sites\Shared\<SiteCode>
	
	  NOTE: Where <SiteCode> is the three-letter site code for your site.
	
	3. Double-click the Site Config Last Checked value and change the date to
	  reflect a value older than 60 days.
	
	4. Stop and start the SMS Client service or restart the workstation.
	
	5. After the client restarts, the SMS components are uninstalled. After this
	  process is finished, run an installation method to reinstall the SMS client.
	
	Enable the Guest Account
	------------------------
	
	This method uses the Windows NT guest account to connect to the CAP server. When
	you use this method, you must enable the guest account for a duration that is
	long enough for the clients to attempt a connection to the CAP.
	
	NOTE: Enabling a guest account creates potential security issues that you should
	carefully consider in your environment. Configure the guest account to have
	access to the CAP servers for only the minimum duration necessary so the SMS
	clients can retrieve the new client connection account information and reinstall
	themselves to the site.
	
	1. Make sure that another client connection account is created in User Manager
	  for Domains and added in the SMS Administrator console under Site
	  Settings|Connection Accounts|Client. For additional information, click the
	  article number below to view the article in the Microsoft Knowledge Base:
	
	  Q237759 SMS: Avoiding Client Lockouts When Using Client Connection Accounts
	
	2. Delete the current SMSClient<SiteCode> account to which the clients
	  cannot connect from User Manager for Domains and from the SMS Administrator
	  console.
	
	3. Enable the guest account on the domain if you have any CAPs that are located
	  on domain controllers, and then place the guest account in the Domain Users
	  group to give that account appropriate permissions to the CAP.
	
	4. Enable the guest account for each member server on which a CAP is located.
	  Place the guest account in the Local Users group on the member server.
	
	5. Disable the guest account after all clients have connected and updated their
	  connection account information.
	
	In SMS 2.0 Service Pack 2 (SP2), the only time you are unable to recover an
	orphaned client with logon, is if the client is orphaned and you upgrade the
	client's site. In this situation, the client runs the logon script, detects that
	it needs to be upgraded, and stops the process (typically waiting until CCIM
	hits the CAP). In this situation, the client either has to wait 60 days before
	it uninstalls itself, or must use another method.
	
	If the site and client are already upgraded to SP2, you can recover an orphaned
	client using the same methods in SP1.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q237759 SMS: Avoiding Client Lockouts When Using Client Connection Accounts
	
	  Q227033 SMS: Changing the SMSClient_SiteCode Password Can Cause Account
	  Lockouts
	
	Additional query words: prodsms hang access denied
	
	======================================================================
	Keywords          : kbenv kberrmsg kbsms200 kbCAP kbsms200preSP3 kbfaq
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1 kbSMS200SP2
	Version           : :2.0,2.0 SP1,2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
