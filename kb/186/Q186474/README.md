---
layout: page
title: "Q186474: Java Applets Will Not Run on Terminal Server"
permalink: kb/186/Q186474/
---

## Q186474: Java Applets Will Not Run on Terminal Server

	Article: Q186474
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
	
	Java applets will not run on Terminal Server.
	
	CAUSE
	=====
	
	When Internet Explorer 3.02 is installed on Terminal Server, Classes.zip is
	installed under the user's home directory rather than in the System directory.
	The file is installed to:
	
	  %systemroot%\profiles\%username%\windows\java\classes
	
	RESOLUTION
	==========
	
	To resolve this problem, copy Classes.zip to:
	
	  %systemroot\java\classes
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
