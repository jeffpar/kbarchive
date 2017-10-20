---
layout: page
title: "Q92537: SAMPLE: Windows Application Produces Stack Trace"
permalink: /kb/092/Q92537/
---

## Q92537: SAMPLE: Windows Application Produces Stack Trace

{% raw %}

	Article: Q92537
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbsample kb16bitonly kbOSWin310 kbOSWin300
	Last Modified: 25-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	STKTRACE is a sample Windows-based application that contains the complete code
	to obtain a stack trace of the "current task." The stack trace includes symbolic
	information extracted from the symbol files, similar to that produced by the
	Windows debug kernel at the time of a FatalExit. In this sample, the stack trace
	is logged into a buffer and output to a message box.
	
	The STKTRACE sample uses the tool helper library and can be used in the Windows
	versions 3.0 and 3.1 environments because TOOLHELP.DLL is a redistributable.
	
	MORE INFORMATION
	================
	
	The following file is available for download from the Microsoft Download
	Center:
	
	  Stktrace.exe
	  (http://download.microsoft.com/download/platformsdk/sample63/1/W31/EN-US/STKTRACE.EXE)
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	Usually, the Windows debug kernel produces a stack trace on the debug terminal
	when the SPACE BAR or ENTER key is pressed at the time of a FatalExit. For more
	information on stack traces produced by the debug kernel, query on the following
	words in the Microsoft Knowledge Base:
	
	  " stack trace space bar " (without the quotation marks)
	
	However, when you are writing a debugger or a large complex application, it might
	be necessary to produce stack traces in your application. Then, the STKTRACE
	sample code can be helpful.
	
	This sample consists of two main modules, GETTRACE.C and GETSYMBOL.C, and a
	driver module, STKTRACE.C, which merely calls the API from the GETTRACE.C
	module. The GETTRACE.C module contains code to walk the stack of the current
	task by using the tool helper library and the GETSYMBOL.C module contains code
	to obtain symbol names from corresponding symbol (.SYM) files by using the
	symbol file format. These two modules can be plugged into any application or a
	DLL (dynamic-link library).
	
	Note that the THSAMPLE application in the \SDK31\SAMPLES\TOOLHELP directory also
	illustrates how to produce stack traces for a given task that is not the current
	task. In contrast, the STKTRACE sample walks the stack of the current task by
	obtaining the register values from the stack and using the StackTraceCSIPFirst()
	and StackTraceNext() APIs from the tool helper library. Also, the STKTRACE
	sample provides symbolic information in the stack trace.
	
	The GETSYM.C module provides symbolic information by using the symbol file format
	documented in the Microsoft Windows SDK version 3.1 "Programmer's Reference,
	Volume 4: Resources" manual. Given a segment:offset address, this module finds
	the "nearest" public symbol in the corresponding symbol (.SYM) file.
	
	Additional query words: 3.00 3.10 softlib STKTRACE.EXE kbfile
	
	======================================================================
	Keywords          : kbsample kb16bitonly kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
