---
layout: page
title: "Q248662: Internet Information Server Help File Does Not Open"
permalink: kb/248/Q248662/
---

## Q248662: Internet Information Server Help File Does Not Open

	Article: Q248662
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have Internet Information Server 4.0 installed on a Microsoft Windows
	NT 4.0 Server-based computer, and you attempt to open the "Help on Internet
	Information Server" file from the Microsoft Management Console (MMC), the Help
	file may not open and you may receive the following error message in Internet
	Explorer:
	
	  The system cannot find the file specified.
	
	CAUSE
	=====
	
	This behavior can occur when you use host headers with the Default Web Site. The
	Default Web Site should use the Internet Protocol (IP) address of All Unassigned
	and Transmission Control Protocol (TCP) port 80 and should not use a host header
	name.
	
	RESOLUTION
	==========
	
	To resolve this behavior, remove the host header from the Default Web Site.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbiisSearch kbiis400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
