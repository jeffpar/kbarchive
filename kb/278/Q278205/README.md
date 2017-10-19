---
layout: page
title: "Q278205: SMS: Keyboard Problems with IntelliPoint Mouse Driver 3.1 or 3.2"
permalink: /kb/278/Q278205/
---

## Q278205: SMS: Keyboard Problems with IntelliPoint Mouse Driver 3.1 or 3.2

	Article: Q278205
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0 SP2
	Operating System(s): 
	Keyword(s): kbenv kbhw kbtool kbsms200 kbsms200bug kbHardware
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 SP2 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When a Microsoft Windows NT 4.0-based or Microsoft Windows 2000-based computer
	is configured to use the Microsoft IntelliPoint version 3.1 or 3.2 mouse
	software, the following symptoms may occur:
	
	- The NUM LOCK and CAPS LOCK keys do not function after a Systems Management
	  Server (SMS) client (with the Remote Control Client agent enabled) is
	  restarted twice.
	
	- The keyboard is reset to a 101-key keyboard.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this issue, edit the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\Kbstuff
	
	Change the TAG value from its current setting (usually 3) to 5, and then restart
	the computer to restore normal functionality.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbenv kbhw kbtool kbsms200 kbsms200bug kbHardware 
	Technology        : kbSMSSearch kbSMS200SP2
	Version           : :2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
