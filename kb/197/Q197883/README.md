---
layout: page
title: "Q197883: PRB: Run-time Error '40002' When Querying on s_GUID field in RDO"
permalink: /kb/197/Q197883/
---

## Q197883: PRB: Run-time Error '40002' When Querying on s_GUID field in RDO

{% raw %}

	Article: Q197883
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbRDO kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB
	Last Modified: 09-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the database replication feature of Microsoft Access, a ReplicationID
	AutoNumber field is added to the database. The ReplicationID AutoNumber field
	(s_GUID) is a 16-byte GUID (Globally Unique Identifier) that uniquely identifies
	each record in the database.
	
	If you are using RDO 2.0 to access the replicated database and you try to search
	on the s_GUID field using the following syntax:
	
	     Set rdoRes = rdoConn.OpenResultset("select * from Nwind where
	     s_guid={guid{9B83B027-E038-11D1-847E-00C04FB1784E}}", _
	     rdOpenKeyset, rdConcurLock, rdAsyncEnable)
	
	The following error occurs:
	
	  
	
	  Run-Time error '40002':
	
	  37000: [Microsoft][ODBC Microsoft Access 97 Driver] Syntax error
	  (missing operator) in query expression 's_guid = guid
	  9B83B027-E038-11D1-847E-00C04FB1784E}'.
	
	Notice that all of the curly braces have been stripped off except the last one.
	
	CAUSE
	=====
	
	Because ODBC defines the curly brace as an escape code for vendor specific
	escape clauses, you must turn off escape clause scanning when you use literal
	globally unique identifiers (GUIDs) in SQL statements with the Microsoft Access
	ODBC Driver. This is accomplished by using the SQLSetConnectionOption API to
	turn off driver scanning for escape clauses.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Here is an example:
	
	1. Create a new form in Visual Basic. Form1 is created by default.
	
	2. From the Project menu, point to References then select Microsoft Remote Data
	  Object 2.0 in the References dialog box.
	
	3. Add a Command Button to the form.
	
	4. Add the following to the General Declaration section of the form:
	
	        Private Sub Command1_Click()
	        Dim rdoConn As rdoConnection
	        Dim rdoRes As rdoResultset
	        Dim strguid As String
	
	        'Make sure that you are pointing to a valid DSN and a replicated
	        'database.
	        Set rdoConn = rdoEnvironments(0).OpenConnection("", _
	                rdDriverNoPrompt, _
	                False, "DRIVER={Microsoft Access Driver (*.mdb)};" & _
	                "dsn=acc2;UID=admin;PWD=;")
	
	        'Change this so that it points to a valid GUID in your replicated
	        'database.
	        strguid = "{guid {9B83B027-E038-11D1-847E-00C04FB1784E}}"
	
	        'Comment this line and you will see the previously noted error.
	        SQLSetConnectOption rdoConn.hdbc, SQL_NOSCAN, SQL_NOSCAN_ON
	
	        Set rdoRes = rdoConn.OpenResultset("select *  from customers " & _
	                "where s_guid = " & strguid, rdOpenKeyset, rdConcurLock)
	
	        Debug.Print rdoRes!CompanyName
	
	        rdoRes.Close
	        rdoConn.Close
	        End Sub
	
	5. Add a new module to the form. Module1 is created by default.
	
	6. Add the following code to the General Declaration section of the Module:
	
	        Option Explicit
	        Public Const SQL_NOSCAN = 2
	        Public Const SQL_NOSCAN_OFF = 0
	        Public Const SQL_NOSCAN_ON = 1
	
	       Declare Sub SQLSetConnectOption Lib "odbc32.dll" (ByVal hdbc As Long,
	       ByVal p1 As Long,   ByVal p2 As Long)
	
	7. Run the application. The value of the Company Name field should be displayed
	  in the Immediate window.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q170117 HowTo: Use GUID Fields in Access from Visual C++
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbRDO kbVBp kbVBp500 kbVBp600 kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
