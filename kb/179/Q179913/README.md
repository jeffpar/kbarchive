---
layout: page
title: "Q179913: PRB: Unexpected Behavior with FoxPro 2.x Database Using DBCombo"
permalink: kb/179/Q179913/
---

## Q179913: PRB: Unexpected Behavior with FoxPro 2.x Database Using DBCombo

	Article: Q179913
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the DBCombo control with a Foxpro 2.x type database the DBCombo may
	begin an infinite scroll upward.
	
	
	RESOLUTION
	==========
	
	To work around this problem, replaced the code in step 5 below with the
	following code:
	
	      Dim myBookMark as String
	
	      Data1.Recordset.Index = "{Table Index Name}"
	      Data1.Recordset.Seek "=", DBCombo1.Text
	
	      myBookMark = Data1.Recordset.Bookmark
	      Data1.Refresh
	
	      Data1.Recordset.Bookmark = myBookMark
	      DBCombo1.ReFill
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Before beginning, make sure that you have a Foxpro 2.x type table that has an
	existing index on the field that will be displayed in the DBCombo control.
	
	1. Begin a new Standard Exe VB Project. Under the Project -> Components menu
	  option, add a reference to "Microsoft Data Bound List Controls."
	
	2. Add a new form to the project, and then add a Data Control and DBCombo
	  control to the form.
	
	3. Set the properties of the two controls to the following:
	
	        Data Control:
	                      Connect           = FoxPro 2.6;
	                      DatabaseName      = {Path to the Foxpro Table}
	                      DefaultCursorType = 0
	                      DefaultType       = 2-UseJet
	                      RecordSource      = {Table Name}
	                      RecordsetType     = 0-Table
	
	        DBCombo Control:
	                      BoundColumn       = {Field From Table}
	                      DataBindings      = Leave Blank
	                      DataField         = Leave Blank
	                      ListField         = {Field From Table}
	                      RowSource         = Data1
	                      Style             = 0-dbcDropDownCombo
	
	4. In the DBCombo_Change subroutine, place the following code:
	
	        Data1.Recordset.Index = "{Table Index Name}"
	        Data1.Recordset.Seek "=", DBCombo1.BoundText
	
	5. Run the project, click the DBCombo box, and change the selection so that the
	  code behind the change event is executed. The first time this combo box is
	  clicked, it behaves normally. Click the DBCombo control again and try to
	  scroll upward through the list by holding down the mouse button. The DBCombo
	  will begin an endless scrolling loop that never reaches the top of the list.
	
	NOTE: In the above code, the text inside the {} must be replaced with the
	appropriate information from the Foxpro table. This should be the name of the
	field to display in the DBCombo control and the name of the index that will be
	used to search on that field.
	
	Additional query words: kbdse kbDSupport kbVBp kbVBp500 kbVBp600 KbNoKeyWord kbVFP200
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Issue type        : kbprb
	
	=============================================================================
	
