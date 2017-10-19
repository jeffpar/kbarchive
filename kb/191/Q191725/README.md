---
layout: page
title: "Q191725: Err Msg: Insufficient Conventional Memory to Run Windows"
permalink: /kb/191/Q191725/
---

## Q191725: Err Msg: Insufficient Conventional Memory to Run Windows

	Article: Q191725
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv kberrmsg win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to start your Windows 95-based computer, you may receive the
	following error message:
	
	  Insufficient conventional memory to run Windows.
	  Reconfigure your system to increase available memory and try again.
	
	  Windows has stopped. Press CTRL+ALT+DELETE to restart your computer.
	
	CAUSE
	=====
	
	This behavior can occur if your Windows 95-based computer is trying to use
	Microsoft Windows 98 system files. This can occur if the system files were
	transferred from a Windows 98 Startup disk to your Windows 95-based computer by
	using the sys command.
	
	RESOLUTION
	==========
	
	To resolve this issue, transfer Windows 95 system files to your Windows 95-based
	computer by using the sys command. To do so, use the following steps:
	
	1. Insert a Windows 95 Startup disk in your floppy drive and then restart your
	  computer.
	
	  NOTE: Verify that the Windows 95 Startup disk you insert matches the exact
	  revision of Windows 95 you are using in your computer. To do so, see the
	  following article in the Microsoft Knowledge Base:
	
	  Q158238 How to Determine the Version of Windows 95/98/Me in Use
	
	2. At the command prompt, type "sys c:" (without the quotation marks), and then
	  press ENTER.
	
	3. Remove the Windows 95 Startup disk from your floppy drive and then restart
	  your computer.
	
	======================================================================
	Keywords          : kbenv kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
