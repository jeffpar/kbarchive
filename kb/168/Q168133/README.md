---
layout: page
title: "Q168133: XCLN: Deleting the Schedule+ Data from Exchange Server"
permalink: /kb/168/Q168133/
---

## Q168133: XCLN: Deleting the Schedule+ Data from Exchange Server

	Article: Q168133
	Product(s): Microsoft Schedule+ for Windows
	Version(s): 7.5,7.x
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 08-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.x 
	- Microsoft Schedule+ for the Apple Macintosh, version 7.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you use Microsoft Exchange Macintosh clients, it may become necessary to
	delete the Microsoft Schedule+ information for your mailbox from the computer
	running Microsoft Exchange Server. This article describes the steps required to
	perform this operation.
	
	MORE INFORMATION
	================
	
	In order to clear the server and local copies of a schedule from a Microsoft
	Exchange Macintosh Client:
	
	1. Start the Exchange Client.
	
	2. Place the mouse pointer over the Schedule+ icon on the toolbar and press and
	  hold the mouse button.
	
	3. On the keyboard, press and hold the CTRL and SHIFT keys.
	
	4. Release the Mouse button
	
	  The following message will be displayed:
	
	  You have launched Schedule+ with the CTRL and SHIFT keys held down.
	  If you continue, Schedule+ will clear your schedule data. A backup
	  copy of the data will be saved in your system folder.
	  Are you sure you want to clear your schedule data?
	
	  If you do not see the warning message, Schedule+ did not recognize that the
	  keys Ctrl + Shift were being pressed.
	
	5. Click YES to continue with the operation.
	
	This will cause a backup file called "server schedule backup" to be created in
	the system folder.
	
	NOTE: There cannot be an existing session opened by either Microsoft Exchange or
	Microsoft Schedule+. If there is an open session, the CTRL+SHIFT has no effect
	when starting Microsoft Schedule+.
	
	NOTE: The Exchange Client for the Macintosh has no separate icon for Schedule+,
	so this is the only method for clearing the schedule from the Macintosh client.
	
	Additional query words: reset
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbHWMAC kbOSMAC kbScheduleSearch kbSchedule750 kbSchedule7xSearch
	Version           : :7.5,7.x
	
	=============================================================================
	
