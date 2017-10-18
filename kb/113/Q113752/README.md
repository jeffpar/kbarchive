---
layout: page
title: "Q113752: HOWTO: Create a Table Using FoxPro Connectivity Kit"
permalink: kb/113/Q113752/
---

## Q113752: HOWTO: Create a Table Using FoxPro Connectivity Kit

	Article: Q113752
	Product(s): Microsoft FoxPro
	Version(s): 2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 24-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	- Microsoft FoxPro for MS-DOS, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By using the FoxPro Connectivity Kit's DBExec() command, you can create a table
	on the native platform that you are connecting to.
	
	MORE INFORMATION
	================
	
	Using the standard SQL CREATE TABLE command with the Connectivity Kit's DBExec()
	command, you can create a new table on the native platform. "Native platform"
	refers to the DBMS that you are connecting to. In the example below, the source
	is SQL Server and the code example creates a table called testtab in the pubs
	database on the SQL Server machine.
	
	With minor modifications, this same code can be used to create a new table called
	testtab on an Oracle server or on any other data source that may be in use.
	
	Code Sample for FoxPro 2.x
	--------------------------
	
	     *****SET THE LIBRARY AND INITIALIZE VARS
	     IF _DOS
	        SET LIBRARY TO SYS(2004)+"fpsql.plb"
	     ELSE
	        SET LIBRARY TO SYS(2004)+"fpsql.fll"
	     ENDIF
	
	     PUBLIC errval
	     PUBLIC errmsg
	     PUBLIC handle
	     PUBLIC do_more
	
	     errval=0
	     errmsg=' '
	     do_more=.T.
	
	     *****SOURCE INFORMATION
	     sourcename= 'test'
	     user= 'sa'
	     passwd=''
	
	     *****CONNECT
	
	     handle=DBConnect(sourcename,user,passwd)
	     IF handle > 0
	        WAIT WINDOW 'Successfully Connected'
	     ELSE
	        error=DBError(0,@errmsg,@errval)
	        WAIT WINDOW STR(error)+' '+STR(errval)+' '+errmsg
	        do_more=.F.
	     ENDIF
	
	     IF do_more=.T.
	        *****SET SESSION DEFAULTS
	
	        =DBSetOpt(handle,'Asynchronous',0)
	        =DBSetOpt(handle,'BatchMode',1)
	        =DBSetOpt(handle,'ConnTimeout',0)
	        =DBSetOpt(handle,'Transact',1)
	        =DBSetOpt(handle,'UseTable',0)
	
	        *****USE THE PUBS DATABASE ON SQL SERVER; On SQL Server
	        *****it is necessary to open an existing database (pubs)
	        *****in order to create a table.  In other words, databases
	        *****on SQL Server contain tables and we are creating a table
	        *****that will be part of the pubs database.
	
	        err=DBExec(handle,'use pubs')
	        DO errhand WITH err,'USE PUBS'
	
	        *****CREATE_IT--CREATES TESTTAB TABLE ON SQL SERVER
	        *****IN THE PUBS DATABASE.
	
	        DO create_it
	
	        *****DISCONNECT
	
	        err=DBDisconn(handle)
	        DO errhand with err,"DBDisconn()"
	        SET LIBRARY TO
	        CLOSE ALL
	     ENDIF
	
	     *****Simple Error Handler Program
	     PROCEDURE errhand
	     PARAMETERS err,command
	        IF err > 0
	           WAIT WINDOW ALLTRIM(UPPER(command))+" Completed Successfully"
	        ELSE
	           ? UPPER(ALLTRIM(command))+" NOT Completed Successfully"
	           error=DBError(handle,@errmsg,@errval)
	           ? ALLTRIM(STR(error))+" "+ALLTRIM(STR(errval))+" " ;
	             +ALLTRIM(errmsg)
	        ENDIF
	     RETURN
	
	     *****THE DBExec() FUNCTION IS USED TO CREATE A TABLE
	     PROCEDURE create_it
	        createcomm= "CREATE TABLE testtab "+ ;
	           "(ID char(4), NAME char(45), STATE char(2), ZIP char(10))"
	        err=DBExec(handle,createcomm)
	        DO errhand WITH err,"DBExec(handle,"+createcomm+")"
	        IF err > 0
	           WAIT WINDOW 'THE CREATE Command Worked.'
	        ENDIF
	
	     RETURN
	     * End of Code
	
	Code Sample for Visual FoxPro
	-----------------------------
	
	     *****SET THE LIBRARY AND INITIALIZE VARS
	     PUBLIC errval
	     PUBLIC errmsg
	     PUBLIC handle
	     PUBLIC do_more
	
	     errval=0
	     errmsg=' '
	     do_more=.T.
	
	     *****SOURCE INFORMATION
	     sourcename= 'test'
	     user= 'sa'
	     passwd=''
	
	     *****CONNECT
	
	     handle=sqlConnect(sourcename,user,passwd)
	     IF handle > 0
	        WAIT WINDOW 'Successfully Connected'
	     ELSE
	        if !(type('aTemp')="U")
	        release aTemp
	        endif
	        aerror(aTemp)
	        errval=aTemp(1,1)
	        errmsg=aTemp(1,2)
	        WAIT WINDOW STR(errval)+': '+errmsg
	        do_more=.F.
	     ENDIF
	
	     IF do_more=.T.
	
	        *****USE THE PUBS DATABASE ON SQL SERVER; On SQL Server
	        *****it is necessary to open an existing database (pubs)
	        *****in order to create a table.  In other words, databases
	        *****on SQL Server contain tables and we are creating a table
	        *****that will be part of the pubs database.
	
	        err=sqlexec(handle,'use pubs')
	        DO errhand WITH err,'USE PUBS'
	
	        *****CREATE_IT--CREATES TESTTAB TABLE ON SQL SERVER
	        *****IN THE PUBS DATABASE.
	
	        DO create_it
	
	        *****DISCONNECT
	
	        err=SQLDisconnect(handle)
	        DO errhand with err,"SQLDisconnect()"
	        CLOSE ALL
	     ENDIF
	
	     *****Simple Error Handler Program
	     PROCEDURE errhand
	     PARAMETERS err,command
	        IF err > 0
	           WAIT WINDOW ALLTRIM(UPPER(command))+" Completed Successfully"
	        ELSE
	           ? UPPER(ALLTRIM(command))+" NOT Completed Successfully"
	  *         error=SQLError(handle,@errmsg,@errval)
	  *         ? ALLTRIM(STR(error))+" "+ALLTRIM(STR(errval))+" " ;
	  *           +ALLTRIM(errmsg)
	
	        if !(type('aTemp')="U")
	        release aTemp
	        endif
	        aerror(aTemp)
	        errval=aTemp(1,1)
	        errmsg=aTemp(1,2)
	        WAIT WINDOW STR(errval)+': '+errmsg
	        do_more=.F.
	       ENDIF
	     RETURN
	
	     *****THE SQLExec() FUNCTION IS USED TO CREATE A TABLE
	     PROCEDURE create_it
	        createcomm= "CREATE TABLE testtab "+ ;
	           "(ID char(4), NAME char(45), STATE char(2), ZIP char(10))"
	        err=SQLExec(handle,createcomm)
	        DO errhand WITH err,"SQLExec(handle,"+createcomm+")"
	        IF err > 0
	           WAIT WINDOW 'The CREATE Command Worked.'
	        ENDIF
	
	     RETURN
	     * End of Code
	
	Additional query words: VFoxWin FoxDos FoxWin 2.50 2.50a 2.50b 2.60 ODBC CK
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbVFP300
	Version           : :2.5x,2.6x,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
