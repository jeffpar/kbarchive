---
layout: page
title: "Q152254: BUG: LNK2001 on Operator&gt;&gt; with Class from MFC Extension DLL"
permalink: kb/152/Q152254/
---

## Q152254: BUG: LNK2001 on Operator&gt;&gt; with Class from MFC Extension DLL

	Article: Q152254
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbProgramming kbDLL kbMFC kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug k
	Last Modified: 07-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When attempting to build an application that uses classes from an MFC extension
	DLL, the linker reports an error of the form:
	
	  
	
	  mainfrm.obj : error LNK2001: unresolved external symbol
	      "class CArchive & __stdcall operator>>
	          (class CArchive &,class CClassInExtDLL * &)"
	              (??5@YGAAVCArchive@@AAV0@AAPAVCDummyDoc@@@Z)
	
	Specifically, this problem occurs for code that attempts to use the >>
	operator to serialize one of the extension DLL classes that use the
	DECLARE_SERIAL macro.
	
	CAUSE
	=====
	
	If an exported class is declared in an extension DLL and is made serializable by
	the use of the macros DECLARE_SERIAL and IMPLEMENT_SERIAL, the global function:
	
	     friend CArchive& AFXAPI operator>>(CArchive& ar, CMyObject* &pOb);
	
	is not automatically exported along with the class. Therefore, if an application
	tries to serialize an object of that class type by the use of the >>
	operator, a LNK2001 unresolved external error occurs on operator >>.
	
	RESOLUTION
	==========
	
	Create a new macro based on the DECLARE_SERIAL macro:
	
	     #define DECLARE_SERIAL_EXTDLL(class_name)   \ 
	             _DECLARE_DYNCREATE(class_name)      \ 
	             AFX_EXT_API friend CArchive& AFXAPI \ 
	             operator>>(CArchive& ar, class_name* &pOb);
	
	After defining this macro, use this new DECLARE_SERIAL_EXTDLL macro in place of
	DECLARE_SERIAL in the class declaration. Rebuild the DLL and link its new import
	library with the application.
	
	In this resolution, the AFX_EXT_API prefix resolves the LNK2001 error by
	explicitly exporting the function operator>> when building the extension
	DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	In order to make a class serializable by the use of a CArchive object, the class
	must be derived from CObject and must implement the DECLARE_SERIAL and
	IMPLEMENT_SERIAL macros. These macros are needed because they define an
	overloaded function, operator>>, explicitly for that class. In a case
	where that class is defined in an extension DLL and is exported by using the
	AFX_EXT_CLASS macro, the overloaded function, operator>>, does not get
	exported along with the class. Thus, if the main application instantiates an
	object of that class type and tries to serialize that object by the use of a
	CArchive object, a LNK2001 unresolved external error will occur.
	
	Sample Code
	-----------
	
	Declare your class in the extension DLL this way:
	
	In the header (.h) file for CMyObject:
	
	     #define DECLARE_SERIAL_EXTDLL(class_name)   \ 
	             _DECLARE_DYNCREATE(class_name)      \ 
	             AFX_EXT_API friend CArchive& AFXAPI \ 
	             operator>>(CArchive& ar, class_name* &pOb);
	
	     class AFX_EXT_CLASS CMyObject : public CObject
	     {
	         DECLARE_SERIAL_EXTDLL(CMyObject)
	         ...
	
	     };
	
	     In the implementation (.cpp) file for CMyObject:
	
	     ...
	
	     IMPLEMENT_SERIAL(CMyObject, CObject, YOUR_SCHEMA_NUMBER_HERE)
	
	     ...
	
	REFERENCES
	==========
	
	For additional information on serialization and how to export classes from
	extension DLL's, please see:
	
	- MFC TechNote #2 in the Books Online
	
	- MFC TechNote #33 in the Books Online
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q131946 PRB: Bad Pointer from RUNTIME_CLASS with Class from _AFXDLL
	
	Additional query words: kbvc400bug kbvc410bug kbvc420bug kbvc500bug kbvc600bug
	
	======================================================================
	Keywords          : kbProgramming kbDLL kbMFC kbVC kbVC400bug kbVC410bug kbVC420bug kbVC500bug kbVC600bug kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbbug
	
	=============================================================================
	
