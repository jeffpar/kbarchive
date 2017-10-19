---
layout: page
title: "Q168794: Disk or File System Error Message Importing Registry File"
permalink: /kb/168/Q168794/
---

## Q168794: Disk or File System Error Message Importing Registry File

	Article: Q168794
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to import a registry (.reg) file by using a batch (.bat) file, you
	may receive the following error message:
	
	  Cannot import <filename>.reg: Error opening the file. There may be a
	  disk or file system error.
	
	CAUSE
	=====
	
	The .bat file is not in the same folder as the .reg file.
	
	RESOLUTION
	==========
	
	To resolve this issue, use either of the following methods:
	
	Method 1
	--------
	
	Move the .bat file to the folder that contains the .reg file.
	
	Method 2
	--------
	
	Move the .reg file to the folder that contains the .bat file.
	
	MORE INFORMATION
	================
	
	A batch file for importing a .reg file might look like this:
	
	  start regedit <filename>.reg
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
