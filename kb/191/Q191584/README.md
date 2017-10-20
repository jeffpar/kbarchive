---
layout: page
title: "Q191584: HOWTO: Determine When a 32-bit Process has Completed"
permalink: /kb/191/Q191584/
---

## Q191584: HOWTO: Determine When a 32-bit Process has Completed

{% raw %}

	Article: Q191584
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Executing the RUN/! command in a Visual FoxPro program starts another executable
	program asynchronously and returns control to the Visual FoxPro application.
	This shelled program continues to run independently of the parent Visual FoxPro
	application until the user closes it.
	
	However, if your Visual FoxPro application needs to wait for the child process to
	terminate, you can use the Win32 CreateProcess and WaitForSingleObject API
	functions. CreateProcess starts the child process and populates a
	PROCESS_INFORMATION structure with its process handle. WaitForSingleObject
	accepts this process handle as an argument, and puts the processor in an
	extremely efficient wait state until the child process terminates.
	
	MORE INFORMATION
	================
	
	Below are the steps necessary to build a Visual FoxPro program that uses the
	CreateProcess() function to execute the Windows Notepad (Notepad.exe)
	application. This code demonstrates how to use the Windows API CreateProcess()
	and WaitForSingleObject() functions to wait until a shelled process terminates
	before resuming execution.
	
	Please note that this code is somewhat complex, and engineers may require some
	time to familiarize themselves with the contents and concepts of the example.
	
	Step-by-Step Example
	--------------------
	
	1. Create a program from the following code (the path to Notepad.exe may need to
	  be modified to reflect your system configuration):
	
	        #DEFINE NORMAL_PRIORITY_CLASS 32
	        #DEFINE IDLE_PRIORITY_CLASS 64
	        #DEFINE HIGH_PRIORITY_CLASS 128
	        #DEFINE REALTIME_PRIORITY_CLASS 1600
	
	        * Return code from WaitForSingleObject() if
	        * it timed out.
	        #DEFINE WAIT_TIMEOUT 0x00000102
	
	        * This controls how long, in milli secconds, WaitForSingleObject()
	        * waits before it times out. Change this to suit your preferences.
	        #DEFINE WAIT_INTERVAL 200
	
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
	
	        DECLARE INTEGER WaitForSingleObject IN kernel32.DLL ;
	           INTEGER hHandle, INTEGER dwMilliseconds
	
	        DECLARE INTEGER CloseHandle IN kernel32.DLL ;
	           INTEGER hObject
	
	        DECLARE INTEGER GetLastError IN kernel32.DLL
	
	        * STARTUPINFO is 68 bytes, of which we need to
	        * initially populate the 'cb' or Count of Bytes member
	        * with the overall length of the structure.
	        * The remainder should be 0-filled
	        start = long2str(68) + REPLICATE(CHR(0), 64)
	
	        * PROCESS_INFORMATION structure is 4 longs,
	        * or 4*4 bytes = 16 bytes, which we'll fill with nulls.
	        process_info = REPLICATE(CHR(0), 16)
	
	        * Start a copy of NOTEPAD (EXE name must be null-terminated)
	        File2Run = "C:\WINNT\NOTEPAD.EXE" + CHR(0)
	
	        * Call CreateProcess, obtain a process handle. Treat the
	        * application to run as the 'command line' argument, accept
	        * all other defaults. Important to pass the start and
	        * process_info by reference.
	        RetCode = CreateProcess(0, File2Run, 0, 0, 1, ;
	           NORMAL_PRIORITY_CLASS, 0, 0, @start, @process_info)
	
	        * Unable to run, exit now.
	        IF RetCode = 0
	           =MESSAGEBOX("Error occurred. Error code: ", GetLastError())
	           RETURN
	        ENDIF
	
	        * Extract the process handle from the
	        * PROCESS_INFORMATION structure.
	        hProcess = str2long(SUBSTR(process_info, 1, 4))
	
	        DO WHILE .T.
	        * Use timeout of TIMEOUT_INTERVAL msec so the display
	        * will be updated. Otherwise, the VFP window never repaints until
	        * the loop is exited.
	        IF WaitForSingleObject(hProcess, WAIT_INTERVAL) != WAIT_TIMEOUT
	             EXIT
	           ELSE
	              DOEVENTS
	           ENDIF
	        ENDDO
	
	        * Show a message box when we're done.
	        =MESSAGEBOX ("Process completed")
	
	        * Close the process handle afterwards.
	        RetCode = CloseHandle(hProcess)
	        RETURN
	
	        ********************
	        FUNCTION long2str
	        ********************
	        * Passed : 32-bit non-negative numeric value (m.longval)
	        * Returns : ASCII character representation of passed
	        *           value in low-high format (m.retstr)
	        * Example :
	        *    m.long = 999999
	        *    m.longstr = long2str(m.long)
	
	        PARAMETERS m.longval
	
	        PRIVATE i, m.retstr
	
	        m.retstr = ""
	        FOR i = 24 TO 0 STEP -8
	           m.retstr = CHR(INT(m.longval/(2^i))) + m.retstr
	           m.longval = MOD(m.longval, (2^i))
	        NEXT
	        RETURN m.retstr
	
	        *******************
	        FUNCTION str2long
	        *******************
	        * Passed:  4-byte character string (m.longstr)
	        *   in low-high ASCII format
	        * returns:  long integer value
	        * example:
	        *   m.longstr = "1111"
	        *   m.longval = str2long(m.longstr)
	
	        PARAMETERS m.longstr
	
	        PRIVATE i, m.retval
	
	        m.retval = 0
	        FOR i = 0 TO 24 STEP 8
	           m.retval = m.retval + (ASC(m.longstr) * (2^i))
	           m.longstr = RIGHT(m.longstr, LEN(m.longstr) - 1)
	        NEXT
	        RETURN m.retval
	
	2. Run the program by pressing CTRL+E, or clicking the Run control on the
	  toolbar.
	
	3. A copy of Notepad should be started.
	
	4. Close the copy of Notepad. In the Visual FoxPro application, a message box
	  containing the text "Processing completed" appears.
	
	REFERENCES
	==========
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q129796 HOWTO: 32-Bit App Can Determine When a Shelled Process Ends
	
	
	Additional query words: CreateProcess WaitForSingleObject PROCESS_INFORMATION STARTUPINFO RUN ! shelled child process kbVFp300b kbVFp500 kbVFp500a kbVFp600 kbAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
