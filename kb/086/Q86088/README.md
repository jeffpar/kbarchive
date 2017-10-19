---
layout: page
title: "Q86088: PC WSPlus: Dynamic Connections Do Not Show Busy Times"
permalink: /kb/086/Q86088/
---

## Q86088: PC WSPlus: Dynamic Connections Do Not Show Busy Times

	Article: Q86088
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may not be able to see users' free and busy times when you use dynamic
	connections to connect to their postoffices.
	
	CAUSE
	=====
	
	This problem can occur in Novell if there are not enough available drive
	mappings to connect to those postoffices. This problem can also occur if you do
	not have enough available drives to connect with all the different postoffices.
	
	MORE INFORMATION
	================
	
	Novell 2.2 and 3.1 users can use the full alphabet for drive mappings (including
	mapping Novell resources over local resources) but are limited to eight server
	attachments when using NETX.COM or NET.EXE. This means Novell users can have any
	number (up to 26) of letters mapped to any available directory resources on up
	to eight Netware servers. Schedule+ can make dynamic connections to other
	postoffices, retrieve meeting data as needed, and break the connection when it
	is no longer needed.
	
	So, if six server connections are already in use and a meeting list with three
	users from three postoffices on three unconnected servers is created, one of the
	three user names shows up with a gray check mark next to it, indicating that
	information from that server is not available. This is because Schedule+ made
	two additional connections dynamically, then tried to make the last one and ran
	into the limit. This limit is fixed in Novell version 4.0 and later.
	
	Microsoft's LAN Manager and other MS-NET compatible networks are limited to the
	LASTDRIVE setting in the user's CONFIG.SYS file for a maximum of 23 network
	connections.
	
	If there is at least one available mapping, the user's schedule can be seen by
	removing the user from the meetings list, removing other users from different
	postoffices from the meeting list, closing the meetings dialog box and reopening
	it before adding the user back in. When you add the user a second time, the
	dynamic connection is attempted again.
	
	Additional query words: schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
