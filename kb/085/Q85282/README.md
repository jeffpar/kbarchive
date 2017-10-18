---
layout: page
title: "Q85282: Application Dynamically Links to a DLL Using a Class"
permalink: kb/085/Q85282/
---

## Q85282: Application Dynamically Links to a DLL Using a Class

	Article: Q85282
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	DYNDLL is a file in the Microsoft Download Center that demonstrates using a
	class, called CDynDLL, to dynamically link to a DLL. The CDynDLL constructor
	loads the library and retrieves pointers to each function exported by the DLL.
	The CDynDLL destructor frees the library. The member functions of the CDynDLL
	class correspond to the functions exported by the DLL.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Rdo1test.exe
	  (http://download.microsoft.com/download/win31/samp3/1/W31/EN-US/Rdo1test.exe)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	The traditional methods an application uses to dynamically link to a dynamic-link
	library (DLL) in the Windows environment, using the LoadLibrary() and
	FreeLibrary() functions, can be awkward. The application is required to call
	GetProcAddress() for each DLL function the application links to, and the
	application is then required to store the returned address in an array. The
	source code of the application must also contain a prototype for each called
	function or the programmer must cast each function parameter to the required
	type.
	
	The object-oriented techniques of Microsoft C/C++ version 7.0 can be applied to
	ease the process of dynamically linking with a DLL. An application can define a
	class that links to the DLL and contains pointers to each of the exported
	functions. Member functions of the class correspond to the exported functions in
	the DLL.
	
	Additional query words: softlib DYNDLL.EXE kbfile
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	Issue type        : kbinfo
	
	=============================================================================
	
