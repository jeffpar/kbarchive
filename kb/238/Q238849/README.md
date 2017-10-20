---
layout: page
title: "Q238849: PRB: Numbered Positioned Updates Against Oracle8i DB Server Fail"
permalink: /kb/238/Q238849/
---

## Q238849: PRB: Numbered Positioned Updates Against Oracle8i DB Server Fail

{% raw %}

	Article: Q238849
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.1,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202
	Operating System(s): 
	Keyword(s): kbATM kbDatabase kbDriver kbODBC kbOracle kbVBp600 kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupp
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Data Access Components version 2.1 
	- Microsoft ODBC for Oracle version 2.5, versions Build 2.573.2927, Build 2.573.3513, Build 2.573.3711, Build 2.573.4202 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to update or insert records into an Oracle8i server by using a
	NUMBER(x,y) datatype field, you receive the following error:
	
	  [Microsoft][ODBC Driver for Oracle][Oracle]ORA-01722: invalid number
	
	CAUSE
	=====
	
	The Microsoft Oracle ODBC Driver incorrectly parses for the decimal separator
	when connecting to an Oracle8i server.
	
	RESOLUTION
	==========
	
	The current versions of the Microsoft Oracle Open Database Connectivity (ODBC)
	Driver and OLE DB Providers were not supported in an Oracle8i environment. Use
	the Microsoft OLE DB Provider for Oracle to work around this INSERT problem;
	however, you may run into other incompatibilities. You may also hard code the
	INSERT and UPDATE statements and run them off the command object.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following Visual Basic code shows the problem. The Oracle server must be an
	8i server or the error does not occur. Place the code in the Visual Basic
	Form_Load method. Make sure to add the Microsoft ActiveX Data Objects 2.1
	Library on the Project, References menu.
	
	      Dim cn As New Connection, rs As New Recordset
	      
	      strTable = "ztest"
	      'Using the OLEDB Provider instead of the ODBC Driver
	      'allows you to get around this "invalid number" error, i.e.
	      'cn.ConnectionString = "Provider=MSDAORA.1;Password=yourpwd;User ID=yourUID;Data Source=myDSN;"
	      cn.ConnectionString = "Provider=MSDASQL.1;Password=yourpwd;User ID=yourUID;Data Source=myDSN;"
	      cn.Open
	      
	      On Error Resume Next
	      cn.Execute "drop table " & strTable
	      On Error GoTo 0
	      cn.Execute "Create Table " & strTable & "(FNUMB NUMBER(38, 4) NULL, PrimaryKey NUMBER(19, 0) PRIMARY KEY)"
	      rs.CursorLocation = adUseClient
	      rs.Open strTable, cn, adOpenKeyset, adLockOptimistic
	      rs.AddNew
	      rs.Fields("fnumb").Value = 22.22
	      rs.Fields("PrimaryKey").Value = 1
	      rs.Update                       '<-- error!  (invalid number)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATM kbDatabase kbDriver kbODBC kbOracle kbVBp600 kbVC kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbGrpDSODBC 
	Technology        : kbAudDeveloper kbODBCSearch kbMDACSearch kbMDAC210 kbODBCOracle25732927 kbODBCOracle25733513 kbODBCOracle25733711 kbODBCOracle25734202 kbODBCOracle250Search
	Version           : :2.1,Build 2.573.2927,Build 2.573.3513,Build 2.573.3711,Build 2.573.4202
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
