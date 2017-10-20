---
layout: page
title: "Q172593: HOWTO: Populate DBGrid from Crosstab Parameter Query"
permalink: /kb/172/Q172593/
---

## Q172593: HOWTO: Populate DBGrid from Crosstab Parameter Query

{% raw %}

	Article: Q172593
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 16-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to create a Parameter Crosstab Query using the
	sample Nwind.mdb Access database file. It also explains how to create a
	recordset in Visual Basic by running the query, passing the necessary parameters
	to it, and then populating a Visual Basic DBGrid with the resultant recordset.
	
	MORE INFORMATION
	================
	
	The following example uses the sample Nwind database that ships with Visual
	Basic. Note that it is recommended to explicitly declare the parameters when
	creating and running Crosstab Parameter Queries. See the REFERENCES section of
	this article for more information.
	
	1. Create a new Project in Visual Basic.
	
	2. From the menu, select Project - References and make a reference to Microsoft
	  DAO 3.5 Object Library. In Visual Basic 4.0, under Tools references make, a
	  reference to DAO 3.0 object library.
	
	3. From the menu, select Project - Components and select a Data Bound Grid
	  control. In Visual Basic 4.0, this is under Tools - Custom Controls.
	
	4. Add a CommandButton, a Data Control and a DBGrid Control to the new Form.
	
	5. Accept the default Names for the Command Button, DBGrid, and Data Control.
	
	6. Enter the sample code below into the General Declarations of the Form.
	
	7. In the properties Window, set the DataSource property of the DBGrid to Data1
	  to bind the DBGrid to the Data control.
	
	8. Run the application and click the CommandButton.
	
	  Sample code:
	
	        Private Sub Command1_Click()
	          Dim Sql As String
	          Dim DatabaseFile As String
	          Dim MyDB As Database
	          Dim RS As Recordset
	          Dim QD As QueryDef
	
	        On Error GoTo errorHand
	
	        'This is the Path & Database filename.
	        'Change to match your path and filename.
	        DatabaseFile = "C:\VB5\Nwind.mdb"
	
	        'Create the querydef SQL string
	        Sql = "Parameters [Enter first date] DateTime, " _
	           & "[Enter second date] DateTime;"
	        Sql = Sql & " TRANSFORM Sum(CCur([Order Details].[UnitPrice]" _
	           & " *[Quantity]*(1-[Discount])/100)*100) AS ProductAmount"
	        Sql = Sql & " SELECT Products.ProductName, Orders.CustomerID," _
	           & " Year([OrderDate]) AS OrderYear"
	        Sql = Sql & " FROM Products INNER JOIN (Orders INNER JOIN" _
	           & " [Order Details] ON Orders.OrderID ="
	        Sql = Sql & " [Order Details].OrderID) ON" _
	           & " Products.ProductID = [Order Details].ProductID"
	        Sql = Sql & " WHERE (((Orders.OrderDate) Between" _
	           & " [Enter first date] And [Enter second date]))"
	        Sql = Sql & " GROUP BY Products.ProductName, Orders.CustomerID," _
	           & " Year([OrderDate])"
	        Sql = Sql & " PIVOT 'Qtr ' & DatePart('q',[OrderDate],1,0) In" _
	           & " ('Qtr 1','Qtr 2','Qtr 3','Qtr 4');"
	
	        'This code creates the parameter query
	
	        Set MyDB = DBEngine(0).OpenDatabase(DatabaseFile)
	        Set QD = MyDB.CreateQueryDef("CrossTabParamQuery")
	        With QD
	            .Sql = Sql
	            .Parameters("[Enter first date]") = #1/1/95#
	            .Parameters("[Enter second date]") = #1/1/96#
	        End With
	        Set Rs = QD.OpenRecordset(dbOpenDynaset)
	        Set Data1.Recordset = Rs
	        Exit Sub
	
	        errorHand:
	        If Err.Number = 3012 Then   ' The querydef exists
	            MyDB.QueryDefs.Delete "CrossTabParamQuery"
	            Resume
	        Else
	            MsgBox Err.Number & "  " & Err.Description
	        End If
	        End Sub
	
	        Private Sub Form_Unload(Cancel As Integer)
	           RS.Close
	           QD.Close
	           MyDB.Close
	        End Sub
	
	REFERENCES
	==========
	
	Visual Basic Help topic "PARAMETERS Declaration"
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q91710 : Can't Bind Name '[XXX]'" Error with Crosstab Query
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbVBp400
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400 kbVB16bitSearch
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
