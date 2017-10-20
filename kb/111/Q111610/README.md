---
layout: page
title: "Q111610: Suppressing &quot;Cannot Find MYDLL.DLL&quot; Error Box"
permalink: /kb/111/Q111610/
---

## Q111610: Suppressing &quot;Cannot Find MYDLL.DLL&quot; Error Box

{% raw %}

	Article: Q111610
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
	
	When explicitly loading a dynamic-link library (DLL) using LoadLibrary(),
	Windows will display a "file error" message box with the error
	
	  Cannot find MYDLL.DLL
	
	where MYDLL.DLL is the name of the DLL specified in LoadLibrary() before
	returning from LoadLibrary() if the DLL does not exist in the Windows path. For
	more information about the Windows path, see the Windows search order described
	in the documentation for LoadLibrary().
	
	It is possible to suppress this error message so that a custom error message or
	other error handling may be implemented without this system error box. To do so,
	call SetErrorMode() with SEM_NOOPENFILEERRORBOX before the call to
	LoadLibrary(). LoadLibrary() will return error code 2 meaning "File was not
	found."
	
	MORE INFORMATION
	================
	
	SetErrorMode() only affects the error mode of the current task and does not
	affect the entire system. The return value may be used to toggle the error mode
	in different portions of an application.
	
	For an implicitly loaded DLL that may be missing, the system will display the
	aforementioned error box if the application is run from Program Manager. After
	clicking the OK button, the following message appears:
	
	  Cannot find file d:\path\myexe.exe (or one of its components).
	  Check to ensure the path and filename are correct and that all required
	  libraries are available.
	
	From File Manager, no "file error" message box appears, but the following message
	is displayed instead:
	
	  File manager cannot find the specified file (or one of its components).
	
	  Make sure the path and filename are correct and that all required libraries
	  are available.
	
	Because these error messages appear before the WinMain() of the application
	executes, SetErrorMode() cannot suppress the error message boxes for implicitly
	linked DLLs. Furthermore, there is no way to configure Program Manager to
	suppress the "file error" message box.
	
	Sample Code
	-----------
	
	   {
	   HINSTANCE hDLL;
	   UINT uOldErrorMode;
	
	   uOldErrorMode = SetErrorMode(SEM_NOOPENFILEERRORBOX);
	
	   // Try to load DLL.
	   hDLL = LoadLibrary("MYDLL.DLL");
	
	   if (hDLL == 2)
	      MessageBox(NULL, "MYDLL.DLL does not exist", "ERROR", MB_OK);
	   else if (hDLL <= HINSTANCE_ERROR)
	      MessageBox(NULL, "Other problems loading MYDLL.DLL, "ERROR", MB_OK);
	   else
	   {
	      MessageBox(NULL, "MYDLL.DLL exists", "SUCCESS", MB_OK);
	      FreeLibrary(hDLL);
	   }
	
	   SetErrorMode(uOldErrorMode);  // Can restore error mode if desired.
	   }
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
