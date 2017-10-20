---
layout: page
title: "Q85891: Dimmed or Missing Options Under Program Manager"
permalink: /kb/085/Q85891/
---

## Q85891: Dimmed or Missing Options Under Program Manager

{% raw %}

	Article: Q85891
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you are running Microsoft Windows version 3.1 and the File menu is missing,
	or an option normally available under a Program Manager menu is unavailable
	(dimmed) or missing, then either the PROGMAN.INI file or selected group files
	(.GRP) have been modified.
	
	For more information on modifying the PROGMAN.INI file, refer to pages 219- 221
	in the "Microsoft Windows Resource Kit" manual for version 3.1.
	
	The following is a list of disabled options and the procedure used to disable
	them. These changes are normally made by the system administrator of the network
	to have more control of the Windows environment.
	
	MORE INFORMATION
	================
	
	Option Missing                  Procedure
	--------------                  ---------
	
	File menu                       PROGMAN.INI's [restrictions]
	                               contains NOFILEMENU=1
	
	Option Dimmed or Unavailable    Procedure
	----------------------------    ---------
	
	Run (from the File menu)        PROGMAN.INI's [restrictions]
	                               contains NORUN=1
	
	Exit Windows (from the File     PROGMAN.INI's [restrictions]
	menu)                           contains NOCLOSE=1
	
	Close (from Program Manager's
	Control menu)
	
	Save Settings on Exit           PROGMAN.INI's [restrictions]
	(from the Options menu)         contains NOSAVESETTINGS=1
	
	                               Note: This also disables the
	                               ability to double-click the
	                               Program Manager's Control menu
	                               while holding down the SHIFT key
	                               to save settings.
	
	Move and Delete (from the      The group file (.GRP) is read
	File menu) only                only
	on some groups
	
	Move and Copy (from the File    Normal operation
	menu) when a group icon is
	selected
	
	New, Move, Copy, and Delete      PROGMAN.INI's [restrictions]
	(from the File menu) when        contains EDITLEVEL=1 (or higher)
	a group icon is selected
	
	New, Move, Copy and Delete      PROGMAN.INI's [restrictions]
	(from the File menu) when       contains EDITLEVEL=2 (or higher)
	a group or program icon
	is selected
	
	Command Line and Browse         PROGMAN.INI's [restrictions]
	button (from the File           contains EDITLEVEL=3 (or higher)
	menu's Properties)
	
	All options under Properties,    PROGMAN.INI's [restrictions]
	and OK, Browse, and Change       contains EDITLEVEL=4
	Change Icon buttons (from
	the File menu)
	
	NOTE: Even though all options mentioned above are unavailable, you can
	still add program items by holding the SHIFT key and double-clicking a
	blank area in a group window. Microsoft has confirmed this to be a
	problem in Microsoft Windows version 3.1.
	
	All options under Properties,    The group file (.GRP) is read
	and OK, Browse, and Change       only
	Icon buttons for only some
	groups (from the File menu)
	
	KBCategory: kbusage kbenv kbprb
	KBSubcategory: win31
	
	Additional query words: 3.10 3.1 grey gray grayed greyed wrk 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
