---
layout: page
title: "Q93183: SETUP/N Does Not See OEM0000x.INF Files in Shared Directory"
permalink: /kb/093/Q93183/
---

## Q93183: SETUP/N Does Not See OEM0000x.INF Files in Shared Directory

	Article: Q93183
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Setup does not recognize OEM0000x.INF files if they are in the shared network
	directory. To allow Setup to recognize these files and install third-party
	drivers, the files must be in the user's individual Windows directory (where
	WIN.COM and WIN.INI are stored).
	
	OEMSETUP.INF files are correctly recognized in either shared or user
	directories.
	
	Microsoft has confirmed this to be a problem in Windows version 3.1. We are
	researching this problem and will post new information here as it becomes
	available.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
