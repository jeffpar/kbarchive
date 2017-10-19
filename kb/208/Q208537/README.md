---
layout: page
title: "Q208537: Err Msg: Error in Deskcp16.dll Missing Entry..."
permalink: /kb/208/Q208537/
---

## Q208537: Err Msg: Error in Deskcp16.dll Missing Entry...

	Article: Q208537
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kberrmsg win95
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you try to start your Windows 95-based computer, you may receive the
	following error message:
	
	  Error in deskcp16.dll missing entry quickres_rundllentry
	
	CAUSE
	=====
	
	This behavior can occur if the Microsoft Powertoys QuickRes tool is installed on
	your computer.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	To resolve this issue, remove the Deskcp16.dll value from one of the following
	registry keys and then restart your computer:
	
	- 
	  HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
	
	- 
	  HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Run
	
	MORE INFORMATION
	================
	
	For additional information about PowerToys, please see the following article in
	the Microsoft Knowledge Base:
	
	  Microsoft Windows PowerToys Readme.txt File
	
	Additional query words: 95
	
	======================================================================
	Keywords          : kberrmsg win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
