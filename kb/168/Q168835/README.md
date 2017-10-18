---
layout: page
title: "Q168835: HOWTO: Add Copy and Paste Functionality to Grid Control"
permalink: kb/168/Q168835/
---

## Q168835: HOWTO: Add Copy and Paste Functionality to Grid Control

	Article: Q168835
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnokeyword kbvfp500 kbvfp600
	Last Modified: 12-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a Grid control object based on the Grid32.ocx is placed on a form, the cut,
	copy, and paste menu items are not available. Additionally, the hot keys, such
	as CTRL+V, do not function. This article shows how to use properties of the Grid
	control to emulate these editing functions.
	
	MORE INFORMATION
	================
	
	Since neither the system menu options nor the shortcut keys for cut, copy, and
	paste work within the Grid control, the Grid32.OCX object properties must be
	used to accomplish these functions. To emulate these editing functions, the
	Clip, Col, Row, and Text properties of the Grid control must be used.
	
	The example provided below uses a TextBox control and a Grid control to
	demonstrate how to copy, cut, and paste a text string between the two objects
	programmatically.
	
	The following steps create a form containing a Grid control that has copy, cut,
	and paste functionality:
	
	1. Create a form and place a TextBox and an OLE Container Control on it.
	
	2. In the OLE Container Control, click Insert Control and choose the Grid
	  Control object.
	
	3. Right-click the Grid control and choose Grid properties. Click the General
	  tab and change both the Row and Col properties to 3 and click Apply.
	
	4. In the Init of the form, place the following code:
	
	         ** This code places text values in the Grid object **
	         Thisform.OleControl1.Row=1
	         ThisForm.OleControl1.Col=1
	         Thisform.Olecontrol1.Text="Test1"
	         ThisForm.OleControl1.Row=1
	         ThisForm.Olecontrol1.Col=2
	         ThisForm.OleControl1.Text="Test2"
	         Thisform.OleControl1.Row=1 && Resets focus to first cell.
	         ThisForm.OleControl1.Col=1
	
	5. Add three command buttons to the form and set the following properties and
	  events as directed below:
	
	         Command1
	          Caption="Copy to Grid"
	          Click Event:
	          Thisform.OleControl1.Text=ThisForm.Text1.Value
	
	         Command2
	          Caption="Copy From Grid"
	          ThisForm.Text1.Value=Thisform.OleControl1.Clip
	
	         Command3
	          Caption="Cut From Grid"
	          Click Event:
	          ThisForm.Text1.Value=ThisForm.OleControl1.Text
	          ThisForm.OleControl1.Text=""
	
	6. Save the form and run it.
	
	7. Type "Hello" (without the quotes) in the text box and press "Copy to Grid."
	  The word "Hello" appears in the Grid control.
	
	8. Click on the cell containing "Test2" with the mouse and then select "Copy
	  from Grid." "Test2" appears in the text box.
	
	9. Click on the cell containing "Hello" and select "Cut From Grid." "Hello"
	  appears in the text box and the contents of the first cell of the Grid
	  control disappear.
	
	REFERENCES
	==========
	
	For additional information on the properties of the Grid control, invoke the
	Visual Basic Help file by clicking the Grid control and pressing the F1 key.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Issue type        : kbhowto
	
	=============================================================================
	
