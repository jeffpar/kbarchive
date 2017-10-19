---
layout: page
title: "Q257657: FIX: Update Fails for Text Column w/CursorDriver at rdUseODBC"
permalink: /kb/257/Q257657/
---

## Q257657: FIX: Update Fails for Text Column w/CursorDriver at rdUseODBC

	Article: Q257657
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0; winnt:7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbRDO kbSQLServ kbGrpDSVBDB kbDSupport kbGrpDSODBC kbVS600sp4fix kbVS600sp5f
	Last Modified: 20-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft SQL Server version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When editing a column of type Text in SQL Server 7.0 through a Remote Data
	control or an rdoEnvironment object opened with the CursorDriver property set to
	rdUseODBC, the update fails.
	
	CAUSE
	=====
	
	This behavior occurs because the ODBC cursor library uses all columns to build
	the WHERE clause. For inexact types, such as Text, the driver may be unable to
	locate the row.
	
	RESOLUTION
	==========
	
	Install the latest service pack for Visual Studio 6.0.
	
	To work around the problem, use ActiveX Data Objects (ADO). Or, do not use ODBC
	client-side cursors with Remote Data Objects (RDO).
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article. This bug was corrected in the latest
	service pack for Visual Studio 6.0.
	
	For additional information about Visual Studio service packs, click the following
	article numbers to view the articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That a Visual Studio Service Pack Is Installed
	
	To download the latest Visual Studio service pack, visit the following Microsoft
	Web site:
	
	  http://msdn.microsoft.com/vstudio/downloads/updates.asp
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new Visual Basic Standard EXE project. Form1 is created by default.
	
	2. On the Project menu, choose References, and then add a reference to the
	  Microsoft Remote Data Objects 2.0 library.
	
	3. Remove Form1, and add a new module.
	
	4. Insert the following code into the module:
	
	  Option Explicit
	
	  Public Sub Main()
	      Dim cn As New rdoConnection
	      Dim rs As rdoResultset
	      Dim strTemp As String
	      
	      cn.CursorDriver = rdUseODBC
	      cn.Connect = "driver={sql server};server=MyServer;database=pubs;uid=sa;pwd=;"
	      cn.EstablishConnection
	      Set rs = cn.OpenResultset("SELECT au_lname FROM Authors", _
	          rdOpenKeyset, rdConcurRowVer)
	      strTemp = "NewLastName"
	      rs.Edit
	      rs!au_lname = strTemp
	      rs.Update
	      rs.Requery
	      If rs!au_lname <> strTemp Then
	          Debug.Print "Test FAILED!! -- Strings don't match"
	      Else
	          Debug.Print "Test PASSED!! -- Strings match"
	      End If
	      
	      rs.Close
	      cn.Close
	  End Sub
	
	If the source database for the data is SQL Server 7.0, the test fails.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbDatabase kbRDO kbSQLServ kbGrpDSVBDB kbDSupport kbGrpDSODBC kbVS600sp4fix kbVS600sp5fix 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbSQLServ700 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0; winnt:7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
