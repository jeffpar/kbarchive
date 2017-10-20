---
layout: page
title: "Q135216: Changing Folder or Printer Name Loses Shared Status"
permalink: /kb/135/Q135216/
---

## Q135216: Changing Folder or Printer Name Loses Shared Status

{% raw %}

	Article: Q135216
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 4.00
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you rename a shared folder or printer, it is no longer shared.
	
	MORE INFORMATION
	================
	
	Sharing information is stored in the registry under the folder or printer name.
	If you change the name of the folder or printer, it is no longer shared. Even if
	you rename the folder or printer to the same name, Windows 95 does not check to
	see if the new name matches the old name.
	
	If you accidentally delete a folder or printer name, press ESC when you are
	prompted "You must specify a printer name." Pressing ESC at this prompt restores
	the original name and maintains the item's sharing status.
	
	Additional query words: 4.0
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 95 4.00
	
	=============================================================================
	

{% endraw %}
