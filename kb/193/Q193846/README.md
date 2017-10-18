---
layout: page
title: "Q193846: HOWTO: Modify the Process Priority of a Shelled Application"
permalink: kb/193/Q193846/
---

## Q193846: HOWTO: Modify the Process Priority of a Shelled Application

	Article: Q193846
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	A process' priority determines how its execution is scheduled by the Win32
	kernel. Processes with a higher priority execute more quickly than processes
	with a lower priority. This article describes how to modify the Process priority
	of a shelled application.
	
	MORE INFORMATION
	================
	
	Win32 supports the following four priority classes:
	
	- Idle
	- Normal
	- High
	- Realtime
	
	Idle is the correct priority for system-monitoring applications or screen
	savers.
	
	Normal priority class is the default, indicating a process with no special
	scheduling needs.
	
	High priority indicates a process that performs time-critical tasks requiring
	immediate execution for it to run correctly. The threads of a high-priority
	class process preempt the threads of normal or idle priority class processes. An
	example is the Windows Task List, which must respond quickly when called by the
	user, regardless of the load on the operating system. Use extreme care when
	using the high-priority class, because a high- priority class CPU-bound
	application can use almost all available cycles.
	
	The Realtime priority indicates a process that has the highest possible priority.
	The threads of a real-time priority class process preempt the threads of all
	other processes, including operating system processes performing important
	tasks. For example, a real-time process that executes for more than a very brief
	interval can cause disk caches not to flush or cause the mouse to be
	unresponsive. This priority should almost never be used.
	
	The process' priority is set by assigning one of the parameters of the
	CreateProcess API call.
	
	The following example demonstrates running the Windows NOTEPAD application under
	Windows NT using an idle priority. The process priority is controlled by the
	'dwCreationFlags' variable passed to CreateProcess(). DEFINEs for the four
	supported priority classes are listed at the top of the sample program.
	
	Once Notepad.exe is running, to examine the priority, start the Windows NT Task
	Manager, select the Processes tab, right-click Notepad.exe and select 'Set
	Priority' from the pop-up menu.
	
	The fully qualified pathname to Notepad.exe may need modification in the
	assignment statement of variable 'File2Run'.
	
	Sample Code
	-----------
	
	  
	
	     #DEFINE NORMAL_PRIORITY_CLASS 32
	     #DEFINE IDLE_PRIORITY_CLASS 64
	     #DEFINE HIGH_PRIORITY_CLASS 128
	     #DEFINE REALTIME_PRIORITY_CLASS 1600
	
	     DECLARE INTEGER CreateProcess IN kernel32.DLL ;
	        INTEGER lpApplicationName, ;
	        STRING lpCommandLine, ;
	        INTEGER lpProcessAttributes, ;
	        INTEGER lpThreadAttributes, ;
	        INTEGER bInheritHandles, ;
	        INTEGER dwCreationFlags, ;
	        INTEGER lpEnvironment, ;
	        INTEGER lpCurrentDirectory, ;
	        STRING @lpStartupInfo, ;
	        STRING @lpProcessInformation
	
	     DECLARE INTEGER GetLastError IN kernel32.DLL
	
	     * Startup info is 68 bytes, of which we need to
	     * initially populate the 'cb' or Count of Bytes member
	     * with the overall length of the structure.
	     * The remainder should be 0-filled.
	     START = long2str(68) + REPLICATE(CHR(0), 64)
	
	     * PROCESS_INFORMATION structure is 4 longs,
	     * or 4*4 bytes = 16 bytes, which we'll initially zero.
	     process_info = REPLICATE(CHR(0), 16)
	
	     * Start a copy of NOTEPAD (EXE name must be null-terminated)
	     File2Run = "C:\WINNT\NOTEPAD.EXE" + CHR(0)
	
	     * Call CreateProcess, obtain a process handle. Treat the
	     * application to run as the 'command line' argument, accept
	     * all other defaults. Important to pass the start and
	     * process_info by reference.
	     RetCode = CreateProcess(0, File2Run, 0, 0, 1, ;
	        IDLE_PRIORITY_CLASS, 0, 0, @START, @process_info)
	
	     * Unable to run, exit now.
	     IF RetCode = 0
	        =MESSAGEBOX("Error occurred. Error code: ", GetLastError())
	        RETURN
	     ENDIF
	
	     ********************
	     FUNCTION long2str
	     ********************
	     * passed : 32-bit non-negative numeric value (m.longval)
	     * returns : ascii character representation of passed
	     *    value in low-high format (m.retstr)
	     * example :
	     *   m.long = 999999
	     *   m.longstr = long2str(m.long)
	     PARAMETERS m.longval
	
	     PRIVATE i, m.retstr
	
	     m.retstr = ""
	     FOR i = 24 TO 0 STEP -8
	        m.retstr = CHR(INT(m.longval/(2^i))) + m.retstr
	        m.longval = MOD(m.longval, (2^i))
	     NEXT
	     RETURN m.retstr
	
	REFERENCES
	==========
	
	"Advanced Windows", Jeffrey Richter, Microsoft Press, pages 92-103, Third
	Edition 1997, ISBN: 1-57231-548-2
	
	Additional query words: kbVFp600 kbAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	
