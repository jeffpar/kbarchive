---
layout: page
title: "Q190258: BUG: Pressing ESC Twice in Combo Box Resets ListIndex Property"
permalink: /kb/190/Q190258/
---

## Q190258: BUG: Pressing ESC Twice in Combo Box Resets ListIndex Property

	Article: Q190258
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you make a selection from a combo box and you reopen the combo box and
	press the ESC key twice, the ListIndex property of the combo box changes to zero
	even though an item is still selected.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The ListIndex property of a list box or combo box specifies the index number of
	the selected item in a combo box or list box control. The index number should be
	a non-zero value if an item is selected. However, in this case, it returns a
	zero value for the index number even though an item is selected.
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following example echoes the method being called and the value of the combo
	box ListIndex property each time either the Valid or KeyPress events of the
	combo box execute.
	
	1. Run the following code from a program (.PRG) file:
	
	        PUBLIC oform1
	        oform1=CREATEOBJECT("form1")
	        oform1.SHOW
	
	        DEFINE CLASS form1 AS FORM
	           AUTOCENTER = .T.
	           NAME = "Form1"
	           DIMENSION aarray[1]
	
	           ADD OBJECT combo1 AS COMBOBOX WITH ;
	              ROWSOURCETYPE = 5, ;
	              ROWSOURCE = "thisform.aArray", ;
	              HEIGHT = 24, ;
	              LEFT = 144, ;
	              TOP = 36, ;
	              WIDTH = 100, ;
	              NAME = "Combo1"
	
	           ADD OBJECT edit1 AS EDITBOX WITH ;
	              HEIGHT = 109, ;
	              LEFT = 12, ;
	              TOP = 96, ;
	              WIDTH = 348, ;
	              NAME = "Edit1"
	
	           PROCEDURE LOAD
	              DIME THIS.aarray[10]
	              FOR lni = 1 TO ALEN[this.aArray]
	                 THIS.aarray[lni] = 'Number '+ALLTR(STR(lni))
	              ENDF
	           ENDPROC
	
	           PROCEDURE combo1.VALID
	              THISFORM.edit1.VALUE = PROGRAM()+' '+STR(THIS.LISTINDEX)+ ;
	                 CHR(13)+ THISFORM.edit1.VALUE
	           ENDPROC
	
	           PROCEDURE combo1.KEYPRESS
	              LPARAMETERS nKeyCode, nShiftAltCtrl
	              THISFORM.edit1.VALUE = PROGRAM()+' '+STR(THIS.LISTINDEX)+ ;
	                 CHR(13)+ THISFORM.edit1.VALUE
	           ENDPROC
	
	        ENDDEFINE
	
	2. Click the down arrow of the combo box to open the combo box. Using the mouse,
	  select "Number 2" from the combo box. This closes the combo box.
	
	3. Next, click the down arrow of the combo box to open the combo box again.
	  Press the ESC key twice. The first click closes the drop-down combo box. The
	  second ESC resets the value the ListIndex to zero (0).
	
	REFERENCES
	==========
	
	Visual FoxPro Help; search on: "ListIndex" (without the quotation marks)
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbDSE kbnokeyword
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	
	=============================================================================
	
