---
layout: page
title: "Q40959: FastBlt.exe Implements Smooth Movement of a Bitmap"
permalink: kb/040/Q40959/
---

## Q40959: FastBlt.exe Implements Smooth Movement of a Bitmap

	Article: Q40959
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1,95; winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): kbfile kbsample kbOSWinNT350 kbOSWinNT351 kbSDKWin32 kbOSWin310 kbOSWin95 kbDSupport kb
	Last Modified: 11-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	- Microsoft Win32 Application Programming Interface (API), used with:
	   - Microsoft Windows NT Server versions 3.5, 3.51 
	   - Microsoft Windows NT Workstation versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	FastBlt.exe is a sample application that demonstrates how to implement the
	smooth movement of a bitmap around the screen. Basically, it sets up a pair of
	BitBlt() calls: one that erases the image and another that redisplays the image.
	The necessary ROP codes for BitBlt() that should be used are SRCCOPY and
	SRCINVERT.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	FastBlt.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbOSWinNT350 kbOSWinNT351 kbSDKWin32 kbOSWin310 kbOSWin95 kbDSupport kbOSWin300 
	Technology        : kbAudDeveloper kbSDKSearch kbWin32sSearch kbWin32API kbWinSDKSearch
	Version           : WINDOWS:3.1,95; winnt:3.5,3.51
	Issue type        : kbinfo
	
	=============================================================================
	
