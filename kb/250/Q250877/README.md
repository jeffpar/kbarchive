---
layout: page
title: "Q250877: Problem Changing Domains Without Rebooting Within 10 Minutes"
permalink: kb/250/Q250877/
---

## Q250877: Problem Changing Domains Without Rebooting Within 10 Minutes

	Article: Q250877
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing a workstation or server from one domain to another in the Network tool
	in Control Panel and then waiting more than 10 minutes to reboot can cause the
	following error message when you log in to the new domain:
	
	  The system cannot log you on to this domain because the system's computer
	  account in its primary domain is missing or the password on that account is
	  incorrect.
	
	CAUSE
	=====
	
	The Netlogon service runs a scavenger thread every 10 minutes. One of the
	functions of this thread is to reset the machine account password if the thread
	discovers that it is the default password. When this occurs, Netlogon changes
	the password on the domain controller with which it currently has the secure
	channel. Because the computer has not been rebooted yet, the password is changed
	through the initial domain. When the computer is finally rebooted, it attempts
	to use the password that it established with the initial domain. This does not
	succeed because this password is not accepted by the new domain.
	
	RESOLUTION
	==========
	
	To avoid this problem, reboot the computer as soon as possible.
	
	MORE INFORMATION
	================
	
	This is only an issue when you switch from one domain to another. Switching from
	a workgroup to a domain does not cause this behavior because the Netlogon
	service does not run while a computer is a member of a workgroup.
	
	The password is reset as soon as possible to prevent another computer from using
	an account that has a well-known password.
	
	
	Additional query words: 5722 3210 enterprise administrator ea migration
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
