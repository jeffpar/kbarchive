---
layout: page
title: "Q149137: FIX: ODBC Long Binary Functions Use SQL_NO_TOTAL Incorrectly"
permalink: kb/149/Q149137/
---

## Q149137: FIX: ODBC Long Binary Functions Use SQL_NO_TOTAL Incorrectly

	Article: Q149137
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1
	Operating System(s): 
	Keyword(s): kbDatabase kbMDAC kbMFC kbODBC kbVC kbVC400bug kbVC420fix kbGrpDSVCDB kbDSupport kbMDAC
	Last Modified: 25-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running an application built using the MFC ODBC classes from Visual C++ 4.0 or
	4.1 to retrieve CLongBinary data from a database may result in data truncation.
	If you're using Visual C++ 4.1, the truncation is only evident in release
	builds; debug builds work as expected.
	
	CAUSE
	=====
	
	There is a programming error in the MFC code that can lead to this behavior. MFC
	expects SQL_NO_TOTAL to be the return code of the ::SQLGetData() ODBC API.
	SQL_NO_TOTAL is used by some drivers when retrieving long binary data. In
	reality, SQL_NO_TOTAL will be returned as a value of one of the parameters of
	::SQLGetData().
	
	As a consequence of the bug, a datasource that uses a driver that returns
	SQL_NO_TOTAL may experience truncation of long binary data. MFC will only call
	SQLGetData once rather than in a loop until all data is retrieved as is expected
	by ODBC.
	
	Refer to the MFC source code (Dbrfx.cpp in Mfc\Src), and look at the do while
	loop in the function CFieldExchange::GetLongBinaryData() for more details.
	
	In MFC 4.1, a fix was implemented, but it was enclosed in conditional compilation
	directives that only compile the code in debug builds.
	
	RESOLUTION
	==========
	
	
	A new implementation of RFX_LongBinary that avoids this defect in the MFC code is
	available to assist you in correcting this problem. Simply download the file as
	described below, run the .exe to expand the source files, and then incorporate
	them into your project. Replace all occurrences of RFX_LongBinary with the new
	RFX_LongBinary_Alloc and rebuild.
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  Alloc.exe (http://support.microsoft.com/download/support/mslfiles/Alloc.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32- bit Edition
	version 4.2.
	
	Additional query words: 4.00 4.10 4.20
	
	======================================================================
	Keywords          : kbDatabase kbMDAC kbMFC kbODBC kbVC kbVC400bug kbVC420fix kbGrpDSVCDB kbDSupport kbMDACNoSweep 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
