---
layout: page
title: "Q94612: DOCERR: Name of Standard Help Menu Incorrect for InsertItem"
permalink: /kb/094/Q94612/
---

## Q94612: DOCERR: Name of Standard Help Menu Incorrect for InsertItem

	Article: Q94612
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An "Unable to add menu item" error message occurs when trying to add a menu item
	to the Windows Help engine's Help menu with InsertItem().
	
	CAUSE
	=====
	
	MNU_HELPON is being used as the Help menu identifier in the InsertItem() macro.
	
	RESOLUTION
	==========
	
	Page 318 of Microsoft Windows version 3.1 SDK "Programmer's Reference, Volume 4:
	Resources" incorrectly lists MNU_HELPON as the Help menu identifier for the Help
	engine. The correct identifier for the Help menu is MNU_HELP. Using the
	incorrect identifier does not cause an error when the Help file is compiled, but
	does cause an "Unable to add menu item" error when the macro is executed by the
	Windows Help engine.
	
	Additional query words: 3.10 winhelp hc docerr
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
