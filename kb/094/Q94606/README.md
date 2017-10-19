---
layout: page
title: "Q94606: HOWTO: Set the CAPS LOCK, SCROLL LOCK, and NUM LOCK States"
permalink: /kb/094/Q94606/
---

## Q94606: HOWTO: Set the CAPS LOCK, SCROLL LOCK, and NUM LOCK States

	Article: Q94606
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbInput kbKeyIn kbSDKPlatform kbGrpDSUser kbUser
	Last Modified: 12-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The current state of the CAPS LOCK, SCROLL LOCK, and NUM LOCK keys can be
	queried and retrieved by the GetKeyboardState function. Although the
	SetKeyboardState function works on Windows 3.1x, it does not work correctly on
	Windows 95 or Windows NT. SetKeyboardState retrieves a byte array describing the
	state of every key. If the low order bit of a toggle key is set, the key is
	"on." By changing this bit, the toggle key state can be changed.
	
	MORE INFORMATION
	================
	
	The following sample code demonstrates how to change the state of any key on all
	platforms. Simply pass the virtual key code (VK_CAPITAL, VK_NUMLOCK or
	VK_SCROLL) and a flag to set or reset the key state to the PostVirtualKeyEvent:
	
	Sample Code
	-----------
	
	     #include <windows.h>
	
	     #define MAKEWORD(low, high)   ((WORD)(((BYTE)(low)) | \ 
	                                   (((WORD)((BYTE)(high))) << 8)))
	
	     void FAR PASCAL Keybd_Event(void);
	
	     void FAR PASCAL PostVirtualKey(  BYTE bVirtualKey,
	                                      BOOL fKeyUp)
	     {
	     WORD wARegister, wBRegister;
	
	     // Convert the virtual-key code to the scan code
	     BRegister = MAKEWORD((BYTE) MapVirtualKey(bVirtualKey, 0), 0);
	     ARegister = MAKEWORD(bVirtualKey, (fKeyUp ? 0x80 : 0x00));
	     _asm mov bx, wBRegister;   // BH = 0 (No prefix)
	     _asm mov ax, wARegister;
	     Keybd_Event();
	     }
	
	     int PASCAL WinMain(  HINSTANCE hInst,
	                          HINSTANCE hPrevInst,
	                          LPSTR szCmdLine,
	                          int nCmdShow)
	     {
	     // Toggle the caps lock key
	     PostVirtualKey(VK_CAPITAL, FALSE);
	     PostVirtualKey(VK_CAPITAL, TRUE);
	
	     return 0;
	     }
	
	Additional query words:
	
	======================================================================
	Keywords          : kb16bitonly kbInput kbKeyIn kbSDKPlatform kbGrpDSUser kbUser 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbhowto
	
	=============================================================================
	
