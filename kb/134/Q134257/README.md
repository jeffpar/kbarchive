---
layout: page
title: "Q134257: PRB: Pressing DOWN ARROW in Property List Causes Win32s Error"
permalink: /kb/134/Q134257/
---

## Q134257: PRB: Pressing DOWN ARROW in Property List Causes Win32s Error

	Article: Q134257
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the DOWN ARROW key to scroll through a list of the properties for an
	object on a form, and that object contains a FontName property, Visual FoxPro
	quits and a Win32s error is displayed.
	
	This happens only on a computer using one of the 16-bit versions of Microsoft
	Windows, or Windows for Workgroups, version 3.x.
	
	CAUSE
	=====
	
	The system has a very large number (178 or more) of fonts installed.
	
	
	NOTE: You can examine the FontName list by using the combo box of the FontName
	entry on the Properties list for the object.
	
	WORKAROUND
	==========
	
	Follow these steps:
	
	1. Open Control Panel in the Windows Main Program Group.
	
	2. Double-click Fonts.
	
	3. Reduce the number of fonts to less than 178.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Install more than 178 font families on the system.
	
	2. In Visual FoxPro, open the Forms Designer to a new form.
	
	3. Open the TESTDATA database in the Samples\Data subdirectory.
	
	4. Add the CUSTOMER table to the data environment.
	
	5. Drag the table from the data environment to the form under design.
	
	6. Click the form. Then use the right mouse to click the form again. Select
	  Properties.
	
	7. Change the Caption property of the form.
	
	8. Press and hold down the DOWN ARROW key to move through the properties. When
	  the line to be selected is the FontName property, execution pauses while the
	  data needed to populate the FontName ComboBox is assembled. If there are too
	  many font families, the system faults and displays a Win32s error.
	
	
	Additional query words: 3.00 VFoxWin font
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
