---
layout: page
title: "Q218972: SAMPLE: How to Load and Display Graphics Files with LOADPIC.EXE"
permalink: kb/218/Q218972/
---

## Q218972: SAMPLE: How to Load and Display Graphics Files with LOADPIC.EXE

	Article: Q218972
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbole kbActiveX kbCOMt kbGDI kbMFC kbVC600 kbGrpDSMFCATL
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	- Microsoft Win32 Application Programming Interface (API) 
	- Microsoft Windows XP Home Edition 
	- Microsoft Windows XP Professional 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Loadpic.exe is a sample that shows how to load graphics files like .gif, .jpg,
	.bmp, .ico, .emf, .wmf, and displays them. To do this, use functionality built
	into OleLoadPicture() which converts these different formats to an IPicture
	interface. We can then use IPicture::Render() to display them.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Loadpic.exe now
	  (http://download.microsoft.com/download/vc60pro/samp37/1/WIN98/EN-US/Loadpic.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Loadpicvcnet.exe now
	  (http://download.microsoft.com/download//VisualStudioNET/sample/1.14/WIN98MeXP/EN-US/Loadpicvcnet.exe)
	
	Release Date: June 25, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Aside from IPicture::Render, you can also display the picture using other
	functions. You can use BitBlt() for bitmaps, or PlayMetaFile() for metafiles.
	You can also extract the handle to the picture by calling
	IPicture::get_Handle(). You can cast the handle to the appropriate type; that
	is, for example HBITMAP, HICON, and HMETAFILE. To determine what type of handle
	to cast it to, call IPicture::get_Type().
	
	Additional query words: bitmap bitmaps jpeg gif89 icons icon enhanced metafile meta file loadpic loadpicvcnet
	
	======================================================================
	Keywords          : kbfile kbole kbActiveX kbCOMt kbGDI kbMFC kbVC600 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbWinXPHome kbWinXPPro kbAudDeveloper kbWin32sSearch kbWin32API kbVC600 kbVC32bitSearch kbWinXPProSearch kbWinXPHomeSearch kbWinXPSearch kbVCNET
	Version           : :6.0
	Issue type        : kbhowto
	
	=============================================================================
	
