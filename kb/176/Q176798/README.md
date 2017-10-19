---
layout: page
title: "Q176798: Bookshelf 98 ErrMsg: Ctl3d32.dll Is Not the Correct Version"
permalink: /kb/176/Q176798/
---

## Q176798: Bookshelf 98 ErrMsg: Ctl3d32.dll Is Not the Correct Version

	Article: Q176798
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kb3rdparty kberrmsg
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Bookshelf 98 for Windows 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run the QuickTime for Windows installation program, you may receive the
	following error message:
	
	  This application uses Ctl3d32.dll, which is not the correct version. This
	  version of Ctl3d32.dll is designed only for Windows NT systems.
	
	If you click OK, the QuickTime installation program continues to run without
	further problems. All Bookshelf 98 features that use QuickTime, such as the 360
	degree views, function properly, and the error message does not reappear unless
	you remove and reinstall QuickTime.
	
	CAUSE
	=====
	
	This behavior can occur if the version of the Ctl3d32.dll file on your computer
	is incorrect.
	
	RESOLUTION
	==========
	
	To prevent this error message from reappearing, delete all copies of the
	Ctl3d32.dll file from your hard drive. To do so, use the following steps:
	
	1. Click Start, point to Find, and then click Files Or Folders.
	
	2. In the Named box, type "ctl3d32.dll" (without the quotation marks), and then
	  click Find Now.
	
	3. In the list of found files, right-click each Ctl3d32.dll file, and then click
	  Delete. Continue until the list of found files is empty.
	
	4. Close the Find: Files Named Ctl3d32.dll window, and then restart the
	  computer.
	
	MORE INFORMATION
	================
	
	The Ctl3d32.dll file is not installed by Bookshelf or by Windows 95, and is not
	used by QuickTime for Windows.
	
	QuickTime is manufactured by Apple Computer Corporation, a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 98 multi media multimedia multi-media mmtitles
	
	======================================================================
	Keywords          : kb3rdparty kberrmsg 
	Technology        : kbOSWin95 kbOSWinSearch kbHomeMMsearch kbBookshelfSearch kbBookShelf1998
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
