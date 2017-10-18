---
layout: page
title: "Q223139: HOWTO: Add Support for Hosting VBScript to an ATL Application"
permalink: kb/223/Q223139/
---

## Q223139: HOWTO: Add Support for Hosting VBScript to an ATL Application

	Article: Q223139
	Product(s): Microsoft C Compiler
	Version(s): 3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL200 kbAXScript kbVBScript kbVC500 kbVC600 kbATL300 kbGrpDSO kbActiveXScr
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 3.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can add VBA-like scripting capability to your ATL application with little
	overhead, using Microsoft ActiveX Scripting technologies. This article
	demonstrates how to create a new ATL application, or modify an existing one,
	that incorporates support for VBScript.
	
	MORE INFORMATION
	================
	
	Follow the steps below to build and run the example:
	
	1. Create a new ATL COM EXE project called AtlClientApp, or use an existing such
	  project to which you want to add support for hosting VBScript.
	
	2. Follow the steps described in the following Microsoft Knowledge Base article,
	  to add a dialog to your application:
	
	Q196135 HOWTO: Create an Automation Client Project Using ATL
	
	3. Open your dialog in ResourceView, and add an edit-box where the user can type
	  in some VBScript. Right-click on it, choose properties, and make it
	  "Multiline" and "Want return."
	
	4. Select New ATL Object from the Insert menu. Add a Simple Object named
	  MyObject on the Names tab, and select Support Connection Points on the
	  Attributes tab.
	
	5. Add a new file called MyScriptSite.h to your application, and paste the
	  following code into it:
	
	     #include <windows.h>
	     #include <activscp.h>
	
	     class CMyScriptSite : public IActiveScriptSite {
	     private:
	        ULONG m_dwRef;
	     public:
	        IUnknown *m_pUnkScriptObject;
	        ITypeInfo *m_pTypeInfo;
	
	        CMyScriptSite::CMyScriptSite() {
	           m_pUnkScriptObject = 0;
	           m_pTypeInfo = 0;
	           m_dwRef = 1;
	        }
	
	        // IUnknown methods...
	        virtual HRESULT __stdcall QueryInterface(REFIID riid,
	           void **ppvObject) {
	           *ppvObject = NULL;
	           return E_NOTIMPL;
	        }
	        virtual ULONG _stdcall AddRef(void) {
	           return ++m_dwRef;
	        }
	        virtual ULONG _stdcall Release(void) {
	           if(--m_dwRef == 0) return 0;
	           return m_dwRef;
	        }
	
	        // IActiveScriptSite methods...
	        virtual HRESULT __stdcall GetLCID(LCID *plcid) {
	           return S_OK;
	        }
	     
	        virtual HRESULT __stdcall GetItemInfo(LPCOLESTR pstrName,
	           DWORD dwReturnMask, IUnknown **ppunkItem, ITypeInfo **ppti) {
	           // Is it expecting an ITypeInfo?
	           if(ppti) {
	              // Default to NULL.
	              *ppti = NULL;
	           
	              // See if asking about ITypeInfo... 
	              if(dwReturnMask & SCRIPTINFO_ITYPEINFO) {
	                 *ppti = m_pTypeInfo;
	              }
	           }
	        
	           // Is the engine passing an IUnknown buffer?
	           if(ppunkItem) {
	              // Default to NULL.
	              *ppunkItem = NULL;
	           
	              // Is Script Engine looking for an IUnknown for our object?
	              if(dwReturnMask & SCRIPTINFO_IUNKNOWN) {
	                 // Check for our object name...
	                 if (!_wcsicmp(L"MyObject", pstrName)) {
	                    // Provide our object.
	                    *ppunkItem = m_pUnkScriptObject;
	                    // Addref our object...
	                    m_pUnkScriptObject->AddRef();
	                 }
	              }
	           }
	        
	           return S_OK;
	        }
	     
	        virtual HRESULT __stdcall GetDocVersionString(BSTR *pbstrVersion) {
	           return S_OK;
	        }
	     
	        virtual HRESULT __stdcall OnScriptTerminate(
	           const VARIANT *pvarResult, const EXCEPINFO *pexcepInfo) {
	           return S_OK;
	        }
	     
	        virtual HRESULT __stdcall OnStateChange(SCRIPTSTATE ssScriptState) {
	           return S_OK;
	        }
	     
	        virtual HRESULT __stdcall OnScriptError(
	           IActiveScriptError *pscriptError) {
	           ::MessageBox(NULL, "OnScriptError()", "Error", MB_SETFOREGROUND);     
	           return S_OK;
	        }
	     
	        virtual HRESULT __stdcall OnEnterScript(void) {
	           return S_OK;
	        }
	     
	        virtual HRESULT __stdcall OnLeaveScript(void) {
	           return S_OK;
	        }
	
	     };
	
	6. Remove any code you have in your OnOK() dialog button handler, and add the
	  following code:
	
	     // Instantiate script site & objects...
	     CMyScriptSite *pMySite = new CMyScriptSite;
	     CComObject<CMyObject> *pMyObject = new CComObject<CMyObject>;
	     
	     // Register your type-library
	     ITypeLib *ptLib = 0;
	     HRVERIFY(LoadTypeLib(L"AtlClientApp.tlb", &ptLib), "LoadTypeLib");
	     
	     // Initialize your IActiveScriptSite implementation with your
	     // object's ITypeInfo...
	     ptLib->GetTypeInfoOfGuid(CLSID_MyObject, &pMySite->m_pTypeInfo);
	     ptLib->Release();
	     
	     // Initialize your IActiveScriptSite implementation with your
	     // script object's IUnknown interface...
	     HRVERIFY(pMyObject->QueryInterface(IID_IUnknown,
	        (void **)&pMySite->m_pUnkScriptObject), "IUnknown initialization");
	     
	     // Start inproc script engine, VBSCRIPT.DLL
	     IActiveScript *pAS;
	     HRVERIFY(CoCreateInstance(CLSID_VBScript, NULL, CLSCTX_INPROC_SERVER,
	        IID_IActiveScript, (void **)&pAS), 
	        "CoCreateInstance() for CLSID_VBScript");
	     
	     // Get engine's IActiveScriptParse interface.
	     IActiveScriptParse *pASP;
	     HRVERIFY(pAS->QueryInterface(IID_IActiveScriptParse, (void **)&pASP),
	        "QueryInterface() for IID_IActiveScriptParse");
	     
	     // Give engine your IActiveScriptSite interface...
	     HRVERIFY(pAS->SetScriptSite((IActiveScriptSite *)pMySite),
	        "IActiveScript::SetScriptSite()");
	     
	     // Give the engine a chance to initialize itself...
	     HRVERIFY(pASP->InitNew(), "IActiveScriptParse::InitNew()");
	     
	     // Add a root-level item to the engine's name space...
	     HRVERIFY(pAS->AddNamedItem(L"MyObject", SCRIPTITEM_ISVISIBLE |
	        SCRIPTITEM_ISSOURCE), "IActiveScript::AddNamedItem()");
	     
	     // Get text from edit-box...
	     HWND editHwnd = GetDlgItem(IDC_EDIT1);
	     char szBuf[1024];
	     int len = ::GetWindowText(editHwnd, szBuf, 1024);
	     szBuf[len] = 0;
	     
	     // Convert it to a wide-char string...
	     WCHAR wcBuf[1024];
	     memset(wcBuf, 0, sizeof(WCHAR)*1024);
	     MultiByteToWideChar(CP_ACP, 0, szBuf, strlen(szBuf), wcBuf, 1024);
	     
	     // Parse the code scriptlet...
	     EXCEPINFO ei;
	     BSTR pParseText = ::SysAllocString(wcBuf);
	     HRVERIFY(pASP->ParseScriptText(pParseText, L"MyObject", NULL, NULL, 0,
	        0, 0L, NULL, &ei), "ParseScriptText");
	     ::SysFreeString(pParseText);
	     
	     // Set the engine state. This line actually triggers the execution
	     // of the script.
	     HRVERIFY(pAS->SetScriptState(SCRIPTSTATE_CONNECTED), "SetScriptState");
	     
	     // Let user know script-run is finished...
	     ::MessageBox(NULL, "Script finished, click me to fire event...", "",
	        MB_SETFOREGROUND);
	     
	     // Fire an event...
	     pMyObject->Fire_MyEvent();
	     
	     // Close script and release interfaces...
	     pAS->Close();
	     pASP->Release();
	     pAS->Release();
	     
	     // Delete site & objects...
	     delete pMySite;
	     delete pMyObject;
	     return 0;
	
	7. Add the following to the top of the same file (ClientDlg.h), just below the
	  #include for atlhost.h:
	
	     #include "AtlClientApp.h"
	     #include "MyObject.h"
	     #include "MyScriptSite.h"
	     void HRVERIFY(HRESULT hr, char * msg);
	     extern const GUID CLSID_VBScript;
	
	8. Add the following to the end of your ClientDlg.cpp:
	
	     void HRVERIFY(HRESULT hr, char * msg)
	     {
	        if(FAILED(hr)) {
	           static char buf[1024];
	           sprintf(buf, "Error: %08lx, %s", hr, msg);
	           ::MessageBox(NULL, buf, "", MB_SETFOREGROUND);
	           _exit(0);
	        }
	
	     }
	
	     // Script Engine CLSIDs...
	     #include <initguid.h>
	     DEFINE_GUID(CLSID_VBScript, 0xb54f3741, 0x5b07, 0x11cf, 0xa4, 0xb0, 0x0,
	                 0xaa, 0x0, 0x4a, 0x55, 0xe8);
	
	9. Right-click on the IMyObject interface in ClassView, add the following two
	  methods named SayHi and SayHi2, and implement them as follows:
	
	     STDMETHODIMP CMyObject::SayHi()
	     {
	        ::MessageBox(NULL, "Inside SayHi()", "", MB_SETFOREGROUND);
	        return S_OK;
	     }
	
	     STDMETHODIMP CMyObject::SayHi2()
	     {
	        ::MessageBox(NULL, "Inside SayHi2()", "", MB_SETFOREGROUND);
	        return S_OK;
	     }
	
	10. Right-click on your IMyObjectEvents interface and add a method named
	  MyEvent. Before going to the next step, you should Choose 'Rebuild All' from
	  the Build menu, even though it won't completely build yet. This is so your
	  project gets updated and ClassView will recognize your event in the next
	  step.
	
	11. In ClassView, right-click on your CMyObject class, and select Implement
	  Connection Point. Check the IMyObjectEvents interface, and click OK.
	
	12. Select Rebuild All from the Build menu and run the example. Type in the
	  following example VBScript in the edit box, and click Run:
	
	     SayHi
	
	     Sub MyObject_MyEvent
	        SayHi2
	     End Sub
	
	REFERENCES
	==========
	
	For additional information about Microsoft ActiveX Script Hosting, please see
	the following article(s) in the Microsoft Knowledge Base:
	
	Q221992 Add Support for Hosting VBScript to Your MFC Application
	
	Q183698 SAMPLE: AXSH.EXE Demonstrates Implementing ActiveX Script Hosts
	
	Q168214 SAMPLE: MFCAXS Implements an Active Script Host Using MFC
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Joe Crump, Microsoft Corporation
	
	
	Additional query words: vba sdk jscript javascript
	
	======================================================================
	Keywords          : kbActiveX kbATL200 kbAXScript kbVBScript kbVC500 kbVC600 kbATL300 kbGrpDSO kbActiveXScript 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch kbATL300 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
