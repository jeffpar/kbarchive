---
layout: page
title: "Q231314: SMS: Description of the Remote Control Gold Key Feature"
permalink: kb/231/Q231314/
---

## Q231314: SMS: Description of the Remote Control Gold Key Feature

	Article: Q231314
	Product(s): Microsoft Systems Management Server
	Version(s): 1.2,1.2 SP1,1.2 SP2,1.2 SP3,2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Operating System(s): 
	Keyword(s): kbtool kbClient kbsms200 kbsms120 kbUpgrade
	Last Modified: 18-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.2, 1.2 SP1, 1.2 SP2, 1.2 SP3, 2.0, 2.0 SP1, 2.0 SP2, 2.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	During a remote control session on Microsoft Windows NT-based clients, you may
	need to perform tasks that are typically available by pressing CTRL+ALT+DELETE.
	These tasks include restarting the workstation, locking the workstation,
	shutting down the workstation, and starting Task Manager. Because this key
	combination is not passed to a remote computer, the Microsoft Systems Management
	Server (SMS) remote control feature includes a way to simulate the
	CTRL+ALT+DELETE key combination on a remote computer.
	
	MORE INFORMATION
	================
	
	To simulate the CTRL+ALT+DELETE key combination during a remote control session,
	you must be using the Remote Control Client Viewer window. Click the Gold Key
	button in the upper-right corner of the Remote Control Client Viewer window. The
	Windows NT Security dialog box opens for the client.
	
	To provide this feature, the SMS client supplements the existing keyboard driver
	with a "hook" that enables the insertion of remote control session keystrokes
	and control sequences into the existing keyboard driver.
	
	NOTE: You must shut down and restart the client system to replace the keyboard
	system driver (Kbstuff.sys). The Gold Key feature may not function or may
	function unreliably until you restart the system. This may be necessary after
	the SMS client is installed or upgraded.
	
	Additional query words: prodsms reboot
	
	======================================================================
	Keywords          : kbtool kbClient kbsms200 kbsms120 kbUpgrade 
	Technology        : kbSMSSearch kbSMS120 kbSMS200 kbSMS120SP2 kbSMS120SP3 kbSMS200SP1 kbSMS200SP2 kbSMS200SP3 kbSMS120SP1
	Version           : :1.2,1.2 SP1,1.2 SP2,1.2 SP3,2.0,2.0 SP1,2.0 SP2,2.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
