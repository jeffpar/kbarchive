---
layout: page
title: "Q86920: DOC: OPENFILENAME lpstrInitialDir Documented Incorrectly"
permalink: kb/086/Q86920/
---

## Q86920: DOC: OPENFILENAME lpstrInitialDir Documented Incorrectly

	Article: Q86920
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbCmnDlg kbCmnDlgFileO kbSDKPlatform
	Last Modified: 11-JUN-1999
	
	3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The lpstrInitialDir member of the OPENFILENAME data structure is documented
	incorrectly on page 376 of the "Microsoft Windows Software Development Kit:
	Programmer's Reference, Volume 3: Message, Structures, and Macros" manual for
	version 3.1.
	
	The description states that if the lpstrFile member of the same structure
	specifies a valid path, the common dialog box procedure will use the path
	specified by this string instead of the path specified by lpstrInitialDir. This
	statement is incorrect; the common dialog box procedure uses the path specified
	by lpstrInitialDir regardless of the path specified in lpstrFile. If
	lpstrInitialDir is set to NULL, the system sets the initial directory to the
	current directory.
	
	MORE INFORMATION
	================
	
	An application can implement the documented functionality through either of two
	following methods:
	
	Method 1
	--------
	
	If lpstrFile specifies a valid path and a complete filename such as
	\\AUTOEXEC.BAT, perform the following three steps:
	
	1. Parse the string.
	
	2. Extract the path from the string.
	
	3. Set the lpstrInitialDir member to the extracted path.
	
	Method 2
	--------
	
	If lpstrFile specifies a valid path and a file filter such as \\*.BAT, perform
	the following four steps, as follows:
	
	1. Implement a common dialog box hook function.
	
	2. Modify the Flags member of the OPENFILENAME data structure to include the
	  OFN_ENABLEHOOK flag.
	
	3. Set the lpfnHook member of the OPENFILENAME data structure to point to the
	  hook function.
	
	4. In the hook function, process the WM_INITDIALOG message to send a WM_COMMAND
	  message with wParam set to IDOK. Doing so causes the common dialog to change
	  the current directory to the directory specified in lpstrFile.
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbCmnDlg kbCmnDlgFileO kbSDKPlatform 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
