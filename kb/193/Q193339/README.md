---
layout: page
title: "Q193339: PRB: Unexpected Errors Using OLE DB Provider for SQL Server"
permalink: /kb/193/Q193339/
---

## Q193339: PRB: Unexpected Errors Using OLE DB Provider for SQL Server

{% raw %}

	Article: Q193339
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.5,2.6,3.6,6.0,7.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbOLEDB kbSDKDataAc kbSQLServ kbVBp kbVBp600 kbGrpDSVBDB kbGrpDSMDAC
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 3.6 
	- Microsoft OLE DB Provider for SQL Server, version 7.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6, 2.7 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual Studio 6.0 and the Data Access 2.0 Software Development Kit (SDK) both
	install a version of the SQL Server ODBC Driver (and OLE DB Provider) that is
	more current than the file found in the latest SQL Server Service Pack.
	Additionally, neither setup invokes the Instcat.sql script that is needed to
	finish configuration of the SQL Server driver/provider. This creates unexpected
	errors in various products at different times.
	
	For example, using the Visual Basic 6.0 Data Environment for connecting to SQL
	Server with the OLE DB Provider may cause an error. When you drag a table from
	the data view to the design window of a command, the following error occurs:
	
	  Query Designer encountered a MS Design Tools error:
	  Unspecified error.
	
	When you click OK, you see another error:
	
	  Method '~' of object '~' failed"
	
	Click OK again and repeat the operation. This time the operation is successful.
	
	CAUSE
	=====
	
	When a new version of the SQL Server ODBC Driver is installed by a SQL Server
	Service Pack (or by SQL Server), the Instcat.sql executes and helps configure
	the driver for operation. The SQL Server OLE DB Provider has the same dependency
	upon the execution of the Instcat.sql as the SQL Server ODBC Driver. Visual
	Basic 6.0, when installing either driver or provider, does not execute the
	Instcat.sql file, which then causes the preceding errors.
	
	The latest SQL Server Service Pack is Service Pack 4. However, the version of the
	SQL Server ODBC Driver (3.60.0319) shipped with Visual Studio 6.0 and the Data
	Access Software Development Kit (SDK) 2.0 is newer than what is found in SQL
	Server 6.5 Service Pack 4.
	
	RESOLUTION
	==========
	
	To work around this problem, run the Instcat.sql file from your SQL Server.
	Instcat.sql is installed but not executed by Visual Studio 6.0 and the Data
	Access SDK 2.0. You may have more than one Instcat.sql file on your computer in
	different sub-directories. Make sure that you execute the file dated 6/5/98 or
	later.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you are uncertain whether the latest Instcat.sql has been executed with your
	SQL Server, you can execute the sp_server_info system stored procedure with one
	parameter = 500. From ISQL run the following line in a new query:
	
	  sp_server_info 500
	
	If the latest Instcat.sql dated 6/5/98 has been run, you should see the following
	information display:
	
	  attribute_id     attribute_name     attribute_value
	  ---------------------------------------------------
	
	  500              SYS_SPROC_VERSION  7.00.481
	
	If 6.50.193 is listed in the attribute_value column, the latest file has not been
	executed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start new Standard .exe project in Visual Basic 6.0 and add a
	  DataEnvironment.
	
	2. Add a connection and select the Microsoft OLE DB Provider for SQL Server.
	
	3. Select or enter the appropriate values needed to make a connection such as
	  server name, user name, password and database name. Select the Pubs database
	  to test your connection.
	
	4. Add a Command Object and click the General tab. Select SQL statement and then
	  click the SQL Builder... button.
	
	5. Expand the Tables node in the Data View window.
	
	6. Drag one of the tables into the Command design window. The errors occur.
	
	7. Repeat step 6, and this time the errors do not occur.
	
	8. Stop your program.
	
	9. Start your Microsoft SQL Enterprise Manager and run the Instcat.sql file from
	  ISQL. During the execution of this file, you may see different error messages
	  display. You can ignore these messages.
	
	10. Run RECONFIGURE in a new query from ISQL. This is necessary to update your
	  server.
	
	11. Now, repeat steps 1 - 6. The errors do not occur.
	
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q137636 INF: Relationship of the ODBC Driver to INSTCAT.SQL
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbOLEDB kbSDKDataAc kbSQLServ kbVBp kbVBp600 kbGrpDSVBDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 kbmdac270 kbado270 
	Technology        : kbVBSearch kbSQLServSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB600Search kbODBCSearch kbVB600 kbOLEDBSearch kbMDACSearch kbMDAC250 kbMDAC260 kbODBCSQLServ360 kbOLEDBProvSQLServ700 kbOLEDBProvSearch kbMDAC270
	Version           : :2.5,2.6,3.6,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
