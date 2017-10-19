---
layout: page
title: "Q118613: INFO: Accessing OLE 2.0 Embedded Object Dirties OLE 1.0 Client"
permalink: /kb/118/Q118613/
---

## Q118613: INFO: Accessing OLE 2.0 Embedded Object Dirties OLE 1.0 Client

	Article: Q118613
	Product(s): Microsoft C Compiler
	Version(s): winnt:
	Operating System(s): 
	Keyword(s): kbole kbActiveX kbAutomation kbCOMt kbContainer kbLocalSvr kbMFC kbVC150 kbVC200 kbVC21
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, versions 1.5, 1.51, 1.52 
	   - Microsoft Visual C++ 32-bit Edition, versions 2.0, 2.1, 4.0, 4 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an OLE 2.0 embedded object is opened and closed in an OLE 1.0 client
	without being modified, the client document needs to be updated (that is, marked
	as "dirty"). This causes the client to ask whether the user wants to save the
	document.
	
	To prevent the client from marking its document as dirty, you must modify the
	implementations of IOleObject and IDataObject in your OLE 2.0 server. In an
	MFC-based server application, this is most conveniently done by deriving a new
	class from COleServerDoc and changing the application's server document class so
	that it is derived from the new class.
	
	MORE INFORMATION
	================
	
	This behavior can be observed using the Windows Write applet with any of the MFC
	sample servers. To observe this behavior, perform the following steps:
	
	1. Open a document in Write.
	
	2. Embed a new object in the document.
	
	3. Save the document.
	
	4. Open the embedded object.
	
	5. Immediately close the object to return to Write.
	
	6. Exit Write. (You will be asked whether you want to save the updated
	  document.)
	
	When an OLE 2.0 embedded object is closed, the object calls
	IAdviseSink::OnClose() to notify its container. The OLE translation layer simply
	translates this into a client callback of OLE_CLOSE, which causes the client to
	receive an update of the embedded object's metafile. This in turn causes the
	client to think its document is dirty and needs to be saved.
	
	To avoid this behavior, perform the following steps:
	
	1. Add a flag to the OLE 2.0 object that supports IDataObject, IPersistStorage,
	  and IOleObject.
	
	2. During IOleObject::OnClose, set the flag to TRUE before the call to
	  IAdviseHolder::SendOnClose() and reset it after the call returns.
	
	3. Modify the implementations of IDataObject::GetData() and
	  IDataObject::GetDataHere() to return E_FAIL when m_bDontSave is TRUE.
	
	To implement the above steps using MFC, perform the following steps:
	
	1. Create a new class, COleServerDocEx, derived from COleServerDoc.
	
	2. Add a member variable, m_bDontSave, to COleServerDocEx.
	
	3. Override OnCloseDocument() in COleServerDocEx. Set m_bDontSave to TRUE, call
	  the base class function, then reset m_bDontSave. This effectively brackets
	  the call to IAdviseHolder::OnClose().
	
	4. Reimplement the IDataObject interface in COleServerDocEx. For all functions
	  except GetData() and GetDataHere(), simply delegate to the COleServerDoc
	  implementation of IDataObject.
	
	5. In the implementations of GetData() and GetDataHere(), return E_FAIL if
	  m_bDontSave is TRUE.
	
	6. Modify your application's document class so it is derived from
	  COleServerDocEx rather than COleServerDoc.
	
	Sample Code
	-----------
	
	The following code implements the COleServerDocEx class mentioned above:
	
	     //////////////////////////////////////////////////////////////// 
	     // olesvrex.h : interface of the COleServerDocEx class
	     // 
	
	     class COleServerDocEx : public COleServerDoc
	     {
	        DECLARE_DYNAMIC(COleServerDocEx)
	
	     // Constructors and Destructors
	     public:
	        COleServerDocEx();
	
	     // Implementation
	     public:
	        virtual ~COleServerDocEx();
	     #ifdef _DEBUG
	        virtual void AssertValid() const;
	        virtual void Dump(CDumpContext& dc) const;
	     #endif
	
	        // overridables for implementation
	        virtual void OnCloseDocument();
	
	     protected:
	        BOOL m_bDontSave;
	
	     // Message Maps
	     protected:
	        //{ {AFX_MSG(COleServerDocEx)
	        //} }AFX_MSG
	        DECLARE_MESSAGE_MAP()
	
	     // Interface Maps
	     protected:
	        BEGIN_INTERFACE_PART(DataObjectEx, IDataObject)
	           STDMETHOD(GetData)(LPFORMATETC, LPSTGMEDIUM);
	           STDMETHOD(GetDataHere)(LPFORMATETC, LPSTGMEDIUM);
	           STDMETHOD(QueryGetData)(LPFORMATETC);
	           STDMETHOD(GetCanonicalFormatEtc)(LPFORMATETC, LPFORMATETC);
	           STDMETHOD(SetData)(LPFORMATETC, LPSTGMEDIUM, BOOL);
	           STDMETHOD(EnumFormatEtc)(DWORD, LPENUMFORMATETC FAR*);
	           STDMETHOD(DAdvise)(LPFORMATETC, DWORD, LPADVISESINK, LPDWORD);
	           STDMETHOD(DUnadvise)(DWORD);
	           STDMETHOD(EnumDAdvise)(LPENUMSTATDATA FAR*);
	        END_INTERFACE_PART(DataObjectEx)
	
	        DECLARE_INTERFACE_MAP()
	
	     };
	
	     // 
	     // End of olesvrex.h
	     //////////////////////////////////////////////////////////////// 
	
	     //////////////////////////////////////////////////////////////// 
	     // 
	     // olesvrex.cpp : implementation of the COleServerDocEx class
	
	     #include "stdafx.h"
	     #include "olesvrex.h"
	
	     #ifdef _DEBUG
	        #undef THIS_FILE
	        static char BASED_CODE THIS_FILE[] = __FILE__;
	     #endif
	
	     /////////////////////////////////////////////////////////////// 
	     // COleServerDocEx
	
	     IMPLEMENT_DYNAMIC(COleServerDocEx, COleServerDoc)
	
	     BEGIN_MESSAGE_MAP(COleServerDocEx, COleServerDoc)
	        //{ {AFX_MSG_MAP(COleServerDocEx)
	        //} }AFX_MSG_MAP
	     END_MESSAGE_MAP()
	
	     /////////////////////////////////////////////////////////////// 
	     // COleServerDocEx construction/destruction
	
	     COleServerDocEx::COleServerDocEx()
	     {
	        m_bDontSave = FALSE;
	     }
	
	     COleServerDocEx::~COleServerDocEx()
	     {
	     }
	
	     //////////////////////////////////////////////////////////////// 
	     // COleServerDocEx default command handling
	
	     void COleServerDocEx::OnCloseDocument()
	     {
	        m_bDontSave = TRUE;
	        COleServerDoc::OnCloseDocument();
	        m_bDontSave = FALSE;
	     }
	
	     //////////////////////////////////////////////////////////////// 
	     // COleServerDocEx OLE interface implementation
	
	     BEGIN_INTERFACE_MAP(COleServerDocEx, COleServerDoc)
	        INTERFACE_PART(COleServerDocEx, IID_IDataObject, DataObjectEx)
	     END_INTERFACE_MAP()
	
	     //////////////////////////////////////////////////////////////// 
	     // COleServerDocEx::XDataObjectEx
	
	     STDMETHODIMP_(ULONG) COleServerDocEx::XDataObjectEx::AddRef()
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        return (ULONG)pThis->ExternalAddRef();
	     }
	
	     STDMETHODIMP_(ULONG) COleServerDocEx::XDataObjectEx::Release()
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        return (ULONG)pThis->ExternalRelease();
	     }
	
	     STDMETHODIMP COleServerDocEx::XDataObjectEx::QueryInterface(
	        REFIID iid, LPVOID far* ppvObj)
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        return (HRESULT)pThis->ExternalQueryInterface(&iid, ppvObj);
	     }
	
	     STDMETHODIMP COleServerDocEx::XDataObjectEx::GetData(
	        LPFORMATETC lpFormatEtc, LPSTGMEDIUM lpStgMedium)
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        ASSERT_VALID(pThis);
	
	        if (pThis->m_bDontSave)
	           return ResultFromScode(E_FAIL);
	
	        return pThis->m_xDataObject.GetData(lpFormatEtc, lpStgMedium);
	     }
	
	     STDMETHODIMP COleServerDocEx::XDataObjectEx::GetDataHere(
	        LPFORMATETC lpFormatEtc, LPSTGMEDIUM lpStgMedium)
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        ASSERT_VALID(pThis);
	
	        if (pThis->m_bDontSave)
	           return ResultFromScode(E_FAIL);
	
	        return pThis->m_xDataObject.GetDataHere(lpFormatEtc, lpStgMedium);
	     }
	
	     STDMETHODIMP COleServerDocEx::XDataObjectEx::QueryGetData(
	        LPFORMATETC lpFormatEtc)
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        ASSERT_VALID(pThis);
	
	        return pThis->m_xDataObject.QueryGetData(lpFormatEtc);
	     }
	
	     STDMETHODIMP COleServerDocEx::XDataObjectEx::GetCanonicalFormatEtc(
	        LPFORMATETC lpFormatEtcIn, LPFORMATETC lpFormatEtcOut)
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        ASSERT_VALID(pThis);
	
	        return pThis->m_xDataObject.GetCanonicalFormatEtc(lpFormatEtcIn,
	                                                          lpFormatEtcOut);
	     }
	
	     STDMETHODIMP COleServerDocEx::XDataObjectEx::SetData(
	        LPFORMATETC lpFormatEtc, LPSTGMEDIUM lpStgMedium, BOOL fRelease)
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        ASSERT_VALID(pThis);
	
	        return pThis->m_xDataObject.SetData(lpFormatEtc, lpStgMedium,
	                                            fRelease);
	     }
	
	     STDMETHODIMP COleServerDocEx::XDataObjectEx::EnumFormatEtc(
	        DWORD dwDirection, LPENUMFORMATETC FAR* ppenumFormatEtc)
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        ASSERT_VALID(pThis);
	
	        return pThis->m_xDataObject.EnumFormatEtc(dwDirection,
	                                                  ppenumFormatEtc);
	     }
	
	     STDMETHODIMP COleServerDocEx::XDataObjectEx::DAdvise(
	        FORMATETC FAR* pFormatetc, DWORD advf,
	        LPADVISESINK pAdvSink, DWORD FAR* pdwConnection)
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        ASSERT_VALID(pThis);
	
	        return pThis->m_xDataObject.DAdvise(pFormatetc, advf, pAdvSink,
	                                            pdwConnection);
	     }
	
	     STDMETHODIMP COleServerDocEx::XDataObjectEx::DUnadvise(DWORD dwConn)
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        ASSERT_VALID(pThis);
	
	        return pThis->m_xDataObject.DUnadvise(dwConn);
	     }
	
	     STDMETHODIMP COleServerDocEx::XDataObjectEx::EnumDAdvise(
	        LPENUMSTATDATA FAR* ppenumAdvise)
	     {
	        METHOD_PROLOGUE(COleServerDocEx, DataObjectEx)
	        ASSERT_VALID(pThis);
	
	        return pThis->m_xDataObject.EnumDAdvise(ppenumAdvise);
	     }
	
	     //////////////////////////////////////////////////////////////// 
	     // COleServerDocEx diagnostics
	
	     #ifdef _DEBUG
	     void COleServerDocEx::AssertValid() const
	     {
	        COleServerDoc::AssertValid();
	     }
	
	     void COleServerDocEx::Dump(CDumpContext& dc) const
	     {
	        COleServerDoc::Dump(dc);
	        AFX_DUMP1(dc, "\nm_bDontSave = ", m_bDontSave);
	     }
	     #endif //_DEBUG
	
	     // 
	     // End of olesvrex.cpp
	     //////////////////////////////////////////////////////////////// 
	
	Additional query words: vc30bol kbinf 1.50 2.00 2.10 2.50 2.51 2.52 3.00 3.10 4.00 4.10
	
	======================================================================
	Keywords          : kbole kbActiveX kbAutomation kbCOMt kbContainer kbLocalSvr kbMFC kbVC150 kbVC200 kbVC210 kbVC220 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:
	Issue type        : kbinfo
	
	=============================================================================
	
