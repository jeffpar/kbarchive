---
layout: page
title: "Q87494: BUG: BitBlt() Bitmap on VGA Display Causes GP Fault"
permalink: /kb/087/Q87494/
---

## Q87494: BUG: BitBlt() Bitmap on VGA Display Causes GP Fault

	Article: Q87494
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbOSWin310 _IK kbSDKWin16
	Last Modified: 14-JUL-1999
	
	3.10
	WINDOWS
	kbprg kbbuglist
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application for the Microsoft Windows environment calls BitBlt() to copy
	a large (640 x 480) bitmap to the VGA screen, the application experiences a
	General Protection (GP) fault.
	
	RESOLUTION
	==========
	
	Increase the size of the bitmap to store one additional scan line. Use the
	BitBlt function to copy only the desired portion of the bitmap to the screen.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	There are two methods for increasing the size of the bitmap. If the contents of
	the bitmap are fixed, Microsoft Paintbrush or a similar image- editing tool can
	be used to add or remove a scanline from the bitmap.
	
	If the image changes, the following eight steps add a scanline to a bitmap under
	program control and copy the bitmap to the screen. The handle to the original
	bitmap is stored in the hBMPOriginal variable.
	
	1. Declare variables.
	
	     HBITMAP hBMPCompatible, hBMPOld1, hBMPOld2;
	     HDC hDCMem1, hDCMem2, HDCScreen;
	
	2. Retrieve a Display Context (DC) for the screen.
	
	     hDCScreen = GetDC(NULL);
	
	3. Create a bitmap compatible with the screen that contains one more scanline
	  than the original bitmap.
	
	     hBMPCompatible = CreateCompatibleBitmap(hDCScreen, 640, 481);
	
	4. Create two memory DCs compatible with the screen.
	
	        hDCMem1 = CreateCompatibleDC(hDCScreen);
	        hDCMem2 = CreateCompatibleDC(hDCScreen);
	
	5. Select the original bitmap into one of the DCs. Select the new bitmap into
	  the other.
	
	     hBMPOld1 = SelectObject(hDCMem1, hBMPOriginal);
	     hBMPOld2 = SelectObject(hDCMem2, hBMPCompatible);
	
	6. Use the BitBlt function to copy the original bitmap into the compatible
	  bitmap. The function does not fill the bottom scanline because the bottom
	  scanline is not copied to the screen.
	
	        BitBlt(hDCMem2, 0, 0, 640, 480, hDCMem1, 0, 0, SRCCOPY);
	
	7. Copy the compatible bitmap to the screen.
	
	        BitBlt(hDCScreen, 0, 0, 640, 480, hDCMem2, 0, 0, SRCCOPY);
	
	8. Free resources. Note that the code below deletes the compatible bitmap. If
	  the bitmap is required later in the program, defer deleting the bitmap until
	  just before the application closes.
	
	     hBMPCompatible = SelectObject(hDCMem2, hBMPOld2);
	     DeleteObject(hBMPCompatible);
	     hBMPOriginal = SelectObject(hDCMem1, hBMPOld1);
	     DeleteDC(hDCMem1);
	     DeleteDC(hDCMem2);
	     ReleaseDC(NULL, hDCScreen);
	
	Additional query words: buglist3.10 3.10 scan line
	
	======================================================================
	Keywords          : kbOSWin310 _IK kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
