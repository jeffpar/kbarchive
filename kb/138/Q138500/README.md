---
layout: page
title: "Q138500: PRB: Array-Based List Box or Combo Box Shows One Row Only"
permalink: kb/138/Q138500/
---

## Q138500: PRB: Array-Based List Box or Combo Box Shows One Row Only

	Article: Q138500
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A list box or combo box using an array as a row source (that is, the array is
	given in the RowSource property) shows only the first item in the list when the
	form is instantiated.
	
	CAUSE
	=====
	
	The array in question is a property of the form or formset. The commands to
	create the array were contained in the Init event of the form.
	
	This behavior occurs because of the instantiation order of objects within the
	form container. Usually, an array property of a form is created as a
	one-dimensional array, one row in height. The list box or combo box is created
	using this small array. Due to performance considerations, the control is not
	automatically resized when the array is redimensioned in the Init event of the
	form.
	
	RESOLUTION
	==========
	
	After issuing any command that redimensions the array used as a RowSource,
	invoke the REQUERY() method of the control. The REQUERY() method will cause the
	control to display all rows in the array.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior and Demonstrate Resolution
	------------------------------------------------------
	
	1. Create a new form. Add a property with the following name:
	
	     gaFonts[1]
	
	2. In the Init event of the form, add this line of code:
	
	     lnFonts = AFONT(ThisForm.gaFonts)
	
	3. Place a list box on the form, and set these properties:
	
	     RowSourceType = 5 (Array)
	     RowSource     = ThisForm.gaFonts
	     Name          = lstFonts
	
	4. Run the form. Only one font is displayed.
	
	5. Add the following line to the end of the Init event of the form:
	
	     THISFORM.lstFonts.Requery()
	
	6. Rerun the form. All fonts should appear as expected.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
