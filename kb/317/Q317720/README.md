---
layout: page
title: "Q317720: FIX: GetFldState Indicates Record Is Appended After TRANSACTION"
permalink: kb/317/Q317720/
---

## Q317720: FIX: GetFldState Indicates Record Is Appended After TRANSACTION

	Article: Q317720
	Product(s): Microsoft FoxPro
	Version(s): 7.0
	Operating System(s): 
	Keyword(s): kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283
	Last Modified: 26-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you append records to a table and then use the GETFLDSTATE function, the
	result may indicate that an additional record has been appended to the table.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Visual FoxPro for
	Windows 7.0. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q316964 How to Obtain the Latest Visual FoxPro for Windows 7.0 Service Pack
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Visual FoxPro for
	Windows 7.0. This problem was first corrected in Visual FoxPro for Windows 7.0
	Service Pack 1.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce Behavior
	---------------------------
	
	1. Paste the following code in a program (.prg) file and then run the program:
	
	  #DEFINE DBCNAME 	'testdb'
	  #DEFINE TABNAME 	'testtab'
	
	  CD (ADDBS(JUSTPATH(SYS(16))))
	
	  CLEAR 
	  CLOSE ALL
	  DELETE FILE testdb.dbc
	  DELETE FILE testdb.dc?
	  DELETE FILE testtab.dbf
	
	  CREATE DATABASE DBCNAME
	  CREATE TABLE (TABNAME) (F1 I PRIMARY KEY, F2 C(8) , F3 C(10), F4 i, F5 i)
	  	
	  CLOSE DATABASES ALL 
	
	  DELETE FILE testdb1.dbc
	  DELETE FILE testdb1.dc?
	
	  CREATE DATABASE (DBCNAME+'1')
	
	  CREATE CONNECTION Conn1 ;
	  	CONNSTRING "Driver=Microsoft Visual FoxPro Driver;UID=;" + ;
	  	"PWD=;SourceDB="+ADDBS(JUSTPATH(SYS(16)))+"testdb.dbc;SourceType=DBC;" + ;
	  	"Exclusive=No;BackgroundFetch=Yes;Collate=Machine;Null=Yes;Deleted=Yes;"
	
	  CREATE SQL VIEW "RV_TESTTAB" ; 
	     REMOTE CONNECT "conn1" ; 
	     AS SELECT * FROM testtab Testtab WHERE Testtab.f1 = ?id
	
	  DBSETPROP('RV_TESTTAB', 'View', 'SendUpdates', .T.)
	  DBSETPROP('RV_TESTTAB', 'View', 'Tables', 'testtab')
	
	  *!* Field Level Properties for RV_TESTTAB
	  * Props for the RV_TESTTAB.f1 field.
	  DBSETPROP('RV_TESTTAB.f1', 'Field', 'KeyField', .T.)
	  DBSETPROP('RV_TESTTAB.f1', 'Field', 'Updatable', .T.)
	  DBSETPROP('RV_TESTTAB.f1', 'Field', 'UpdateName', 'testtab.f1')
	  DBSETPROP('RV_TESTTAB.f1', 'Field', 'DataType', "I")
	  * Props for the RV_TESTTAB.f2 field.
	  DBSETPROP('RV_TESTTAB.f2', 'Field', 'KeyField', .F.)
	  DBSETPROP('RV_TESTTAB.f2', 'Field', 'Updatable', .T.)
	  DBSETPROP('RV_TESTTAB.f2', 'Field', 'UpdateName', 'testtab.f2')
	  DBSETPROP('RV_TESTTAB.f2', 'Field', 'DataType', "C(8)")
	  * Props for the RV_TESTTAB.f3 field.
	  DBSETPROP('RV_TESTTAB.f3', 'Field', 'KeyField', .F.)
	  DBSETPROP('RV_TESTTAB.f3', 'Field', 'Updatable', .T.)
	  DBSETPROP('RV_TESTTAB.f3', 'Field', 'UpdateName', 'testtab.f3')
	  DBSETPROP('RV_TESTTAB.f3', 'Field', 'DataType', "C(10)")
	  * Props for the RV_TESTTAB.f4 field.
	  DBSETPROP('RV_TESTTAB.f4', 'Field', 'KeyField', .F.)
	  DBSETPROP('RV_TESTTAB.f4', 'Field', 'Updatable', .T.)
	  DBSETPROP('RV_TESTTAB.f4', 'Field', 'UpdateName', 'testtab.f4')
	  DBSETPROP('RV_TESTTAB.f4', 'Field', 'DataType', "I")
	  * Props for the RV_TESTTAB.f5 field.
	  DBSETPROP('RV_TESTTAB.f5', 'Field', 'KeyField', .F.)
	  DBSETPROP('RV_TESTTAB.f5', 'Field', 'Updatable', .T.)
	  DBSETPROP('RV_TESTTAB.f5', 'Field', 'UpdateName', 'testtab.f5')
	  DBSETPROP('RV_TESTTAB.f5', 'Field', 'DataType', "I")
	
	  USE rv_Testtab SHARED NODATA
	
	  =CURSORSETPROP("Buffering",3) && same with 5
	
	  ? "   First Call To AddData"
	  * Add the first record to the table.
	  =AddData(500) 
	
	  ? "   Second Call To AddData"
	  * Add the 2nd record to the table.
	  =AddData(501)
	
	  RETURN 
	
	  PROCEDURE AddData(lnNewVal)
	     id=0
	     =REQUERY("rv_Testtab")
	     SELECT rv_Testtab
	     APPEND BLANK
	     REPLACE F1 WITH m.lnNewVal, F2 WITH ALLTRIM(STR(m.lnNewVal)), ;
	        F3 WITH ALLTRIM(STR(m.lnNewVal)), F4 WITH m.lnNewVal, ;
	        F5 WITH m.lnNewVal
	  	
	     ? "  Before Transaction: "+GETFLDSTATE(-1,"rv_Testtab"),F1
	     BEGIN TRANSACTION 
	        ? "  GETFLDSTATE() In Transaction Before Table Update:        "+GETFLDSTATE(-1,"rv_Testtab"),F1
	        ? "  Table Update Results: " + IIF(TABLEUPDATE(0,.f.,"rv_Testtab"), "True", "False")
	        ? "  GETFLDSTATE() In Transaction After Table Update:  "+GETFLDSTATE(-1,"rv_Testtab"),F1
	     END TRANSACTION 
	     * After the second record has been added and the transaction is done,
	     * GETFLDSTATE shows that another record has been appended when 
	     * this is not the case.
	     ? "  GETFLDSTATE() After End Transaction: "+GETFLDSTATE(-1,"rv_Testtab"),F1
	
	  ENDPROC   
	
	2. Examine the results as follows:
	
	   - After the first record is added to the table, the results from GETFLDSTATE
	     after the END TRANSACTION command return all 1s, which indicates that the
	     field has not been edited.
	
	   - After the second record is added to the table, the results for the
	     GETFLDSTATE after the END TRANSACTION command return all 3s, which
	     indicates that the field in the appended record has not been edited.
	
	   - The GETFLDSTATE function reports that another record has been appended to
	     the table even though no record has been added.
	
	Additional query words: kbVFP700sp1fix
	
	======================================================================
	Keywords          : kbGrpDSFox kbDSupport kbCodeSnippet kbvfp700 _IK283 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP700
	Version           : :7.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
