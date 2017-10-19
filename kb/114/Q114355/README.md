---
layout: page
title: "Q114355: INFO: Single-Tier Drivers Don't Support Asynchronous Processing"
permalink: /kb/114/Q114355/
---

## Q114355: INFO: Single-Tier Drivers Don't Support Asynchronous Processing

	Article: Q114355
	Product(s): Microsoft FoxPro
	Version(s): 2.5,2.5a,2.5b,2.6,3.0
	Operating System(s): 
	Keyword(s): kbcode kbvfp300 kbGrpDSFox kbDSupport kbvfp250
	Last Modified: 28-MAR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After you have set the connection option to Asynchronous using the Connectivity
	Kit's DBSetOpt() command, DBExec() commands are still processed synchronously
	when you are using a single-tier driver. The asynchronous connect option works
	only with two-tier drivers; it is ignored when you are using a single-tier
	driver.
	
	MORE INFORMATION
	================
	
	A single-tier driver is a driver that directly reads from and writes to a
	database such as the FoxPro, Btrieve, dBASE, Microsoft Excel, and text file
	drivers. A two-tier driver is a driver that connects to another DBMS such as SQL
	Server and ORACLE.
	
	NOTE: dBASE is manufactured by a vendor independent of Microsoft; we make no
	warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	The Asynchronous connection option works with two-tier drivers only if a
	connection is actually made. When a DBExec() command is processed with the
	connection option set to Asynchronous, the DBExec() command has to be
	continually called until all the results are returned.
	
	If the code below is run through a trace, it demonstrates that the single- tier
	driver processes the SQL statement synchronously. Note that the DO WHILE
	statement is never executed.
	
	NOTE: Depending on your version of FoxPro, use one of the following two code
	examples:
	
	FoxPro 2.x Code:
	----------------
	
	     SET LIBRARY TO SYS(2004)+"fpsql.fll"
	
	     PUBLIC handle
	     dsource="foxtest"
	     errval=0
	     errmsg=""
	     * foxtest is a single-tier FoxPro database driver.
	     handle=DBConnect(dsource,"","")
	     =DBSetOpt(handle,"Asynchronous",1)
	
	     sql="select * from customer"
	
	     waittime=2
	     start=SECONDS()
	     retcode=DBExec(handle,sql)
	
	     * This DO WHILE code below is never executed because retcode=1....
	     * i.e., the DBExec() above returns all the results synchronously.
	     DO WHILE ((retcode=0) AND (SECONDS() - start < waittime))
	        retcode=DBExec(handle,sql)
	     ENDDO
	
	     IF (retcode= 0)
	         retcode=DBCancel(handle)
	     ENDIF
	
	     IF (retcode != 1)
	        error=DBError(handle,@errmsg,@errval)
	        CLEAR
	        @ 2,2 SAY errval
	        @ 3,2 SAY errmsg
	     ENDIF
	
	Visual FoxPro Code:
	-------------------
	
	     PUBLIC handle
	     dsource="foxtest"
	     errval=0
	     errmsg=""
	  **** foxtest is a datasource name for a single-tier FoxPro database driver.
	     handle=SQLConnect(dsource,"","")
	     =SQLSetProp(handle,"Asynchronous",.T.)
	
	  **** The customer table must be in the
	     sql="select * from customer"
	
	     waittime=2
	     start=SECONDS()
	     retcode=SQLExec(handle,sql)
	
	  **** This DO WHILE code below is never executed because retcode=1....
	  ****  i.e., the DBExec() above returns all the results synchronously.
	     DO WHILE ((retcode=0) AND (SECONDS() - start < waittime))
	        retcode=SQLExec(handle,sql)
	     ENDDO
	
	     IF (retcode= 0)
	         retcode=SQLCancel(handle)
	     ENDIF
	
	     IF (retcode < 0)
	        val=AERROR(atmp)
	        errval=atmp(1,1)
	        errmsg=atmp(1,2)
	        WAIT WINDOW STR(errval)+': '+errmsg
	        CLEAR
	     ENDIF
	
	   ***** Remove the connection
	     =SQLDisconnect(handle)
	
	REFERENCES
	==========
	
	FoxPro Connectivity Kit "User's Guide," version 2.5, pages 26-27, 31-32, 35,
	38-39, and 46-47
	
	Additional query words: VFoxWin FoxWin 2.50 ck 3.00 2.50a
	
	======================================================================
	Keywords          : kbcode kbvfp300 kbGrpDSFox kbDSupport kbvfp250 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : :2.5,2.5a,2.5b,2.6,3.0
	Issue type        : kbinfo
	
	=============================================================================
	
