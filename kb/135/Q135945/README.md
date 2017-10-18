---
layout: page
title: "Q135945: Error Message: Setup Error 907 with Microsoft Plus!"
permalink: kb/135/Q135945/
---

## Q135945: Error Message: Setup Error 907 with Microsoft Plus!

	Article: Q135945
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 27-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you install Microsoft Plus!, you may receive one of the following error
	messages:
	
	  - Setup Error 907
	  Object 140
	  Your Setup files may be damaged. Try restarting the Setup Program.
	
	  - Setup Error 907
	  Object 240
	  Your Setup files may be damaged. Try restarting the Setup Program.
	
	When this occurs, Setup installs Microsoft Plus! in the Progra~1\Plus! folder
	instead of the Program Files\Plus! folder.
	
	CAUSE
	=====
	
	This behavior occurs when Setup detects that the system cannot use long file
	names.
	
	
	RESOLUTION
	==========
	
	To work around this behavior, use one of the following methods:
	
	- Reinstall Windows 95. This resets the registry key that is causing the
	  problem.
	
	- Manually reset the registry key using Registry Editor.
	
	  WARNING: Using Registry Editor incorrectly can cause serious problems that may
	  require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	  resulting from the incorrect use of Registry Editor can be solved. Use
	  Registry Editor at your own risk.
	
	  NOTE: For information about how to edit the registry, view the Changing Keys
	  And Values online Help topic in Registry Editor (Regedit.exe). Note that you
	  should make a backup copy of the registry files (System.dat and User.dat)
	  before you edit the registry.
	
	  Use Registry Editor to delete the Win31FileSystem key in the under the
	  following registry key:
	
	     KEY_LOCAL_MACHINE\System\CurrentControlSet\Control\FileSystem
	
	  After you delete the key, restart the computer.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbGamesSearch kbPlusSearch kbPlus95
	Version           : 95
	
	=============================================================================
	
