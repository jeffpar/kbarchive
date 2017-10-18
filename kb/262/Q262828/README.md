---
layout: page
title: "Q262828: Long Server Name Not Found with Terminal Server Client"
permalink: kb/262/Q262828/
---

## Q262828: Long Server Name Not Found with Terminal Server Client

	Article: Q262828
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you start the Terminal Server client (Mstsc.exe) and type a name that is
	longer than 32 characters, the server is not found because Mstsc.exe truncates
	the name after 32 characters.
	
	
	RESOLUTION
	==========
	
	To work around this behavior, use any of the following methods:
	
	- Use the Microsoft Windows 2000 version of the Mstsc.exe program.
	
	- Use the server's IP address instead of its fully qualified domain name
	  (FQDN).
	
	- Use the server's NetBIOS name.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem has been corrected in Microsoft Windows 2000.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
