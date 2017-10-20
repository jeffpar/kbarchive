---
layout: page
title: "Q289793: HOWTO: Dynamically Populate a Group Data Report in Visual Basic"
permalink: /kb/289/Q289793/
---

## Q289793: HOWTO: Dynamically Populate a Group Data Report in Visual Basic

{% raw %}

	Article: Q289793
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0,6.0 SP3,6.0 SP4
	Operating System(s): 
	Keyword(s): kbADO200 kbADO201 kbADO210 kbReport kbGrpDSVBDB kbDSupport kbADO210sp2 kbADO250 kbADO26
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains how to create a Group Data Report programmatically without
	binding it to any data at design time.
	
	MORE INFORMATION
	================
	
	Step-by-Step Example
	--------------------
	
	1. Open a Standard EXE project in Visual Basic. Form1 is created by default.
	
	2. Add a Command button to Form1.
	
	3. On the Project menu, click References, and then add a reference to Microsoft
	  ActiveX Data Objects Library.
	
	4. On Project menu, click to add DataReport1. If Add Datareport is not on the
	  Project menu, add it from the Designers tab located on the Project menu under
	  Components. (Make sure that you deselect Selected Items Only in the Project
	  menu under Components.)
	
	5. Open Datareport1 and ensure that the Detail, Page Header, and Page Footer
	  sections are visible. If the Report Header or Footer sections are visible,
	  remove them by right-clicking the report and removing the check mark from
	  Show Report Header/Footer.
	
	6. Right-click and select Insert Group Header/Footer. A new Section, Section4,
	  is added to the Datareport.
	
	7. Add one rptLabel control and one rptTextbox control to the new section.
	
	8. Add two rptLabel controls and two rptTextbox controls to the Detail section
	  of the Datareport.
	
	9. Copy and paste the following code into the form:
	
	        Dim cn As New ADODB.Connection
	        Dim rs As New ADODB.Recordset
	        Dim cmd As New ADODB.Command
	        Dim rs1 As New ADODB.Recordset
	        Private Sub Command1_Click()
	        Dim q As Integer
	        Dim intCtrl As Integer
	        Dim x As Integer
	        Dim z As Integer
	        x = 0
	        q = 0
	        z = 0
	
	        With DataReport1
	        .Hide
	        Set .DataSource = rs
	        .DataMember = ""
	        With .Sections("section4").Controls
	        For intCtrl = 1 To .Count
	        If TypeOf .Item(intCtrl) Is RptLabel Then
	           .Item(intCtrl).Caption = "City" & " :"
	            q = q + 1
	        End If
	        If TypeOf .Item(intCtrl) Is RptTextBox Then
	          .Item(intCtrl).DataMember = ""
	          .Item(intCtrl).DataField = "City"
	        End If
	        Next
	        End With
	        
	        q = 0
	        With .Sections("Section1").Controls
	            For intCtrl = 1 To .Count
	            If TypeOf .Item(intCtrl) Is RptLabel Then
	                     .Item(intCtrl).Caption = rs1.Fields(q).Name & " :"
	                      q = q + 1
	            End If
	            If TypeOf .Item(intCtrl) Is RptTextBox Then
	                     .Item(intCtrl).DataMember = "Command1"
	                     .Item(intCtrl).DataField = rs1(z).Name
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
	        cn.Open "Provider=MSDATASHAPE; Data Provider=Microsoft.JET.OLEDB.4.0;" & _
	                 "Data Source=D:\Program Files\Microsoft Visual Studio\VB98\Nwind.mdb;"
	         
	        With cmd
	             .ActiveConnection = cn
	             .CommandType = adCmdText
	             .CommandText = " SHAPE {SELECT FirstName,Lastname,City FROM `Employees`}  AS Command1 COMPUTE Command1 BY 'City'"
	             .Execute
	        End With
	         
	        With rs
	             .ActiveConnection = cn
	             .CursorLocation = adUseClient
	             .Open cmd
	        End With
	        Set rs1 = rs(0).Value
	
	        End Sub
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q240019 HOWTO: Dynamically Populate a Data Report in Visual Basic
	
	Additional query words:
	
	======================================================================
	Keywords          : kbADO200 kbADO201 kbADO210 kbReport kbGrpDSVBDB kbDSupport kbADO210sp2 kbADO250 kbADO260 kbADOsearch kbATM kbado270 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO200 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4 kbADO270
	Version           : :6.0,6.0 SP3,6.0 SP4
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
