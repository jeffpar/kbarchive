---
layout: page
title: "Q133287: How to Create Hot Spots on Top of a Picture in a Form"
permalink: /kb/133/Q133287/
---

## Q133287: How to Create Hot Spots on Top of a Picture in a Form

	Article: Q133287
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how programmers can use Visual FoxPro's Invisible
	button style or Square shape to emulate a hot spot on top of a picture object.
	
	MORE INFORMATION
	================
	
	Code Sample
	-----------
	
	  PUBLIC ofrmMyform                   && Create a public variable
	  ofrmMyform=CREATEOBJECT("frmMyform")&& Create an instance the object
	  ofrmMyform.SHOW                     && Call the show event
	
	  DEFINE CLASS frmMyform AS form
	
	    DoCreate = .T.
	    Caption = "Invisible Button Style"
	    Movable = .F.                       && Make the form Un-movable
	    Name = "Form1"
	
	    ADD OBJECT image1 AS image WITH ;  && Add the picture to the form
	         Picture = "samples\graphics\bmps\gauge\horz1.bmp", ;
	         Height = 37, ;
	         Left = 96, ;
	         Top = 96, ;
	         Width = 183, ;
	         Name = "Image1"
	
	    ADD OBJECT command1 AS commandbutton WITH ;
	         Top = 101, ;
	         Left = 240, ;
	         Height = 24, ;
	         Width = 37, ;
	         Caption = "Command1", ;
	         Enabled = .T., ;
	         Style = 1, ;
	         DisabledForeColor = RGB(0,0,0), ;
	         Name = "Command1"
	
	    ADD OBJECT shape1 AS shape WITH ;
	         BackStyle = 0, ;
	         BorderStyle = 0, ;
	         Height = 32, ;
	         Left = 144, ;
	         Top = 97, ;
	         Width = 37, ;
	         Name = "Shape1"
	
	    PROCEDURE command1.Click
	         Wait Window "This Is The Invisible Button Click Method"
	    ENDPROC
	
	    PROCEDURE shape1.Click
	         Wait Window "This is The Shape Click Method"
	    ENDPROC
	
	  ENDDEFINE
	
	What the Code Does
	------------------
	
	The code creates an instance of a class called frmMyform, and frmMyform define
	three objects:
	
	- Image1 is the actual picture.
	
	- Command1 is the invisible button. Its Style property is set to 1 to make it
	  invisible.
	
	- Shape1 is the square shape on the form. Its BackStyle property is set to zero
	  (0) to make the back color transparent, and its BorderStyle property is set
	  to zero (0) to make the boarder color of the square transparent.
	
	Steps to Recreate Code Sample by Using the Form Designer
	--------------------------------------------------------
	
	1. On the File menu, click New and then Form. Click the New File button.
	
	2. In the Properties window, select the Caption property. Type "Invisible Button
	  Style" (without the quotation marks).
	
	3. In the Properties window, select the Movable property, and change it to false
	  (.F.).
	
	4. From the Form Control toolbar, select the Image button. Click the mouse
	  button until the desired shape size is created. Release the mouse and a
	  square box will be displayed with two diagonal lines.
	
	5. From the Properties window, select the picture property, and click the
	  three-dot button to locate the desired bitmap.
	
	6. From the Form Control toolbar, select the command button, and create a button
	  on top of the image.
	
	7. From the Properties window, select Style, and change it to Invisible.
	
	8. From the Properties window, double-click the Click event. Type the following
	  command, and close the code window:
	
	     WAIT WINDOW "Invisible button"
	
	9. From the Form Control toolbar, select the Shape button. Create a shape on top
	  of the image.
	
	10. From the Properties window, select the BackStyle property, and change it to
	  Transparent.
	
	11. From the Properties window, select the BorderStyle property, and change it
	  to Transparent.
	
	12. From the Property tab, double-click the Click event. Type the following
	  command, and close the code window:
	
	      WAIT WINDOW "this is the shape"
	
	13. Save and run the Form.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
