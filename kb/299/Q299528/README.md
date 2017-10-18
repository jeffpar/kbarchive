---
layout: page
title: "Q299528: FIX: Focus Moves From Textbox In Grid Despite RETURN 0"
permalink: kb/299/Q299528/
---

## Q299528: FIX: Focus Moves From Textbox In Grid Despite RETURN 0

	Article: Q299528
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp500xSearch kbv
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	RETURN 0 and NODEFAULT are often used to prevent default behavior in a control
	event. In Microsoft Visual FoxPro (VFP) 5.0 and 6.0, these commands do not
	prevent focus from leaving a text box in a grid column when they are used in the
	Valid event of the control.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In VFP 5.0 or 6.0, paste the following code in a new project:
	
	  *!* FIX: Q299528 Focus Moves From Textbox In Grid In Spite Of RETURN 0 In VALID
	  CREATE CURSOR cur1 (f1 C(5), f2 i)
	  INSERT INTO cur1 VALUES ('xxx',1)
	  INSERT INTO cur1 VALUES ('yyy',2)
	  GO TOP
	
	  PUBLIC oform1
	  oform1=CREATEOBJECT("form1x")
	  oform1.SHOW
	  RETURN
	
	  DEFINE CLASS form1x AS FORM
	  	AUTOCENTER = .T.
	  	CAPTION = "Form1"
	  	NAME = "Form1"
	
	  	ADD OBJECT grdcustomer AS GRID WITH ;
	  		COLUMNCOUNT = 2, ;
	  		LEFT = 12, ;
	  		RECORDSOURCE = "cur1", ;
	  		RECORDSOURCETYPE = 1, ;
	  		TOP = 12, ;
	  		NAME = "grdCustomer", ;
	  		Column1.CONTROLSOURCE = "cur1.f1", ;
	  		Column1.NAME = "Column1", ;
	  		Column2.CONTROLSOURCE = "cur1.f2", ;
	  		Column2.NAME = "Column2"
	
	  	ADD OBJECT text1 AS TEXTBOX WITH ;
	  		HEIGHT = 25, ;
	  		LEFT = 132, ;
	  		TOP = 220, ;
	  		WIDTH = 60, ;
	  		NAME = "Text1"
	
	  	PROC INIT
	  		THISFORM.grdcustomer.Column1.REMOVEOBJECT('text1')
	  		THISFORM.grdcustomer.Column1.ADDOBJECT('text1','textboxx')
	  		THISFORM.grdcustomer.Column1.text1.VISIBLE = .T.
	  	ENDPROC
	
	  	PROCEDURE DESTROY
	  		USE IN cur1
	  	ENDPROC
	  ENDDEFINE
	
	  DEFINE CLASS textboxX AS TEXTBOX
	  	BORDERSTYLE = 0
	  	MARGIN = 0
	  	NAME = "Text1"
	  	PROCEDURE VALID
	  		IF !"x"$THIS.VALUE
	  			WAIT WINDOW 'Needs to have an "x"' TIME 1
	  			RETURN 0
	  		ENDIF
	  	ENDPROC
	  ENDDEFINE
	
	2. Save and run the code (the name is unimportant).
	
	3. A form with a grid and a text box is shown. Using the mouse, click in the
	  second row of the grid, in the "YYY" text box.
	
	4. Left-click into the textbox at the bottom of the form.
	
	At this point in the code, the Valid event of the text box in the grid displays a
	message box that says that a value of "X" is required. Note, however, that after
	the WAIT WINDOW clears, focus is now in the text box on the form, instead of in
	the text box in the grid. This occurs although the Valid event retuned 0, which
	should have prevented focus from leaving the grid text box.
	
	If you run the same code in VFP 7.0 and follow the same steps, focus does not
	leave the grid text box.
	
	NOTE: The LostFocus event of text boxes in a grid also has this problem. This was
	not fixed in VFP 7.0. It is advised that you use the Valid event to prevent
	focus from moving as detailed in the previous code.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500aBUG kbvfp500bug kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp500xSearch kbvfp700fix kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
