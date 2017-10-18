---
layout: page
title: "Q130869: HOWTO: Avoid Error LNK2001 Unresolved External Using DEFINE_GUID"
permalink: kb/130/Q130869/
---

## Q130869: HOWTO: Avoid Error LNK2001 Unresolved External Using DEFINE_GUID

	Article: Q130869
	Product(s): Microsoft C Compiler
	Version(s): WinNT:2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbGenInfo kbVC kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbArtTypeI
	Last Modified: 28-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A GUID must be initialized exactly once. For this reason, there are two
	different versions of the DEFINE_GUID macro. One version just declares an
	external reference to the symbol name. The other version actually initializes
	the symbol name to the value of the GUID. If you receive an LNK2001 error for
	the symbol name of the GUID, the GUID was not initialized.
	
	You can make sure your GUID gets initialized in one of two ways:
	
	- If you are using precompiled header files, include the INITGUID.H header file
	  before defining the GUID in the implementation file where it should be
	  initialized. (AppWizard-generated MFC projects use precompiled headers by
	  default.)
	
	- If you are not using precompiled headers, define INITGUID before including
	  OBJBASE.H. (OBJBASE.H is included by OLE2.H.)
	
	MORE INFORMATION
	================
	
	Here is the definition of DEFINE_GUID as it appears in OBJBASE.H:
	
	        #ifndef INITGUID
	        #define DEFINE_GUID(name, l, w1, w2, b1, b2, b3, \ 
	                                  b4, b5, b6, b7, b8)
	            EXTERN_C const GUID FAR name
	        #else
	
	        #define DEFINE_GUID(name, l, w1, w2, b1, b2, b3, \ 
	                                  b4, b5, b6, b7, b8)
	           EXTERN_C const GUID name \ 
	              = { l, w1, w2, { b1, b2,  b3,  b4,  b5,  b6,  b7,  b8 } }
	        #endif // INITGUID
	
	Note that if the symbol INITGUID is not defined, DEFINE_GUID simply defines an
	external reference to the name.
	
	In INITGUID.H, you find (among other things):
	
	        #undef DEFINE_GUID
	
	        // Other code . . .
	
	        #define DEFINE_GUID(name, l, w1, w2, b1, b2, b3, \ 
	                                  b4, b5, b6, b7, b8)
	           EXTERN_C const GUID __based(__segname("_CODE")) name \ 
	                    = { l, w1, w2, { b1, b2,  b3,  b4,  b5,  b6,  b7,  b8 } }
	
	By including INITGUID.H after OBJBASE.H, DEFINE_GUID is modified to actually
	initialize the GUID.
	
	NOTE: It is important to make sure that this is done exactly once for each DLL or
	EXE. If you try to initialize the GUID in two different implementation files and
	then link them together, you get this error:
	
	  LNK2005 <symbol> already defined.
	
	======================================================================
	Keywords          : kbole kbGenInfo kbVC kbVC200 kbVC210 kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbArtTypeINF 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVC500Search
	Version           : WinNT:2.0,2.1,4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
