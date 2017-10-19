---
layout: page
title: "Q202197: BUG: Freeing Resource DLLs in ExitInstance Causes Error"
permalink: /kb/202/Q202197/
---

## Q202197: BUG: Freeing Resource DLLs in ExitInstance Causes Error

	Article: Q202197
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbDLL kbMFC kbVC kbVC500bug kbVC600bug kbOSWin95bug kbGrpDSMFCATL
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Windows 95, calling FreeLibrary() on the resource DLLs in the ExitInstance()
	function of the COleControl-derived class causes an application error.
	
	CAUSE
	=====
	
	This is a bug in Windows 95. When FreeLibrary() is called on resource DLLs,
	Windows 95 is running through the chain of DLLs in that process and looking for
	other DLLs that have a zero reference count. This causes other DLLs to be
	unloaded too soon.
	
	RESOLUTION
	==========
	
	Move the FreeLibrary() calls to the destructor function of the
	COleControl-derived class.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Use Control Wizard to generate an ActiveX control project.
	
	2. Create a non-MFC resource-ONLY DLL. Make sure you specify the /NOENTRY switch
	  in the Project, Settings dialog box.
	
	3. Call LoadLibrary in InitInstance() of the control's CWinApp-derived class.
	
	4. Call FreeLIbrary in ExitInstance() of the control's CWinApp-derived class.
	
	5. Build the resource-ONLY DLL and the ActiveX control projects. Make sure the
	  .dll file is being placed in the same directory as the .ocx file.
	
	6. At the MS-DOS prompt, change to the directory where both the .ocx and .dll
	  files are found. Type "REGSVR32 mycontrol.OCX".
	
	RESULTS: You will get an application error dialog box and the "control is
	registered successfully" dialog box.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Yeong-Kah
	Tam, Microsoft Corporation.
	
	
	Additional query words: ocx ExitInstance FreeLibrary LoadLibraryEx LoadLibrary
	
	======================================================================
	Keywords          : kbole kbDLL kbMFC kbVC kbVC500bug kbVC600bug kbOSWin95bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
