---
layout: page
title: "Q195373: BUG: Breakpoint Not Hit in ActiveX DLL on CE Device"
permalink: /kb/195/Q195373/
---

## Q195373: BUG: Breakpoint Not Hit in ActiveX DLL on CE Device

{% raw %}

	Article: Q195373
	Product(s): Microsoft C Compiler
	Version(s): WINNT:
	Operating System(s): 
	Keyword(s): kbDebug kbide kbVC500 kbOSWinCE200
	Last Modified: 17-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Integrated Debugger, included with:
	   - Microsoft Windows CE Toolkit for Visual C++ 
	   - Microsoft Windows CE Embedded Toolkit for Visual C++ 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting a breakpoint in an ActiveX DLL and starting the debugger, the
	program execution does not stop at the breakpoint when a process is already
	using the ActiveX DLL.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	When attempting to run a program that uses an ActiveX DLL that is loaded by a
	process currently being debugged on CEPC, you receive the following error:
	
	  
	
	  Fatal Application Error
	  Application <program name> has performed an illegal operation and will
	  be shut down. If the problem persists, contact the program vendor.
	  Program: <program name>
	  Exception: 0x80000003
	  Address: 01a62d66
	
	When attempting to run a program that uses an ActiveX DLL that is loaded by a
	process currently being debugged on a Windows CE Handheld PC, the program may
	run in an impaired fashion or may generate an exception.
	
	When attempting to run a program that uses an ActiveX DLL that is loaded by a
	process currently being debugged on a Windows CE Palm-size PC, the program may
	not run and may not display any diagnostic stating that it won't run.
	
	Additional query words: kbDSupport
	
	======================================================================
	Keywords          : kbDebug kbide kbVC500 kbOSWinCE200 
	Technology        : kbVCsearch kbAudDeveloper
	Version           : WINNT:
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
