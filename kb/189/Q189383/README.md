---
layout: page
title: "Q189383: PRB: ASSERT(hbrBtnFace != NULL) In AuxData.cpp"
permalink: /kb/189/Q189383/
---

## Q189383: PRB: ASSERT(hbrBtnFace != NULL) In AuxData.cpp

	Article: Q189383
	Product(s): Microsoft C Compiler
	Version(s): 5.0
	Operating System(s): 
	Keyword(s): kbDLL kbMFC kbResource kbVC500 kbGrpDSMFCATL kbArchitecture
	Last Modified: 07-JAN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ASSERT can occur when a non-MFC application tries to load, free, and again
	load an MFC Regular DLL. The assert occurs in the Auxdata.cpp file as a result
	of a failed call to GetSysColorBrush. The specific code is:
	
	     hbrBtnFace = ::GetSysColorBrush(COLOR_BTNFACE);
	     ASSERT(hbrBtnFace != NULL);
	
	The ASSERT statement is at line 139 of Auxdata.cpp in MFC version 4.2 that ships
	with Visual C++ 5.0.
	
	CAUSE
	=====
	
	User32.dll leaks resources, which causes ::GetSysColorBrush to fail.
	
	RESOLUTION
	==========
	
	If a non-MFC application intends to load and free a Regular DLL, make sure that
	User32.dll is not also being unloaded when FreeLibrary is used to free the DLL.
	To do so, you can call LoadLibrary to load User32.dll once in the application,
	before the application loads and frees the Regular DLL.
	
	STATUS
	======
	
	Microsoft is researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	In its initialization process, MFC loads User32.dll. The ASSERT occurs when the
	Regular DLL is the only module in an application that uses User32.dll (including
	the application). If this application loads, frees, and again loads this DLL,
	the ASSERT occurs because User32.dll does not free all of its resources when it
	is unloaded.
	
	As a result, the data table used to store the value for the symbol COLOR_BTNFACE
	is corrupted. When the Regular DLL is loaded for the second time,
	GetSysColorBrush returns NULL.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q171145 PRB: Resource Leaks in System Components
	
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Isaac L. Varon, Microsoft Corporation
	
	
	Additional query words: GDI kbDLL kbKernBase
	
	======================================================================
	Keywords          : kbDLL kbMFC kbResource kbVC500 kbGrpDSMFCATL kbArchitecture 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0
	Issue type        : kbprb
	
	=============================================================================
	
