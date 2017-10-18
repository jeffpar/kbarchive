---
layout: page
title: "Q142548: PRB: SelectOnEntry Property Is Ignored When KEYCOMP = DOS"
permalink: kb/142/Q142548/
---

## Q142548: PRB: SelectOnEntry Property Is Ignored When KEYCOMP = DOS

	Article: Q142548
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A Column in a Grid has the SelectOnEntry property set to True (.T.), but when
	the form is run, the text is not selected.
	
	CAUSE
	=====
	
	The KEYCOMP setting is set to DOS. The KEYCOMP setting controls the enabling or
	disabling of the SelectOnEntry property.
	
	STATUS
	======
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	If KEYCOMP = DOS is the desired default setting, issue a SET KEYCOMP TO WINDOWS
	in the procedure associated with the When event of the grid and issue a SET
	KEYCOMP TO DOS in the procedure associated with the Valid event of the grid.
	This will allow the SelectOnEntry property to function properly.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Form.
	
	2. Add a table to the Data Environment, and drag the window title of the table
	  onto the form to create a grid
	
	3. Change the ColumnCount property of the grid to 3, and ensure that each
	  column's SelectOnEntry property is set to True (.T.), which is the default.
	
	4. Save and close the form.
	
	5. Type "SET KEYCOMP TO DOS" (without the quotation marks) in the Command
	  window.
	
	6. Run the form.
	
	7. Move the pointer to different cells in the grid, and notice that the text
	  isn't selected.
	
	8. Type "SET KEYCOMP TO WINDOWS" (without the quotation marks) in the Command
	  window.
	
	9. Move the pointer to different cells in the grid, and notice that the text is
	  selected.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
