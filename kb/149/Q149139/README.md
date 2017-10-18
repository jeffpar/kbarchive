---
layout: page
title: "Q149139: FIX: Visual C++ Breaks ODBC CLongBinary w/ GlobalReAll Misuse"
permalink: kb/149/Q149139/
---

## Q149139: FIX: Visual C++ Breaks ODBC CLongBinary w/ GlobalReAll Misuse

	Article: Q149139
	Product(s): Microsoft C Compiler
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbfile kbDatabase kbMFC kbODBC kbVC kbVC400bug kbVC410fix kbGrpDSVCDB kbGrpDSMDAC kbDSu
	Last Modified: 19-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running an application built using the MFC ODBC classes from Visual C++ 4.0 to
	retrieve CLongBinary data from a database may result in one or both of the
	following behaviors when performing a recordset move or requery:
	
	- Access violations.
	
	- Out of memory exceptions.
	
	CAUSE
	=====
	
	There is a programming error in the MFC code that can lead to this behavior
	where GlobalReAlloc is used incorrectly. The return value of GlobalReAlloc is
	not used, so the global handle embedded in the CLongBinary recordset member
	variable becomes invalid if GlobalReAlloc moves the virtual memory block. Refer
	to the MFC source code, Dbrfx.cpp in Mfc\Src, and look at the use of
	GlobalReAlloc in the CFieldExchange::ReallocLongBinary() function.
	
	RESOLUTION
	==========
	
	A new implementation of RFX_LongBinary that avoids this defect in the MFC code
	is available to assist you in correcting this problem. Simply download the file
	as described below, run the .exe file to expand the source files, and then
	incorporate them into your project. Replace all occurrences of RFX_LongBinary
	with the new RFX_LongBinary_Alloc and rebuild.
	
	The following file is available for download from the Microsoft Software
	Library:
	
	  Alloc.exe (http://support.microsoft.com/download/support/mslfiles/Alloc.exe)
	
	For more information about downloading files from the Microsoft Software Library,
	please see the following article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ version 4.1.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbDatabase kbMFC kbODBC kbVC kbVC400bug kbVC410fix kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDACNoSweep 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
