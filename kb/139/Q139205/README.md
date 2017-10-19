---
layout: page
title: "Q139205: &quot;Path Not Found&quot; Using DIR Command on NetWare Volume"
permalink: /kb/139/Q139205/
---

## Q139205: &quot;Path Not Found&quot; Using DIR Command on NetWare Volume

	Article: Q139205
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 3rdpartynet win95 kb3rdPartyNetClient
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using the Microsoft Client for NetWare Networks and you are
	connected to a NetWare volume on which long filename support has been enabled,
	you may receive the following error message if you change to a directory with a
	long filename and then use the DIR command:
	
	  Path Not Found
	
	This problem may occur when you change to a directory with a long filename from a
	command prompt using the directory's 8.3 alias instead of its long filename.
	
	Note that this problem occurs only at a command prompt; it does not occur when
	you are using Windows Explorer or My Computer.
	
	RESOLUTION
	==========
	
	To prevent this problem, use the directory's long filename instead of its 8.3
	alias when you change to the directory at a command prompt.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	Additional query words: lfn
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
