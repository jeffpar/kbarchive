---
layout: page
title: "Q186212: HOWTO: Unregister MFC Automation Servers"
permalink: /kb/186/Q186212/
---

## Q186212: HOWTO: Unregister MFC Automation Servers

	Article: Q186212
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1,4.2,5.0
	Operating System(s): 
	Keyword(s): kbcode kbole kbActiveX kbAutomation kbCOMt kbMFC kbRegistry kbVC400 kbVC500 kbGrpDSMFCA
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 4.2 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When creating MFC DLL, SDI, MDI or dialog-based automation servers, "self
	unregistration" code is not added by default. This article explains how to add
	unregistration code for these types of MFC automation servers.
	
	MORE INFORMATION
	================
	
	The following is the code that needs to be added to MFC automation servers to
	enable them to support self-unregistration.
	
	MFC DLL Automation Server
	-------------------------
	
	1. Add the following global function and type library definitions (if you are
	  registering your type library) to the <Project_name>.cpp file, and make
	  sure the function is exported through the .def file.
	
	        //Type library GUID, corresponds to the uuid attribute of the library
	        //section in the .odl file.
	        const GUID CDECL BASED_CODE _tlid =   { 0x9dbafcd2, 0x592f, 0x101b,
	           { 0x85, 0xce, 0x0, 0x60, 0x8c, 0xec, 0x29, 0x7b } };
	
	        //Type library major version number, number on the left of decimal
	        //point, in version attribute of the library section in .odl file.
	        const WORD _wVerMajor = 1;
	
	        //Type library minor version number, number on the right of decimal
	        //point, in version attribute of the library section in .odl file.
	        const WORD _wVerMinor = 0;
	
	        STDAPI DllUnregisterServer(void)
	        {
	           AFX_MANAGE_STATE(AfxGetStaticModuleState());
	
	           //MFC Automation servers do not register typelibs by default.
	           //Add following line only if you have code to register typelib.
	           if (!AfxOleUnregisterTypeLib(_tlid, _wVerMajor, _wVerMinor))
	              return ResultFromScode(SELFREG_E_TYPELIB);
	
	           if (!COleObjectFactoryEx::UpdateRegistryAll(FALSE))
	              return ResultFromScode(SELFREG_E_CLASS);
	
	           return S_OK;
	        }
	
	2. In stdafx.h add "#include <afxctl.h>" just before "#include
	  <afxdisp.h>".
	
	3. For each automation class .h file (the class derived from CcmdTarget that
	  implements the COM interface) change the following
	
	        DECLARE_OLECREATE(CMyObj)
	
	  to the following:
	
	        DECLARE_OLECREATE_EX(CMyObj)
	
	4. For each .cpp corresponding to the above .h files, change the following
	
	        IMPLEMENT_OLECREATE(CMyObj, ...)
	
	  to the following:
	
	        IMPLEMENT_OLECREATE_EX(CMyObj, ...)
	
	5. For the above .cpp files, add the following:
	
	        //The classfactory is nested in your class and has a name formed
	        //by concatenating the class name with "Factory".
	        BOOL CMyObj::CMyObjFactory::UpdateRegistry(BOOL bRegister)
	        {
	             if (bRegister)
	              return AfxOleRegisterServerClass(m_clsid, m_lpszProgID,
	                 m_lpszProgID, m_lpszProgID, OAT_DISPATCH_OBJECT);
	           else
	              return AfxOleUnregisterClass(m_clsid, m_lpszProgID);
	        }
	
	MFC SDI/MDI EXE Automation Server
	---------------------------------
	
	1. In the <Project_name>.cpp file, make the following changes in
	  CWinApp::InitInstance() so that "/unregserver" is recognized and the
	  unregistration function is called. Replace the following line
	
	        m_server.UpdateRegistry(OAT_DISPATCH_OBJECT);
	        COleObjectFactory::UpdateRegistryAll();
	
	  with the following:
	
	        //if command line has /unregister...
	        if (cmdInfo.m_nShellCommand == CCommandLineInfo::AppUnregister)
	        {
	        //During unregistration we call UpdateRegistry(OAT_DISPATCH_OBJECT)
	        //to set up the m_bOAT member COleTemplateServer to the correct
	        //type for unregistration of automation object supported by CDocument
	        //derived class. Unregistration is done in ProcessShellCommand().
	           m_server.UpdateRegistry(OAT_DISPATCH_OBJECT);
	
	        //This unregisters all other COM objects derived from CcmdTarget.
	           COleObjectFactory::UpdateRegistryAll(FALSE);
	        }
	        else
	        {
	           m_server.UpdateRegistry(OAT_DISPATCH_OBJECT);
	           COleObjectFactory::UpdateRegistryAll();
	        }
	
	2. Follow steps 2 to 5 from above.
	
	MFC Dialog Based EXE Automation Server
	--------------------------------------
	
	1. In the <Project_name>.cpp file, make the following changes in
	  CWinApp::InitInstance() so that "/unregserver" is recognized and the
	  unregistration function is called. Replace the following line
	
	        COleObjectFactory::UpdateRegistryAll();
	
	  with the following:
	
	        // Parse command line.
	        CCommandLineInfo cmdInfo;
	        ParseCommandLine(cmdInfo);
	
	        //if command line has /unregister...
	        if (cmdInfo.m_nShellCommand == CCommandLineInfo::AppUnregister)
	        {
	           //FALSE results in unregistering all COM objects implemented as
	           //CCmdTarget derived classes.
	           COleObjectFactory::UpdateRegistryAll(FALSE);
	        }
	        else
	        {
	           COleObjectFactory::UpdateRegistryAll();
	        }
	
	2. Follow steps 2 to 5 from MFC DLL automation server, above.
	
	NOTE: If you have added the call AfxOleRegisterTypeLib() in a MFC EXE during
	registration for registering the type library, make sure you have the
	corresponding call to AfxOleUnregisterTypeLib() during unregistration.
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Jaganathan
	Thangavelu, Microsoft Corporation
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jaganathan Thangavelu, Microsoft Corporation
	
	
	Additional query words: MfcOLE
	
	======================================================================
	Keywords          : kbcode kbole kbActiveX kbAutomation kbCOMt kbMFC kbRegistry kbVC400 kbVC500 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1,4.2,5.0
	Issue type        : kbhowto
	
	=============================================================================
	
