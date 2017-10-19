---
layout: page
title: "Q197428: BUG: DataRepeater Control does not Update Records"
permalink: /kb/197/Q197428/
---

## Q197428: BUG: DataRepeater Control does not Update Records

	Article: Q197428
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbDatabase kbDataBinding kbVBp600bug kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the DataRepeater control scroll bar to navigate through your
	data-bound user controls, changes made to the fields in the user controls are
	not saved to the database.
	
	CAUSE
	=====
	
	When the DataRepeater gets the DataSource, it passes the DataSource to its
	BindingCollection. The BindingCollection gets the position of the current row.
	The DataRepeater also gets the position of the current row. Normally, the two
	rows should be the same; but in this case, they are not. Both calls return the
	same recordset object, but they contain their own Current Row information. When
	the user selects the current row in the DataRepeater, the Binding Collection's
	row position does not move, therefore the data bindings in the user-control does
	not get updated.
	
	RESOLUTION
	==========
	
	Use one of the following to work around this problem:
	
	- Use a visible ActiveX Data Objects (ADO) data control (ADODC) to scroll
	  through the bound user-controls.
	- Use a hidden ADO data control (ADODC) on your form. Add a command button to
	  save the changed record. Paste the following code in the Click event of the
	  command button:
	
	  Private Sub SaveRecord_Click
	    Adodc1.Recordset.Move 0
	  End Sub
	
	  The following code should also work:
	
	  Private Sub SaveRecord_Click
	    If (Adodc1.Recordset.BOF) Then
	       Adodc1.Recordset.MoveNext
	       Adodc1.Recordset.MovePrevious
	    Else
	       Adodc1.Recordset.MovePrevious
	       Adodc1.Recordset.MoveNext
	    End If
	  End Sub
	
	Moving to another record in the ADODC recordset ensures that the current row's
	position of the BindingCollection is the same as the DataRepeater. This causes
	the user-control to update successfully.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create the UserControl:
	
	1. Create a new ActiveX Control project. UserControl1 is created by default.
	
	2. Add a label and a text box to the UserControl. Change the caption of the
	  label to be "Product Name" and the Name of the text box to "txtProdName".
	
	3. Place the following statement in the General Declarations of the
	  UserControl:
	
	  Option Explicit
	
	  Public Property Get ProdName() As String
	     ProdName = txtProdName.Text
	  End Property
	
	  Public Property Let ProdName(ByVal newitem As String)
	     txtProdName.Text = newitem
	   End Property
	
	  Private Sub txtProdName_Change()
	     PropertyChanged "ProdName"
	  End Sub
	
	4. From the Tools menu, click Procedure Attributes. Click the Advanced tab and
	  verify that ProdName appears in the Name box.
	
	5. Next, select the following:
	
	   - Property is Data Bound.
	   - This property binds to DataField.
	   - Show in DataBindings Collection at Design Time.
	
	6. Click OK.
	
	7. Name your project TestCtl. Compile the project to create the .ocx file.
	
	Create the Visual Basic Test Client Project
	-------------------------------------------
	
	1. Create a new Visual Basic 6.0 EXE project. A project named Project1 and a
	  form named Form1 are created by default.
	
	2. Add an ADO Data control and a DataRepeater control to Form1.
	
	3. Set the DataSourceName (or ConnectionString) and Source properties of the
	  ADODC to point to NorthWind database.
	
	4. Set the DataSource of the DataRepeater to the ADODC.
	
	5. Set the DataRepeater control's RepeatedControlName property to point to
	  TestCtl.UserControl1. The user control appears repeated within the
	  DataRepeater control.
	
	6. Right-click the DataRepeater control. Click Data Repeater Properties. In the
	  Properties dialog box, click the RepeaterBindings tab. Select the ProdName
	  property in the PropertyName box. Select the ProductName field in the
	  DataField box. Click Add and then click OK.
	
	7. Run the project and you will see the repeated data.
	
	8. Change the product name in one of the data-bound usercontrols.
	
	9. Scroll down/up through your data-bound user controls using ADODC.
	
	10. Close your application.
	
	11. Repeat steps 7-10 but this time use the DataRepeater's scrollbar to go
	  through your data-bound user controls.
	
	You will notice that changes are saved only when you scroll up or down using
	ADODC.
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Ammar N. Abuthuraya, Microsoft Corporation
	
	
	Additional query words: data repeater
	
	======================================================================
	Keywords          : kbCtrl kbDatabase kbDataBinding kbVBp600bug kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
