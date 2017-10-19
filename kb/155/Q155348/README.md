---
layout: page
title: "Q155348: Some Programs Do Not Notify When Setup Is Finished"
permalink: /kb/155/Q155348/
---

## Q155348: Some Programs Do Not Notify When Setup Is Finished

	Article: Q155348
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install some programs, you receive no indication that the Setup process
	is finished. If you switch another program to the foreground while the Setup
	program is running, you may not realize Setup has finished.
	
	CAUSE
	=====
	
	Many programs display a "Setup complete" message in a modal dialog box. A modal
	dialog box sets the focus to the dialog box and requires user interaction.
	However, some Setup programs do not display a message, or do not use a modal
	dialog box.
	
	RESOLUTION
	==========
	
	You can use the following methods to display tasks that are currently running:
	
	- Press ALT+TAB to display the running tasks until the Setup program is
	  selected.
	
	- Press CTRL+ALT+DELETE and then click Task Manager to display the running
	  tasks. Click the Setup program and then click Switch To.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	
	=============================================================================
	
