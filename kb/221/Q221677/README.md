---
layout: page
title: "Q221677: FIX: SQL Upsizing Wizard Problem if Upsized View Has '==' Filter"
permalink: kb/221/Q221677/
---

## Q221677: FIX: SQL Upsizing Wizard Problem if Upsized View Has '==' Filter

	Article: Q221677
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSuppo
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You are using the SQL Server Upsizing Wizard to upsize a Visual FoxPro database.
	The database you are upsizing contains a local view that uses the '==' operator
	as a filter comparison criteria. When the view is upsized, the filter criteria
	remains unchanged. This results in a remote view with an invalid filter
	condition because the '==' operator has no meaning to SQL Server. The Criteria
	drop-down box in the View Designer will be blank for the condition that
	contained the '==' operator in the local view.
	
	RESOLUTION
	==========
	
	You can make the remote view functional again by modifying the remote view,
	clicking the Filter tab within the View Designer, and selecting the '=' operator
	from the Criteria drop-down box for the filter condition where the criteria is
	blank.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	  Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	  Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a new directory and set it as the default directory within Visual
	  FoxPro.
	
	2. Create the database, table, and local view by running the following code from
	  a program (.PRG) file:
	
	  CLOSE DATA ALL
	  CREATE DATABASE 'TESTDBC.DBC'
	
	  CREATE TABLE 'USERTAB.DBF' NAME 'USERTAB' (USERKEY I NOT NULL, ;
	  	USERID C(10) NOT NULL)
	  SET COLLATE TO 'MACHINE'
	  INDEX ON USERID TAG USERID
	  ALTER TABLE 'USERTAB' ADD PRIMARY KEY USERKEY TAG USERKEY
	
	  CREATE SQL VIEW "V_USERTAB_USERID" ;
	  	AS SELECT USERTAB.USERID, USERTAB.USERKEY ;
	  	FROM TESTDBC!USERTAB WHERE USERTAB.USERID == ?USERTAB_userid
	
	  DBSETPROP('V_USERTAB_USERID', 'View', 'WhereType', 3)
	  DBSETPROP('V_USERTAB_USERID', 'View', 'Tables', 'TESTDBC!USERTAB')
	  DBSETPROP('V_USERTAB_USERID.userid', 'Field', 'KeyField', .T.)
	  DBSETPROP('V_USERTAB_USERID.userid', 'Field', 'Updateable', .T.)
	  DBSETPROP('V_USERTAB_USERID.userid', 'Field', 'UpdateName', ;
	  	'TESTDBC!USERTAB.userid')
	  DBSETPROP('V_USERTAB_USERID.userid', 'Field', 'DataType', "C(10)")
	  DBSETPROP('V_USERTAB_USERID.userkey', 'Field', 'KeyField', .F.)
	  DBSETPROP('V_USERTAB_USERID.userkey', 'Field', 'Updateable', .T.)
	  DBSETPROP('V_USERTAB_USERID.userkey', 'Field', 'UpdateName', ;
	  	'TESTDBC!USERTAB.userkey')
	  DBSETPROP('V_USERTAB_USERID.userkey', 'Field', 'DataType', "I")
	
	3. Run the SQL Server Upsizing Wizard.
	
	4. In step 1, select Testdbc.dbc, and then click Next.
	
	5. In step 2, select a SQL Server datasource suitable to use for an upsizing
	  destination, and then click Next.
	
	6. When prompted, log into the SQL Server datasource.
	
	7. In step 3, add the Usertab table to the Selected tables list, and then click
	  Finish twice.
	
	8. Click OK when the Upsize complete messagebox appears.
	
	9. Close the project.
	
	10. Put the following in the Command Window:
	
	  SET DATABASE TO Testdbc
	  MODIFY VIEW V_USERTAB_USERID
	
	11. Log in, and then click the View Designer Filter tab.
	
	Results:
	
	1. The Criteria column is empty. No '==' or '=' operator appears.
	
	2. If you select View SQL within the View Designer, you will see:
	
	  SELECT B01user.userid, B01user.userkey;
	   FROM b01user B01user;
	   WHERE B01user.userid == ?b01user_userid
	
	3. The '==' is not a valid operator for a remote view to SQL Server, but still
	  appears in SQL.
	
	4. If you try to run the view and type in a parameter such as "XXX" you get an
	  error as follows:
	
	  Connectivity error: [Microsoft][ODBC SQL Server Driver][SQL Server]Line 1:
	  Incorrect syntax near '='.
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
