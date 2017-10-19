---
layout: page
title: "Q221659: FIX: SQL Upsizing Wizard Fails to Create PK Indexes"
permalink: /kb/221/Q221659/
---

## Q221659: FIX: SQL Upsizing Wizard Fails to Create PK Indexes

	Article: Q221659
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbDSupport k
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upsizing a database that had primary key indexes in two tables with the
	same field and or tag name, the following error occurs:
	
	  Connectivity error: [Microsoft][ODBC SQL Server Driver][SQL Server]There is
	  already an object named 'f1' in the database.
	
	The second Primary Key index "F1" could not be created.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug has been fixed in Visual Studio 6.0 Service Pack 3.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following code in a program file:
	
	     #DEFINE DBCNAME 	'testdb'
	     #DEFINE TABNAME 	'testtab'
	     #DEFINE TABCOUNT   	2
	
	     CLEAR
	     CLOSE DATABASES ALL
	     DELETE FILE testdb.DBC
	     DELETE FILE testdb.dc?
	
	     CREATE DATABASE DBCNAME
	
	     FOR lni = 1 TO TABCOUNT
	  	DELETE FILE (TABNAME+ALLTRIM(STR(lni)))+'.dbf'
	  	DELETE FILE (TABNAME+ALLTRIM(STR(lni)))+'.cdx'
	  	CREATE TABLE (TABNAME+ALLTRIM(STR(lni))) (F1 C(10) NOT NULL ;
	  		PRIMARY KEY, F2 C(10) NOT NULL)
	     ENDFOR
	
	     ALTER TABLE (TABNAME+ALLTRIM(STR(lni-2))) ADD FOREIGN KEY TAG ;
	  	F1 REFERENCES (TABNAME+ALLTRIM(STR(lni-1))) TAG F1
	
	2. Run the SQL Server Upsizing Wizard. Select the database you just created and
	  then press the Next button.
	
	3. In the Upsizing Wizard step 2, select an ODBC datasource to a SQL server to
	  which you can upsize and then log on to the server.
	
	4. Select both tables in the Upsizing Wizard step 3.
	
	5. In Upsizing Wizard, select Finish and then select Finish again.
	
	6. When upsizing is complete, a project appears. To see the error listed at the
	  beginning of this article, preview the report "rpterrs" (this report may be
	  named rpterrs1) in the project.
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbvfp600 kbvfp600bug KbDBFDBC kbVS600sp3fix kbGrpDSFox kbDSupport kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP600
	Version           : WINDOWS:2.5,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
