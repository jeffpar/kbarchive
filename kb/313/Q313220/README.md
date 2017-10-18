---
layout: page
title: "Q313220: PRB: Unexpected Connections to SQL Server with JDBC"
permalink: kb/313/Q313220/
---

## Q313220: PRB: Unexpected Connections to SQL Server with JDBC

	Article: Q313220
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 
	Operating System(s): 
	Keyword(s): kbJDBC kbDSupport kbSQLServ2000 kbSQLServSearch kbAudDeveloper kbSystemData
	Last Modified: 05-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SQL Server 2000 Driver for JDBC 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use multiple JDBC statements on a single connection, you may see
	multiple connections implicitly created by the Microsoft SQL Server 2000 Driver
	for JDBC.
	
	CAUSE
	=====
	
	If you open your database connection with the SelectMethod property set to
	Direct (the default setting), only one statement at a time can be active on the
	connection. When you create a second statement, the driver implicitly opens a
	new connection to handle the new result set.
	
	RESOLUTION
	==========
	
	The following two methods prevent implicit connections:
	
	- Close all open statements that are no longer needed.
	
	- Set the SelectMethod property to Cursor in your connection string.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	The following code demonstrates a scenario where the driver creates an implicit
	connection:
	
	  Class.forName("com.microsoft.jdbc.sqlserver.SQLServerDriver" );
	  Connection conn = DriverManager.getConnection("jdbc:microsoft:sqlserver://myServer:1433;databasename=pubs;SelectMethod=direct","myUser","myPassword");
	  			
	  Statement stmt1 = conn.createStatement();
	  stmt1.execute("INSERT INTO myTable1 (col1) VALUES (1)");
	  //stmt1.close();  //Uncomment this line to prevent the implicit connection.
	  			
	  Statement stmt2 = conn.createStatement();
	  stmt2.execute("INSERT INTO myTable2 (col1) VALUES (2)");
	  //stmt2.close(); //Good practice to clean up after each statement.
	  			
	  conn.close();
	
	An INSERT statement is used in the example, but the contents of the SQL statement
	that is used is not important. If you use a tool such as SQL Profiler to observe
	the connections that are made to the SQL Server, you notice that as soon as the
	second statement is created, the implicit connection is made.
	
	REFERENCES
	==========
	
	For complete details on the SelectMethod property, see the documentation for the
	Microsoft SQL Server 2000 Driver for JDBC.
	
	Additional query words: extra excessive
	
	======================================================================
	Keywords          : kbJDBC kbDSupport kbSQLServ2000 kbSQLServSearch kbAudDeveloper kbSystemData 
	Technology        : kbAudDeveloper kbSQLServ2000Search kbSQLServJDBC
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
