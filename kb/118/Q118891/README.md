---
layout: page
title: "Q118891: Installing and Using the Debugging Version of Windows"
permalink: kb/118/Q118891/
---

## Q118891: Installing and Using the Debugging Version of Windows

	Article: Q118891
	Product(s): Microsoft Windows Software Development Kit
	Version(s): 3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 23-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The debugging version of Windows replaces the core Windows code with code that
	provides additional error checking and reporting not in the standard
	(non-debugging) version of Windows. This information is useful if you are a
	developer testing your own application under Windows. The debugging version of
	Windows will point you to resource leaks and errors that go otherwise
	undetected; therefore, it is a good idea to run your application under the
	debugging version at least once, even if the program appears to run without any
	problems.
	
	You can install the debugging version of Windows from either the Windows SDK or
	the Visual C++ Professional Edition. General installation and use guidelines are
	available in the SDK manual "Getting Started" and the Visual C++ manual
	"Professional Tools User's Guides." This article provides additional information
	on these subjects.
	
	MORE INFORMATION
	================
	
	First, follow the guidelines in your manual to install the debugging version of
	Windows. If you have already installed the SDK or Visual C++ and did not choose
	to install the debugging version, run the setup program again. You only have to
	install the debugging version at this point. The debugging version is called the
	"debug kernel." The term "kernel" refers to the operating system core. In
	Windows, the kernel consists of the GDI.EXE, KRNL386.EXE, and USER.EXE files.
	
	The files that ship with the Windows version 3.1 SDK or Visual C++ work with both
	Windows version 3.1 and Windows for Workgroups (WFW) version 3.11. The .SYM
	files are specific to the version of Windows that you are running. If you
	install from Visual C++ version 1.5 and are using WFW, after installing you need
	to copy the GDI.SYM, KRNL386.SYM, and USER.SYM files from the CDs
	MSVC\NODEBUG\WFW311 directory to your MSVC\NODEBUG directory, overwriting the
	Windows version 3.1 files that are currently in that directory. However, if you
	are installing from the SDK or Visual C++ version 1.0, you need to copy those
	three files from your system directory before you run the debugging version of
	Windows. If you happen to use the wrong .SYM files when not in debugging mode,
	Windows will still run OK. However, programs like Dr. Watson that use .SYM files
	will occasionally have output that is off by a couple of bytes. If you need the
	Windows for Workgroups files, they are available from the Microsoft Download
	Center in the file DBG311.ZIP. (Make sure to use the -d flag when using PKUNZIP
	to tell it to maintain the directory structure.)
	
	Once the debugging version is installed, you will have the following batch files
	available to switch between the non-debugging and the debugging version of
	Windows: N2D.BAT and D2N.BAT. By default, they are in either the WINDEV\BIN or
	the MSVC\BIN directory. You will probably want to switch to the non-debugging
	version when you do not need the extra diagnostics of the debugging version,
	because the debugging version runs significantly slower due to the increased
	error checking. When you run the debugging version of Windows, you will see the
	phrase "Enhanced Mode Debug Windows" in the lower right-hand corner of your
	screen.
	
	If you start the debugging version of Windows and the error "Cannot write to
	device AUX" displays, most likely COM1 is not available and you should direct
	the debugging output elsewhere. For additional information, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q86263 Redirecting Debugging Information Under Windows
	
	You can control the level of diagnostic information by using the debugging
	version of Windows. The groups of output options are break options, debug
	options, and trace options. The debug option "break with INT 3" is useful if you
	are running your program under the debugger: when the program causes a
	general-protection (GP) fault, the debugger stops on the line of code where the
	fault occurred. In general, it is a good idea to check all of the trace options
	and also clear the "Print on Break Only" check box so that printing occurs
	synchronously. For more information on the debugging version of Windows and the
	debugging options, see the DBWIN.TXT file that is included with the DBWIN sample
	and the "Windows Debugging Version/Debugging Programs" topic in the SDK help
	file.
	
	You can use OutputDebugString() or DebugOutput() in your own application to print
	debugging output. These APIs are easier to use than MessageBox().
	
	When you run the debugging version of Windows, you may notice errors from other
	Windows-based applications that you are running. Other applications can even
	cause general protection faults or machine hangs when they are run under the
	debugging version. This is a sign that the application developer did not test
	the application under the debugging version of Windows. If you have an
	application in your startup group that prevents the debugging version of Windows
	from loading, hold down the Shift key while booting so that the applications in
	your startup group are not started.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : :3.1
	
	=============================================================================
	
