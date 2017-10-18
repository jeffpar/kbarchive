---
layout: page
title: "Q251225: BUG: Recordset EditMode Not Properly Set with DataCombo"
permalink: kb/251/Q251225/
---

## Q251225: BUG: Recordset EditMode Not Properly Set with DataCombo

	Article: Q251225
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbComboBox kbCtrl kbDatabase kbDataBinding kbListBox kbVBp600bug kbGrpDSVBDB kbGrpDSMDA
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using some controls bound to an ADO Recordset object, the EditMode is not
	set properly when you modify the data through the bound controls. These controls
	include the Microsoft DataCombo control.
	
	With other controls bound to an ADO Recordset object, the EditMode is set
	properly when data is changed through the bound controls. These controls include
	the TextBox.
	
	The expected behavior is that the EditMode is set properly for each type of bound
	control.
	
	CAUSE
	=====
	
	The affected controls do not notify the Binding Collection that they are dirty.
	
	RESOLUTION
	==========
	
	There are several possible workarounds for this problem:
	
	- Bind the control to an ADO DataControl or to a DataEnvironment instead of an
	  ADO Recordset object so the that the EditMode is set properly.
	
	- Check in the LostFocus event of the control to see if the control's value has
	  changed. If it has, copy the change to the underlying recordset.
	
	- Execute the recordset's Move method with a value of 0 to immediately post the
	  control's change. You could execute this method in the control's Change
	  event, for example.
	
	- Bind the control to a BindingCollection object. When using a
	  BindingCollection object, the EditMode property is set properly.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce
	------------------
	
	This sample uses the Biblio database that comes with Visual Basic.
	
	1. In Microsoft Visual Basic, create a new Standard EXE project. Form1 is
	  created by default.
	
	2. From the Project menu, select References, and then select the Microsoft
	  ActiveX Data Objects Library. Click OK.
	
	3. From the Project menu, choose Components, and select the Microsoft DataList
	  Controls 6.0 (OLEDB). Click OK.
	
	4. Place a DataCombo, a TextBox, and a CommandButton on Form1.
	
	5. Paste the following code into Form1's code window:
	
	     Private cn As ADODB.Connection
	     Private rs As ADODB.Recordset
	
	     Private Sub Command1_Click()
	
	       'Display the current EditMode of the ADO Recordset.
	        MsgBox "Current EditMode is (0 = adEditNone):" & rs.EditMode
	
	     End Sub
	
	     Private Sub DataCombo1_LostFocus()
	
	       'Uncomment the following code, to work around using the LostFocus
	       'event:
	       'If DataCombo1.Text <> rs(DataCombo1.DataField).Value Then
	       '    rs(DataCombo1.DataField).Value = DataCombo1.Text
	       'End If
	
	     End Sub
	
	     Private Sub DataCombo1_Change()
	         
	       'Uncomment the following line, to work around using the Move method.
	       'rs.Move 0
	   
	     End Sub
	
	     Private Sub Form_Load()
	
	       Set cn = New ADODB.Connection
	       cn.Open "Provider=Microsoft.Jet.OLEDB.3.51;Data Source=BIBLIO.MDB"
	
	       Set rs = New ADODB.Recordset
	       rs.CursorLocation = adUseClient
	       rs.Open "Titles", cn, adOpenStatic, adLockOptimistic
	
	       'Display the list of Titles in the DataCombo
	       Set DataCombo1.RowSource = rs
	       DataCombo1.ListField = "Title"
	
	       'Bind the DataCombo to the ADO Recordset
	       Set DataCombo1.DataSource = rs
	       DataCombo1.DataField = "Title"
	
	       'Bind the Text Box to the ADO Recordset
	       Set Text1.DataSource = rs
	       Text1.DataField = "Title"
	
	     End Sub
	
	6. If necessary, modify the connection string in the statement that opens the
	  connection. You might need to modify the Provider to use the version of the
	  Microsoft Jet OLE DB Provider that is on your system. You also might need to
	  modify the Data Source to use the copy of the Biblio database that is on your
	  system.
	
	7. Start the project.
	
	8. From the list of Titles displayed in the DataCombo, select a different Title.
	  Click Command1, and note that the EditMode is still 0, which is adEditNone.
	
	9. Modify the Title in the TextBox and click Command1. Note that the the
	  EditMode is set correctly to 1, which is adEditInProgress.
	
	Workaround Using the LostFocus event
	------------------------------------
	
	1. Uncomment the following code in the event DataCombo1_LostFocus():
	
	  If DataCombo1.Text <> rs(DataCombo1.DataField).Value Then
	           rs(DataCombo1.DataField).Value = DataCombo1.Text
	      End If
	
	2. Restart the project.
	
	3. From the list of Titles displayed in the DataCombo, select a different Title.
	  Click Command1, and note that the EditMode is set correctly.
	
	Workaround Using the Move Method
	--------------------------------
	
	1. Re-comment the line of code in the event DataCombo1_LostFocus(), by placing
	  apostrophes (') in front of the code.
	
	2. Uncomment the following line of code in the event DataCombo1_Change():
	
	  rs.Move 0
	
	3. Restart the project.
	
	4. From the list of Titles displayed in the DataCombo, select a different Title.
	  Click Command1, and note that the change is posted to the recordset
	  immediately. For example, selecting in the DataCombo immediately updates the
	  bound TextBox.
	
	Workaround Using the BindingCollection Object
	---------------------------------------------
	
	1. From the Project menu, choose References, and select the Microsoft Data
	  Binding Collection. Click OK.
	
	2. Replace all of the existing code from Form1's code window with the following:
	
	     Option Explicit
	
	     Private cn As ADODB.Connection
	     Private rs As ADODB.Recordset
	     Private myBindingCollection As BindingCollection
	
	     Private Sub Command1_Click()
	       MsgBox "Current EditMode is (0 = adEditNone):" & rs.EditMode
	     End Sub
	
	     Private Sub Form_Load()
	
	       Set cn = New ADODB.Connection
	       cn.Open "Provider=Microsoft.Jet.OLEDB.3.51;Data Source=BIBLIO.MDB"
	
	       Set rs = New ADODB.Recordset
	       rs.CursorLocation = adUseClient
	       rs.Open "Titles", cn, adOpenStatic, adLockOptimistic
	
	       'Display the list of Titles in the DataCombo
	       Set DataCombo1.RowSource = rs
	       DataCombo1.ListField = "Title"
	    
	       'Bind the DataCombo to the ADO Recordset
	       Set myBindingCollection = New BindingCollection
	       Set myBindingCollection.DataSource = rs
	       With myBindingCollection
	          .Clear
	          .Add DataCombo1, "BoundText", "Title"
	       End With
	      
	       'Bind the Textbox to the ADO Recordset
	       Set Text1.DataSource = rs
	       Text1.DataField = "Title"
	
	     End Sub
	
	3. If necessary, modify the connection string in the statement that opens the
	  connection.
	
	4. Restart the project.
	
	5. From the list of Titles displayed in the DataCombo, select a different Title.
	  Click Command1, and note that the EditMode is set correctly.
	
	REFERENCES
	==========
	
	For additional information, please see the following topics in the Microsoft
	Visual Basic 6.0 Online Help index:
	
	- DataCombo control
	
	- BindingCollection object
	
	Additional query words:
	
	======================================================================
	Keywords          : kbComboBox kbCtrl kbDatabase kbDataBinding kbListBox kbVBp600bug kbGrpDSVBDB kbGrpDSMDAC kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
