---
layout: page
title: "Q186532: Only Administrators Can Connect to Terminal Server"
permalink: kb/186/Q186532/
---

## Q186532: Only Administrators Can Connect to Terminal Server

	Article: Q186532
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Only administrators can connect to the Terminal Server computer.
	
	RESOLUTION
	==========
	
	To resolve this problem, perform one or both of the following:
	
	- Check License Manager to see if the Server is licensed in Per Server mode and
	  the license count is set to zero.
	
	- Check User Manager to see if users have been granted the right to Access this
	  Computer From the Network.
	
	Either of these will result in only administrators being able to connect to the
	Terminal Server.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
