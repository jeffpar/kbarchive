---
layout: page
title: "Q128772: PRB: Tools Options Does Not Reset Buffering for Current Table"
permalink: kb/128/Q128772/
---

## Q128772: PRB: Tools Options Does Not Reset Buffering for Current Table

	Article: Q128772
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Changing the buffering mode through the Data tab of the Tools, Options dialog
	does not reset the buffering mode for any open tables.
	
	CAUSE
	=====
	
	This is by design. Changing the buffering mode through the Tools, Options dialog
	sets the default buffering mode for any tables or cursors opened in successive
	commands in the current instance Visual FoxPro.
	
	WORKAROUND
	==========
	
	To change the buffering mode for a currently open table, use the CURSORSETPROP()
	function in a program or in the Command window, or highlight the table and use
	the Properties button in the View Window.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
