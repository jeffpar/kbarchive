---
layout: page
title: "Q135630: DOC: Incorrect Prototype &amp; Memory Allocation for PX_Blob"
permalink: /kb/135/Q135630/
---

## Q135630: DOC: Incorrect Prototype &amp; Memory Allocation for PX_Blob

	Article: Q135630
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbole kbdocfix kbCtrl
	Last Modified: 02-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft OLE Control Developer's Kit (CDK), versions 1.0, 1.1, 1.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the prototype of PX_Blob in the CDK Books Online is shown
	incorrectly as:
	
	     BOOL PX_Blob( CPropExchange* pPX, LPCTSTR pszPropName,
	   
	        HGLOBAL*& hBlob, HGLOBAL hBlobDefault = NULL );
	
	The actual prototype as shown in the CDK source code in Afxctl.h is:
	
	     BOOL PX_Blob(CPropExchange* pPX, LPCTSTR pszPropName, HGLOBAL& hBlob,
	   
	        HGLOBAL hBlobDefault = NULL);
	
	MORE INFORMATION
	================
	
	Note that the third parameter is incorrectly listed as HGLOBAL*& hBlob in
	the documentation and should instead be HGLOBAL& hBlob as shown in the
	actual prototype.
	
	There is also another error in the PX_Blob remarks section of the documentation.
	It states the following incorrect information:
	
	  Note that PX_Blob will allocate memory, using the new operator, when loading
	  BLOB-type properties. Therefore, the destructor of your control should call
	  delete on any BLOB-type property pointers to free up any memory allocated to
	  your control.
	
	This correct documentation should be as follows:
	
	  Note that PX_Blob will allocate memory, using the Windows GlobalAlloc API,
	  when loading BLOB-type properties. You are responsible for freeing this
	  memory. Therefore, the destructor of your control should call GlobalFree on
	  any BLOB-type property handles to free up any memory allocated to your
	  control.
	
	The problems described in this article were fixed in Visual C++, 32-bit edition,
	version 4.0 and later.
	
	Additional query words: 1.50 1.51 1.52 2.00 2.10 2.20 4.00
	
	======================================================================
	Keywords          : kbole kbdocfix kbCtrl 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	
	=============================================================================
	
