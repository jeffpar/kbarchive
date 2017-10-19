---
layout: page
title: "Q130503: PRB: Grid Width and Height Decimal Values Not Saved"
permalink: /kb/130/Q130503/
---

## Q130503: PRB: Grid Width and Height Decimal Values Not Saved

	Article: Q130503
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
	
	You can enter Width and Height property values for grids into the properties
	sheet to two decimal places, but when you save the entry, it is forced to a
	value different from the one you specified.
	
	CAUSE
	=====
	
	The scale unit is in foxels, so this is an expected behavior. The foxel values
	are rounded to the nearest pixel-equivalent position. For example, if you have a
	font where FONTMETRIC(7) equals 12, you get one pixel of width for every .083
	foxel columns (approximately). Thus you'd see values like 1.00, 1.08, 1.17, and
	so on.
	
	WORKAROUND
	==========
	
	Change the scale unit to pixels. If it was in pixels to begin with, you would
	have no fractions at all. To change the scale unit to pixels, follow these
	steps:
	
	1. From the Tools menu, choose Options.
	
	2. In the Options dialog box, select the "FORMS" tab from the page frame.
	
	3. Change the "scale unit" to pixels. This is the default setting unless it was
	  previously changed to foxels.
	
	4. Click the Set as Default button.
	
	5. Click the OK button to close the Options dialog box.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Before proceeding to the following steps, verify that the unit scale is set to
	foxels.
	
	1. Modify Form <FormName>.
	
	2. Add a grid control.
	
	3. From the Properties Sheet for the grid control, set the Width property to
	  50.11.
	
	4. Note that while you can enter 50.11, when you save the property, it is forced
	  to 50.00.
	
	5. Set the Width property to 50.40.
	
	6. Note that while you can enter 50.40, when you save the property, it is forced
	  to 50.33.
	
	Additional query words: VFoxWin decimals
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
