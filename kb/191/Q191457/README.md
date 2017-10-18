---
layout: page
title: "Q191457: PRB: DataEnvironment Recordset Requery Does Not Refresh Controls"
permalink: kb/191/Q191457/
---

## Q191457: PRB: DataEnvironment Recordset Requery Does Not Refresh Controls

	Article: Q191457
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 01-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have controls bound to a query built by the DataEnvironment and then call
	the underlying recordset's Requery method, your bound controls will still
	display data from the recordset prior to having called the Requery method. In
	short, you will still see your old data.
	
	You may also see an error message stating:
	
	  "Error while trying to set current row."
	
	RESOLUTION
	==========
	
	- After you have re-queried the recordset, you must re-bind it.
	
	  -or-
	
	- Bind your controls to the recordset object rather than to the
	  DataEnvironment. If you then call the Requery method on the recordset object,
	  you see the up-to-date data in your bound controls.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. Add a DataEnvironment to your project.
	
	3. Rename the connection "cnNWind" and use its property pages to use the
	  Microsoft Jet OLE DB Provider to connect to the Northwind database
	  (NWind.MDB) on your hard drive.
	
	4. Add a command to the cnNWind connection. Rename the command "Customers," and
	  use the SQL statement "SELECT CustomerID, City FROM Customers."
	
	5. Drag-and-drop the CustomerID and City fields from the DataEnvironment onto
	  your form.
	
	6. Drag the Customers command from the DataEnvironment onto your form while
	  holding down the right-mouse button. Select "Data Grid" from the available
	  choices in the menu that appears when you release the right- mouse button.
	
	7. Add two CommandButtons to your form. Name them cmdModifyData and cmdRequery.
	
	8. Add the following code to your form:
	
	        Private Sub Form_Load()
	            cmdModifyData.Caption = "Modify Data"
	            cmdRequery.Caption = "Requery"
	        End Sub
	
	        Private Sub ReBindMyControls()
	            Set txtCustomerID.DataSource = DataEnvironment1
	            Set txtCity.DataSource = DataEnvironment1
	            Set DataGrid1.DataSource = DataEnvironment1
	        End Sub
	
	        Private Sub cmdModifyData_Click()
	            Dim strSQL As String
	            Dim strNewCity As String
	            Dim intRecordsAffected As Integer
	
	            strNewCity = InputBox("Enter a new value for the city")
	            If strNewCity <> "" Then
	                strSQL = "UPDATE Customers " & _
	                         "SET City = '" & strNewCity & "' " & _
	                         "WHERE CustomerID = '" & _
	                         DataEnvironment1.rsCustomers!CustomerID & "'"
	                  DataEnvironment1.cnNWind.Execute strSQL, _
	                                       IntRecordsAffected, adExecuteNoRecords
	                MsgBox intRecordsAffected & " record(s) affected"
	            Else
	                MsgBox "No update performed"
	            End If
	        End Sub
	
	        Private Sub cmdRequery_Click()
	            DataEnvironment1.rsCustomers.Requery
	            'ReBindMyControls
	            MsgBox "Recordset reopened" & vbCrLf & _
	                   "Current customer's city: " & _
	                   DataEnvironment1.rsCustomers!City
	        End Sub
	
	9. Run the project.
	
	10. Click on the button marked "Modify Data" to enter a new value for the
	  current customer's city. The code will modify that row in the database
	  without changing the row in the recordset.
	
	11. Click on the button marked "Requery" to re-run the query. You will see a
	  message box that says that the recordset has been re-opened and displays the
	  value for the current customer's city in the recordset object. You will see
	  the value that you entered in step 9 in this message box, but the textbox
	  will still display the old value and the data in the grid will remain the
	  same.
	
	12. Exit the project by clicking on the "X" button in the upper-right corner of
	  the form.
	
	13. Modify the cmdRequery_Click event and un-comment the following line:
	
	        ReBindMyControls
	
	14. Re-run the project.
	
	15. Click on the button marked "Modify Data" to enter a new value for the
	  current customer's city. The code will modify that row in the database
	  without changing the row in the recordset.
	
	16. Click on the button marked "Requery" to re-run the query. You will see a
	  message box that says that the recordset has been re-opened and displays the
	  value for the current customer's city in the recordset object. You will see
	  the value that you entered in Step 9 in this message box. The grid and
	  textbox will now display the new value.
	
	  NOTE: You could also bind your controls to the recordset itself rather than
	  to the DataEnvironment by placing the following code in the Form_Load event.
	  If you use this method, you do not need to re-bind your controls:
	
	        txtCustomerID.DataMember = ""
	        Set txtCustomerID.DataSource = DataEnvironment1.rsCustomers
	        txtCity.DataMember = ""
	        Set txtCity.DataSource = DataEnvironment1.rsCustomers
	        DataGrid1.DataMember = ""
	        Set DataGrid1.DataSource = DataEnvironment1.rsCustomers
	    
	
	(c) Microsoft Corporation 1998. All Rights Reserved.
	Contributions by David Sceppa, Microsoft Corporation.
	
	
	Additional query words: binding kbCtrl kbVS600 kbdse kbDSupport kbVBp kbDataBinding kbVBp600 kbDataEnv kbDatabase
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : :6.0
	Issue type        : kbprb
	
	=============================================================================
	
