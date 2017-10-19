---
layout: page
title: "Q217044: SMS: Server Uninstall Doesn't Remove All Components"
permalink: /kb/217/Q217044/
---

## Q217044: SMS: Server Uninstall Doesn't Remove All Components

	Article: Q217044
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	When you use Systems Management Server 2.0 Setup to uninstall a site server, all
	components are not removed.
	
	The following registry entries remain on your site server:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SMSPerfCountersForC:_SMSLOGON_I386_SMSPERF.DLL
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\SMSPerfCountersForC:_SMS_BIN_I386_SMSPERF.DLL
	
	  HKEY_LOCAL_MACHINE \Software\Microsoft\SMS
	
	  HKEY_LOCAL_MACHINE \Software\Microsoft\NAL
	
	  HKEY_LOCAL_MACHINE \Software\Microsoft\WBEM
	
	The following directories remain on the site server:
	
	  Winnt\System32\Wbem
	
	  SMSLogon
	
	The following accounts remain in User Manager for Domains:
	
	  SMSClient_<sitecode> (client network connection account)
	
	  SMSCliToknAcct& (System Management internal group account)
	
	  SMSServer_<sitecode> (server network connection account)
	
	  SMSService (System Management site server account)
	
	NOTE: If you do not delete the accounts listed above from User Manager for
	Domains, the site server might not become a Systems Management Server client
	when you reinstall.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To delete these remaining components and complete the removal of the Systems
	Management Server installation, follow this procedure:
	
	1. Click Run on the Start menu and run Regedt32.exe.
	
	2. Perform the following steps to delete each of the keys listed in the SUMMARY
	  section of this article:
	
	  a. Click on the key to select it.
	
	  b. On the Edit menu, click Delete.
	
	  c. Click Yes to confirm the deletion of the key.
	
	3. Delete the Smslogon directory. NOTE: Multiple sites in the same Windows NT
	  domain share this directory.
	
	4. Delete the Wbem folder (only) under Winnt\System32\.
	
	5. Start User Manager for Domains. To do so, point to Programs on the Start
	  menu, then point to Administrative Tools and click User Manager for Domains.
	
	6. Click to select the following accounts:
	
	  SMSClient_<sitecode>
	
	  SMSCliToknAcct&
	
	  SMSServer_<sitecode>
	
	  SMSService (This account may be used by other sites in the same Windows NT
	  domain. If this is the case, do not remove this account.)
	
	7. Click User, click Delete, then click OK to confirm.
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          :  
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbinfo
	
	=============================================================================
	
