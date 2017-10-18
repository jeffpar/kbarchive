---
layout: page
title: "Q207132: INFO: How Regsvr32.exe Registers and Unregisters COM DLLs"
permalink: kb/207/Q207132/
---

## Q207132: INFO: How Regsvr32.exe Registers and Unregisters COM DLLs

	Article: Q207132
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2000; :4.0; winnt:4.0
	Operating System(s): 
	Keyword(s): kbCOMt kbOSWinNT400 kbOSWin2000 kbSDKWin32 kbOSWin95 kbOSWin98 kbGrpDSCom kbDSupport
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	- Microsoft Windows NT Advanced Server, version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Datacenter Server 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how the RegSvr32.exe program registers and unregisters a
	Component Object Model (COM) dynamic-link library (DLL). You can use this
	information to troubleshoot errors that occur when you try to use RegSvr32.exe
	program with your COM DLL.
	
	MORE INFORMATION
	================
	
	RegSvr32.exe calls the following Win32 functions in this order:
	
	- OleInitialize
	- LoadLibrary to load the DLL
	- DllRegisterServer or DllUnregisterServer
	- FreeLibrary
	- OleUninitialize
	
	Most often, RegSvr32.exe fails because the LoadLibrary, DllRegisterServer, or
	DllUnregisterServer function fails. LoadLibrary can fail if the DLL is not in
	the specified path, or if the specified path is incorrect. LoadLibrary can also
	fail if one of the dependencies of the DLL that you are trying to load is not
	met; in other words, if a dependent DLL is not present or is not in the
	specified path.
	
	NOTE: You can use the Depends.exe tool to check whether or not all of the
	dependencies of your DLL are met. Depends.exe is included with the Microsoft
	Platform Software Development Kit (SDK), which ships with Microsoft Visual
	Studio.
	
	Your DLL must implement DllRegisterServer and DllUnregisterServer, which contain
	the logic that is necessary to add or delete the required registry entries for
	the COM component. RegSvr32.exe finds the entry point to these functions, and
	calls them appropriately.
	
	NOTE: If you use the Microsoft Active Template Library (ATL) Wizard to create the
	COM DLL, the Wizard generates the necessary code for DllRegisterServer and
	DllUnregisterServer.
	
	If you use Microsoft Visual C++, refer to the Platform SDK sample at \Platform
	SDK\Samples\Com\Fundamentals\Async\Server.
	
	Step-by-Step Example
	--------------------
	
	The following sample describes registry functions that you can use to register
	and unregister your COM DLL.
	
	You can also write your own code to do what RegSvr32.exe does. This helps to
	identify, isolate, and troubleshoot errors more easily.
	
	To create a Win32 Application that you can use to register or unregister your COM
	DLL, perform the following steps:
	
	1. In Visual C++, create a new Win32 Application named Register. Accept all of
	  the defaults.
	
	2. Create a new .cpp file named Register.cpp, and add it to the project.
	
	3. Paste the following code in Register.cpp:
	
	  #include <tchar.h>
	  #include <afxole.h>
	  #include <stdlib.h>
	
	  #define FAIL_ARGS    1
	  #define FAIL_OLE     2
	  #define FAIL_LOAD    3
	  #define FAIL_ENTRY   4
	  #define FAIL_REG     5 
	
	  static char szAppName[] = "Register";
	  static char szUsage[] = "\n\nUsage: Register [/u] dllname";
	  static char szDllRegSvr[] = "DllRegisterServer";
	  static char szDllUnregSvr[] = "DllUnregisterServer"; 
	
	  int PASCAL WinMain(
	  		   HINSTANCE hInstance, 
	  		   HINSTANCE hPrev, 
	  		   LPSTR pszCmdLine, 
	  		   int nCmdShow)
	  {   
	  	int iReturn = 0;       
	  	HRESULT (FAR STDAPICALLTYPE * lpDllEntryPoint)(void);  
	  	static TCHAR szMsgBuffer[_MAX_PATH*4];         
	  	BOOL bVisualC = FALSE; 
	  	BOOL bSilent = FALSE;  
	  	BOOL bUnregister = FALSE;      
	  	LPSTR pszDllEntryPoint = szDllRegSvr;  
	  	LPSTR pszDllName = NULL;
	  	char szCmdLineCopy[_MAX_PATH]; 
	  	strcpy(szCmdLineCopy, pszCmdLine);             
	  	LPSTR pszTmp = szCmdLineCopy;  
	  	LPSTR pszTok;          
	  	
	  	while ((pszTok = strtok(pszTmp, " \t")) != NULL)       
	  	{                                
	  		pszTmp = NULL; 
	  		
	  		if ((pszTok[0] == '-') || (pszTok[0] == '/'))
	  		{      
	  			switch (pszTok[1])     
	  			{      
	  			case 'v':      
	  			case 'V':
	  				bVisualC = TRUE;
	  				break;         
	  			case 's':      
	  			case 'S':
	  				bSilent = TRUE;
	  				break;         
	  			case 'u':      
	  			case 'U':
	  				bUnregister = TRUE;
	  				pszDllEntryPoint = szDllUnregSvr;
	  				break;         
	  			default:
	  				wsprintf(szMsgBuffer, 
	  					"Unrecognized flag: %s%s", 
	  					pszTok, 
	  					(LPCSTR)szUsage);
	  				if (!bSilent)  
	  					MessageBox(NULL, 
	  					   szMsgBuffer, 
	  					   szAppName, 
	  					   MB_TASKMODAL | MB_ICONEXCLAMATION);
	  				return FAIL_ARGS;      
	  			}
	  		}
	  		else
	  		{      
	  			if (pszDllName == NULL)
	  				pszDllName = pszTok;   
	  			else   
	  			{
	  				wsprintf(szMsgBuffer, 
	  					"Extra argument on command line: %s%s", 
	  					pszTok, 
	  					(LPCSTR)szUsage);
	  				if (!bSilent)  
	  					MessageBox(NULL, 
	  					   szMsgBuffer, 
	  					   szAppName, 
	  					   MB_TASKMODAL | MB_ICONEXCLAMATION);
	  				return FAIL_ARGS;      
	  			}
	  		}      
	  	}      
	  	
	  	if (pszDllName == NULL)        
	  	{
	  		if (!bSilent)
	  		{      
	  			if (bVisualC)  
	  			{
	  				MessageBox(NULL, 
	  				"This command is only valid when "
	  				"an OLE Custom Control project is open.", 
	  				bUnregister ? 
	  				"Unregister Control" : "Register Control",
	  				MB_TASKMODAL | MB_ICONEXCLAMATION);
	  			}
	  			else   
	  			{
	  				wsprintf(szMsgBuffer, 
	  					_T("No DLL name specified%s"), 
	  					(LPCSTR)szUsage);
	  				MessageBox(NULL, 
	  					szMsgBuffer, 
	  					szAppName, 
	  					MB_TASKMODAL | MB_ICONEXCLAMATION);
	  			}
	  		}
	  		return FAIL_ARGS;      
	  	}
	  	
	  	if (FAILED(OleInitialize(NULL)))       
	  	{
	  		if (!bSilent)  
	  			MessageBox(NULL, 
	  				"OleInitialize failed.", 
	  				szAppName, 
	  				MB_TASKMODAL | MB_ICONINFORMATION);
	  		return FAIL_OLE;       
	  	}              
	  	
	  	HINSTANCE hLib = LoadLibrary(pszDllName);      
	  	
	  	if (hLib < (HINSTANCE)HINSTANCE_ERROR) 
	  	{
	  		wsprintf(szMsgBuffer, 
	  			"LoadLibary(\"%s\") failed.", 
	  			pszDllName);
	  		MessageBox(NULL, 
	  			szMsgBuffer, 
	  			szAppName, 
	  			MB_TASKMODAL | MB_ICONEXCLAMATION);
	  		iReturn = FAIL_LOAD;
	  		goto CleanupOle;       
	  	}
	  	
	  	(FARPROC&)lpDllEntryPoint = GetProcAddress(hLib, pszDllEntryPoint);
	  	
	  	if (lpDllEntryPoint == NULL)   
	  	{
	  #ifdef _WIN32
	  		int nLen = strlen(pszDllName);
	  		if ((nLen > 4) && 
	  			(stricmp(pszDllName + nLen - 4, ".dll") != 0)  && 
	  			(stricmp(pszDllName + nLen - 4, ".ocx") != 0))
	  		{      
	  			wsprintf(szMsgBuffer, 
	  			"%s was loaded, but the %s entry point "
	  			"was not found. %s does not appear to be "
	  			"an .DLL or .OCX file.", 
	  			pszDllName, 
	  			pszDllEntryPoint, 
	  			pszDllName);
	  		}
	  		else
	  		{      
	  			wsprintf(szMsgBuffer, 
	  			"%s was loaded, but the %s entry point "
	  			"was not found. %s may not be exported, "
	  			"or a corrupt version may be in memory.  "
	  			"Consider using PView to detect and remove it.",
	  			pszDllName, 
	  			pszDllEntryPoint, 
	  			pszDllEntryPoint);
	  		}
	  #else
	  		wsprintf(szMsgBuffer, 
	  		"%s was loaded, but the %s entry point "
	  		"was not found. %s may not be exported, "
	  		"or a corrupt version may be in memory.  "
	  		"Consider using WPS to detect and remove it.",
	  		pszDllName, 
	  		pszDllEntryPoint, 
	  		pszDllEntryPoint);
	  #endif
	  		
	  		if (!bSilent)  
	  			MessageBox(NULL, 
	  				szMsgBuffer, 
	  				szAppName, 
	  				MB_TASKMODAL | MB_ICONEXCLAMATION);
	  		iReturn = FAIL_ENTRY;
	  		
	  		goto CleanupLibrary;   
	  	}
	  	
	  	if (FAILED((*lpDllEntryPoint)()))      
	  	{
	  		wsprintf(szMsgBuffer, 
	  			"%s in %s failed.", 
	  			pszDllEntryPoint, 
	  			pszDllName);
	  		
	  		if (!bSilent)  
	  			MessageBox(NULL, 
	  				szMsgBuffer, 
	  				szAppName, 
	  				MB_TASKMODAL | MB_ICONEXCLAMATION);
	  		iReturn = FAIL_REG;
	  		
	  		goto CleanupLibrary;   
	  	}      
	  	
	  	wsprintf(szMsgBuffer,
	  		"%s in %s succeeded.", 
	  		pszDllEntryPoint, 
	  		pszDllName);     
	  	
	  	if (! bSilent)
	  		MessageBox(NULL, 
	  			szMsgBuffer, 
	  			szAppName, 
	  			MB_TASKMODAL | MB_ICONINFORMATION); 
	  CleanupLibrary:     
	  	FreeLibrary(hLib); 
	  	
	  CleanupOle: 
	  	OleUninitialize();     
	  	
	  	return iReturn;
	  }
	
	4. Build the application, and use it to register or unregister your COM DLL.
	
	REFERENCES
	==========
	
	For additional information, click the article numbers below to view the articles
	in the Microsoft Knowledge Base:
	
	  Q140346 Possible Reasons for OLE Control Registration Failure
	
	  Q141824 INFO: Common Remote OLE Automation Errors
	
	  Q146219 HOWTO: Register an ActiveX Control (.ocx) Manually
	
	  Q185599 FIX: OleAut32.dll Is Unregistered Incorrectly
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbOSWinNT400 kbOSWin2000 kbSDKWin32 kbOSWin95 kbOSWin98 kbGrpDSCom kbDSupport 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000DataServ kbwin2000DataServSearch kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTAdvSerSearch kbWinNTAdvServ400 kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWin95search kbWin98search kbWinAdvServSearch kbWinDataServSearch kbZNotKeyword3 kbWin98
	Version           : WINDOWS:2000; :4.0; winnt:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
