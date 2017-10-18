---
layout: page
title: "Q48023: Developing Common Code for Both Windows and Macintosh"
permalink: kb/048/Q48023/
---

## Q48023: Developing Common Code for Both Windows and Macintosh

	Article: Q48023
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	We are not aware of any kind of Windows-to-Macintosh interpreter or translator
	that will allow you to directly run Windows code on the Macintosh, but there are
	some alternatives:
	
	1. The January 1989 issue of the "Microsoft Systems Journal" contains two
	  relevant articles titled "Developing Applications with Common Source Code for
	  Multiple Environments" and "Porting Apple Macintosh Applications to the
	  Microsoft Windows Environment."
	
	2. The "Windows Developer Guidebook" [available by calling (800) 426-9600]
	  contains a listing for a product that helps you develop code in an
	  environment-independent way. The product is called XVT (Extensible Virtual
	  Toolkit) for Microsoft Windows, Presentation Manager, and Macintosh. XVT is
	  made by the following company:
	
	  GSS (Graphical Software Systems)
	  9590 SW Gemini Drive
	  Beaverton, OR 97005
	  (503) 643-8642
	
	  According to GSS, "XVT allows developers to create and maintain one set of
	  source code and port it to Windows, PM, and Macintosh environments."
	
	
	3. A third-party product called CommonView contains Glockenspiel C++ object
	  libraries to simplify creation of applications for Windows and OS/2
	  Presentation Manager (PM) using the same core source code. Contact the
	  company to find out more about porting to the Macintosh.
	
	  CommonView is a set of class libraries for creating Microsoft Windows and PM
	  applications. They come with the C++ compiler, which is an object-oriented
	  version of C. They are actually translators that translate C++ code into C
	  code, which you can then run through your C compiler. You can write an
	  application using CommonView, and it will isolate you from the particular
	  Windows environment. The product is distributed by Imagesoft, (800) 245-8840
	  or (516) 767-2233.
	
	XVT and CommonView are manufactured by vendors independent of Microsoft; we make
	no warranty, implied or otherwise, regarding these products' performance or
	reliability.
	
	Additional query words: 3.00 no32bit 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
