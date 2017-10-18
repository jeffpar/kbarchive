---
layout: page
title: "Q139864: PRB: &quot;Cannot Update the Cursor&quot; Error When Running Browser.app"
permalink: kb/139/Q139864/
---

## Q139864: PRB: &quot;Cannot Update the Cursor&quot; Error When Running Browser.app

	Article: Q139864
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to run Browser.app, you receive this error message:
	
	  Cannot Update the Cursor
	
	CAUSE
	=====
	
	Browser.app is being run from a network, and the user doesn't have write
	privileges.
	
	RESOLUTION
	==========
	
	Move Browser.app to the workstation, or give the user write privileges to the
	directory were it resides on the network.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Browser.app creates a .dbf file and an .fpt file that hold information and
	preferences for each class that you examine.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
