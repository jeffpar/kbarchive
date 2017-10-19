---
layout: page
title: "Q263370: SMS: Hardware Inventory Agent on Windows 9x Is Not Re-Enabled"
permalink: /kb/263/Q263370/
---

## Q263370: SMS: Hardware Inventory Agent on Windows 9x Is Not Re-Enabled

	Article: Q263370
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:2.0 SP1,2.0 SP2
	Operating System(s): 
	Keyword(s): kbsetup kbsms200 kbsms200bug kbsms200preSP3
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 2.0 SP1, 2.0 SP2 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you uninstall the Systems Management Server (SMS) client, reinstall the
	SMS client, and then upgrade the SMS client from Service Pack 1 (SP1) to Service
	Pack 2 (SP2) without restarting the client computer, hardware inventory on the
	Microsoft Windows 9x clients is not re-enabled.
	
	In Systems Management Server in Control Panel on the client computer, the
	Hardware Inventory Agent component remains in the status of "Reboot Required."
	
	When you run the Smsls.bat file, you receive an error message that the Clilog.dll
	file was not found.
	
	CAUSE
	=====
	
	When you uninstall the SMS client, some files are only removed after you restart
	the computer. If you do not restart the computer, the files are not removed.
	When you re-install the SMS client, new components are installed. When you
	upgrade from SP1 to SP2, the Hardware Inventory Agent is disabled and marked to
	be restarted. When you restart the computer, the files from the original
	uninstallation procedure are removed and so are the files from the upgraded
	installation. The Hardware Inventory Agent is not re-enabled because the enabler
	cannot find the Clilog.dll file. Because the re-enabler runs only once, the
	Hardware Inventory Agent is not re-enabled.
	
	WORKAROUND
	==========
	
	When you uninstall the SMS client components by using the Systems Management
	Installation Wizard (Smsman.exe) or the 20clicln.bat file, restart the computer
	to complete the uninstallation procedure. After you restart the computer, you
	can install the client normally.
	
	You can also manually repair the Hardware Inventory Agent in Control Panel.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words: prodsms
	
	======================================================================
	Keywords          : kbsetup kbsms200 kbsms200bug kbsms200preSP3 
	Technology        : kbSMSSearch kbSMS200SP1 kbSMS200SP2
	Version           : winnt:2.0 SP1,2.0 SP2
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
