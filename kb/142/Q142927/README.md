---
layout: page
title: "Q142927: BUG: First of Two Bound Masked Edit Controls Clears on AddNew"
permalink: kb/142/Q142927/
---

## Q142927: BUG: First of Two Bound Masked Edit Controls Clears on AddNew

	Article: Q142927
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.00 | 4.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Only the first of two bound Masked Edit Controls clears when clicking on the
	move next button off the last record of the recordset when the EOFAction
	property of the data control is set to 2-Add New.
	
	CAUSE
	=====
	
	When you click on the move next button to add a new record, both Masked Edit
	Controls should clear. This is a bug between the interaction of the data control
	and the Masked Edit Box control.
	
	WORKAROUND
	==========
	
	Place the following code in the Validate event of the data control:
	
	  Private Sub Data1_Validate(Action As Integer, Save As Integer)
	    If Action = vbDataActionAddNew Then
	      MaskEdBox1.SelText = ""
	      MaskEdBox2.SelText = ""
	    End If
	  End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a issue in the Microsoft products listed at
	the beginning of the article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Problem in Visual Basic Version 4.0
	------------------------------------------------------
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a Standard Data Control to Form1.
	
	3. Connect Data1 on Form1 to a table in a database as follows: Select the Data
	  Control and press the F4 key to display the Properties window. Set the
	  DatabaseName property to BIBLIO.MDB, the RecordSource property to the source
	  table name Authors, and set the EOFAction property to 2- AddNew.
	
	4. Add two Masked Edit controls to Form1. If this control is not visible in your
	  toolbar, select Custom Controls from the Tools menu and select the Microsoft
	  Masked Edit Control from the list of controls. Set the DataSource property of
	  each to Data1, and the DataField property of one to Author, and the other to
	  Year Born.
	
	5. Start the program, or press the F5 key. Move last, then move next to go to an
	  empty record. Add data to both fields, then move next again. Only one of the
	  Masked Edit Boxes will clear the displayed value. If you use Textboxes or
	  SSPanels they will both correctly clear. From now on, each move next after an
	  AddNew will clear only one of the masked edit boxes.
	
	Additional query words: 4.00 vb4win
	
	======================================================================
	Keywords          :  
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB400Search kbVB400
	Version           : 4.00 | 4.00
	Issue type        : kbbug
	
	=============================================================================
	
