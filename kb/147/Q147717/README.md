---
layout: page
title: "Q147717: How to Remotely Disable a RAS Port"
permalink: /kb/147/Q147717/
---

## Q147717: How to Remotely Disable a RAS Port

	Article: Q147717
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	You may need to remove a RAS port from service due to a problem such as
	physical port or modem failure. Disabling the port prevents RAS clients
	from dialing in to a bad port and suffering disconnections or lockups.
	However, you may not have physical access to the server to be able to do
	this interactively.  To disable a RAS port remotely:
	
	1. From a remote computer, log into the RAS server with administrative
	  privilege.
	
	2. Connect to the C$ share on the RAS server.
	
	3. Go into the %System Root%\SYSTEM32\RAS directory.
	
	4. Backup the SERIAL.INI file as SERIAL.OLD. Edit the SERIAL.INI file as
	  follows:
	
	5. Locate the entry in the SERIAL.INI file that references the port to be
	  disabled. For example: [COM1] or [COM2] and remove the entire section.
	
	6. From Server Manager, stop and restart the RAS service.
	
	Additional query words: prodnt disabling communication communications ports
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51 4.0
	
	=============================================================================
	
