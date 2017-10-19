---
layout: page
title: "Q220844: HOWTO: Insert a Bitmap Into RTF Document Using RichEdit Control"
permalink: /kb/220/Q220844/
---

## Q220844: HOWTO: Insert a Bitmap Into RTF Document Using RichEdit Control

	Article: Q220844
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbBitmap kbCOMt kbCtrl kbMFC kbRichEdit kbVC600 kbGrpDSMFCATL
	Last Modified: 26-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The RichEdit control does not provide a direct method for loading a bitmap and
	inserting it into an RTF document. The ActiveX control (RichTextBox) provides
	the Add method through the COleObjects class, but this action loads the bitmap
	for editing in the registered bitmap editor (usually Paintbrush) before
	inserting it into the document. Both the DLL and the OCX expose the IRichEditOle
	interface which, however, provides the InsertObject method. This requires a
	fully-populated RichEdit Object (REOBJECT) structure to be passed.
	
	MORE INFORMATION
	================
	
	The following code is based on a project in which the Microsoft RichText control
	has been inserted. With minor changes, it can apply to the RichEdit DLL as
	well.
	
	1. Create a new MFC dialog based application named RichText.
	
	2. In the dialog editor, add a RichEdit control to the application dialog
	  resource. Use the code wizards to create a member variable, m_ctlRichText, of
	  type CRichEditCtrl, that is associated with the new RichEdit control.
	
	3. In the beginning of the InitInstance() method of the CWinApp derived class of
	  your project, add a call to AfxInitRichEdit() to initialize the RichEdit
	  common control.
	
	4. Add four OLE interface pointers as member variables to the CDialog derived
	  class:
	
	  	LPRICHEDITOLE	m_pRichEditOle;
	  	LPOLEOBJECT	m_lpObject;
	  	LPSTORAGE         m_lpStorage;
	  	LPOLECLIENTSITE	m_lpClientSite;
	
	NOTE: Set these variables to NULL in your constructor. You must include the
	header file Richole.h for the definition of the type LPRICHEDITOLE.
	
	5. Get the IRichEditOLE interface early on in your program (in OnInitDialog or
	  OnInitialUpdate) and keep it available. For the RichText control, use the
	  following method:
	
	  	::SendMessage(m_ctlRichText.m_hWnd, EM_GETOLEINTERFACE, 0, (LPARAM)&m_pRichEditOle);
	        ASSERT(m_pRichEditOle != NULL); 
	
	6. To insert the bitmap, create an embedded object from a file. OLE provides the
	  OleCreateFromFile function call to make this easier, but you still need to
	  prepare for the call. The following code is an amalgam of techniques used
	  within the MFC classes to provide similar functionality.
	
	  BOOL CRichTextDlg::CreateFromFile(LPCTSTR lpszFileName)
	  {
	  	USES_CONVERSION;
	
	  	ASSERT_VALID(this);
	  	ASSERT(m_lpObject == NULL);     // one time only
	
	  	ASSERT(m_lpStorage == NULL);
	  	ASSERT(m_lpClientSite == NULL);
	  	LPLOCKBYTES lpLockBytes = NULL;
	  	CLSID clsid = CLSID_NULL;
	  	OLERENDER render = OLERENDER_DRAW;
	  	CLIPFORMAT cfFormat = 0;
	  	LPFORMATETC lpFormatEtc = NULL;
	
	  	SCODE sc;
	
	  	sc = ::CreateILockBytesOnHGlobal(NULL, TRUE, &lpLockBytes);
	  	if (sc != S_OK)
	  		AfxThrowOleException(sc);
	  	ASSERT(lpLockBytes != NULL);
	
	  	sc = ::StgCreateDocfileOnILockBytes(lpLockBytes,
	  		STGM_SHARE_EXCLUSIVE|STGM_CREATE|STGM_READWRITE, 0, &m_lpStorage);
	  	if (sc != S_OK)
	  	{
	  		VERIFY(lpLockBytes->Release() == 0);
	  		lpLockBytes = NULL;
	  		AfxThrowOleException(sc);
	  	}
	  	ASSERT(m_lpStorage != NULL);
	
	  	// fill in FORMATETC struct
	  	FORMATETC formatEtc;
	  	lpFormatEtc = &formatEtc;
	  	lpFormatEtc->cfFormat = cfFormat;
	  	lpFormatEtc->ptd = NULL;
	  	lpFormatEtc->dwAspect = DVASPECT_CONTENT;
	  	lpFormatEtc->lindex = -1;
	  	lpFormatEtc->tymed = TYMED_NULL;
	
	  	// attempt to create the object
	  	m_pRichEditOle->GetClientSite(&m_lpClientSite);
	
	  	sc = ::OleCreateFromFile(clsid, T2COLE(lpszFileName),
	  		IID_IUnknown, OLERENDER_DRAW, lpFormatEtc, m_lpClientSite, m_lpStorage,
	  		(void**)&m_lpObject);
	  	if (sc != S_OK)
	  		AfxThrowOleException(sc);
	
	  	// m_lpObject is currently an IUnknown, convert to IOleObject
	  	if (m_lpObject != NULL)
	  	{
	  		LPUNKNOWN lpUnk = m_lpObject;
	  		lpUnk->QueryInterface(IID_IOleObject, (void**)&m_lpObject);
	  		lpUnk->Release();
	  		if (m_lpObject == NULL)
	  			AfxThrowOleException(E_OUTOFMEMORY);
	  	}
	
	  	// all items are "contained" -- this makes our reference to this object
	  	//  weak -- which is needed for links to embedding silent update.
	  	OleSetContainedObject(m_lpObject, TRUE);
	
	  	ASSERT_VALID(this);
	  	return TRUE;
	  }
	
	7. To use the function, simply pass the full path to a bitmap as the file name
	  parameter. The function creates a byte array in global memory and a compound
	  file storage object in that memory. It then populates the FORMATETC
	  structure, gets the client site, and creates the object within the provided
	  storage. The result is an IUnknown pointer to the object that is then
	  converted to a true IOleObject pointer by a call to QueryInterface.
	
	8. Populate the RichEdit Object (REOBJECT) structure so it can call InsertObject
	  through the IRichEditOle pointer stored earlier. The following code fills
	  this structure:
	
	  	REOBJECT reobject;
	  	ZeroMemory(&reobject, sizeof(REOBJECT));
	  	reobject.cbStruct = sizeof(REOBJECT);
	
	  	CLSID clsid;
	  	SCODE sc = m_lpObject->GetUserClassID(&clsid);
	  	if (sc != S_OK)
	  		AfxThrowOleException(sc);
	
	  	reobject.clsid = clsid;
	  	reobject.cp = REO_CP_SELECTION;
	  	reobject.dvaspect = DVASPECT_CONTENT;
	  	reobject.dwFlags = REO_RESIZABLE | REO_BELOWBASELINE;
	  	reobject.dwUser = 0;
	  	reobject.poleobj = m_lpObject;
	
	  	ASSERT(m_lpClientSite != NULL);
	  	reobject.polesite = m_lpClientSite;
	
	  	ASSERT(m_lpStorage != NULL);
	  	reobject.pstg = m_lpStorage;
	
	  	SIZEL sizel;
	  	sizel.cx = sizel.cy = 0;
	  	reobject.sizel = sizel;
	
	9. At this point, make the InsertObject call. Insert the bitmap at the bottom of
	  the file. A combination of EM_GETSEL/EM_SETSEL messages selects the
	  document's text and positions the cursor at the end.
	
	          HWND hWndRT = m_ctlRichText.m_hWnd;
	  	::SendMessage(hWndRT, EM_SETSEL, 0, -1);
	  	DWORD dwStart, dwEnd;
	  	::SendMessage(hWndRT, EM_GETSEL, (WPARAM)&dwStart, (LPARAM)&dwEnd);
	  	::SendMessage(hWndRT, EM_SETSEL, dwEnd+1, dwEnd+1);
	
	10. Call InsertObject but add a carriage return first as in the following
	  sample:
	
	  	CString strCr = "\r\n";
	  	m_ctlRichText. ReplaceSel(strCr,TRUE); 
	
	Finally!
	
	  	m_pRichEditOle->InsertObject(&reobject);
	
	11. The bitmap is dropped neatly at the bottom of the document with a carriage
	  return separating it from the body of the text as in the following code
	  sample:
	
	  	::SendMessage(hWndRT, EM_SCROLLCARET, (WPARAM)0, (LPARAM)0);
	
	12. This message scrolls the document to the caret position and the bitmap rolls
	  into view. To repeat this, release the interface pointers:
	
	  	if (m_lpObject)
	  	{
	  		m_lpObject->Release();
	  		m_lpObject = NULL;
	  	}
	  	if (m_lpStorage)
	  	{
	  		m_lpStorage->Release();
	  		m_lpStorage = NULL;
	  	}
	  	if (m_lpClientSite)
	  	{
	  		m_lpClientSite->Release();
	  		m_lpClientSite = NULL;
	  	}
	
	13. Finally, release m_pRichEditOle.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbole kbActiveX kbBitmap kbCOMt kbCtrl kbMFC kbRichEdit kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
