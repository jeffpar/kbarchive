---
layout: page
title: "Q193127: How to Set Up IAS (RADIUS Server) with ODBC Authentication"
permalink: /kb/193/Q193127/
---

## Q193127: How to Set Up IAS (RADIUS Server) with ODBC Authentication

{% raw %}

	Article: Q193127
	Product(s): Internet Information Server
	Version(s): 1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Authentication Services for Remote Access Service version 1.0 
	- Microsoft Commercial Internet System version 2.0 
	- Microsoft Internet Information Server 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up Microsoft Internet Authentication Server
	(also known as Microsoft Remote Authentication Dial-In User Service (RADIUS
	Server) for authentication to a third-party ODBC data source. The purpose of
	this article is to walk you through the process of setting up a sample ODBC
	source (in this case SQL Server is used) and Microsoft RADIUS Server.
	
	MORE INFORMATION
	================
	
	How to set up a SQL Server 6.5 database for RADIUS authentication:
	
	1. Install SQL Server 6.5 with Service Pack 4.
	
	2. For Language, select 850multi-lingual.
	
	3. For Sort-Order, select "Alternative Directory Order, Case-Insensitive".
	
	4. For Network Options, select Named Pipes.
	
	5. When SQL Server is installed, register the database and create two database
	  devices and one database with a name of your choice.
	
	6. Create a new table called "Network_Users"
	
	NOTE: it must be called "Network_Users".
	The ODBC table should be in the following format.
	
	  Table Name: Network_Users
	
	  For an Access ODBC Source:
	
	  Name          Type   Size
	
	  UserName      Text    50
	  Password      Text    64
	
	For a SQL ODBC source:
	
	  Name          Type     Size
	
	  UserName      varchar   50
	  Password      varchar   64
	
	To register and configure an ODBC authentication server and Database, perform the
	following:
	
	1. On the RADIUS Server, on the Authentication Providers tab, select ODBC
	  Authentication, and then click Configure.
	
	2. Enter a description of the authentication database in the Authentication
	  database description box, and then click Configure Database.
	
	3. On the Machine Data Source tab, verify that you have already configured a
	  data source.
	
	  If you have already configured a data source, locate the data-source name and
	  click OK.
	
	  -or-
	
	  If you are creating a new data source, click New and follow the "Create New
	  Data Source" Wizard. Select the ODBC table "Network_users_" that you set up
	  in the previous steps.
	
	The ODBC data source should be configured as a system Data Source Name (DSN).
	Users should now be able to log in through Radius via SQL Server.
	
	NOTE: This article should be used as a guideline.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbiisSearch kbAudDeveloper kbZNotKeyword6 kbiis400 kbMCISSearch kbZNotKeyword3 kbMCIS200 kbIASRAS kbIASSearch
	Version           : :1.0,2.0,4.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
