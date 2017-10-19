---
layout: page
title: "Q147952: Two-Way Communication Using IDispatch in MFC"
permalink: /kb/147/Q147952/
---

## Q147952: Two-Way Communication Using IDispatch in MFC

	Article: Q147952
	Product(s): Microsoft C Compiler
	Version(s): 2.0,2.1,2.2,4.0,4.1,6.0
	Operating System(s): 
	Keyword(s): kbcode kbfile kbSample kbActiveX kbAutomation kbCOMt kbMFC kbVC200 kbVC400 kbVC410 kbGr
	Last Modified: 26-JUN-2002
	
	2.00 2.10 2.20 4.00 4.10
	
	WINDOWS NT
	
	kbfile
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, versions 2.0, 2.1, 2.2, 4.0, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, version 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	- Microsoft Visual C++.NET (2002) 
	-------------------------------------------------------------------------------
	
	NOTE: Microsoft Visual C++ .NET (2002) supports both the managed code model that is provided by the Microsoft .NET Framework and the unmanaged native Microsoft Windows code model. The information in this article applies to unmanaged Visual C++ code only.
	
	SUMMARY
	=======
	
	Although there may be several ways to implement communication between two
	executables, this sample illustrates a simple way a server and a client
	application can communicate using IDispatch interfaces. This may not be the best
	method, but it is straight forward to implement. Using dual interfaces may
	provide a better solution, however.
	
	The sample consists of two executables. One, GENERAT.EXE, is a local server, and
	the other, GENCLNT.EXE, is a client of the server. Both client and server are
	automation servers in that they both support automation interfaces. The client
	application starts the server via CreateDispatch and thus obtains the servers
	IDispatch interface. The client then passes its IDispatch interface to the
	server using one of the server's interface methods. At this point, two-way
	communication between the client and the server is possible.
	
	Be sure to run the server stand-alone once before running it from the client.
	This will register the server and enable the client to start it dynamically.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Visual C++ 6.0
	:
	
	  DownloadDownload Dispcom.exe now
	  (http://download.microsoft.com/download/vc40pro/Sample9/1/NT4/EN-US/Dispcom.exe)
	
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
	
	  DownloadDownload Dispcomvcnet.exe now
	  (http://download.microsoft.com/download//VisualStudioNET/Sample/1.2/WIN98MeXP/EN-US/Dispcomvcnet.exe)
	
	Release Date: June 24, 2002
	
	For additional information about how to download Microsoft Support files, click
	the following article number to view the article in the Microsoft Knowledge
	Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft scanned this file for viruses. Microsoft used the most current
	virus-detection software that was available on the date that the file was
	posted. The file is stored on secure servers that prevent any unauthorized
	changes to the file.
	
	
	NOTE: Use the -d option when running Dispcom.exe to decompress the file and
	recreate the proper directory structure.
	
	MORE INFORMATION
	================
	
	The GENERAT.EXE local server generates and displays random colors. It can either
	generate one color each time as it is requested, or it can continuously generate
	colors in response to a WM_TIMER message. The GENERAT.EXE server can run either
	stand-alone or it can be controlled by a client (in this case the GENCLNT.EXE
	application). In either case, the server will be visible, and the server's user
	interface will be active. This means the client and the server will need to
	communicate with each other to keep the user interface of the client and server
	synchronized and to process requests from the other.
	
	Below is a list of relavent methods from GENERAT.EXE and GENCLNT.EXE and a
	description of each method.
	
	GENERAT.EXE methods:
	
	  BOOL SetAdviseDI(LPDISPATCH DispIToAdvise);
	
	  The client starts the server via CreateDispatch and thus obtains the
	  IDispatch pointer of the server. Once the client has the server's IDispatch
	  pointer, it can call this method in the server sending its own IDispatch
	  pointer. At this point, two-way communication is possible between the client
	  and the server.
	
	  void ReleaseAdviseDI();
	
	  Called by the client to tell the server to release the IDispatch pointer of
	  the client.
	
	  BOOL AnimateColors();
	
	  Called by the client to request that the server generate colors in response
	  to WM_TIMER messages.
	
	  void GenNewColor();
	
	  Called by the client to request that the server generate a single new color.
	
	GENCLNT.EXE methods:
	
	  void SetAnimateUI();
	
	  Called by the server when Animate Colors is chosen via the server user
	  interface. This keeps the Animate Colors menu choice of the client
	  synchronized with that of the server.
	
	  void NotifyColorChange(const VARIANT FAR& refColor);
	
	  Called by the server when a color is generated. Called regardless of whether
	  the color was requested by the client or the server.
	
	REFERENCES
	==========
	
	
	
	Additional query words: 1.50 1.51 1.52 1.52b 2.00 2.10 2.20 2.50 2.51 2.52 2.52b 3.00 3.10 3.20 4.00 4.10 softlib Dispcom Dispcomvcnet
	
	======================================================================
	Keywords          : kbcode kbfile kbSample kbActiveX kbAutomation kbCOMt kbMFC kbVC200 kbVC400 kbVC410 kbGrpDSMFCATL 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbVC220 kbVC410 kbVC600 kbVC200 kbVC210 kbVC32bitSearch kbVCNET
	Version           : :2.0,2.1,2.2,4.0,4.1,6.0
	
	=============================================================================
	
