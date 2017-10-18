---
layout: page
title: "Q186383: HOWTO: Use CDao for Connections to a Secure Attached Table"
permalink: kb/186/Q186383/
---

## Q186383: HOWTO: Use CDao for Connections to a Secure Attached Table

	Article: Q186383
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 2.65
	Operating System(s): 
	Keyword(s): kbAccess kbDatabase kbODBC kbGrpDSVCDB kbDSupport
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for SQL Server, version 2.65 
	- The DAO SDK 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the technique required for the MFC CDao classes to access
	Microsoft SQL Server data that is password protected through an attached table
	in Microsoft Access without getting the ODBC password dialog box. The article
	describes how to programmatically specify the ODBC connection string to the
	attached table. You must create a CDaoTableDef, set the ODBC connect string, and
	refresh the TableDef.
	
	The code changed modifications that you need are:
	
	     void CASAuthView::OnInitialUpdate()
	     {
	        static CDaoDatabase mdb;
	
	        m_pSet = &GetDocument()->m_aSAuthSet;  // Original Code
	        mdb.Open(_T("C:\\Temp\\daoSqlTest.mdb"));
	        m_pSet->m_pDatabase = &mdb;
	        static CDaoTableDef td(&mdb);
	        td.Open("[dbo_authors]");
	        td.SetConnect("ODBC;database=pubs;
	                      uid=billy;pwd=Reuben;dsn=_pubsSecure");
	        td.RefreshLink();
	        CDaoRecordView::OnInitialUpdate();  // Original Code
	     }
	
	MORE INFORMATION
	================
	
	To reproduce the problem and create a solution, do the following:
	
	From SQL Server Enterprise Manager select "manage logins," and add user "billy"
	with password "Reuben". Select Databases/Pubs/Groups-users/Public, right-click
	to select Add user. Add billy (with login Billy), refresh the public icon,
	right-click billy, and then select permissions. Select the authors table, select
	each field (you will get a green check mark indicating that you have been
	granted permission), and then click Set.
	
	Create a new DSN to the pubs database. From the ODBC administrator, select Add.
	Select the SQL Server driver. Call the new DSN _pubsSecure. On the question "How
	should SQL Server verify the authenticity of the login ID?," change the button
	to "With SQL Server authentication using a login ID and password entered by the
	user." Change the Login ID to billy and specify Reubin for the password. Leave
	the rest of the defaults.
	
	Create an Access database. Select the Table tab, click New, and then click link
	table. In the "Files of type" list box, select "ODBC Databases()". Select the
	Machine Data Source tab, and then select "_pubsSecure". You will be prompted for
	the password. Select the "dbo.authors" table. Save the database as
	C:\Temp\daoSqlTest.mdb. Close Access, restart access, and then open
	daoSqlTest.mdb. You will be prompted for a password. This verifies that your
	security is set up correctly.
	
	Create a MFC/CDao AppWizard Database project. Call it ASAuth (for Access SQL
	Authorize), select daoSqlTest.mdb, and then select the authors table. Build and
	run the application. You will get the ODBC "SQL Server Login" dialog box, which
	requests the password. Enter the password and the program will open the
	Recordset. This verifies your previous steps.
	
	The current OnInitialUpdate code is as follows:
	
	     CASAuthView::OnInitialUpdate()
	        {
	           m_pSet = &GetDocument()->m_aSAuthSet;
	           CDaoRecordView::OnInitialUpdate();
	        }
	
	Change it to:
	
	     void CASAuthView::OnInitialUpdate()
	     {
	        static CDaoDatabase mdb;
	
	        m_pSet = &GetDocument()->m_aSAuthSet;        // Original Code.
	        mdb.Open(_T("C:\\Temp\\daoSqlTest.mdb"));
	        m_pSet->m_pDatabase = &mdb;
	        static CDaoTableDef td(&mdb);
	        td.Open("[dbo_authors]");
	
	        td.SetConnect
	           ("ODBC;database=pubs;uid=billy;pwd=Reuben;dsn=_pubsSecure");
	        td.RefreshLink();
	        CDaoRecordView::OnInitialUpdate();           // Original Code.
	     }
	
	Your application will now open the table without prompting you for the password.
	
	Additional query words: kbDSupport kbdse kbDAO kbDatabase kbAccess
	
	======================================================================
	Keywords          : kbAccess kbDatabase kbODBC kbGrpDSVCDB kbDSupport 
	Technology        : kbVCsearch kbSQLServSearch kbAudDeveloper kbDAOsearch kbSDKDAOSearch kbODBCSearch kbSDKSearch kbODBCSQLServ265 kbClassWizard
	Version           : :2.65
	Issue type        : kbhowto
	
	=============================================================================
	
