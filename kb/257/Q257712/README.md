---
layout: page
title: "Q257712: FIX: DBCS Characters Cause Duplicate Column Name Using Jet 4"
permalink: kb/257/Q257712/
---

## Q257712: FIX: DBCS Characters Cause Duplicate Column Name Using Jet 4

	Article: Q257712
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbJET kbOLEDB kbVBp600 kbVBp600bug kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, version 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to create a Microsoft Access 97 table from a Visual Basic project,
	you may receive the following error message:
	
	  -2147217900(80040e14):
	  [Microsoft][ODBC Microsoft Access Driver] Field '(The second column name)'
	  already exists in table 'HWC'
	
	The problem does not occur with a Microsoft Access 2000 database.
	
	This problem arises when you attempt to create a table with two columns that
	contain double-byte character sets whose fields are the same length. This
	problem only occurs with the Jet 4.0 OLE-DB provider and the Access ODBC driver.
	
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
	
	In addition, the Jet 3.51 OLEDB provider does not exhibit this behavior.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use Access 97 or the Visual Data Manager Add-In to create a blank .mdb file
	  named Test in the Visual Basic 98 application folder.
	
	2. In Visual Basic, create a new Standard EXE project. Form1 is created by
	  default.
	
	3. Add a CommandButton control to Form1. Command1 is created by default.
	
	4. Paste the following code into Form1's Code window:
	
	  Private Sub Command1_Click()
	      Dim cn As ADODB.Connection
	      Set cn = New ADODB.Connection
	
	      'Call cn.Open("Provider=Microsoft.Jet.OLEDB.3.51;Persist Security Info=False;" & _
	          "Data Source=c:\program files\microsoft visual studio\vb98\Test.mdb")
	      'Call cn.Open("Provider=Microsoft.Jet.OLEDB.4.0;Persist Security Info=False;" & _
	          "Data Source=c:\program files\microsoft visual studio\vb98\Test.mdb")
	      Call cn.Open("Driver={Microsoft Access Driver (*.mdb)};" & _
	          "Dbq=c:\program files\microsoft visual studio\vb98\test.mdb")
	          
	      'The table has two columns, each column name has 4 DBCS characters.
	      'Replace the question marks in the following line with DBCS characters
	      cn.Execute "Create TABLE HWC(???? DateTime,???? String(5))"
	      Call cn.Close
	  End Sub
	
	5. Run the project, click the CommandButton, and note that the error message in
	  the "Symptoms" section appears.
	
	Additional query words: sp4
	
	======================================================================
	Keywords          : kbDatabase kbJET kbOLEDB kbVBp600 kbVBp600bug kbGrpDSVBDB kbDSupport kbVS600sp4fix kbVS600sp5fix kbATM 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
