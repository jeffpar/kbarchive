---
layout: page
title: "Q107173: DOCERR: NFY_RIP Not Received in Windows 3.0"
permalink: /kb/107/Q107173/
---

## Q107173: DOCERR: NFY_RIP Not Received in Windows 3.0

{% raw %}

	Article: Q107173
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation on page 652 of the Microsoft Windows version 3.1 Software
	Development Kit (SDK) "Programmer's Reference, Volume 2: Functions" manual about
	NFY_RIP notification being sent to a callback function registered by
	NotifyRegister function is incorrect. The NFY_RIP notification is not received
	in Windows version 3.0.
	
	Note, however, that the documentation in the Windows SDK online Help file
	(WIN31WH.HLP) corrects this error by stating that the NFY_RIP notification is
	received only under Windows version 3.1.
	
	MORE INFORMATION
	================
	
	NotifyRegister() is an application programming interface (API) in the
	TOOLHELP.DLL shipped with Windows 3.1 that can be used by an application to
	obtain system notifications or information on system events. NotifyRegister()
	installs a notification callback procedure associated with a given task that is
	called by Windows on every system event. The callback function receives
	notification on system debugging errors (or system RIPs) only when the NF_RIP
	flag is set. Once the NFY_RIP notification is received, the callback could post
	a message passing the task handle or the notification ID to the main window, and
	let the main message processing take the appropriate action.
	
	The documentation states that the callback function receives a NFY_RIP
	notification on every Fatal Exit message in Windows version 3.0 and later. This
	is not correct, because the callback function does not receive the NFY_RIP
	notification when a Fatal Exit message is generated while running under debug
	version of Windows 3.0. The NFY_RIP notification is received only under Windows
	version 3.1.
	
	Additional query words: 3.10 no32bit docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	

{% endraw %}
