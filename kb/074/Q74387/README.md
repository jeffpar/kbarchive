---
layout: page
title: "Q74387: Connecting a Tablet to COM2"
permalink: kb/074/Q74387/
---

## Q74387: Connecting a Tablet to COM2

	Article: Q74387
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Pen Computing, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The tablet drivers supplied by Microsoft as part of the release of Windows for
	Pen Computing will work correctly if the tablet is connected to COM2. Connecting
	the tablet in this manner keeps COM1 free for the debugging information that is
	displayed by CodeView for Windows or WDEB386.
	
	To instruct the tablet driver to install on COM2, it is necessary to modify the
	[Pen Driver] section of the SYSTEM.INI file to include the following line:
	
	  com2=1
	
	The next time the system loads, it will use COM2 for the tablet.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbWinPenSearch kbZNotKeyword3 kbWinPen100
	Version           : :1.0
	
	=============================================================================
	
