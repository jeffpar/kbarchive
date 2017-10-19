---
layout: page
title: "Q84644: Font Changes in the Clipboard Under Windows 3.1"
permalink: /kb/084/Q84644/
---

## Q84644: Font Changes in the Clipboard Under Windows 3.1

	Article: Q84644
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Clipboard Viewer (CLIPBRD.EXE) in Microsoft Windows operating system version
	3.1 may change the font in which its contents are displayed if the application
	that supplied the specific font data is exited.
	
	To change the font in which the data is displayed, choose one of the commands on
	the Display menu in the Clipboard Viewer. If the application is still running,
	the Owner Display command will be available. This command enables the Clipboard
	to display the same font description copied or cut into it, as long as the
	application that provided the font information remains running. After the
	application is exited, the Owner Display command changes to Text, which is the
	default Clipboard text format.
	
	MORE INFORMATION
	================
	
	NOTE: The OEM Text command on the Display menu refers to the text format used
	for non-Windows-based applications.
	
	For more information on the file types that are supported by the Windows 3.1
	Clipboard, query on the following words in the Microsoft Knowledge Base:
	
	  data and exchange and win31 and clipboard
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
