---
layout: page
title: "Q129494: PRB: GPF When MultiColumn &amp; LBS_OWNERDRAWVARIABLE in List Box"
permalink: /kb/129/Q129494/
---

## Q129494: PRB: GPF When MultiColumn &amp; LBS_OWNERDRAWVARIABLE in List Box

{% raw %}

	Article: Q129494
	Product(s): Microsoft C Compiler
	Version(s): 1.00 1.50 1.51 1.52 2.00
	Operating System(s): 
	Keyword(s): kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbprb kbGrpDSTools
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A General Protection Fault (GPF) or Application Error occurs when attempting to
	display a dialog box or FormView that contains a list box with both the
	multicolumn (LBS_MULTICOLUMN) and ownerdraw, variable height
	(LBS_OWNERDRAWVARIABLE) styles.
	
	CAUSE
	=====
	
	This is expected behavior. Windows, Windows NT, and Windows 95 do not support
	multicolumn, ownerdraw, variable height list boxes.
	
	RESOLUTION
	==========
	
	For list boxes that are owner drawn and multicolumn, use the fixed height style
	(LBS_OWNERDRAWFIXED).
	
	For list boxes that are owner drawn and use the variable height style
	(LBS_OWNERDRAWVARIABLE), do not use the multicolumn style (LBS_MULTICOLUMN).
	
	MORE INFORMATION
	================
	
	The Dialog Editor that ships with all versions of Visual C++ prior to version
	4.0 incorrectly allow these incompatible styles to be combined using the check
	boxes on the property page for the list box control. (Visual C++, 32-bit
	Edition, version 4.0 disables the Multi-column check box when Variable is the
	setting selected for Owner draw.) These styles, LBS_MULTICOLUMN and
	LBS_OWNERDRAWVARIABLE, may also be combined incorrectly if the dialog box
	resource file (.RC) is edited directly.
	
	Steps to Reproduce Problem
	--------------------------
	
	The problem can be reproduced by modifying the CTRLTEST sample:
	
	1. Open AppStudio on CTRLTEST project.
	
	2. Open IDD_CUSTOM_LIST dialog box.
	
	3. Select the list box.
	
	4. In the ListBox Properties Dialog, go to Styles.
	
	5. Select MultiColumn and OwnerDraw as Variable Styles.
	
	6. Build and Execute the sample.
	
	7. The GP fault occurs when you choose the menu item (Custom\Custom ListBox).
	
	To reproduce the problem using Visual C++ version 4.0, use the following steps:
	
	1. Open CTRLTEST.RC in a text editor (for example, NotePad).
	
	2. Add "| LBS_MULTICOLUMN" to the list of styles for the LISTBOX object of the
	  IDD_CUSTOM_LIST DIALOG object.
	
	3. Save and close CTRLTEST.RC.
	
	4. Open the CTRLTEST project in Developer Studio.
	
	5. Build and Execute the sample.
	
	6. The Application Error occurs when you choose the Custom ListBox option from
	  the Custom menu.
	
	Additional query words: listbox
	
	======================================================================
	Keywords          : kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC210 kbVC400 kbprb kbGrpDSTools 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.00 1.50 1.51 1.52 2.00
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
