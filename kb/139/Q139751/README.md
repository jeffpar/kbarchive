---
layout: page
title: "Q139751: Microsoft Plus! Does Not Update Program Groups During Setup"
permalink: kb/139/Q139751/
---

## Q139751: Microsoft Plus! Does Not Update Program Groups During Setup

	Article: Q139751
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are using Program Manager (instead of Windows Explorer) as the shell in
	Windows 95, Microsoft Plus! Setup does not create or update program groups in
	Windows 95. The System Tools menu does not display the updated DriveSpace 3
	item, and the Compression Agent, Internet Explorer, Internet Setup Wizard, and
	3D Pinball items are not displayed on any menu.
	
	CAUSE
	=====
	
	This behavior occurs if you are using Program Manager as the shell in Windows
	95.
	
	Although Program Manager is included with Windows 95, it has not been updated
	from earlier versions of Windows. Note that you may encounter several issues
	when you use Program Manager as the shell with Microsoft Plus!.
	
	RESOLUTION
	==========
	
	To resolve these issues, use Windows Explorer as the shell in Windows 95. To use
	Windows Explorer as the shell, follow these steps:
	
	1. Click the Start button, and then click Run.
	
	2. Type "system.ini" (without the quotation marks) in the Open box, and then
	  click OK.
	
	3. In the [boot] section of the file, replace the line that reads
	
	  shell=progman.exe
	
	  with the following line:
	
	  shell=explorer.exe
	
	4. Save and then close the file.
	
	5. Restart Windows 95.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Plus! version 1.0 for
	Windows 95. We are researching this problem and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
