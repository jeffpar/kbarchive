---
layout: page
title: "Q85182: Bridged Novell Idle-Time Disconnect Hangs Windows 3.1"
permalink: /kb/085/Q85182/
---

## Q85182: Bridged Novell Idle-Time Disconnect Hangs Windows 3.1

{% raw %}

	Article: Q85182
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are running Windows, and are connected to a bridged Novell network,
	leaving the machine idle may result in the following error message:
	
	  Error reading from network
	
	At this point the machine will probably be locked up, and you will have to reboot
	the computer. If you encounter this error message outside of Windows, you will
	likely be able to choose Abort from the error message options, save your work,
	and reconnect to the network. This is not possible when the network disconnects
	when Windows 3.1 is running.
	
	This problem is likely caused by using Watchdog, provided with Novell NetWare
	version 3.11.
	
	MORE INFORMATION
	================
	
	If you are using a bridged network and leave the system inactive for longer than
	15 to 20 minutes, Watchdog will disconnect the bridge. When this happens,
	Windows 3.1 will hang.
	
	There is no way to turn watchdog off. The only solution is to set all of
	Watchdogs time-out settings to their maximum. This should allow the machine to
	sit idle for 15 hours before disconnecting from the network.
	
	For more information on configuring Watchdog, please contact Novell.
	
	The Watchdog product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10 3.11 err msg 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
