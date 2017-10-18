---
layout: page
title: "Q92436: SAMPLE: Demonstration of Using _fmalloc"
permalink: kb/092/Q92436/
---

## Q92436: SAMPLE: Demonstration of Using _fmalloc

	Article: Q92436
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Smart Alloc (SMART) allows programmers to experiment using the _fmalloc()
	function in the Microsoft Windows operating system. It is a companion program
	for the technical article in the MSDN "Allocating Memory the Old Fashioned Way:
	malloc and Windows Applications."
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Smart.exe
	  (http://download.microsoft.com/download/platformsdk/demo98/3.1/W31/EN-US/SMART.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	With Smart Alloc and Heap Walker, programmers can interactively explore the
	behavior of _fmalloc(), _ffree(), GlobalAlloc(), GlobalFree(), and _heapmin().
	They can allocate memory either using GlobalAlloc() or _fmalloc(), or from a
	DLL. They can determine when and how memory is allocated easily, without
	recompiling.
	
	The source code for Smart Alloc also demonstrates some interesting features.
	Smart Alloc is a multiple-instance, large-model application when compiled with
	Microsoft C/C++ version 7.0. Another interesting feature of Smart Alloc is that
	it includes a dynamic link library (DLL) that intercepts all calls SMART.EXE
	makes to GlobalAlloc(), GlobalReAlloc(), and GlobalFree().
	
	Smart Alloc was built with Microsoft C/C++ version 7.0 and tested under Microsoft
	Windows version 3.1.
	
	Additional query words: malloc free large model GMEM_SHARE softlib SMART.EXE GMEM_DDESHARE GlobalAllocPtr GlobalFreePtr
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
