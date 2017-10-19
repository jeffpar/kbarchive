---
layout: page
title: "Q130354: PRB: GRID.COLUMN() Gives &quot;Property COLUMN is not Found&quot; Error"
permalink: /kb/130/Q130354/
---

## Q130354: PRB: GRID.COLUMN() Gives &quot;Property COLUMN is not Found&quot; Error

	Article: Q130354
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue a command similar to the following to change the property of Grid
	Column(s), you receive an "Property COLUMN is not found." error message.
	
	     ThisForm.Grid1.Column(<n>).<Property>[=Setting]
	
	CAUSE
	=====
	
	The Grid property is spelled Columns, not Column.
	
	RESOLUTION
	==========
	
	To access the properties of a particular column in a grid, use the Columns
	property of the grid as in this example"
	
	     ThisForm.Grid1.Columns(<n>).<Property>[=Setting]
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Add a grid to the form that has five columns.
	
	3. Add a command button to the form, and place the following code in its click
	  event:
	
	     for i=3 to 5
	        thisform.grid1.column(i).width=10
	     endfor
	
	4. Run the screen, and click the command button button to see the "Unknown
	  Member Column" error message.
	
	To make the click event code work, change the code to this:
	
	     for i=3 to 5
	        thisform.grid1.columns(i).width=10
	     endfor
	
	Additional query words: VFoxWin ThisFormSet
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
