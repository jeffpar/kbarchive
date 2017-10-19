---
layout: page
title: "Q245838: XADM: How to Stop a Server Monitor from Restarting a Server"
permalink: /kb/245/Q245838/
---

## Q245838: XADM: How to Stop a Server Monitor from Restarting a Server

	Article: Q245838
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a server monitor detects that a monitored service is not running, and the
	action specified on the Actions tab of the monitor is "Restart the computer,"
	the monitored server restarts after the amount of time specified in the Restart
	delay space. During this time, a System Shutdown window opens on the monitored
	server and counts down the time until the server restarts.
	
	While there appears to be no way to stop the server from restarting, you can stop
	the server from restarting by doing one of the methods described in the "More
	Information" section.
	
	NOTE: With these methods, the System Shutdown window continues to count down to
	zero, but after it reaches zero, it disappears and the computer will not
	restart.
	
	MORE INFORMATION
	================
	
	OPTION 1: Stop the Server Monitor
	---------------------------------
	
	If you stop the server monitor on the server that initiated the shutdown, the
	monitored server will not be restarted when the countdown reaches zero.
	
	You can tell which server initiated the shutdown by looking in the System
	Shutdown window on the monitored server. The window contains the following
	text:
	
	  This shutdown was initiated by <Domain>\<ServerName>
	
	OPTION 2: Restart the Monitored Services
	----------------------------------------
	
	If all of the monitored services are restarted before the countdown reaches zero,
	the server will not be restarted. If you can't start one of the monitored
	services, this method obviously won't work.
	
	By default, the monitored services are the Exchange Server directory, information
	store, and message transfer agent. If any other services were added to the
	server monitor, you must restart them as well.
	
	OPTION 3: Disable and Stop the System Attendant
	-----------------------------------------------
	
	If you disable the system attendant on the monitored server and stop it, the
	computer is not restarted when the countdown reaches zero. Be sure to set the
	system attendant to disabled before stopping it. If you stop the system
	attendant on the monitored server without disabling it, the server that
	initiated the shutdown will try to restart the system attendant.
	
	During a planned outage, you can suspend server monitors by running the following
	command:
	
	  "\exchsrvr\bin\admin.exe /t nr" (without the quotation marks)
	
	More information about server monitors can be found in Chapter 3, "Monitoring
	Your Organization," of the Microsoft Exchange Server 5.5 Maintenance and
	Troubleshooting manual or in the Books Online for Exchange Server 5.5.
	
	Additional query words: automatically reboot Link Monitor
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	
