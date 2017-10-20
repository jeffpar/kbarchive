---
layout: page
title: "Q198427: PRB: Unable to Edit Remote View When Base Table Name is PREF"
permalink: /kb/198/Q198427/
---

## Q198427: PRB: Unable to Edit Remote View When Base Table Name is PREF

{% raw %}

	Article: Q198427
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempts to modify a remote view in the View Designer results in one of the
	following error messages:
	
	  Syntax Error.
	
	  -or-
	
	  Command contains unrecognized phrase/keyword.
	
	When using Visual FoxPro 3.x or 5.x, the View Designer opens after the error
	message appears; however, the view is empty.
	
	When using Visual FoxPro 6.0, the View Designer does not open after the error
	message appears.
	
	CAUSE
	=====
	
	This behavior may occur when the name of the base table for the remote view is a
	reserved Visual FoxPro keyword.
	
	RESOLUTION
	==========
	
	Avoid using Visual FoxPro reserved/key words for table and/or field names. In
	instances that Visual FoxPro reserved/key words are being used for table and/or
	field names, it may be necessary to modify the properties of the view by using
	the DBSETPROP() function.
	
	The following code snippet illustrates how to use the DBSETPROP() function to
	modify view properties instead of manually modifying the view in the View
	Designer.
	
	Sample Code
	-----------
	
	     *!* Set Properties for the view.
	     DBSETPROP('MyTest', 'View', 'UpdateType', 1)
	     DBSETPROP('MyTest', 'View', 'WhereType', 3)
	     DBSETPROP('MyTest', 'View', 'FetchMemo', .F.)
	     DBSETPROP('MyTest', 'View', 'SendUpdates', .T.)
	     DBSETPROP('MyTest', 'View', 'UseMemoSize', 255)
	     DBSETPROP('MyTest', 'View', 'FetchSize', -1)
	     DBSETPROP('MyTest', 'View', 'MaxRecords', -1)
	     DBSETPROP('MyTest', 'View', 'Tables', 'dbo.PREF')
	     DBSETPROP('MyTest', 'View', 'Prepared', .T.)
	     DBSETPROP('MyTest', 'View', 'CompareMemo', .F.)
	     DBSETPROP('MyTest', 'View', 'FetchAsNeeded', .F.)
	     DBSETPROP('MyTest', 'View', 'Comment', "")
	     DBSETPROP('MyTest', 'View', 'BatchUpdateCount', 1)
	     DBSETPROP('MyTest', 'View', 'ShareConnection', .T.)
	     *!* Use the view.
	     USE MyTest
	     *!* Use the AFIELDS() function to get the column names.
	     =AFIELDS(aPrefArray)
	     *!* Loop through the array.
	     FOR i=1 TO ALEN(aPrefArray,1)
	        *!* Set Field Level Properties for the view MyTest.
	        IF i=1
	           DBSETPROP('MyTest.'+ALLTRIM(aPrefArray[i,1]),'Field','KeyField', ;
	              .T.)
	        ELSE
	           DBSETPROP('MyTest.'+ALLTRIM(aPrefArray[i,1]),'Field','KeyField', ;
	              .F.)
	        ENDIF
	        DBSETPROP('MyTest.'+ALLTRIM(aPrefArray[i,1]),'Field','Updatable', ;
	          .T.)
	        DBSETPROP('MyTest.'+ALLTRIM(aPrefArray[i,1]),'Field','UpdateName', ;
	           'dbo.PREF.'+ALLTRIM(aPrefArray[i,1]))
	     NEXT
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named Mytest.prg using the following code:
	
	        *!* Code begins here
	        #DEFINE CONNECTSTRING 'DRIVER={SQL Server};' + ;
	           'SERVER=My_Server;DATABASE=PUBS;UID=sa;PWD='
	        gnConnHandle=SQLSTRINGCONN(CONNECTSTRING)
	        SQLCommand="CREATE TABLE PREF (PREF CHAR(10), TAG CHAR(20))"
	        TestVal=SQLEXEC(gnConnHandle,SQLCommand)
	        CREATE DATABASE Reserved
	        CREATE CONNECTION KeyWords CONNSTRING CONNECTSTRING
	        CREATE SQL VIEW MyTest REMOTE CONNECTION KeyWords ;
	           AS SELECT * ;
	           FROM dbo.PREF PREF
	        *!*MODI VIEW MyTest
	        SQLCommand="DROP TABLE PREF"
	        TestVal=SQLEXEC(gnConnHandle,SQLCommand)
	        =SQLDISCONN(gnConnHandle)
	        CLOSE ALL
	
	2. Type the following in the command line:
	
	        DO MYTEST
	
	3. Modify the MyTest.prg file and remove the comment from the MODI VIEW MyTest
	  line. Now, run the program again.
	
	  Note that when the MODI VIEW MyTest line of code executes, a dialog box with
	  the following error message appears:
	
	  Syntax Error.
	
	4. Modify the Mytest.prg file to read as follows:
	
	        *!* Code begins here.
	        #DEFINE CONNECTSTRING 'DRIVER={SQL Server};' + ;
	           'SERVER=My_Server;DATABASE=PUBS;UID=sa;PWD='
	        gnConnHandle=SQLSTRINGCONN(CONNECTSTRING)
	        SQLCommand="CREATE TABLE PREF (PREF CHAR(10), TAG CHAR(20))"
	        TestVal=SQLEXEC(gnConnHandle,SQLCommand)
	        CREATE DATABASE Reserved
	        CREATE CONNECTION KeyWords CONNSTRING CONNECTSTRING
	        CREATE SQL VIEW MyTest REMOTE CONNECTION KeyWords ;
	           AS SELECT * ;
	           FROM dbo.PREF PREF ;
	           WHERE PREF.PREF=?mypreference ;
	           AND PREF.TAG=?mytag
	        *!*MODI VIEW MyTest
	        SQLCommand="DROP TABLE PREF"
	        TestVal=SQLEXEC(gnConnHandle,SQLCommand)
	        =SQLDISCONN(gnConnHandle)
	        CLOSE ALL
	
	5. Type the following in the command line:
	
	        DO MYTEST
	
	6. Modify the MyTest.prg file and remove the comment from the MODI VIEW MyTest
	  line. Now, run the program again.
	
	  Note that when the MODI VIEW MyTest line of code executes, a dialog box with
	  the following error message appears:
	
	  Command contains unrecognized phrase/keyword.
	
	REFERENCES
	==========
	
	Visual FoxPro Help, version 6.0; search on: "DBGETPROP()" (without the quotation
	marks); topic: DBGETPROP() function; DBSETPROP() function
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
