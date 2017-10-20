---
layout: page
title: "Q240019: HOWTO: Dynamically Populate a Data Report in Visual Basic"
permalink: /kb/240/Q240019/
---

## Q240019: HOWTO: Dynamically Populate a Data Report in Visual Basic

{% raw %}

	Article: Q240019
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1,2.1 (GA),2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kbReportWriter kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC200 kbMDAC210 kbMDAC21
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.0, 2.1, 2.1 (GA), 2.1 SP1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to create a report without binding the report to any
	data at design time. This allows you to generate a report without knowing the
	column names within the Data Source.
	
	MORE INFORMATION
	================
	
	When using the Data Report, textboxes must be bound to an ADO recordset. In some
	situations it is necessary to generate this data report at runtime without
	knowing the column names at design time. To do this you must first have a data
	report included in your project with the correct number of controls needed to
	display the data being retrieved. Then open an ADO recordset and loop through
	this recordset populating the controls that were placed on the data report. The
	following code demonstrates how to accomplish this.
	
	Sample Code
	-----------
	
	1. Start a new Visual Basic Standard EXE project. Form1 is added by default.
	
	2. From the Project menu, click References, and select the Microsoft ActiveX
	  Data Objects.
	
	3. From the Project menu select "Add Data Report". If there is no option for a
	  Data Report then you will need to choose Components from the Project and a
	  dialog box is displayed. Click on the Designers tab and add a reference to
	  the Data Report.
	
	4. In the Data Report properties change the Data Report name to DR.
	
	5. Place two report Labels and two report Textboxes in the Detail Section of the
	  report.
	
	6. Place a command button on Form1 named command1.
	
	7. Place the following code into Form1.
	
	     Dim cn As New ADODB.Connection
	     Dim rs As New ADODB.Recordset
	     Dim cmd As New ADODB.Command
	
	     Private Sub Command1_Click()
	     Dim q As Integer
	     Dim intCtrl As Integer
	     Dim x As Integer
	     Dim z As Integer
	     x = 0
	     q = 0
	     z = 0
	
	     With DR
	     .Hide
	     Set .DataSource = rs
	     .DataMember = ""
	     With .Sections("Section1").Controls
	         For intCtrl = 1 To .Count
	       If TypeOf .Item(intCtrl) Is RptLabel Then
	                  .Item(intCtrl).Caption = rs.Fields(q).Name & " :"
	                   q = q + 1
	              End If
	              If TypeOf .Item(intCtrl) Is RptTextBox Then
	                  .Item(intCtrl).DataMember = ""
	                  .Item(intCtrl).DataField = rs(z).Name
	                  z = z + 1
	              End If
	      Next intCtrl
	     End With
	     .Refresh
	     .Show
	     End With
	     End Sub
	
	     Private Sub Form_Load()
	
	      Command1.Caption = "Show Report"
	
	      cn.Open "Provider=Microsoft.Jet.OLEDB.4.0;" & _
	              "Data Source=C:\Program Files\Microsoft Visual    Studio\VB98\Nwind.mdb;"
	      
	      With cmd
	          .ActiveConnection = cn
	          .CommandType = adCmdText
	          .CommandText = "Select FirstName, Lastname from Employees"
	          .Execute
	      End With
	      
	      With rs
	          .ActiveConnection = cn
	          .CursorLocation = adUseClient
	          .Open cmd
	      End With
	
	     End Sub
	
	8. Change the Data Source Property in the connect string to the path to your
	  Northwind MDB.
	
	9. Save and Run the Project. You should see a Data Report created with the
	  information returned from the Northwind database.
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Terrell D.
	Andrews, Microsoft Corporation.
	
	
	Additional query words: dataenvironment
	
	======================================================================
	Keywords          : kbReportWriter kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC200 kbMDAC210 kbMDAC210SP2bug kbMDAC260 kbmdac270 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbMDACSearch kbMDAC200 kbMDAC210 kbMDAC210SP1 kbMDAC210SP2 kbMDAC250 kbMDAC260 kbMDAC270
	Version           : :2.0,2.1,2.1 (GA),2.1 SP1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
