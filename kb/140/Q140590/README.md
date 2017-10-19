---
layout: page
title: "Q140590: FIX: Error in COleDispatchException Constructor"
permalink: /kb/140/Q140590/
---

## Q140590: FIX: Error in COleDispatchException Constructor

	Article: Q140590
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:1.5,1.51,1.52,4.0; winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbAutomation kbCOMt kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200bug k
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Standard Edition for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition for Windows, version 4.0 
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++, 32-bit Editions, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In an MFC application, AfxThrowOleDispatchException is used to throw an
	exception from within an OLE Automation function. When Microsoft Visual Basic is
	used as the automation client application, it will not be able to correctly
	interpret the error code passed to AfxThrowOleDispatchException.
	
	CAUSE
	=====
	
	AfxThrowOleDispatchException constructs and throws a COleDispatchException
	object, which is used to handle exceptions specific to the OLE IDispatch
	interface. The constructor of COleDispatchException incorrectly initializes the
	COleDispatchException object, resulting in the Visual Basic client being unable
	to interpret the error code of the exception.
	
	RESOLUTION
	==========
	
	To implement the proper behavior for throwing an OLE dispatch exception from an
	MFC server, do not use AfxThrowOleDispatchException. Instead, construct your own
	COleDispatchException, set m_scError = 0, and throw the exception yourself as
	illustrated in the sample code in this article.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 4.1.
	
	MORE INFORMATION
	================
	
	COleDispatchException has two public members (m_wCode and m_scError) which are
	mapped by COleDispatchException::Process() to the wCode and scode members of an
	EXCEPINFO structure. An EXCEPTINFO structure is used by an automation object to
	describe an exception that occurred during IDispatch::Invoke. When an automation
	object raises an exception, it should store an error code inside either wCode or
	scode but not both. If an error code is passed to the constructor of the
	COleDispatchException object, the values of both wCode and scode in the
	EXCEPINFO structure will be set.
	
	Sample Code
	-----------
	
	  // Insert the following code instead of AfxThrowOleDispatchException
	  COleDispatchException* pException;
	  pException = new COleDispatchException(
	                   _T("Some Exception"), 200, 425);
	  pException->m_scError = 0;
	  THROW(pException);
	
	REFERENCES
	==========
	
	"Inside OLE" second edition by Kraig Brockschmidt, published by Microsoft Press,
	Chapter 14, pages 658 - 660.
	
	Additional query words: kbVC400bug 1.50 1.51 1.52 2.00 2.10 2.20 2.50 2.51 2.52 3.00 3.10 3.20 4.00 2.0 2.1 2.2 4.10
	
	======================================================================
	Keywords          : kbole kbActiveX kbAutomation kbCOMt kbMFC kbVC150bug kbVC151bug kbVC152bug kbVC200bug kbVC210bug kbVC220bug kbVC400bug kbVC410fix kbGrpDSMFCATL kbNoUpdate 
	Technology        : kbVBSearch kbAudDeveloper kbPTNotAssigned kbMFC kbZNotKeyword2
	Version           : WINDOWS:1.5,1.51,1.52,4.0; winnt:2.0,2.1,2.2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
