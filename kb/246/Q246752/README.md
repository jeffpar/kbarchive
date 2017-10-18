---
layout: page
title: "Q246752: Admin&#36; and IPC&#36; Shares Missing at Domain Controller Startup"
permalink: kb/246/Q246752/
---

## Q246752: Admin&#36; and IPC&#36; Shares Missing at Domain Controller Startup

	Article: Q246752
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
	
	When you start a domain controller that is running Microsoft Windows NT Server
	4.0, Terminal Server Edition, the admin$ and C$ shares may be lost. You may not
	be able to recreate these shares in Windows NT Explorer, and you may receive the
	following error message:
	
	  The share names admin$ and IPC$ are reserved and may not be used.
	
	CAUSE
	=====
	
	The cause is unknown.
	
	RESOLUTION
	==========
	
	To work around this issue, follow these steps:
	
	1. At the command prompt, use the net share command to recreate the
	  administrative shares. For example, type the following command to recreate
	  the admin$ share:
	
	  net share admin$
	
	2. Configure the system policy of the domain controller to automatically create
	  the hidden C$ and admin$ shares when you start the computer:
	
	  a. Start System Policy Editor.
	
	  b. Open the policy file for the system.
	
	  c. Double-click the Default Computer value.
	
	  d. Expand the Windows NT Network folder.
	
	  e. Expand the Sharing folder.
	
	  f. Click to select the "Create hidden drive shares (server)" check box, and
	     then click OK.
	
	  g. Save the policy file, and then quit System Policy Editor.
	
	Additional query words: nt 4.0 Terminal Server create drive
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
