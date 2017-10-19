---
layout: page
title: "Q108316: DOC: Incorrect Hard-Coded Values in SDK BITMAP.C Sample"
permalink: /kb/108/Q108316/
---

## Q108316: DOC: Incorrect Hard-Coded Values in SDK BITMAP.C Sample

	Article: Q108316
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbdocfix kbOSWin310 _IK kbSDKWin16
	Last Modified: 16-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbfile
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When running the BITMAP.C sample, no problems occur if the code is compiled and
	run as-is, without modifications. However, many possible symptoms can occur if
	the user modifies or adds to the code. BITMAP.C contains several calls to the
	function GetObject(), all of which pass a constant for the cbBuffer parameter,
	rather than a sizeof(BITMAP); that is
	
	     GetObject(hBitmap, 16, &Bitmap);
	
	rather than:
	
	     GetObject(hBitmap, sizeof(BITMAP), &Bitmap);
	
	Unfortunately, the size of the BITMAP structure under Windows 3.1 is 14 bytes, so
	each such call to GetObject overwrites the variable after Bitmap. Depending on
	what that variable is, this code could produce a wide range of erratic
	behavior.
	
	In the BITMAP.C sample code, the variable following Bitmap is
	
	     BOOL bTrack = FALSE;        // TRUE if user is selecting a region.
	
	(Note that both Bitmap and bTrack are global.) Because bTrack is set to TRUE only
	while the mouse button is down, and the GetObject calls are done only during
	initialization and when a menu item is selected (which can't be done with the
	mouse button down), this problem becomes apparent only when the user modifies
	the code (for example by adding some other variable after Bitmap).
	
	Check any code that is based on the old BITMAP.C sample, and replace the constant
	16 with sizeof(BITMAP):
	
	     GetObject(hBitmap, sizeof(BITMAP), &Bitmap).
	
	Additional query words: 3.10 docerr
	
	======================================================================
	Keywords          : kbdocfix kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
