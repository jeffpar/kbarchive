---
layout: page
title: "Q135682: PRB: Drag and Drop with TYMED_FILE Runs Out of File Handles"
permalink: /kb/135/Q135682/
---

## Q135682: PRB: Drag and Drop with TYMED_FILE Runs Out of File Handles

	Article: Q135682
	Product(s): Microsoft C Compiler
	Version(s): 1.5,1.51,1.52,1.52b; winnt:2.0,2.1,2.2,4.0
	Operating System(s): 
	Keyword(s): kbCOMt kbDragDrop kbMFC kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 1.5, 1.51, 1.52, 1.52b 
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling Open() on the CFile pointer returned from COleDataObject::GetFileData()
	may return EMFILE. Usually, this will happen after repeated drag and drop
	operations and subsequent calls to GetFileData(). It is also possible to see
	memory leaks upon termination of the application, specifically, of memory blocks
	the size of a CFile object.
	
	CAUSE
	=====
	
	The documentation for COleDataObject::GetFileData() does not mention that the
	returned CFile pointer is owned by the caller. Therefore, it is the
	responsibility of the caller to call Close() on or simply delete that pointer.
	The reason for the EMFILE return code is that the files opened in the drag and
	drop operation are never closed and therefore the system handles are exhausted.
	Memory leaks are caused by not deleting the CFile objects that were dynamically
	allocated by GetFileData().
	
	The documentation for COleDataObject::GetFileData provided with Visual C++ 4.0
	has been improved. It mentions the fact that it is the responsibility of the
	caller to delete the returned CFile object, thereby closing the file.
	
	RESOLUTION
	==========
	
	Remember to delete the CFile pointer returned from GetFileData() after using
	it.
	
	Sample Code
	-----------
	
	The following OnDrop() function definition illustrates the correct cleanup after
	using the CFile pointer returned from GetFileData().
	
	     BOOL CMyView::OnDrop(COleDataObject* pDataObject, DROPEFFECT de,
	                          CPoint point)
	     {
	         CFile * pFile = pDataObject->GetFileData(CF_HGLOBAL);
	         char lpBuf[100];
	
	         if (NULL != pFile)
	             pFile->Read(lpBuf, 100);
	         .
	         .
	         .
	         // Make sure to delete the CFile *
	         delete pFile;
	         return TRUE;
	     }
	
	Additional query words: cfile delete stgm_hfile tymed_file
	
	======================================================================
	Keywords          : kbCOMt kbDragDrop kbMFC kbVC150 kbVC200 kbVC400 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbVC220 kbVC151 kbVC200 kbVC210 kbVC152 kbVC152a
	Version           : :1.5,1.51,1.52,1.52b; winnt:2.0,2.1,2.2,4.0
	Issue type        : kbprb
	
	=============================================================================
	
