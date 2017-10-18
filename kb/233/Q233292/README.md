---
layout: page
title: "Q233292: SMS: SMS 2.0 Control Panel Applet Repair Button Doesn't Fix R/C"
permalink: kb/233/Q233292/
---

## Q233292: SMS: SMS 2.0 Control Panel Applet Repair Button Doesn't Fix R/C

	Article: Q233292
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbsms200 kbsms200bug
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Repair Component button in the Systems Management Server Control Panel
	applet fails to repair Systems Management Server Remote Control Tools after a
	third party tool has been removed.
	
	CAUSE
	=====
	
	If third party Remote Tools are detected during client installation, client
	installation sets Systems Management Server Remote Tools registry entries to Not
	Available. The Systems Management Server control panel applet cannot Repair
	Components marked Not Available.
	
	WORKAROUND
	==========
	
	IMPORTANT: This article contains information about modifying the registry.
	Before you modify the registry, make sure to back it up and make sure that you
	understand how to restore the registry if a problem occurs. For information
	about how to back up, restore, and edit the registry, click the following
	article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	TO install Systems Management Server tools on clients with third-party remote
	tools:
	
	1. First, completely remove the third party tool.
	
	2. Open the Registry Editor, Regedit.
	
	3. Go to the following registry key:
	  HKEY_Local_Machine\Software\Microsoft\SMS\Client\Client Components\Remote
	  Control\Installation Properties\.
	
	4. Edit the string value Systems Management Server Client Installation
	  Properties. Change it from Not Available to Installed.
	
	5. Exit Registry Editor.
	
	6. Go to the Control Panel applet and select Remote Control.
	
	7. Click Repair. The status should change from Installed to Repair Pending.
	
	8. To clear the Repair Pending restart the system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0. This problem has been corrected in the latest U.S. service pack for
	Systems Management Server version 2.0. For information on obtaining the service
	pack, query on the following word in the Microsoft Knowledge Base (without the
	spaces):
	
	  S E R V P A C K
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200
	Version           : winnt:2.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
