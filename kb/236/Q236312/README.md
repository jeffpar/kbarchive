---
layout: page
title: "Q236312: HOWTO: Disable the Default Pop-up Menu for CHtmlView"
permalink: /kb/236/Q236312/
---

## Q236312: HOWTO: Disable the Default Pop-up Menu for CHtmlView

{% raw %}

	Article: Q236312
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDHTML kbieObj kbInternet kbMenu kbMFC kbVC600 kbVS600 kbWebBrowser kbDSupport kbGrpDS
	Last Modified: 26-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Create a default CHtmlView Appwizard application. When you right-click on any
	Web site in Microsoft Internet Explorer, a default pop-up menu appears. Driller
	(MFC) Sample from Microsoft shows how to override this behavior for the
	WebBrowser Control so that pop-up menu does not appear. You might disable this
	pop-up menu if you do not want users to view the Web page's source or
	properties, or use other features such as the Back and Forward buttons. Or, if
	you want to add your own functionality to the pop-up menu, you must also disable
	the default pop-up menu.
	
	NOTE: Driller (MFC) Sample shows how to override this behavior only for the
	WebBrowser Control. It does not use the CHtmlView class.
	
	MORE INFORMATION
	================
	
	This article is based on the Driller (MFC) Sample, which is available from the
	following Microsoft Web page:
	
	  Driller (MFC) Sample
	  (http://msdn.microsoft.com/downloads/samples/Internet/browser/driller/Default.asp)
	
	Driller includes the code used here for Custsite.h, Custsite.cpp, Idispimp.h, and
	Idispimp.cpp. These methods are supported in Internet Explorer 4 and Internet
	Explorer 5.
	
	Steps to Disable the Default Pop-up Menu
	----------------------------------------
	
	1. Create a AppWizard-generated SDI application called MySample. At step 6/6
	  change to CHtmlView.
	
	2. Open MySample.h and add a public member variable as shown below to the
	  CMySampleApp class:
	
	  public:
	           class CImpIDispatch* m_pDispOM;
	
	3. Add a new header file to the project called "Custsite.h". Copy and paste the
	  following code into it:
	
	  //=--------------------------------------------------------------------------=
	  //  (C) Copyright 1996-1999 Microsoft Corporation. All Rights Reserved.
	  //=--------------------------------------------------------------------------=
	  #ifndef __CUSTOMSITEH__
	  #define __CUSTOMSITEH__
	
	  #include "idispimp.h"
	  #include <mshtmhst.h>
	
	  // 
	  // NOTE: 
	  // Some of the code in this file is MFC implementation specific.
	  // Changes in future versions of MFC implementation may require
	  // the code to be changed. Please check the readme of this
	  // sample for more information 
	  // 
	
	  class CCustomControlSite:public COleControlSite
	  {
	  public:
	  	CCustomControlSite(COleControlContainer *pCnt):COleControlSite(pCnt){}
	
	  protected:
	
	  	DECLARE_INTERFACE_MAP();
	  BEGIN_INTERFACE_PART(DocHostUIHandler, IDocHostUIHandler)
	  	STDMETHOD(ShowContextMenu)(/* [in] */ DWORD dwID,
	              /* [in] */ POINT __RPC_FAR *ppt,
	              /* [in] */ IUnknown __RPC_FAR *pcmdtReserved,
	              /* [in] */ IDispatch __RPC_FAR *pdispReserved);
	  	STDMETHOD(GetHostInfo)( 
	              /* [out][in] */ DOCHOSTUIINFO __RPC_FAR *pInfo);
	  	STDMETHOD(ShowUI)( 
	              /* [in] */ DWORD dwID,
	              /* [in] */ IOleInPlaceActiveObject __RPC_FAR *pActiveObject,
	              /* [in] */ IOleCommandTarget __RPC_FAR *pCommandTarget,
	              /* [in] */ IOleInPlaceFrame __RPC_FAR *pFrame,
	              /* [in] */ IOleInPlaceUIWindow __RPC_FAR *pDoc);
	  	STDMETHOD(HideUI)(void);
	  	STDMETHOD(UpdateUI)(void);
	  	STDMETHOD(EnableModeless)(/* [in] */ BOOL fEnable);
	  	STDMETHOD(OnDocWindowActivate)(/* [in] */ BOOL fEnable);
	  	STDMETHOD(OnFrameWindowActivate)(/* [in] */ BOOL fEnable);
	  	STDMETHOD(ResizeBorder)( 
	              /* [in] */ LPCRECT prcBorder,
	              /* [in] */ IOleInPlaceUIWindow __RPC_FAR *pUIWindow,
	              /* [in] */ BOOL fRameWindow);
	  	STDMETHOD(TranslateAccelerator)( 
	              /* [in] */ LPMSG lpMsg,
	              /* [in] */ const GUID __RPC_FAR *pguidCmdGroup,
	              /* [in] */ DWORD nCmdID);
	  	STDMETHOD(GetOptionKeyPath)( 
	              /* [out] */ LPOLESTR __RPC_FAR *pchKey,
	              /* [in] */ DWORD dw);
	  	STDMETHOD(GetDropTarget)(
	              /* [in] */ IDropTarget __RPC_FAR *pDropTarget,
	              /* [out] */ IDropTarget __RPC_FAR *__RPC_FAR *ppDropTarget);
	      STDMETHOD(GetExternal)( 
	              /* [out] */ IDispatch __RPC_FAR *__RPC_FAR *ppDispatch);
	      STDMETHOD(TranslateUrl)( 
	              /* [in] */ DWORD dwTranslate,
	              /* [in] */ OLECHAR __RPC_FAR *pchURLIn,
	              /* [out] */ OLECHAR __RPC_FAR *__RPC_FAR *ppchURLOut);
	      STDMETHOD(FilterDataObject)( 
	              /* [in] */ IDataObject __RPC_FAR *pDO,
	              /* [out] */ IDataObject __RPC_FAR *__RPC_FAR *ppDORet);
	  END_INTERFACE_PART(DocHostUIHandler)
	  };
	
	  class CCustomOccManager :public COccManager
	  {
	  public:
	  	CCustomOccManager(){}
	  	COleControlSite* CreateSite(COleControlContainer* pCtrlCont)
	  	{
	  		CCustomControlSite *pSite = new CCustomControlSite(pCtrlCont);
	  		return pSite;
	  	}
	  };
	
	  #endif
	
	4. Add a new CPP file called "Custsite.cpp" and add the code below to it:
	
	  //=--------------------------------------------------------------------------=
	  //  (C) Copyright 1996-1999 Microsoft Corporation. All Rights Reserved.
	  //=--------------------------------------------------------------------------=
	
	  // 
	  // NOTE: 
	  // Some of the code in this file is MFC implementation specific.
	  // Changes in future versions of MFC implementation may require
	  // the code to be changed. Please check the readme of this
	  // sample for more information 
	  // 
	
	  #include "stdafx.h"
	  #undef AFX_DATA
	  #define AFX_DATA AFX_DATA_IMPORT
	  #include "MySample.h"
	
	  // NOTE: This line is a hardcoded reference to an MFC header file
	  //  this path may need to be changed to refer to the location of VC5 install
	  //  for successful compilation.
	
	  #include <..\src\occimpl.h>
	  #undef AFX_DATA
	  #define AFX_DATA AFX_DATA_EXPORT
	  #include "custsite.h"
	
	  BEGIN_INTERFACE_MAP(CCustomControlSite, COleControlSite)
	  	INTERFACE_PART(CCustomControlSite, IID_IDocHostUIHandler, DocHostUIHandler)
	  END_INTERFACE_MAP()
	
	  	
	
	  ULONG FAR EXPORT  CCustomControlSite::XDocHostUIHandler::AddRef()
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	  	return pThis->ExternalAddRef();
	  }
	
	  ULONG FAR EXPORT  CCustomControlSite::XDocHostUIHandler::Release()
	  {                            
	      METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	  	return pThis->ExternalRelease();
	  }
	
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::QueryInterface(REFIID riid, void **ppvObj)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      HRESULT hr = (HRESULT)pThis->ExternalQueryInterface(&riid, ppvObj);
	  	return hr;
	  }
	
	  // * CImpIDocHostUIHandler::GetHostInfo
	  // *
	  // * Purpose: Called at initialization
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::GetHostInfo( DOCHOSTUIINFO* pInfo )
	  {
	
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	  	pInfo->dwFlags = DOCHOSTUIFLAG_NO3DBORDER;
	      pInfo->dwDoubleClick = DOCHOSTUIDBLCLK_DEFAULT;
	
	      return S_OK;
	  }
	
	  // * CImpIDocHostUIHandler::ShowUI
	  // *
	  // * Purpose: Called when MSHTML.DLL shows its UI
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::ShowUI(
	  				DWORD dwID, 
	  				IOleInPlaceActiveObject * /*pActiveObject*/,
	  				IOleCommandTarget * pCommandTarget,
	  				IOleInPlaceFrame * /*pFrame*/,
	  				IOleInPlaceUIWindow * /*pDoc*/)
	  {
	
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	  	// We've already got our own UI in place so just return S_OK
	      return S_OK;
	  }
	
	  // * CImpIDocHostUIHandler::HideUI
	  // *
	  // * Purpose: Called when MSHTML.DLL hides its UI
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::HideUI(void)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      return S_OK;
	  }
	
	  // * CImpIDocHostUIHandler::UpdateUI
	  // *
	  // * Purpose: Called when MSHTML.DLL updates its UI
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::UpdateUI(void)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	  	// MFC is pretty good about updating it's UI in it's Idle loop so I don't do anything here
	  	return S_OK;
	  }
	
	  // * CImpIDocHostUIHandler::EnableModeless
	  // *
	  // * Purpose: Called from MSHTML.DLL's IOleInPlaceActiveObject::EnableModeless
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::EnableModeless(BOOL /*fEnable*/)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      return E_NOTIMPL;
	  }
	
	  // * CImpIDocHostUIHandler::OnDocWindowActivate
	  // *
	  // * Purpose: Called from MSHTML.DLL's IOleInPlaceActiveObject::OnDocWindowActivate
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::OnDocWindowActivate(BOOL /*fActivate*/)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      return E_NOTIMPL;
	  }
	
	  // * CImpIDocHostUIHandler::OnFrameWindowActivate
	  // *
	  // * Purpose: Called from MSHTML.DLL's IOleInPlaceActiveObject::OnFrameWindowActivate
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::OnFrameWindowActivate(BOOL /*fActivate*/)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      return E_NOTIMPL;
	  }
	
	  // * CImpIDocHostUIHandler::ResizeBorder
	  // *
	  // * Purpose: Called from MSHTML.DLL's IOleInPlaceActiveObject::ResizeBorder
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::ResizeBorder(
	  				LPCRECT /*prcBorder*/, 
	  				IOleInPlaceUIWindow* /*pUIWindow*/,
	  				BOOL /*fRameWindow*/)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      return E_NOTIMPL;
	  }
	
	  // * CImpIDocHostUIHandler::ShowContextMenu
	  // *
	  // * Purpose: Called when MSHTML.DLL would normally display its context menu
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::ShowContextMenu(
	  				DWORD /*dwID*/, 
	  				POINT* /*pptPosition*/,
	  				IUnknown* /*pCommandTarget*/,
	  				IDispatch* /*pDispatchObjectHit*/)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      return S_OK; // We've shown our own context menu. MSHTML.DLL will no longer try to show its own.
	  }
	
	  // * CImpIDocHostUIHandler::TranslateAccelerator
	  // *
	  // * Purpose: Called from MSHTML.DLL's TranslateAccelerator routines
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::TranslateAccelerator(LPMSG lpMsg,
	              /* [in] */ const GUID __RPC_FAR *pguidCmdGroup,
	              /* [in] */ DWORD nCmdID)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      return S_FALSE;
	  }
	
	  // * CImpIDocHostUIHandler::GetOptionKeyPath
	  // *
	  // * Purpose: Called by MSHTML.DLL to find where the host wishes to store 
	  // *	its options in the registry
	  // *
	  HRESULT FAR EXPORT  CCustomControlSite::XDocHostUIHandler::GetOptionKeyPath(BSTR* pbstrKey, DWORD)
	  {
	
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	  	return E_NOTIMPL;
	  }
	
	  STDMETHODIMP CCustomControlSite::XDocHostUIHandler::GetDropTarget( 
	              /* [in] */ IDropTarget __RPC_FAR *pDropTarget,
	              /* [out] */ IDropTarget __RPC_FAR *__RPC_FAR *ppDropTarget)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      return E_NOTIMPL;
	  }
	
	  STDMETHODIMP CCustomControlSite::XDocHostUIHandler::GetExternal( 
	              /* [out] */ IDispatch __RPC_FAR *__RPC_FAR *ppDispatch)
	  {
	  	// return the IDispatch we have for extending the object Model
	  	IDispatch* pDisp = (IDispatch*)theApp.m_pDispOM;
	  	pDisp->AddRef();
	  	*ppDispatch = pDisp;
	      return S_OK;
	  }
	          
	  STDMETHODIMP CCustomControlSite::XDocHostUIHandler::TranslateUrl( 
	              /* [in] */ DWORD dwTranslate,
	              /* [in] */ OLECHAR __RPC_FAR *pchURLIn,
	              /* [out] */ OLECHAR __RPC_FAR *__RPC_FAR *ppchURLOut)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      return E_NOTIMPL;
	  }
	          
	  STDMETHODIMP CCustomControlSite::XDocHostUIHandler::FilterDataObject( 
	              /* [in] */ IDataObject __RPC_FAR *pDO,
	              /* [out] */ IDataObject __RPC_FAR *__RPC_FAR *ppDORet)
	  {
	  	METHOD_PROLOGUE(CCustomControlSite, DocHostUIHandler)
	      return E_NOTIMPL;
	  }
	
	5. Add a new header file called "Idispimp.h" and add the following code to it:
	
	  /*
	   * IDispimp.H
	   * IDispatch
	   *
	   * Copyright (c)1995-1999 Microsoft Corporation, All Rights Reserved
	   */ 
	
	  #ifndef _IDISPIMP_H_
	  #define _IDISPIMP_H_
	
	  class CImpIDispatch : public IDispatch
	  {
	      protected:
	          ULONG               m_cRef;
	
	      public:
	          CImpIDispatch(void);
	          ~CImpIDispatch(void);
	
	          STDMETHODIMP QueryInterface(REFIID, void **);
	          STDMETHODIMP_(ULONG) AddRef(void);
	          STDMETHODIMP_(ULONG) Release(void);
	
	  		//IDispatch
	          STDMETHODIMP GetTypeInfoCount(UINT* pctinfo);
	          STDMETHODIMP GetTypeInfo(/* [in] */ UINT iTInfo,
	              /* [in] */ LCID lcid,
	              /* [out] */ ITypeInfo** ppTInfo);
	  		STDMETHODIMP GetIDsOfNames(
	              /* [in] */ REFIID riid,
	              /* [size_is][in] */ LPOLESTR *rgszNames,
	              /* [in] */ UINT cNames,
	              /* [in] */ LCID lcid,
	              /* [size_is][out] */ DISPID *rgDispId);
	  		STDMETHODIMP Invoke(
	              /* [in] */ DISPID dispIdMember,
	              /* [in] */ REFIID riid,
	              /* [in] */ LCID lcid,
	              /* [in] */ WORD wFlags,
	              /* [out][in] */ DISPPARAMS  *pDispParams,
	              /* [out] */ VARIANT  *pVarResult,
	              /* [out] */ EXCEPINFO *pExcepInfo,
	              /* [out] */ UINT *puArgErr);
	
	  };
	  #endif //_IDISPIMP_H_
	
	6. Add a new CPP file called "Idispimp.cpp" and add the following code to it:
	
	  /*
	   * idispimp.CPP
	   * IDispatch for Extending Dynamic HTML Object Model
	   *
	   * Copyright (c)1995-1999 Microsoft Corporation, All Rights Reserved
	   */ 
	
	  #include "stdafx.h"
	  #include "idispimp.h"
	
	  #ifdef _DEBUG
	  #define new DEBUG_NEW
	  #undef THIS_FILE
	  static char THIS_FILE[] = __FILE__;
	  #endif
	
	  // Hardcoded information for extending the Object Model 
	  // Typically this would be supplied through a TypeInfo
	  // In this case the name "xxyyzz" maps to DISPID_Extend 
	  const	WCHAR pszExtend[10]=L"xxyyzz";
	  #define DISPID_Extend 12345
	
	  /*
	   * CImpIDispatch::CImpIDispatch
	   * CImpIDispatch::~CImpIDispatch
	   *
	   * Parameters (Constructor):
	   *  pSite           PCSite of the site we're in.
	   *  pUnkOuter       LPUNKNOWN to which we delegate.
	   */ 
	
	  CImpIDispatch::CImpIDispatch( void )
	  {
	      m_cRef = 0;
	  }
	
	  CImpIDispatch::~CImpIDispatch( void )
	  {
	  	ASSERT( m_cRef == 0 );
	  }
	
	  /*
	   * CImpIDispatch::QueryInterface
	   * CImpIDispatch::AddRef
	   * CImpIDispatch::Release
	   *
	   * Purpose:
	   *  IUnknown members for CImpIDispatch object.
	   */ 
	
	  STDMETHODIMP CImpIDispatch::QueryInterface( REFIID riid, void **ppv )
	  {
	      *ppv = NULL;
	
	      if ( IID_IDispatch == riid )
	  	{
	          *ppv = this;
	  	}
	  	
	  	if ( NULL != *ppv )
	      {
	          ((LPUNKNOWN)*ppv)->AddRef();
	          return NOERROR;
	      }
	
	  	return E_NOINTERFACE;
	  }
	
	  STDMETHODIMP_(ULONG) CImpIDispatch::AddRef(void)
	  {
	      return ++m_cRef;
	  }
	
	  STDMETHODIMP_(ULONG) CImpIDispatch::Release(void)
	  {
	      return --m_cRef;
	  }
	
	  //IDispatch
	  STDMETHODIMP CImpIDispatch::GetTypeInfoCount(UINT* /*pctinfo*/)
	  {
	  	return E_NOTIMPL;
	  }
	
	  STDMETHODIMP CImpIDispatch::GetTypeInfo(/* [in] */ UINT /*iTInfo*/,
	              /* [in] */ LCID /*lcid*/,
	              /* [out] */ ITypeInfo** /*ppTInfo*/)
	  {
	  	return E_NOTIMPL;
	  }
	
	  STDMETHODIMP CImpIDispatch::GetIDsOfNames(
	              /* [in] */ REFIID riid,
	              /* [size_is][in] */ OLECHAR** rgszNames,
	              /* [in] */ UINT cNames,
	              /* [in] */ LCID lcid,
	              /* [size_is][out] */ DISPID* rgDispId)
	  {
	  	HRESULT hr;
	  	UINT	i;
	
	  	// Assume some degree of success
	  	hr = NOERROR;
	
	  	// Hardcoded mapping for this sample
	  	// A more usual procedure would be to use a TypeInfo
	  	for ( i=0; i < cNames; i++)
	  	{
	  		if (  2 == CompareString( lcid, NORM_IGNOREWIDTH, (char*)pszExtend, 3, (char*)rgszNames[i], 3 ) )
	  		{
	  			rgDispId[i] = DISPID_Extend;
	  		}
	  		else
	  		{
	  			// One or more are unknown so set the return code accordingly
	  			hr = ResultFromScode(DISP_E_UNKNOWNNAME);
	  			rgDispId[i] = DISPID_UNKNOWN;
	  		}
	  	}
	  	return hr;
	  }
	
	  STDMETHODIMP CImpIDispatch::Invoke(
	              /* [in] */ DISPID dispIdMember,
	              /* [in] */ REFIID /*riid*/,
	              /* [in] */ LCID /*lcid*/,
	              /* [in] */ WORD wFlags,
	              /* [out][in] */ DISPPARAMS* pDispParams,
	              /* [out] */ VARIANT* pVarResult,
	              /* [out] */ EXCEPINFO* /*pExcepInfo*/,
	              /* [out] */ UINT* puArgErr)
	  {
	
	  	// For this sample we only support a Property Get on DISPID_Extend
	  	// returning a BSTR with "Wibble" as the value
	  	if ( dispIdMember == DISPID_Extend )
	  	{
	  		if ( wFlags & DISPATCH_PROPERTYGET )
	  		{
	  			if ( pVarResult != NULL )
	  			{
	  				WCHAR buff[10]=L"Wibble";
	  				BSTR bstrRet = SysAllocString( buff );
	  				VariantInit(pVarResult);
	  				V_VT(pVarResult)=VT_BSTR;
	  				V_BSTR(pVarResult) = bstrRet;
	  			}
	  		}
	  	}
	
	  	return S_OK;
	  }
	
	7. Open MySample.cpp and, in the InitInstance of CMySample, add the following
	  code. Also comment out the call to AfxEnableControlContainer():
	
	  BOOL CMySampleApp::InitInstance()
	  {
	  	CCustomOccManager *pMgr = new CCustomOccManager;
	
	  	// Create an IDispatch class for extending the Dynamic HTML Object Model 
	  	m_pDispOM = new CImpIDispatch;
	
	  	// Set our control containment up but using our control container 
	  	// management class instead of MFC's default
	  	AfxEnableControlContainer(pMgr);
	
	  //	AfxEnableControlContainer();
	  //... rest of the code here
	  }
	
	8. Also add the following to the list of include files to MySample.cpp:
	
	  #include "afxpriv.h"
	  #include <..\src\occimpl.h>
	  #include "CustSite.h"
	
	9. Go to MySample.h and add the following statement at the bottom of the file.
	
	  extern CMySampleApp theApp;
	
	10. Now go to the ClassView tab and override the Create virtual function for
	  CMySampleView. Replace the function body with the code shown below, so the
	  function should look like:
	
	  BOOL CMySampleView::Create(LPCTSTR lpszClassName, LPCTSTR lpszWindowName, DWORD dwStyle, const RECT& rect, CWnd* pParentWnd, UINT nID, CCreateContext* pContext) 
	  {
	  // create the view window itself
	  	m_pCreateContext = pContext;
	  	if (!CView::Create(lpszClassName, lpszWindowName,
	  				dwStyle, rect, pParentWnd,  nID, pContext))
	  	{
	  		return FALSE;
	  	}
	
	  	RECT rectClient;
	  	GetClientRect(&rectClient);
	
	  	// create the control window
	  	// AFX_IDW_PANE_FIRST is a safe but arbitrary ID
	  	if (!m_wndBrowser.CreateControl(CLSID_WebBrowser, lpszWindowName,
	  				WS_VISIBLE | WS_CHILD, rectClient, this, AFX_IDW_PANE_FIRST))
	  	{
	  		DestroyWindow();
	  		return FALSE;
	  	}
	
	  	LPUNKNOWN lpUnk = m_wndBrowser.GetControlUnknown();
	  	HRESULT hr = lpUnk->QueryInterface(IID_IWebBrowser2, (void**) &m_pBrowserApp);
	  	if (!SUCCEEDED(hr))
	  	{
	  		m_pBrowserApp = NULL;
	  		m_wndBrowser.DestroyWindow();
	  		DestroyWindow();
	  		return FALSE;
	  	}
	
	  	return TRUE;
	  }
	
	11. Rebuild and run the application. When you right-click, the default pop-up
	  menu will not appear. This is because in the
	  CCustomControlSite::XDocHostUIHandler::ShowContextMenu method, the procedure
	  simply returns an S_OK so that Mshtml.dll no longer tries to display its own
	  pop-up menu. At this point, you could also add your own pop-up menu to
	  replace the default pop-up menu.
	
	NOTE: If future MFC versions change the implementation of COleControlSite or
	COccManager, this technique to disable the pop-up menu might not work. If you
	are using this technique to design your code, please be advised that you may
	have to change your code in the future.
	
	REFERENCES
	==========
	
	Driller (MFC) Sample
	(http://msdn.microsoft.com/downloads/samples/Internet/browser/driller/Default.asp)
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Vidyanand Rajpathak, Microsoft Corporation
	
	
	Additional query words: Driller, CHtmlView, popup, menu
	
	======================================================================
	Keywords          : kbDHTML kbieObj kbInternet kbMenu kbMFC kbVC600 kbVS600 kbWebBrowser kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
