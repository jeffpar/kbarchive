---
layout: page
title: "Q166474: INFO: VC_EXTRALEAN and WIN32_LEAN_AND_MEAN"
permalink: /kb/166/Q166474/
---

## Q166474: INFO: VC_EXTRALEAN and WIN32_LEAN_AND_MEAN

	Article: Q166474
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSVCCompiler
	Last Modified: 04-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To speed the build process, Visual C++ and the Windows Headers provide the
	following new defines:
	
	  VC_EXTRALEAN
	  WIN32_LEAN_AND_MEAN
	
	You can use them to reduce the size of the Win32 header files.
	
	MORE INFORMATION
	================
	
	VC_EXTRALEAN and WIN32_LEAN_AND_MEAN are used to exclude rarely-used services
	from Windows headers. VC_EXTRALEAN can only be used in MFC projects, but
	WIN32_LEAN_AND_MEAN can be used in any project.
	
	VC_EXTRALEAN defines the following in AFXV_W32.h:
	
	  WIN32_EXTRA_LEAN
	  NOSERVICE
	  NOMCX
	  NOIME
	  NOSOUND
	  NOCOMM
	  NOKANJI
	  NORPC
	  NOPROXYSTUB
	  NOIMAGE
	  NOTAPE
	
	WIN32_EXTRA_LEAN does not do anything. Please refer to Windows.h for information
	concerning the NOxxx symbols that are being defined.
	
	Newly-generated Visual C++ 5.0 and later AppWizard applications automatically
	benefit from VC_EXTRALEAN. You can also manually define VC_EXTRALEAN to speed
	the build process of many older MFC applications.
	
	WIN32_LEAN_AND_MEAN: Windows Headers use this symbol to exclude rarely-used
	header files. Please refer to Windows.H to determine the files that will be
	excluded when this symbol is defined. Since MFC defines WIN32_LEAN_AND_MEAN, all
	MFC projects automatically use it.
	
	Non-MFC C++ and C applications can define WIN32_LEAN_AND_MEAN and any applicable
	NOservice defines, such as NOSOUND (see DevStudio\Vc\include\Windows.h), to
	reduce their build times.
	
	To add these defines, from the Project menu, choose Settings. The Projects
	settings dialog box appears. Click the C/C++ tab. In the Category list, select
	Preprocessor. Add the desired definitions to the Preprocessor Definitions box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSVCCompiler 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	
