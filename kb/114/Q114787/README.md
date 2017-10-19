---
layout: page
title: "Q114787: HOWTO: Execute a Stored Procedure on SQL Server"
permalink: /kb/114/Q114787/
---

## Q114787: HOWTO: Execute a Stored Procedure on SQL Server

	Article: Q114787
	Product(s): Microsoft FoxPro
	Version(s): 2.5,2.5a,2.5b,2.6,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbinterop kbvfp300 kbvfp500 kbvfp600
	Last Modified: 01-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	- Microsoft FoxPro for MS-DOS, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By using Visual FoxPro's SQLExec() function, or the FoxPro 2.x Connectivity
	Kit's DBExec() function, you can execute a stored SQL Server procedure.
	
	MORE INFORMATION
	================
	
	The following steps describe how to create a stored procedure on Microsoft SQL
	Server; this information has been presented as a matter of convenience and is
	not supported by FoxPro Product Support. For questions concerning the creation,
	syntax, or functionality of stored procedures, refer to the CREATE PROCEDURE
	command in the SQL Server "Language Reference," or contact SQL Server Product
	Support. The commands to create the stored procedure can also be executed with
	the SQLExec function from Visual FoxPro, or the DBExec() function from FoxPro
	2.x. The steps set up a stored procedure on SQL Server and then explain how you
	execute the stored procedure from within Visual FoxPro or from FoxPro 2.x using
	the Connectivity Kit.
	
	Setting Up a Stored Procedure on SQL Server 7.0
	-----------------------------------------------
	
	1. From the Programs menu select Microsoft SQL Server 7.0, and then choose Query
	  Analyzer.
	
	2. Connect to your server.
	
	3. Choose the pubs database in the DB drop down.
	
	4. Type in the following procedure:
	
	  create procedure showsales @parm1 char(4)
	  as
	  select * from sales where stor_id=@parm1
	
	5. From the File menu, choose Save As and save the procedure as STOR_PRC.SQL.
	
	1. Click the Execute button.
	
	Setting Up FoxPro to Run a Stored Procedure
	-------------------------------------------
	
	Run one of the following programs, depending on your version of FoxPro.
	
	FoxPro 2.x Code:
	----------------
	
	     *****SET THE LIBRARY AND INITIALIZE VARS
	     IF _DOS
	        SET LIBRARY TO SYS(2004)+"fpsql.plb"
	     ELSE
	        SET LIBRARY TO SYS(2004)+"fpsql.fll"
	     ENDIF
	     PUBLIC errval
	     PUBLIC errmsg
	     PUBLIC handle
	     errval=0
	     errmsg=' '
	     sourcename= 'test'
	     user= 'sa'
	     passwd=''
	
	     ********CONNECT
	
	     handle=DBConnect(sourcename,user,passwd)
	     IF handle > 0
	        WAIT WINDOW 'Successfully Connected' NOWAIT
	     ELSE
	        error=DBError(0,@errmsg,@errval)
	        WAIT WINDOW STR(error)+' '+STR(errval)+' '+errmsg
	     ENDIF
	
	     =DBSetOpt(handle,'Asynchronous',0)
	     =DBSetOpt(handle,'BatchMode',1)
	     =DBSetOpt(handle,'ConnTimeout',0)
	     =DBSetOpt(handle,'Transact',1)
	     =DBSetOpt(handle,'UseTable',0)
	
	     err=DBExec(handle,'use pubs')
	     DO errhand WITH err,'USE PUBS'
	
	     **********THIS PROGRAM DEMOs HOW TO IMPLEMENT SQL WITH
	     **********THE DBExec() FUNCTION
	
	     sqlcomm= "execute showsales '7066'"
	     err=DBExec(handle,sqlcomm)
	     DO errhand WITH err,"DBExec(handle,"+sqlcomm+")"
	     IF err > 0
	        BROWSE
	     ENDIF
	
	     **********DISCONNECT
	     err=DBDisconn(handle)
	     DO errhand WITH err,"DBDisconn()"
	     SET LIBRARY TO
	     CLOSE ALL
	
	     **********Error Handler Program
	     PROCEDURE errhand
	     PARAMETERS err,command
	     IF err > 0
	       WAIT WINDOW ALLTRIM(UPPER(command))+"Completed Successfully";
	       NOWAIT
	     ELSE
	       WAIT WINDOW UPPER(command)+"NOT Completed Successfully"
	       error=DBError(handle,@errmsg,@errval)
	       WAIT WINDOW STR(error)+" "+STR(errval)+" "+errmsg
	     ENDIF
	     RETURN
	
	Note that the program returns the two records that have 7066 as the stor_id.
	
	Visual FoxPro Code:
	-------------------
	
	     PUBLIC errval
	     PUBLIC errmsg
	     PUBLIC handle
	     errval=0
	     errmsg=' '
	     sourcename= 'test'
	     user= 'sa'
	     passwd=''
	
	     ********CONNECT
	
	     * Turning on error display for connections
	      =SQLSetProp(0,"DispWarning",.t.)
	
	     handle=SQLConnect(sourcename,user,passwd)
	     IF handle > 0
	        WAIT WINDOW 'Successfully Connected' NOWAIT
	     ENDIF
	
	     ********Set some defaults
	     =SQLSetProp(handle,'Asynchronous',.f.)
	     =SQLSetProp(handle,'BatchMode',.t.)
	     =SQLSetProp(handle,'ConnectTimeOut',0)
	     =SQLSetProp(handle,'Transactions',1)
	
	     err=SQLExec(handle,'use pubs')
	     DO errhand WITH err,'USE PUBS'
	
	     **********THIS PROGRAM DEMOs HOW TO IMPLEMENT SQL WITH
	     **********THE SQLExec() FUNCTION
	
	     sqlcomm= "execute showsales '7066'"
	     err=SQLExec(handle,sqlcomm)
	     DO errhand WITH err,"SQLExec(handle,"+sqlcomm+")"
	     IF err > 0
	        BROWSE
	     ENDIF
	
	     **********DISCONNECT
	     err=SQLDisconnect(handle)
	     DO errhand WITH err,"SQLDisconnect()"
	     CLOSE ALL
	
	     **********Error Handler Program
	     PROCEDURE errhand
	     PARAMETERS err,command
	     IF err > 0
	       WAIT WINDOW ALLTRIM(UPPER(command))+"Completed Successfully";
	       NOWAIT
	     ELSE
	       WAIT WINDOW UPPER(command)+"NOT Completed Successfully"
	     ENDIF
	     RETURN
	
	Note that the program returns the two records that have 7066 as the stor_id.
	
	Additional query words: CK STORED PROCEDURE ODBC
	
	======================================================================
	Keywords          : kbcode kbinterop kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro260DOS kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP600
	Version           : :2.5,2.5a,2.5b,2.6,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
