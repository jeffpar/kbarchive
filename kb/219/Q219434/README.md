---
layout: page
title: "Q219434: TS Client Set to Automatically Log On Is Prompted for Password"
permalink: kb/219/Q219434/
---

## Q219434: TS Client Set to Automatically Log On Is Prompted for Password

	Article: Q219434
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You use the Terminal Server Client Connection Manager to create a connection to
	a Terminal Server and configure it to automatically log on to the Terminal
	Server.
	
	When the Connection icon is used to log on to the Terminal Server, instead of
	automatically being logged on as expected, the user is prompted for a password.
	
	CAUSE
	=====
	
	This problem occurs because Terminal Server is configured to "Prompt for
	Password" during Autologon.
	
	RESOLUTION
	==========
	
	To work around this problem, perform the following steps:
	
	1. On the Terminal Server computer, run the Terminal Server Connection
	  Configuration application.
	
	2. Open the properties for the connection in question.
	
	3. Click Advanced.
	
	4. Click to clear the "Prompt for Password" check box in the Autologon section.
	
	Additional query words: terminalsrv tscc
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
