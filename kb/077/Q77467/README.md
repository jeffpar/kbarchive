---
layout: page
title: "Q77467: INFO: Verifying the Printer Connection"
permalink: /kb/077/Q77467/
---

## Q77467: INFO: Verifying the Printer Connection

{% raw %}

	Article: Q77467
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): _IK kb16bitonly kbOSWin310 _IK kbSDKWin16
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The PC ROM BIOS printer services function Get Printer Status (INT 17H Function
	2H) can be used to determine if a printer is connected to a specific port. To
	save time and potential data loss, an application can use INT 17H Function 2H to
	determine if a printer is present before entering the application's printing
	code. This article contains code to make this determination.
	
	NOTE: This same functionality may be obtained in Windows 3.1 using the
	OpenComm(), WriteComm(), and GetCommError() functions.
	
	Sample Code
	-----------
	
	The following code defines a function IsPrinter():
	
	     /***************************************************************
	
	     *                                                             *
	     *  Name:     IsPrinter - tests if printer is connected        *
	     *                                                             *
	     *  Parameters:   AX = 02h                                     *
	     *                DX = printer number (LPT1 = 0)               *
	     *                                                             *
	     *  Return    AH = status bits                                 *
	     *                 01h    time out                             *
	     *                 02h    unused                               *
	     *                 04h    unused                               *
	     *                 08h    I/O error                            *
	     *                 10h    printer selected                     *
	     *                 20h    out of paper                         *
	     *                 40h    printer acknowledgment               *
	     *                 80h    printer not busy                     *
	     *                                                             *
	     * Function returns 1 if printer connected                     *
	     *          returns 0 otherwise                                *
	     *                                                             *
	     ***************************************************************/ 
	
	     int IsPrinter(void)
	
	     {
	
	     unsigned char iRetVal = 0;
	
	     _asm
	
	     {
	        mov   ah, 02h
	        mov   dx, 0            /* 0 is number for LPT1: */ 
	        int   17h
	        mov   iRetVal, ah
	     }
	
	     if (iRetVal == 0x90)
	
	     return (1);
	
	     else
	
	        return (0);
	
	     }
	
	For more information, please refer to "The MS-DOS Encyclopedia" (Microsoft
	Press). Pages 163 and 164 contain an example of interrupt driven communication
	with the printer. Appendix O details the ROM BIOS functions and their
	parameters.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : _IK kb16bitonly kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
