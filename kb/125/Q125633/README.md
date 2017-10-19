---
layout: page
title: "Q125633: Start Menu Wraps Off the Display"
permalink: /kb/125/Q125633/
---

## Q125633: Start Menu Wraps Off the Display

	Article: Q125633
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): kbprint kbui kbusage win95 kbPrinting
	Last Modified: 07-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you click an item on the Start menu, a menu that covers the entire display
	and wraps off the right side of the screen appears. You cannot access any items
	on the menu that are not visible, and there does not seem to be any way to
	remove the menu without clicking an item on it.
	
	CAUSE
	=====
	
	This problem can occur if a folder contains so many items that Windows cannot
	display them all on the screen at the same time. Windows does not have the
	capability to scroll to the right of a menu so you can see the items that are
	off the screen.
	
	RESOLUTION
	==========
	
	To remove the menu, press the ESC key or the LEFT ARROW key until the menu
	closes. To prevent the problem from occurring, use any of the following tips:
	
	- Reduce the number of items in the folder by deleting items or moving some of
	  them to different folders.
	
	- Use Windows Explorer to view the contents of the folder.
	
	- View the contents of the folder by opening it from My Computer.
	
	- Increase the display resolution so that more items can be seen on the screen
	  at once. For example, if you are using 640 x 480 resolution, increase the
	  resolution to 800 x 600 or 1024 x 768. NOTE: Not all monitors can display all
	  resolutions.
	
	- Install Microsoft Internet Explorer 4.01 for Windows NT 4.0 or Windows 95 or
	  later, and enable the Windows Desktop Update component, or if you are already
	  running this version, add the Windows Desktop Update component. For
	  information about how to obtain Internet Explorer 4.01, please see the
	  following article in the Microsoft Knowledge Base:
	
	  Q177485 Microsoft Internet Explorer 4.01 Available
	
	  For information about how to add the Windows Desktop Update component, please
	  see the following article in the Microsoft Knowledge Base:
	
	  Q165695 How to Add or Remove Windows Desktop Update
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows 95.
	
	
	MORE INFORMATION
	================
	
	The Windows Desktop Update shell (included with Internet Explorer 4.0 or later
	and Windows 98) does not display multiple columns for Start menu folders that
	have too many items to display in one column. Instead, a single column is
	displayed and you can scroll multiple items using the arrows at the top or
	bottom of the folder's single column.
	
	You can return to the classic shell behavior (display multiple columns if needed
	for Start menu folders) on Windows 95 or Windows NT 4.0 by removing the Windows
	Desktop Update, but the problem noted in the Symptoms section of this article
	will return.
	
	Additional query words: scroll
	
	======================================================================
	Keywords          : kbprint kbui kbusage win95 kbPrinting 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
