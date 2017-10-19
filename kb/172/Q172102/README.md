---
layout: page
title: "Q172102: How to Remove Cached Entries from Address Box in Program Viewer"
permalink: /kb/172/Q172102/
---

## Q172102: How to Remove Cached Entries from Address Box in Program Viewer

	Article: Q172102
	Product(s): The Microsoft Network
	Version(s): WINDOWS:2.0,2.5,95
	Operating System(s): 
	Keyword(s): kbenv kbmsn
	Last Modified: 16-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 2.0, 2.5 
	- the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SUMMARY
	=======
	
	This article describes how to remove the most recently used (MRU) list of cached
	URL entries (Web page addresses) from the Address box in Program Viewer.
	
	MORE INFORMATION
	================
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	1. Quit Program Viewer.
	
	2. Use Registry Editor to delete all the entries except the "(Default)" entry
	  from the following registry key:
	
	  HKEY_CURRENT_USER\Software\Microsoft\MSN\TypedURL
	
	Additional query words: msnet msnetwork microsoft-net history
	
	======================================================================
	Keywords          : kbenv kbmsn 
	Technology        : kbOSWin95 kbOSWinSearch kbMSNSearch kbMSN200 kbMSN250
	Version           : WINDOWS:2.0,2.5,95
	Issue type        : kbhowto
	
	=============================================================================
	
