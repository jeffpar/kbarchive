---
layout: page
title: "Q175798: Error Message Appears When Creating a Demand Dial Interface"
permalink: kb/175/Q175798/
---

## Q175798: Error Message Appears When Creating a Demand Dial Interface

	Article: Q175798
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft WinLogin, version 4.0 
	- Microsoft Routing and Remote Access Service Update for Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you create a demand dial interface with Routing and RAS Admin, you may
	receive the following error message:
	
	  An application error has occurred and an application error log is being
	  generated. mpradmin.exe Exception access violation (0x0000005) Address
	  (<address>)
	
	NOTE: <address> will be a specific address on your computer.
	
	CAUSE
	=====
	
	This problem appears when you start Routing and RAS Admin (Mpradmin.exe) from a
	folder other than the System32 folder. You may also see this problem when you
	start the copy of Mpradmin.exe in the Routing folder instead of the copy in the
	%Systemroot%\System32 folder.
	
	RESOLUTION
	==========
	
	To solve the problem, use one of the following methods:
	
	- Start Routing and RAS Admin from the menus creating during the Routing and
	  Remote Access Service (RRAS) installation by doing the following:
	
	  1. Click Start, and then point to Programs.
	
	  2. Point to Administrative Tools, and then click Routing and RAS Admin.
	
	  -or-
	
	- Create a shortcut on the desktop using the following information:
	
	  Target : %SYSTEMROOT%\SYSTEM32\mpradmin.exe
	  Start in: %HOMEDRIVE%%HOMEPATH%
	
	For more information on how to create a desktop shortcut, please refer to the
	Windows NT online help.
	
	
	Additional query words: dr. watson
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbAudDeveloper kbWinLoginSearch kbRRASNTSearch kbRRASNT400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
