---
layout: page
title: "Q139137: Invalid or Missing Cache or History Folder"
permalink: /kb/139/Q139137/
---

## Q139137: Invalid or Missing Cache or History Folder

	Article: Q139137
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.05,1.2,1.3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.05, 1.2, 1.3 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about editing the registry.
	Before you edit the registry, you should first make a backup copy of the
	registry files (System.dat and User.dat).
	
	SYMPTOMS
	========
	
	When you connect to the Internet, you may receive the following error message:
	
	  Unable to create folder. Some features may not work properly.
	
	CAUSE
	=====
	
	This problem can occur if the registry value for Internet Explorer's
	Cache_Directory or History_Directory is missing or invalid.
	
	RESOLUTION
	==========
	
	NOTE: For information about how to edit the registry, view the Changing Keys And
	Values online Help topic in Registry Editor (Regedit.exe). Note that you should
	make a backup copy of the registry files (System.dat and User.dat) before you
	edit the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious problems that may
	require you to reinstall Windows 95. Microsoft cannot guarantee that problems
	resulting from the incorrect use of Registry Editor can be solved. Use Registry
	Editor at your own risk.
	
	To correct the problem described in this article, follow these steps:
	
	1. Check the Cache_Directory value under the following registry key:
	
	  HKEY_Local_Machine\SOFTWARE\Microsoft\Internet Explorer\Main
	
	  The default value is:
	
	  C:\Program Files\Plus!\Microsoft Internet\cache
	
	  If the value contains a path, the folder that the path points to is missing.
	  Create this folder.
	
	2. If the path is missing, enter a valid path for the registry value.
	
	3. Repeat steps 1-2 for the History_Directory value. The default value is:
	
	  C:\Program Files\Plus!\Microsoft Internet\history
	
	Additional query words: msn
	
	======================================================================
	Keywords          :  
	Technology        : kbMSNSearch kbMSN130 kbMSN105 kbMSN120
	Version           : WINDOWS:1.05,1.2,1.3
	
	=============================================================================
	
