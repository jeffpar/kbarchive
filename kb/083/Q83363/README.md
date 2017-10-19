---
layout: page
title: "Q83363: Unlocking Large-Model Extra Data Segments"
permalink: /kb/083/Q83363/
---

## Q83363: Unlocking Large-Model Extra Data Segments

	Article: Q83363
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An application that is compiled using the large memory model can have multiple
	code segments and multiple data segments.
	
	Under Windows 3.0, all the data segments except for the first one (the so called
	"extra" data segments) are loaded into memory segments that are fixed and page
	locked. Fixed and page locked segments interfere with effective memory
	management. They reduce the amount of free memory addressed below 1 megabyte
	(MB) in the linear address space, and in some cases, cause out-of-memory errors
	as additional applications are run.
	
	Under Windows 3.1, extra data segments are loaded into movable memory and the
	above difficulties with fixed and page locked segments do not apply.
	
	A large model application can change the attributes of its extra data segments by
	calling the GlobalPageUnlock and GlobalUnfix functions. However, to do this
	effectively, the application must be able to enumerate the selectors for its
	extra data segments.
	
	Largeapp.exe is a file in the Microsoft Download Center that demonstrates using
	the GlobalPageUnlock and GlobalUnfix functions to change the attributes of an
	application's extra data segments. Largeapp.exe contains the source code to two
	applications: Largeapp.exe, which is a large-model application for the Windows
	environment, and SYMSEG, which is an MS-DOS (non-Windows) application.
	
	SYMSEG is a utility that reads a symbol file produced by the Microsoft Linker,
	and creates a table of the data segments in an application. LARGEAPP uses the
	information from this table to enumerate its own data segments.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Largeapp.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	LARGEAPP determines the version of Windows under which it is running. The segment
	attributes must be changed only if the application is running under Windows 3.0.
	
	Additional query words: LARGEAPP
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1
	
	=============================================================================
	
