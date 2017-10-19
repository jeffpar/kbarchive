---
layout: page
title: "Q155392: HOWTO: Creating a Connection to SQL Server Without a Datasource"
permalink: /kb/155/Q155392/
---

## Q155392: HOWTO: Creating a Connection to SQL Server Without a Datasource

	Article: Q155392
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp300 kbvfp300b kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating a connection to access remote data, you can create a connection
	that does not require an ODBC datasource. Because this method does not require
	an existing ODBC datasource, you do not have to be concerned with setting up the
	datasource in the ODBC administrator. This simplifies the task of application
	distribution.
	
	MORE INFORMATION
	================
	
	The following steps outline how to create a connection that does not require an
	ODBC datasource. The connection will be called CONNECT1, and it accesses a SQL
	Server backend with the following attributes:
	
	  Server Name = SQL1
	  Logon User ID = USER
	  Logon Password = password
	  DATABASE = pubs
	
	You can create the connection either programmatically or using the Connection
	Designer. Both of these methods will be addressed.
	
	Creating the Connection Programmatically
	----------------------------------------
	
	1. Open a database in which to store the connection.
	
	2. Enter the following command in the Command window:
	
	  
	
	        CREATE CONNECTION CONNECT1 CONNSTRING "DRIVER={SQL Server};
	           SERVER=SQL1;UID=USER;PWD=password;DATABASE=pubs"
	
	  NOTE: You should enter this command on one line.
	
	Creating the Connection Using the Connection Designer
	-----------------------------------------------------
	
	1. Open a database in which to store the connection.
	
	2. From the File menu, click New.
	
	3. Specify a new connection.
	
	4. In the Connection Designer, select the "Connection String" option button.
	
	5. Enter the following for the Connect String:
	
	  
	
	        DRIVER={SQL Server};SERVER=SQL1;UID=USER;PWD=password;DATABASE=pubs
	
	6. Close the Connection Designer, and save the connection as CONNECT1.
	
	To test the connection, enter the following in the Command window:
	
	  
	
	     ?SQLConnect('CONNECT1')
	
	A return value greater than zero indicates a successful connection.
	
	Additional query words: DSNLESS
	
	======================================================================
	Keywords          : kbvfp kbvfp300 kbvfp300b kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS:2.5,3.0,3.0b,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
