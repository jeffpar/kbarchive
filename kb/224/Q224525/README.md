---
layout: page
title: "Q224525: PRB: SQL Server Upsizing Wizard Padding Char and VarChar Fields"
permalink: /kb/224/Q224525/
---

## Q224525: PRB: SQL Server Upsizing Wizard Padding Char and VarChar Fields

	Article: Q224525
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbwizard kbDatabase kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbM
	Last Modified: 27-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After upsizing a database, both the fields mapped to Char and those mapped to
	VarChar are padded with blanks to the end of the field lengths.
	
	CAUSE
	=====
	
	By default, in the SQL Server ODBC settings, the option "Use ANSI nulls,
	paddings, and warnings" is turned on. This causes all Char and VarChar fields in
	any table created with these defaults to pad the fields with spaces.
	
	In fields of type Char, if the field is defined to allow nulls, it will act
	similar to a field of type VarChar and truncate any trailing spaces.
	
	RESOLUTION
	==========
	
	Before upsizing a database, if you do not want Char fields that allow nulls and
	VarChar fields to be padded with spaces, turn off the option "Use ANSI nulls,
	paddings, and warnings" in the data source definition used to upsize the
	database. This can be done through the ODBC Data Sources or 32-bit ODBC Control
	Panel.
	
	Please run the setup code for Sample 2 using a datasource that has the "Use ANSI
	nulls, paddings, and warnings" deselected (turned off):
	
	  *****************Sample2 Setup Routine*******************
	  CREATE DATABASE upszpadtest2
	  SET DATABASE TO upszpadtest2
	  CREATE TABLE test2 (cFld1 c(25) NULL,cFld2 c(200) NULL, ;
	  cFld3 c(50) NOT NULL, cFld4 c(200) NOT NULL)
	  INSERT INTO test2 VALUES ('1','First Record Allow Null', ;
	  'First Not Null','First Record Not Null')
	  INSERT INTO test2 VALUES ('2','Second Record Allow Null', ;
	  'Second Not Null','Second Record Not Null')
	  INSERT INTO test2 VALUES ('3','Third Record Allow Null', ;
	  'Third Not Null','Third Record Not Null')
	  DO HOME() + 'Wizards\WzUpsize.app'
	  ***************End Sample2 Setup Routine*****************
	
	Follow the steps of the Upsizing Wizard to upsize all fields in the table
	"Test1." It is recommended that you have a database created on your SQL Server
	to contain this table once it is upsized. Please specify this database in step
	5, "Select Target Database."
	
	In step 4, "Map Field Datatypes," map cFld1 to Char, cFld2 to VarChar, and cFld3
	and cFld4 to Char.
	
	Complete the upsize, upsizing both structure and data.
	
	Once the upsize is complete, run the following code from a Visual FoxPro program
	file:
	
	  ******************Sample2 Results Routine***********************
	  MyConn=SQLCONNECT('LocalServer','sa','')
	  IF MyConn = -1 then
	      MESSAGEBOX("The connection was not successful." + CHR(13) + CHR(10) ;
	          + "Please check the datasource name for accuracy")
	      AERROR(Myerr)
	      DISPLAY MEMORY LIKE Myerr
	      RETURN
	  ENDIF
	  MySQL="Select DATALENGTH(TEST2.cFLD1) AS DataLen_cFLD1, " + ;
	      "COL_LENGTH('TEST2','cFld1') as ColLen_cFld1, " + ;
	      "TEST2.cFld1, DATALENGTH(TEST2.cFLD2) as DataLen_cFld2, " + ;
	      "COL_LENGTH('TEST2','cFld2') as ColLen_cFld2, " + ;
	      "Test2.cFld2, DATALENGTH(TEST2.cFLD3) AS DataLen_cFld3, " + ;
	      "COL_LENGTH('TEST2','cFld3') as ColLen_cFld3, " + ;
	      "Test2.cFld3, DATALENGTH(TEST2.cFLD4) AS DataLen_cFld4, " + ;
	      "COL_LENGTH('TEST2','cFld4') as ColLen_cFld4, " + ;
	      "Test2.cFld4 from Test2"
	  iSuccess=SQLExec(MyConn, MySQL, 'MyResults2')
	  IF iSuccess = -1 THEN
	      MESSAGEBOX("A connection level error happened.  " + ;
	          "Please run the program again")
	      AERROR(MyErr)
	      DISPLAY MEMORY LIKE MyErr
	      SQLDISCONNECT(MyConn)
	      RETURN
	  ENDIF
	  SELECT MyResults2
	  BROWSE NOWAIT
	  SQLDISCONNECT(MyConn)
	  ******************End Sample2 Results Routine***********************
	
	After this has run, look at the browse window and note that the Datalength and
	Col_Length are different in every case except cFld3 and cFLD4, which are Char
	fields not allowing nulls.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Run the following code to create a sample database and start the SQL Server
	Upsizing Wizard:
	
	  *****************Sample Setup Routine*******************
	  CREATE DATABASE upszpadtest
	  SET DATABASE TO upszpadtest
	  CREATE TABLE test1 (cFld1 c(25) NULL,cFld2 c(200) NULL, ;
	  cFld3 c(50) NOT NULL, cFld4 c(200) NOT NULL)
	  INSERT INTO test1 VALUES ('1','First Record Allow Null', ;
	  'First Not Null','First Record Not Null')
	  INSERT INTO test1 VALUES ('2','Second Record Allow Null', ;
	  'Second Not Null','Second Record Not Null')
	  INSERT INTO test1 VALUES ('3','Third Record Allow Null', ;
	  'Third Not Null','Third Record Not Null')
	  DO HOME() + 'Wizards\WzUpsize.app'
	  ***************End Sample Setup Routine*****************
	
	Follow the steps of the Upsizing Wizard to upsize all fields in the table
	"Test1." It is recommended that you have a database created on your SQL Server
	to contain this table once it is upsized. Please specify this database in step
	5, "Select Target Database."
	
	Please ensure that the datasource you are using has the option "Use ANSI nulls,
	paddings, and warnings" selected. This will show the padding of the fields.
	
	In step 4, "Map Field Datatypes," map cFld1 to Char, cFld2 to VarChar, and cFld3
	and cFld4 to Char.
	
	Complete the upsize, upsizing both structure and data.
	
	Once the upsize is complete, run the following code from a Visual FoxPro program
	file:
	
	  ******************Sample Results Routine***********************
	  MyConn=SQLCONNECT('LocalServer','sa','')
	  IF MyConn = -1 then
	      MESSAGEBOX("The connection was not successful." + CHR(13) + CHR(10) ;
	          + "Please check the datasource name for accuracy")
	      AERROR(Myerr)
	      DISPLAY MEMORY LIKE Myerr
	      RETURN
	  ENDIF
	  MySQL="Select DATALENGTH(TEST1.cFLD1) AS DataLen_cFLD1, " + ;
	      "COL_LENGTH('TEST1','cFld1') as ColLen_cFld1, " + ;
	      "TEST1.cFld1, DATALENGTH(TEST1.cFLD2) as DataLen_cFld2, " + ;
	      "COL_LENGTH('TEST1','cFld2') as ColLen_cFld2, " + ;
	      "Test1.cFld2, DATALENGTH(TEST1.cFLD3) AS DataLen_cFld3, " + ;
	      "COL_LENGTH('TEST1','cFld3') as ColLen_cFld3, " + ;
	      "Test1.cFld3, DATALENGTH(TEST1.cFLD4) AS DataLen_cFld4, " + ;
	      "COL_LENGTH('TEST1','cFld4') as ColLen_cFld4, " + ;
	      "Test1.cFld4 from Test1"
	  iSuccess=SQLExec(MyConn, MySQL, 'MyResults')
	  IF iSuccess = -1 THEN
	      MESSAGEBOX("A connection level error happened.  " + ;
	          "Please run the program again")
	      AERROR(MyErr)
	      DISPLAY MEMORY LIKE MyErr
	      SQLDISCONNECT(MyConn)
	      RETURN
	  ENDIF
	  SELECT MyResults
	  BROWSE NOWAIT
	  SQLDISCONNECT(MyConn)
	  ******************End Sample Results Routine***********************
	
	After this has run, look at the Browse window and note that the Datalength and
	Col_Length are exactly the same.
	
	Please see the RESOLUTION section of this article for code that produces fields
	that do not pad.
	
	Additional query words: Pad Trailing Spaces Truncate kbDSE
	
	======================================================================
	Keywords          : kbwizard kbDatabase kbSQL kbvfp300b kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbMDAC250 kbSQLProg 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
