---
layout: page
title: "Q304588: SMS: No Mouse or Keyboard When You Remotely Control SMS Client"
permalink: /kb/304/Q304588/
---

## Q304588: SMS: No Mouse or Keyboard When You Remotely Control SMS Client

	Article: Q304588
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0,2.0 SP3
	Operating System(s): 
	Keyword(s): kbenv kbtool kbsms200 kbsms200bug
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After you establish a Systems Management Server (SMS) remote control session to
	a client computer, you may lost mouse and keyboard functionality, but you may
	still be able to view the remote desktop.
	
	CAUSE
	=====
	
	This problem can occur after the SMS client is removed. When this happens, the
	mouse and keyboard drivers for SMS remote control may not have been removed
	correctly. When the SMS client is then re-installed, the SMS remote control
	information that is left behind from the previous installation can prevent the
	proper re-installation of the drivers. This incomplete removal can happen during
	operating system upgrades or manual client removals.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem:
	
	1. Uninstall the SMS client by using the 20clicln.bat tool from the SMS support
	  tools that you can obtain from the Microsoft Web site.
	
	2. After you remove the SMS client, use Registry Editor to delete the following
	  registry key:
	
	  HKEY_LOCAL_MACHINE\System\CUrrentControlSet\Services\Wuser32
	
	3. Reinstall the SMS client.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Systems Management Server
	version 2.0.
	
	Additional query words: prodsms rc
	
	======================================================================
	Keywords          : kbenv kbtool kbsms200 kbsms200bug 
	Technology        : kbSMSSearch kbSMS200 kbSMS200SP3
	Version           : :2.0,2.0 SP3
	Issue type        : kbbug
	
	=============================================================================
	
