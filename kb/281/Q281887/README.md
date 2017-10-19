---
layout: page
title: "Q281887: FIX: Invalid Bookmark ErrMsg When Records Added to Recordset"
permalink: /kb/281/Q281887/
---

## Q281887: FIX: Invalid Bookmark ErrMsg When Records Added to Recordset

	Article: Q281887
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 2.5,6.0,6.0 SP3,6.0 SP4
	Operating System(s): 
	Keyword(s): kbADO200 kbADO210 kbDatabase kbMDAC kbVBp600bug kbGrpDSVBDB kbDSupport kbADO260fix kbAD
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 6.0, 6.0 SP3, 6.0 SP4 
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- ActiveX Data Objects (ADO), version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use a DataGrid to add a record to a server-side ActiveX Data Objects
	(ADO) recordset, you receive one of the following error messages when there are
	more records than the DataGrid can display:
	
	  Invalid Bookmark
	
	  -or-
	
	  c0000005 (access violation)
	
	CAUSE
	=====
	
	The Invalid Bookmark error message appears if Visual Studio Service Pack 5 (SP5)
	has not been applied. The Access Violation error message appears if you apply
	SP5 in addition to making an upgrade to MDAC 2.6 on the system.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Microsoft Data
	Access Components 2.6. For additional information, please see the following
	article in the Microsoft Knowledge Base:
	
	  Q300635 INFO: How to Obtain the Latest MDAC 2.6 Service Pack
	
	The easiest resolution is to switch to client-side cursors for instances where
	DataGrids are used to add records to ADO recordsets. If MDAC 2.5 is installed on
	the system, then an upgrade to SP5 resolves the Invalid Bookmark error. If you
	apply MDAC 2.6 as well as SP5 for Visual Studio, you can use the following link
	to the Component Checker tool to return to a earlier MDAC version, such as 2.5:
	
	  http://www.microsoft.com/data/download.htm#CCinfo
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MDAC:
	
	This problem was first corrected in Microsoft Data Access Components 2.6 Service
	Pack 1.
	
	Visual Studio 6.0:
	
	This bug was corrected in Microsoft Visual Studio 6.0 Service Pack 5 (SP5). For
	additional information about Visual Studio service packs, click the article
	numbers below to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	You can download the latest Visual Studio service pack from the following
	Microsoft Web site:
	
	  Visual Studio Product Updates
	  (http://msdn.microsoft.com/vstudio/downloads/updates.asp)
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Standard EXE in Visual Basic. Form1 is created by default.
	
	2. On the Project menu, choose Components, choose Microsoft ADO Data Control 6.0
	  and Microsoft DataGrid Control 6.0, and then place an instance of each on the
	  form.
	
	3. Right-click the ADO Data Control and, on General tab, set up a connection
	  string to a SQL Server database.
	
	4. Select the Recordsource tab, select 2-adCmdTable, and then select a table in
	  the database from the drop-down list.
	
	5. On the ADODC1 property sheet, set the CursorLocation property to
	  2-adUseServer.
	
	6. On the property sheet, select the DataGrid, and then set AllowAddNew to True
	  and DataSource to ADODC1.
	
	7. Run the project and press the PAGE DOWN key until you get to the bottom of
	  the DataGrid.
	
	8. When you get to the last row, click in a field and begin to add a record.
	
	When you move off of the newly added field in the new record, you receive one of
	the two error messages listed in the "Symptoms" section unless Visual Studio SP5
	has been applied on a computer that is running MDAC 2.5.
	
	Additional query words: c0000005 AV
	
	======================================================================
	Keywords          : kbADO200 kbADO210 kbDatabase kbMDAC kbVBp600bug kbGrpDSVBDB kbDSupport kbADO260fix kbADO210sp2 kbADO250 kbMDAC260bug kbVS600sp5fix kbATM kbMDAC260sp1Fix 
	Technology        : kbVBSearch kbAudDeveloper kbADOsearch kbADO250 kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600 kbVB600SP3 kbVB600SP4
	Version           : :2.5,6.0,6.0 SP3,6.0 SP4
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
