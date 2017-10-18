---
layout: page
title: "Q170358: PRB: Masked Edit May Not Show Empty When Bound Field is Null"
permalink: kb/170/Q170358/
---

## Q170358: PRB: Masked Edit May Not Show Empty When Bound Field is Null

	Article: Q170358
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 4.0 5.0
	Operating System(s): 
	Keyword(s): kbVBp500 kbGrpDSVB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 4.0, 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Masked Edit control may not show an empty value when it is bound to a field
	in a Microsoft Access table. If you set the Mask Property of the control and the
	bound field is null, the control will not display an empty mask. Instead, it
	will show the value from the last non-null field. If the first record displayed
	has a null field, the control will show an empty mask. However, as soon as the
	control displays a non-null field it will not display an empty mask for any
	other empty field. If the Mask Property is not set, null fields will display as
	empty in the Masked Edit control.
	
	RESOLUTION
	==========
	
	To work around this problem, you can change the text property of the Masked Edit
	control to an empty string when the bound field to contains a null value:
	
	     Private Sub Data1_Reposition()
	
	        'Check to see if the record is empty or contains
	        'a zero length string.
	        'Note: The AllowZeroLength property of the field must be True.
	        If IsNull(Data1.Recordset("Phone")) Or _
	           Data1.Recordset("Phone") = "" Then
	             'Set the Masked Edit Box to an empty string
	             'Note: This sets the DataChanged for MaskEdBox1 to True
	             MaskEdBox1.Text = "(___) ___-____"
	             bFieldNull = True           'The field has no value
	         Else
	             bFieldNull = False          'The field has a value
	         End If
	
	         'Set the mask for the control
	         MaskEdBox1.Mask = "(###) ###-####"
	
	     End Sub
	
	     Private Sub Data1_Validate(Action As Integer, Save As Integer)
	
	         If MaskEdBox1.DataChanged Then
	
	            'Check to see if the Masked Edit Box has an empty string
	            'and that the field was empty when you moved to this record
	            If MaskEdBox1.Text = "(___) ___-____" And bFieldNull Then
	               'If the control has an empty string and the field is null
	               'set the DataChanged to False so that you don't
	               'update the field
	               MaskEdBox1.DataChanged = False
	
	            'If the control now has an empty string but the field
	            'had a value when moved to this record you want to remove
	            'the value from the field
	            ElseIf MaskEdBox1.Text = "(___) ___-____" _
	            And Not bFieldNull Then
	               'Turn the mask off so you can save an empty record
	               MaskEdBox1.Mask = ""
	               MaskEdBox1.Text = ""
	               Data1.UpdateRecord 'update the bound controls
	            End If
	
	         End If
	     End Sub
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new project. Add the Masked Edit Control to the project.
	
	  NOTE: In Visual Basic 4.0, click Custom Controls on the Tools menu and check
	  "Microsoft Masked Edit Control." In Visual Basic 5.0, click Components on the
	  Project menu and check "Microsoft Masked Edit Control 5.0."
	
	2. Add a Data Control to Form1.
	
	3. Add a Masked Edit Control to Form1. Set the DataSource property to "Data1."
	
	4. Add a Text Box to Form1. Set the DataSource property to "Data1."
	
	5. Add the following code to Form1:
	
	        Dim bFieldNull As Boolean
	        Dim db As Database
	        Dim rs As Recordset
	
	        Private Sub Form_Load()
	            'Create a table with a phone field. Put some records into it.
	            'Some records will have a phone value, some will be empty
	
	            Dim fd As Field
	            Dim td As TableDef
	            Dim i As Integer
	
	            On Error GoTo myerr ' The next line will cause an error if the
	                                'database already exists
	
	            'Create a database containing a table, "Table1", which contains
	            'one field, "Phone".
	            Set db = Workspaces(0).CreateDatabase("MaskTest", _
	                dbLangGeneral)
	            Set td = db.CreateTableDef("Table1")
	            Set fd = td.CreateField("Phone", dbText, 14)
	            fd.AllowZeroLength = True
	            td.Fields.Append fd
	            db.TableDefs.Append td
	
	            'Add data to the Phone Field for even number records. The Phone
	            'Field for odd number records will remain null.
	            Set rs = db.OpenRecordset("table1")
	            For i = 1 To 6
	                rs.AddNew
	                If i Mod 2 = 0 Then
	                    rs("phone") = "(234) 654-9876"
	                End If
	                rs.Update
	            Next
	
	            db.Close
	            LoadTable 'Call the LoadTable sub
	            Exit Sub
	
	        myerr:
	            LoadTable 'Call the LoadTable sub
	        End Sub
	
	        Private Sub LoadTable()
	            'Set the Recordset for the Data Control to all the records
	            'in Table1 and bind the Phone field to the Masked Edit control.
	            Set db = DBEngine(0).OpenDatabase("MaskTest")
	            Set rs = db.OpenRecordset("Table1")
	            rs.MoveFirst
	            Set Data1.Recordset = rs
	            MaskEdBox1.Mask = "(###) ###-####"
	            text1.DataField = "Phone"
	            MaskEdBox1.DataField = "Phone"
	        End Sub
	
	6. Press the F5 key to run the application.
	
	7. Move through the records using the Data Control. Note that the Masked Edit
	  Control does not update properly when the bound field is null. To work around
	  this problem so that the Masked Edit control shows empty records when the
	  bound field's value is null, add the code from the RESOLUTION section in this
	  article to the Form1. Press the F5 key to run the application.
	
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Brian Combs, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbVBp500 kbGrpDSVB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVBA500 kbVB500 kbVB400Search kbVB400
	Version           : 4.0 5.0
	Issue type        : kbprb
	
	=============================================================================
	
