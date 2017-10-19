---
layout: page
title: "Q125213: PRB: Spawn with _P_WAIT Returns Immediately on Win32s"
permalink: /kb/125/Q125213/
---

## Q125213: PRB: Spawn with _P_WAIT Returns Immediately on Win32s

	Article: Q125213
	Product(s): Microsoft C Compiler
	Version(s): 1.0 1.3 1.3a 1.3c 2.0 2.1 2.2 4.
	Operating System(s): 
	Keyword(s): kbCRT kbVC kbOSWin32s
	Last Modified: 29-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 2.1, 2.2, 4.0, 4.1 
	   - Microsoft Win32s versions 1.30, 1.30a, 1.30c 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you call _spawnl() with _P_WAIT from a Win32-based application, then under
	Windows NT, the call returns after the spawned application has been terminated.
	But under Win32s, the call returns immediately, even though the spawned
	application is still running.
	
	The return value from _spawnl() with _P_WAIT is zero if the spawned application
	is a 16-bit Windows-based application or 0x103 if the application is a
	Win32-based application.
	
	CAUSE
	=====
	
	This is due to the design of the C Run-time and a limitation of Win32s. When the
	CRT does a _P_WAIT spawn, it calls CreateProcess() and checks for failure. Next,
	the CRT calls WaitForSingleObject() on the process handle. Under Windows NT,
	WaitForSingleObject() pauses the application until the new process terminates,
	and then returns TRUE. But under Win32s, WaitForSingleObject() returns TRUE
	immediately. Next, the CRT calls GetExitCodeProcess() to find the exit status.
	It is a limitation that GetExitCodeProcess() returns zero for 16-bit
	Windows-based application on both Windows NT and Win32s. The return value of
	0x103 for Win32-based applications is incorrect because the application has not
	yet terminated.
	
	RESOLUTION
	==========
	
	There is no way to perform the synchronous spawn with the spawn family of
	functions on Win32s. You can only perform an asynchronous spawn.
	
	For an example of a synchronous spawn under Win32s using the Win32 API and the
	Universal Thunk, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q125212 Performing a Synchronous Spawn Under Win32s
	
	MORE INFORMATION
	================
	
	The following sample code can be used to demonstrate this behavior. The code
	spawns NOTEPAD.EXE.
	
	NOTE: The path is hard-coded, so you may have to change it if your NOTEPAD is
	installed in a different directory. Under Windows NT, the message box is
	displayed after NOTEPAD is closed, whereas under Win32s, the message box is
	displayed before NOTEPAD is closed.
	
	NOTEPAD is a 16-bit application under Win32s on Windows. To demonstrate the
	return value of 0x103 with a Win32-based application, substitute the path to
	FREECELL.EXE for the C:\\WINNT35\\SYSTEM32\\NOTEPAD.EXE in the _spawnl() call in
	the code below.
	
	Sample Code
	-----------
	
	     /* Compile options needed: /MD /DWIN32 <filename>.c /link user32.lib
	     */ 
	
	     #include <windows.h>
	     #include <process.h>
	
	     void main( )
	     {
	        DWORD dwVersion;
	        int status;
	        char buf[80];
	
	        dwVersion = GetVersion();
	
	        if( !(dwVersion & 0x80000000) )
	        {
	           // Windows NT: NOTEPAD must be closed before this call completes.
	
	           status = _spawnl( _P_WAIT, "c:\\winnt35\\system32\\notepad.exe",
	              "notepad.exe", "dummy", NULL );
	        }
	        else if( LOBYTE(LOWORD(dwVersion)) < 4 )
	        {
	           // Win32s: This call completes before NOTEPAD is closed.
	
	           status = _spawnl( _P_WAIT, "c:\\windows\\notepad.exe",
	              "notepad.exe", "dummy", NULL );
	        }
	        else
	        {
	           // Windows 95: for future reference.
	        }
	
	        wsprintf( buf, "Return Value = 0x%x\n", status );
	        MessageBox( NULL, buf, "Test", MB_OK );
	     }
	
	Additional query words: _spawnle _spawnlp _spawnlpe _spawnv _spawnve _spawnvp _spawnvpe win32sdk win32s
	
	======================================================================
	Keywords          : kbCRT kbVC kbOSWin32s 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 1.0 1.3 1.3a 1.3c 2.0 2.1 2.2 4.
	Issue type        : kbprb
	
	=============================================================================
	
