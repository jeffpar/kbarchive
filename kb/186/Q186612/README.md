---
layout: page
title: "Q186612: Use Installation Mode to Install New Drivers on Terminal Server"
permalink: /kb/186/Q186612/
---

## Q186612: Use Installation Mode to Install New Drivers on Terminal Server

	Article: Q186612
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you need to install additional hardware on an existing Terminal Server,
	Microsoft recommends that you use Installation mode, not Execution mode.
	
	MORE INFORMATION
	================
	
	The standard Terminal Server mode is Execution mode. The server starts in
	Execution mode when you start the system. The system is not operating in a
	global fashion when it is in Execution Mode. That is, the system expects many
	concurrent user sessions. This requires that the system keep sessions completely
	separate from each other, including the user at the system console. For
	instance, every user has a Windows and Windows\System directory that no one else
	uses. If an application requests the location of the system root, the system
	will point the application to the user's Windows directory rather than the
	actual Terminal Server system root. This is appropriate for application use, but
	not for installation. Differences like this can cause a hardware device
	installation to complete successfully but fail for users other than the
	administrator, who installed the device. In the worst case, the device will fail
	for everyone.
	
	In Installation Mode the system acts like a Windows NT Server, in most ways. The
	system expects that you are installing a device or an application for global
	access.
	
	
	To install a device using Installation mode, open a command prompt and enter the
	command, CHANGE USER /INSTALL. Then install your device. Return to the command
	prompt after installation, and enter CHANGE USER /EXECUTE. If the device
	installation requires you to reboot the server, doing so will place the server
	back in Execution mode.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
