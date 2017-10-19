---
layout: page
title: "Q82903: Code Displays 256-Color DIB on Standard VGA"
permalink: /kb/082/Q82903/
---

## Q82903: Code Displays 256-Color DIB on Standard VGA

	Article: Q82903
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbDSupport kbSDKWin16
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows 3.1 provides the DisplayDib function to display a 256-color bitmap image
	on a standard (16 color) VGA display. DisplayDib reduces the display resolution
	to 320x200 or 320x240 and centers the bitmap on the screen, clipping the image
	as necessary.
	
	DisplayDib was first provided by the Multimedia Extensions to Windows version
	1.0. It has been tested with, and is supported by, Window 3.1.
	
	DISPDIB is a file in the Microsoft Download Center that contains a dynamic-link
	library (DLL) with the executable code for the DisplayDib function. DISPDIB also
	includes a header file and an import library file.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Dispdib.Exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Additional query words: softlib DISPDIB.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbDSupport kbSDKWin16 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	
