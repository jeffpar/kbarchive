---
layout: page
title: "Q240142: How to Prevent User Validation on a Specific Domain Controller"
permalink: /kb/240/Q240142/
---

## Q240142: How to Prevent User Validation on a Specific Domain Controller

	Article: Q240142
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A network administrator may need to prevent users from having their credentials
	validated by a specific domain controller for maintenance or troubleshooting
	purposes. This article describes how to prevent user logon validation from a
	single server.
	
	MORE INFORMATION
	================
	
	To prevent a domain controller from validating users' credentials:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click the Net Logon service, click Pause, and then click Yes.
	
	To reset the Net Logon service on a domain controller that is paused:
	
	1. Click Start, point to Settings, click Control Panel, and then double-click
	  Services.
	
	2. Click the Net Logon service, and then click Continue.
	
	Pausing the Net Logon service does not disconnect any existing sessions, but
	prevents any other users from logging on and establishing a new connection.
	Pausing the service after the computer has started allows a backup domain
	controller (BDC) to set up a secure channel with the primary domain controller
	(PDC) to receive updates to the accounts database.
	
	When you connect to shares on a BDC with a paused Net Logon service, validation
	is carried out locally at the BDC, not forwarded to another domain controller or
	the PDC. This applies only to the validation of users who are gaining direct
	access to resources on a BDC with a paused Net Logon service. The main objective
	of reducing the load on the BDC is met because the workstations and other member
	servers cannot set up a secure channel with the BDC. If you stop the Net Logon
	service instead of pausing it, the BDC does not receive updates from the PDC. In
	this case, a user could be denied access to a local share with a valid password
	after a password change has occurred.
	
	You cannot set the Net Logon service to pause at startup. The service must run
	long enough to establish a secure channel with the PDC. You can automate this
	activity using the AT Scheduler tool to run a "net pause netlogon" (without the
	quotation marks) command after the computer has started. You can also create a
	batch file to run the same command in a loop combined with the Sleep tool from
	the Windows NT 4.0 Resource Kit to set the delay between intervals.
	
	For information about using the AT Scheduler tool, click Start, click Help, click
	the Index tab, type "at" (without the quotation marks), and then click Display.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbhowto
	
	=============================================================================
	
