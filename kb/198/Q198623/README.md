---
layout: page
title: "Q198623: HOWTO: JIT Debug a COM Local Server"
permalink: kb/198/Q198623/
---

## Q198623: HOWTO: JIT Debug a COM Local Server

	Article: Q198623
	Product(s): Microsoft C Compiler
	Version(s): 2000,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbOSWinNT kbOSWin2000 kbVC600 kbDSupport
	Last Modified: 10-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	- Microsoft Visual C++.NET (2002) 
	- Microsoft Windows 2000 Professional 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Advanced Server 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When an exception (for example, an access violation) is thrown from within a COM
	method, the server gets the first chance to handle the exception. If the server
	does not handle the exception, the COM/remote procedure call (RPC) run time
	handles it and returns an error indicating the exception was thrown. This
	behavior is by design.
	
	The result of this is that no exception thrown in a COM method [including
	DebugBreak()] ever goes unhandled. As a result, just-in-time (JIT) debugging of
	COM local servers is difficult at best.
	
	This article presents a way to JIT debug some exceptions from a COM local server.
	The article also explains how to pseudo-JIT debug a COM local server for other
	exceptions.
	
	MORE INFORMATION
	================
	
	JIT Debug a COM Local Server:
	
	Set the following registry key:
	
	HKEY_LOCAL_MACHINE\Software\Microsoft\Ole
	IgnoreServerExceptions="Y"
	
	When the above key is set, the COM/RPC run time will pass the following
	exceptions on to the caller (for debug purposes):
	
	- STATUS_ACCESS_VIOLATION
	
	- STATUS_POSSIBLE_DEADLOCK
	
	- STATUS_DATATYPE_MISALIGNMENT
	
	- STATUS_INSTRUCTION_MISALIGNMENT
	
	- STATUS_ILLEGAL_INSTRUCTION
	
	- STATUS_PRIVILEGED_INSTRUCTION
	
	Because the COM/RPC run time no longer handles the above types of exceptions,
	they go unhandled and JIT debugging is therefore possible. For any other
	exceptions, use the pseudo-JIT debug methods outlined below (or run the local
	server from within the debugger).
	
	Pseudo-JIT Debug a COM Local Server:
	
	For this method to work, the exception generated must be continuable and must
	reproduce on continuation. For instance, an access violation is a continuable
	exception, and if the same instruction is executed twice in the same context,
	the exception is generated twice. For more information on generating
	noncontinuable exceptions, please see the Help topic for RaiseException.
	
	1. All functions must be wrapped in a Win32 structured exception handling
	  try-except block; for example:
	
	  LONG MyUnhandledExceptionFilter(EXCEPTION_POINTERS *ExceptionInfo);
	
	  #define PJITTry  \ 
	      __try { \ 
	          UINT __oldErrMode = SetErrorMode(0);
	
	  #define PJITExcept(x) \ 
	      SetErrorMode(__oldErrMode); \ 
	      } __except (MyUnhandledExceptionFilter(GetExceptionInformation())) {}
	
	  HRESULT MyClass::MyMethod (BSTR bstrName) {
	      PJITTry {
	          return MyClass::_MyMethod(bstrName);
	      }
	      PJITExcept {}
	  }
	
	Note that if you are using C++ exception handling (try-catch), then you must
	provide stub functions in a different file that call the real functions so you
	can wrap the function call in a try-except block.
	
	Depending on your circumstances, the wrapper functions can be introduced in
	various ways. You need to think about your approach carefully, before beginning,
	to reduce the overall amount of work. For instance, in the example above, if
	MyClass had many methods, it may be easier to derive a class and override all
	interface methods than to rename all of the real methods:
	
	  class MyDebugClass : public MyClass {
	      //... lots of methods
	      virtual HRESULT MyMethod (BSTR bstrName) {
	          PJITTry {
	              return MyClass::_MyMethod(bstrName);
	          }
	          PJITExcept {}
	      }
	  }
	
	If you use the STDMETHOD and STDMETHODIMP macros, it may be as easy as undefining
	and redefining these macros.
	
	There are many other ways to wrap your functions. It is not possible to provide
	an exhaustive list in this article.
	
	2. The next step is to include the function below as a separate .cpp file in
	  your project:
	
	  #ifndef _WIN32_WINNT
	  #define _WIN32_WINNT 0x400
	  #endif
	  #include <windows.h>
	  #include <tchar.h>
	  extern "C"
	  LONG MyUnhandledExceptionFilter(EXCEPTION_POINTERS *ExceptionInfo)
	  {
	      __try {
	          CHAR AeDebuggerCmdLine[MAX_PATH];
	          if(IsDebuggerPresent()) return EXCEPTION_CONTINUE_SEARCH;
	          if (0 == GetProfileString(
	              _T("AeDebug"),
	              _T("Debugger"),
	              NULL,
	              AeDebuggerCmdLine,
	              sizeof(AeDebuggerCmdLine)-1)
	              )
	          {
	              return EXCEPTION_CONTINUE_SEARCH;
	          }
	          BOOL b;
	          STARTUPINFO si;
	          PROCESS_INFORMATION pi;
	          CHAR CmdLine[MAX_PATH];
	          DWORD Status;
	          HANDLE hEvent;
	          SECURITY_ATTRIBUTES sa;
	          sa.nLength = sizeof(sa);
	          sa.lpSecurityDescriptor = NULL;
	          sa.bInheritHandle = TRUE;
	          hEvent= CreateEvent(&sa,TRUE,FALSE,NULL);
	          ZeroMemory(&si,sizeof(si));
	          wsprintf(CmdLine,AeDebuggerCmdLine,GetCurrentProcessId(),hEvent);
	          si.cb = sizeof(si);
	          si.lpDesktop = _T("Winsta0\\Default");
	          b =  CreateProcess(NULL,CmdLine,0,0,TRUE,0,0,0,&si,&pi);
	          if ( b && hEvent) {
	              Status = WaitForSingleObject(hEvent,INFINITE);
	              return EXCEPTION_CONTINUE_EXECUTION;
	          }
	          return EXCEPTION_CONTINUE_SEARCH;
	      } // end __try
	      __except (EXCEPTION_EXECUTE_HANDLER)
	      {
	          return EXCEPTION_CONTINUE_SEARCH;
	      }
	  }
	
	  The caveats with this code are:
	
	   - The code requires the exception to be repeatable. When we attach the
	     debugger, we continue execution to cause another exception. If the
	     continued execution doesn't cause the exception again, then we have lost
	     the opportunity to debug.
	
	   - The debugger doesn't stop on first-chance exceptions by default. Because
	     this exception is handled by a RPC, we must force the debugger to stop on
	     the first-chance notification.
	
	3. Force the debugger to stop on first-chance exceptions, as follows:
	
	  a. Start Developer Studio.
	
	  b. From the File menu, click Open, and find the executable for the local
	     server.
	
	  c. From the Build menu, click Debug, then click Go (or Step Into).
	
	  d. From the Debug menu, click Exceptions.
	
	  e. Change all exceptions to stop always.
	
	  f. From the Debug menu, click Stop Debugging.
	
	  g. From the File menu, click Close Workspace. When prompted, save the
	     workspace options.
	
	This method generates a workspace options file (.opt file) in the same directory
	as the .exe for the local server. The problem with this method is that the .opt
	file stores the fully qualified path to the executable, and therefore if you
	copy the local server to another machine, you must use the same directory
	structure to use the same .opt file. Otherwise, you need to create a new .opt
	file.
	
	Overall, this method isn't quite as good as the normal means of JIT debugging.
	When possible, run your local server from within the debugger. However, for most
	circumstances where JIT debugging is required, this method should be helpful.
	Please note that there are some circumstances (mentioned above) where this
	method does not work; in those circumstances, you must run your local server
	from within the debugger.
	
	Additional query words: IgnoreServerExceptions RPC_E_SERVERFAULT
	
	======================================================================
	Keywords          : kbDebug kbOSWinNT kbOSWin2000 kbVC600 kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : :2000,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
