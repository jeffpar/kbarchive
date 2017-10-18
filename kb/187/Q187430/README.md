---
layout: page
title: "Q187430: Client Setup Requires License That Is Already Installed"
permalink: kb/187/Q187430/
---

## Q187430: Client Setup Requires License That Is Already Installed

	Article: Q187430
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
	
	When you install the Terminal Server Client, the following message will appear
	after the Name and Organization Information dialog box:
	
	  Please note that use of this client software requires a valid Windows NT
	  Workstation license and Windows NT Server Client Access License, as described
	  in the End-User License Agreement for Microsoft Windows NT Server version
	  4.0, Terminal Server Edition. This license can be found both in hard copy
	  form in the box containing the server software and in electronic form in the
	  eula.txt file located in the \i386 and \alpha directories on the CD-ROM.
	
	
	STATUS
	======
	
	This behavior is by design. The Terminal Server Client Setup does not detect
	whether the appropriate licenses are available on Terminal Server. This message
	will appear whether or not the licenses exist.
	
	Additional query words: TS client
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : WinNT:4.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
