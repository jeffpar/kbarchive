---
layout: page
title: "Q150100: DOC:Technote 64 Incorrect About ThreadingModel Registration"
permalink: kb/150/Q150100/
---

## Q150100: DOC:Technote 64 Incorrect About ThreadingModel Registration

	Article: Q150100
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.1,4.2
	Operating System(s): 
	Keyword(s): kbole kbdocfix kbdocerr kbActiveX kbAutomation kbCOMt kbCtrlCreate kbInprocSvr kbMFC kb
	Last Modified: 03-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, version 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Technote 64 states the following:
	
	  Controls that support apartment-model threading should indicate this
	  capability in the registry, by adding the key ThreadingModel with a
	  value of Apartment under their class ID registry entry. To cause this
	  key to be automatically registered for your control, pass the
	  afxRegApartmentThreading flag in the sixth parameter to
	  AfxOleRegisterControlClass.
	
	
	This information is not correct. Apartment-model threading is not supported by
	MFC in Microsoft Visual C++ for Windows, version 4.1. The
	afxRegApartmentThreading value is not used in this version and the registry is
	not modified to reflect apartment-model threading support.
	
	This documentation error was fixed in Visual C++ version 5.0. The following text
	was added to Technote 64 in Visual C++ 5.0:
	
	  Note that apartment-model threading is only supported in Visual C++
	  versions 4.2 or later.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbdocfix kbdocerr kbActiveX kbAutomation kbCOMt kbCtrlCreate kbInprocSvr kbMFC kbVC410bug kbVC420bug kbVC500fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.1,4.2
	Solution Type     : kbfix
	
	=============================================================================
	
