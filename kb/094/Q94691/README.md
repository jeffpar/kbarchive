---
layout: page
title: "Q94691: Bitmap Manipulation Techniques"
permalink: kb/094/Q94691/
---

## Q94691: Bitmap Manipulation Techniques

	Article: Q94691
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbprogramming kbsample kbOSWin310 kbDSupport kbSDKWin16
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Windows versions 3.0 and 3.1 bitmap-manipulation Application Programming
	Interface (API) (BitBlt(), StretchBlt(), StretchDIBits(), and so forth) contains
	a powerful complement of Raster Operations (ROP) that allow for complicated
	handling of bitmaps. These raster-operation codes can be used, for example, to
	change an entire color in a bitmap without affecting the other colors.
	
	The BMUTIL sample in the Microsoft Download Center demonstrates the following
	bitmap manipulation techniques:
	
	1. Creating an unavailable or disabled (grayed) bitmap from a color bitmap using
	  various ROP codes and the BitBlt() function.
	
	2. Changing a single color in a bitmap without affecting any other colors. This
	  is implemented completely using BitBlt() with various ROP codes.
	
	3. Swapping two colors in a bitmap without affecting any other colors. This is
	  also implemented with BitBlt() and ROP codes.
	
	4. Dithering a color bitmap to a monochrome bitmap. This is done by manipulating
	  the bits of a Device-Independent Bitmap (DIB) directly.
	
	This sample uses the Windows 3.1 common dialog boxes, so you must have the
	Windows 3.1 SDK to compile it.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Bmutil.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbprogramming kbsample kbOSWin310 kbDSupport kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	
