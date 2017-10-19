---
layout: page
title: "Q120222: Plus Sign Appears in Windows Explorer but Not in File Manager"
permalink: /kb/120/Q120222/
---

## Q120222: Plus Sign Appears in Windows Explorer but Not in File Manager

	Article: Q120222
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95 4.00
	Operating System(s): 
	Keyword(s): win95 appscomp kbAppCompatibility
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	- When you run Windows Explorer, you see a plus sign (+) before each folder or
	  tree.
	
	- When you run File Manager, you do not see the plus or minus signs (+ or -)
	  before each folder or directory.
	
	CAUSE
	=====
	
	- In Windows Explorer, the plus sign appears before network directories and
	  floppy disk drives for performance reasons. Ghosted connections are used for
	  network directories; therefore, the plus sign appears until the directory is
	  accessed. Floppy drives display a plus sign because it is time consuming to
	  poll floppy drives until you want to access them.
	
	- In Windows 3.x and Windows for Workgroups 3.x, the plus and minus signs are
	  enabled by default for File Manager. In Windows 95, they are disabled by
	  default.
	
	RESOLUTION
	==========
	
	- If you click the plus sign, it disappears if there are no subdirectories. If
	  there are subdirectories, clicking the plus sign makes the subdirectories
	  visible.
	
	- On the Tree menu in File Manager, click Indicate Expandable Branches to view
	  the plus and minus signs in File Manager.
	
	Additional query words: expand
	
	======================================================================
	Keywords          : win95 appscomp kbAppCompatibility 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : 95 4.00
	
	=============================================================================
	
