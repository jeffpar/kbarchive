---
layout: page
title: "Q123072: How to Use ToAscii() in Eastern European Windows"
permalink: /kb/123/Q123072/
---

## Q123072: How to Use ToAscii() in Eastern European Windows

	Article: Q123072
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	KEYBOARD.DRV in Eastern European versions of Windows version 3.1 has additional
	virtual keys. The ToAscii() function is modified in these versions of Windows to
	support the dual mode keyboard driver.
	
	MORE INFORMATION
	================
	
	Here's the syntax for ToAxcii():
	
	     ToAscii(UINT uVirtKey, UINT uScanCode, BYTE FAR* lpbKeyState,
	        DWORD FAR* lpdwTransKey, UINT fuState)
	
	In Eastern European versions of Windows version 3.1, uVirtKey has a few
	additional values specifically intended for these Windows.
	
	  VK_GETSTATUS    0x8A
	  VK_SET_PRI      0x88
	  VK_SET_SEC      0x89
	
	By using these Eastern European specific virtual keycodes, the application can
	check the current keyboard status, or set the keyboard mode.
	
	To Check keyboard status, use this code:
	
	     uiStatus = ToAscii(VK_GETSTATUS,....);
	     if(uiStatus == VK_SET_PRI)
	        MessageBox(hWnd, "Primary Mode"...);
	     else if(uiStatus == VK_SET_SEC)
	        MessageBox(hWnd, "Secondary Mode"...);
	     else
	        MessageBox(hWnd, "You use non-EE KEYBOARD.DRV"...);
	
	To set Primary mode, use this code:
	
	     ToAscii(VK_SET_PRI,...);
	
	To set Secondary mode, use this code:
	
	     ToAscii(VK_SET_SEC,...);
	
	Additional query words: 3.10 WM_KEYBOARDCHANGE
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
