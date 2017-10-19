---
layout: page
title: "Q192143: BUG: Data Control NoMatch Equals True Returns Error"
permalink: /kb/192/Q192143/
---

## Q192143: BUG: Data Control NoMatch Equals True Returns Error

	Article: Q192143
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the NoMatch method of the Data Control returns "True," the Seek method will
	report a run-time error "No Current Record."
	
	RESOLUTION
	==========
	
	The user can work around this problem by trapping the Data Control's error event
	and repositioning to an existing record after the seek failure.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Standard EXE in Visual Basic. Form1 is created by default.
	
	2. Place a DataControl, Label, and CommandButton on the form.
	
	3. Set the following Properties of the controls:
	
	        DataConrol(Data1)
	        [DatabaseName]   :Biblio.mdb
	        [RecordsetType]  :0 - Table
	        [RecordSource]   :Authors
	
	        Label(Label1)
	        [DataSource]     :Data1
	        [DataField]      :Author
	
	4. Add the following code to the CommandButton's Click event:
	
	        Private Sub Command1_Click()
	
	         Data1.Recordset.Index = "PrimaryKey"
	         Data1.Recordset.Seek "=", 0     'so that NoMatch=True
	         Print Data1.Recordset.NoMatch
	
	        End Sub
	
	5. Press the F5 key to execute code, and note that the "No Current Record" error
	  is returned on the Seek method.
	
	REFERENCES
	==========
	
	For more information about the Data Control and the Seek method, please refer to
	Online Help that is provided with Visual Basic.
	
	Additional query words: kbDSupport kbVBp kbdse kbVBp600bug kbVBp500bug kbCtrl
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
