---
layout: page
title: "Q68296: INFO: Windows 3.x Metafiles Support DeleteObject()"
permalink: kb/068/Q68296/
---

## Q68296: INFO: Windows 3.x Metafiles Support DeleteObject()

	Article: Q68296
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.00 3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In versions of Microsoft Windows earlier than 3.0, a metafile that used a large
	number of brushes or pens could cause the GDI data segment to fill up, which
	would interfere with playing the metafile. To address this situation, metafiles
	were extended to support the DeleteObject() API in Windows 3.0.
	
	Standard Windows programming practice dictates that a GDI object, such as a brush
	or a pen, must be deleted by DeleteObject() when the object is no longer
	required by an application. This same practice also applies to metafiles. When
	an application is drawing into a metafile Display Context (DC) and the
	application no longer requires a GDI object, the application must select the
	object out of the metafile DC, then call DeleteObject(). An example of this
	process is provided below.
	
	During the process of creating a metafile, when an object is deleted, Windows
	inserts a DeleteObject() record into the metafile. When an application plays the
	metafile, the DeleteObject() record removes unnecessary objects, which prevents
	the GDI data segment from filling.
	
	Note that if an application calls DeleteObject() for an object that is selected
	into a metafile DC, the DeleteObject() call will succeed. However, no
	DeleteObject() record will be placed into the metafile.
	
	MORE INFORMATION
	================
	
	The following code demonstrates the proper method to use and delete GDI objects
	in a metafile:
	
	     HPEN hPen1, hPen2;
	     HDC hMetaDC;     // Metafile DC, assumed already created.
	
	     hPen1 = CreatePen(PS_SOLID, 6, RGB(0, 0, 255));
	     SelectObject(hMetaDC, hPen1);          // Select pen into Metafile DC.
	     Rectangle(hMetaDC, 10, 10, 100, 100);  // Use hPen1.
	
	     hPen2 = CreatePen(PS_SOLID, 6, RGB(255, 255, 0));
	     SelectObject(hMetaDC, hPen2);          // Deselect hPen1 by selecting
	
	                                            // a new pen into the DC.
	
	     DeleteObject(hPen1);                   // Delete hPen1.
	     Rectangle(hMetaDC, 100, 100, 150, 150);  // Use hPen2.
	
	     // The metafile is now complete. To deselect the final pen,
	     // select in a stock object.
	
	     SelectObject(hMetaDC, GetStockObject(WHITE_PEN));
	
	     // Delete hPen2
	
	     DeleteObject(hPen2);
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
