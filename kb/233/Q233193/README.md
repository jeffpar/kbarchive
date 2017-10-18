---
layout: page
title: "Q233193: LMHOSTS File Referenced in #INCLUDE Is Not Parsed at Startup"
permalink: kb/233/Q233193/
---

## Q233193: LMHOSTS File Referenced in #INCLUDE Is Not Parsed at Startup

	Article: Q233193
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:95; winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 98 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The LMHOSTS or text file referenced in #INCLUDE is not parsed at startup by
	Windows 95/98 clients. This may occur when the remote file does not have at
	least CHANGE permission for the Network or Everyone group.
	
	RESOLUTION
	==========
	
	To resolve this problem and allow the Windows 95/98 client to parse the remote
	file (referenced in #INCLUDE) at startup, do one of the following:
	
	- Give CHANGE permissions to the file for the Everyone or Network group.
	
	-or-  - Create a batch file that runs nbtstat -R after logon.
	
	MORE INFORMATION
	================
	
	After you perform the procedure in the following Microsoft Knowledge Base
	article, Nullsessions support is enabled and the registry entry specifies the
	directory that is shared.
	
	  Q121281 LMHOSTS #Include Directives Requires Null Session Support
	
	The #INCLUDE statement is used as a way for administrators to have a centralized
	LMHOSTS file that clients parse. In this way, the administrator can edit one
	file on the server and the clients are then updated.
	
	LMHOSTS File at the Client and Server Computer:
	
	- The LMHOSTS file on the client has two entries. One entry for the server that
	  the #INCLUDE statement references and then the #INCLUDE statement, which can
	  reference a text or LMHOSTS file.
	
	- The remote file has the centralized list of entries.
	
	When the remote file referenced in the #INCLUDE statement does NOT have at least
	WRITE permission for the Everyone or the Network group, the Windows 95/98 client
	parses its own LMHOSTS file, but does not parse the remote file. Directly after
	startup, run the following command from an MS-DOS command prompt: "nbtstat -c"
	(without the quotation marks) The result shows (at a minimum) three entries for
	the server that contains the remote file, but not the contents of the remote
	file.
	
	After the startup process is complete, it is possible to run "nbtstat -R"
	(without the quotation marks) and then "nbtstat -c" (without the quotation
	marks) and the remote file is then parsed.
	
	If the remote file does have at least WRITE permissions for the Everyone or
	Network group, then both the entries in the local LMHOSTS and the remote file
	are seen with "nbtstat -c" (without the quotation marks) at startup.
	
	REFERENCES
	==========
	
	For more information, please see the following Microsoft Knowledge Base
	articles:
	
	  Q121281 LMHOSTS #Include Directives Requires Null Session Support
	
	  Q102725 LMHOSTS File Information and Predefined Keywords
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : WINDOWS:95; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
