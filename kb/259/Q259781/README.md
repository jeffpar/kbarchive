---
layout: page
title: "Q259781: SMS: SMS Site Server Upgrade Resets Registry Permissions"
permalink: /kb/259/Q259781/
---

## Q259781: SMS: SMS Site Server Upgrade Resets Registry Permissions

	Article: Q259781
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug kbCAP kbInboxMgr kbsms200preSP3
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you upgrade a Microsoft Windows NT 4.0-based server running Systems
	Management Server (SMS) 2.0 site server to Microsoft Windows 2000, the
	permissions on the HKEY_LOCAL_MACHINE hive of the registry are reset to a
	default setting. This default setting includes removing access for individual
	accounts that have been granted specific permissions. This can affect the
	ability of remote SMS site system computers to connect to the site server.
	
	Services and/or processes on remote site computers (such as Inbox Manager
	Assistant on Client Access Point (CAP) servers and the SMS_SQL_Monitor service
	on remote SQL Server) use the SMS Server Connection Account,
	SMSServer_<xxx> (where <xxx> is the site code) to connect to the
	site server. When the registry permissions are reset during the site server
	upgrade to Windows 2000, the explicit permissions that the SMSServer_<xxx>
	account has been granted to the registry of the site server are removed. This
	results in the inability of this account to connect and can cause slow
	processing of or possibly failures in:
	
	- Collection updates
	- Hierarchy updates
	- Software distributions
	- Other failures
	
	CAUSE
	=====
	
	This problem can occur because the Windows 2000 upgrade program resets some
	registry permissions to default under the HKEY_LOCAL_MACHINE hive as part of the
	enhanced security features in Windows 2000. Because of this, any custom
	permissions that were added to the registry (such as the SMSServer_<xxx>
	account by SMS) are removed.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, manually add the permissions to the registry of the
	site server using the following steps:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the Machine value under the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\SecurePipeServers\winreg\AllowedPaths
	
	3. On the Edit menu, click Multi String, add "Software\Microsoft\SMS" (without
	  the quotation marks) to the existing data, and then click OK.
	
	4. Locate the following registry key:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Inbox Source
	
	5. On the Security menu, click Permissions, and then click Add.
	
	6. Click the SMSServer_<xxx> account from the list of objects in the
	  domain, click Add, click OK, grant the SMSServer_<xxx> account Full
	  Control permissions, and then click OK.
	
	7. Quit Registry Editor.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0 Service Pack 2.
	
	Additional query words: prodsms smsdbmon inboxast remote
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug kbCAP kbInboxMgr kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbbug
	
	=============================================================================
	
