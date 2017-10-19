---
layout: page
title: "Q89331: Stack Traces Under Windows 3.1 SDK Debugging Kernel"
permalink: /kb/089/Q89331/
---

## Q89331: Stack Traces Under Windows 3.1 SDK Debugging Kernel

	Article: Q89331
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kbfile kb16bitonly kbOSWin310
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a FatalExit occurs, the Microsoft Windows operating system version 3.1
	Software Development Kit (SDK) debugging kernel does not display a stack trace
	on the debugging monitor unless the user presses the ENTER or SPACEBAR key
	immediately after the kernel displays the "Abort, Break, Ignore" message. This
	behavior is different from that found in the debugging kernel for Windows
	version 3.0 or prerelease versions of Windows version 3.1.
	
	The rationale behind changing this behavior was to simplify the interface to the
	debugging kernel and to speed its execution. When a FatalExit message occurs, a
	stack trace is available if desired. However, the kernel does not take time to
	create and display unwanted stack traces.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	Nudbwin.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	In its default configuration, the Windows debugging kernel displays messages on a
	serial terminal connected to the COM1 port. The kernel produces four levels of
	messages: Trace, Warning, Error, and FatalExit. Appendix C of the SDK
	"Programming Tools" manual and the SDK Help system documents the Windows
	debugging kernel.
	
	When the debugging kernel displays the "Abort, Retry, Ignore" message for a
	FatalExit it does not display a stack trace immediately. Instead, the kernel
	enters a loop, waiting for the user to respond. If the user presses the SPACEBAR
	or ENTER key before the loop times out, the kernel displays the stack trace. To
	continue execution after the stack trace, press the I key to ignore the
	FatalExit. The other options are to press the A key to abort execution or the B
	key to break into the debugger.
	
	The Windows 3.1 SDK includes an advanced sample application called DBWIN that
	provides a good user interface and some useful features to assist in debugging a
	Windows-based application with the debugging kernel. If the advanced samples are
	installed into the default directory, the DBWIN source code is in the
	C:\WINDEV\SAMLES\DBWIN directory.
	
	DBWIN can redirect debugging messages into a window on the main display or to a
	secondary monochrome monitor. However, when DBWIN redirects messages in this
	manner, the debugging kernel ignores FatalExit messages (irrespective of the
	debug settings). In other words, no stack traces are available when DBWIN
	redirects debug messages to a window or a secondary monochrome monitor. However,
	stack traces are available when DBWIN redirects debugging information to COM1 or
	COM2 as outlined above for a debugging terminal.
	
	DBWIN ignores FatalExit messages because the system runs much faster when it
	displays debugging messages in a window rather than on a serial terminal.
	However, because a stack trace provides very useful information to assist in
	debugging an application, this default behavior might not be considered very
	useful.
	
	The text below provides the modification to the DBWIN source code required to
	provide stack traces in a window or on a secondary monochrome monitor. The
	modified version of DBWIN produces a stack trace for every FatalExit message
	displayed by the debugging kernel, similar to the behavior of the Windows 3.0
	debugging kernel. While the system might run slowly with the modified DBWIN, the
	additional debugging information might make the change worthwhile. The modified
	version of DBWIN is available in the NUDBWIN file in the Software/Data Library.
	
	The only modifications required are to the NotifyCallback function in the
	DBWINDLL.C source file. Add the text in the lines that begin with NEW to the
	file, as follows:
	
	  BOOL CALLBACK _export _loadds NotifyCallback(WORD id, DWORD dwData)
	     {
	         BOOL fHandled;
	          .
	          .
	     NEW // By default, produce stack trace at every FatalExit
	     NEW static BOOL fStackTrace = TRUE;
	     
	         // If we're not outputting anything,
	         // just return FALSE to chain to next handler.
	         if (modeOutput == OMD_NONE)
	             return FALSE;
	     
	               .
	               .
	               .
	     
	     
	         case NFY_INCHAR:
	             switch (modeOutput)
	             {
	             case OMD_COM1:
	             case OMD_COM2:
	                 fHandled = (BOOL)ComIn();
	                 break;
	     
	             default:
	     NEW         if (fStackTrace)
	     NEW            fHandled = (BOOL)' '; // Return a SPACEBAR press
	     NEW                                  // to produce stack trace
	     NEW         else
	     NEW            fHandled = (BOOL)'i'; // Return an I key press to
	     NEW                                  // ignore the FatalExit
	     NEW
	     NEW      // Do not produce the stack trace a second time at the
	     NEW      // "Abort, Break, Ignore" message. Ignore FatalExit this time
	     NEW      fStackTrace = !fStackTrace;
	             }
	             break;
	     
	               .
	               .
	               .
	
	Additional query words: softlib NUDBWIN.EXE kbfile
	
	======================================================================
	Keywords          : kbfile kb16bitonly kbOSWin310 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
