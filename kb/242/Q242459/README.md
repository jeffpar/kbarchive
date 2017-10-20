---
layout: page
title: "Q242459: BUG: DAO Recordset Update Method Fails Silently"
permalink: /kb/242/Q242459/
---

## Q242459: BUG: DAO Recordset Update Method Fails Silently

{% raw %}

	Article: Q242459
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbDAO350bug kbDatabase kbGrpDSVBDB kbDSupport kbDAO360bug
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to add a new record to a recordset, the Data Access Objects
	(DAO) Recordset Update method may fail silently when the following conditions
	are met:
	
	- The Recordset is based on a query that joins two tables.
	
	- The table being updated has a Required field enforced by a Primary Key or
	  Unique Index.
	
	- No values are supplied for any of the fields in the Recordset.
	
	RESOLUTION
	==========
	
	To work around this problem, use either of the following methods:
	
	1. If the joined table is unnecessary, remove the joined table from the query.
	  Doing this causes the 3314 error to fire as expected. To remove the joined
	  table:
	
	  a. Open the database in Microsoft Access.
	
	  b. Open the query in Design View.
	
	  c. Delete the unnecessary table from the query.
	
	  d. Save and close the query.
	
	2. Prior to calling the Update method, write code that checks to ensure that a
	  value is supplied for all fields in the table where the Required Value
	  property is set to Yes. For example, if you are using text boxes on a form
	  for data entry and you have a text box named "txtSSN" (without the quotation
	  marks) and a required field in the table named "SSN" (without the quotation
	  marks), check the Text property of the txtSSN text box prior to calling the
	  Update method to ensure it contains a value as follows:
	
	  If Trim(txtSSN.Text) = "" Then 
	     MsgBox "The SSN field is Required. You must supply a valid SSN." 
	     txtSSN.SetFocus 
	     Exit Sub 
	  End If
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When the above conditions are met, attempting to add a new record to the
	recordset can fail on the Update method with the following error:
	
	  Run-time error 3314
	  The field 'table.fieldname' can't contain a NULL value because the Required
	  property for this field is set to True. Enter a value in this field.
	
	Instead, the Update method fails silently. If you are using a DBGrid control to
	display the recordset, an empty row is added to the DBGrid control even though
	no row has been added to the actual database table.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Open the Northwind.mdb database in Microsoft Access.
	
	2. Open the Orders table in design view.
	
	3. Change the DataType of the OrderID field from "Autonumber" (without the
	  quotation marks) to "Number" (without the quotation marks).
	
	4. Save the table and close it.
	
	5. Create a new query and add the Orders and Order Details tables.
	
	6. Join the tables on the OrderID field.
	
	7. Add several fields from the Orders table to the query grid.
	
	8. Save the query as qry_Orders and close it.
	
	9. Create a new Standard EXE project in Microsoft Visual Basic.
	
	10. From the Project menu, choose Components.
	
	11. In the Controls tab of the Components dialog box, select the Microsoft Data
	  Bound Grid control.
	
	12. On the existing form, add the following controls:
	
	  Data Control
	  DB Grid Control
	  Command Button
	
	13. Set the following properties for the controls.
	
	+--------------------------------------------------------------------------------+
	| Control         | Property     | Value                                         | 
	+--------------------------------------------------------------------------------+
	| Data Control    | Name         | dcOrders                                      | 
	+--------------------------------------------------------------------------------+
	|                 | DatabaseName | Enter the path to your Northwind.mdb database | 
	+--------------------------------------------------------------------------------+
	|                 | RecordSource | Qry_Orders                                    | 
	+--------------------------------------------------------------------------------+
	| DB Grid Control | Name         | DBGrid1                                       | 
	+--------------------------------------------------------------------------------+
	|                 | DataSource   | dcOrders                                      | 
	+--------------------------------------------------------------------------------+
	| Command Button  | Name         | cmdNew                                        | 
	+--------------------------------------------------------------------------------+
	|                 | Caption      | Add Record                                    | 
	+--------------------------------------------------------------------------------+
	
	14. Add the following code to the form. You need to change the line in the
	  Form_Load event that points to the Northwind.mdb database, to refer to the
	  path where your database resides.
	
	  Option Explicit
	  Dim db As DAO.Database
	  Dim rs As DAO.Recordset
	
	  Private Sub cmdNew_Click()
	
	  'Update fails silently when the Access query contains the two joined tables.
	  'Update errors with 3314 when the Order_Details table is removed from the query. 
	
	  dcOrders.Recordset.AddNew
	  'As a second workaround, check the Text property of any textboxes that supply data to required fields to ensure they contain values.
	  dcOrders.Recordset.Update
	
	  End Sub
	
	  Private Sub Form_Load()
	
	  Dim sDbName As String
	
	  Stop    'Change the path to point to where you saved the MDB File and then comment out this line.
	  sDbName = "C:\Database\Northwind.mdb"
	
	  Set db = DAO.DBEngine.Workspaces(0).OpenDatabase(sDbName, False, False)
	
	  'The problem occurs with both a DAO recordset AND the DataControl's Recordset.
	  'This scenario only illustrates the use of the DataControl's Recordset.
	  Set dcOrders.Recordset = db.OpenRecordset("Qry_Orders") 
	
	  End Sub
	
	15. Run the project and click the Add Record command button. You do not receive
	  an error but an empty row is added to the DBGrid. Note that no record has
	  been added to the Orders table.
	
	Additional query words: blank data control empty
	
	======================================================================
	Keywords          : kbDAO350bug kbDatabase kbGrpDSVBDB kbDSupport kbDAO360bug 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
