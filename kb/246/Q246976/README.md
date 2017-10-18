---
layout: page
title: "Q246976: Windows Media Player May Start When You Click a NetShow Link"
permalink: kb/246/Q246976/
---

## Q246976: Windows Media Player May Start When You Click a NetShow Link

	Article: Q246976
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 1.0,2.0,98 Second Edition
	Operating System(s): 
	Keyword(s): kbenv win95 win98 win98se
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 98 Second Edition 
	- Microsoft NetShow for Windows 95 
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click a link for a NetShow presentation, Windows Media Player may
	start.
	
	
	CAUSE
	=====
	
	This behavior can occur because of a mismatched file type association.
	
	RESOLUTION
	==========
	
	To resolve this issue:
	
	1. Double-click My Computer or start Windows Explorer.
	
	2. On the View menu, click Folder Options (or Options), and then click File
	  Types.
	
	3. Click the first Active Streaming File Format in the list, and then click
	  Edit.
	
	4. In the Content Type (MIME) box, click video/x-ms-asf.
	
	5. In the Default Extension for Content Type box, click .asx.
	
	6. In the Actions area, click Open, and then click Edit.
	
	7. In the "Application used to perform action" area, type "c:\program
	  files\microsoft netshow\player\nsplayer.exe %l" (without the quotation
	  marks).
	
	8. Click OK, and then click Close.
	
	When you return to the File Types tab, click the second entry for Active
	Streaming File Format and perform the following steps:
	
	1. Click Edit.
	
	2. In the Content Type (MIME) box, click video/x-ms-asf.
	
	3. In the Default Extension for Content Type box, click .asx.
	
	4. In the Actions area, click Open, and then click Edit.
	
	5. In the "Application used to perform action" area, type "c:\program
	  files\microsoft netshow\player\nsplayer.exe %l" (without the quotation
	  marks).
	
	6. Click OK, click Close, and then click Close.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv win95 win98 win98se 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbNetShowSearch kbZNotKeyword3 kbWin98 kbWin98SE kbNetShow95
	Version           : :1.0,2.0,98 Second Edition
	Issue type        : kbprb
	
	=============================================================================
	
