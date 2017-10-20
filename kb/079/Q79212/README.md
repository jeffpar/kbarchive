---
layout: page
title: "Q79212: HOWTO: Drawing Transparent Bitmaps"
permalink: /kb/079/Q79212/
---

## Q79212: HOWTO: Drawing Transparent Bitmaps

{% raw %}

	Article: Q79212
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 
	Operating System(s): 
	Keyword(s): kbprogramming kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16
	Last Modified: 22-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A portion of a graphic image that does not change the contents of the screen is
	termed "transparent." The DrawIcon function can create an image that contains
	transparent portions. It is also possible to obtain this functionality using the
	BitBlt function; however, there are some additional steps involved.
	
	The first step is to obtain the contents of the area where the bitmap will be
	drawn and to store this background image in a memory display context (DC). Mask
	out the area of the background that corresponds to the nontransparent portion of
	the image bitmap and mask out all transparent pixels from the image bitmap. Use
	the XOR raster operation to merge the image bitmap into the background bitmap.
	Finally, use the BitBlt function to move the merged image to the destination DC.
	
	MORE INFORMATION
	================
	
	The following nine steps describe a process used to draw transparent bitmaps:
	
	1. Create a DC to hold the image bitmap.
	
	2. Select the image bitmap into the DC.
	
	3. Create a memory DC to hold the final image. This is the destination DC.
	
	4. Copy the portion of the screen that will be covered by the image into the
	  destination DC.
	
	5. Create an "AND mask" that contains the mask of the colors to draw (the
	  nontransparent portions of the image). To do this, perform the following
	  three steps:
	  a. Set the background color of the image DC to the color that will be
	     transparent in the image.
	
	  b. Create a monochrome DC.
	
	  c. BitBlt the image into the monochrome DC.
	
	  This will create an AND mask of the bitmap by setting pixels that match the
	  background color to white (1), and setting all other pixels to black (0).
	
	6. Use BitBlt with the SRCAND raster operation code to copy the AND mask onto
	  the destination DC.
	
	7. Use BitBlt with the SRCAND raster operation code to copy the inverse of the
	  AND mask onto the image DC.
	
	8. Use BitBlt with the SRCPAINT raster operation code to copy the image DC onto
	  the destination DC.
	
	9. Use BitBlt to copy the contents of the destination DC to the appropriate
	  portion of the screen.
	
	The following code is a function that demonstrates the preceding steps:
	
	     void DrawTransparentBitmap(HDC hdc, HBITMAP hBitmap, short xStart,
	                             short yStart, COLORREF cTransparentColor)
	     {
	     BITMAP     bm;
	     COLORREF   cColor;
	     HBITMAP    bmAndBack, bmAndObject, bmAndMem, bmSave;
	     HBITMAP    bmBackOld, bmObjectOld, bmMemOld, bmSaveOld;
	     HDC        hdcMem, hdcBack, hdcObject, hdcTemp, hdcSave;
	     POINT      ptSize;
	
	     hdcTemp = CreateCompatibleDC(hdc);
	     SelectObject(hdcTemp, hBitmap);   // Select the bitmap
	
	     GetObject(hBitmap, sizeof(BITMAP), (LPSTR)&bm);
	     ptSize.x = bm.bmWidth;            // Get width of bitmap
	     ptSize.y = bm.bmHeight;           // Get height of bitmap
	     DPtoLP(hdcTemp, &ptSize, 1);      // Convert from device
	
	                                       // to logical points
	
	     // Create some DCs to hold temporary data.
	     hdcBack   = CreateCompatibleDC(hdc);
	     hdcObject = CreateCompatibleDC(hdc);
	     hdcMem    = CreateCompatibleDC(hdc);
	     hdcSave   = CreateCompatibleDC(hdc);
	
	     // Create a bitmap for each DC. DCs are required for a number of
	     // GDI functions.
	
	     // Monochrome DC
	     bmAndBack   = CreateBitmap(ptSize.x, ptSize.y, 1, 1, NULL);
	
	     // Monochrome DC
	     bmAndObject = CreateBitmap(ptSize.x, ptSize.y, 1, 1, NULL);
	
	     bmAndMem    = CreateCompatibleBitmap(hdc, ptSize.x, ptSize.y);
	     bmSave      = CreateCompatibleBitmap(hdc, ptSize.x, ptSize.y);
	
	     // Each DC must select a bitmap object to store pixel data.
	     bmBackOld   = SelectObject(hdcBack, bmAndBack);
	     bmObjectOld = SelectObject(hdcObject, bmAndObject);
	     bmMemOld    = SelectObject(hdcMem, bmAndMem);
	     bmSaveOld   = SelectObject(hdcSave, bmSave);
	
	     // Set proper mapping mode.
	     SetMapMode(hdcTemp, GetMapMode(hdc));
	
	     // Save the bitmap sent here, because it will be overwritten.
	     BitBlt(hdcSave, 0, 0, ptSize.x, ptSize.y, hdcTemp, 0, 0, SRCCOPY);
	
	     // Set the background color of the source DC to the color.
	     // contained in the parts of the bitmap that should be transparent
	     cColor = SetBkColor(hdcTemp, cTransparentColor);
	
	     // Create the object mask for the bitmap by performing a BitBlt
	     // from the source bitmap to a monochrome bitmap.
	     BitBlt(hdcObject, 0, 0, ptSize.x, ptSize.y, hdcTemp, 0, 0,
	            SRCCOPY);
	
	     // Set the background color of the source DC back to the original
	     // color.
	     SetBkColor(hdcTemp, cColor);
	
	     // Create the inverse of the object mask.
	     BitBlt(hdcBack, 0, 0, ptSize.x, ptSize.y, hdcObject, 0, 0,
	            NOTSRCCOPY);
	
	     // Copy the background of the main DC to the destination.
	     BitBlt(hdcMem, 0, 0, ptSize.x, ptSize.y, hdc, xStart, yStart,
	            SRCCOPY);
	
	     // Mask out the places where the bitmap will be placed.
	     BitBlt(hdcMem, 0, 0, ptSize.x, ptSize.y, hdcObject, 0, 0, SRCAND);
	
	     // Mask out the transparent colored pixels on the bitmap.
	     BitBlt(hdcTemp, 0, 0, ptSize.x, ptSize.y, hdcBack, 0, 0, SRCAND);
	
	     // XOR the bitmap with the background on the destination DC.
	     BitBlt(hdcMem, 0, 0, ptSize.x, ptSize.y, hdcTemp, 0, 0, SRCPAINT);
	
	     // Copy the destination to the screen.
	     BitBlt(hdc, xStart, yStart, ptSize.x, ptSize.y, hdcMem, 0, 0,
	            SRCCOPY);
	
	     // Place the original bitmap back into the bitmap sent here.
	     BitBlt(hdcTemp, 0, 0, ptSize.x, ptSize.y, hdcSave, 0, 0, SRCCOPY);
	
	     // Delete the memory bitmaps.
	     DeleteObject(SelectObject(hdcBack, bmBackOld));
	     DeleteObject(SelectObject(hdcObject, bmObjectOld));
	     DeleteObject(SelectObject(hdcMem, bmMemOld));
	     DeleteObject(SelectObject(hdcSave, bmSaveOld));
	
	     // Delete the memory DCs.
	     DeleteDC(hdcMem);
	     DeleteDC(hdcBack);
	     DeleteDC(hdcObject);
	     DeleteDC(hdcSave);
	     DeleteDC(hdcTemp);
	     }
	
	The following is an example of how the DrawTransparentBitmap function might be
	called:
	
	     DrawTransparentBitmap(hdc,         // The destination DC.
	
	                           hBitmap,     // The bitmap to be drawn.
	                           xPos,        // X coordinate.
	                           yPos,        // Y coordinate.
	                           0x00FFFFFF); // The color for transparent
	                                        // pixels (white, in this
	                                        // example).
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbprogramming kb16bitonly kbOSWin310 _IK kbOSWin300 kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
