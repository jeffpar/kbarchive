---
layout: page
title: "Q148641: DOC: Generic Categories of ODBC Errors"
permalink: /kb/148/Q148641/
---

## Q148641: DOC: Generic Categories of ODBC Errors

	Article: Q148641
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): kbdocfix kbvfp300 kbvfp300b kbvfp600 kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides a generic description for each of three categories of ODBC
	errors including typical causes and the type of error trapping that can be used
	to trap for that type of error.
	
	MORE INFORMATION
	================
	
	There are three types of error cases in connectivity issues with ODBC:
	
	- FoxPro Errors
	- ODBC Errors
	- Connectivity Warnings
	
	FoxPro Errors
	-------------
	
	These are typical Xbase errors that are not produced by ODBC. These errors
	include fundamental errors such as invalid parameters, insufficient memory, and
	so on. To trap these errors, you can use the traditional FoxPro error handling
	paradigm, including ON ERROR.
	
	ODBC Errors
	-----------
	
	These are errors returned from the ODBC Application Programming Interface (API).
	Any error returned from the ODBC API is recognized by Visual FoxPro as an error
	outside of the scope of the internal Visual FoxPro operation. An example of this
	is when an SQL function called within a Visual FoxPro application returns a -1
	indicating that the function failed. In this case, the value returned by the SQL
	function indicates failure and the errors are saved and made accessible by using
	AERROR(). The exact process is described in the following article in the
	Microsoft Knowledge Base:
	
	  Q134721 How to Handle Visual FoxPro Connectivity Errors w/o DBERROR()
	
	In this case, you can't use an ON ERROR routine.
	
	Connectivity Warnings
	---------------------
	
	These errors indicate situations where the ODBC-related function is completed,
	but the user is warned that an exception occurred. For example, some ODBC driver
	parameters were not set, conversion errors occurred while fetching data, the
	user canceled the function, multiple updates were produced by a single view row
	due to a non-unique key, and so on.
	
	Warnings bring up simple alert windows that you can disable by setting the
	DispWarning connection property to false (.F.). You can use the SQLSETPROP()
	function to set the DispWarning Property.
	
	These warnings are saved and are accessible by using AERROR(). The exact process
	is described in the following article in the Microsoft Knowledge Base:
	
	  Q134721 How to Handle Visual FoxPro Connectivity Errors w/o DBERROR()
	
	However, if multiple warnings occur in the same connectivity command or function,
	only the last one is available to AERROR(). This is different from ODBC errors,
	which are batched in ODBC and buffered by the Visual FoxPro error mechanism as a
	single error event.
	
	In this case, you can't use an ON ERROR routine.
	
	Additional query words: VfoxWin kbvfp300 kbvfp600
	
	======================================================================
	Keywords          : kbdocfix kbvfp300 kbvfp300b kbvfp600 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS:2.5,3.0,3.0b,6.0
	
	=============================================================================
	
