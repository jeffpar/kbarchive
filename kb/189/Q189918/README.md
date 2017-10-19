---
layout: page
title: "Q189918: HOWTO: Administer SQL Server Users from Visual FoxPro"
permalink: /kb/189/Q189918/
---

## Q189918: HOWTO: Administer SQL Server Users from Visual FoxPro

	Article: Q189918
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbMDAC250 kbSQLProg
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Using stored procedures on a SQL Server and the Visual FoxPro SQLEXEC()
	function, it is possible to administer database users and groups from within a
	Visual FoxPro program. The following sample code demonstrates how to accomplish
	this.
	
	MORE INFORMATION
	================
	
	The sample code assumes that an ODBC datasource has been created to connect to
	the master database. The datasource should connect to the database that contains
	the user you wish to work with. So, if you want to administrate a user in the
	"pubs" database, change the ODBC connection so that it connects to the "pubs"
	database.
	
	If users are being dropped from a database other than master, the program needs
	to explicitly call the necessary stored procedures from the master database:
	"master.dbo.sp_adduser." This convention is used in the sample code for greater
	clarity, though it is not needed since the master database is being used in the
	sample code.
	
	The program user needs to have administrator privileges to perform these
	actions.
	
	     *-- Code begins here
	     *-- Change the datasource, user name and password as appropriate.
	     gnConnect = SQLCONNECT("moonbase", "sa", "")
	     IF gnConnect <= 0
	         =MESSAGEBOX("Could not establish a database connection.", ;
	           0, "Connection Error")
	         RETURN
	     ENDIF
	
	     *-- Add user id "mike" if is not already exist in the master database.
	     gnLogin = SQLEXEC(gnConnect, 'exec master.dbo.sp_addlogin "mike", ""')
	     IF gnLogin > 0
	        WAIT WINDOW "User Login added"
	     ELSE
	        WAIT WINDOW "User Login already exist"
	     ENDIF
	
	     *-- Add a user "mike" and put it in the "public" group.
	     gnAddUser = SQLEXEC(gnConnect, 'exec master.dbo.sp_adduser "mike", ;
	       "mike", "public"')
	     IF gnAddUser > 0
	        WAIT WINDOW "User was successfully added."
	     ELSE
	        WAIT WINDOW "Adding user failed."
	     ENDIF
	
	     *-- Add a test group
	     gnAddGroup = SQLEXEC(gnConnect, 'exec master.dbo.sp_addgroup "test"')
	     IF gnAddGroup > 0
	        WAIT WINDOW "Group was successfully added."
	     ELSE
	        WAIT WINDOW "Adding group failed."
	     ENDIF
	
	     IF gnAddUser > 0 AND gnAddGroup > 0
	        *-- Add the user to the test group
	        gnAddUserGroup = SQLEXEC(gnConnect, ;
	            'exec master.dbo.sp_changegroup "test", "mike"')
	        IF gnAddUserGroup > 0
	           WAIT WINDOW "User was successfully added to group."
	        ENDIF
	     ENDIF
	
	     *-- Now drop the user.
	     IF gnAddUser > 0
	        gnDropUser = SQLEXEC(gnConnect, 'exec master.dbo.sp_dropuser "mike"')
	        IF gnDropUser > 0
	           WAIT WINDOW "User was successfully dropped."
	        ENDIF
	     ENDIF
	
	     *-- And drop the group
	     IF gnAddGroup > 0
	        gnDropGroup = SQLEXEC(gnConnect, ;
	            'exec master.dbo.sp_dropgroup "test"')
	     ENDIF
	     IF gnDropGroup > 0
	        WAIT WINDOW "Group was successfully dropped."
	     ENDIF
	     SQLDISCONNECT(gnConnect)
	     *--Code ends here
	
	REFERENCES
	==========
	
	Transact-SQL Reference Help; search on: sp_adduser, sp_dropuser, sp_addgroup,
	sp_dropgroup
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Mike
	Stewart, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSQL kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbMDAC250 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
