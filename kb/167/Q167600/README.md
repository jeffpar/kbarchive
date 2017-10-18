---
layout: page
title: "Q167600: Contents of the Dialup Networking Folder Not Restored"
permalink: kb/167/Q167600/
---

## Q167600: Contents of the Dialup Networking Folder Not Restored

	Article: Q167600
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbtool win95
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
	
	When you use standard backup procedures, the contents of the Dialup Networking
	folder are not backed up.
	
	CAUSE
	=====
	
	Dial-Up Networking connections (connectoids) are stored as registry keys.
	
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
	
	Connectoids are defined in the registry in the following locations:
	
	  HKEY_CURRENT_USER\REMOTEACCESS
	  HKEY_USERS\DEFAULT\REMOTEACCESS
	  HKEY_USERS\<username>\REMOTEACCESS
	
	On a single-user computer, the last key appears only once. On a multiple- user
	computer, the last key is repeated for each user.
	
	Exporting these registry keys creates text files with the .reg extension that can
	be backed up and later restored. Each key listed above must be exported
	separately so that each key will have a separate file.
	
	To restore the registry keys, double-click the exported .reg files. This restores
	the contents of the file into the registry.
	
	NOTE: Restoring the HKEY_USERS\<username>\RemoteAccess key for a user who
	is not currently logged in may cause the loss of all personal settings for the
	user.
	
	Additional query words: dun connectoid
	
	======================================================================
	Keywords          : kbtool win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	Issue type        : kbprb
	
	=============================================================================
	
