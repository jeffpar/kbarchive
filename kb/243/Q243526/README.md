---
layout: page
title: "Q243526: DOC: Usage of BufferLength in SQLGetDiagRecW"
permalink: /kb/243/Q243526/
---

## Q243526: DOC: Usage of BufferLength in SQLGetDiagRecW

	Article: Q243526
	Product(s): Open Database Connectivity (ODBC)
	Version(s): WINDOWS:3.5,3.51,3.6,3.7
	Operating System(s): 
	Keyword(s): kbdocfix kbODBC350 kbODBC351 kbODBC360 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbODBC370
	Last Modified: 23-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Open Database Connectivity, versions 3.5, 3.51, 3.6, 3.7 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The ODBC Specification describes Bufferlength for SQLGetDiagRec as follows:
	
	  BufferLength
	  [Input]
	  Length (in bytes) of the *MessageText buffer. There is no maximum length of
	  the diagnostic message text. If the value returned in *MessageText is of a
	  Unicode string (when calling SQLGetDiagRecW), the BufferLength argument must
	  be an even number.
	
	The above statement is wrong as the Bufferlength takes in the number of Unicode
	Characters instead when using SQLGetDiagRecW as the ODBC Spec also says:
	
	Unicode functions that always return or take strings or length arguments are
	passed as count-of-characters. For functions that return length information for
	server data, the display size and precision are described in number of
	characters. When a length (transfer size of the data) could refer to string or
	non-string data, the length is described in octet lengths. For example,
	SQLGetInfoW will still take the length as count-of-bytes, but SQLExecDirectW
	uses count-of-characters
	
	For example,if a typical application that expects 100 bytes (50 Unicode
	characters) of error message passes the Bufferlength as 100, as many characters
	are returned instead.
	
	The application should carefully allocate as much memory as necessary. (Twice the
	value specified for the buffer length.) In the example above, the memory
	allocated should be 200 bytes for holding 100 Unicode characters.
	
	Additional query words: SQLGetDiagRec, SQLGetDiagRecW
	
	======================================================================
	Keywords          : kbdocfix kbODBC350 kbODBC351 kbODBC360 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbODBC370 
	Technology        : kbAudDeveloper kbODBCSearch kbODBC360 kbODBC350 kbODBC351 kbODBC370
	Version           : WINDOWS:3.5,3.51,3.6,3.7
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
