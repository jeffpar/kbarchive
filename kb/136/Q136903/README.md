---
layout: page
title: "Q136903: PRB: Open Dialog Box in SET VIEW If Table Name Contains Space"
permalink: /kb/136/Q136903/
---

## Q136903: PRB: Open Dialog Box in SET VIEW If Table Name Contains Space

	Article: Q136903
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft FoxPro for Macintosh, version 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A dialog box appears to prompt the user to 'Select a Table' when the user issues
	the SET VIEW TO <file> command, or when the user clicks Open on the File
	menu and opens an existing view file.
	
	CAUSE
	=====
	
	When the view file was created, one or more of the tables in the view has a
	space in the table name.
	
	RESOLUTION
	==========
	
	Remove the spaces from the table name. Then recreate the view.
	
	STATUS
	======
	
	Microsoft is researching this behavior and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create one or more tables that has at least one space in its name.
	
	2. In the View window, set a relationship on a common indexed field between this
	  table, either as parent or as a child, and another table.
	
	3. Save the open tables and relations to a view file by:
	
	   - Clicking Save As on the File menu and entering a name, such as Spaces, in
	     the Save View as dialog box.
	
	  -or-
	
	   - Typing CREATE VIEW Spaces in the Command window.
	
	4. Either type SET VIEW TO Spaces in the Command window, or click Open on the
	  File menu, choose View as file type, and open Spaces. At this point, an Open
	  dialog box appears that prompts you to select a table.
	
	Additional query words: vFoxMac FoxMac vue index order
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
