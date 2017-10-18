---
layout: page
title: "Q80124: Retrieving the Names of Simultaneous Tasks Under Windows"
permalink: kb/080/Q80124/
---

## Q80124: Retrieving the Names of Simultaneous Tasks Under Windows

	Article: Q80124
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
	
	There are situations when it is necessary for an application to obtain a list of
	all applications that are running in the Windows environment at a particular
	time.
	
	In Windows 3.0, instead of using the EnumWindows() function and an
	application-supplied callback function to enumerate all parent windows, the
	application can retrieve a handle to the first window in the task list and walk
	through the list to obtain the names of all windows in the task list.
	
	In Windows 3.1, however, an application should instead use the ToolHelp Library
	functions. More specifically, use TaskFirst(), TaskNext(), ModuleFirst(), and
	ModuleNext().
	
	NOTE: Since the ToolHelp functions work in Windows 3.0 and since ToolHelp is
	itself a redistributable library, these functions can be safely used in Windows
	3.0 also.
	
	MORE INFORMATION
	================
	
	The most efficient way to retrieve the name of each task running under Windows
	3.0 is to use the GetWindow() function. GetWindow (hwnd, GW_HWNDFIRST) provides
	the handle to the first window in the task list. The application can walk
	through the task list by calling GetWindow (hwndCurrent, GW_HWNDNEXT). The
	following example demonstrates how to obtain a handle to each top-level window.
	The GetWindowText() function provides the name of each window from its handle.
	
	      hwndNext = GetWindow(hWnd, GW_HWNDFIRST);
	      /* Where: hWnd is the original/current window. GW_HWNDFIRST will
	         return the first sibling window for a child window, otherwise
	         it returns the first top-level window in the system's list of
	         top-level windows */ 
	      while (hwndNext)
	      {
	         if ((hwndNext != hWnd) &&  // Do not get this application's
	                                    // name.
	             (IsWindowVisible(hwndNext)) &&
	             (!GetWindow(hwndNext, GW_OWNER)))
	         {
	            if (GetWindowText(hwndNext, (LPSTR)szTemp, sizeof(szTemp)))
	            {
	              // This is a valid top-level window handle.
	              // Its name is in szTemp...
	            }
	         }
	         hwndNext = GetWindow(hwndNext, GW_HWNDNEXT);
	      }
	
	The code above will retrieve the name of each visible window. To also retrieve
	the names of invisible windows, remove the call to IsWindowVisible().
	
	Additional query words: no32bit 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
