---
layout: page
title: "Q83233: F1CDHelp.exe Uses Keyboard Hook to Access Help"
permalink: /kb/083/Q83233/
---

## Q83233: F1CDHelp.exe Uses Keyboard Hook to Access Help

	Article: Q83233
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbHook kbGrpDSUser kbOSWin310 kb16bitonly
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	F1CDHELP is a file in the Microsoft Download Center that demonstrates how an
	application can implement context sensitive help for the dialog boxes provided
	by the dynamic-link library (DLL) COMMDLG.DLL (the common dialog box DLL). When
	the user presses the F1 key, the application calls Windows Help.
	
	The recommended user interface for an application to provide access to Windows
	Help is through the F1 key. This article describes a technique that can be used
	with the common dialog box DLL to bring up context sensitive help for each
	dialog box. The sample uses the SetWindowsHookEx() function to set a
	task-specific keyboard hook, which monitors keyboard input and responds to the
	F1 key.
	
	Because this application uses a task-specific hook, the hook function code
	resides in the application's .EXE file and is not required to be in a fixed code
	page in a DLL. (The filter function for each system- wide hook must be in a
	DLL.)
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  F1CDHelp.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The technique used in this article is straightforward and minimizes the number of
	global variables required. The application installs the keyboard hook and calls
	the RegisterWindowMessage() function to define a help message. When an
	application registers the help message, the common dialog box DLL notifies the
	application each time the user chooses the Help button in one of the common
	dialog boxes. The DLL sends the help message to the window procedure of the
	dialog box's parent window.
	
	When the keyboard hook function detects that the F1 key is pressed, it posts a
	WM_COMMAND message to the appropriate window procedure. In the F1CDHELP example,
	the message is posted either to the main window (when no dialog box is
	displayed) or to the dialog box's window procedure. If the message is posted to
	one of the common dialog boxes, wParam is set to pshHelp; the application
	simulates choosing the Help button in the common dialog box. Otherwise, wParam
	is set to IDM_HELPCONTENTS; the application simulates selecting a menu item in
	the application.
	
	The following code demonstrates installing the hook and registering the help
	message in response to a WM_CREATE message:
	
	     case WM_CREATE:
	        // Install the keyboard hook
	
	        lpfnKbrdHook = MakeProcInstance((FARPROC)KeyboardHook, ghInst);
	        ghKbrdHook = SetWindowsHookEx(WH_KEYBOARD, lpfnKbrdHook,
	                                      ghInst, GetCurrentTask());
	
	        // Register the help message. The common dialog box DLL sends this
	        // message when the user chooses the Help file in a common
	        // dialog box.
	        gwHelpMsg = RegisterWindowMessage((LPSTR)HELPMSGSTRING);
	        break;
	
	The following code demonstrates removing the keyboard hook in response to a
	WM_DESTROY message:
	
	     case WM_DESTROY:
	        UnhookWindowsHookEx(ghKbrdHook);
	        break;
	
	The hook function receives notification about the F1 key and posts a message as
	appropriate:
	
	  DWORD FAR PASCAL KeyboardHook(int iCode, WPARAM wParam, LPARAM lParam)
	  {
	     if (iCode < 0 || iCode != HC_ACTION)
	        return CallNextHookEx(ghKbrdHook, iCode, wParam, lParam);
	
	     if (wParam == VK_F1)
	
	        // If this is a repeat or the key is being released, ignore it.
	        if (lParam & 0x80000000 || lParam & 0x40000000)
	           return CallNextHookEx(ghKbrdHook, iCode, wParam, lParam);
	        else
	        {
	           if (IsWindowEnabled(ghWnd)) // F1 pressed in main window?
	              PostMessage(ghWnd, WM_COMMAND, IDM_HELPCONTENTS, 0L);
	           else                        // F1 pressed in a dialog box
	              PostMessage(GetActiveWindow(), WM_COMMAND, pshHelp, 0L);
	        }
	
	     return CallNextHookEx(ghKbrdHook, iCode, wParam, lParam);
	  }
	
	The second PostMessage() call above is executed when the user requests help in a
	specific common dialog box. This simulates choosing the Help button in the
	dialog box. Because the application registered the help message (during the
	processing of its WM_CREATE message), the common dialog box DLL will send the
	gwHelpMessage to the parent window procedure. An application can process this
	message as follows:
	
	     default:
	        if (message == gwHelpMsg)  // Help requested in a common dialog
	                                   // box
	        {
	        // The lParam points to an OPENFILENAME or a CHOOSECOLOR data
	        // structure. The application can differentiate between them by
	        // checking the structure's size, which is in the first four
	        // bytes (a DWORD) of the structure. This allows the application
	        // to display different help for each of the common dialog boxes.
	
	        dwStructSize = (DWORD)(*(LPDWORD)lParam);
	
	        switch (dwStructSize)
	           {
	           case sizeof(OPENFILENAME):
	              MessageBox((HWND)wParam, "Help requested for OpenFile",
	                         gszAppName, MB_OK);
	              break;
	
	           case sizeof(CHOOSECOLOR):
	              MessageBox((HWND)wParam, "Help requested for ChooseColor"
	                         gszAppName, MB_OK);
	              break;
	
	           default:
	              break;
	           }
	        break;
	        }
	        else // Not a help message
	           return DefWindowProc(hWnd, message, wParam, lParam);
	
	Additional query words:
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbHook kbGrpDSUser kbOSWin310 kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
