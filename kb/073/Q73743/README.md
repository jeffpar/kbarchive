---
layout: page
title: "Q73743: Use of the &#91;Savestate&#93; Section of the DOSSHELL.INI File"
permalink: /kb/073/Q73743/
---

## Q73743: Use of the &#91;Savestate&#93; Section of the DOSSHELL.INI File

	Article: Q73743
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.x,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The [savestate] section of the DOSSHELL.INI file holds information that the
	MS-DOS SHELL may change during operation. These settings will usually not be
	changed by the user. This article describes the items in this section.
	
	MORE INFORMATION
	================
	
	 Setting           Description
	  -------              -----------
	
	  screenmode=          Determines the startup screen mode (text,
	                       graphics).
	
	  resolution=          Determines startup resolution (low, medium,
	                       high).
	
	  startup=             Determines what view mode to start in
	                       (filemanager, programstarter).
	
	  filemanagermode=     Determines what mode file manager is in
	                       (shared, singletree, twotree, systemtree).
	
	  sortkey=             Key to sort by (name, date, size).
	
	  pause=               Determines if Shell should prompt for "Press a
	                       key" on startup (enabled, disabled).
	
	  explicitselection=   Determines if addmode is enabled in the file
	                       manager tree (enabled, disabled).
	
	  swapmouse=           Switch mouse buttons (enabled, disabled).
	
	  tasklist=            Determines if the tasklist is displayed in the
	                       program manager (enabled, disabled).
	
	  switching=           Determines if the task swapper should be
	                       enabled (enabled, disabled).
	
	  sortorder=           Determines ascending/descending sort order
	                       (ascending, descending).
	
	  displayhiddenfiles=  Determines if hidden files are displayed
	                       (enabled, disabled).
	
	  replaceconfirm=      Determines if confirmation should be used when
	                       replacing files (enabled, disabled).
	
	  mouseconfirm=        Determines if confirmation should be used on
	                       mouse operations (enabled, disabled).
	
	  crossdirselection=   Determines if cross-directory selection is on
	                       (enabled, disabled).
	
	  videodir=            The directory where the .VID/.GRB files are
	                       located (for example: C:\DOS).
	
	  listkeydelay=        Number of 18ths of a second to delay between
	                       keystrokes while typing into a list box before
	                       restarting at the start of a word. If this is
	                       set, you can type in the name of a file as you
	                       can on a Macintosh. (20 is a normal value.)
	
	  tandykeyboard=       Support for Tandy keyboards (enabled, disabled.)
	
	  readupdatefreq=      How often to update the numbers when reading
	                       in a directory.
	
	  mouseinfo=           The version of the mouse driver if it is old
	                       and whether to use it anyway or not (enabled,
	                       disabled).
	
	Additional query words: 5.00 5.00a 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS600 kbMSDOS500 kbMSDOS500a
	Version           : MS-DOS:5.x,6.0
	
	=============================================================================
	
