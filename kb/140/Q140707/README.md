---
layout: page
title: "Q140707: File Not Listed Using DIR Command with OS/2 Name Space"
permalink: kb/140/Q140707/
---

## Q140707: File Not Listed Using DIR Command with OS/2 Name Space

	Article: Q140707
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
	
	When you use the DIR command on a NetWare volume, files with no extension may
	not be listed.
	
	CAUSE
	=====
	
	This is a known limitation with Command.com when you are using NetWare servers
	with OS/2 Name Space (long file name) support installed.
	
	RESOLUTION
	==========
	
	When you use the DIR command to list a file with no extension, use a period (.)
	at the end of the file name. For example, to list a file named Test, type the
	following command:
	
	  dir test.
	
	You could also type
	
	  dir *.*
	
	or
	
	  dir
	
	to list the Test file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows 95. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	Additional query words: lfn namespace
	
	======================================================================
	Keywords          : 3rdpartynet win95 kb3rdPartyNetClient 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : 95
	
	=============================================================================
	
