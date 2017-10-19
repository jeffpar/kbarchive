---
layout: page
title: "Q288724: BUG: ATL COM Event Handler Arguments Received in Reverse Order"
permalink: /kb/288/Q288724/
---

## Q288724: BUG: ATL COM Event Handler Arguments Received in Reverse Order

	Article: Q288724
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbATL kbAutomation kbATL300bug kbDSupport kbGrpDSMFCATL
	Last Modified: 16-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An Active Template Library (ATL) class derived from IDispEventSimpleImpl that
	handles events from an OLE automation server may fail or exhibit unexpected
	behavior when an event is processed that has more than one argument. The
	arguments are in reverse order compared with the type library specification when
	they are passed to the handler function of this class. Processing the same event
	from within Microsoft Visual Basic work fine.
	
	The behavior can be reproduced with Microsoft Word or Microsoft Excel (97 or
	2000) as OLE automation servers, but also with other, custom servers that pass
	arguments as named arguments in the DISPPARAMS structure of IDispatch::Invoke
	when the event is fired.
	
	See the sample code in the "More Information" section of this article for
	details.
	
	CAUSE
	=====
	
	The ATL implementation of IDispEventSimpleImpl::Invoke() calls
	InvokeFromFuncInfo(), which is a helper function, to invoke the event.
	InvokeFromFuncInfo reorders the arguments of the DISPPARAM structure to be in
	left-to-right order so that they can be passed to the event handler function in
	the expected order. There is a problem with the reorder mechanism. The current
	function implementation assumes that the argument array always contains
	positional arguments placed right to left within the array. However, the
	algorithm ignores named arguments. The named arguments are placed before the
	positional arguments in the argument array with the corresponding dispatch ID
	placed at the same array position in the array containing the DISPID's for named
	arguments.
	
	RESOLUTION
	==========
	
	To work around this problem, use a version of Atlcom.h in which
	IDispEventSimpleImpl::InvokeFromFuncInfo() is corrected. Atlcom.h is located in
	the Program Files\Microsoft Visual Studio\VC98\ATL\Include folder.
	
	1. Replace the implementation of InvokeFromFuncInfo as follows:
	
	  HRESULT InvokeFromFuncInfo(void (__stdcall T::*pEvent)(), _ATL_FUNC_INFO& info, DISPPARAMS* pdispparams, VARIANT* pvarResult)
	     {
	     	ATLASSERT(pdispparams->cArgs == (UINT)info.nParams);
	
	     	T* pT = static_cast<T*>(this);
	
	     	VARIANTARG** pVarArgs = info.nParams ? (VARIANTARG**)alloca(sizeof(VARIANTARG*)*info.nParams) : 0;
	     	UINT nIndex = 0;
	
	     #ifndef _ATL_IGNORE_NAMED_ARGS
	     	for (nIndex; nIndex < pdispparams->cNamedArgs; nIndex++)
	     		pVarArgs[pdispparams->rgdispidNamedArgs[nIndex]] = &pdispparams->rgvarg[nIndex];
	     #endif
	
	     	for (; nIndex < pdispparams->cArgs; nIndex++)
	     		pVarArgs[info.nParams-nIndex-1] = &pdispparams->rgvarg[nIndex];
	
	     	CComStdCallThunk<T> thunk;
	     	thunk.Init(pEvent, pT);
	     	CComVariant tmpResult;
	     	if (pvarResult == NULL)
	     		pvarResult = &tmpResult;
	
	     	HRESULT hr = DispCallFunc(
	     		&thunk,
	     		0,
	     		info.cc,
	     		info.vtReturn,
	     		info.nParams,
	     		info.pVarTypes,
	     		pVarArgs,
	     		pvarResult);
	     	ATLASSERT(SUCCEEDED(hr));
	     	return hr;
	     }
	
	2. Replace the implementation of GetFuncInfoFromId() as follows:
	
	  HRESULT GetFuncInfoFromId(const IID& /*iid*/, DISPID dispidMember, LCID lcid, _ATL_FUNC_INFO& info)
	  	{
	  		CComPtr<ITypeInfo> spTypeInfo;
	  		if (InlineIsEqualGUID(*_tih.m_plibid, GUID_NULL))
	  		{
	  			_tih.m_plibid = &m_libid;
	  			_tih.m_pguid = &m_iid;
	  			_tih.m_wMajor = m_wMajorVerNum;
	  			_tih.m_wMinor = m_wMinorVerNum;
	  		}
	  		HRESULT hr = _tih.GetTI(lcid, &spTypeInfo);
	  		if (FAILED(hr))
	  			return hr;
	  		CComQIPtr<ITypeInfo2, &IID_ITypeInfo2> spTypeInfo2 = spTypeInfo;
	  		FUNCDESC* pFuncDesc = NULL;
	  		if (spTypeInfo2 != NULL)
	  		{
	  			UINT nIndex;
	  			hr = spTypeInfo2->GetFuncIndexOfMemId(dispidMember, INVOKE_FUNC, &nIndex);
	  			if (FAILED(hr))
	  				return hr;
	  			hr = spTypeInfo->GetFuncDesc(nIndex, &pFuncDesc);
	  			if (FAILED(hr))
	  				return hr;
	  		}
	  		else // search for funcdesc
	  		{
	  			TYPEATTR* pAttr;
	  			hr = spTypeInfo->GetTypeAttr(&pAttr);
	  			if (FAILED(hr))
	  				return hr;
	  			for (int i=0;i<pAttr->cFuncs;i++)
	  			{
	  				hr = spTypeInfo->GetFuncDesc(i, &pFuncDesc);
	  				if (FAILED(hr))
	  					return hr;
	  				if (pFuncDesc->memid == dispidMember)
	  					break;
	  				spTypeInfo->ReleaseFuncDesc(pFuncDesc);
	  				pFuncDesc = NULL;
	  			}
	  			spTypeInfo->ReleaseTypeAttr(pAttr);
	  			if (pFuncDesc == NULL)
	  				return E_FAIL;
	  		}
	
	  		ATLASSERT(pFuncDesc->cParams <= _ATL_MAX_VARTYPES);
	  		if (pFuncDesc->cParams > _ATL_MAX_VARTYPES)
	  			return E_FAIL;
	
	   		 for (int i=0; i<pFuncDesc->cParams; i++)
	       		 {
	        		info.pVarTypes[i] = pFuncDesc->lprgelemdescParam[i].tdesc.vt;
	        		if (info.pVarTypes[i] == VT_PTR)
	             			info.pVarTypes[i] = (VARTYPE)(pFuncDesc->lprgelemdescParam[i].tdesc.lptdesc->vt | VT_BYREF);
	       		 	if (info.pVarTypes[i] == VT_USERDEFINED)
	              			info.pVarTypes[i] = GetUserDefinedType(spTypeInfo, pFuncDesc->lprgelemdescParam[i].tdesc.hreftype);
	        	}
	
	  		VARTYPE vtReturn = pFuncDesc->elemdescFunc.tdesc.vt;
	  		switch(vtReturn)
	  		{
	  		case VT_INT:
	  			vtReturn = VT_I4;
	  			break;
	  		case VT_UINT:
	  			vtReturn = VT_UI4;
	  			break;
	  		case VT_VOID:
	  			vtReturn = VT_EMPTY; // this is how DispCallFunc() represents void
	  			break;
	  		case VT_HRESULT:
	  			vtReturn = VT_ERROR;
	  			break;
	  		}
	  		info.vtReturn = vtReturn;
	  		info.cc = pFuncDesc->callconv;
	  		info.nParams = pFuncDesc->cParams;
	  		spTypeInfo->ReleaseFuncDesc(pFuncDesc);
	  		return S_OK;
	  	}
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following sample creates an event handler class that is derived from
	IDispEventSimpleImpl and catches the WorkbookBeforeClose event fired by an Excel
	workbook. The Excel Type Library definition of this event function is:
	
	  HRESULT WorkbookBeforeClose( struct _Workbook * Wb, VARIANT_BOOL * Cancel);
	
	The main function creates a new Excel instance, adds a workbook, and closes this
	workbook. This calls your event notification and displays a message box. Then
	Excel is closed again.
	
	1. Open Visual C++ and create a new Win32 Console application named "Xlevts"
	  (without the quotation marks). Select A simple application.
	
	2. Paste the following code into Xlevts.cpp. Update the file location of the
	  #import directive depending on your Microsoft Office installation.
	
	  #include "stdafx.h"
	  #include <atlbase.h>
	  extern CComModule _Module;
	  #include <atlcom.h>
	
	  #pragma warning (disable:4146)
	  #import <C:\\Program Files\\Microsoft Office\\Office\\mso9.dll> \ 
	          no_namespace rename("DocumentProperties","DocumentPropertiesXL") 
	  #import <C:\\Program Files\\Common Files\\Microsoft Shared\\VBA\VBA6\\vbe6ext.olb> no_namespace 
	  #import <C:\\Program Files\\Microsoft Office\\Office\\excel9.olb> \ 
	          rename("DialogBox","DialogBoxXL") rename("RGB","RGBXL") \ 
	          exclude("IFont", "IPicture")
	
	  using namespace Excel;   
	
	  static _ATL_FUNC_INFO WorkbookBeforeClose = 
	  {
	  	CC_STDCALL,	// Calling convention.
	  	VT_EMPTY,	// Return type.
	  	2,				// Number of arguments.
	  	{ VT_DISPATCH, VT_BOOL|VT_BYREF }	// Argument types.
	  };
	
	  class  CEventHdl : public IDispEventSimpleImpl<235, CEventHdl, &__uuidof(AppEvents)>
	  {
	  public:	
	  	
	  	BEGIN_SINK_MAP(CEventHdl)
	  		SINK_ENTRY_INFO(235,__uuidof(Excel::AppEvents), 0x622, WBBeforeClose, &WorkbookBeforeClose)
	  	END_SINK_MAP()
	  		
	  	STDMETHOD(WBBeforeClose)(IDispatch* pBook, VARIANT_BOOL* pbResult)
	  	{
	  		*pbResult = VARIANT_FALSE;
	  		MessageBox(NULL, _T("CEventHdl"), _T("WorkbookBeforeClose called."), MB_OK);
	  		return S_OK;
	  	}
	  };
	
	  int main(int argc, char* argv[])
	  {
	  	
	  	CoInitialize(NULL);
	
	  	{
	  		HRESULT hr;
	  		
	  		// Start Excel
	  		_ApplicationPtr app;
	  		app.CreateInstance(L"Excel.Application.9");
	  		
	  		// Make it visible
	  		app->PutVisible(0, VARIANT_TRUE);
	  		
	  		// Create and connnect event handler...
	  		CEventHdl *pHdl = new CEventHdl();
	  		pHdl->AddRef();
	  		IUnknown *pUnk = NULL;
	  		app->QueryInterface(&pUnk);
	  		hr = pHdl->DispEventAdvise(pUnk, &__uuidof(AppEvents));
	  		
	  		// Add a workbook...   
	  		WorkbooksPtr books = app->Workbooks;   
	  		_WorkbookPtr book1 = books->Add((long)xlWorksheet);
	  		
	  		// Close workbook
	  		book1->PutSaved(0, VARIANT_TRUE);
	  		book1->Close();	// This line calls our event handler !!!
	  		
	  		// Finish Excel
	  		app->Quit();
	  		
	  		// Disconnect and release event handler
	  		hr = pHdl->DispEventUnadvise(pUnk, &__uuidof(AppEvents));
	  		pUnk->Release();
	  		delete pHdl;
	  	}
	  	
	  	CoUninitialize();
	  	return 0;
	  }
	
	3. Build a debug application.
	
	4. Put a break point into the WBBeforeClose function of the CEventHdl class.
	
	5. Press F5 to start debugging the application. Wait until the break point is
	  reached.
	
	6. Open the Variables window if it is not already open. (From the View menu,
	  choose Debug Windows, and then choose Variables.) Open the tree in the
	  Variables window to view the pBook and pbResult members. They don't seem to
	  show valid values. Continuing the application doesn't work as expected, Excel
	  isn't closed. Close the applications manually.
	
	7. Copy Atlcom.h to the folder where this project is located and rename it
	  "Myatlcom.h" (without the quotation marks). Change the implementation of
	  InvokeFromFuncInfo as described in the "Resolution" section of this article.
	
	8. At the beginning of this source file Xlevt.cpp, replace the line
	
	  #include <atlcom.h>
	
	  with:
	
	  #include "myatlcom.h"
	
	  Rebuild the project.
	
	9. Repeat steps 5 and 6.
	
	  This time the variables show correct values and Excel is closed automatically
	  when the application is finished.
	
	REFERENCES
	==========
	
	The "Passing Parameters" topic on MSDN Online provides more information about
	how arguments are passed during IDispatch::Invoke:
	
	  http://msdn.microsoft.com/library/psdk/automat/chap5_3kz7.htm
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbAutomation kbATL300bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
