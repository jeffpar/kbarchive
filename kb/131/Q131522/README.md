---
layout: page
title: "Q131522: PC WSPLUS: Schedule+ Dynamic Connections Not Work w/Novell NDS"
permalink: /kb/131/Q131522/
---

## Q131522: PC WSPLUS: Schedule+ Dynamic Connections Not Work w/Novell NDS

	Article: Q131522
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	1.00 1.00a
	WINDOWS
	kb3rdparty kbnetwork
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, and you
	attempt to access a .CAL file on another postoffice with only Novell NetWare
	Directory Services (NDS) enabled, you may experience the following error
	message:
	
	  The Schedule file could not be opened. You may not have the necessary access
	  privileges or the file may be unavailable.
	
	Schedule+ Dynamic Connections will fail and cannot connect to the server.
	
	CAUSE
	=====
	
	Schedule+ will not work with NDS alone. The NetWare API calls made by Schedule+
	expect a bindery user or bindery type of log in.
	
	NOTE: Bindery in Novell is the name of the security files used in NetWare 2.x and
	3.x servers.
	
	RESOLUTION
	==========
	
	Enable Bindery Emulation on all servers and workstations participating in
	Schedule+ Dynamic Connections.
	
	MORE INFORMATION
	================
	
	Schedule+ Schedule Distribution also requires that Bindery Emulation be
	enabled.
	
	You can use either the VLM or NETX to attach to a version 3.11 or 4.x server with
	Bindery Emulation. NETX will not work against a 4.x server without Bindery
	Emulation.
	
	
	Additional query words: schedule plus 1.00 1.00a Novell file cannot be opened
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
