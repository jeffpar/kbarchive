---
layout: page
title: "Q224382: BUG: Profiler Enabled Only Under Administrator Account in WinNT"
permalink: /kb/224/Q224382/
---

## Q224382: BUG: Profiler Enabled Only Under Administrator Account in WinNT

	Article: Q224382
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbPerformanceTool kbVC600bug kbNoUpdate
	Last Modified: 12-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Source Profiler, included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When using Visual C++ in a Windows NT account other than the one Visual C++ was
	installed under, the Profile menu option under the Build menu is disabled.
	
	CAUSE
	=====
	
	When Visual C++ is installed, a ProfilerInstalled registry entry is created and
	set to true. The Visual C++ installation program places this key under
	HKEY_CURRENT_USER. HKEY_CURRENT_USER is specific only to the current user, which
	means the registry entry is not being set for other Windows NT accounts.
	
	In earlier versions of Visual C++, installing the profiler is optional.
	
	RESOLUTION
	==========
	
	For all accounts to share the ProfilerInstalled registry key, it should be
	placed into HKEY_LOCAL_MACHINE instead of HKEY_CURRENT_USER. Add the following
	REG_DWORD value to HKEY_LOCAL_MACHINE under the following path:
	
	  Software\Microsoft\DevStudio\6.0\General\ProfilerInstalled = 0x1
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	To easily update the registry:
	
	1. Create a text file on the desktop with any name and a .reg extension.
	
	2. Enter the lines of text below exactly as they appear and include a blank line
	  at the bottom of the file.
	
	  REGEDIT4
	  [HKEY_LOCAL_MACHINE\Software\Microsoft\DevStudio\6.0\General]
	  "ProfilerInstalled"=dword:1
	
	3. Save the file and then double-click the file to merge the entries into the
	  registry.
	
	To verify the values have been entered correctly into the registry, you can run
	REGEDIT by clicking Run from the Start menu.
	
	In addition, you can also compile and run the following Win32 console
	application:
	
	  #include "windows.h"
	  #include "stdio.h"
	
	  int main(int argc, char* argv[])
	  {
	  	HKEY hKey;
	  	DWORD dwValue = 1;
	  	int nRet = 0;
	  	
	  	if ( !SUCCEEDED(::RegOpenKeyEx(HKEY_LOCAL_MACHINE, 
	  		"Software\\Microsoft\\DevStudio\\6.0\\General",
	  		0, KEY_ALL_ACCESS, &hKey)))
	  	{
	  		printf("Error: Cannot open key\n");
	  		return -1;
	  	}
	  	
	  	if ( !SUCCEEDED(::RegSetValueEx(hKey, "ProfilerInstalled",
	  		0, REG_DWORD, (unsigned char *)&dwValue, 4)))
	  	{
	  		printf("Error: Cannot set value\n");
	  		nRet = -1;
	  	}
	
	  	::RegCloseKey(hKey);
	  	
	  	return nRet;
	  }
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved.
	Contributions by Kelly Marie Ward, Microsoft Corporation
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbPerformanceTool kbVC600bug kbNoUpdate 
	Technology        : kbVCsearch kbAudDeveloper kbSProfilerSearch kbVC32bitSearch kbSProfiler100
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
