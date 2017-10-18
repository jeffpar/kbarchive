---
layout: page
title: "Q198606: PRB: &quot;Update Conflict&quot; Message When Modifying SQL Server Data"
permalink: kb/198/Q198606/
---

## Q198606: PRB: &quot;Update Conflict&quot; Message When Modifying SQL Server Data

	Article: Q198606
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbClient KbClientServer kbDatabase kbvfp KbDBFDBC
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An "Update Conflict" message appears when attempting to modify or delete a
	record, contained in an updatable cursor, SELECTed from a SQL Server table.
	
	CAUSE
	=====
	
	This behavior occurs when SQL Server does not return a message indicating the
	number of rows returned by a statement. SQL Server does not return a message
	indicating the number of rows affected by a statement after the following
	commands have been executed on SQL Server:
	
	     sp_configure "user options", 512
	     SET NOCOUNT ON
	
	RESOLUTION
	==========
	
	Check the value of SQL Server's global user options configuration setting,
	before allowing manipulation of SQL Server tables through an updateable cursor.
	
	The following code snippet illustrates how to obtain the current global SQL
	Server "user options" configuration setting:
	
	Sample Code
	-----------
	
	     gnConnHandle=SQLSTRINGCONN('DRIVER={SQL Server};' + ;
	        'SERVER=SPHINXSQL;DATABASE=ALMIS;UID=sa;PWD=')
	     sqlcommand="USE ALMIS"
	     =SQLEXEC(gnConnHandle,sqlcommand)
	     testval=0
	     sqlcommand="sp_configure 'user options'"
	     testval=SQLEXEC(gnConnHandle,sqlcommand,'mytest')
	     oldvalue=0
	     IF testval>0
	        SELECT mytest
	        oldvalue=config_value
	        BROW
	     ENDIF
	     IF oldvalue<>512
	        * Insert code here that would allow the user to view and modify data
	        * contained in an updateable cursor.
	     ELSE
	        * Insert code here that would allow the user to view but not modify
	        * data in a cursor.
	     ENDIF
	     =SQLDISCONNECT(gnConnHandle)
	
	MORE INFORMATION
	================
	
	The "Update Conflict" message indicates that an optimistic locking conflict has
	been detected while trying to update a view.
	
	The SQL Server stored procedure, sp_configure, displays or changes global SQL
	Server configuration settings. EXECuting the sp_configure using the following
	syntax turns off the message, returned at the end of each statement, indicating
	the number of rows affected by the statement:
	
	     sp_configure "user options", 512
	
	EXECuting the following SQL Server commmand also turns off the message, returned
	at the end of each statement, indicating the number of rows affected by the
	statement. SET NOCOUNT ON also prevents SQL Server from sending DONE_IN_PROC
	messages to the client for each statement executed in a stored procedure:
	
	     SET NOCOUNT ON
	
	Steps to Reproduce Behavior
	---------------------------
	
	WARNING: The following code changes SQL Server global configuration settings and
	may impact triggers as well as stored procedures and should be executed with
	extreme caution.
	
	1. Create a program file called "SQLDEMO.PRG", using the following code:
	
	  
	
	        PUBLIC ox
	        ox=CREATEOBJECT('test1')
	        ox.SHOW
	
	        DEFINE CLASS test1 AS FORM
	           TOP = 15
	           LEFT = 37
	           HEIGHT = 250
	           WIDTH = 360
	           DOCREATE = .T.
	           CAPTION = "Form1"
	           NAME = "Form1"
	
	           ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	              TOP = 216, ;
	              LEFT = 120, ;
	              HEIGHT = 25, ;
	              WIDTH = 120, ;
	              CAPTION = "\<Delete Record", ;
	              NAME = "Command1"
	
	           ADD OBJECT grid1 AS GRID WITH ;
	              HEIGHT = 145, ;
	              LEFT = 24, ;
	              TOP = 24, ;
	              WIDTH = 312, ;
	              NAME = "Grid1"
	
	           PROCEDURE LOAD
	              PUBLIC gnConnHandle, testval, old_user_option
	              gnConnHandle=SQLSTRINGCONN('DRIVER={SQL Server};' + ;
	                 'SERVER=SPHINXSQL;DATABASE=PUBS;UID=sa;PWD=')
	              *!*
	              *!* You may have to change the SERVER and DATABASE
	              *!* Values. Make sure user specific UID and PWD
	              *!* values are specified.
	              *!*
	              SQLCommand="USE PUBS"
	              *!*
	              *!* If using a different Database Substitute PUBS
	              *!* for the name of the Database to be used.
	  			*!*
	              =SQLEXEC(gnConnHandle,SQLCommand)
	              testval=0
	              *!* Retrieve current global user options settings.
	              SQLCommand="sp_configure 'user options'"
	              testval=SQLEXEC(gnConnHandle,SQLCommand,'mytest')
	              old_user_option=0
	              IF testval>0
	                 SELECT mytest
	                 old_user_option=config_value
	              ENDIF
	              *!* Comment the lines indicated below and the updates succeed,
	              *!* unless the global SQL Server user options configuration
	              *!* is 512 and SET NOCOUNT ON has been issued
	              *!*
	              *!*  TOP OF LINES TO COMMENT
	              SQLCommand="sp_configure 'user options',512"
	              testval=SQLEXEC(gnConnHandle,SQLCommand)
	              SQLCommand="reconfigure"
	              =SQLEXEC(gnConnHandle,SQLCommand)
	              SQLCommand="set nocount on"
	              testval=SQLEXEC(gnConnHandle,SQLCommand)
	              *!*  END OF LINES TO COMMENT
	              *!*
	              *!*  Create a table for testing in the Pubs database.
	              SQLCommand="CREATE TABLE TESTING (STORE_ID CHAR(5) NOT NULL," +;
	                 " STOR_NAME CHAR(35) NOT NULL)"
	              testval=SQLEXEC(gnConnHandle,SQLCommand)
	              *!*  Insert three records into the test table
	              FOR i=1 to 3
	               SQLCommand="INSERT INTO TESTING VALUES ('" + REPLICATE("0",4) +;
	               ALLTRIM(STR(i)) + "','Store Number " + ALLTRIM(STR(i)) + "')"
	               testval=SQLEXEC(gnConnHandle,SQLCommand)
	              NEXT
	              SQLCommand="SELECT * FROM TESTING"
	              testval4=SQLEXEC(gnConnHandle,SQLCommand)
	              SELECT sqlresult
	              =AFIELDS(testresult)
	              szKeyList=testresult[1,1]
	              szFieldList=""
	              szUpdateList=""
	              *!*  Store the field names to a comma delimited list.
	              FOR i=1 TO ALEN(testresult,1)
	                 IF LEN(ALLTRIM(szFieldList))>0
	                    szFieldList=ALLTRIM(szFieldList)+","
	                 ENDIF
	                 szFieldList=szFieldList+ALLTRIM(testresult[i,1]) + ;
	                    " DBO.TESTING."+ALLTRIM(testresult[i,1])
	                 IF LEN(ALLTRIM(szUpdateList))>0
	                    szUpdateList=ALLTRIM(szUpdateList)+","
	                 ENDIF
	                 szUpdateList=szUpdateList+ALLTRIM(testresult[i,1])
	              NEXT
	              *!*  Set the cursor so that it is updatable
	              =CURSORSETPROP("Tables", 'DBO.TESTING')
	              =CURSORSETPROP("UpdateNameList",szFieldList)
	              =CURSORSETPROP("KeyFieldList",szKeyList)
	              =CURSORSETPROP("UpdatableFieldList", szUpdateList)
	              =CURSORSETPROP("WhereType",1)
	              =CURSORSETPROP("SendUpdates", .T.)
	           ENDPROC
	
	           PROCEDURE UNLOAD
	              =TABLEREVERT(.T.)
	              *!* Drop the test table that was created from the Pubs Database.
	              SQLCommand="DROP TABLE TESTING"
	              =SQLEXEC(gnConnHandle,SQLCommand)
	              *!*  Reset SQL Server Global user option configuration settings
	              *!*  to original values.
	              SQLCommand="sp_configure 'user options'," + ;
	                 ALLTRIM(STR(old_user_option))
	              =SQLEXEC(gnConnHandle,SQLCommand)
	              SQLCommand="reconfigure"
	              =SQLEXEC(gnConnHandle,SQLCommand)
	              SQLCommand="set nocount off"
	              =SQLEXEC(gnConnHandle,SQLCommand)
	              =SQLDISCONN(gnConnHandle)
	           ENDPROC
	
	           PROCEDURE command1.CLICK
	              DELETE
	              SKIP
	              THISFORM.REFRESH
	           ENDPROC
	        ENDDEFINE
	
	2. Type the following in the Command window:
	
	  
	
	        DO SQLDEMO
	
	3. Click the Command Button captioned "Delete Record".
	
	4. A message box with the message "Update Conflict" appears. Click Ignore.
	
	5. Close the form.
	
	REFERENCES
	==========
	
	SQL Reference Help; search on: "sp_configure"
	
	SQL Reference Help; search on: "SET"
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by John Desch,
	Microsoft Corporation.
	
	
	Additional query words: kbDSupport kbDSE
	
	======================================================================
	Keywords          : kbClient KbClientServer kbDatabase kbvfp KbDBFDBC 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : MACINTOSH:3.0b; WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
