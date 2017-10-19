---
layout: page
title: "Q137435: HOWTO: Drag and Drop from a Grid to a Text Box"
permalink: /kb/137/Q137435/
---

## Q137435: HOWTO: Drag and Drop from a Grid to a Text Box

	Article: Q137435
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbcode kbDesigner kbvfp300 kbvfp500 kbvfp600
	Last Modified: 24-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to drag text from a cell in a grid to a text
	box on a form.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Create a form called Dragndrop.
	
	2. Add the Customer table located in \Samples\Data to the environment.
	
	3. Place a grid on the form.
	
	4. Change the ColumnCount to 3.
	
	5. In the Properties window, select the Text1 object located in the column of
	  the grid. Place the following code in the MouseDown event of each
	  [form1|Grid1|Column] Text1 object.
	
	        This.Drag(1)
	
	6. Add a text box to the form. Place the following line of code in the DragDrop
	  event of the text box:
	
	        This.Value = oSource.Value
	
	  NOTE: oSource is a parameter defined in a DragDrop event of an object. It is
	  use in a DragDrop event as a reference to the control being . dragged You can
	  refer to properties and methods of the control being dragged by using this
	  oSource parameter.
	
	7. Run the form. Click any cell in the grid to select the field, and hold the
	  mouse button down. Drag the mouse pointer to the text field, and release the
	  mouse button to copy the contents of the grid cell into the text box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbDesigner kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP500 kbVFP600
	Issue type        : kbhowto
	
	=============================================================================
	
