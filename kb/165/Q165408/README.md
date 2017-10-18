---
layout: page
title: "Q165408: HOWTO: Append Menu to an Existing Top-Level Form Menu"
permalink: kb/165/Q165408/
---

## Q165408: HOWTO: Append Menu to an Existing Top-Level Form Menu

	Article: Q165408
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbBuilder kbvfp500 kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how you can append a menu to an existing Top-Level Form
	menu.
	
	MORE INFORMATION
	================
	
	In order to do this correctly, you need to check APPEND in the Location option
	of the General Options dialog box in the Menu Designer. When running the menu to
	be appended, you need to pass it the name of the existing Top- Level Form in
	which it is to be appended.
	
	The following example shows you how you can create an append menu to an existing
	Top-Level Form menu.
	
	1. Create a menu.
	
	2. Type in "Test1" (without the quotation marks) and "Test2" (without the
	  quotation marks) for menu pad names.
	
	3. Click General Options from the View menu. Select the Top-Level Form check box
	  in the General Options dialog box.
	
	4. Generate the menu and save it as Menu1.mnx.
	
	5. Create a second menu.
	
	6. Type in "Test3" (without the quotation marks) for the menu pad name.
	
	7. Click General Options from the View menu. Select the Append option for
	  Location and the Top-Level Form check box in the General Options dialog box.
	
	8. Generate the menu and save it as Menu2.mnx.
	
	9. Create a form and name it Appform1.scx.
	
	10. Set the ShowWindow property for the form to "2 - As Top-Level Form" in the
	  Properties window.
	
	11. Add two command buttons to the form and name them Button1 and Button2.
	
	12. In the Click event of Button1, type in the following code:
	
	         DO menu1.mpr WITH THISFORM, .T.
	
	13. In the Click event of Button2, type in the following code:
	
	         DO menu2.mpr WITH THISFORM, THISFORM.NAME
	         && The append will not work without the second parameter.
	
	14. Run the form and choose Button1, and then Button2.
	
	NOTE: Button1 makes the first menu appear, and button2 appends the second menu to
	the end of the first menu.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbBuilder kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
