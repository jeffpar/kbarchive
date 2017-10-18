---
layout: page
title: "Q97265: SAMPLE: Floating-Point Samples for Windows"
permalink: kb/097/Q97265/
---

## Q97265: SAMPLE: Floating-Point Samples for Windows

	Article: Q97265
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly kbOSWin310
	Last Modified: 04-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WinFloat consists of five programs and libraries that provide sample code and
	tools to explore the floating-point mechanisms of Microsoft Windows.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Winfloat.exe
	  (http://download.microsoft.com/download/platformsdk/sample91/3.1/W31/EN-US/WINFLOAT.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	- FLOATAPP.EXE: Windows-based application used as a shell for testing
	  application and dynamic-link library (DLL) floating-point issues. This
	  application tests floating-point speed, generates exceptions, installs signal
	  handler, masks and unmasks exceptions, and communicates with WIN87EM.DLL.
	  Some capabilities depend on the math package chosen and/or the presence of a
	  math coprocessor.
	
	- FLOATDLL.DLL: Floating-point Windows DLL. FLOATDLL is a subset of FLOATAPP,
	  to which it dynamically links. FLOATDLL can generate and handle
	  floating-point exceptions, and can be configured to install and maintain its
	  own signal handler or use the default (or application) handler.
	
	- FLOATDOS.EXE: Floating-point MS-DOS(R) application. FLOATDOS is a subset of
	  FLOATAPP that runs outside of Windows (or in a "DOS box"), thus allowing you
	  to compare an MS-DOS application with a Windows-based application for
	  exception handling and (most importantly) calculation speed.
	
	- HIDE87.COM: MS-DOS terminate-and-stay-resident (TSR) program that hides the
	  80x87 from Windows-based applications. HIDE87 must be installed before you
	  start Windows so you can trick Windows into thinking there's no math
	  coprocessor.
	
	- SHOW87.EXE: MS-DOS control program that disables the HIDE87 TSR. SHOW87
	  provides a way to turn off HIDE87 without rebooting the machine. As with
	  HIDE87, SHOW87 must be executed before you start Windows so it can detect the
	  math coprocessor.
	
	See the sample code and the "Floating Point in Windows" technical article for
	descriptions of these programs, their coding techniques, and the Windows
	floating point architecture. For information on building these programs and
	discussions of C version 6.0 versus C/C++ version 7.0 and emulator versus
	alternate math packages, see the make file. Note that these sample have major
	limitations if compiled with C 6.0.
	
	WINFLOAT was built and tested under Microsoft Windows version 3.1 using Microsoft
	Macro Assembler version 6.0 and Microsoft C/C++ version 7.0.
	
	Additional query words: Win16SDK310 softlib kbSample
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
