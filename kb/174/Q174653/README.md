---
layout: page
title: "Q174653: How to Call CoGetClassObjectFromURL() in an MFC App"
permalink: kb/174/Q174653/
---

## Q174653: How to Call CoGetClassObjectFromURL() in an MFC App

	Article: Q174653
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.01,5.0,6.0
	Operating System(s): 
	Keyword(s): kbfile kbVC500 kbVC600
	Last Modified: 03-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Internet Explorer (Programming) versions 4.0, 4.01 
	- Microsoft Windows Internet Services (WinInet) 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This Urlobj.exe sample demonstrates how to call the CoGetClassObjectFromURL()
	function to download, register, and instantiate an object. The sample implements
	two interfaces necessary to allow the CoGetClassObjectFromURL() function to work
	properly: IBindStatusCallback and IWindowForBindingUI.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0:
	
	  DownloadDownload Urlobj.exe now
	  (http://download.microsoft.com/download/vc50pro/File/1/NT4/EN-US/Urlobj.exe)
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	Visual C++ .NET:
	
	  DownloadDownload Urlobjvcnet.exe now
	  (http://download.microsoft.com/download/visualstudionet/sample/1.26/win98mexp/en-us/Urlobjvcnet.exe)
	
	Release Date: 2-Jul-2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	The CoGetClassObjectFromURL() function returns a class factory object for a given
	CLSID. If the desired object is installed on the system, it is instantiated.
	Otherwise, the necessary code is downloaded and installed from the specified
	URL. The sample uses a CFormView to get the value of the CLSID, the URL pointing
	to the code for the ActiveX object, the major and minor version, and the size of
	the object for displaying (it assumes that the control will display itself in
	some manner).
	
	The bulk of the relevant code is found in the OnButton1() handler, which starts
	the download process, and the OnStopBind() handler, which handles creating the
	object after it has finished downloading.
	
	The IBindStatusCallback and IWindowForBindingUI interfaces are implemented in the
	file Download.cpp by using a CCmdTarget derived class and the MFC interface map
	macros.
	
	After the CoGetClassObjectFromURL() has completed the asynchronous download, the
	OnStopBind() handler is called to display the control. In this handler the
	sample demonstrates instantiating the actual object by using the
	CWnd::CreateControl() function. This is assuming that the object is an OLE
	control. The handler also contains some code that has been commented out that
	demonstrates calling IClassFactory::CreateInstance() in the case that the object
	is not an OLE control.
	
	To maintain simplicity, the sample does not implement much error checking or
	verification of user input.
	
	Additional query words: softlib
	
	======================================================================
	Keywords          : kbfile kbVC500 kbVC600 
	Technology        : kbVCsearch kbIEsearch kbAudDeveloper kbSDKIESearch kbSDKIE400 kbSDKIE401 kbVC500 kbVC600 kbVC32bitSearch kbVC500Search
	Version           : :4.0,4.01,5.0,6.0
	
	=============================================================================
	
