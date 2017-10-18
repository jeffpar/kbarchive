---
layout: page
title: "Q255246: Terminal Server Clients Receive Error Opening New Mail"
permalink: kb/255/Q255246/
---

## Q255246: Terminal Server Clients Receive Error Opening New Mail

	Article: Q255246
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
	
	On a computer running the Terminal Server Client program, when you try to
	compose or open a new mail message, the following error message may appear:
	
	  The item could not be displayed. The object could not be found.
	
	CAUSE
	=====
	
	This behavior can occur when you install the Windows Messaging program on the
	Terminal Server computer but you do not run the Windows Messaging compatibility
	script.
	
	RESOLUTION
	==========
	
	To resolve this behavior, on the computer where Terminal Server is installed,
	remove Windows Messaging, change to Install mode, reinstall Windows Messaging,
	and then run the Windows Messaging compatibility script.
	
	1. Log on as an Administrator, and then remove the Windows Messaging program for
	  all users.
	
	2. Restart the computer, and log on as an Administrator.
	
	3. Put the computer into Install mode:
	
	  a. Start an MS-DOS command prompt.
	
	  b. Type the following at the command prompt, and then press ENTER:
	
	  change user /install
	
	4. Install the Windows Messaging program.
	
	5. Run the Windows Messaging compatibility script (Winmsg.cmd).
	
	6. Type the following at the command prompt to put the computer into Execute
	  mode:
	
	  change user /execute
	
	7. Log off, and then log back on as a user.
	
	You should now be able to open and compose mail.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
