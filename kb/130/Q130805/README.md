---
layout: page
title: "Q130805: Drawing to a Memory Bitmap for Faster Performance"
permalink: kb/130/Q130805/
---

## Q130805: Drawing to a Memory Bitmap for Faster Performance

	Article: Q130805
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 1.25,2000,3.1,3.5
	Operating System(s): 
	Keyword(s): kbfile kbgraphic kbOSWinNT350 kbOSWin2000 kbSDKWin32 kbOSWin95
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows 95 
	   - Microsoft Windows NT Server version 3.5 
	   - Microsoft Windows NT Workstation version 3.5 
	   - Microsoft Win32s version 1.25 
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application whose client area is a complex image can realize a performance
	benefit from drawing to a memory bitmap. The complex, time consuming drawing
	code need only be performed once - to initialize the offscreen bitmap. During
	the handling of the WM_PAINT message, the only work that needs to be done is a
	simple BitBlt from the memory bitmap to the screen.
	
	Sample code demonstrating this technique is available in the Microsoft Dowload
	Center. The MemDC sample code draws a complex pattern on its client area. A menu
	option toggle allows the user to see the speed difference between using and not
	using the offscreen bitmap.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Memdc.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: device context memory DC speed fast buffer kbfile kbgraphic
	
	======================================================================
	Keywords          : kbfile kbgraphic kbOSWinNT350 kbOSWin2000 kbSDKWin32 kbOSWin95 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : :1.25,2000,3.1,3.5
	Issue type        : kbinfo
	
	=============================================================================
	
