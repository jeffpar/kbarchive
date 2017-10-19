---
layout: page
title: "Q170382: Files or Folders Not Deleted on Network Drive with DELTREE"
permalink: /kb/170/Q170382/
---

## Q170382: Files or Folders Not Deleted on Network Drive with DELTREE

	Article: Q170382
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:95
	Operating System(s): 
	Keyword(s): kbnetwork kbtool msdos win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you delete files or folders using the DELTREE command (Deltree.exe), you
	may receive the following message instead of an error message when no files or
	folders have been deleted:
	
	  Deleting <file or folder>...
	
	CAUSE
	=====
	
	You have read-only permission to the network files or folder you are trying to
	delete.
	
	RESOLUTION
	==========
	
	You must have the appropriate permissions for the network folder to delete the
	files or folder. Change your permissions for the folder, or contact your network
	administrator.
	
	Additional query words: 6.00 6.20
	
	======================================================================
	Keywords          : kbnetwork kbtool msdos win95 
	Technology        : kbWin95search kbZNotKeyword3 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:95
	
	=============================================================================
	
