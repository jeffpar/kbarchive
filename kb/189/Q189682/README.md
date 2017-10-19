---
layout: page
title: "Q189682: HOWTO: Bind a DataList or DataCombo to a Recordset at Run-Time"
permalink: /kb/189/Q189682/
---

## Q189682: HOWTO: Bind a DataList or DataCombo to a Recordset at Run-Time

	Article: Q189682
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When binding a DataList or a DataCombo control to an ADO recordset at run time,
	follow the steps below:
	
	     DataCombo1.DataField = "DestinationBoundField"
	     DataCombo1.BoundColumn = "SourceBoundField"
	     DataCombo1.ListField = "SourceDisplayField"
	     Set DataCombo1.RowSource = rsSourceRecordset
	     Set DataCombo1.DataSource = rsDestinationRecordset
	
	For example, you may want to maintain an EmployeeID field in an Orders table;
	however, you would want to allow the user to select the appropriate employee
	information by the employee's name, rather than by the EmployeeID field.
	
	In this case, the destination for the selection from the combo box is the
	EmployeeID field in the Orders recordset. But the source for this information is
	the recordset containing information from the Employees table.
	
	The ListField property should be set to the field whose information you want to
	display; while the BoundColumn property should be set to the field whose
	information you want to bind to the destination recordset. In this case, the
	ListField would be EmployeeName and the BoundColumn would be EmployeeID.
	
	Additional query words: DataList DataCombo kbdse kbDSupport kbVBp kbvbp600 kbDataBinding
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVBA600 kbVB600
	Issue type        : kbhowto
	
	=============================================================================
	
