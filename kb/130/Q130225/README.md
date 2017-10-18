---
layout: page
title: "Q130225: PRB: Setting the ReadOnly Property of a Control Does Not Work"
permalink: kb/130/Q130225/
---

## Q130225: PRB: Setting the ReadOnly Property of a Control Does Not Work

	Article: Q130225
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
	
	Setting the READONLY property of a control in a Grid does not have any effect at
	runtime. It is possible to edit the data in the Grid.
	
	CAUSE
	=====
	
	The READONLY attribute is controlled by the READONLY property of the Column
	object, which takes precedence over the READONLY property of the controls
	contained in a column.
	
	WORKAROUND
	==========
	
	Set the READONLY property of a column to .T. if you want users to view the data
	without editing it.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form.
	
	2. Right-click and select Data Environment. Add the SAMPLES\DATA\CUSTOMER table
	  to the Data Environment.
	
	3. Place a grid on the form, and set the ColumnCount to 3.
	
	4. Select the Column2 object, and set its READONLY property to .T..
	
	5. Select the Text1 object contained in Column1, and set its READONLY property
	  to .T..
	
	6. Save and run the form. When the form is run, the data in Column1 can be
	  edited, but the data in Column2 cannot be changed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
