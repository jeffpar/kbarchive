---
layout: page
title: "Q230725: Err Msg: GRPCONV.EXE Is Not a Valid Windows NT Application"
permalink: /kb/230/Q230725/
---

## Q230725: Err Msg: GRPCONV.EXE Is Not a Valid Windows NT Application

	Article: Q230725
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv kberrmsg kbtool
	Last Modified: 11-DEC-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you enable the Application Security (Appsec.exe) tool and a new user logs
	on to Windows NT Terminal Server for the first time, you may receive the
	following error message:
	
	  GRPCONV.EXE is not a valid Windows NT application.
	
	CAUSE
	=====
	
	This issue can occur if the authorized application list for the Application
	Security tool does not contain an entry for the Grpconv.exe tool.
	
	RESOLUTION
	==========
	
	To resolve this issue, add the following entry for the Windows Program Group
	Converter (Grpconv.exe) tool to the authorized application list in the
	Application Security tool
	
	  <drive>:\wtsrv\system32\grpconv.exe
	
	where <drive> is the letter of the drive where you installed Windows NT
	Terminal Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv kberrmsg kbtool 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
