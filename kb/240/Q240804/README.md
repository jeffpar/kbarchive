---
layout: page
title: "Q240804: Pause Statement Does Not Work in Logon Script"
permalink: kb/240/Q240804/
---

## Q240804: Pause Statement Does Not Work in Logon Script

	Article: Q240804
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): kbenv win95 win98 win98se
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows 98 Second Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use a Pause statement in a logon script for troubleshooting, the
	process is not stopped and the logon script window closes.
	
	CAUSE
	=====
	
	This behavior can occur if a script does not complete correctly. Some script
	errors cause the logon script to end prematurely. If the script ends before
	reaching the Pause statement, the script is not processed and the window is
	closed. This prevents you from seeing any error messages that are generated.
	
	RESOLUTION
	==========
	
	To work around this problem, change the program properties for the logon script
	processor (Lmscript.exe):
	
	1. Right-click the Lmscript.pif file. The Lmscript.pif file is located in the
	  <Windir>\System folder, where <Windir> is the name of your
	  Windows folder.
	
	2. Click Properties, and then click Program.
	
	3. Click to clear the "Close On Exit" check box, and then click OK.
	
	The logon script window should now remain open after the logon script ends.
	
	MORE INFORMATION
	================
	
	For additional information about how to determine which folder Windows is
	installed in, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q305792 How to Determine Which Folder Windows Is Installed In
	
	Additional query words: continue program information file pif
	
	======================================================================
	Keywords          : kbenv win95 win98 win98se 
	Technology        : kbWin95search kbWin98search kbWin98SEsearch kbZNotKeyword3 kbWin98 kbWin98SE
	Version           : WINDOWS:95
	Issue type        : kbprb
	
	=============================================================================
	
