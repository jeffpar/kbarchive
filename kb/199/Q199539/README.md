---
layout: page
title: "Q199539: PRB: MF1012 Error, Copying PowerPC App w/AppleTalk Under NT 4.0"
permalink: /kb/199/Q199539/
---

## Q199539: PRB: MF1012 Error, Copying PowerPC App w/AppleTalk Under NT 4.0

	Article: Q199539
	Product(s): Microsoft C Compiler
	Version(s): MACINTOSH:4.0,4.0b
	Operating System(s): 
	Keyword(s): kbsetup kbtool kbHWMAC kbVC kbDSupportkbbuglist
	Last Modified: 06-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, Macintosh Cross-Development Addon, versions 4.0, 4.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When transferring a PowerPC application file to a PowerPC Macintosh using
	AppleTalk, from Windows NT 4.0, the following error may occur:
	
	  MF1012: remote request failed
	
	CAUSE
	=====
	
	This is a bug in the AppleTalk transport layer of the Macintosh components of
	the Visual C++ Cross-Development Edition for Macintosh.
	
	RESOLUTION
	==========
	
	Use TCP/IP for transferring files.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following error is generated when using the AppleTalk protocol shipped with
	Windows NT 4.0 to transfer a PowerPC application built using Visual C++ for the
	Macintosh to a PowerPC Macintosh:
	
	  Copying build results to remote machine...mymac:myvolume:myapp
	  fatal error MF1012: remote request failed
	  Error executing mfile.exe.
	  myapp.exe - 1 error(s), 0 warning(s)
	
	In addition, the Visual C++ Power Mac Debug Monitor will hang after 15/20K of
	data has been transferred. In some cases, the system may hang; in other cases,
	the transfer process may hang. For small executables, the application file may
	transfer completely but the application may be corrupted and crash as a result.
	
	This problem does not occur with 68K applications that use the Visual C++ File
	Utility instead.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1999, All Rights Reserved. Contributions by Adam Kim,
	Microsoft Corporation.
	
	
	Additional query words: MF1012 remote request failed
	
	======================================================================
	Keywords          : kbsetup kbtool kbHWMAC kbVC kbDSupport kbbuglist
	Technology        : kbVCsearch kbHWMAC kbOSMAC kbAudDeveloper kbVCXDev400Mac kbVCXDev400bMac
	Version           : MACINTOSH:4.0,4.0b
	Issue type        : kbprb
	
	=============================================================================
	
