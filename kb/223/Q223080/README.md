---
layout: page
title: "Q223080: FIX: ADODC Errors When RecordSet Property is set to NULL"
permalink: /kb/223/Q223080/
---

## Q223080: FIX: ADODC Errors When RecordSet Property is set to NULL

{% raw %}

	Article: Q223080
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbservicepack kbCtrl kbVBp600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB
	Last Modified: 25-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the RecordSet property on the ActiveX Data Control (ADO) DataControl to
	Nothing generates one of the following errors:
	
	  Run-time error '-2147217908 (80040e0c)': Method 'Refresh' of object 'IADODC'
	  failed.
	
	  -or-
	
	  Run-time error '-2147417848 (80010108)': Method 'Recordset' of object
	  'IADODC' failed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio 6.0 Service Packs, please see the
	following articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following code sample uses the NorthWinds database, NWind.MDB, that comes
	with Visual Basic.
	
	1. Start Visual Basic 6.0 and create a new Standard EXE project. Form1 is
	  created by default.
	
	2. Add the following Project Component:
	
	  Microsoft ADO Data Control 6.0 (OLEDB)
	
	3. Paste the following code into the default form:
	
	     Private Sub Form_Load()
	
	     Adodc1.ConnectionString = "Provider=Microsoft.Jet.OLEDB.3.51;" & _
	       "Data Source=C:\Program Files\Microsoft Visual Studio\VB98\Nwind.mdb"
	     Adodc1.RecordSource = "SELECT * FROM Employees"
	     Adodc1.Refresh
	     MsgBox Adodc1.Recordset("LastName")
	
	     'Error occurs on this line:
	     Set Adodc1.Recordset = Nothing
	
	  End Sub
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Matthew
	Hofacker, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbservicepack kbCtrl kbVBp600fix kbVS600sp2 kbVS600SP1 kbVS600sp3fix kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbVB600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
