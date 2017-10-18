---
layout: page
title: "Q257202: SMS: SP2 Functional Change in Processing Logon Point Updates"
permalink: kb/257/Q257202/
---

## Q257202: SMS: SP2 Functional Change in Processing Logon Point Updates

	Article: Q257202
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP2
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug kbsms200sp2fix
	Last Modified: 08-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Previous to Service Pack 2 (SP2), Logon Server Manager watches the
	Sms\Inboxes\Nt_logon.box\Locks folder for notifications of changes that are
	supposed to trigger logon point updates. Merely "touching" this folder, rather
	than making an actual change, triggers a full update. For example, if you open
	the folder in Windows Explorer, a full update results.
	
	With SP2 and later, Logon Server Manager does not watch Nt_logon.box for folder
	notifications and then assume an update cycle is required when it receives a
	notification. Instead, it watches a new subfolder named Notify under
	Nt_logon.box. When it receives a notification, it checks for the existence of a
	file named Nt_logon.not. Only then does it assume that a PCF file change has
	occurred and initiate an update. Both Logon Discovery and Logon Client
	Installation have been modified to create this file when they update their
	respective PCF files.
	
	If you want to force a logon point update, the only way to do this is to manually
	create the notification file in the Notify folder.
	
	For additional information on how to obtain the latest Systems Management Server
	2.0 service pack, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q236325 How to Obtain the Latest Systems Management Server 2.0 Service Pack
	
	MORE INFORMATION
	================
	
	On Microsoft Windows NT 4.0-based sites, opening the Locks folder in Windows
	Explorer can cause a logon point update. If it remains open, the updates run
	continuously.
	
	On Microsoft Windows 2000-based sites, the Windows NT 4.0 behavior occurs, but
	the Software Inventory agent also causes logon point updates.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug kbsms200sp2fix 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : winnt:2.0 SP2
	Issue type        : kbinfo
	
	=============================================================================
	
