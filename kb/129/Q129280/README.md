---
layout: page
title: "Q129280: HOWTO: Change the Color of the Active Cell in a Grid"
permalink: kb/129/Q129280/
---

## Q129280: HOWTO: Change the Color of the Active Cell in a Grid

	Article: Q129280
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbvfp500 kbvfp600
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Grid control is more flexible than the BROWSE command. A Grid contains
	columns that in turn contain controls, it is possible to manipulate data at the
	control, or cell, level. The example provided in this article shows how to
	modify the color of an active cell when you access it with the keyboard or the
	mouse.
	
	MORE INFORMATION
	================
	
	You can add any control to the column of a grid, and can access its properties,
	events, and methods. The ACTIVECONTROL property returns the name of the control
	displayed in a column, and by default, a column of a grid contains a text box
	with the name Text1.
	
	Step-by-Step Example
	--------------------
	
	This example provides a generic way to control the background color of the active
	control for any column in the Grid by using the Form Designer. It changes the
	value of the BACKCOLOR and SELECTEDBACKCOLOR properties.:
	
	1. Create a Form.
	
	2. Right-click the form, and select Data Environment. Select the
	  SAMPLES\DATA\CUSTOMER table.
	
	3. Place a Grid on the form. In the property sheet, select Grid1 from the Object
	  dropdown. Select the Init event handler, and type the following code:
	
	     nColumncount=this.columncount
	     * The color of the current control is changed to red for every column
	     * in the grid.
	     FOR I=1 to nColumnCount
	        * Objref  returns a reference to the current control
	        objref=EVAL('this.columns(i).'+this.column1.currentcontrol)
	        * Modifies the backcolor property of the control. Any property of
	        * the control can be manipulated this way.
	        objref.BackColor=RGB(255,0,0)
	        objref.SelectedBackcolor=RGB(255,0,0)
	     ENDFOR
	
	4. Save and run the form. When you access any cell on the grid, the background
	  color changes to red.
	
	This example will need a special case if the current control is a command button
	because the COMMANDBUTTON class does not have a BACKCOLOR or SELECTEDBACKCOLOR
	property.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Version           : WINDOWS:3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
