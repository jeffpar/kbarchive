---
layout: page
title: "Q306530: PRB: Cannot Use Boolean Parameter with Oracle"
permalink: /kb/306/Q306530/
---

## Q306530: PRB: Cannot Use Boolean Parameter with Oracle

{% raw %}

	Article: Q306530
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.0,2.1,2.5,2.6,2.7,Build 2.573.2927,Build 2.573.4403,Build 2.573.6526,Build 2.573.771
	Operating System(s): 
	Keyword(s): kbDatabase kbDriver kbOracle kbProvider kbGrpDSMDAC
	Last Modified: 28-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.4403, Build 2.573.6526, Build 2.573.7713.2 
	- Microsoft OLE DB Provider for Oracle, versions 2.0, 2.1, 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you try to use the BOOLEAN data type as an input or output parameter type
	with an Oracle stored procedure, you may receive the following error message:
	
	  Wrong number or types of arguments in call to 'SP_Name'
	
	where 'SP_Name' is the name of the store procedure or function.
	
	CAUSE
	=====
	
	You cannot use the BOOLEAN data type as an input or output parameter type with
	an Oracle stored procedure. BOOLEAN is a PL/SQL data type and cannot be passed
	into or out of the Microsoft ActiveX Data Objects (ADO) Parameters collection.
	
	RESOLUTION
	==========
	
	To work around this problem, use a data type that is supported (such as
	varchar). For a list of supported data types, refer to the online help for
	Microsoft ODBC Driver for Oracle and OLE DB Provider for Oracle, which are
	available with the Windows Platform Software Development Kit (SDK). You can
	download the Windows Platform SDK from the following Microsoft Web site:
	
	  http://msdn.microsoft.com/default.asp
	
	STATUS
	======
	
	This behavior is by design. The Oracle BOOLEAN data type is a PL/SQL data type
	and not an Oracle Database data type. The Microsoft Oracle Driver and Provider
	only support database data types.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create the Stored Procedures:
	
	To reproduce the problem, create a stored procedure with an output parameter of
	type BOOLEAN. You can also reproduce this problem if you use a stored procedure
	with an input parameter of type BOOLEAN. In addition, you can use the solution
	that follows to resolve this problem if the input parameter has a type BOOLEAN.
	
	1. Use the PL/SQL data type of BOOLEAN to create the first stored procedure as
	  follows:
	
	  CREATE OR REPLACE PROCEDURE TESTPARAM 	(            		              
	  	RET_Result OUT BOOLEAN		              
	  	)               
	  AS               
	  BEGIN               
	  	RET_Result := True;               
	  END; 
	
	2. Use a varchar data type to create the second stored procedure as follows:
	
	  CREATE OR REPLACE PROCEDURE TESTPARAM1 	(            		              
	  	RET_Result OUT VARCHAR		              
	  	)               
	  AS               
	  BEGIN               
	  	RET_Result := 'True';               
	  END; 
	
	Create the Visual Basic Application:
	
	1. Create a new Standard EXE project in Visual Basic. Form1 is created by
	  default.
	
	2. From the Projects menu, click References, and then select the Microsoft
	  ActiveX Data Objects 2.x check box.
	
	3. Add two command buttons to Form1.
	
	4. Open the code window that is associated with Form1, and paste the following
	  code in the code window:
	
	  Private Sub Command1_Click()
	     Dim Cn As ADODB.Connection
	     Dim Cmd As ADODB.Command
	     Dim strConnect As String
	
	     'Change the connection string to match your Oracle server name
	     'and logon credentials.
	     strConnect = "Provider=MSDAORA;Data Source=ORACLE816;User ID=User;Password=Password"
	     Set Cn = New ADODB.Connection
	     Cn.Open strConnect
	     Set Cmd = New ADODB.Command
	     With Cmd
	        .ActiveConnection = Cn
	        .CommandText = "TestParam"
	        .CommandType = adCmdStoredProc
	        .Parameters.Append .CreateParameter("RET_Result", adBoolean, adParamOutput, 1, 0)
	        .Execute
	        Debug.Print .Parameters.Item(0)
	     End With
	  End Sub
	
	  Private Sub Command2_Click()
	     Dim Cn As ADODB.Connection
	     Dim Cmd As ADODB.Command
	     Dim strConnect As String
	     
	     'Change the connection string to match your Oracle server name
	     'and logon credentials.
	     strConnect = "Provider=MSDAORA;Data Source=ORACLE816;User ID=User;Password=Password"
	     Set Cn = New ADODB.Connection
	     Cn.Open strConnect
	     Set Cmd = New ADODB.Command
	     With Cmd
	        .ActiveConnection = Cn
	        .CommandText = "TestParam1"
	        .CommandType = adCmdStoredProc
	        .Parameters.Append .CreateParameter("RET_Result", adVarChar, adParamOutput, 1, 0)
	        .Execute
	        Debug.Print .Parameters.Item(0)
	     End With
	  End Sub
	
	5. Ensure that you change the arguments of the above connection strings so that
	  they point to your Oracle database.
	
	6. Run the code, and click Command1. You receive the above-mentioned error
	  message.
	
	7. Run the application a second time, and then click Command2. This returns the
	  value of True to the Immediate window.
	
	Additional query words: Logical Boolean Bolean scaler
	
	======================================================================
	Keywords          : kbDatabase kbDriver kbOracle kbProvider kbGrpDSMDAC 
	Technology        : kbAudDeveloper kbODBCSearch kbOLEDBSearch kbODBCOracle25732927 kbODBCOracle25734403 kbODBCOracle25736526 kbOLEDBProvOracle200 kbOLEDBProvOracle210 kbOLEDBProvOracle250 kbOLEDBProvOracle260 kbOLEDBProvSearch kbODBCOracle257377132 kbODBCOracle250Search
	Version           : :2.0,2.1,2.5,2.6,2.7,Build 2.573.2927,Build 2.573.4403,Build 2.573.6526,Build 2.573.7713.2
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
