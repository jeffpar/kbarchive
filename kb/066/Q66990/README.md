---
layout: page
title: "Q66990: DOC: BinInfo Structure for GETSETPAPERBINS Escape Incorrect"
permalink: /kb/066/Q66990/
---

## Q66990: DOC: BinInfo Structure for GETSETPAPERBINS Escape Incorrect

	Article: Q66990
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 02-JUL-1999
	
	3.00 3.10
	WINDOWS
	kbprg kbdocerr
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The BININFO data structure used by the GETSETPAPERBINS printer escape is
	incorrectly documented on page 12-31 of the Microsoft Windows SDK "Reference:
	Volume 2" for version 3.0. It is also incorrectly documented in the version 3.1
	online help and on page 480 in the version 3.1 "Programmer's Reference, Volume
	3: Messages, Structures, and Macros" manual.
	
	The correct structure declaration is as follows:
	
	     typedef struct
	     {
	
	     short   BinNumber;
	     short   NbrofBins;
	     short   Reserved;
	     short   Reserved;
	     short   Reserved;
	     short   Reserved;
	
	     } BinInfo;
	
	The Microsoft Windows Device Development Kit "Device Driver Adaptation Guide"
	correctly documents this structure on page 11-29 for version 3.0 and on page 421
	for version 3.1.
	
	Additional query words: 3.00 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
