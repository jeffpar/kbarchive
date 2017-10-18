---
layout: page
title: "Q235638: INFO: DCOM95 and DCOM98 Version Information"
permalink: kb/235/Q235638/
---

## Q235638: INFO: DCOM95 and DCOM98 Version Information

	Article: Q235638
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCOMt kbDCOM kbGrpDSCom kbDSupport
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM, used with:
	   - the operating system: Microsoft Windows 98 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to determine which version of DCOM95 or DCOM98 you
	are running and includes a table with DCOM95 and DCOM98 version information.
	
	MORE INFORMATION
	================
	
	How to Use the Registry to Determine Version
	--------------------------------------------
	
	You can check the registry to determine which version of DCOM95 or DCOM98 is
	installed on a Windows 95-based or Windows 98-based system. If Distributed
	Component Object Model (DCOM) is installed on the system, the default value of
	the following registry key:
	
	  HKCR\CLSID\{bdc67890-4fc0-11d0-a805-00aa006d2ea4}\InstalledVersion
	
	contains the DCOM version that is installed on the system. In the registry, the
	version number is stored in the format "a,b,c,d", where a, b, c, and d are
	numeric values that represent the following attributes:
	
	  a - major operating system version
	  b - minor operating system version
	  c - minor file version
	  d - major file version
	
	Version Information Table
	-------------------------
	
	The following table lists the version information for DCOM95 and DCOM98:
	
	+------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| InstalledVersion | DCOM Version or Build Number            | Release Type                                                                                  | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,3328      | DCOM95 1.3 and DCOM98 1.3, build 3328.1 | Released to the Web                                                                           | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,2900      | Build 2900.7                            | Released to Windows 98 Second Edition, Microsoft Internet Explorer 5.0, Microsoft Office 2000 | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,2618      | DCOM95 1.2                              | Released to the Web                                                                           | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,2612      | DCOM98                                  | Shipped with Microsoft Visual Studio 6.0                                                      | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,1719      | Build 1719                              | Released to Windows 98 Gold, fix for build 1718.                                              | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,1718      | DCOM95 1.1                              | Released to the Web in October, 1997; released to Internet Explorer 4.01.                     | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,1120      | Build 1120                              |                                                                                               | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------+
	| 4,71,0,426       | DCOM95 1.0                              | Released to the Web in January 1997                                                           | 
	+------------------------------------------------------------------------------------------------------------------------------------------------------------+
	
	How to Programmatically Determine the Version
	---------------------------------------------
	
	To programmatically determine if DCOM is installed, use the following code:
	
	      HINSTANCE hDLL = LoadLibrary("OLE32.DLL")
	      if(NULL == hDLL)
	      {
	          // See Winerror.h for explanation of error code.
	          DWORD error = GetLastError();
	          TRACE1("LoadLibrary() Failed with: %i\n", error);
	          return FALSE;
	      }
	      if (!GetProcAddress(hDLL,"CoCreateInstanceEx"))
	      {
	          //DCOM is not loaded
	      }
	      else
	      {
	          //DCOM is loaded
	      }
	
	REFERENCES
	==========
	
	You can download DCOM98 for Windows 98 version 1.3 from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/com/dcom/dcom98/dcom1_3.asp
	
	You can download DCOM95 for Windows 95 version 1.3 from the following Microsoft
	Web site:
	
	  http://www.microsoft.com/com/dcom/dcom95/dcom1_3.asp
	
	The following file is available for download from the Microsoft Download Center:
	
	  DCOM9x configuration utility
	
	Additional query words: DCOM win95 win98 windows DCOM98 DCOM95
	
	======================================================================
	Keywords          : kbCOMt kbDCOM kbGrpDSCom kbDSupport 
	Component         : kbole
	Technology        : kbAudDeveloper kbCOM kbCOMPlusSearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
