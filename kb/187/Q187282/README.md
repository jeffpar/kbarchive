---
layout: page
title: "Q187282: INFO: List of Visual Basic Run-Time Files Installed by Product"
permalink: /kb/187/Q187282/
---

## Q187282: INFO: List of Visual Basic Run-Time Files Installed by Product

{% raw %}

	Article: Q187282
	Product(s): Microsoft Visual Basic for Windows
	Version(s): WINDOWS:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbList kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbVS600SP1
	Last Modified: 11-JAN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Learning Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Professional Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Enterprise Edition for Windows, versions 5.0, 6.0 
	- Microsoft Visual Basic Standard Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Professional Edition, 32-bit, for Windows, version 4.0 
	- Microsoft Visual Basic Enterprise Edition, 32-bit, for Windows, version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the Visual Basic run-time files installed by each version of
	Visual Basic, Service Packs, and other updates. This information is helpful
	because problems can result when you distribute mismatched versions of these
	files with your Visual Basic application.
	
	NOTE: The run-time files listed in this article are the core dependencies
	required by all 32-bit Visual Basic applications. Your application may require
	additional files based on the components you have included.
	
	MORE INFORMATION
	================
	
	Following are the file names and version numbers listed by product. If a file is
	not updated by a Service Pack or other update, three dashes (---) appear in
	place of a version number:
	
	Visual Basic 4.0
	----------------
	
	  VB40032.DLL     4.00.2422
	  OLEPRO32.DLL    4.0.5208
	
	Visual Basic 4.0a
	-----------------
	
	  VB40032.DLL     4.00.2924
	  OLEPRO32.DLL    4.0.5277
	
	Visual Basic 5.0
	----------------
	
	  MSVBVM50.DLL    5.00.3724
	  OLEAUT32.DLL    2.20.4054
	  OLEPRO32.DLL    5.0.4055
	  STDOLE2.TLB     2.20.4054
	  ASYCFILT.DLL    2.20.4056
	  COMCAT.DLL      4.71
	
	Visual Basic 5.0, Service Pack 1
	--------------------------------
	
	  MSVBVM50.DLL    ---
	  OLEAUT32.DLL    ---
	  OLEPRO32.DLL    ---
	  STDOLE2.TLB     ---
	  ASYCFILT.DLL    ---
	  COMCAT.DLL      ---
	
	Visual Basic 5.0, Service Pack 2
	--------------------------------
	
	  MSVBVM50.DLL    05.00.4319 (SP2)
	  OLEAUT32.DLL    2.20.4118
	  OLEPRO32.DLL    5.0.4118
	  STDOLE2.TLB     2.20.4118
	  ASYCFILT.DLL    2.20.4118
	  COMCAT.DLL      ---
	
	NOTE: Windows 98 includes a copy of MSVBVM50.DLL version 05.00.4319, but it has a
	different modified date and file size than the MSVBVM50.DLL file that is
	included in Visual Basic 5.0, Service Pack 2, MSVBVM50.EXE, and Visual Studio
	97, Service Pack 3. For additional information, please see the following article
	in the Microsoft Knowledge Base:
	
	  Q187593 INFO: MSVBVM50.DLL Is Included in Windows 98
	
	Msvbvm50.exe
	------------
	
	  MSVBVM50.DLL    05.00.4319 (SP2)
	  OLEAUT32.DLL    2.20.4118
	  OLEPRO32.DLL    5.0.4118
	  STDOLE2.TLB     2.20.4118
	  ASYCFILT.DLL    2.20.4118
	  COMCAT.DLL      4.71
	
	Visual Studio 97, Service Pack 3
	--------------------------------
	
	  MSVBVM50.DLL    05.00.4319 (SP2)
	  OLEAUT32.DLL    2.20.4118
	  OLEPRO32.DLL    5.0.4118
	  STDOLE2.TLB     2.20.4118
	  ASYCFILT.DLL    2.20.4118
	  COMCAT.DLL      ---
	
	Visual Basic 6.0 (Pre-release)
	------------------------------
	
	  MSVBVM50.DLL   6.00.7322
	
	A pre-release version of Visual Studio 6.0 installed MSVBVM50.DLL version
	6.00.7322. You cannot use or redistribute this file. If you have MSVBVM50.DLL
	6.00.7322 on your computer, please delete and replace it.
	
	After deleting MSVBVM50.DLL, you can reinstall it on Windows 95 and NT 4.0 (up to
	Service Pack 3) by running MSVBVM50.EXE. (For more information, please see the
	"References" section later in this article.)
	
	If you have NT 4.0 Service Pack 4, you can reinstall MSVBVM50.DLL (after you
	delete the pre-release version of the file) by reinstalling Service Pack 4.
	
	There is a version of MSVBVM50.DLL version 05.00.4319 that is optimized
	specifically for Windows 98. If you are running Windows 98, you can extract
	MSVBVM50.DLL from the Win98_35.cab file on the Windows 98 CD. For additional
	information, please click on the article numbers below to view them in the
	Microsoft Knowledge Base:
	
	  Q187593 INFO: MSVBVM50.DLL Is Included in Windows 98
	
	  Q129605 HOWTO: Extract Original Compressed Windows Files
	
	
	Visual Basic/Visual Studio 6.0
	------------------------------
	
	  MSVBVM60.DLL    6.00.8176
	  OLEAUT32.DLL    2.30.4261
	  OLEPRO32.DLL    5.0.4261
	  STDOLE2.TLB     2.30.4261
	  ASYCFILT.DLL    2.30.4261
	  COMCAT.DLL      4.71*
	
	* On computers running Windows 9x, the Internet Explorer 4.01 Service
	Pack 1 Setup installs COMCAT.DLL version 5.0. Internet Explorer 4.01 
	Service Pack 1 is installed in the first segment of the Visual Studio 
	6.0 setup program.
	
	NT 4.0 Service Pack 4
	---------------------
	
	  MSVBVM50.DLL    05.02.8244 (SP2)
	  MSVBVM60.DLL    6.00.8244
	  OLEAUT32.DLL    2.30.4265
	  OLEPRO32.DLL    5.0.4265
	  STDOLE2.TLB     2.30.4265
	  ASYCFILT.DLL    2.30.4265
	  COMCAT.DLL      4.71
	
	The version of Msvbvm50.dll that ships with Service Pack 4 for Windows NT 4.0 is essentially the same as the version that shipped with Visual Basic 5.0 Service Pack 2 and Service Pack 3. The only difference is a change that was made to avoid a problem due to the new heap allocator in Windows NT 4.0, Service Pack 4. The version number is higher so that it will not
	be overwritten.
	
	Visual Studio 6.0 Service Pack 1
	--------------------------------
	
	  MSVBVM60.DLL    6.00.8268
	  OLEAUT32.DLL    2.30.4265
	  OLEPRO32.DLL    5.0.4265
	  STDOLE2.TLB     2.30.4265
	  ASYCFILT.DLL    2.30.4265
	  COMCAT.DLL      4.71*
	
	* Service Pack 1 contains COMCAT.DLL version 4.71, but Windows 9x 
	computers that already have Visual Studio 6.0 installed will have 
	COMCAT.DLL version 5.0 because it is installed with Internet Explorer 
	4.01 Service Pack 1 during the Visual Studio 6.0 Setup.
	
	Visual Studio 6.0 Service Pack 2, Vbrun60.exe
	---------------------------------------------
	
	  MSVBVM60.DLL    6.00.8268
	  OLEAUT32.DLL    2.40.4268
	  OLEPRO32.DLL    5.0.4268
	  STDOLE2.TLB     2.40.4268
	  ASYCFILT.DLL    2.40.4268
	  COMCAT.DLL      4.71*
	
	* Service Pack 1 contains COMCAT.DLL version 4.71, but Windows 9x 
	computers that already have Visual Studio 6.0 installed will have 
	COMCAT.DLL version 5.0 because it is installed with Internet Explorer 
	4.01 Service Pack 1 during the Visual Studio 6.0 Setup.
	
	REFERENCES
	==========
	
	For additional information, please click on the article numbers below to view
	them in the Microsoft Knowledge Base:
	
	  Q148180 INFO: File Differences in Visual Basic 4.0a
	
	  Q161344 INFO: Visual Basic 4.0 and VisualBasic 5.0 Compatibility
	
	  Q180071 FILE: Msvbvm50.exe Installs Visual Basic 5.0 Run-Time Files
	
	  Q192461 FILE: VBRUN60.EXE Installs Visual Basic 6.0 Run-Time Files
	
	
	Additional query words: Automation system runtime run time
	
	======================================================================
	Keywords          : kbList kbVBp400 kbVBp500 kbVBp600 kbGrpDSVB kbVS600SP1 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2 kbVB500Search kbVB600Search kbVBA500 kbVBA600 kbVB500 kbVB600 kbVB400Search kbVB400
	Version           : WINDOWS:4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
