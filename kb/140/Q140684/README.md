---
layout: page
title: "Q140684: Connectoid's Associated Script File Does Not Run"
permalink: kb/140/Q140684/
---

## Q140684: Connectoid's Associated Script File Does Not Run

	Article: Q140684
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): dun win95 kbDialUp
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Plus! for Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you associate a script file with a Dial-Up Networking connectoid using the
	Dial-Up Scripting Tool included with Microsoft Plus!, the script file may not
	run when you double-click the connectoid.
	
	CAUSE
	=====
	
	This behavior can occur if the Dial-Up Networking connectoid that the script
	file is associated with is configured to open a terminal window after dialing.
	When a connectoid is configured to open a terminal window after dialing, an
	associated script file does not run.
	
	RESOLUTION
	==========
	
	Configure the connectoid so that a terminal window is not opened after dialing.
	To do so, follow these steps:
	
	1. Use the right mouse button to click the connectoid, and then click Properties
	  on the menu that appears.
	
	2. Click Configure, and then click the Options tab.
	
	3. Click the "Bring up terminal window after dialing" check box to clear it, and
	  then click OK.
	
	======================================================================
	Keywords          : dun win95 kbDialUp 
	Technology        : kbWin95search kbGamesSearch kbPlusSearch kbZNotKeyword3 kbPlus95
	Version           : 95
	
	=============================================================================
	
