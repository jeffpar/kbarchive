---
layout: page
title: "Q251329: HOWTO: Modify the Command of a Hierarchical DataReport"
permalink: kb/251/Q251329/
---

## Q251329: HOWTO: Modify the Command of a Hierarchical DataReport

	Article: Q251329
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbADO210 kbDatabase kbVBp600 kbGrpDSVBDB kbDSupport kbADO210sp2 kbADO250 kbADO260 kbATM
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.1, 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to base a DataReport on a hierarchical
	DataEnvironment and refresh the report after changing the command text.
	
	MORE INFORMATION
	================
	
	The following Microsoft Knowledge Base article illustrates how to refresh a
	DataReport when re-executing a parameterized command:
	
	  Q244779 HOWTO: Refresh a Parameterized DataReport
	
	This article demonstrates a similar technique, which modifies the command
	itself.
	
	NOTE: Any modification to the command cannot change the shape of the hierarchy or
	the names of the fields.
	
	In the sample program provided in this article, the command is modified to show
	the following:
	
	- All orders where the CustomerID starts with the letter "A".
	
	- All orders shipped through shipper #1.
	
	- All orders placed in 1996.
	
	To create the sample, use these steps:
	
	1. Open a new Standard EXE Project in Microsoft Visual Basic. Form1 is created
	  by default.
	
	2. Add a DataEnvironment (DataEnvironment1) and a DataReport (DataReport1) to
	  the project.
	
	3. Add a Connection (Connection1) to the DataEnvironment that points to the SQL
	  Server Northwind database using the OLE DB Provider for SQL Server.
	
	4. Add a Command (Command1) to Connection1. Right-click the command button and
	  then select Properties.
	
	5. In the Properties dialog box, click the General tab and add the following:
	
	  SQL Statement: SELECT Customers.CompanyName, Orders.* FROM Customers INNER
	  JOIN Orders ON Customers.CustomerID = Orders.CustomerID
	
	6. In the Properties dialog box, click the Grouping tab and set the following:
	
	  Group Command Object: (select this item)
	  Grouping Command Name: Customer
	  Fields Used for Grouping: CustomerID
	
	7. In the Properties dialog box, click the Aggregates tab. Click Add and then
	  edit the following properties:
	
	  Name: Company
	  Function: Any
	  Aggregate On: Grouping
	  Field: CompanyName
	
	8. Click OK to close the Properties dialog box. The hierarchy changes to the
	  following:
	
	Command1 grouped using Customer
	 Summary fields in Customer
	   CustomerID
	   Company
	 Detail fields in Command1
	   CompanyName
	   OrderID
	   CustomerID
	   EmployeeID
	   ...
	
	9. In the DataReport, set the following properties:
	
	  DataSource: DataEnvironment1
	  DataMember: Customer
	
	10. Right-click the body of the report, and then select the Insert Group
	  Header/Footer menu item.
	
	11. Drag the following fields from the DataEnvironment into the Detail section
	  of the DataReport:
	
	  OrderID
	  CustomerID
	  OrderDate
	  ShipVia
	
	Drag the following fields from the DataEnvironment into the Group Header section
	of the DataReport:
	
	  CustomerID
	  Company
	
	12. Add three command buttons (Command1, Command2, Command3) and the following
	  code to the form:
	
	  Option Explicit
	
	  Const preSHAPE = "SHAPE {"
	  Const SQL = "SELECT Customers.CompanyName, Orders.* FROM Customers INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID"
	  Const postSHAPE = "}  AS Command1 COMPUTE Command1, ANY(Command1.'CompanyName') AS Company BY 'CustomerID'"
	
	  Private Sub Command1_Click()
	  '
	  ' Selects orders with CustomerID starting with A.
	  '
	    Load DataEnvironment1
	    With DataEnvironment1
	      If .rsCustomer.State Then .rsCustomer.Close
	      .Commands!Customer.CommandText = preSHAPE & SQL & " WHERE Customers.CustomerID LIKE 'A%'" & postSHAPE
	      .Customer
	    End With
	    DataReport1.Refresh
	    If DataReport1.Visible = False Then DataReport1.Show
	  End Sub
	
	  Private Sub Command2_Click()
	  '
	  ' Selects orders shipped via Shipper #1
	  '
	    Load DataEnvironment1
	    With DataEnvironment1
	      If .rsCustomer.State Then .rsCustomer.Close
	      .Commands!Customer.CommandText = preSHAPE & SQL & " WHERE ShipVia=1" & postSHAPE
	      .Customer
	    End With
	    DataReport1.Refresh
	    If DataReport1.Visible = False Then DataReport1.Show
	  End Sub
	
	  Private Sub Command3_Click()
	  '
	  ' Selects orders in 1996
	  '
	    Load DataEnvironment1
	    With DataEnvironment1
	      If .rsCustomer.State Then .rsCustomer.Close
	      .Commands!Customer.CommandText = preSHAPE & SQL & " WHERE Year(OrderDate)=1996" & postSHAPE
	      .Customer
	    End With
	    DataReport1.Refresh
	    If DataReport1.Visible = False Then DataReport1.Show
	  End Sub
	
	  Private Sub Form_Load()
	     Command1.Caption = "CustomerID starts with 'A'"
	     Command2.Caption = "Orders via Shipper #1"
	     Command3.Caption = "1996 Orders"
	  End Sub
	
	You may have to modify the SHAPE statement in the code based on your hierarchical
	command. You can copy the Command1 SHAPE statement by right-clicking it in the
	DataEnvironment and then select Hierarchy Info. You can paste the SHAPE
	statement in the code and use it to modify the preSHAPE, postSHAPE, and SQL
	constants. The DataEnvironment Command and Recordset names used in the preceding
	code, in this case "Customer" and "rsCustomer", match the name that displays in
	the top level of the hierarchy.
	
	13. Save the project and run it. Click each of the command buttons. You see the
	  DataReport show data based on the modified command text, namely:
	
	  a. Orders where the CustomerID starts with "A".
	
	  b. Orders shipped by shipper #1.
	
	  c. Orders placed in 1996.
	
	REFERENCES
	==========
	
	For additional information regarding the SHAPE syntax, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q189657 HOWTO: Use the ADO SHAPE Command
	
	  Q185425 INFO ADO Hierarchical Recordsets via SHAPE APPEND w/C++/VBA/Java
	
	  Q249097 HOWTO: Re-Shape a Hierarchical Recordset
	
	  Q247662 HOWTO: Access a Secured Jet Database w/ the MSDataShape Provider
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO210 kbDatabase kbVBp600 kbGrpDSVBDB kbDSupport kbADO210sp2 kbADO250 kbADO260 kbATM kbmdac270 kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO210sp1 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : WINDOWS:2.1,2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
