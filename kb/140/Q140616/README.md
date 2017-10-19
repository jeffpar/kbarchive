---
layout: page
title: "Q140616: MFCDISP: Replacing MFC IDispatch Implementation"
permalink: /kb/140/Q140616/
---

## Q140616: MFCDISP: Replacing MFC IDispatch Implementation

	Article: Q140616
	Product(s): Microsoft C Compiler
	Version(s): 3.51,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbActiveX kbAutomation kbCOMt kbMFC kbVC400 kbVC500 kbVC600 MSGRAPH kbG
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 4.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	- Microsoft OLE Libraries, used with:
	   - Microsoft Windows NT Server version 3.51 
	   - Microsoft Windows NT Workstation version 3.51 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the Microsoft .NET Framework and the unmanaged native Microsoft Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	MFCDISP demonstrates how to replace MFC's IDispatch implementation with a
	type-library-based IDispatch implementation that uses the OLE system API
	DispInvoke and DispGetIDsOfNames to implement IDispatch::Invoke and
	IDispatch::GetIDsOfNames.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Mfcdisp.exe now
	  (http://download.microsoft.com/download/vc40pro/demo/1/WIN98/EN-US/Mfcdisp.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Mfcdispvcnet.exe now
	  (http://download.microsoft.com/download/VisualStudioNET/sample/2.0/WIN98MeXP/EN-US/Mfcdispvcnet.exe)
	
	Release Date: June 24, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	After downloading the file, use the following command to extract the sample and
	build the appropriate directory structure:
	
	  MFCDISP.EXE -d
	
	MFC's implementation of server OLE Automation currently has the following
	limitations. These limitations can be removed by replacing or modifying MFC's
	IDispatch implementation with a type-library-based implementation of IDispatch.
	
	1. MFC's IDispatch doesn't support named arguments. A type-library-based
	  implementation supports this.
	
	2. MFC's IDispatch::Invoke doesn't fully support array parameters. Array
	  parameters are passed in a VARIANT to an automation property/method
	  implementation. This requires the automation method/property to type check
	  the VARIANT. A type-library-based implementation allows an array parameter
	  type to be SAFEARRAY*. It will also type check this parameter before passing
	  it to the automation method/property.
	
	3. MFC's IDispatch::Invoke doesn't fully support automation methods with the
	  vararg attribute. These are methods that can have a variable number of
	  arguments. The method implementation will see the variable number of
	  arguments as a SAFEARRAY of VARIANTs. MFC will support this if the client
	  passes a VARIANT containing a SAFEARRAY of VARIANTs, with each array element
	  representing a parameter. However late-binding clients will not pass
	  parameters in this manner. Instead these client will pass variable parameters
	  the same as other parameters. Consequently MFC automation servers will not
	  support these clients. A type-library-based implementation completely
	  supports vararg methods. It will create an array of parameters and will pass
	  it to the automation method implementation even if the client doesn't pass
	  the array.
	
	  (Optional arguments are supported in MFC's implementation through parameters
	  whose type is VARIANT. Note that optional parameters are different from
	  methods with the vararg attribute. The number of parameters of a method that
	  has optional parameters is bounded. The number of parameters of a method that
	  has the vararg attribute is not bounded.)
	
	4. MFC's implementation doesn't support vtbl-binding. However it is possible to
	  add vtbl-binding support without having to replace MFC's IDispatch
	  implementation. Visual C++ 4.1 includes a sample, ACDUAL, that illustrates
	  one way to do this using a type-library-based implementation.
	
	Steps to Replace MFC's IDispatch Implementation
	-----------------------------------------------
	
	If you do not already know how to create a non-MFC automation server, please see
	the HELLO sample in the Win32 SDK and the OLE Automation documentation in the
	Win32 online documentation (\Ole\Ole Automation) before using the following
	steps.
	
	The following instructions use Visual C++ 4.0. However, a type-library- based
	IDispatch implementation can be added to any MFC application. The instructions
	build a sample called Test. You can use names appropriate for your project.
	
	1. Create an MFC application that includes the automation header files and links
	  with the automation libraries. One way to do this is to generate an
	  application with OLE Automation support using AppWizard. The sample was
	  generated using AppWizard, and 'Test' was used as the project name. The
	  following steps show how to add a type-library-based IDispatch implementation
	  to the CTestDoc class. The same steps can be used to add automation to any
	  CCmdTarget-derived class.
	
	2. Modify the Test.odl file created by AppWizard by replacing the dispinterface
	  with an interface and by specifying a locale ID for the type library. The
	  interface should define the automation properties and methods that need to be
	  exposed. (DispInvoke will not work with a dispinterface.)
	
	  The sample uses the Test.odl file:
	
	     [ uuid(C04AADF0-2A82-11CF-84F5-00AA00C006CF), version(1.0), lcid(0x09)
	  ]
	     library Test
	     {
	        importlib("stdole32.tlb");
	        [
	           uuid(C04AADF1-2A82-11CF-84F5-00AA00C006CF),
	           oleautomation,
	           dual
	        ]
	        interface ITest : IDispatch
	        {
	        [id(1), propput] HRESULT TestProperty([in]short nNewValue);
	        [id(1), propget] HRESULT TestProperty([out, retval] short *retval);
	        [id(2)] HRESULT TestMethod([in] short n, [out,retval] short
	     *retval);
	        };
	
	     //  Primary dispatch interface for CTestDoc
	
	     /*  //  Replace this dispinterface with a interface
	        [ uuid(C04AADF1-2A82-11CF-84F5-00AA00C006CF) ]
	        dispinterface ITest
	        {
	           properties:
	              // NOTE - ClassWizard will maintain property information here.
	              //    Use extreme caution when editing this section.
	              //{ {AFX_ODL_PROP(CTestDoc)
	              //} }AFX_ODL_PROP
	
	           methods:
	              // NOTE - ClassWizard will maintain method information here.
	              //    Use extreme caution when editing this section.
	              //{ {AFX_ODL_METHOD(CTestDoc)
	              //} }AFX_ODL_METHOD
	
	        };
	     */ 
	         [ uuid(943B3F80-CD85-11CE-815A-00AA0060D733) ]
	        coclass CTestDoc
	        {
	           [default] interface ITest;
	        };
	        //{ {AFX_APPEND_ODL} }
	     };
	
	  A coclass must be provided if the object is a top-level object (that is, if
	  the object can be created by CoCreateInstance). The UUID of the coclass must
	  be the CLSID of the object. The GUID generated by AppWizard for the
	  dispinterface can be used for the interface that replaces it. Add a locale id
	  for the type library (the sample uses lcid(0x09) for English).
	
	  New CCmdTarget-derived automation objects can be added using ClassWizard. Edit
	  the .odl file to make the changes after each object is added. (The sample
	  adds automation only to the CDocument- derived class, CTestDoc.)
	
	3. Change the project settings for the .odl file. Open the appropriate platform
	  folder in the left pane of the Project Settings dialog box, and select the
	  .odl file. Click the OLE Types tab in the right pane, and enter an output
	  header file name (Itest.h). mktyplib will generate this header file when it
	  compiles the .odl file. This header file will contain the C/C++ definition of
	  the ITest interface. It will also contain the CLSID of the object, the
	  Interface GUID of the ITest interface, and the GUID of the type library.
	
	  Space must be allocated for the GUIDs that are defined in Itest.h. This is
	  done by creating a separate source file (Guids.cpp) that includes Ole2.h,
	  Initguid.h, and Itest.h. The OLE header file Initguid.h will cause space to
	  be allocated for the GUIDs defined in Itest.h. Make sure that Guids.cpp is
	  not built with a pre-compiled header. To do this, add Guids.cpp to the
	  project. Then change the project settings for the Guids.cpp file. First open
	  the appropriate platform folder in the left pane of the Project Settings
	  dialog box. Select Guids.cpp in the build folder in the left pane of the
	  Project Settings dialog box, click the C/C++ tab, click the Precompiled
	  headers category, and select Not using precompiled headers.
	
	  Include Itest.h in each source file that uses the GUIDs or interfaces that it
	  defines. The sample includes Itest.h in Test.cpp, Testdoc.h, and Testdoc.cpp.
	
	4. Define the interface as a nested class of the object that is going to
	  implement it by using the BEGIN_INTERFACE_PART and END_INTERFACE_PART macros.
	  The sample defines the ITest interface as a nested class of the CTestDoc
	  class in testdoc.h as follows:
	
	        DECLARE_INTERFACE_MAP()
	
	        BEGIN_INTERFACE_PART(MyDispatch, ITest)
	          STDMETHOD(GetTypeInfoCount)(UINT FAR* pctinfo);
	          STDMETHOD(GetTypeInfo)(
	            UINT itinfo,
	            LCID lcid,
	            ITypeInfo FAR* FAR* pptinfo);
	          STDMETHOD(GetIDsOfNames)(
	            REFIID riid,
	            OLECHAR FAR* FAR* rgszNames,
	            UINT cNames,
	            LCID lcid,
	            DISPID FAR* rgdispid);
	          STDMETHOD(Invoke)(
	            DISPID dispidMember,
	            REFIID riid,
	            LCID lcid,
	            WORD wFlags,
	            DISPPARAMS FAR* pdispparams,
	            VARIANT FAR* pvarResult,
	            EXCEPINFO FAR* pexcepinfo,
	           UINT FAR* puArgErr);
	
	          /* ITest methods */ 
	          STDMETHOD(put_TestProperty)(short nNewValue);
	          STDMETHOD(get_TestProperty)(short FAR* retval);
	          STDMETHOD(TestMethod)(short n, short FAR* retval);
	        END_INTERFACE_PART(MyDispatch)
	
	  Add a private class member to the object's class to hold the typeinfo of the
	  interface:
	
	     private:
	         LPTYPEINFO       m_ptinfo;           // ITest type information
	
	5. Implement the interface. The sample implements the ITest interface as follows
	  in Testdoc.cpp:
	
	  a. An interface map is declared as follows to hook into the object's
	     IUnknown::QueryInterface implementation. When a client asks for IDispatch
	     (late binding/id-binding) or ITest (vtbl-binding) using
	     IUnknown::QueryInterface, the vtbl for the XMyDispatch nested class will
	     be returned.
	
	           BEGIN_INTERFACE_MAP(CTestDoc, CDocument)
	              INTERFACE_PART(CTestDoc, IID_IDispatch, MyDispatch)
	              INTERFACE_PART(CTestDoc, IID_ITest, MyDispatch)
	           END_INTERFACE_MAP()
	
	     Remove the interface map inserted by AppWizard. For example, the sample
	     removes the following interface map from Testdoc.cpp:
	
	           BEGIN_INTERFACE_MAP(CTestDoc, CDocument)
	              INTERFACE_PART(CTestDoc, IID_ITest, Dispatch)
	           END_INTERFACE_MAP()
	
	  b. Remove the declaration of the interface IID because Guids.cpp will
	     allocate space for it. For example, the sample removes the following from
	     Testdoc.cpp:
	
	           static const IID IID_ITest =
	           {0xc04aadf1, 0x2a82, 0x11cf, { 0x84, 0xf5, 0x0, 0xaa, 0x0, 0xc0,
	           0x6, 0xcf } };
	    
	
	  c. Load the typeinfo of the interface from the type library when the object
	     is created.
	
	           BOOL CTestDoc::OnNewDocument()
	           {
	             HRESULT hr;
	             LPTYPELIB ptlib;
	
	             if (!CDocument::OnNewDocument())
	                 return FALSE;
	
	             hr = LoadRegTypeLib(LIBID_Test, 1, 0, 0x09, &ptlib);
	             if (FAILED(hr))
	             {
	              AfxMessageBox("Can't find type library test.tlb. Re-register \ 
	                                 by running test.exe");
	                  return FALSE;
	             }
	             hr = ptlib->GetTypeInfoOfGuid(IID_ITest, &m_ptinfo);
	             if (FAILED(hr))
	             {
	                 ptlib->Release();
	                 return FALSE;
	             }
	             ptlib->Release();
	             return TRUE;
	           }
	      
	
	  d. Release the typeinfo of the interface in the destructor of the object.
	
	    
	           CTestDoc::~CTestDoc()
	           {
	              m_ptinfo->Release();
	              AfxOleUnlockApp();
	           }
	      
	
	  e. The ITest interface is implemented as follows. Note the use of the
	     METHOD_PROLOGUE macro to gain access to the member functions of the object
	     by using the pThis variable. QueryInterface, AddRef, and Release are
	     delegated to MFC's implementation. IDispatch is implemented using
	     DispGetIDsOfNames and DispInvoke. DispInvoke will call the appropriate
	     automation method or property function.
	
	    
	           ULONG FAR EXPORT CTestDoc::XMyDispatch::AddRef()
	           {
	           METHOD_PROLOGUE(CTestDoc, MyDispatch)
	              return pThis->ExternalAddRef();
	           }
	           ULONG FAR EXPORT CTestDoc::XMyDispatch::Release()
	           {
	               METHOD_PROLOGUE(CTestDoc, MyDispatch)
	               return pThis->ExternalRelease();
	           }
	           STDMETHODIMP CTestDoc::XMyDispatch::QueryInterface(REFIID riid,
	           LPVOID FAR* ppvObj)
	           {
	               METHOD_PROLOGUE(CTestDoc, MyDispatch)
	               return (HRESULT)pThis->ExternalQueryInterface(&riid, ppvObj);
	           }
	           STDMETHODIMP
	              CTestDoc::XMyDispatch::GetTypeInfoCount(UINT FAR* pctinfo)
	           {
	               METHOD_PROLOGUE(CTestDoc, MyDispatch)
	               *pctinfo = 1;
	               return NOERROR;
	           }
	           STDMETHODIMP CTestDoc::XMyDispatch::GetTypeInfo(
	                 UINT itinfo,
	                  LCID lcid,
	                  ITypeInfo FAR* FAR* pptinfo)
	           {
	           METHOD_PROLOGUE(CTestDoc, MyDispatch)
	             *pptinfo = NULL;
	
	             if(itinfo != 0)
	                 return ResultFromScode(DISP_E_BADINDEX);
	             pThis->m_ptinfo->AddRef();
	             *pptinfo = pThis->m_ptinfo;
	             return NOERROR;
	           }
	           STDMETHODIMP CTestDoc::XMyDispatch::GetIDsOfNames(
	              REFIID riid,
	                   OLECHAR FAR* FAR* rgszNames,
	                   UINT cNames,
	                   LCID lcid,
	                   DISPID FAR* rgdispid)
	           {
	           METHOD_PROLOGUE(CTestDoc, MyDispatch)
	           return DispGetIDsOfNames(pThis->m_ptinfo, rgszNames, cNames,
	                                 rgdispid);
	           }
	           STDMETHODIMP CTestDoc::XMyDispatch::Invoke(
	                DISPID dispidMember,
	                 REFIID riid,
	                 LCID lcid,
	                 WORD wFlags,
	                 DISPPARAMS FAR* pdispparams,
	                 VARIANT FAR* pvarResult,
	                 EXCEPINFO FAR* pexcepinfo,
	                 UINT FAR* puArgErr)
	           {
	           METHOD_PROLOGUE(CTestDoc, MyDispatch)
	
	           return DispInvoke(
	             &pThis->m_xMyDispatch, pThis->m_ptinfo,
	             dispidMember, wFlags, pdispparams,
	           pvarResult, pexcepinfo, puArgErr);
	           }
	           STDMETHODIMP CTestDoc::XMyDispatch::get_TestProperty(short
	     *pnRetVal)
	           {
	           METHOD_PROLOGUE(CTestDoc, MyDispatch)
	
	           *pnRetVal = pThis->m_nTestProperty;
	           return NOERROR;
	           }
	           STDMETHODIMP CTestDoc::XMyDispatch::put_TestProperty(short
	     nNewValue)
	           {
	           METHOD_PROLOGUE(CTestDoc, MyDispatch)
	
	           pThis->m_nTestProperty = nNewValue;
	              return NOERROR;
	           }
	           STDMETHODIMP CTestDoc::XMyDispatch::TestMethod(short n, short
	             *pnRetVal)
	           {
	              *pnRetVal = n;
	              return NOERROR;
	           }
	      
	
	6. Use AfxOleRegisterTypeLib to register the type library on start up in
	  CWinApp::InitInstance. The sample does it in Test.cpp. Ensure that Afxctl.h
	  is included in the source file that uses AfxOleRegisterTypeLib.
	
	        // Register type library and the interfaces in it
	        AfxOleRegisterTypeLib(AfxGetInstanceHandle(), LIBID_Test,
	                           _T("test.TLB"));
	
	Testing the Sample Server
	-------------------------
	
	Run the sample server, Test.exe, so that it registers itself in the registration
	database. Then use the Visual Basic files in the vb directory in the sample to
	control the server. The server will be launched invisible and it doesn't have an
	automation method to make it visible.
	
	Vb.vbp and Vb.frm use late-binding (IDispatch) to control the server with code
	similar to the following:
	
	     Dim o As Object
	     Set o = CreateObject("Test.Document")
	     Value = o.TestProperty
	     o.TestProperty = Value
	     Value = o.TestMethod(99)
	
	vbvtbl.vbp, vbvtbl.frm uses vtbl-binding (ITest) to control the server using code
	similar to the following. Use the Tools/References menu in VB to select the
	server's type library (Test) before executing this code.
	
	     Dim o As ITest
	     Set o = New CTestDoc 'Use the name of the coclass
	     Value = o.TestProperty
	     o.TestProperty = Value
	     Value = o.TestMethod(99)
	
	Handling Errors
	---------------
	
	AfxThrowOleDispatchException cannot be used to throw exceptions in the automation
	method or property implementation when a type-library-based IDispatch
	implementation is used. Instead SetErrorInfo can be used to return rich error
	information as described in the following article in the Microsoft Knowledge
	Base:
	
	  Q139073 How To Fill EXCEPINFO in IDispatch Implementation
	
	Additional query words: override Mfcdisp Mfcdispvcnet
	
	======================================================================
	Keywords          : kbfile kbSample kbActiveX kbAutomation kbCOMt kbMFC kbVC400 kbVC500 kbVC600 MSGRAPH kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbOLESearch kbVC32bitSearch kbVCNET
	Version           : :3.51,4.0,5.0,6.0
	
	=============================================================================
	
