---
layout: page
title: "Q113254: INFO: Calculating MM_HIMETRIC Units for the METAFILEPICT"
permalink: kb/113/Q113254/
---

## Q113254: INFO: Calculating MM_HIMETRIC Units for the METAFILEPICT

	Article: Q113254
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbSDKWin16
	Last Modified: 26-JUN-1999
	
	3.10
	WINDOWS
	kbprg
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To copy a Windows metafile to the clipboard, it is necessary to allocate memory
	for a METAFILEPICT structure and fill it out appropriately. This article shows
	one approach to filling out the METAFILEPICT structure when you want to provide
	a suggested size for playing back the metafile in addition to having it be
	scalable.
	
	MORE INFORMATION
	================
	
	The first step in copying the metafile to the clipboard is to allocate global
	memory for the METAFILEPICT structure. After copying this structure to the
	clipboard, the memory that you allocated for the METAFILEPICT structure is owned
	by the clipboard and you should not lock it or modify it.
	
	The METAFILEPICT structure is defined as follows:
	
	     typedef struct tagMETAFILEPICT
	     {
	
	     int     mm;
	     int     xExt;
	     int     yExt;
	     HMETAFILE hMF;
	
	     } METAFILEPICT;
	
	The mm field in the METAFILEPICT structure specifies the mapping mode in which
	the metafile is to be played. In order for your metafile to be scalable, you
	should specify MM_ANISOTROPIC as the mapping mode for the mm field. The members
	xExt and yExt specify the width and height of the rectangle within which the
	metafile is played.
	
	When the mapping mode is MM_ANISOTROPIC, the values for xExt and yExt should be
	in MM_HIMETRIC units. Of course you can always calculate the values yourself,
	but it's very easy to use the functions LPtoDP and DPtoLP to let Windows do the
	calculation for you. The LPtoDP function converts logical points to device
	points; DPtoLP converts device points to logical points.
	
	You need a handle to a device context (hDC) compatible with the display in order
	to do the conversion. There are many ways to obtain a display hDC. The functions
	GetDC(NULL), CreateCompatibleDC(NULL), CreateDC("DISPLAY", NULL, NULL, NULL),
	GetDC(hWnd), and GetWindowDC(hWnd) all return a suitable display hDC.
	
	If you call any of the above functions to obtain an hDC, unless you explicitly
	change the mapping mode, it is in the default mapping mode, MM_TEXT. In the
	MM_TEXT mapping mode, one logical unit equals one device unit.
	
	If you used the MM_TEXT mapping mode to create your metafile, then it is quite
	likely that you will also know the width and height of your metafile in device
	units (pixels). In this case, to calculate values for xExt and yExt, just
	temporarily set the mapping mode to MM_HIMETRIC and call the function DPtoLP to
	convert the device units to MM_HIMETRIC units. For example:
	
	     pt.x = nWidth;
	     pt.y = nHeight;
	
	     SaveDC(hDC);
	     SetMapMode(hDC, MM_HIMETRIC);
	     DPtoLP(hDC, &pt, 1);
	     RestoreDC(hDC, -1);
	
	Because the y-axis is inverted in the MM_HIMETRIC mapping mode, DPtoLP returns
	negative values for the y coordinate, and therefore you should specify yExt as a
	positive value. One way to do this is to use the C run- time library function
	abs to get the absolute value of pt.y.
	
	If the mapping mode in which you created your metafile is something other than
	MM_TEXT, then you probably will know the width and height of the metafile in
	logical units. In this case, to calculate values for xExt and yExt you must
	first convert the width and height from logical units to device units before
	converting to MM_HIMETRIC units. To do this, the hDC that you use for the
	calculation must be in the same mapping mode that was used to create the
	metafile. If you created the metafile in the MM_ANISOTROPIC or MM_ISOTROPIC
	mapping mode, you must also set the window and viewport extents appropriately so
	that the scaling factor is correct in the call to LPtoDP.
	
	     pt.x = nWidth;
	     pt.y = nHeight;
	
	     // assumes the hDC is in the appropriate mapping mode
	
	     LPtoDP(hDC, &pt, 1);
	
	     SaveDC(hDC);
	     SetMapMode(hDC, MM_HIMETRIC);
	     DPtoLP(hDC, &pt, 1);
	     RestoreDC(hDC, -1);
	
	The hMF field in the METAFILEPICT structure should contain the handle to a
	Windows memory metafile. Because the memory allocated for any object that is
	placed on the clipboard is owned by the clipboard, this handle should be a copy
	of the metafile that you created. To fill in the hMF member, call the function
	CopyMetaFile.
	
	The following function demonstrates the above approach of filling out the
	METAFILEPICT structure, and then copies the metafile to the clipboard:
	
	     //*************************************************************
	     // 
	     //  CreateClipboardMetaFile()
	     // 
	     //  Purpose:  Allocates and fills out a METAFILEPICT struct and
	     //                  copies the metafile to the clipboard.
	     // 
	     // 
	     //  Parameters:
	     // 
	     //  HWND    hWnd     For OpenClipboard().
	     //  HDC     hDC      For LPtoDP & DPtoLP. The mapping mode
	     //                   must match the logical units that
	     //                   nWidth and nHeight are specified in.
	     //  int     nWidth   Width of the metafile in logical units.
	     //  int     nHeight  Height of the metafile in logical units.
	     // 
	     // 
	     //  Return: (void)
	     // 
	     //*************************************************************
	
	     void CreateClipboardMetaFile(HWND hWnd,
	                               HDC hDC,
	                               HANDLE hMF,
	                               int nWidth,
	                               int nHeight)
	
	     {
	
	     HANDLE         hMem;
	     LPMETAFILEPICT lpMFP;
	     POINT          pt;
	
	     // Allocate memory for the METAFILEPICT struct
	     hMem = GlobalAlloc(GMEM_MOVEABLE | GMEM_SHARE, sizeof(METAFILEPICT));
	     lpMFP = (LPMETAFILEPICT)GlobalLock(hMem);
	
	     // MM_ANISOTROPIC ensures that it is scalable on playback
	     lpMFP->mm = MM_ANISOTROPIC;
	
	     // Convert the object width and height into MM_HIMETRIC units.
	     pt.x = nWidth;
	     pt.y = nHeight;
	
	     // First get the width and height into device units.
	     // This assumes that the hDC is in the mapping mode that
	     // matches the logical units that nWidth and nHeight are
	     // specified in. If nWidth and nHeight are already in device
	     // units, then this step isn't necessary.
	     LPtoDP(hDC, &pt, 1);
	
	     // Temporarily set the mapping mode to MM_HIMETRIC
	     SaveDC(hDC);
	     SetMapMode(hDC, MM_HIMETRIC);
	     DPtoLP(hDC, &pt, 1);
	     RestoreDC(hDC, -1);
	
	     // Because the y-axis is inverted in the MM_HIMETRIC mapping mode,
	     // DPtoLP returns negative values for the y coordinate.
	     // Because of this, we should specify yExt as a positive value.
	     // Also guard against the obscure case that the logical units
	     // that nWidth was specified in would cause pt.x to be negative.
	     lpMFP->xExt = abs(pt.x);
	     lpMFP->yExt = abs(pt.y);
	
	     // Fill in the handle to the metafile.
	     // Make a copy of the metafile because the memory block allocated
	     // for it will be owned by the clipboard. The memory allocated for the
	     // METAFILEPICT struct will also be owned by the clipboard.
	     lpMFP->hMF = CopyMetaFile(hMF, NULL);
	     GlobalUnlock(hMem);
	
	     // Copy the metafile to the clipboard.
	     OpenClipboard(hWnd);
	     EmptyClipboard();
	     SetClipboardData(CF_METAFILEPICT, hMem);
	     CloseClipboard();
	
	  }
	
	Additional query words: 3.10 metafile MM_HIMETRIC METAFILEPICT
	
	======================================================================
	Keywords          : kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	Issue type        : kbinfo
	
	=============================================================================
	
