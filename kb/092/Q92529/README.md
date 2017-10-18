---
layout: page
title: "Q92529: INFO: Reasons for Failure of Bitmap Functions"
permalink: kb/092/Q92529/
---

## Q92529: INFO: Reasons for Failure of Bitmap Functions

	Article: Q92529
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The bitmap functions (all) can fail for several reasons. Different functions
	return different values to indicate failure. Read the documentation for
	information about each function. This article combines the causes of failure for
	all functions and provides a resolution or explanation. A list of affected
	functions follows each cause. The causes are:
	
	1. Invalid parameters.
	
	2. The device knows how to deal with a Device-Independent Bitmap (DIB). Failure
	  within that driver, as it works on the DIB, is propagated to Graphics Device
	  Interface (GDI).
	
	3. GDI is simulating the DIB operation. Bitmap is 64K or larger.
	
	4. A scan line (DWORD aligned) is 64K or larger.
	
	5. Insufficient global memory.
	
	6. CBM_INIT is set in the dwInit field of CreateDIBitmap. GDI is setting the
	  bits obtained from the DIB. The simulation fails if GDI cannot create a
	  memory-based DC (device context) and select the bitmap into it.
	
	7. The source and destination DCs represent different physical devices.
	
	8. The source rectangle extends beyond the source bitmap.
	
	9. The point lies outside of the clipping region.
	
	10. The bitmap dimensions were not set by SetBitmapDimension.
	
	11. The bitmap resource could not be found (FindResource) or loaded
	  (LoadResource) or locked (LockResource) in memory.
	
	12. A memory DC was passed when a device DC was expected.
	
	MORE INFORMATION
	================
	
	Cause 1: Invalid parameters.
	
	Explanation 1: DCs, DIB headers, bitmap handles, starting scan line, and other
	parameters should be valid.
	
	Affected Functions: All functions.
	
	Cause 2: The device knows how to deal with a DIB. Failure within that driver, as
	it works on the DIB, is propagated to GDI.
	
	Explanation 2: Low memory (within the device and/or global memory) and bugs are
	the common sources of device driver failures. For more information, search the
	Microsoft Knowledge Base or contact the device driver vendor.
	
	Affected Functions: CreateDIBitmap, GetDIBits, SetBitmapBits, SetDIBits,
	SetDIBitsToDevice, StretchDIBits.
	
	Cause 3: GDI is simulating the DIB operation. Bitmap is 64K or larger.
	
	Explanation 3: GDI's simulation of GetDIBits does not support bitmaps that are
	64K or larger.
	
	Affected Functions: GetDIBits.
	
	Cause 4: Each scan line (DWORD aligned) is 64K or larger.
	
	Explanation 4: A scan line is one row of pixels in a bitmap.
	
	Affected Functions: CreateBitmap, CreateCompatibleBitmap, CreateDIBitmap,
	CreateDiscardableBitmap.
	
	Cause 5: Insufficient global memory.
	
	Explanation 5: GDI needs global memory to create bitmaps and to support
	intermediate objects as it performs operations such as stretching, getting bits
	from DIBs, and setting bits in DIBs.
	
	Affected Functions: BitBlt, CreateBitmap, CreateBitmapIndirect,
	CreateCompatibleBitmap, CreateDIBitmap, CreateDiscardableBitmap, GetDIBits,
	LoadBitmap, SetDIBits, SetDiBitsToDevice, StretchBlt, StretchDIBits.
	
	Cause 6: CBM_INIT is set in the dwInit field of CreateDIBitmap. GDI is setting
	the bits obtained from the DIB. The simulation fails if GDI cannot create a
	memory based DC and select the bitmap into it.
	
	Affected Functions: CreateDIBitmap.
	
	Cause 7: The source and destination DCs represent different physical devices.
	
	Explanation 7: The format for device-dependent bitmaps varies from one device to
	another. Transferring bits directly between them is not allowed.
	
	Affected Functions: BitBlt, PatBlt, StretchBlt.
	
	Cause 8: The source rectangle extends beyond the source bitmap.
	
	Explanation 8: These functions operate on a rectangular area in the bitmap
	selected into the source DC. This rectangular area cannot extend beyond the
	boundaries of the bitmap.
	
	Affected Functions: BitBlt, StretchBlt.
	
	Cause 9: The point lies outside of the clipping region.
	
	Resolution 9: You may get another DC for the same window. The default clipping
	region includes the entire visible client area.
	
	Affected Functions: GetPixel, SetPixel.
	
	Cause 10: The bitmap dimensions were not set by SetBitmapDimension.
	
	Explanation 10: GetBitmapDimension retrieves the values set using
	SetBitmapDimension.
	
	Affected Functions: GetBitmapDimension.
	
	Cause 11: The bitmap resource could not be found (FindResource) or loaded
	(LoadResource) or locked (LockResource) in memory.
	
	Resolution 11: Ensure that the bitmap resource exists and that the hInst
	parameter refers to the correct hInstance. Try increasing the number of file
	handles using SetHandleCount and increasing available global memory by closing
	some applications. For more information about the causes of failure of resource
	functions, query the Microsoft Knowledge Base on the following keywords:
	
	  " prod(winsdk) and failure and LoadResource and FindResource and LockResource
	  " (without the quotation marks)
	
	
	Affected Functions: LoadBitmap, SetBitmapBits.
	
	Cause 12: A memory DC was passed when a device DC was expected.
	
	Explanation 12: SetDIBitsToDevice only works on device DCs.
	
	Affected Functions: SetDIBitsToDevice.
	
	Additional query words: 3.00 3.10 fails SetBitmapDimensionEx GetBitmapDimensionEx
	
	======================================================================
	Keywords          : kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	Issue type        : kbinfo
	
	=============================================================================
	
