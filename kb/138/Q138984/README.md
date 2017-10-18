---
layout: page
title: "Q138984: Updated Dmn0.dll for Visual C++ 2.0 for Windows 95"
permalink: kb/138/Q138984/
---

## Q138984: Updated Dmn0.dll for Visual C++ 2.0 for Windows 95

	Article: Q138984
	Product(s): Microsoft C Compiler
	Version(s): winnt:2.0
	Operating System(s): 
	Keyword(s): kbfile kbpatch kbtool kbDebug kbide
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	An updated file named Dmn0.dll is available for users of Visual C++ 2.0 who are
	running Windows 95. This file corrects problems that may occur when running the
	Visual C++ 2.0 debugger in Windows 95. This file also corrects problems that may
	occur when running the Visual C++ 2.0 remote debug monitor in Windows 95 when
	remote debugging is being used. These problems do not occur in versions of
	Visual C++ later than 2.0.
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Dmn0.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	MORE INFORMATION
	================
	
	Once you have downloaded and extracted Dmn0.dll, replace the existing file on
	the computer that is running Windows 95. The existing file will be located in
	the Msvc20\Bin directory or the same directory as the other remote debug files
	Msvcmon.exe and Tln0com.dll, depending on the installation.
	
	For more information about remote debugging with Visual C++, please see Chapter
	14, "Using the Debugger," in the Visual C++ User's Guide.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbpatch kbtool kbDebug kbide 
	Technology        : kbVCsearch kbAudDeveloper kbVC200
	Version           : winnt:2.0
	
	=============================================================================
	
