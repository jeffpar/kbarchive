---
layout: page
title: "Q257262: SMS: Subfolders Under CAP Share Folder Are Not Created"
permalink: kb/257/Q257262/
---

## Q257262: SMS: Subfolders Under CAP Share Folder Are Not Created

	Article: Q257262
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP1
	Operating System(s): 
	Keyword(s): kbsms200
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP1 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	Not all client access point (CAP) subfolders are created when assigning the
	Client Access Point site system role to a server.
	
	CAUSE
	=====
	
	If the CAP site system role was previously incompletely removed from a server,
	and the server later is reassigned the site system CAP role, a new
	CAP_<sitecode> share must be created. More than 10 folders must be created
	under the CAP_<sitecode> share. If the initial CAP removal process is
	incomplete, all of the subfolders may not be created with the new CAP role
	assignment.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	During the Site System CAP Role Removal, SMS creates a registry value in
	HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Inbox Source
	
	called
	Reserved "Inbox Remove Requested".
	
	To work around this issue, remove the registry value
	HKEY_LOCAL_MACHINE\Software\Microsoft\SMS\Inbox Source
	"Inbox Remove Requested" in Reserved.
	
	MORE INFORMATION
	================
	
	If the Site Removal is performed successfully, the "Inbox Source" key is
	removed. If this key is not removed, when performing a new installation, it
	prevents an Inbox Manager from creating the proper CAP subfolders. If logging is
	enabled, Inboxmgr.log shows the following message:
	
	  Found 49 inboxes that need to be deinstalled.
	  SMS_INBOX_MANAGER Fri Dec 17 18:02:16.791 1999 Eastern Standard
	  Time><thread=320 (0x140) Removing inbox Site Control Manager (Master
	  Site Control File) from the site server... $$ SMS_INBOX_MANAGER Fri Dec 17
	  18:02:16.791 1999 Eastern Standard Time thread=320 (0x140) ~Skip site server
	  inbox Site Control Manager (Master Site Control File) $$SMS_INBOX_MANAGER Fri
	  Dec 17 18:02:16.807 1999 Eastern Standard Time thread=320 (0x140) Removing
	  inbox Site Component Manager from the site server... $$ SMS_INBOX_MANAGER Fri
	  Dec 17 18:02:16.807 1999 Eastern Standard Time thread=320 (0x140)
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP1
	Version           : :2.0,2.0 SP1
	Issue type        : kbprb
	
	=============================================================================
	
