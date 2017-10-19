---
layout: page
title: "Q164524: How to Enable the DHCP Logging Feature in Windows NT 4.0 SP 2"
permalink: /kb/164/Q164524/
---

## Q164524: How to Enable the DHCP Logging Feature in Windows NT 4.0 SP 2

	Article: Q164524
	Product(s): Microsoft Windows NT
	Version(s): 4.0,4.0 SP2
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 4.0, 4.0 SP2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT Server 4.0 Service Pack 2 includes a new feature, DHCP Logging. This
	activity log feature creates a text log file of all DHCP server activity.
	
	MORE INFORMATION
	================
	
	To enable this feature, perform the following steps:
	
	1. Go to DHCP Manager.
	
	2. Select the DHCP server that you want to enable logging on.
	
	3. On the Server menu, click Properties.
	
	4. Click to select the Enable DHCP Logging check box.
	
	
	The path to the log file is Windir%\System32\Dhcp\Dhcpsrv.log. When the activity
	log feature is enabled, this file will be kept open by DHCP server while the
	server is running. To delete the activity log file, you must first stop the DHCP
	Server service by typing the following at a command prompt:
	
	  NET STOP DHCPSERVER
	
	If available disk space becomes low, the activity log will pause until sufficient
	disk space becomes available to continue.
	
	You must also stop and restart the DHCP Service after enabling or disabling
	Logging, Superscopes, or DHCP Decline support.
	
	Additional query words: prodnt sp sp2
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400sp2 kbWinNTS400search kbWinNTS400
	Version           : :4.0,4.0 SP2
	Issue type        : kbhowto
	
	=============================================================================
	
