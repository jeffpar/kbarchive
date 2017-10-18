---
layout: page
title: "Q234615: Windows 95 Tools May Cause Illegal Operation During Shutdown"
permalink: kb/234/Q234615/
---

## Q234615: Windows 95 Tools May Cause Illegal Operation During Shutdown

	Article: Q234615
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg kbtool osr2 win95
	Last Modified: 29-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the Paint, WordPad, and Imaging tools are all running and either Paint or
	WordPad is the active program when you shut down or log off your computer, you
	may receive the following error message:
	
	  An illegal operation occurred
	
	CAUSE
	=====
	
	In Windows 95, Paint and WordPad are Microsoft Foundation Classes (MFC) version
	3 programs, and Imaging is an MFC 4.0 program. There is a conflict in global
	memory between versions 3.x and 4.0 of MFC, which may cause the version 4.0
	program to lose a handle to a window function during Windows 95 shutdown.
	
	RESOLUTION
	==========
	
	To prevent this problem from occurring, quit Paint, WordPad, Imaging, and any
	other MFC programs before shutting down or logging off your computer.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Windows 98.
	
	MORE INFORMATION
	================
	
	Windows 95 (retail release) does not include the Imaging tool. However, Windows
	95 (retail release) does include MFC 3.0 versions of Paint and WordPad. If you
	install an MFC 4.0 program, and you have Paint, WordPad, and the MFC 4.0 program
	open during shutdown, the error message listed above may occur.
	
	
	Additional query words: freeze accessory accessories
	
	======================================================================
	Keywords          : kberrmsg kbtool osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
