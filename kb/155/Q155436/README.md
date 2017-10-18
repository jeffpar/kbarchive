---
layout: page
title: "Q155436: DOC: CImageList Returned from CreateDragImage Needs Delete"
permalink: kb/155/Q155436/
---

## Q155436: DOC: CImageList Returned from CreateDragImage Needs Delete

	Article: Q155436
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbdocfix kbdocerr kbMFC KbUIDesign kbVC kbVC420bug kbVC500fix kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++ 32-bit Edition, version 4.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The CTreeCtrl::CreateDragImage and CListCtrl::CreateDragImage functions in
	versions of MFC earlier than 4.2 return a pointer to a temporary CImageList
	object. In MFC version 4.2, CreateDragImage returns a permanent object that must
	be explicitly deleted.
	
	The documentation for CreateDragImage does not state this.
	
	This documentation error was fixed in Visual C++ version 5.0.
	
	MORE INFORMATION
	================
	
	In versions of MFC earlier than 4.2, MFC implements CreateDragImage as
	CImageList::FromHandle. An object returned from FromHandle is temporary and does
	not need to be explicitly deleted. A limitation of this implementation is that
	the CImageList pointer can be safely used only in the current message being
	processed.
	
	CreateDragImage function was changed in Visual C++ version 4.2 to allocate a
	permanent CImageList object, and can now be used when handling multiple
	messages. When finished using the pointer returned by CreateDragImage, however,
	it is now necessary to explicitly delete the object:
	
	     CImageList* pImageList = CreateDragImage( ...
	     delete pImageList;
	
	For more information on temporary handles returned from FromHandle, see MFC
	TechNote "TN003: Mapping of Windows Handles to Objects" in the Visual C++ Books
	Online.
	
	Additional query words: kbVC420bug leak kbImgLst
	
	======================================================================
	Keywords          : kbdocfix kbdocerr kbMFC KbUIDesign kbVC kbVC420bug kbVC500fix kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Solution Type     : kbfix
	
	=============================================================================
	
