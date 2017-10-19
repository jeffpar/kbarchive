---
layout: page
title: "Q151856: CMEMDC.EXE Memory Bitmap for Scrolling in CScrollV"
permalink: /kb/151/Q151856/
---

## Q151856: CMEMDC.EXE Memory Bitmap for Scrolling in CScrollV

	Article: Q151856
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,4.1
	Operating System(s): 
	Keyword(s): kbfile kbDocView kbMFC kbVC kbGrpDSMFCATL
	Last Modified: 06-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Scrolling a complex image in a CScrollView can be very slow and jerky since
	OnDraw() is called for every WM_VSCROLL and WM_HSCROLL message. While only part
	of the window is invalidated and redrawn, the whole painting code gets called
	every time.
	
	This CMemDC sample demonstrates drawing to a memory bitmap instead of the screen.
	The complex, time-consuming drawing code only needs to be performed when the
	image changes and in OnInitialUpdate(). During OnPaint(), the only work that
	needs to be done is a simple BitBlt from the memory bitmap to the screen.
	
	The sample code draws a complex pattern on its client area. A menu option toggle
	allows the user to see the speed difference between using and not using the
	offscreen bitmap. Printing and print preview are supported through the normal
	printing code, and do not use the memory bitmap.
	
	While CMemDC is a 32-bit sample, the same technique can be used in 16-bit MFC
	applications.
	The following files are available for download from the Microsoft Download
	Center:
	
	Cmemdc.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	NOTE: Use the -d option when running CMEMDC.EXE to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	This sample is a MFC implementation of the Windows SDK sample, MemDC. For more
	information, please see the following article in the Microsoft Knowledge Base:
	
	  Q130805 SAMPLE: Drawing to a Memory Bitmap for Faster Performance
	
	Additional query words: 4.00 4.10
	
	======================================================================
	Keywords          : kbfile kbDocView kbMFC kbVC kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : winnt:4.0,4.1
	
	=============================================================================
	
