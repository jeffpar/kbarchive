---
layout: page
title: "Q177135: PRB: Do not Call ODBC Within DLL_PROCESS_DETACH Case"
permalink: kb/177/Q177135/
---

## Q177135: PRB: Do not Call ODBC Within DLL_PROCESS_DETACH Case

	Article: Q177135
	Product(s): Microsoft C Compiler
	Version(s): 2.5,2.6,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDatabase kbMFC kbODBC kbVC kbVC500 kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC2
	Last Modified: 24-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Data Access Components versions 2.5, 2.6 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using the MFC Database classes or calling ODBC functions within the
	DLL_PROCESS_DETACH case of the DllMain() function, an access violation can occur
	especially if the DLL links to the MFC DLL (which does a LoadLibrary call to
	call ODBC). For example, calling CDatabase::Close() from the destructor of a
	global static object in the DLL causes an access violation error in ODBC32.DLL.
	
	CAUSE
	=====
	
	Because there are no guarantees of the order by which DLLs receive the
	DLL_PROCESS_DETACH case, it is possible that the ODBC handle memory can be freed
	before your DLL's DllMain() function gets called with DLL_PROCESS_DETACH.
	Therefore, any calls to ODBC using those handles can cause a crash.
	
	RESOLUTION
	==========
	
	Do not call ODBC functions or use the MFC ODBC classes in destructors of global
	objects within DLLs or in the DllMain() DLL_PROCESS_DETACH case.
	
	Instead use a termination function in the DLL which the application can call
	before exiting.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: crash hang hung halts GPF AV inproc kbmfc kbVC500 kbVC600
	
	======================================================================
	Keywords          : kbDatabase kbMFC kbODBC kbVC kbVC500 kbVC600 kbGrpDSVCDB kbGrpDSMDAC kbDSupport kbMDAC250 kbMDAC260 
	Technology        : kbVCsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbMDAC260 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :2.5,2.6,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
