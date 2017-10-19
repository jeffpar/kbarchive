---
layout: page
title: "Q181255: SAMPLE: How to Implement Enumerated Properties in ATL"
permalink: /kb/181/Q181255/
---

## Q181255: SAMPLE: How to Implement Enumerated Properties in ATL

	Article: Q181255
	Product(s): Microsoft C Compiler
	Version(s): 2.1,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbActiveX kbATL210 kbCOMt kbCtrl kbServer kbVC500 kbVC600 kbATL3
	Last Modified: 26-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Active Template Library (ATL), versions 2.1, 3.0, used with:
	   - Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	   - Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	   - Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Atlenum sample shows how to implement enumerated properties in ATL.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Atlenum.exe now
	  (http://download.microsoft.com/download/vc60pro/sample6/1/WIN98/EN-US/Atlenum.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Atlenumvcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.10/win98mexp/en-us/Atlenumvcnet.exe)
	
	Release Date: June 25, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	Enumerated properties have a predefined set of possible values that you can
	assign to them. For example, when you define an enumerated property for the days
	of the week, the only possible values are Monday through Sunday. You can control
	this by setting up an enumerated property in the .idl file:
	
	     typedef enum tagDAYSOFWEEK
	     {
	        Monday   = 1,
	        Tuesday   = 2,
	        Wednesday   = 3,
	        Thursday   = 4,
	        Friday   = 5,
	        Saturday   = 6,
	        Sunday   = 7
	     } DAYSOFWEEK;
	
	Visual Basic 5.0 has a feature called Code Completion. As you enter code, the
	editor displays a list of context-sensitive items that you can use in your code.
	In the case of an enumerated property, typing an "=" after the property causes
	Visual Basic to display a list of possible values. For example, a list of
	possible values to complete the following statement appears when you type:
	
	  mycontrol.DayOfWeek =
	
	Enumerated properties also allow you to browse the possible values for a property
	in a property browser. Look at the BorderStyle property for any control in the
	Visual Basic property browser. Possible values are displayed in a list box. By
	default, Visual Basic creates a list in the form of "1 [ASCII 150] Monday," "2
	[ASCII 150] Tuesday," and so on. If you want to the change the display string,
	you need to override some methods in the IPerPropertyBrowsing interface. The
	Atlenum sample shows how to override the GetDisplayString(),
	GetPredefinedStrings(), and GetPredefinedValue() methods. The sample also
	implements a property page for modifying the enumerated property.
	
	For additional information on how to implement enumerated properties in the
	Microsoft Foundation Classes (MFC), please see the following article in the
	Microsoft Knowledge Base:
	
	  Q141488 SAMPLE: Using Enumerated Properties in an OLE Control
	
	If you are converting MFC projects to ATL, you can leave out the tag after the
	enum keyword in an .odl file, as in the following example:
	
	  typedef enum
	  {
	
	  ...
	
	  } DAYSOFWEEK;
	
	In an .idl file, you need to have a tag after the enum keyword to ensure that you
	have the right type information:
	
	     typedef enum tagDAYSOFWEEK
	     {
	        ...
	     } DAYSOFWEEK;
	
	Additional query words: Atlenum Atlenumvcnet
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbActiveX kbATL210 kbCOMt kbCtrl kbServer kbVC500 kbVC600 kbATL300 MSGRAPH kbCodeSam kbGrpDSMFCATL kbCollectionClass 
	Technology        : kbVCsearch kbAudDeveloper kbATLsearch
	Version           : :2.1,3.0,5.0,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
