---
layout: page
title: "Q80641: Mouse Behavior in MS-DOS Programs That Run in a Window"
permalink: /kb/080/Q80641/
---

## Q80641: Mouse Behavior in MS-DOS Programs That Run in a Window

	Article: Q80641
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft Windows version 3.1 changes the way you use your mouse with MS-DOS
	applications that run within a window. In Windows version 3.0, the mouse selects
	text to be copied to the Clipboard. Windows version 3.1 instead sends the mouse
	commands through to the MS-DOS mouse driver. If the driver supports the mouse in
	an MS-DOS application running in a window, it sends the mouse command to the
	application. The application interprets these mouse commands as if it were
	running full-screen. If the MS-DOS mouse driver is not designed to receive mouse
	instructions from the Windows version 3.1 mouse driver, the mouse does not
	function in the MS-DOS application.
	
	You can change the mouse behavior with Windows 3.1 to the way it works with
	Windows version 3.0. This may be helpful if the MS-DOS mouse driver is not
	capable of communicating with the Windows version 3.1 mouse driver, or if
	selecting text is more important than mouse functionality in an MS-DOS
	application running in a window.
	
	MORE INFORMATION
	================
	
	To force Windows version 3.1 to use the mouse to select text and copy it to the
	Clipboard, add the following line to the SYSTEM.INI file under the
	[NonWindowsApp] section:
	
	  MouseInDOSBox=0
	
	NOTE: You must exit and restart Windows to activate this change.
	
	Removing this line or replacing the zero with a one (1) resets the mouse behavior
	back to the Windows version 3.1 default.
	
	Additional query words: 3.10 win31 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
