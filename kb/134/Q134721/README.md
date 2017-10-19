---
layout: page
title: "Q134721: HOWTO: How to Handle Visual FoxPro Connectivity Errors w/o DBERR"
permalink: /kb/134/Q134721/
---

## Q134721: HOWTO: How to Handle Visual FoxPro Connectivity Errors w/o DBERR

	Article: Q134721
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DBERROR() function from previous versions no longer exists nor does an
	equivalent SQLERROR() function that you might expect to find. There are still
	ways to find out the same information though. The function AERROR() is used
	throughout the product for retrieving error information and the SQLSETPROP()
	function also gives us some control over the SQL error messages specifically.
	
	MORE INFORMATION
	================
	
	First Method
	------------
	
	Using Aerror() will create an array containing the error code and error message.
	It could be implemented as follows for catching the full ODBC error that occurs
	when connecting to a datasource :
	
	  ****************************
	  *  Example of using AERROR()
	  *
	  dsource='test'
	  Handle=SQLCONNECT(dsource,"","")
	  IF HANDLE<0
	       retval=AERROR(atmp)
	       errval=atmp(1,1)
	       errmsg=atmp(1,2)
	       WAIT WINDOW STR(ERRVAL)+": "+ERRMSG
	  ENDIF
	
	Second Method
	-------------
	
	Setting up similar error trapping would be to use the SQLSetProp() function to
	set the DispWarning property to True. This will actually be easier than the old
	DBError() function because once this is set the full ODBC error text will
	automatically be displayed without having to test the return value or having to
	fill variables and display them yourself. A connection handle of 0 sets this as
	a default for all subsequent connections.
	
	  ****************************
	  *  Example using SQLSETPROP()
	  *
	  retval=SQLSETPROP(0,"DispWarnings",.T.)
	  * The "0" parameter above creates a "dummy" channel to turn Dispwarnings on
	  dsource='test'
	  Handle=SQLCONNECT(dsource,"","") && Error returning line
	
	Additional query words: VFoxWin ck
	
	======================================================================
	Keywords          : kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbhowto
	
	=============================================================================
	
