---
layout: page
title: "Q185242: PRB: Data Not Updated with ToolBar Navigation"
permalink: /kb/185/Q185242/
---

## Q185242: PRB: Data Not Updated with ToolBar Navigation

	Article: Q185242
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbnokeyword
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When navigating a table using the ToolBar, changes made to the table from a
	Visual FoxPro control, like a text box, are not saved when the record pointer is
	moved.
	
	CAUSE
	=====
	
	When buttons on the ToolBar are clicked, the focus does not move off the current
	control as it does when using command buttons.
	
	RESOLUTION
	==========
	
	Here are two possible workarounds:
	
	- Press the ENTER key before moving the record pointer.
	
	-or-
	
	- Assign the Text property of the text box to its Value property, before moving
	  the record pointer. For more details, please see the MORE INFORMATION section
	  of this article.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	1. Define a ToolBar class and a custom Navigation class by adding the following
	  code to a Visual FoxPro program file, saved as Tbnav.prg:
	
	            ****************************************************************
	        **** Top of Sample Code for ToolBar and Navigation Class ****
	        **** Tbnav.prg ****
	
	        ** Define the toolbar class. **
	        DEFINE CLASS skipbar AS toolbar
	           Caption = "SkipBar"
	           Height = 40
	           Left = 0
	           Top = 0
	           Width = 181
	           Name = "skipbar"
	           oform = .F.  && Will hold reference of calling object.
	           ADD OBJECT cmdprev AS commandbutton WITH ;
	              Top = 5, ;
	              Left = 5, ;
	              Height = 31, ;
	              Width = 86, ;
	              Caption = "Prev", ;
	              Name = "cmdPrev"
	           ADD OBJECT cmdnext AS commandbutton WITH ;
	              Top = 5, ;
	              Left = 90, ;
	              Height = 31, ;
	              Width = 86, ;
	              Caption = "Next", ;
	              Name = "cmdNext"
	           PROCEDURE Init
	              LPARAMETERS toForm  && Get the calling objects reference.
	              THIS.oForm = toForm
	           ENDPROC
	           PROCEDURE cmdnext.Click
	              THIS.Parent.oForm.oNav.pNext() && Call pNext in Navigation.
	              THIS.Parent.oForm.Refresh()
	           ENDPROC
	           PROCEDURE cmdprev.Click
	              THIS.Parent.oForm.oNav.pPrev() && Call pPrev in Navigation.
	              THIS.Parent.oForm.Refresh()
	           ENDPROC
	        ENDDEFINE
	
	        ** Define the custom navigation class. **
	        DEFINE CLASS navigation AS custom
	           Name = "navigation"
	           nskiptable = .F.
	           PROCEDURE pNext
	              SELECT (THIS.nSkipTable)
	              SKIP
	              IF EOF() THEN
	                 SKIP -1
	              ENDIF
	           ENDPROC
	           PROCEDURE pPrev
	              SELECT (THIS.nSkipTable)
	              SKIP -1
	              IF BOF() THEN
	                 SKIP
	              ENDIF
	           ENDPROC
	           PROCEDURE first
	              SELECT THIS.nSkipTable
	              GO TOP
	           ENDPROC
	           PROCEDURE last
	              SELECT THIS.nSkipTable
	              GO BOTTOM
	           ENDPROC
	           PROCEDURE Init
	              THIS.nSkipTable = SELECT(0)
	           ENDPROC
	        ENDDEFINE
	        **** Bottom of Sample Code for ToolBar and Navigation Class ****
	        ****************************************************************
	
	2. Create and populate a table using the following code:
	
	        CREATE TABLE customer (cust_id c(5), contact c(5))
	        INSERT INTO customer VALUES ("AAAAA","A1A1A")
	        INSERT INTO customer VALUES ("BBBBB","B1B1B")
	        INSERT INTO customer VALUES ("CCCCC","C1C1C")
	        INSERT INTO customer VALUES ("DDDDD","D1D1D")
	        INSERT INTO customer VALUES ("EEEEE","E1E1E")
	        INSERT INTO customer VALUES ("FFFFF","F1F1F")
	
	3. Create a Form and add the table to its Data Environment.
	
	4. Drag and drop each of the fields separately to create text box controls.
	
	5. Add two custom properties to the form, oSkipBar and oNav. These properties
	  hold the references of the SkipBar and Navigation objects respectively.
	
	6. Place the following code in the INIT event of the form:
	
	        **Specify file that contains SkipBar and Navigation Class
	          Definitions
	
	        SET PROCEDURE TO Tbnav.prg
	
	        **Create SkipBar and pass current Forms reference to it.
	        **Creat SkipBar object, save reference to Form's oSkipBar property.
	        THIS.oSkipBar = CREATEOBJECT('SkipBar', THIS)
	        THIS.oSkipBar.Visible = .T.
	
	        **Creat Navigation object, save reference to Form's oSkipBar
	            property
	        THIS.oNav = CREATEOBJECT('navigation')
	
	7. Run the form and change the text displayed in one of the text boxes.
	
	8. Click the Next button on the toolbar to go to the next record.
	
	9. Click the Prev button on the toolbar to return to the previous record.
	
	  NOTE: The changes that you had made to the data are not saved.
	
	10. Change the text displayed in one of the text boxes and press ENTER.
	
	11. Repeat steps 9 and 10 and note that the changes are saved.
	
	To fix the problem add the following lines of code to the beginning of the
	cmdnext.click and cmdprev.click procedures of the Skipbar class:
	
	     tmpAC =  THIS.Parent.oForm.ActiveControl
	     tmpAC.Value = tmpAc.Text
	
	Make sure that the above two lines are the first two in the procedures.
	
	Now, the changes are saved when the record pointer is moved using the navigation
	buttons in the ToolBar, whether the ENTER key is pressed or not.
	
	Additional query words: vfoxwin
	
	======================================================================
	Keywords          : kbnokeyword 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbprb
	
	=============================================================================
	
