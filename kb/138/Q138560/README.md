---
layout: page
title: "Q138560: How to Disable Combo and List Boxes in Wizard-Generated Forms"
permalink: /kb/138/Q138560/
---

## Q138560: How to Disable Combo and List Boxes in Wizard-Generated Forms

	Article: Q138560
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When the Form Wizard builds a form, it creates the form so that when the form
	runs, the objects that hold data are disabled. Clicking the Edit button enables
	the objects and allows editing of the information. However, if controls other
	than check boxes, text boxes, or OLE-bound controls are added to the form, they
	are enabled, not disabled, when the form is run.
	
	This article shows you how to disable controls such as combo boxes and list boxes
	so that they are disabled when the form runs and enabled when the Edit button is
	clicked. The code that controls which objects are disabled or enabled is located
	in the Wizstyle.vcx form. The combo and list boxes were not included in that
	code, but you can modify the code to include the combo and list boxes.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	1. On the File menu, click Open, and change Files of Type to Visual Class
	  Library. In the \Vfp\Wizards\ directory, select Wizstyle.vcx. In the Open
	  box, choose TXTBTNS as the Class Name. The Class Designer will appear and
	  allow the editing of the wizard buttons.
	
	2. Double-click any button. In the Object box, select TXTBTNS. In the Procedures
	  box, select SETALLPROP. In this code, look for the following line (it is
	  split here for readability):
	
	     CASE ATC(m.oControlParent.Controls[m.i].BaseClass,
	        "CheckBox,TextBox,OleBoundControl") # 0
	            m.oControlParent.Controls[m.i].Enabled = THIS.EditMode
	
	3. Note that CheckBox, TextBox, and OleBoundControl are the only objects
	  referenced here. Add "ComboBox, ListBox, EditBox" to this line of code.
	
	4. Save the changes, and create or open a wizard-generated form. Add a combo box
	  based on a field from a table. When you run the form, note that the combo box
	  is disabled until you click the Edit button.
	
	By changing the code in the TXTBTNS class, this change will also effect the way
	the picture buttons in PICBTNS behave on the combo and list boxes.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
