---
layout: page
title: "Q172454: Err Msg: An Error Occurred While Windows Was Working with..."
permalink: kb/172/Q172454/
---

## Q172454: Err Msg: An Error Occurred While Windows Was Working with...

	Article: Q172454
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kbsound kbtool win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat). Both are hidden files in the
	Windows folder.
	
	SYMPTOMS
	========
	
	When you open the Sounds tool in Control Panel, you may receive an error message
	similar to the following message:
	
	  An error occurred while windows was working with control panel file
	  C:\windows\system\mmsys.cpl
	
	CAUSE
	=====
	
	A registry entry for one of the sound schemes may be damaged.
	
	RESOLUTION
	==========
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	The following registry key lists the programs that have sounds associated with
	events:
	
	  Hkey_Current_User\AppEvents\Schemes\Apps
	
	To identify and repair the damaged program registry key, follow these steps:
	
	1. Click and rename one of the program key folders. For example, click
	
	  Hkey_Current_User\AppEvents\Schemes\Apps\Explorer
	
	  and rename it to:
	
	  Hkey_Current_User\AppEvents\Schemes\Apps\Explorer1
	
	2. Test to see if you can open the Sounds tool in Control Panel without an error
	  message.
	
	3. Rename the program key folder to the original name.
	
	4. If you received an error message in step 3, repeat steps 1-3 for the next
	  program key folder.
	
	When you can open the Sounds tool in Control Panel without the error message, you
	have found the damaged registry entry. Renaming the program key folder to the
	original name corrects the damaged registry entry.
	
	MORE INFORMATION
	================
	
	This behavior seems to occur most frequently with non-default schemes, and is
	often associated with a problem during installation of the particular program.
	The default schemes listed in the registry are: .Default, Explorer, Mplayer, and
	SndRec32.
	
	======================================================================
	Keywords          : kbenv kbsound kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	
	=============================================================================
	
