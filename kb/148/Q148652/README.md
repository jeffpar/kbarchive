---
layout: page
title: "Q148652: PRB: LNK2005 Errors When Link C Run-Time Libraries Are Linked Be"
permalink: kb/148/Q148652/
---

## Q148652: PRB: LNK2005 Errors When Link C Run-Time Libraries Are Linked Be

	Article: Q148652
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,5.0,6.0
	Operating System(s): 
	Keyword(s): kberrmsg kbGenInfo kbLinker kbVC kbVC400 kbVC410 kbVC500 kbVC600 kbDSupport kbGrpDSVCCo
	Last Modified: 13-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the C Run-Time (CRT) library and Microsoft Foundation Class (MFC) libraries
	are linked in the wrong order, LNK2005 errors similar to the following may
	occur:
	
	  nafxcwd.lib(afxmem.obj) : error LNK2005:
	  "void * __cdecl operator new(unsigned int)"(??2@YAPAXI@Z) already
	  defined in LIBCMTD.lib(new.obj)
	
	  nafxcwd.lib(afxmem.obj) : error LNK2005:
	  "void __cdecl operator delete(void *)"(??3@YAXPAX@Z) already defined
	  in LIBCMTD.lib(dbgnew.obj)
	
	  nafxcwd.lib(afxmem.obj) : error LNK2005:
	  "void * __cdecl operator new(unsigned int,int,char const *,int)"
	  (??2@YAPAXIHPBDH@Z) already defined in LIBCMTD.lib(dbgnew.obj)
	
	  mfcs40d.lib(dllmodul.obj): error LNK2005: _DllMain@12 already defined in
	  MSVCRTD.LIB (dllmain.obj)
	
	  mfcs42d.lib(dllmodul.obj): error LNK2005: _DllMain@12 already defined in
	  msvcrtd.lib(dllmain.obj)
	
	CAUSE
	=====
	
	The CRT libraries use weak external linkage for the new, delete, and DllMain
	functions. The MFC libraries also contain new, delete, and DllMain functions,
	which requires MFC to be linked before the CRT libraries.
	
	
	RESOLUTION
	==========
	
	There are two ways to resolve this problem. The first solution involves forcing
	the linker to link the libraries in the correct order. The second solution
	allows you to find the module that is causing the problem and correct it.
	
	Solution One: Force Linker to Link Libraries in Correct Order
	-------------------------------------------------------------
	
	1. Open the Project Settings dialog box by clicking Settings on the Build menu.
	
	2. In the Settings For view, click to select (highlight) the project
	  configuration that is getting the link errors.
	
	3. Click the Link tab.
	
	4. Click to select INPUT in the Category combo box.
	
	5. In the Libraries to Ignore edit box, insert the library names (for example,
	  Nafxcwd.lib Libcmtd.lib).
	
	  NOTE: The linker command-line equivalent in /NOD:<library name>.
	
	6. In the Object/library Modules edit box, insert the library names. You must
	  ensure that these are listed in order and as the first two libraries in the
	  line (for example, Nafxcwd.lib Libcmtd.lib).
	
	To set this options in Visual C++ .NET, read the online help for the topic
	"Setting Visual C++ Project Properties".
	
	Solution Two: Locate and Correct the Problem Module
	---------------------------------------------------
	
	Perform the following steps to view the current library link order:
	
	1. Open the Project Settings dialog box by clicking Settings on the Build menu.
	
	2. In the Settings For view, click to select (highlight) the project
	  configuration that is getting the link errors.
	
	3. Click the Link tab.
	
	4. Type the following in the Project Options dialog box:
	
	  "/verbose:lib" (without the quotation marks)
	
	5. Rebuild your project. The libraries will be listed in the output window
	  during the linking process.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When you use the MFC libraries, you must make sure they are linked before the
	CRT library. This can be done by ensuring that every file in your project
	includes Msdev\Mfc\Include\Afx.h first, either directly (#include <Afx.h>)
	or indirectly (#include <Stdafx.h>). The Afx.h include file forces the
	correct order of the libraries, by using the #pragma comment
	(lib,"<libname>") directive.
	
	If the source file has a .c extension, or the file has a .cpp extension but does
	not use MFC, you can create and include a small header file (Forcelib.h) at the
	top of the module. This new header ensures the correct library search order.
	
	Visual C++ does not contain this header file, but you can easily create this file
	by performing the following steps:
	
	1. Open Msdev\Mfc\Include\Afx.h.
	
	2. Select the lines between #ifndef _AFX_NOFORCE_LIBS and #endif
	  //!_AFX_NOFORCE_LIBS.
	
	3. Copy the selection to the Windows Clipboard.
	
	4. Create a new text file.
	
	5. Paste the contents of the Clipboard into this new file.
	
	6. Save the file as Msdev\Mfc\Include\Forcelib.h.
	
	
	Additional query words: nafxcwd
	
	======================================================================
	Keywords          : kberrmsg kbGenInfo kbLinker kbVC kbVC400 kbVC410 kbVC500 kbVC600 kbDSupport kbGrpDSVCCompiler kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC500 kbVC600 kbVC32bitSearch kbVCNET kbVC500Search
	Version           : :4.0,4.1,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
