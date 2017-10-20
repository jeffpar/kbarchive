---
layout: page
title: "Q150451: Network Drive Buttons Missing from Windows Explorer Toolbar"
permalink: /kb/150/Q150451/
---

## Q150451: Network Drive Buttons Missing from Windows Explorer Toolbar

{% raw %}

	Article: Q150451
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 4.00
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click one of the following items in the All Folders pane in the Windows
	Explorer window, the Map Network Drive and Disconnect Net Drive buttons
	disappear from the toolbar:
	
	- Control Panel
	
	- Dial-Up Networking
	
	- My Briefcase
	
	- Printers
	
	- Recycle Bin
	
	- Recycled
	
	CAUSE
	=====
	
	The toolbar in Windows Explorer is context sensitive. The buttons that appear on
	the toolbar depend on the object that is selected.
	
	RESOLUTION
	==========
	
	To map or disconnect a network drive, use either of the following methods:
	
	- Click a different item in the All Folders pane to restore the Map Network
	  Drive and Disconnect Net Drive buttons.
	
	- Click Map Network Drive or Disconnect Network Drive on the Tools menu instead
	  of clicking the Map Network Drive or Disconnect Net Drive button on the
	  toolbar.
	
	MORE INFORMATION
	================
	
	The behavior described above does not occur in My Computer. When one of the
	objects listed above is selected in My Computer, the Map Network Drive and
	Disconnect Net Drive buttons are still displayed on the toolbar.
	
	To cause the toolbar to be displayed in Windows Explorer or My Computer, click
	Toolbar on the View menu.
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 95 4.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
