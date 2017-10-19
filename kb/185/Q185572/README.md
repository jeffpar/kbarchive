---
layout: page
title: "Q185572: HOWTO: Get Dropped File Names Using OLE Drag and Drop"
permalink: /kb/185/Q185572/
---

## Q185572: HOWTO: Get Dropped File Names Using OLE Drag and Drop

	Article: Q185572
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbole kbClipboard kbDragDrop kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDataObject
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Traditionally, developers have used the WM_DROPFILES message to handle files
	dropped from the File Manager or Windows Explorer. This message is sent when the
	user drops a file on the window of an application that has registered itself as
	a recipient of dropped files.
	
	OLE drag and drop supports this same functionality. Both techniques involve
	passing a global HDROP (drop structure handle) from the source to the target.
	WM_DROPFILES passes this handle in the WPARAM value. OLE drag and drop passes
	the HDROP with the data object.
	
	This article demonstrates how to get the dropped file names using OLE drag and
	drop. The information in this article supplements the following Microsoft
	Knowledge Base article:
	
	  Q135299 SAMPLE: Using MFC OLE Drag & Drop to Drag Text Between Windows
	
	MORE INFORMATION
	================
	
	To retrieve the dropped file names from a drop source, modify the sample code
	included with Q135299, "SAMPLE: Using MFC OLE Drag & Drop to Drag Text
	Between Windows" as follows:
	
	Sample Code
	-----------
	
	     // OnDrop is called by OLE DLLs when an item is dropped in a window
	     // that is registered with the OLE DLLs.
	     // 
	     BOOL COleEditDropTarget::OnDrop(CWnd* pWnd, COleDataObject* pDataObject,
	        DROPEFFECT dropEffect, CPoint point )
	     {
	      HGLOBAL  hGlobal;
	      LPCSTR   pData;
	
	      FORMATETC fmtetc =
	     { CF_HDROP, NULL, DVASPECT_CONTENT, -1, TYMED_HGLOBAL };
	      STGMEDIUM stgmed;
	      TCHAR szFileName[_MAX_PATH + 1];
	
	      if(pDataObject->GetData(CF_HDROP, &stgmed, &fmtetc))
	      {
	          HDROP hdrop = (HDROP)GlobalLock(stgmed.hGlobal);
	
	          if (NULL != hdrop)
	          {
	              UINT nFiles = DragQueryFile(hdrop, (UINT)-1, NULL, 0);
	
	              for(UINT nNames = 0; nNames < nFiles; nNames++)
	              {
	                  ZeroMemory(szFileName, _MAX_PATH + 1);
	                  DragQueryFile
	                      (hdrop, nNames, (LPTSTR)szFileName, _MAX_PATH + 1);
	                  // Do something with szFileName.
	              }
	              GlobalUnlock(hdrop);
	
	          }
	          ReleaseStgMedium(&stgmed);
	        return TRUE;
	
	      } else {
	
	     // Get text data from ColeDataObject.
	     hGlobal=pDataObject->GetGlobalData(CF_TEXT);
	
	     // Get a pointer to data.
	     pData=(LPCSTR)GlobalLock(hGlobal);
	     ASSERT(pData!=NULL);
	
	     // Set text in the dropped window.
	     ((CEdit*)pWnd)->SetWindowText(pData);
	
	     // Unlock memory.
	     GlobalUnlock(hGlobal);
	
	     return TRUE;
	     }
	     }
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Robert
	Duke, Microsoft Corporation.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Robert Duke, Microsoft Corporation
	
	
	Additional query words: Drag Drop DragAcceptFiles CF_
	
	======================================================================
	Keywords          : kbole kbClipboard kbDragDrop kbMFC kbVC400 kbVC500 kbVC600 kbGrpDSMFCATL kbDataObject 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
