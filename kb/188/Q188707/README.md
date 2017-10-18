---
layout: page
title: "Q188707: INFO: Visual C++ and the Year 2000, Years that Cause an Overflow"
permalink: kb/188/Q188707/
---

## Q188707: INFO: Visual C++ and the Year 2000, Years that Cause an Overflow

	Article: Q188707
	Product(s): Microsoft C Compiler
	Version(s): 4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbCRT kbDateTime kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSVCCompiler
	Last Modified: 02-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To determine whether applications developed with Visual C++ will encounter
	problems in the year 2000, you must consider the following three items:
	
	1. Display format and user input of dates.
	
	2. Temporary storage in the program. This includes variables and function
	  parameters.
	
	3. Long-term storage such as a database or file.
	
	Visual C++ is a flexible development tool. You can create your own date formats
	for display, input, and storage. This article can only comment on the APIs and
	data types supplied with the various technologies shipping with Visual C++. You
	should analyze your application for potential year 2000 problems in all other
	aspects of your programming.
	
	MORE INFORMATION
	================
	
	Following are the years that will cause an overflow in the date for each given
	technology. For the database APIs, please be aware that database drivers may
	reformat the date types to meet the needs of the target database. You must check
	the format of date types for your target databases.
	
	  YEAR    Technology
	  ----    ----------
	  2038    C Run-time (CRT) time functions and data types
	  2038    MFC CTime
	  9999    MFC COleDateTime
	  9999    ADO, RDO, DAO
	  16383   ODBC
	  2099    Win32 time functions and data types
	  2108    Win32 file time functions and data types
	  9999    OLE data types (such as: VARIANT, DATE)
	
	Additional query words: Y2K DATE struct tm FILETIME SYSTEMTIME SQL_TIMESTAMP_STRUCT SQL_DATE_STRUCT
	
	======================================================================
	Keywords          : kbYear2000 kbCRT kbDateTime kbMFC kbVC420 kbVC500 kbVC600 kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbAudDeveloper kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
