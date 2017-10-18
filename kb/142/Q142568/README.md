---
layout: page
title: "Q142568: Error 128 Upsizing Default Value to SQL Server"
permalink: kb/142/Q142568/
---

## Q142568: Error 128 Upsizing Default Value to SQL Server

	Article: Q142568
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you upsize a table that contains a field with a default value that is the
	value of another table's field value, you will receive an error 128. This
	article explains how to create a default column value on SQL Server.
	
	MORE INFORMATION
	================
	
	A default value for a column in SQL Server cannot reference the names of any
	columns or other database objects. The default value must contain a valid
	expression. For example, if you want to create a default value for a column
	called State so that each new entry would use the default value WA, use the
	following program:
	
	     * Connect to a SQL server using a predefined datasource.
	     xhandle = SQLCONNECT(DataSourceName, cUserID, cPassword)
	     IF xhandle > 0
	        WAIT WINDOW "Successful Connection. Handle = " + STR(xhandle)
	     ELSE
	        WAIT WINDOW "Bad connection"
	        =errhand()
	        RETURN
	     ENDIF
	
	     * Use the appropriate database.
	     x = sqlexec(xhandle,"use pubs")
	     IF x < 0
	         =errhand()
	         RETURN
	     ENDIF
	
	     * Create the default.
	     x = SQLEXEC(xhandle,"create default mystate as 'WA' ")
	     IF x < 0
	        =errhand()
	        RETURN
	     ENDIF
	
	     * Run a stored procedure to bind the default "mystate" to a
	     * specific column.
	     x = SQLEXEC(xhandle,"sp_bindefault mystate, 'authors.state' ")
	     IF x < 0
	       =errhand()
	       RETURN
	     ENDIF
	
	     * Each new row inserted will contain the value 'WA' for authors.state
	     * if a value is not supplied.
	
	     * Disconnect
	     x = SQLDISCONNECT(xhandle)
	     IF x < 0
	        =errhand()
	        RETURN
	     ENDIF
	
	     PROCEDURE errhand
	       =AERROR(myerror)
	       CLEAR
	       ? 'An error has occurred.'
	       FOR n = 1 to 7
	         ? myerror(n)
	       ENDFOR
	       = SQLDISCONNECT(xhandle)
	     RETURN
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
