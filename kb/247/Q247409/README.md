---
layout: page
title: "Q247409: RD Command with /S and &quot;&quot; Parameters Deletes All Subdirectories"
permalink: /kb/247/Q247409/
---

## Q247409: RD Command with /S and &quot;&quot; Parameters Deletes All Subdirectories

	Article: Q247409
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:2000; winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run the RD command with the /S and "" parameters at a command prompt in
	Windows NT 4.0 or Windows 2000 Beta Version, all the subdirectories are deleted,
	even if you receive the following error message:
	
	  The system cannot find the path specified.
	
	CAUSE
	=====
	
	The RD command in Windows NT 4.0 uses the NULL string as the current working
	directory.
	
	RESOLUTION
	==========
	
	Microsoft recommends that you do not use a NULL string as a directory name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be an issue in Windows NT 4.0 and Windows 2000
	Beta version.
	
	
	Additional query words: Utilities tools
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbwin2000ServSearch kbwin2000Search
	Version           : WINDOWS:2000; winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
