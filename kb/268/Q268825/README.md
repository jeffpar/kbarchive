---
layout: page
title: "Q268825: 'Unable to Initialize KRNL32.EXE' Error Message"
permalink: /kb/268/Q268825/
---

## Q268825: 'Unable to Initialize KRNL32.EXE' Error Message

	Article: Q268825
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Internet Explorer 4.1 on a computer running Microsoft Windows NT
	Server 4.0, Terminal Server Edition, after you install the Windows NT 4.0 Option
	Pack, the following error message may appear:
	
	  MDM.EXE - Unable to Initialize KRNL32.EXE
	
	CAUSE
	=====
	
	This behavior occurs because Windows NT 4.0 Option Pack is not supported on the
	Terminal Server Edition of Windows NT 4.0.
	
	WORKAROUND
	==========
	
	To work around this behavior, use Internet Information Server 3.0, which comes
	with Windows NT Server 4.0, Terminal Server Edition, for Web server
	functionality on the Terminal Server.
	
	MORE INFORMATION
	================
	
	Windows NT 4.0 Option Pack is not supported because neither Internet Information
	Server 4.0 nor Microsoft Transaction Server functions correctly when installed
	on a computer running Terminal Server. Customer applications that require these
	Option Pack technologies may not function properly either when they are
	installed on Terminal Server.
	
	Site Server also is not supported on Terminal Server.
	
	The error message states that Machine Debug Manager (Mdm.exe), which is used by
	the Microsoft Visual Studio in Internet Explorer to debug ActiveX scripts, is
	not working. Because the script debugging tool is not supported with Terminal
	Server, it should not be installed. If you did install it, follow these steps to
	remove it:
	
	1. In Control Panel, double-click Add/Remove Programs.
	
	2. Click Windows NT 4.0 Option Pack, and then click Add/Remove.
	
	3. Within the setup program, click Machine Debug Manager to uninstall it.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
