---
layout: page
title: "Q175190: HOWTO: Add ATL Support to an MFC EXE"
permalink: /kb/175/Q175190/
---

## Q175190: HOWTO: Add ATL Support to an MFC EXE

	Article: Q175190
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.0,2.1
	Operating System(s): 
	Keyword(s): kbATL200 kbATL210 kbLocalSvr kbServer kbGrpDSMFCATL
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.0, 2.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This articles lists the steps that are needed to add ATL support to an MFC EXE
	without automation support.
	
	MORE INFORMATION
	================
	
	1. Add the following after the declaration to the CWinApp-derived object in
	  global scope:
	
	        CExeModule _Module;
	
	        LONG CCExeModule Module::Unlock()
	        {
	           LONG l = CComModule::Unlock();
	           if (l == 0)
	           {
	           #if _WIN32_WINNT >= 0x0400
	              if (CoSuspendClassObjects() == S_OK)
	                 PostThreadMessage(dwThreadID, WM_QUIT, 0, 0);
	           #else
	              PostThreadMessage(dwThreadID, WM_QUIT, 0, 0);
	           #endif
	           }
	           return l;
	        }
	
	        BEGIN_OBJECT_MAP(ObjectMap)
	        END_OBJECT_MAP()
	
	        LPCTSTR FindOneOf(LPCTSTR p1, LPCTSTR p2)
	        {
	           while (*p1 != NULL)
	           {
	              LPCTSTR p = p2;
	              while (*p != NULL)
	              {
	                 if (*p1 == *p++)
	                    return p1+1;
	              }
	              p1++;
	           }
	           return NULL;
	        }
	
	2. Add the following to the beginning of InitInstance():
	
	        // Initialize OLE libraries
	        if (!AfxOleInit())
	        {
	           AfxMessageBox("OLE initialization failed");
	           return FALSE;
	        }
	
	        m_bATLInited = TRUE;
	
	        HRESULT hRes = 0;
	        if (FAILED(hRes))
	        {
	           m_bATLInited = FALSE;
	           return FALSE;
	        }
	
	        _Module.Init(ObjectMap, AfxGetInstanceHandle());
	        _Module.dwThreadID = GetCurrentThreadId();
	
	        TCHAR szTokens[] = _T("-/");
	
	        BOOL bRun = TRUE;
	        LPCTSTR lpszToken = FindOneOf(m_lpCmdLine, szTokens);
	        while (lpszToken != NULL)
	        {
	           if (lstrcmpi(lpszToken, _T("UnregServer"))==0)
	           {
	              _Module.UpdateRegistryFromResource(IDR_ATLMFC, FALSE);
	              _Module.UnregisterServer();
	              bRun = FALSE;
	              break;
	           }
	           if (lstrcmpi(lpszToken, _T("RegServer"))==0)
	           {
	              _Module.UpdateRegistryFromResource(IDR_ATLMFC, TRUE);
	              _Module.RegisterServer(TRUE);
	              bRun = FALSE;
	              break;
	           }
	           lpszToken = FindOneOf(lpszToken, szTokens);
	        }
	
	        if (!bRun)
	        {
	           m_bATLInited = FALSE;
	           return FALSE;
	        }
	
	        hRes = _Module.RegisterClassObjects(CLSCTX_LOCAL_SERVER,
	                  REGCLS_MULTIPLEUSE);
	
	        if (FAILED(hRes))
	        {
	           m_bATLInited = FALSE;
	           return FALSE;
	        }
	
	3. Add the following after ParseCommandLine(cmdInfo) in InitInstance():
	
	        if (cmdInfo.m_bRunEmbedded || cmdInfo.m_bRunAutomated)
	        {
	           return TRUE;
	        }
	
	4. Add the following public member variable to the CWinApp-derived object:
	
	  BOOL m_bATLInited;
	
	5. Override ExitInstance() and add the following code before calling the base
	  class ExitInstance():
	
	  if (m_bATLInited)
	        {
	           _Module.RevokeClassObjects();
	           _Module.Term();
	        }
	
	6. Add a <project_name>.idl file to the project and set up a custom rule
	  to invoke the MIDL compiler to generate the <project_name>.tlb,
	  project>_i.h, and <project>_i.c files. For example:
	
	  midl /Oicf /h "<project_name>_i.h" /iid "<project_name>_i.c"
	         "<project_name>.idl"
	
	7. Include <project_name>_i.h and <project_name>_i.c in the
	  <project_name>.h file.
	
	8. Add a typelib entry to the .rc file. This is done by clicking Resource
	  Includes on the View menu and adding "1 TYPELIB "<project_name>.tlb""
	  (without the quotation marks) to the compile-time directive section of the
	  resulting dialog box.
	
	9. Create a .rgs file for the application and add it as a resource. This is done
	  by inserting a custom resource of type "REGISTRY" and setting the properties
	  of the resource so that it points to the .rgs file. Make sure that the
	  resource ID is the same as the first parameter of
	  UpdateRegistryFromResource() used above.
	
	10. Add the following to end of stdafx.h:
	
	        #define _ATL_APARTMENT_THREADED
	
	        #include <atlbase.h>
	        // You may derive a class from CComModule and use it if you want to
	        // override something, but do not change the name of _Module.
	        class CExeModule : public CComModule
	        {
	        public:
	           LONG Unlock();
	           DWORD dwThreadID;
	        };
	        extern CExeModule _Module;
	        #include <atlcom.h>
	
	11. Add the following to end of stdafx.cpp:
	
	        #ifdef _ATL_STATIC_REGISTRY
	
	        #include <statreg.h>
	        #include <statreg.cpp>
	        #endif
	
	        #include <atlimpl.cpp>
	
	NOTE: In the release build, if you do not want to statically link in the ATL
	registration, then include _ATL_DLL in the preprocessor symbols in the Project
	Settings dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL200 kbATL210 kbLocalSvr kbServer kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbATLsearch kbATL200 kbATL210
	Version           : WINDOWS:2.0,2.1
	Issue type        : kbhowto
	
	=============================================================================
	
