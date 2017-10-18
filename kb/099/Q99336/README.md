---
layout: page
title: "Q99336: PRB: Combined Windows 3.0 and 3.1 Applications"
permalink: kb/099/Q99336/
---

## Q99336: PRB: Combined Windows 3.0 and 3.1 Applications

	Article: Q99336
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.0 
	-------------------------------------------------------------------------------
	
	
	When a combined Windows 3.0 and 3.1 application is run under the debugging
	version of Windows 3.0, during load time, a Fatal Exit message "Invalid
	Ordinal Reference" is displayed on the debug terminal followed by a stack
	trace.
	
	Note, however, that the application continues to load and run successfully,
	and therefore this error message can be ignored as long as the Windows 3.1
	function is not actually called.
	
	CAUSE
	=====
	
	While loading an application, the Windows 3.0 kernel attempts to fix up
	references to all function calls in the application. At load time, the Windows
	3.0 kernel is unaware of the version checking being done on the Windows
	3.1-specific calls. The version 3.0 kernel will attempt to fix up the references
	to the Windows 3.1 calls too, which are undefined, and therefore the Fatal Exit
	message is generated.
	
	RESOLUTION
	==========
	
	The Fatal Exit message can be ignored because the application will run
	successfully.
	
	If this behavior (the Fatal Exit message) is not satisfactory, use the following
	workaround to call Windows 3.1-specific calls in a Windows 3.0 application
	without generating any Fatal Exit messages:
	
	  extern BOOL fWin31;
	    // Assuming fWin31 is initialized appropriately using GetVersion().
	
	         if (fWin31)
	         {
	            // Get the address of the Window 3.1-specific function.
	
	           // First, load either USER.EXE, GDI.EXE, or KERNEL.EXE,
	           // depending on which DLL the function resides in.
	            LoadLibrary(...);
	
	            // Get the address of that function using GetProcAddress().
	            lpfnWin31FuncAddr = GetProcAddress(...);
	
	            // Use this address to make the function call.
	            (*lpfnWin31FuncAddr)(...);
	          }
	
	This method will not generate a Fatal Exit message under the debug version of
	Windows 3.0, because there is no direct reference made to a Windows 3.1
	function.
	
	For a quick reference on how this method works, please see the DIBVIEW sample
	provided with the Windows SDK. The source file PRINT.C adopts this same
	technique in the FindGDIFunction() routine before calling any GDI functions
	specific to Windows 3.1.
	
	MORE INFORMATION
	================
	
	Microsoft Windows version 3.0 applications can be written to conditionally link
	to and use Windows version 3.1 functions to take advantage of the newer features
	when running under Windows 3.1. This is explained in the "Combined Windows 3.0
	and 3.1 Applications" section on page 31 of the Microsoft Windows SDK "Getting
	Started" manual for version 3.1.
	
	This behavior may not be suitable for certain applications or could lead to other
	problems. For example, on systems that do not have a debug terminal connected to
	the COM1 port to receive debug information, Kernel will display a "Cannot write
	to device AUX" message box or the system might freeze. The debug message could
	be redirected from the AUX device to some other destination, if desired. For
	information on how to do this, please query on the following words in the
	Microsoft Knowledge Base:
	
	  redirect debug information
	
	
	Additional query words: 3.10 RIP
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
