---
layout: page
title: "Q195028: Mfccdc Demonstrates Viewport and Mapmode Use in MFC"
permalink: /kb/195/Q195028/
---

## Q195028: Mfccdc Demonstrates Viewport and Mapmode Use in MFC

{% raw %}

	Article: Q195028
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.1,4.2,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbGDI kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), used with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the .NET Framework and the unmanaged native Windows code model. Part or all of the information in this article applies to managed Visual C++ code and may be applied only by using the .NET Framework.
	
	SUMMARY
	=======
	
	The Mfccdc sample demonstrates how to set the Mapmode, Viewport, and Window
	parameters, and draws a rectangle based on given logical coordinates; then, the
	sample calculates the resulting device units.
	
	The sample shows how to use the following functions:
	
	  SetMapMode()
	  SetWindowExt()
	  SetViewportExt()
	  SetWindowOrg()
	  SetViewportOrg()
	  LPtoDP()
	  NormalizeRect()
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Mfccdc.exe now
	  (http://download.microsoft.com/download/vc60pro/Sample7/1/NT4/EN-US/Mfccdc.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	The following file is available for download from the Microsoft Download Center:
	
	  DownloadDownload Mfccdcvcnet.exe now
	  (http://download.microsoft.com/download/VisualStudioNET/Sample/1.6/WIN98MeXP/EN-US/Mfccdcvcnet.exe)
	
	Release Date: June 25, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	Steps to Run the Sample
	-----------------------
	
	Once the sample is running, parameters to the above-mentioned functions can be
	changed in a dialog box, which effectively updates the rectangle and the
	calculated device units.
	
	REFERENCES
	==========
	
	VC Online help - "CDC class members" and "Converting from Device Coordinates to
	Logical Coordinates."
	
	Charles Petzold's book, "Programming Windows," ISBN 1-55615-264-7.
	
	Additional query words: kbDSupport mapmode viewport MM_ISOTROPIC MM_ANISOTROPIC MM_LOENGLISH MM_HIENGLISH MM_TWIPS MM_TEXT Mfccdc Mfccdcvcnet
	
	======================================================================
	Keywords          : kbfile kbGDI kbMFC kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :4.0,4.1,4.2,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
