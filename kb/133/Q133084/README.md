---
layout: page
title: "Q133084: &quot;PowerPoint Is Not Responding...&quot; When Closing Windows 95"
permalink: /kb/133/Q133084/
---

## Q133084: &quot;PowerPoint Is Not Responding...&quot; When Closing Windows 95

	Article: Q133084
	Product(s): Microsoft PowerPoint for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 15-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft PowerPoint for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to shut down Windows 95 while PowerPoint for Windows 95, version
	7.0 has an unsaved presentation open, you may encounter the following error
	message:
	
	  This program is not responding. It may be busy, waiting for a response from
	  you, or it may have stopped running.
	
	- Click Cancel to ignore and return to Windows.
	
	- To close this program immediately, click End Task. You will lose any unsaved
	  information in this program.
	
	- To give the program 20 seconds to finish what it is doing, click Wait, and
	  then try to close the program again.
	
	CAUSE
	=====
	
	This behavior is by design. Windows 95 uses this method to alert you that you
	are in the middle of a shut down, that you have an application still running,
	and that some type of user intervention is necessary. (You have 20 seconds in
	which to save the file before this error dialog box appears.)
	
	RESOLUTION
	==========
	
	To exit the dialog box, select one of the choices provided as best suits your
	needs.
	
	
	MORE INFORMATION
	================
	
	PowerPoint 97 behaves differently. If you try to shut down Windows 95 while you
	have an unsaved presentation in PowerPoint, you see the message:
	
	  Do you want to save the changes you made to the (Unsaved Presentation)?
	
	Whether you click Yes, No, or Cancel, the Windows 95 shutdown routine stops.
	
	Additional query words: 7.00 ppt95 win95
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbPowerPtSearch kbPowerPt700 kbZNotKeyword2 kbPowerPt700Search
	Version           : WINDOWS:7.0
	
	=============================================================================
	
