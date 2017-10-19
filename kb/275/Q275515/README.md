---
layout: page
title: "Q275515: PRB: Performance Degradation with SQL Selects from Offline Views"
permalink: /kb/275/Q275515/
---

## Q275515: PRB: Performance Degradation with SQL Selects from Offline Views

	Article: Q275515
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you issue SQL SELECT statements against offline views, the performance of
	an application degrades, and system resources are gradually depleted.
	
	RESOLUTION
	==========
	
	Issue SQL SELECT statements against online views or tables rather than offline
	views.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named "Memdemo.prg" and paste the following code:
	
	  IF !FILE("MYOLV.DBC")
	     SET SAFETY OFF
	     SET MULTILOCKS ON
	     * Create a database.
	     CREATE DATABASE MYOLV
	     * Declare API function to create ODBC DSN.
	     DECLARE INTEGER SQLConfigDataSource IN odbccp32.DLL ;
	        INTEGER, INTEGER, STRING, STRING
	     IF VAL(SUBSTR(VERSION(),15,2))=6 OR VAL(SUBSTR(VERSION(),15,2))=7
	        lcDir=HOME(2)+"data\"
	     ELSE
	        lcDir=HOME()+"SAMPLES\DATA\"
	     ENDIF
	     * Information to setup ODBC DSN.
	     lcSetUp="DSN=MyOffLine"+CHR(0)+;
	        "Description=VFP Offline View Demo"+CHR(0)+;
	        "SourceDB="+lcDir+"testdata.dbc"+CHR(0)+;
	        "SourceType=DBC"
	     * Call API function to create a DSN.
	     =SQLConfigDataSource(0,1,"Microsoft Visual FoxPro Driver",lcSetUp)
	     CLEAR DLLS
	     * Create a connection.
	     CREATE CONNECTION MYOLV DATASOURCE "myoffline"
	     * Create a view to take offline.
	     CREATE SQL VIEW test REMOTE CONNECT MYOLV ;
	        AS SELECT cust_id, company, city ;
	        FROM customer ;
	        ORDER BY customer.cust_id
	     USE test
	     * Take the view offline.
	     * Creates file named 'Test.dbf'.
	     =CREATEOFFLINE('test')
	     * Close all and open the Table for OffLine view.
	     CLOSE ALL
	  ENDIF
	
	  CLOSE ALL
	  CLEAR ALL
	  OPEN DATABASE MYOLV
	  SET MULTILOCKS ON
	  * Get the value of User Object Memory.
	  startval=VAL(SYS(1016))
	  * Get the value of Memory Handles.
	  startsysval=VAL(SYS(1011))
	  FOR i=1 TO 10000
	     * Issue a SQL Select statement against an Offline View.
	     SELECT * FROM test INTO CURSOR testing
	     * Get the current value of User Object Memory.
	     endval=VAL(SYS(1016))
	     * Get the current value of Memory Handles.
	     endsysval=VAL(SYS(1011))
	     * Check the amount of available physical memory.
	     memcheck(endval-startval,endsysval-startsysval)
	     startval=endval
	     startsysval=endsysval
	     WAIT WINDOW "Iteration = " + ALLTRIM(STR(i)) NOWA
	  ENDFOR
	  CLOSE ALL
	
	  *******************************************************************
	  PROCEDURE memcheck
	  *******************************************************************
	     LPARAMETERS userobj, usedhandles
	     lcCurrent=ALIAS()
	     * Check for existence of memvals.dbf to store memory values.
	     IF !FILE('memvals.dbf')
	        SELECT 0
	        CREATE TABLE memvals FREE (availphys N(15,0), fox_mem c(15), usermem i, memhandles i, when_fire T)
	        USE IN memvals
	     ENDIF
	     * Declare GlobalMemoryStatus API.
	     DECLARE GlobalMemoryStatus IN Win32API STRING @MemStat
	     m.struc = long2str(32) + REPLICATE(CHR(0), 28)
	     * Call GlobalMemoryStatus.
	     =GlobalMemoryStatus(@m.struc)
	     * Get Available Physical Memory.
	     m.availphys = str2long(SUBSTR(m.struc, 13, 4))
	     INSERT INTO memvals VALUES (m.availphys, SYS(1001), userobj, usedhandles, DATETIME())
	     USE IN memvals
	     IF !EMPTY(lcCurrent)
	        SELECT (lcCurrent)
	     ENDIF
	     CLEAR DLLS
	     RETURN
	
	  *******************************************************************
	  FUNCTION long2str
	  *******************************************************************
	     PARAMETERS m.longval
	     PRIVATE i, m.retstr
	     m.retstr = ""
	     FOR i = 24 TO 0 STEP -8
	        m.retstr = CHR(INT(m.longval/(2^i))) + m.retstr
	        m.longval = MOD(m.longval, (2^i))
	     NEXT
	     RETURN m.retstr
	
	  *******************************************************************
	  FUNCTION str2long
	  *******************************************************************
	     PARAMETERS m.longstr
	     PRIVATE i, m.retval
	     m.retval = 0
	     FOR i = 0 TO 24 STEP 8
	        m.retval = m.retval + (ASC(m.longstr) * (2^i))
	        m.longstr = RIGHT(m.longstr, LEN(m.longstr) - 1)
	     NEXT
	     RETURN m.retval
	
	2. Save and then run the program file.
	
	3. Open and BROWSE the memvals table. Inspect the values that are stored in the
	  table. Note that the availphys column shows a downward trend.
	
	4. From the Command window, run the following code:
	
	  SELECT AVG(availphys) AS availphys FROM memvals WHERE RECNO()<=30 INTO CURSOR baseline
	  SELECT AVG(availphys) AS availphys FROM MEMVALS WHERE RECNO()>=RECCOUNT()-30 INTO CURSOR endline
	  ? baseline.availphys-endline.availphys
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John
	Desch, Microsoft Corporation.
	
	
	Additional query words: Offline View SQL Select
	
	======================================================================
	Keywords          : kbDatabase kbvfp500 kbvfp500a kbvfp600 KbDBFDBC kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbnofix
	
	=============================================================================
	
