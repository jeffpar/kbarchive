---
layout: page
title: "Q158045: Windows Explorer Reports 4 GB of Files as 0 Bytes"
permalink: kb/158/Q158045/
---

## Q158045: Windows Explorer Reports 4 GB of Files as 0 Bytes

	Article: Q158045
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 OEM Service Release, version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If the total size of the files in a folder is 4 GB, Windows Explorer reports the
	size as 0 bytes. If the total size is greater than 4 GB, Windows Explorer
	reports the total size less 4 GB.
	
	CAUSE
	=====
	
	Windows Explorer is limited to reporting a total size of 4 GB in a folder.
	Although you can see folders larger than 4 GB, Windows Explorer does not report
	the correct total size.
	
	RESOLUTION
	==========
	
	To see the total size for files in a folder, use the DIR command at a command
	prompt.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Note that the Windows 95 network redirector (Vredir.vxd) is limited to 2-GB
	files. This behavior is described in the following article in the Microsoft
	Knowledge Base:
	
	  Q127852 Total Free Space Incorrect on Network Drives Larger than 2 GB
	
	
	Additional query words: 95 osr2
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbOPKSearch
	Version           : 95
	
	=============================================================================
	
