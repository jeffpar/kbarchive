---
layout: page
title: "Q128648: How to Create a List Box That Lists Available Fonts"
permalink: /kb/128/Q128648/
---

## Q128648: How to Create a List Box That Lists Available Fonts

	Article: Q128648
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 12-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To create a list box that lists available system fonts in Visual FoxPro 3.0, you
	need to use the AFONT() function. This function places information about
	available fonts into an array. This array may then be used to populate a list
	box on a form.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	The following procedure demonstrates how to create a form that contains a list
	box that displays the available system fonts:
	
	1. Open or switch to Microsoft Visual FoxPro version 3.0 and choose the New
	  command from the File Menu. This will open the New dialog box.
	
	2. Select the Program radio button. Then choose the New File button. This will
	  open an empty Program Window.
	
	3. Enter the following code into the Program Window:
	
	     PUBLIC X
	     X=CREATEOBJECT("myform")
	     X.SHOW()
	
	     ** Class Definition for the FORM object **
	     DEFINE CLASS myform AS FORM
	
	          SCALEMODE = 0
	          TOP = 5
	          LEFT = 5
	          HEIGHT = 10
	          WIDTH = 40
	          ** Adding the COMBOBOX object into the form **
	          ADD OBJECT mycombo AS Fontcombo
	
	     ENDDEFINE
	
	     ** Class Definition for the COMBOBOX object **
	     DEFINE CLASS FontCombo AS ComboBox
	
	         DIMENSION aFonts[1]
	         aFonts = ""
	         TOP = 2
	         LEFT = 5
	         HEIGHT=1.5
	         WIDTH=30
	         STYLE=2
	
	         ** Init Method **
	         PROCEDURE Init
	
	         =AFONT(THIS.aFonts)
	         THIS.RowSourceType=5
	         THIS.RowSource="THIS.aFonts"
	         THIS.Value=THISFORM.FontName
	
	         ENDPROC
	
	     ENDDEFINE
	
	4. Choose the Do Program command from the Program Menu, and save the file when
	  prompted. A form will now appear that contains a list box that displays the
	  available system fonts.
	
	Additional query words: VFoxWin listbox
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
