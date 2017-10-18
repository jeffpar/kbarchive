---
layout: page
title: "Q164198: Sound Recorder Saves Renamed File with Previous Name"
permalink: kb/164/Q164198/
---

## Q164198: Sound Recorder Saves Renamed File with Previous Name

	Article: Q164198
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kbtool osr2 win95 win98
	Last Modified: 15-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, versions 2, 2.1 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you rename a file that is currently open in Sound Recorder and then save
	the file, the file is saved with the previous name.
	
	CAUSE
	=====
	
	Sound Recorder does not look for the specified file in its original location.
	
	MORE INFORMATION
	================
	
	MFC programs (such as WordPad) open a Save As dialog box when a file is not
	found in its original location. Sound Recorder does not do this; it simply saves
	the file with the original name instead.
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kbenv kbtool osr2 win95 win98 
	Technology        : kbWin95search kbWin98search kbOPKSearch kbWin98 kbWin95OPKOSR2 kbWin95OPKOSR210
	Version           : :95
	Issue type        : kbprb
	
	=============================================================================
	
