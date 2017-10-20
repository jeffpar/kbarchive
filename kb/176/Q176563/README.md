---
layout: page
title: "Q176563: BUG: DBGrid Loses All Except One Row After Scrolling to Bottom"
permalink: /kb/176/Q176563/
---

## Q176563: BUG: DBGrid Loses All Except One Row After Scrolling to Bottom

{% raw %}

	Article: Q176563
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, version 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Visual Basic Control Creation Edition for Windows, version 5.0 
	- Microsoft Visual Basic Learning Edition for Windows, version 5.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 5.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With a bound DBGrid control, navigation is often performed with the properties
	and methods of the Recordset object of the Data control. After such an
	operation, if the vertical scroll bar of the DBGrid control is dragged to the
	bottom, the DBGrid control loses all except the last row of data. In addition,
	the vertical scroll bar is lost, making it impossible to view the rest of the
	rows.
	
	RESOLUTION
	==========
	
	To work around this problem, place the code to ReBind the data in the
	RowColChange event of the DBGrid control, as follows:
	
	     Private Sub DBGrid1_RowColChange(LastRow As Variant, _
	                                      ByVal LastCol As Integer)
	         If DBGrid1.VisibleRows = 1 Then
	             DBGrid1.ReBind
	             DBGrid1.Scroll 0, Data1.Recordset.RecordCount - _
	                               Data1.Recordset.AbsolutePosition
	         End If
	     End Sub
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	There are several properties and methods of the Recordset object that can be
	used to navigate through the rows of a bound DBGrid control.
	
	The properties include:
	
	  AbsolutePosition
	  PercentPosition
	
	The methods include:
	
	  FindFirst
	  Move
	  Seek
	
	For the following illustration, the AbolutePosition property is used.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual Basic and create a new Standard EXE. Form1 is created by
	  default.
	
	2. Add a Data control to Form1 and set the following properties: DatabaseName =
	  "C:\Program Files\DevStudio\VB\Nwind.mdb" RecordSource = "Customers"
	
	3. Add a DBGrid control to Form1 and set the following properties:
	
	  DataSource = "Data1"
	
	4. Add a CommandButton to Form1 with the following code:
	
	        Private Sub Command1_Click()
	        Dim row_count As Long
	
	            'Set the current row to the middle row
	            row_count = Data1.Recordset.RecordCount
	            Data1.Recordset.AbsolutePosition = row_count / 2
	
	        End Sub
	
	5. Run the project and click on Command1 and note that the middle row is
	  selected.
	
	6. Finally, use the vertical scroll bar of the DBGrid control to scroll to the
	  bottom and note that all rows are lost except the last row.
	
	Additional query words: kbVBp500bug kbVBp600bug kbdse kbDSupport kbVBp
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbZNotKeyword3
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
