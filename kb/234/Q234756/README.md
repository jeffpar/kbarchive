---
layout: page
title: "Q234756: HOWTO: Pack a Table Through the Visual FoxPro ODBC Driver"
permalink: /kb/234/Q234756/
---

## Q234756: HOWTO: Pack a Table Through the Visual FoxPro ODBC Driver

{% raw %}

	Article: Q234756
	Product(s): Open Database Connectivity (ODBC)
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbSample kbDatabase kbvfp600 kbVS600sp3 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 03-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article demonstrates how to issue a PACK command against a Visual FoxPro
	table by using the Microsoft Visual FoxPro Open Database Connectivity (ODBC)
	Driver. Code to perform this action from Visual FoxPro and Microsoft Visual C++
	is included.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro, you can use the following code as a demonstration. Place the
	code in a program file and run it to create the database and table. The code
	creates a new directory on the C:\ drive named Q234756_TEST. You may want to
	delete that directory after your testing is complete.
	
	  LOCAL lcOldDeleted
	  lcOldDeleted = SET('DELETED')
	  SET DELETED OFF
	
	  MD C:\Q234756_TEST
	  CD C:\Q234756_TEST
	  CREATE DATABASE test
	  CREATE TABLE T1 (FLD1 C(10),FLD2 C(32),FLD3 T)
	  INSERT INTO T1 VALUES ('1','One',DATETIME())
	  INSERT INTO T1 VALUES ('2','Two',DATETIME())
	  INSERT INTO T1 VALUES ('3','Three',DATETIME())
	  INSERT INTO T1 VALUES ('4','Four',DATETIME())
	
	  DELETE FROM T1 WHERE FLD1 = '2'
	  DELETE FROM T1 WHERE FLD1 = '3'
	  BROW
	  CLOSE DATA ALL
	  SET DELETED &lcOldDeleted
	
	The following code is also to be used through Microsoft Visual FoxPro. Save it to
	a program (.prg) file and run it to pack table T1.dbf through ODBC.
	
	  **************Begin Sample Code****************
	  #DEFINE CR2 CHR(13) + CHR(13)
	  LOCAL lnConHand, lnSQLSuccess,lcOldDeleted
	  LOCAL ARRAY laSQLErr[1]
	
	  lcOldDeleted = SET('DELETED')
	  SET DELETED OFF
	
	  lnConHand = SQLSTRINGCONNECT("driver=microsoft visual foxpro driver;" + ;
	  	"sourcetype=dbc;" + ;
	  	"sourcedb=C:\Q234756_TEST\TEST.DBC;" + ;
	  	"backgroundfetch=no;" + ;
	  	"exclusive=yes")
	
	  *!* Verify connection was successful.
	  IF lnConHand =< 0
	  	AERROR(laSQLErr)
	  	MESSAGEBOX("Connection Failed:" + CR2 + laSQLErr[3])
	  	RETURN .F.
	  ENDIF
	
	  *!* Execute the PACK, where the table name is T1
	  lnSQLSuccess = SQLEXEC(lnConHand,"SET EXCLUSIVE ON;PACK T1")
	
	  *!* Verify command was successful.
	  IF lnSQLSuccess <= 0
	  	AERROR(laSQLErr)
	  	MESSAGEBOX("Pack Command Failed:" + CR2 + laSQLErr[3])
	  	SQLDISCONNECT(lnConHand)
	  	RETURN .F.
	  ENDIF
	
	  *!* Browse the table via ODBC, disconnect, display and clean-up
	  lnSQLSuccess = sqlexec(lnConHand,"SELECT * FROM T1","MyCursor")
	  SQLDISCONNECT(lnConHand)
	  BROWSE 
	  CLOSE DATA ALL
	  SET DELETED &lcOldDeleted
	  ***********************End Sample Code************************************
	
	Following is the Visual C++ code that packs the T1 table in the Visual FoxPro
	database created earlier:
	
	1. Open Visual C++. On the File menu, select New.
	
	2. Choose Win32 Console Application from the list, and name the project
	  "FoxPackTest" (without the quotation marks).
	
	3. Select Empty Project from the options on the next screen (the default), and
	  then click Finish.
	
	4. One the File menu, click to select New, and then choose C++ Source File. Name
	  the file "FoxPackTest" (without the quotation marks).
	
	5. Paste the following code into the Code window for FoxPackTest.cpp:
	
	  #include <afxdb.h>
	  #include <iostream.h>
	
	  void main()
	  {
	    try
	    {	  
	    CDatabase db;
	    db.OpenEx("driver=Microsoft Visual FoxPro Driver;sourcetype=dbc;sourcedb=C:\\Q234756_TEST\\test.dbc;exclusive=yes");
	    db.ExecuteSQL("set exclusive on;pack t1");
	    cout << "Table Packed!" <<endl;
	    db.Close();
	    }
	    catch(CDBException *E)
	    {
	     cout << E->m_strError <<endl;
	    }
	  }
	
	6. On the Project menu, select Settings, and change the Microsoft Foundation
	  Classes drop-down list on the General tab to Use MFC in a Shared DLL. Click
	  OK.
	
	7. Build the project into an .exe file by pressing the F7 key.
	
	8. Locate the FoxPackTest.exe on your hard drive and run it from a COMMAND (DOS)
	  window. When run, the .exe packs the t1 table located in the C:\Q234756_TEST
	  folder. If this is successful, a message appears reading "Table Packed!".
	
	Additional query words:
	
	======================================================================
	Keywords          : kbSample kbDatabase kbvfp600 kbVS600sp3 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP600828100
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
