---
layout: page
title: "Q95333: Copying a File"
permalink: kb/095/Q95333/
---

## Q95333: Copying a File

	Article: Q95333
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	COPYTEST is a sample that contains a complete code module to copy a file of any
	size and set its file date/time stamp.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Copytest.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	Windows contains its own set of file I/O functions to perform the basic
	operations such as file open, close, read, write, and so forth; however, there
	is no function to copy a file. The COPY.C module included in this sample can be
	plugged into any application or dynamic-link library (DLL). Some of the features
	of this module are:
	
	- The ability to rename the output file
	
	- The ability to copy the file date/time stamp and attributes
	
	- Nondependency upon the C run time due to the use of inline assembly
	
	- Robust error reporting
	
	For information on how to call the CopyFile() function, please refer to the
	comment block inside of COPY.C.
	
	Additional query words: 3.00 3.10 softlib COPYTEST.EXE
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
