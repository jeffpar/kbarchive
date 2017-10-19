---
layout: page
title: "Q78451: INFO: Detecting EGA.SYS"
permalink: /kb/078/Q78451/
---

## Q78451: INFO: Detecting EGA.SYS

	Article: Q78451
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly _IK kbSDKWin16
	Last Modified: 30-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	EGA.sys is a driver that facilitates the use of the shadow registers in EGA and
	more advanced video cards. Through the use of the mouse driver's Interrogate
	Driver function, it is possible to determine if EGA.sys is installed.
	
	The interface to the Interrogate Driver function is as follows:
	
	     AH = FAh
	     BX = 0
	     INT 10h
	
	The return values are:
	
	     AX = Restored
	     BX = 0 if the mouse driver or EGA.SYS is not installed
	
	     < 2 if EGA.SYS was installed with the mouse driver
	     >= 2 if EGA.SYS was installed
	
	For more information, see chapter 10 of the "Microsoft Mouse Programmer's
	Reference," second edition (Microsoft Press).
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
