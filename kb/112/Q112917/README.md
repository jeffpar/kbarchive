---
layout: page
title: "Q112917: PC Win: Screen Display Does Not Auto Adjust to Monitor Change"
permalink: kb/112/Q112917/
---

## Q112917: PC Win: Screen Display Does Not Auto Adjust to Monitor Change

	Article: Q112917
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.0,3.0b,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, versions 3.0, 3.0b, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 3.0, 3.0b, and 3.2 of Microsoft Mail for Windows screen display does
	not automatically adjust to a different monitor resolution. This is by design.
	
	For example, User1 on WorkstationA (VGA monitor) has mail set up to be one inch
	from the screen border. If User1 switches to WorkstationB (SVGA monitor), the
	Mail display will not be one inch from the screen border. Mail for Windows does
	not automatically adjust its resolution to the new display.
	
	MORE INFORMATION
	================
	
	The screen coordinates (the window location) are not device independent. This is
	true of all Windows applications. When any application is created on MonitorA
	(VGA), the application does not automatically adjust to MonitorB (a different
	monitor type).
	
	To test this, create a document in WRITE.EXE. Manually position the Write
	document to be one inch from each of the screen borders. Save the document and
	re-open the document on another computer with a different kind of monitor. The
	WRITE document will not be one inch from each of the borders.
	
	All windows applications save their documents based upon the last screen
	coordinates (the window location). No window applications will automatically
	adjust to a different monitor resolution.
	
	
	Additional query words: 3.00 3.00b 3.20 changing manual bigger smaller fit
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail300 kbMail320 kbMail300b
	Version           : WINDOWS:3.0,3.0b,3.2
	
	=============================================================================
	
