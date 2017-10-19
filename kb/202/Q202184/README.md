---
layout: page
title: "Q202184: Event 5701 Problems with Netlogon Service"
permalink: /kb/202/Q202184/
---

## Q202184: Event 5701 Problems with Netlogon Service

	Article: Q202184
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Event Viewer logs the following entry in the system log:
	
	  Event Id 5701
	  Source: NETLOGON
	  Description: The network service failed to update the domain trust list.
	
	When you open User Manager or Server Manager, the following error is displayed:
	
	  Could not find domain controller for this domain. Do you want to select
	  another domain to administer?
	
	CAUSE
	=====
	
	This problem can be caused by a defective network card or driver.
	
	RESOLUTION
	==========
	
	Reinstall the networking components. If that does not help, install another
	network card.
	
	MORE INFORMATION
	================
	
	Following some basic connectivity troubleshooting may reveal a problem with the
	network card or driver.
	
	If TCP/IP is installed on the computer, run ipconfig/all from a command prompt to
	check the IP configuration. If the IP address is 0.0.0.0, that would give
	further indication to a problem with the network card.
	
	Try other connectivity related troubleshooting, such as ping and net commands, to
	further check for a problem with the network card or driver.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
