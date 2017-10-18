---
layout: page
title: "Q111859: PC WSPlus: Lost Connection to LAN Manager or NetWare Server"
permalink: kb/111/Q111859/
---

## Q111859: PC WSPlus: Lost Connection to LAN Manager or NetWare Server

	Article: Q111859
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you connect to a Novell NetWare or Microsoft LAN Manager server without
	establishing a drive letter to that connection, use Schedule+ to open another
	user's calendar on that server, and then close that calendar (or exits
	Schedule+), the attachment to that server no longer exists.
	
	CAUSE
	=====
	
	Schedule+ does not distinguish between a newly created attachment or universal
	naming convention (UNC) style connection and an old, pre-existing connection.
	Thus, when you close another user's appointment book or exit Schedule+, the
	connection is terminated.
	
	RESOLUTION
	==========
	
	Make sure you map a drive letter to your network connection before you open an
	appointment book.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in version 1.0 and 1.0a of
	Schedule+. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem for NetWare Environments
	---------------------------------------------------
	
	1. Log in to a NetWare file server (ServerA, for example).
	
	2. Either in a login script, or from the an MS-DOS command prompt, connect to
	  another NetWare server using the NetWare ATTACH command (ATTACH ServerB, for
	  example). Do not establish a drive mapping to this second server.
	
	3. From Schedule+, open an appointment book for a user on ServerB.
	
	4. Close the calendar on ServerB.
	
	5. Go to an MS-DOS command prompt and type the NetWare command WHOAMI.
	
	You are only attached to ServerA, the server you originally logged in to.
	
	Steps to Reproduce Problem for LAN Manager Environments
	-------------------------------------------------------
	
	1. Connect to a LAN Manager server and establish a connection with a drive
	  letter designated for the Mail postoffice on ServerA (NET USE M:
	  \\ServerA\<share>, for example).
	
	2. Establish a UNC connection to another LAN Manager server without specifying a
	  drive letter (NET USE \\ServerB\<share>, for example).
	
	3. From Schedule+, open an appointment book for a user on ServerB.
	
	4. Close the calendar on ServerB.
	
	5. Go to an MS-DOS command prompt and type the LAN Manager command NET USE.
	
	You are only attached to ServerA, the server you originally logged in to.
	
	Additional query words: schedule plus 1.00 1.00a dynamic
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
