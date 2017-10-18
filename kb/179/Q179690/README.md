---
layout: page
title: "Q179690: FIX: Launching COM Server with Long File Name Returns 0x80080005"
permalink: kb/179/Q179690/
---

## Q179690: FIX: Launching COM Server with Long File Name Returns 0x80080005

	Article: Q179690
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:2.1; winnt:4.0
	Operating System(s): 
	Keyword(s): kbActiveX kbATL210bug kbCOMt kbLocalSvr kbOSWinNT400 kbRegistry kbServer kbVC500bug kbV
	Last Modified: 28-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL) 2.1, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 5.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 5.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A COM local server fails to start, accompanied by the error "Server Execution
	Failed" (error number 0x80080005 or -2146959355), if it is registered in a
	directory with a long file name that contains a space and a similar directory
	name exists at the same level.
	
	If the server is registered with a short file name, this problem does not occur.
	This is not a problem for inproc servers. All ATL local servers are registered
	with long file names.
	
	CAUSE
	=====
	
	This problem is caused by the fact that unquoted long file names containing
	spaces are ambiguous to CreateProcess (which is called by CoCreateInstance/
	CoGetClassObject). Refer to the CreateProcess documentation for more
	information.
	
	RESOLUTION
	==========
	
	This problem can be fixed by overriding the registration functions in the
	CComModule derived class and adding code to use the short file name in
	registration instead of the long file name. MFC uses short file names for
	registration.
	
	1. Change CExeModule definition in StdAfx.h as follows:
	
	        class CExeModule : public CComModule
	        {
	        public:
	           LONG Unlock();
	           DWORD dwThreadID;
	
	        #ifdef _ATL_STATIC_REGISTRY
	        // Statically linking to Registry component.
	
	           HRESULT WINAPI UpdateRegistryFromResourceS(UINT nResID,
	              BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries = NULL);
	           HRESULT WINAPI UpdateRegistryFromResourceS(LPCTSTR lpszRes,
	              BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries = NULL);
	
	        #else
	
	           HRESULT WINAPI UpdateRegistryFromResourceD(LPCTSTR lpszRes,
	              BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries = NULL);
	           HRESULT WINAPI UpdateRegistryFromResourceD(UINT nResID,
	              BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries = NULL);
	
	        #endif
	        };
	
	2. Add the following code to <ProjectName>.cpp after the #includes:
	
	        #ifdef _ATL_STATIC_REGISTRY
	        #include <statreg.h>
	        #endif
	
	3. Add the following code to <ProjectName>.cpp before _tWinMain():
	
	        #ifdef _ATL_STATIC_REGISTRY
	        // Statically linking to Registry component.
	
	        HRESULT WINAPI CExeModule::UpdateRegistryFromResourceS(UINT nResID,
	           BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries)
	        {
	           USES_CONVERSION;
	           CRegObject ro;
	           TCHAR szModule[_MAX_PATH];
	           GetModuleFileName(_Module.GetModuleInstance(), szModule,
	              _MAX_PATH);
	
	           TCHAR szModuleShort[_MAX_PATH];
	           // Convert to short file name.
	           if (::GetShortPathName(szModule, szModuleShort, _MAX_PATH))
	           {
	              lstrcpy(szModule, szModuleShort);
	           }
	
	           LPOLESTR pszModule = T2OLE(szModule);
	           ro.AddReplacement(OLESTR("Module"), pszModule);
	           if (NULL != pMapEntries)
	           {
	              while (NULL != pMapEntries->szKey)
	              {
	                 _ASSERTE(NULL != pMapEntries->szData);
	                 ro.AddReplacement(pMapEntries->szKey, pMapEntries->szData);
	                 pMapEntries++;
	              }
	           }
	
	           LPCOLESTR szType = OLESTR("REGISTRY");
	           return (bRegister) ? ro.ResourceRegister(pszModule, nResID,
	              szType) :
	              ro.ResourceUnregister(pszModule, nResID, szType);
	        }
	
	        HRESULT WINAPI CExeModule::UpdateRegistryFromResourceS(LPCTSTR
	           lpszRes,
	           BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries)
	        {
	           USES_CONVERSION;
	           CRegObject ro;
	           TCHAR szModule[_MAX_PATH];
	           GetModuleFileName(_Module.GetModuleInstance(), szModule,
	              _MAX_PATH);
	
	           TCHAR szModuleShort[_MAX_PATH];
	           // Convert to short file name.
	           if (::GetShortPathName(szModule, szModuleShort, _MAX_PATH))
	           {
	              lstrcpy(szModule, szModuleShort);
	           }
	
	           LPOLESTR pszModule = T2OLE(szModule);
	           ro.AddReplacement(OLESTR("Module"), pszModule);
	           if (NULL != pMapEntries)
	           {
	              while (NULL != pMapEntries->szKey)
	              {
	                 _ASSERTE(NULL != pMapEntries->szData);
	                 ro.AddReplacement(pMapEntries->szKey, pMapEntries->szData);
	                 pMapEntries++;
	              }
	           }
	
	           LPCOLESTR szType = OLESTR("REGISTRY");
	           LPCOLESTR pszRes = T2COLE(lpszRes);
	           return (bRegister) ? ro.ResourceRegisterSz(pszModule, pszRes,
	              szType)
	              : ro.ResourceUnregisterSz(pszModule, pszRes, szType);
	        }
	
	        #else
	
	        ATLAPI MyAtlModuleUpdateRegistryFromResourceD(_ATL_MODULE* pM,
	           LPCOLESTR lpszRes, BOOL bRegister,
	           struct _ATL_REGMAP_ENTRY* pMapEntries, IRegistrar* pReg = NULL)
	        {
	           USES_CONVERSION;
	           _ASSERTE(pM != NULL);
	           HRESULT hRes = S_OK;
	           CComPtr<IRegistrar> p;
	           if (pReg != NULL)
	              p = pReg;
	           else
	           {
	              hRes = CoCreateInstance(CLSID_Registrar, NULL,
	                 CLSCTX_INPROC_SERVER, IID_IRegistrar, (void**)&p);
	           }
	           if (SUCCEEDED(hRes))
	           {
	              TCHAR szModule[_MAX_PATH];
	              GetModuleFileName(pM->m_hInst, szModule, _MAX_PATH);
	
	              TCHAR szModuleShort[_MAX_PATH];
	              // Convert to short file name.
	              if (::GetShortPathName(szModule, szModuleShort, _MAX_PATH))
	              {
	                 lstrcpy(szModule, szModuleShort);
	              }
	
	              p->AddReplacement(OLESTR("Module"), T2OLE(szModule));
	
	              if (NULL != pMapEntries)
	              {
	                 while (NULL != pMapEntries->szKey)
	                 {
	                    _ASSERTE(NULL != pMapEntries->szData);
	                    p->AddReplacement((LPOLESTR)pMapEntries->szKey,
	                       (LPOLESTR)pMapEntries->szData);
	                    pMapEntries++;
	                 }
	              }
	              LPCOLESTR szType = OLESTR("REGISTRY");
	              GetModuleFileName(pM->m_hInstResource, szModule, _MAX_PATH);
	              LPOLESTR pszModule = T2OLE(szModule);
	
	              if (HIWORD(lpszRes)==0)
	              {
	                 if (bRegister)
	                    hRes = p->ResourceRegister(pszModule,
	                       ((UINT)LOWORD((DWORD)lpszRes)), szType);
	                 else
	                    hRes = p->ResourceUnregister(pszModule,
	                       ((UINT)LOWORD((DWORD)lpszRes)), szType);
	              }
	              else
	              {
	                 if (bRegister)
	                    hRes = p->ResourceRegisterSz(pszModule, lpszRes, szType);
	                 else
	                    hRes = p->ResourceUnregisterSz(pszModule, lpszRes,
	                       szType);
	              }
	
	           }
	           return hRes;
	        }
	
	        HRESULT WINAPI CExeModule::UpdateRegistryFromResourceD(LPCTSTR
	           lpszRes,
	           BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries)
	        {
	           USES_CONVERSION;
	           return MyAtlModuleUpdateRegistryFromResourceD(this,
	              T2COLE(lpszRes),
	              bRegister, pMapEntries);
	        }
	
	        HRESULT WINAPI CExeModule::UpdateRegistryFromResourceD(UINT nResID,
	           BOOL bRegister, struct _ATL_REGMAP_ENTRY* pMapEntries)
	        {
	           return MyAtlModuleUpdateRegistryFromResourceD(this,
	              (LPCOLESTR)MAKEINTRESOURCE(nResID), bRegister, pMapEntries);
	        }
	
	        #endif
	
	4. Save the changes and rebuild all.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This problem was corrected in Visual C++ version 6.0
	for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create two directories, C:\Program Files and C:\Program.
	
	2. Copy an ATL local server to C:\Program Files.
	
	3. Register the server.
	
	4. Attempt to start the server from a client application. Note that the server
	  does not start and CoCreateInstance returns error 0x80080005.
	
	5. Copy and register the local server in the directory C:\Program.
	
	6. Attempt to start the server from a client application. Note that the server
	  starts. No errors are returned.
	
	NOTE: Surrounding the long file name in the registry with quotation marks does
	not solve this problem.
	
	(c) Microsoft Corporation 1997, All Rights Reserved. Contributions by Mike
	Francis, Microsoft Corporation.
	(c) Microsoft Corporation 1997, All Rights Reserved.
	Contributions by Mike Francis, Microsoft Corporation
	
	
	Additional query words: 80080005 -2146959355 LFN atl registration server execution failed CO_E_SERVER_EXEC_FAILURE
	
	======================================================================
	Keywords          : kbActiveX kbATL210bug kbCOMt kbLocalSvr kbOSWinNT400 kbRegistry kbServer kbVC500bug kbVC600fix kbATL300fix MSGRAPH kbGrpDSMFCATL 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : WINDOWS:2.1; winnt:4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
