---
layout: page
title: "Q261267: PRB: FoxPro Tables Accessed Through ODBC Are Not Updated"
permalink: /kb/261/Q261267/
---

## Q261267: PRB: FoxPro Tables Accessed Through ODBC Are Not Updated

{% raw %}

	Article: Q261267
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,4.0,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft ODBC Driver for Visual FoxPro (Build 6.00.8281.00), version 6.0 
	- Microsoft ODBC Driver for Visual FoxPro, versions 3.0, 4.0, 5.0 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Applications that access Visual FoxPro tables through Open Database Connectivity
	(ODBC) may not present current data immediately after the tables are updated
	from Visual FoxPro.
	
	CAUSE
	=====
	
	The Visual FoxPro ODBC Driver caches data for approximately five seconds.
	
	RESOLUTION
	==========
	
	This behavior may be circumvented by first disconnecting from and then
	reconnecting to the Visual FoxPro ODBC data source.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file named ODBCtest.prg by using the following code:
	
	  *!* Use the sleep function, so that timing isn't changed by inadvertent key presses
	  DECLARE Integer Sleep IN "KERNEL32.DLL" Integer
	  IF !FILE('TEST.DBF')
	     CREATE TABLE TEST (STATFLD C(10))
	     INSERT INTO TEST VALUES ("TRUE")
	  ENDIF
	  IF !FILE('CAPTURE.DBF')
	     CREATE TABLE CAPTURE (t_interval i, actual C(10), expected C(10))
	  ENDIF
	  CLOSE ALL
	  SET EXCL OFF
	  *!* Test For Caching using ODBC
	  gnconnhandle=SQLSTRINGCONN("driver=Microsoft Visual FoxPro Driver;SourceType=dbf;" + ;
	     "SourceDB=" + SYS(5) + SYS(2003) + ";Exclusive=NO;BackGroundFetch=NO;Deleted=NO")
	  sqlcommand="select statfld from test"
	  ? "Interval","Actual","Expected"
	  *!* Start with a one second delay and increase by one second each iteration
	  FOR alpha=1 TO 5
	     FOR i=1 TO 5
	        *!* Use test here, so that we can update it from VFP
	        USE TEST
	        IF ALLTRIM(STATFLD)="TRUE"
	           REPLACE STATFLD WITH 'FALSE'
	        ELSE
	           REPLACE STATFLD WITH 'TRUE'
	        ENDIF
	        real=TEST.STATFLD
	        USE IN TEST
	        *!* Halt execution for alpa*1000 milliseconds
	        =Sleep(alpha*1000)
	        =odbcdatatrap(real)
	     ENDFOR
	  ENDFOR
	  *!* Done with the ODBC data source, so disconnect
	  =sqldisconn(gnconnhandle)
	  SELECT CAPTURE
	  BROWSE TIMEOUT 60
	  clear dlls
	
	  PROCEDURE odbcdatatrap
	     PARAMETER realval
	     *!* Actual Value passed, so execute the ODBC call
	     =sqlexec(gnconnhandle,sqlcommand,'sqlresult')
	     SELECT sqlresult
	     *!* Insert the Interval, Returned Value and the Actual Value into the capture table
	     INSERT INTO CAPTURE VALUES (alpha,sqlresult.STATFLD,realval)
	     ? alpha,sqlresult.statfld,realval
	
	2. Save and run the program file.
	
	3. Note that the values returned through ODBC do not necessarily match the value
	  of the source table until the interval between queries of the ODBC data
	  source reaches approximately five seconds.
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDatabase kbODBC kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbODBCSearch kbODBCVFP300 kbODBCVFP400 kbODBCVFP500 kbODBCVFP600828100 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,4.0,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
