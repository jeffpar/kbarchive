---
layout: page
title: "Q326544: BUG: Error Selecting Empty VFP Memo w/ .NET OleDbDataAdapter"
permalink: kb/326/Q326544/
---

## Q326544: BUG: Error Selecting Empty VFP Memo w/ .NET OleDbDataAdapter

	Article: Q326544
	Product(s): Microsoft FoxPro
	Version(s): 7.0.0.9262,7.0.0.9465
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport
	Last Modified: 07-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft OLE DB Provider for Visual FoxPro, versions 7.0.0.9262, 7.0.0.9465 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft OLE DB Provider for Visual FoxPro can access Visual FoxPro data
	from Microsoft Visual Studio .NET projects. When you use the OleDbDataAdapter
	object from the System.Data.OleDb namespace, and your SQL SELECT statement
	returns an empty Visual FoxPro memo field, you receive the following error
	message:
	
	  Multiple-step OLE DB operation generated errors. Check each OLE DB status
	  value, if available. No work was done.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a bug in the Microsoft products that are
	listed at the beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	On a computer that has Visual Studio .NET and the OLE DB Provider for Visual
	FoxPro installed (version 7.0.0.9262 or 7.0.0.9465), follow these steps:
	
	1. In Visual Studio .NET, create a new Microsoft Visual Basic .NET Console
	  Application project.
	
	2. Replace the default Module1 code with the following:
	
	  Imports System.Data.OleDb
	
	  Module Module1
	
	      Sub Main()
	          ' Demonstrates a problem with the Microsoft OLE DB Provider for Visual FoxPro
	          ' interacting with the OleDbDataAdapter object and empty FoxPro memo fields.
	          Dim ThisDir As String = System.AppDomain.CurrentDomain.BaseDirectory
	          Dim oConn As New OleDbConnection("Provider=VFPOLEDB.1;Data Source=" & ThisDir)
	          Dim oCMD As New OleDbCommand()
	          Dim oDA As New OleDbDataAdapter("SELECT fldMEMO FROM Q326544", oConn)
	          Dim oDS As New DataSet()
	
	          ' Create a Visual FoxPro table with one memo field, and then insert a blank record.
	          With oCMD
	              .Connection = oConn
	              .Connection.Open()
	              .CommandType = CommandType.Text
	              .CommandText = "CREATE TABLE Q326544 (fldMEMO M)"
	              .ExecuteNonQuery()
	              .CommandText = "INSERT INTO Q326544 VALUES ([])"
	              .ExecuteNonQuery()
	              .Connection.Close()
	          End With
	
	          Try
	              oDA.Fill(oDS)
	          Catch oER As Exception
	              MsgBox(oER.Message)
	          End Try
	
	          oDA.Dispose()
	          oConn.Close()
	          oConn.Dispose()
	          oCMD.Dispose()
	      End Sub
	  End Module
	
	3. Press F5 to run the project.
	
	You receive the error message that is described in the "Symptoms" section.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbOLEDBSearch kbOLEDBProvSearch
	Version           : :7.0.0.9262,7.0.0.9465
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
