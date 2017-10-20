---
layout: page
title: "Q121321: DOC:CDocTemplate::CreateNewFrame() Won't Make New CDocument"
permalink: /kb/121/Q121321/
---

## Q121321: DOC:CDocTemplate::CreateNewFrame() Won't Make New CDocument

{% raw %}

	Article: Q121321
	Product(s): Microsoft C Compiler
	Version(s): 1.00 1.50 1.51 | 1.00 2.00
	Operating System(s): 
	Keyword(s): kbdocfix
	Last Modified: 25-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51 
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Help File documentation for CDocTemplate::CreateNewFrame() says:
	
	  If the pDoc parameter is NULL, a new document will be created
	  if the appropriate runtime class is available; otherwise the
	  new view will be associated with the ...
	
	This is not correct. Calling CreateNewFrame() with a NULL pDoc parameter actually
	results in an assertion failure on the pDoc pointer and a TRACE() statement in
	your output or debug window stating the following:
	
	  ASSERT_VALID fails with NULL pointer.
	
	The reason for this is that CreateNewFrame() is not the appropriate function to
	call when you don't have a pre-constructed CDocument-derived object. The
	function to call is CMultiDocTemplate's or CSingleDocTemplate's
	OpenDocumentFile(). The OpenDocumentFile() function creates a new CDocument
	object by using CreateNewDocument().
	
	MORE INFORMATION
	================
	
	CMultiDocTemplate:: and CSingleDocTemplate::OpenDocumentFile() both create a new
	document if the pointer argument passed to them is NULL. To get a pointer to the
	appropriate document template that you can use when calling OpenDocumentFile(),
	please see the following article in the Microsoft Knowledge Base:
	
	  Q106455 Acquiring a List of All CDocument Objects
	
	This article contains sample code you can use to traverse the list of available
	document templates.
	
	This problem was fixed in Microsoft Visual C++, 32-bit Edition, version 4.0.
	
	Additional query words: pDoc ASSERT_VALID OpenDocumentFile 1.00 1.50 2.00 2.10 2.50 2.51 3.00 4.00
	
	======================================================================
	Keywords          : kbdocfix 
	Technology        : kbAudDeveloper kbMFC
	Version           : 1.00 1.50 1.51 | 1.00 2.00
	
	=============================================================================
	

{% endraw %}
