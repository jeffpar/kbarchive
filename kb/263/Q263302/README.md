---
layout: page
title: "Q263302: The AM/PM Characters on the Taskbar Clock Are Garbled"
permalink: kb/263/Q263302/
---

## Q263302: The AM/PM Characters on the Taskbar Clock Are Garbled

	Article: Q263302
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	In Windows 95, Windows 98, or Windows 98 Second Edition (SE), you may notice
	that the AM/PM clock setting located on the taskbar has changed to garbled
	characters or symbols.
	
	CAUSE
	=====
	
	This issue can occur if a third-party software program, or a virus has modified
	the system registry.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve this issue, delete the s1159 and s2359 string values in the registry.
	To make these changes, follow these steps:
	
	1. Click Start, click Run, type "Regedit" (without the quotation marks), and
	  then click OK.
	
	2. Navigate to the following registry key:
	
	  HKEY_CURRENT_USER\Control Panel\International
	
	3. Right-click, and then delete the s1159, and s2359 string values.
	
	4. Close Registry Editor, and then restart the computer for the changes to take
	  affect.
	
	MORE INFORMATION
	================
	
	Some viruses are known to put a happy face, words, symbols, or characters in
	place of the AM/PM settings.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : :95
	Issue type        : kbprb
	
	=============================================================================
	
