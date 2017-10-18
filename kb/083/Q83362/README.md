---
layout: page
title: "Q83362: Windows-Based Applications Drift After Being Reopened"
permalink: kb/083/Q83362/
---

## Q83362: Windows-Based Applications Drift After Being Reopened

	Article: Q83362
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Every time a Windows-based application is opened after being closed, its display
	window will appear slightly lower and to the right of the screen.
	
	This will occur even if there are no other applications running.
	
	MORE INFORMATION
	================
	
	This is known as the "cascading" effect. This behavior is by design to prevent
	most applications from hiding previous Windows. In most programs, the
	application window will show in such a way that part of the required display
	will not show completely. Solitaire, for example, will not display some of the
	cards. If the application is then closed and reopened multiple times, it will
	eventually show in such a position where its display will be optimal.
	
	In Windows 3.1 the cascading effect can still be observed in the following
	applications: Paintbrush, Write, Notepad, Terminal, Cardfile, Calendar,
	Clipboard, Sound Recorder, and Object Packager.
	
	This behavior is only characteristic of some Windows applications. In Windows
	3.0, only the File Manager and the PIF Editor will not cascade (File Manager
	will not allow more than one instance at the same time).
	
	Other Windows-based applications such as Word and Excel will also behave in the
	same manner. The only way to reset the original position for all applications is
	to exit Windows and start it again.
	
	Additional query words: 3.00 3.00a 3.10 3.11 move shift minimized location screen
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
