---
layout: page
title: "Q186613: Using the Start Command with Long File Names"
permalink: /kb/186/Q186613/
---

## Q186613: Using the Start Command with Long File Names

{% raw %}

	Article: Q186613
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
	
	You can use the Start command at a command prompt to start applications either
	at the Terminal Server console or within a Terminal Server Client session. For
	instance, the command
	
	       start "\\server\share\group contact info.xls"
	
	should open Excel and this spreadsheet, but it does not.
	
	CAUSE
	=====
	
	A problem in the parser in Windows NT Server 4.0 causes this command to fail.
	
	RESOLUTION
	==========
	
	To make the command work, the command line must be modified to:
	
	       start \\server\share\"group contact info.xls"
	
	STATUS
	======
	
	
	
	MORE INFORMATION
	================
	
	More generally, this command will fail:
	
	       start "\\LONG SERVER\LONG SHARE\LONG DIR\LONG FILE"
	
	This command will work:
	
	       start  \\"LONG SERVER"\"LONG SHARE"\"LONG DIR"\"LONG FILE"
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
