---
layout: page
title: "Q246461: How to Prevent Validation on a Backup Domain Controller"
permalink: kb/246/Q246461/
---

## Q246461: How to Prevent Validation on a Backup Domain Controller

	Article: Q246461
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses issues regarding validation on a backup domain
	controller, and how to prevent validation on this backup domain controller.
	
	MORE INFORMATION
	================
	
	You can prevent validation on a specific backup domain controller by pausing the
	Netlogon service. The backup domain controller does not allow any new
	connections, but it does not disconnect any existing connections.
	
	When users attempt to directly obtain access to resources on the backup domain
	controller with the paused Netlogon service, validation occurs locally at that
	backup domain controller, and is not forwarded to any other domain controller.
	So pausing the Netlogon service on a particular backup domain controller is
	useful for reducing the load on that backup domain controller, because
	workstations and other member servers are not able to set up their secure
	channels with that backup domain controller.
	
	Stopping the service instead of pausing it prevents the backup domain controller
	from receiving updates from the primary domain controller. Pausing it after your
	computer starts permits the domain controller to set up a secure channel with
	the primary domain controller to receive updates to the accounts database. If
	this occurs, users may be unable to obtain access with valid passwords after a
	password change has occurred.
	
	You cannot set the Netlogon service to pause on startup, and it would be
	inadvisable to do so because the Netlogon service must run long enough to set up
	a secure channel with the primary domain controller. However, you can automate
	the service to pause after startup by using the AT scheduler to run the NET
	PAUSE NETLOGON command. You can also use the Windows NT Server Resource Kit
	Sleep.exe utility to start a batch file to run this command in a loop, and set
	the delay between intervals.
	
	Additional query words: netlogon load
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
