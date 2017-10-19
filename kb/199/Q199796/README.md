---
layout: page
title: "Q199796: Mfcfont.exe Persists MFC ActiveX Control Stock Font Property"
permalink: /kb/199/Q199796/
---

## Q199796: Mfcfont.exe Persists MFC ActiveX Control Stock Font Property

	Article: Q199796
	Product(s): Microsoft C Compiler
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbfile kbSample kbnokeyword kbActiveX kbCOMt kbCtrlCreate kbInprocSvr kbMFC kbVC400 kbV
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Mfcfont.exe and Mfcfontvcnet.exe are samples that demonstrate how to persist the
	stock font property of a Microsoft Foundation Classes (MFC) ActiveX control.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Mfcfont.exe now
	  (http://download.microsoft.com/download/vc60pro/Sample5/1/NT4/EN-US/Mfcfont.exe)
	
	Visual C++ .NET:
	
	  DownloadDownload Mfcfontvcnet.exe now
	  (http://download.microsoft.com/download/VisualStudioNET/sample/1.0/WIN98MeXP/EN-US/Mfcfontvcnet.exe)
	
	Release Date: June 24, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	By default, the stock font property for an MFC ActiveX control is persisted as a
	binary COM object (IFontDisp). Many Web authoring tools expect to deal with
	properties as text name/value pairs using the IPersistPropertyBag interface.
	
	These samples demonstrate how to persist the stock font as a set of text
	properties to enable the control to be used by Web authoring tools such as
	FrontPage and the ActiveX Control Pad.
	
	A sample HTML file is provided that demonstrates how to access the font
	properties from a Web page.
	
	REFERENCES
	==========
	
	For more information about the Microsoft Foundation Classes and implementing
	ActiveX controls, see the Microsoft Visual C++ online documentation.
	
	For more information about using ActiveX controls on Web pages, see the following
	Microsoft Developer Network (MSDN) Web site:
	
	  MSDN Online Web Workshop
	  http://www.msdn.microsoft.com/workshop/
	  (http://www.msdn.microsoft.com/workshop/)
	
	Additional query words: FrontPage ActiveX Control Pad Mfcfont Mfcfontvcnet
	
	======================================================================
	Keywords          : kbfile kbSample kbnokeyword kbActiveX kbCOMt kbCtrlCreate kbInprocSvr kbMFC kbVC400 kbVC500 kbVC600 kbVisID kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :6.0
	
	=============================================================================
	
