---
layout: page
title: "Q137945: How to Change the Font in All Controls Without Using a Builder"
permalink: kb/137/Q137945/
---

## Q137945: How to Change the Font in All Controls Without Using a Builder

	Article: Q137945
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Visual FoxPro Form Designer does not provide a menu choice to select all
	objects and change the font. This capability was available in FoxPro version 2.x
	for Windows.
	
	You can create a builder that will change the font for all selected objects. This
	article shows you how to do the same thing without writing builder code by:
	
	- Using the Command window.
	
	-or-
	
	- Using the ASELOBJ() function in a program.
	
	MORE INFORMATION
	================
	
	Using the Command Window Only
	-----------------------------
	
	To change the font for all objects on a form, perform the following steps:
	
	1. Design the form.
	
	2. Click the exclamation mark (!) icon on the toolbar to run the form.
	
	3. Switch to the Command window.
	
	4. Change the font of all objects in the running form by using the setall method
	  of the form. Enter the following command in the Command window, where
	  formname is the name of your form:
	
	     formname.setall("FontName","Arial")
	     formname.setall("FontSize",10)
	
	5. Save the form back to a .scx file format by using the saveas method of the
	  form:
	
	     formname.saveas("newformname")
	
	This method does have some limitations:
	
	- All objects on the form are changed to the same font. You can use the
	  optional third parameter of the setall method to limit the change to certain
	  types of objects.
	
	- The saveas method does not allow the form to be saved under the original
	  filename.
	
	- If you want to change the font of selected objects only, you must write a
	  builder or set the properties for each individual object separately.
	
	- Objects added after doing this procedure do not reflect the new font setting.
	
	Using the ASELOBJ() Function in a Program
	-----------------------------------------
	
	The following program can form the basis of a builder. You can also run this
	program from the Command window while in design mode of a form.
	
	1. Design the form, and select the objects.
	
	2. Create a .prg file that contains the following lines of code, and save the
	  program as Myfonts.prg:
	
	     lnNumOfControls = ASELOBJ(laFonts)
	     FOR ctr = 1 TO lnNumOfControls
	        WITH laFonts(ctr)
	           .FontName = "Arial"
	           .FontSize = 12
	           .FontBold = .F.
	        ENDWIDTH
	     ENDFOR
	
	3. In the Command window, type this command:
	
	     DO myfonts
	
	This technique has the advantage of making changes directly in the form.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
