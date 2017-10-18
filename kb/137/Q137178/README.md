---
layout: page
title: "Q137178: Microsoft Exchange Cannot Open Custom Dictionary"
permalink: kb/137/Q137178/
---

## Q137178: Microsoft Exchange Cannot Open Custom Dictionary

	Article: Q137178
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
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
	
	After you install Microsoft Works version 4.0 for Windows 95, you may receive
	the following error message when you try to spell-check a message in Microsoft
	Exchange:
	
	  The spelling operation could not be completed. No custom dictionary has been
	  opened.
	
	  Microsoft Exchange client - 10083 - [81002763]
	
	CAUSE
	=====
	
	The Custom Dictionaries key in the registry has been set incorrectly.
	
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
	
	To correct this problem, follow these steps:
	
	1. Add a Custom Dictionaries key to the following registry branch:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing Tools
	
	2. Add the following string value for the Custom Dictionaries key:
	
	  1
	
	3. Set the string value of 1 to
	
	  <path to Custom.dic>:\custom.dic
	
	  where <path to Custom.dic> is the path to your custom dictionary file.
	
	  In most cases, the path is:
	
	  C:\Program Files\Common Files\Microsoft Shared\Proof\Custom.dic
	
	
	MORE INFORMATION
	================
	
	Note that this problem has been corrected in Microsoft Works version 4.0a for
	Windows 95.
	
	Before you change the registry, you should back up the registry files. For
	information about backing up the registry files, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q132332 How to Back Up the Registry
	
	
	Additional query words: w_works
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
