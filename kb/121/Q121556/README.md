---
layout: page
title: "Q121556: PRB: Breakpoints Won't Work - 12 Reasons Why"
permalink: kb/121/Q121556/
---

## Q121556: PRB: Breakpoints Won't Work - 12 Reasons Why

	Article: Q121556
	Product(s): Microsoft C Compiler
	Version(s): 1.0,1.5,1.51,1.52,2.0,4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbtshoot kbCodeView kbDebug kbide kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kb
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++ for Windows, 16-bit edition, versions 1.0, 1.5, 1.51, 1.52 
	- Microsoft Visual C++, 32-bit Editions, versions 1.0, 2.0, 4.0, 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	This article describes 12 possible reasons why you may be having trouble getting
	breakpoints to work. It covers each of the following 12 situations where
	breakpoints do not work as expected:
	
	- Can't set breakpoint in a Windows Exit Procedure (WEP).
	
	- Problems when using Program Manager replacements.
	
	- Can't set breakpoint on expression that uses out-of-scope variables.
	
	- Breakpoints fail when multiple source files have the same name.
	
	- Can't set breakpoint in the WndProc of a child window in a DLL.
	
	- Can't set breakpoint in source file when corresponding symbolic information
	  isn't loaded into memory by debugger.
	
	- Breakpoints missed when DLL unloaded and reloaded in same debug session.
	
	- Breakpoints missed when DLL loaded into memory before debug session starts.
	
	- Missed breakpoints when more than one copy of DLL on your hard disk.
	
	- Can't Set "Break When Expression Has Changed" Breakpoint on a variable local
	  to a DLL.
	
	- Visual C++ Version 1.0 and 1.5 IDE debuggers won't stop on a breakpoint in an
	  MFC message handler for the WM_QUERYENDSESSION Message.
	
	- Can't set breakpoints on desired lines if program is built without /Od
	  option.
	
	MORE INFORMATION
	================
	
	Can't Set Breakpoint in a Windows Exit Procedure (WEP)
	------------------------------------------------------
	
	This is by design. Instead, you can call DebugBreak() or hard code an int 3
	interrupt in your WEP using code like this:
	
	  #ifdef _DEBUG
	     DebugBreak();
	     // _asm int 3;     /* alternate */ 
	  #endif
	
	Note: These two suggestions will only work if you explicitly load and free the
	DLL in question using LoadLibrary() and FreeLibrary(), respectively.
	
	Problems When Using Program Manager Replacements
	------------------------------------------------
	
	Customers have reported problems with breakpoints when using Program Manager
	replacements such as Norton Desktop for Windows or PC Tools for Windows.
	Reported problems include:
	
	- Missed breakpoints.
	
	- A general protection (GP) fault after pressing the F8, F10, or F5 key to
	  continue when you reach the first breakpoint.
	
	- Loss of breakpoints once set.
	
	Switching the Visual C++ integrated debugger to Hard mode may solve these
	problems, but Microsoft recommends that you not use Program Manager replacements
	while debugging.
	
	Can't Set Breakpoint on Expression that Uses Out-of-Scope Variables
	-------------------------------------------------------------------
	
	Attempting to set a breakpoint on an expression before the variables in the
	expression have come into scope will not work unless specific steps are taken.
	For example, you can't set a breakpoint when an expression has changed (or is
	true) and that expression contains a variable local to a function that has not
	yet been executed. The debugger can't evaluate the expression because the
	variable has not yet been allocated on the stack.
	
	To work around this problem, you can use the context operator to specify the
	scope in which the expression should be evaluated. In the Expression field of
	either CodeView or the IDE debugger, type in the expression using this form:
	
	  {function_name,source_file.cpp,appdll.exe} expression
	
	This tells the debugger to evaluate the expression within the scope of
	function_name. This is precisely what is needed if one or more of the variables
	in the expression do not exist outside of function_name.
	
	NOTE: "Break at Location if Expression has Changed [or is True]" also needs the
	same qualification for the same reasons. For more detailed information on the
	syntax and use of the context operator, please refer to Chapter 4 of the "Visual
	C++ CodeView Debugger User's Guide," or search for "context operator" in
	CodeView's Help menu.
	
	Breakpoints Fail When Multiple Source Files Have the Same Name
	--------------------------------------------------------------
	
	If two or more source files in the project have the same name, breakpoint
	problems are likely to occur. This often occurs in cases where the user-named
	module has the same name as one of the components of a library (debug version)
	they are linking with.
	
	NOTE: This is always the case when an MFC application makes calls to a _USRDLL
	because the MFC code is statically linked into both the .EXE and the .DLL file.
	It is also the case for MFC OLE servers and containers that statically link with
	the MFC libraries. In these cases, the debugger may associate the debug
	information for a source file with the wrong copy of its binary code in memory,
	and the breakpoint subsequently fails.
	
	To work around this problem, try using the context operator described above. In
	most cases, you can use the full paths to the source file and corresponding
	executable module. CodeView is also able to handle these cases with the
	"File.Open Module" menu option. Selecting this option will display a module list
	that includes all copies of the same module. You can then select the one you
	want.
	
	Can't Set Breakpoint in the WndProc of a Child Window in a DLL
	--------------------------------------------------------------
	
	You cannot set a breakpoint in the WndProc of a child window in a DLL when the
	calling program is not the parent. If the calling program creates a child window
	that's defined in a DLL, you should have no problem setting a breakpoint in the
	child window's WndProc because the calling program contains its parent window.
	However, if the calling program didn't create the child window directly, you
	won't be able to set a breakpoint in it. This is actually an IDE debugger issue
	because it is a limitation for Windows debuggers that are themselves
	Windows-based applications. Therefore, the only workaround is to use CodeView
	for Windows, which is a character-based application, not a true Windows-based
	application.
	
	Can't Set Breakpoint in Source File When Corresponding Symbolic Info Isn't
	Loaded into Memory by Debugger
	---------------------------------------------------------------------------------------------------------
	
	You cannot set a breakpoint in any source file when the corresponding symbolic
	information will not be loaded into memory by the debugger. Symptoms include
	messages such as "the breakpoint cannot be set" or a simple, non-informational
	beep. When setting breakpoints before the debuggee has been started, the
	debugger uses a breakpoint list to keep track of how and where to set
	breakpoints. When you actually begin the debugging session, the debugger loads
	the symbolic information for all designated debuggees and then walks through its
	breakpoint list, attempting to set the breakpoints.
	
	However, if one or more of the debuggees have not been designated to the
	debugger, there will be no symbolic information for the debugger to use when
	walking through its breakpoint list. Situations where this is likely to occur
	include:
	
	- Attempts to set breakpoints in a DLL before the call to LoadLibrary.
	
	- Setting a breakpoint in an OLE server before the container has started the
	  server.
	
	- Other similar cases.
	
	NOTE: After you receive notification that these breakpoints cannot be set, the
	breakpoints will usually continue to show up in the breakpoint list, but they
	will have a dash (-) to their left, indicating that they are disabled (have not
	been set).
	
	To prevent this behavior in Visual C++, specify all additional DLLs and OLE
	servers in the Additional DLLs field in the Options.Debug... dialog box. To
	prevent this behavior in in CodeView, use the /L command line switch to notify
	CodeView that you want it to Load symbolic debug information for additional .EXE
	and .DLL files. When this has been done, breakpoints set in code that has not
	yet been loaded into memory will be "virtual" breakpoints. When the code is
	actually loaded into memory by the loader, these become physical breakpoints.
	Ensure that these additional debuggees are not already running when you start
	your debugging session. Failure to follow this rule will likely cause
	breakpoints to be missed.
	
	Breakpoints Missed When DLL Unloaded and Reloaded in Same Debug Session
	-----------------------------------------------------------------------
	
	Neither CodeView for Windows or the IDE debugger will hit breakpoints once a DLL
	has been unloaded and loaded again in the same debugging session. This is
	because the DLL will probably have moved in memory, and neither debugger handles
	the address fix-ups that would be required to reinsert the int 3's at the new
	locations. Unfortunately the bottom line here is that you can't debug a DLL once
	it has been unloaded; you have to exit the debug session, and start over clean.
	
	Breakpoints Missed When DLL Loaded into Memory Before Debug Session Starts
	--------------------------------------------------------------------------
	
	The debugger will sometimes get confused when a DLL has already been loaded into
	memory before the debugging session is started. Although the DLL is the same,
	the debugger sees the second (or more) instance as a separate copy. If you're
	using CodeView, you can easily check to see if this is happening. After setting
	the breakpoints in the DLL and running the calling program until the DLL has
	been loaded, choose the Breakpoints menu option under the Data menu. If the
	breakpoints have VE (virtual; Enabled) before the brace, CodeView for Windows is
	using the wrong instance -- these breakpoints should no longer be virtual
	because the DLL has been loaded into memory, thus allowing virtual breakpoints
	to become physical breakpoints. Unfortunately, the IDE debugger does not provide
	a way to find out if a breakpoint is virtual. The solution is to make sure none
	of your DLLs are in memory before the debugging session starts.
	
	Missed Breakpoints When More than One Copy of DLL on Your Hard Disk
	-------------------------------------------------------------------
	
	Having more than one copy of a DLL on your hard drive, especially if its in your
	Windows directory, can also cause debugger confusion. What can happen is that
	the debugger will load the symbolic information for the DLL specified to it at
	run time (with the /L command line option for CodeView for Windows, or in the
	"Additional DLLs" field in the IDE debugger), but Windows has actually loaded a
	different copy of the DLL itself into memory. Again, if you're using CodeView
	you can check for this by looking to see if the breakpoints have VE before them.
	Because there is no way to force the debugger to load a specific DLL (as opposed
	to loading symbolic information for one with the /L switch), it is a good idea
	to keep only one version of a DLL at a time in your path, current directory, and
	Windows directory.
	
	If you have already done this step and are still having breakpoint problems, be
	sure you have also followed the other steps listed above. Often breakpoint
	problems are the result of several key steps being missed.
	
	Can't Set "Break When Expression Has Changed" Breakpoint on DLL Local Var
	-------------------------------------------------------------------------
	
	Using virtual breakpoints involving expressions poses a special problem. For
	example, setting a "Break When Expression Has Changed" breakpoint on a variable
	local to a DLL function before the call to LoadLibrary would cause the
	breakpoint to be virtual (there are no physical addresses for the DLL in memory
	yet). In these cases, not only must the DLL have been specified to the debugger
	at startup (thus causing its symbolic information to be loaded, as discussed
	above), but the DLL's executable code must also be loaded into memory before
	this kind of breakpoint can be set. This means that the calling application's
	code must be executed to the point after its call to LoadLibrary before the
	debugger will allow this type of breakpoint to be set.
	
	Visual C++ Version 1.0 and 1.5 IDE Debuggers Won't Stop on a Breakpoint
	in an MFC Message Handler for the WM_QUERYENDSESSION Message
	------------------------------------------------------------------------------------------------------------------------------------
	
	Even hard-coding an interrupt 3 (_asm int 3) has no effect. The 32-bit version of
	Visual C++ works as expected, as does CodeView. Therefore, use CodeView instead;
	it will stop as expected.
	
	Can't Set Breakpoints on desired lines if program is built without /Od
	option
	-----------------------------------------------------------------------------
	
	This is by design. Some compiler optimizations concatenate code in the executable
	file. The compiler switch /Od can be used to disable all optimizations. To make
	sure breakpoints can be set, both the /Od and /Zi option switches should be
	specified.
	
	For more information, please see the following article in the Microsoft Knowledge
	Base:
	
	  Q60338 Unable to Set CodeView Breakpoint on Desired Line
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q150936 FIX: VC41 Debugger Fails to Stop on Breakpoints w/ Long Names
	
	Additional query words: eleven causes codeview code view
	
	======================================================================
	Keywords          : kb3rdparty kbtshoot kbCodeView kbDebug kbide kbVC100 kbVC150 kbVC151 kbVC152 kbVC200 kbVC400 kbVC500 kbVC600 
	Technology        : kbVCsearch kbVC400 kbAudDeveloper kbvc150 kbvc100 kbVC500 kbVC600 kbVC151 kbVC200 kbVC32bitSearch kbVC16bitSearch kbVC152 kbVC500Search
	Version           : :1.0,1.5,1.51,1.52,2.0,4.0,5.0,6.0
	Issue type        : kbprb
	
	=============================================================================
	
