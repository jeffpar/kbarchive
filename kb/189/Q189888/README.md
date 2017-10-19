---
layout: page
title: "Q189888: PRB: Stack Size Now 256 K in Internet Information Server 4.0"
permalink: /kb/189/Q189888/
---

## Q189888: PRB: Stack Size Now 256 K in Internet Information Server 4.0

	Article: Q189888
	Product(s): Internet Information Server
	Version(s): winnt:4.0,5.0
	Operating System(s): 
	Keyword(s): kbnokeyword kbASP kbISAPI kbDSupport kbiis400 kbiis500
	Last Modified: 16-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server versions 4.0, 5.0 
	- Microsoft Internet Server Application Programming Interface (API) 
	- Microsoft Active Server Pages 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A "Stack overflow" or access violation error, or hanging of the server may occur
	due to an ISAPI DLL or custom Active Server Pages (ASP) component in Internet
	Information Server (IIS) 4.0. This problem does not occur when the same code and
	data are used in Internet Information Server 3.0.
	
	CAUSE
	=====
	
	The maximum stack size of a thread has been reduced from 1 MB in IIS 3.0 to 256
	KB in IIS 4.0. The stack size is still 256 KB for IIS 5.0 on Windows 2000.
	
	RESOLUTION
	==========
	
	Reduce the ISAPI DLL's or ASP component's use of the stack to fit within the
	reduced size of the IIS 4.0 stack. See the MORE INFORMATION section below for
	hints.
	
	STATUS
	======
	
	The change in stack size is by design.
	
	MORE INFORMATION
	================
	
	The maximum size of a thread's stack is determined by the executable file of the
	process, not by the individual ISAPI DLL or ASP component that is running inside
	the process. Both the IIS 4.0 version of Inetinfo.exe (for in-process Web
	applications) and Mtx.exe (which hosts out-of-process Web applications) are set
	to a 256 KB maximum stack size. This follows the changed standard for all
	Windows NT system executables.
	
	A function's arguments and local variables are stored on the stack of the thread
	they are executing on. Declaring extremely large local variables will rapidly
	use up the stack. For example, the following function would require 400,000
	bytes of stack space (100,000 integers X 4 bytes per int) to store the array.:
	
	     void func(void)
	     {
	       int i[100000];
	       // more code
	       return;
	     }
	
	This function could not be successfully called in IIS 4.0, but probably would
	have worked in IIS 3.0. To avoid using the stack, allocate the memory
	dynamically:
	
	     void func(void)
	     {
	       int *i
	
	       i = new int[100000];
	       // more code
	       return;
	     }
	
	Dynamically allocated memory is not stored on the stack, so the function no
	longer needs 400,000 bytes of stack space, and should work on IIS 4.0
	
	Another way that stack space can be quickly exhausted is with recursive function
	calls. If a function requires 40 bytes for local variables and arguments, and
	calls itself recursively 10,000 times, then 400,000 bytes of stack space would
	be needed. Again, this would likely work on IIS 3.0, but not on IIS 4.0.
	
	A CGI program would not be affected by the change in stack size. A new process is
	created when the CGI program is launched, and the stack size is determined from
	the CGI executable, not from Inetinfo.exe.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnokeyword kbASP kbISAPI kbDSupport kbiis400 kbiis500 
	Technology        : kbiisSearch kbAudDeveloper kbASPsearch kbiis500 kbiis400 kbISAPI kbISAPISearch
	Version           : winnt:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
