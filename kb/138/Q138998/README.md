---
layout: page
title: "Q138998: HOWTO: How to Use SQL Pass-Through to Send Results to a Table"
permalink: /kb/138/Q138998/
---

## Q138998: HOWTO: How to Use SQL Pass-Through to Send Results to a Table

	Article: Q138998
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxPro 2.x Connectivity Kit allows you to send the results of the DBExec()
	function to a table by using the DBSetOpt() function and setting the UseTable
	property of the connection to 1. Visual FoxPro has no property that causes the
	results of the SQLExec() function to be sent to a table.
	
	MORE INFORMATION
	================
	
	The results of the SQLExec() function are always returned to a cursor. The
	default cursor name is Sqlresult. To send the results to a table, use the COPY
	TO command after calling the SQLExec() function. The COPY TO command creates a
	table from the Sqlresult cursor.
	
	The following example creates a table called Temp.dbf from the results of a
	SQLExec() function. Create a new program containing the following code:
	
	     datasrcname='test'    &&Data Source Name - from ODBC administrator
	     userid='sa'           &&User ID
	     pword=''              &&User Password
	
	     ** Establish a connection **
	     handle=SQLConnect(datasrcname, userid, pword)
	
	     ** Execute query **
	     =SQLExec(handle, 'select * from authors')
	
	     ** Copy results to a table **
	     COPY TO TEMP.DBF
	
	     ** Close the cursor **
	     SELECT Sqlresult
	     USE
	
	     ** End the connection **
	     =SQLDisconnect(handle)
	
	When this program is run, the results of the SQLEXEC() function are stored in the
	Temp.dbf table.
	
	Additional query words: VfoxWin kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600
	
	======================================================================
	Keywords          : kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
