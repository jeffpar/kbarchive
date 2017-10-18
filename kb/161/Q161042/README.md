---
layout: page
title: "Q161042: XCLN: Schedule+ Error: &quot;The Schedule File Could Not Be Opened&quot;"
permalink: kb/161/Q161042/
---

## Q161042: XCLN: Schedule+ Error: &quot;The Schedule File Could Not Be Opened&quot;

	Article: Q161042
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kbinterop kbnetwork
	Last Modified: 12-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open another person's appointment book in Schedule+, you
	encounter one of the following errors, depending on the version of Windows you
	are running:
	
	- Windows NT Workstation:
	
	  The schedule file could not be opened. An unknown error occurred.
	
	- Windows 3.1, Windows for Workgroups 3.11, or Windows 95:
	
	  The logon credentials supplied were incorrect. Make sure your username and
	  domain are correct, then type your password again.
	
	CAUSE
	=====
	
	Attempting to open a schedule on a server that is in another site in an
	untrusted domain causes this error. This problem occurs with both site
	connectors and X.400 connectors.
	
	RESOLUTION
	==========
	
	Set up a two-way trust between the domains in which each of the computers
	running Microsoft Exchange Server is located.
	
	MORE INFORMATION
	================
	
	Schedule+ reads the remote user's home server from the local directory service
	and then uses remote procedure calls (RPCs) to connect to the remote Information
	Store. Because the mailbox is in an untrusted domain, the error described above
	occurs.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbinterop kbnetwork 
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	Issue type        : kbprb
	
	=============================================================================
	
