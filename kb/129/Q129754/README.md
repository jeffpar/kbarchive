---
layout: page
title: "Q129754: How to Remap FoxPro 2.x Connectivity Kit Functions to 3.0"
permalink: /kb/129/Q129754/
---

## Q129754: How to Remap FoxPro 2.x Connectivity Kit Functions to 3.0

	Article: Q129754
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro provides the same ability to use SQL Passthrough commands that
	earlier versions of FoxPro provided. However, the names of the functions have
	changed somewhat in Visual FoxPro version 3.0, so FoxPro version 2.x code that
	uses these functions will no longer work as expected in Visual FoxPro. This
	article provides code that re-maps the old function names to the new function
	names.
	
	MORE INFORMATION
	================
	
	If you have a main program file or a procedure file, add this code to it and
	call the functions as you normally would. If you do not, you may want to make a
	procedure file and use the SET PROCEDURE command to reference these functions at
	run time.
	
	     **************************************
	     *   Procedure:  DBCANCEL
	     *   Remaps dbcancel() -> SQLCANCEL()
	     **************************************
	     FUNCTION dbcancel
	     PARAMETERS nHandle
	
	     h = SQLCANCEL(nHandle)
	
	     RETURN h
	
	     **************************************
	     *   Procedure:  DBCOLS
	     *   Remaps dbcols() -> SQLCOLUMNS()
	     **************************************
	     FUNCTION dbcols
	     PARAMETERS nHandle, cTable, cColForm, cResultSet
	
	     DO CASE
	
	        CASE PARAMETERS() = 2
	           h = SQLCOLUMNS(nHandle, cTable)
	
	        CASE PARAMETERS() = 3
	           h = SQLCOLUMNS(nHandle, cTable, cColForm)
	
	        CASE PARAMETERS() = 4
	           h = SQLCOLUMNS(nHandle, cTable, cColForm, cResultSet)
	
	     ENDCASE
	
	     RETURN h
	
	     **************************************
	     *   Procedure:  DBCONNECT
	     *   Remaps dbconnect() -> SQLCONNECT()
	     **************************************
	     FUNCTION dbconnect
	     PARAMETERS DataSource, cUserID, cPass, cCString
	
	     DO CASE
	
	        CASE PARAMETERS() = 3
	           h = SQLCONNECT(DataSource, cUserID, cPass)
	
	        CASE PARAMETERS() = 4
	           h = SQLCONNECT(DataSource, UserID, cPass, cCString)
	
	     ENDCASE
	     RETURN h
	
	     ******************************************
	     *   Procedure:  DBDISCONN
	     *   Remaps dbdisconn() -> SQLDISCONN()
	     ******************************************
	     FUNCTION dbdisconn
	     PARAMETERS nHandle
	
	     h = SQLDISCONN(nHandle)
	
	     RETURN h
	
	     ******************************************
	     *   Procedure:  DBEXEC
	     *   Remaps dbexec() -> SQLEXEC
	     ******************************************
	     FUNCTION dbexec
	     PARAMETERS nHandle, cSQLCommand, cCursorName
	
	     DO CASE
	
	        CASE PARAMETERS() = 2
	           h = SQLEXEC(nHandle, cSQLCommand)
	
	        CASE PARAMETERS() = 3
	           h = SQLEXEC(nHandle, cSQLCommand, cCursorName)
	
	     ENDCASE
	
	     RETURN h
	
	     ******************************************
	     *   Procedure:  DBGETOPT
	     *   Remaps dbgetopt() -> SQLGETPROP
	     ******************************************
	     FUNCTION dbgetopt
	     PARAMETERS nHandle, cSetting
	
	     h = SQLGETPROP(nHandle, cSetting)
	
	     RETURN h
	
	     *******************************************
	     *   Procedure:  DBMORERES
	     *   Remaps dbmoreres() -> SQLMORERESULTS
	     *******************************************
	     FUNCTION dbmoreres
	     PARAMETERS nHandle, cExpression
	
	     h = SQLMORERESULTS(nHandle)
	
	     RETURN h
	
	     ******************************************
	     *   Procedure:  DBSETOPT
	     *   Remaps dbsetopt() -> SQLSETPROP
	     ******************************************
	     FUNCTION dbsetopt
	     PARAMETERS nHandle, cSetting, eExpression
	
	     h = SQLSETPROP(nHandle, cSetting, eExpression)
	
	     RETURN h
	
	     ******************************************
	     *   Procedure:  DBTABLES
	     *   Remaps dbtables() -> SQLTABLES
	     ******************************************
	     FUNCTION dbtables
	     PARAMETERS nHandle, cTableType, cResultName
	
	     DO CASE
	
	        CASE PARAMETERS() = 2
	           h = SQLTABLES(nHandle, cTableType)
	
	        CASE PARAMETERS() = 3
	           h = SQLTABLES(nHandle, cTableType, cResultName)
	
	     ENDCASE
	
	     RETURN h
	
	     ***********
	     ** \EOF ***
	     ***********
	
	Additional query words: VFoxWin 3.00
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
