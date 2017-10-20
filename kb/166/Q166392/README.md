---
layout: page
title: "Q166392: HOWTO: Use &quot;DSN-Less&quot; ODBC Connections with RDO"
permalink: /kb/166/Q166392/
---

## Q166392: HOWTO: Use &quot;DSN-Less&quot; ODBC Connections with RDO

{% raw %}

	Article: Q166392
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbGrpDSVBDB
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With Microsoft Visual Basic versions listed above, you can specify your ODBC
	driver and server in your connect string when using RDO (Remote Data Objects)
	and DAO (Data Access Objects). This eliminates the need to set up a DSN (Data
	Source Name). This is called a "DSN-Less" ODBC connection because you do not
	need to set up a DSN in order to access your ODBC database server.
	
	To do this, you specify a "driver=" parameter in your connect property. The
	following three examples show how this is done with the SQL Server, Access, and
	Oracle ODBC drivers:
	
	     'Microsoft SQL Server ODBC Driver example
	      cnstr = "driver={SQL Server};server=myserver;" & _
	        "database=pubs;uid=sa;pwd="
	     cn.Connect = cnstr
	
	     'Microsoft Access ODBC Driver example (version 2.x)
	     cnstr = "Driver={Microsoft Access Driver (*.mdb)};" & _
	       "Dbq=c:\program files\devstudio\vb\biblio.mdb;" & _
	       "Uid=Admin; Pwd="
	     cn.Connect = cnstr
	
	     'Microsoft ODBC Driver for Oracle example
	     cnstr = "Driver={Microsoft ODBC Driver for Oracle};" & _
	      "Server=OracleServer.world; Uid=demo; Pwd=demo"
	     ' Note that 1.0 version of the Microsoft  Oracle driver used
	     ' "ConnectString" notation instead of "Server"
	
	NOTE: The driver name must be surrounded by curly brackets. For example:
	
	  "{SQL Server}"
	
	The following information is taken from Visual Basic Books Online:
	
	  The connect string contains a series of semi-colon-delimited arguments as
	  defined by the ODBC interface - including the ODBC driver itself. That is,
	  all ODBC drivers have specific argument requirements so you should consult
	  the documentation included with the driver for specific information. This
	  connect string is passed to the ODBC API SQLDriverConnect function along with
	  the hEnv for the associated rdoEnvironment object.
	
	MORE INFORMATION
	================
	
	If you do want to set up a DSN, you can use the following methods:
	
	- Manually with the ODBC Admin utility(Odbcad32.exe).
	
	- Through code with the RDO rdoRegisterDataSource method.
	
	- Through code with the DAO RegisterDatabase method.
	
	- Through code with the ODBC API SQLConfigDatasource API function.
	
	Sample Program
	--------------
	
	The following RDO example uses a "DSN-less" ODBC connection so you do not need to
	set up a DSN with the ODBC Admin utility beforehand.
	
	1. Start a new project in Visual Basic. Form1 is created by default.
	
	2. Add a CommandButton to Form1, Command1 by default.
	
	3. Paste the following code into the code window of Form1:
	
	        Private Sub Command1_Click()
	          Dim Cn As New rdoConnection           'creatable rdoConnection
	          Dim Qr As New rdoQuery                'creatable rdoQuery
	          Dim Rs As rdoResultset                'pointer to rdoResultset
	          Dim cnstr As String                   'hold connection info
	
	          cnstr = "driver={SQL Server};server=myserver;" & _
	            "database=pubs;uid=sa;pwd="
	          Cn.Connect = cnstr
	
	          Cn.CursorDriver = rdUseClientBatch
	          Cn.EstablishConnection Prompt:=rdDriverNoPrompt
	          Set Qr.ActiveConnection = Cn
	          Qr.SQL = "Select * From Authors"
	          Set Rs = Qr.OpenResultset(Type:=rdOpenKeyset, _
	            LockType:=rdConcurBatch)
	          Debug.Print Rs(0), Rs(1), Rs(2)
	        End Sub
	
	4. Note that you must change your DRIVER, SERVER, DATABASE, UID, and PWD
	  parameters in the Connect method. You also need to modify the SQL statement
	  contained in the Command1_Click event to match your own SQL data source.
	
	5. Start the program or press the F5 key.
	
	6. Click the Command1 button to create an rdoResultset and display the first row
	  of data in the debug window.
	
	REFERENCES
	==========
	
	In Visual Basic Books Online see:
	
	 Guide to Building Client Server Applications in Visual Basic (Enterprise)
	   Part 3: Data Access Options
	     Using Remote Data Objects and the Remote Data Control
	       Establishing an RDO Connection
	         Providing Connection Strings to RDO
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Jon
	Fowler, Microsoft Corporation
	
	
	Additional query words: kbVBp500 kbVBp600 kbdse kbDSupport kbVBp kbODBC KbRDO kbDriver kbDatabase kbSQL kbOracle
	
	======================================================================
	Keywords          : kbGrpDSVBDB 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVB500 kbVB600
	Version           : :5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
