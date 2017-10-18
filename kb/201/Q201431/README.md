---
layout: page
title: "Q201431: HOWTO: Write Automation for Visual SourceSafe 5.0/6.0"
permalink: kb/201/Q201431/
---

## Q201431: HOWTO: Write Automation for Visual SourceSafe 5.0/6.0

	Article: Q201431
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0; winnt:6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe500 kbSSafe600 kbVC600
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides sample C++ code for OLE Automation calls. It also
	describes how to check whether version 5.0 or 6.0 of Visual SourceSafe is
	running on a computer because OLE Automation written for one version may not run
	under the other.
	
	MORE INFORMATION
	================
	
	Visual SourceSafe must be registered before you can use its OLE Automation
	Model. The CLSID {783CD4E4-9D54-11CF-B8EE-00608CC9A71F} is located in
	HKEY_CLASSES_ROOT/CLSID/. Registration occurs by default when you install the
	Visual SourceSafe Client.
	
	Although it uses a different method, the following Microsoft Knowledge Base
	article describes how to establish a connection to a Visual SourceSafe
	database:
	
	  Q169928 HOWTO: Open a SourceSafe Database with OLE Automation in C++
	
	Another method is to use the #import call to connect to the Ssapi.dll file. If
	working with both 5.0 and 6.0 clients, you must import this file for both
	versions. The easiest way to do this is to import one Ssapi.dll into another
	namespace that can be called later. Then use the code found under Sample Code,
	below, to find out which version of Visual SourceSafe the computer has and call
	the correct functions.
	
	NOTE: The development computer must be able to access both the 6.0 and 5.0
	Ssapi.dll. You can load them as follows:
	
	     // This path needs to point to the ssapi for the 6.0 version of
	     // SourceSafe (version 8169)
	     #import "C:\Visual Studio\Vss\Win32\ssapi.dll"
	
	     // This path needs to point to the ssapi for the 5.0 version of
	     // SourceSafe (version 2218-2222)
	     #import "C:\DevStudio\Vss\Win32\ssapi.dll" rename_namespace("vss5")
	
	Then, you can just test them with:
	
	     // version was initialized already by calling -
	     // version = checker.checkVersion(); where checker is class Check
	     if (version == 5) {
	        using namespace vss5;
	        .... // all your SourceSafe 5 commands go here.
	     } else {
	        .... // all your SourceSafe 6 commands go here.
	     }
	
	Sample Code
	-----------
	
	The following sample code demonstrates how to check which version of SourceSafe a
	computer is running. It creates a class called CCheck that has the function that
	does the checking.
	
	     // CCheck::checkVersion returns:
	     //    -1 on error
	     //     5 for VSS version 5.0
	     //     6 for VSS versions later than 5.0
	     #include <windows.h>
	
	     class CCheck
	     {
	     public:
	
	         int checkVersion();
	     private:
	         LPTSTR GetRegistryInfo();
	         TCHAR m_szVSSDir[MAX_PATH];
	     };
	
	     LPTSTR CCheck::GetRegistryInfo()
	     {
	        m_szVSSDir[0] = '\0';
	
	        // Find the ssapi.dll registry key.
	        HKEY hclass;
	        if (RegOpenKeyEx(HKEY_CLASSES_ROOT,
	                         "CLSID",
	                         0,
	                         KEY_QUERY_VALUE,
	                         &hclass) == ERROR_SUCCESS) {
	           HKEY hkey;
	           if (RegOpenKeyEx(hclass,
	                            "{783CD4E4-9D54-11CF-B8EE-00608CC9A71F}",
	                            0,
	                            KEY_QUERY_VALUE,
	                            &hkey) == ERROR_SUCCESS) {
	              HKEY hproc;
	              if (RegOpenKeyEx(hkey,
	                               "InprocServer32",
	                               0,
	                               KEY_QUERY_VALUE,
	                               &hproc) == ERROR_SUCCESS) {
	                 DWORD dwType = 0;
	                 DWORD dwSize = sizeof(m_szVSSDir);
	                 RegQueryValueEx(hproc,
	                                 "",
	                                 NULL,
	                                 &dwType,
	                                 (LPBYTE)m_szVSSDir,
	                                 &dwSize);
	                 RegCloseKey(hproc);
	              }
	              RegCloseKey(hkey);
	           }
	           RegCloseKey(hclass);
	        }
	        return m_szVSSDir;
	     }
	
	     int CCheck::checkVersion()
	     {
	        LPTSTR szPath;
	        DWORD dwVerHnd;
	        DWORD dwVerInfoSize;
	        char szFullPath[MAX_PATH+1];
	        long resMOld = 327680;
	        long resM;
	        int ret = -1;
	
	        szPath = GetRegistryInfo();
	
	        strcpy(szFullPath, szPath);
	        dwVerInfoSize = GetFileVersionInfoSize(szFullPath, &dwVerHnd);
	        if (dwVerInfoSize) {
	           // If we were able to get the information, process it:
	           HANDLE hMem;
	           LPVOID lpvMem;
	           BOOL fRet;
	           UINT cchVer = 0;
	           VS_FIXEDFILEINFO *vInfo;
	
	           hMem = GlobalAlloc(GMEM_MOVEABLE, dwVerInfoSize);
	           lpvMem = GlobalLock(hMem);
	           GetFileVersionInfo(szFullPath, dwVerHnd, dwVerInfoSize, lpvMem);
	
	           fRet = VerQueryValue(lpvMem, TEXT("\\"),
	                                (LPVOID*)&vInfo, &cchVer);
	           if (fRet && cchVer && vInfo) {
	               resM = vInfo->dwFileVersionMS;
	               if (resMOld >= resM) ret = 5;
	               else ret = 6;
	           }
	           GlobalUnlock(hMem);
	           GlobalFree(hMem);
	        }
	        return ret;
	     }
	
	REFERENCES
	==========
	
	MSDN Library: Visual SourceSafe OLE Automation
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q169928 HOWTO: Open a SourceSafe Database with OLE Automation in C++
	
	Also see the article "Visual SourceSafe 6.0 Automation" on the Microsoft
	Developer Network Web site:
	
	  http://msdn.microsoft.com/isapi/msdnlib.idc?theURL=/library/techart/vssauto.htm
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Tom
	Christian, Microsoft Corporation.
	
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbAutomation kbSSafe500 kbSSafe600 kbVC600 
	Technology        : kbVCsearch kbSSafeSearch kbAudDeveloper kbVC600 kbVC32bitSearch kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0; winnt:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
