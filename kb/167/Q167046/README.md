---
layout: page
title: "Q167046: Add Printer Wizard May Hang After Adding a Port"
permalink: kb/167/Q167046/
---

## Q167046: Add Printer Wizard May Hang After Adding a Port

	Article: Q167046
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbprint
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you click Next, the Add Printer Wizard does not respond. The problem
	occurs with any user, even Administrator, but works properly after the server is
	restarted or the Spooler service is stopped and then restarted.
	
	CAUSE
	=====
	
	A user in the Print Operator group or Power User group has attempted to create a
	printer using an LPR port.
	
	Printer Operators and Power Users can create printers but do not have sufficient
	access to the registry to create new printer ports.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  ARTICLE-ID: Q140084
	  TITLE : Permissions Error Creating an LPR Printer
	
	RESOLUTION
	==========
	
	Stop and restart the Spooler service or, shutdown and restart the server.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Server
	version 4.0. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	======================================================================
	Keywords          : kbprint 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	Issue type        : kbbug
	
	=============================================================================
	
