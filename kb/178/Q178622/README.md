---
layout: page
title: "Q178622: PRB: Thai resource problem on VC++"
permalink: /kb/178/Q178622/
---

## Q178622: PRB: Thai resource problem on VC++

	Article: Q178622
	Product(s): Microsoft C Compiler
	Version(s): 4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbIntl kbVC400 kbVC500 kbVC600 kbIntlDev kbGrpDSTools
	Last Modified: 04-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Visual C++ 4.x and later, you can open a file, such as an executable or a
	DLL, to edit its resources. You can choose a resource such as a dialog box,
	right- click the dialog box to get its properties, and then choose a language in
	a pull-down list. However, Thai, the language for Thailand, is not in this list.
	
	CAUSE
	=====
	
	Thai is a new language being added to the system, and therefore it will take
	awhile for the changes to be added to the appropriate products.
	
	RESOLUTION
	==========
	
	The current Software Development Kit (SDK) (from Visau C++ or MSDN) has all the
	support for the Thai language. You can search for the "THAI" string of the
	header files in the include directory and see all the Thai-specific constants
	and #define.
	
	Until the Thai language resource is supported in Visual C++, developers can
	manually set the property of an object to the Thai language by manually typing
	in Thai specifics. Developers can do the same on NT 4.0 Thai.
	
	STATUS
	======
	
	Microsoft will post new information here in the Microsoft Knowledge Base as it
	becomes available.
	
	MORE INFORMATION
	================
	
	The following is a simple example how developers can manually set the property
	of an object to Thai language. Manually open the resource file and modify it
	similar to the example below. If you do not have the source, then you must run V
	isual C++ under Thai Windows 95 and select the default language.
	
	  /////////////////////////////////////////////////////////////////////////// 
	  // Thai resources
	
	  #if !defined(AFX_RESOURCE_DLL) || defined(AFX_TARG_ENU)
	  #ifdef _WIN32
	  LANGUAGE LANG_THAI
	  #pragma code_page(874)
	  #endif //_WIN32
	
	  /////////////////////////////////////////////////////////////////////////// 
	  // 
	  // Bitmap
	  // 
	
	  IDB_BITMAP             BITMAP  DISCARDABLE     "bitmap.bmp"
	  #endif    // Thai resources
	  /////////////////////////////////////////////////////////////////////////// 
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbIntl kbVC400 kbVC500 kbVC600 kbIntlDev kbGrpDSTools 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
