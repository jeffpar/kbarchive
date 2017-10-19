---
layout: page
title: "Q135110: How to Test for Entry in a Field in Visual FoxPro &amp; FoxPro 2.x"
permalink: /kb/135/Q135110/
---

## Q135110: How to Test for Entry in a Field in Visual FoxPro &amp; FoxPro 2.x

	Article: Q135110
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
	
	If you think you need to use a WHEN clause (used in FoxPro version 2.x @...GET
	fields on screens) when working in a Visual FoxPro form, you may be able to use
	an Init, When, or GotFocus event procedure to accomplish your goal:
	
	- The Init event occurs when an object is created.
	
	- The When event for an object occurs before a control receives the focus.
	
	- The GotFocus event occurs when an object receives the focus either by user
	  action or by code.
	
	MORE INFORMATION
	================
	
	The When and Init events are not equivalent. The Init event procedure runs only
	once -- when the object is created. The When event procedure runs each time the
	field is entered, right before it receives the focus.
	
	If you want the code to fire a single time when entering the object (field), use
	the Init event procedure instead of the When event procedure. Usually, however,
	you will want to use the When event procedure.
	
	Following are two step-by-step procedures that demonstrate how to use the When
	event in Visual FoxPro versus the WHEN clause in FoxPro version 2.x.
	
	Using the WHEN Clause in FoxPro 2.x w/EX1.SPR Sample Screen
	-----------------------------------------------------------
	
	1. In FoxPro for Windows, open a screen, and draw an input field.
	
	2. Type "X" (without the quotation marks) as the input.
	
	3. Enter the WHEN Clause, and type:
	
	     WAIT WINDOW "You have now entered the field through the WHEN Clause" ;
	        TIMEOUT 2
	
	4. Close the dialog box, for the input field, and save the screen as EX1.
	
	5. On the Program menu, click Generate. Generate the screen as EX1.SPR,
	  accepting the defaults.
	
	6. Type DO EX1.SPR from the Command window, and notice the Wait Window comes up
	  to demonstrate the WHEN Clause has executed.
	
	Using When, Init, & GotFocus Events in Visual FoxPro w/EX2.SCX Sample Form
	--------------------------------------------------------------------------
	
	1. In Visual FoxPro, on the File menu, click New and choose Form. Then click the
	  New File button.
	
	2. Using the Form controls, draw a text object on the form. Select it, and
	  double-click the Init Event from the Properties window. It brings up a
	  procedure box. Type this code:
	
	     WAIT WINDOW "You are now in the INIT Event of the text object" ;
	        TIMEOUT 2
	
	  Then press CTRL+W to close the procedure window.
	
	3. Select the When Event from the Form controls to bring up a procedure box.
	  Type this code:
	
	        WAIT WINDOW "You are now in the WHEN Event of the text object" ;
	           TIMEOUT 2
	
	  Press CTRL+W to close the procedure window.
	
	4. Select the GotFocus Event from the Form controls to bring up a procedure box.
	  Type this code:
	
	     WAIT WINDOW "You are now in the GotFocus Event of the text object" ;
	        TIMEOUT 2
	
	  Press CTRL+W to close the procedure window.
	
	5. On the Form menu, click Run Form.
	
	6. When you are asked to save the form, save it as EX2.SCX. The Wait windows
	  will pop up in succession as the form comes up and the text object is
	  entered. By running the EX2.SCX form, you can see the order of the execution
	  of these event procedures -- Init first, When second, and GotFocus third.
	
	REFERENCES
	==========
	
	Please see the Visual FoxPro Help menu for more information.
	
	Additional query words: 3.00 2.60a VFoxWin FoxWin Move Into Valid Click Begin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
