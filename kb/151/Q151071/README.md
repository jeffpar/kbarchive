---
layout: page
title: "Q151071: FIX: Spawn Hangs When Inheriting Pipe Handle"
permalink: kb/151/Q151071/
---

## Q151071: FIX: Spawn Hangs When Inheriting Pipe Handle

	Article: Q151071
	Product(s): Microsoft C Compiler
	Version(s): 4.00 4.10
	Operating System(s): 
	Keyword(s): kbCRT kbVC
	Last Modified: 30-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The C Run-Time (CRT), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 4.0, 4.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When asynchronously spawning a child process that is inheriting a pipe handle,
	the parent process hangs before returning from the spawn call.
	
	CAUSE
	=====
	
	When you starting Visual C++ version 4.0, the startup code attempts to validate
	the inherited handle values by calling GetFileType for each handle. With Windows
	NT, if two write handles for the same object are passed to the child process,
	the GetFileType hangs when called for the second one.
	
	RESOLUTION
	==========
	
	NOTE: In order to use the _pipe function to communicate between a parent and
	child process, each process must have only one handle open on the pipe, and each
	process must be of opposite sense (the parent has a read handle open, the child
	has a write handle open). To implement this behavior, combine the _O_NOINHERIT
	flag using the bit-wise-OR operator (|) into the third argument of the _pipe
	call. Then, use _dup or _dup2 to create an inheritable copy of the pipe handle
	you want to pass to the child. Close the original handle and spawn the child
	process. Immediately upon returning from the spawn call in the parent process,
	close the duplicate handle.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This bug was corrected in Visual C++ 32-bit Edition
	version 4.2.
	
	MORE INFORMATION
	================
	
	Sample Code
	-----------
	
	     // Beeper.Cpp
	     /* Compile options needed: None */ 
	     #include   <stdio.h>
	     #include   <string.h>
	
	     int    main()
	     {
	        int i;
	
	        for (i=0; i<100; ++i)
	        {
	            printf("\nThis is speaker beep number %d... \n\7", i+1);
	        }
	
	        return  0;
	     }
	
	     // BeepFilter.Cpp
	     /* Compile options needed:
	        Execute as: BeepFilter.exe <path>Beeper.exe
	     */ 
	     #include   <windows.h>
	     #include   <process.h>
	     #include   <memory.h>
	     #include   <string.h>
	     #include   <stdio.h>
	     #include   <fcntl.h>
	     #include   <io.h>
	
	     #define    OUT_BUFF_SIZE   512
	     #define    READ_HANDLE       0
	     #define    WRITE_HANDLE      1
	     #define    BEEP_CHAR         7
	
	     char   szBuffer[OUT_BUFF_SIZE];
	
	     int    Filter(char* szBuff, ULONG nSize, int nChar)
	     {
	        char*   szPos = szBuff + nSize -1;
	        char*   szEnd = szPos;
	        int     nRet = nSize;
	
	        while   (szPos > szBuff)
	        {
	            if  (*szPos == nChar)
	            {
	                memmove(szPos, szPos+1, szEnd - szPos);
	                --nRet;
	            }
	
	            --szPos;
	        }
	
	        return  nRet;
	     }
	
	     int    main(int argc, char** argv)
	     {
	        int nExitCode = STILL_ACTIVE;
	
	        if  (argc >= 2)
	        {
	            HANDLE  hProcess;
	            int     hStdOut;
	            int     hStdOutPipe[2];
	
	            // Create the pipe
	            if(_pipe(hStdOutPipe, 512, O_BINARY | O_NOINHERIT) == -1)
	                return  1;
	
	            // Duplicate stdout handle (next line will close original)
	            hStdOut = _dup(_fileno(stdout));
	
	            // Duplicate write end of pipe to stdout handle
	            if  (_dup2(hStdOutPipe[WRITE_HANDLE], _fileno(stdout)) != 0)
	                return  2;
	
	            // Close original write end of pipe
	            close(hStdOutPipe[WRITE_HANDLE]);
	
	            // Spawn process
	            hProcess = (HANDLE)spawnvp(P_NOWAIT, argv[1],
	                        (const char* const*)&argv[1]);
	
	            // Duplicate copy of original stdout back into stdout
	            if  (_dup2(hStdOut, _fileno(stdout)) != 0)
	                return  3;
	
	            // Close duplicate copy of original stdout
	            close(hStdOut);
	
	            if  (hProcess)
	            {
	                int     nOutRead;
	
	                while   (nExitCode == STILL_ACTIVE)
	                {
	                    nOutRead = read(hStdOutPipe[READ_HANDLE],
	                                    szBuffer, OUT_BUFF_SIZE);
	                    if  (nOutRead)
	                    {
	                        nOutRead = Filter(szBuffer, nOutRead, BEEP_CHAR);
	                        fwrite(szBuffer, 1, nOutRead, stdout);
	                    }
	
	                    if  (!GetExitCodeProcess(hProcess,
	                         (unsigned long*)&nExitCode))
	                        return  4;
	                }
	            }
	        }
	
	        printf("\nPress \'ENTER\' key to continue... ");
	        getchar();
	        return  nExitCode;
	     }
	
	Additional query words: kbVC400bug 4.00 4.10 4.20 vcfixlist420 CRTIss
	
	======================================================================
	Keywords          : kbCRT kbVC 
	Technology        : kbVCsearch kbAudDeveloper kbCRT
	Version           : 4.00 4.10
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
