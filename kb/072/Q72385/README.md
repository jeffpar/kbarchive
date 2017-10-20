---
layout: page
title: "Q72385: Retrieving the Filename of an Application or DLL"
permalink: /kb/072/Q72385/
---

## Q72385: Retrieving the Filename of an Application or DLL

{% raw %}

	Article: Q72385
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In the Microsoft Windows environment, the GetModuleFileName function provides
	the filename of the executable file that corresponds to a given module instance
	handle or data instance handle.
	
	MORE INFORMATION
	================
	
	GetModuleFileName retrieves the full path of an application or a dynamic-link
	library (DLL). Specify the instance handle or module handle of the executable
	hModule parameter. The syntax of this function is:
	
	     int GetModuleFileName(HANDLE hModule, LPSTR lpFilename, int nSize);
	
	The hModule parameter identifies the module or instance handle, lpFilename points
	to the buffer to receive the file name, and nSize specifies the buffer size.
	
	When Windows launches an application, its instance handle is a parameter to
	WinMain. For a DLL, the instance handle is a parameter to LibMain. The instance
	handle is also available through the GetWindow function, as follows:
	
	     // hWnd is a handle to any one of the target
	     // executable file's windows or controls.
	     hAppInstance = GetWindowWord(hWnd, GWW_HINSTANCE);
	
	     nPathLength = GetModuleFileName(hAppInstance,
	                      (LPSTR)szPath, PATH_LENGTH);
	
	The GetModuleHandle function provides the module handle for a specified module.
	For example, if Microsoft Excel is loaded, the full path to the Excel executable
	file is available through the following code:
	
	     // "EXCEL" can be used instead of "EXCEL.EXE".
	     hModule = GetModuleHandle("EXCEL");
	
	     nPathLength = GetModuleFileName(hModule,
	                      (LPSTR)szPath, PATH_LENGTH);
	
	Given a handle to a window or control in an application, the GCW_HMODULE
	parameter to the GetClassWord function provides the application's module handle.
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
