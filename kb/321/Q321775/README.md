---
layout: page
title: "Q321775: Error Loading Gdi.exe Connecting to Terminal Server"
permalink: /kb/321/Q321775/
---

## Q321775: Error Loading Gdi.exe Connecting to Terminal Server

	Article: Q321775
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start a Terminal Server client session, you may receive the
	following error message:
	
	  Error loading GDI.EXE
	
	CAUSE
	=====
	
	This issue may occur if both of the following conditions are true:
	
	- You are using a Microsoft Windows 95-based computer to connect to the
	  Terminal server.
	
	  -and-
	
	- The Windows 95-based computer is using a video card that uses hardware
	  acceleration.
	
	RESOLUTION
	==========
	
	To resolve this issue, reduce the graphics acceleration setting. To do so,
	follow these steps:
	
	1. Right-click My Computer, and then click Properties.
	
	2. Click the Performance tab, click Graphics, and then reduce the Hardware
	  Acceleration slider by one notch.
	
	3. Click OK, and then click Close.
	
	4. Click Yes when you are prompted to restart your computer.
	
	5. Try to start a Terminal Server Client session. If you receive the error
	  message again, repeat steps 1 through 4, and reduce the Hardware Acceleration
	  slider by another notch.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbNTTermServ400 kbNTTermServSearch
	Version           : :4.0
	Issue type        : kbprb
	
	=============================================================================
	
