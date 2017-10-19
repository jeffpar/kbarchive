---
layout: page
title: "Q189678: FIX: Error 3315 or 3426 When Updating a Bound DBCombo Box"
permalink: /kb/189/Q189678/
---

## Q189678: FIX: Error 3315 or 3426 When Updating a Bound DBCombo Box

	Article: Q189678
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the ListField property is not set on a bound DBCombo box, one of the
	following errors can occur when you try to Update the Recordset.
	
	  Runtime error '3426':
	  This action was cancelled by an associated object.
	
	  -or-
	
	  Run-time error '3315':
	  Field 'Tablename.Field' can't be zero-length string.
	
	CAUSE
	=====
	
	The new value is not being saved to the BoundText property of the DBCombo box.
	If you check the BoundText property (e.g. Msgbox DBCombo1.BoundText), it will be
	blank.
	
	RESOLUTION
	==========
	
	If you set the ListField property, the BoundText property will retain the data.
	
	The RowSource property in the On Line Help states the following:
	
	  "To fill the list in a DBCombo or DBList control, you must specify a
	
	  Data control in the RowSource property at design time using the Properties
	  window.
	
	  To complete the connection with a field in the Recordset object managed by the
	  Data control, you must also provide the name of a Field object in the
	  ListField property."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug has been fixed in Visual Basic 6.0.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new project in Visual Basic and choose Standard EXE. Form1 is created
	  by default.
	
	2. Add a DbCombo box, a DataControl, and two Command Buttons to the Form1. NOTE:
	  To add the DBCombo box, you must first Click the Project Menu, click
	  Components, and select "Microsoft Data Bound List Controls 5.0."
	
	3. Set the following properties for each control:
	
	   Datal
	   -----
	   DatabaseName: Biblio.mdb
	   RecordSource: Authors
	
	   DBCombo1
	   ---------
	   DataSource: Data1
	   DataField: Author
	   RowSource: Data1
	
	   Command1
	   --------
	   Caption: Add
	
	   In the Click event of Command1, add:
	
	      Data1.RecordSet.AddNew
	
	   Command2
	   --------
	   Caption: Update
	
	  In the Click event of Command2 add:
	
	    MsgBox DBCombo1.BoundText
	    Data1.Recordset.Update
	
	4. Run the application. Click the Add button. Type a new value into the DBCombo
	  box. Click Update, and you should get an empty Msgbox followed by an error
	  message.
	
	  To correct the problem, change the values of the ListField property to the
	  following:
	
	   DBCombo1
	   ---------
	   ListField: Author
	
	  Now when you run the application and click Add, then Update, you will notice
	  that the value you typed is displayed in the Msgbox and you receive no error.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q186682 : BUG: DBCombo BoundText Incorrect When Setting Text Property
	
	Additional query words: kbVBp kbVBp500bug KBDSE kbDSupport kbNoKeyWord kbVBp600fix
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
