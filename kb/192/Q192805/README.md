---
layout: page
title: "Q192805: FIX: Hierarchical Child Recordset and ADO Data Control"
permalink: kb/192/Q192805/
---

## Q192805: FIX: Hierarchical Child Recordset and ADO Data Control

	Article: Q192805
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.0,2.1,2.1 SP2,2.5,2.6,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbADO201fix kbDatabase kbVBp kbVBp600bug kbVS600sp3fix kbGrpDSVBDB kbGrpDSMDAC
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), versions 2.0, 2.1, 2.1 SP2, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Creating a Hierarchical recordset and trying to assign the child recordset to
	the "ado data control" results in an error:
	
	  "Method 'Recordset' of object 'IAdodc' failed".
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. Add a reference to "Microsoft ActiveX Data Objects Library." Also, under
	  Project/Components, add "Microsoft ADO Data Control 6.0 (OLEDB)."
	
	3. Add a CommandButton and ADO data control to Form1.
	
	4. Make sure that you have a DSN for the SQL Server Northwind database called
	  "Northwind."
	
	5. Paste the following code in the General Declarations section:
	
	        Dim Conn As ADODB.Connection
	        Dim MainRS As ADODB.Recordset
	
	        Private Sub Command1_Click()
	           Dim XRs as ADODB.Recordset
	
	           Set Conn = New ADODB.Connection
	           Conn.ConnectionString = "Provider=MSDataShape.1;Data Provider=MSDASQL;" & _
	           "Data Source=Northwind; uid=<user>; pwd=<password>;"
	           Conn.Open
	
	           Set MainRS = New ADODB.Recordset
	           MainRS.CursorLocation = adUseClient
	
	           Call MainRS.Open(" SHAPE {SELECT * FROM `Customers` WHERE
	           CustomerID = 'ALFKI'}  AS Customer APPEND ({SELECT * FROM
	           `Orders`}  AS OrderChapter RELATE 'CustomerID' TO 'CustomerID') AS
	           CustomerOrders", Conn, adOpenStatic, adLockBatchOptimistic)
	
	           Set XRs = MainRs.Fields("CustomerOrders").Value
	           Set adodc1.recordset = XRs
	
	        End Sub
	
	6. Click on the CommandButton and note that the error above is returned.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbADO201fix kbDatabase kbVBp kbVBp600bug kbVS600sp3fix kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbADO210sp2 kbMDAC210SP2 kbMDAC250 kbATSsearch kbADO250 kbMDAC260 kbADO260 kbMDACNoSweep kbmdac270 kbado270 kbADO200Iss 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO210 kbADO200 kbADO210sp2 kbADO250 kbADO260 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbADO270
	Version           : :2.0,2.1,2.1 SP2,2.5,2.6,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
