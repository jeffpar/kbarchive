---
layout: page
title: "Q153003: How To Perform a Screen Capture Programmatically"
permalink: kb/153/Q153003/
---

## Q153003: How To Perform a Screen Capture Programmatically

	Article: Q153003
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp300 kbvfp600
	Last Modified: 26-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	It is not possible to use the KEYBOARD command in FoxPro to stuff the keyboard
	buffer with PrintScrn or Alt+PrintScrn to copy the whole screen or the active
	window to the clipboard. This article describes how you can call the Win32 API
	function, keybd_event, to get this functionality under Windows 95 and Windows
	NT. This functionality, however, is not available under Windows 3.1 or Windows
	for Workgroups since the Win32s subsystem does not contain these API functions.
	
	MORE INFORMATION
	================
	
	The following commands register the keybd_event function and set up a variable
	that will be passed each time to the function:
	
	     DECLARE INTEGER keybd_event IN Win32API ;
	        INTEGER, INTEGER, INTEGER, INTEGER
	     VK_SNAPSHOT = 44    && from the winuser.h
	     VK_LMENU = 164
	     KEYEVENTF_KEYUP = 2
	     KEYEVENTF_EXTENDEDKEY = 1
	
	The following commands copy the full windows desktop to the clipboard (the
	equivalent of PrintScrn):
	
	  DOEVENTS
	  keybd_event(VK_SNAPSHOT, 1, 0, 0 )
	  keybd_event(VK_SNAPSHOT, 1, KEYEVENTF_KEYUP, 0 )
	  DOEVENTS
	
	The following commands copy the active application window to the clipboard (the
	equivalent of ALT+PrintScrn):
	
	  DOEVENTS
	  keybd_event( VK_LMENU,    0, KEYEVENTF_EXTENDEDKEY, 0 )  && key down
	  keybd_event( VK_SNAPSHOT, 0, KEYEVENTF_EXTENDEDKEY, 0 )
	  keybd_event( VK_SNAPSHOT, 0, KEYEVENTF_EXTENDEDKEY + KEYEVENTF_KEYUP, 0 )
	  keybd_event( VK_LMENU,    0, KEYEVENTF_EXTENDEDKEY + KEYEVENTF_KEYUP, 0 )  
	  DOEVENTS
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kb3rdparty kbvfp300 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : WINDOWS:3.0,3.0b,6.0
	
	=============================================================================
	
