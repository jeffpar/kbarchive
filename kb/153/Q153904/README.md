---
layout: page
title: "Q153904: How To Perform Background Processing in FoxPro"
permalink: /kb/153/Q153904/
---

## Q153904: How To Perform Background Processing in FoxPro

	Article: Q153904
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp600
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to create a process to run another program in a
	background of FoxPro using API routines and how to use some API calls related to
	a process. The tasks described in this article are available as commands in
	Microsoft FoxPro versions 3.0 and 3.0b.
	
	NOTE: The following sample uses native Win32 applications.
	
	MORE INFORMATION
	================
	
	A Windows-based application that performs a long background task, such as
	scanning serial ports, can be designed using Win32 API calls.
	
	In FoxPro, the procedure code could be called in a timer method to facilitate
	checking for characters at semi-regular intervals. However, if large amounts of
	data are expected to be received from the serial port, this technique will
	reduce the chance of over-running the input buffer. This article discusses the
	code required to implement such a task in a separate module that can be executed
	in a background.
	
	The CreateProcess function is used to run a new program by creating a process. In
	addition to creating a process, CreateProcess also creates a thread object (a
	primary thread).
	
	The RUN command in FoxPro can be used to run a specified external MS-DOS program
	in a window. While the MS-DOS program or command is running, the title of the
	window is FoxPro Run Command. In FoxPro for Windows, after the external program
	or command is finished executing, the window title changes to Inactive FoxPro
	Run Command. The FoxPro for Windows menu system is disabled until this window is
	closed. In Visual FoxPro, the FoxPro Run Command window is closed after the
	external program or command is finished executing. In other words, FoxPro
	application does not have the control until the external program is finished
	executing.
	
	By using API calls, it is possible to run the specified external windows
	application in a background while the users have full control over their own
	FoxPro application.
	
	In this article, the customized API routine was written using Microsoft Visual
	C++ 4.0 to create a process and a thread.
	
	The following sample program illustrates the contents of the .DLL file written in
	Microsoft Visual C++ 4.0. It shows a way to create a process through the Win32
	SDK.
	
	NOTE: This sample program illustrates many Microsoft Visual C++ commands. The use
	of these commands is beyond the scope of Microsoft FoxPro Product Support. Users
	with substantial experience using API routines should be able to write the
	following sample .DLL file. For this sample .DLL file to work, you need a .DEF
	file to export the disable function.
	
	Sample Program (DLL - to initiate a background program)
	-------------------------------------------------------
	
	     #include <windows.h>
	     #include <stdio.h>
	
	     HANDLE hInst;
	     HWND   hDlg;
	     HANDLE hHeap;
	
	     BOOL APIENTRY DllMain(HANDLE hInst, DWORD ul_reason_being_called, LPVOID
	     lpReserved)
	     {
	         return 1;
	             UNREFERENCED_PARAMETER(hInst);
	             UNREFERENCED_PARAMETER(ul_reason_being_called);
	             UNREFERENCED_PARAMETER(lpReserved);
	     }
	
	     double APIENTRY backgrnd(void)
	     {
	        PROCESS_INFORMATION pInfo;
	        STARTUPINFO         sInfo;
	        DWORD               exitCode;
	
	        sInfo.cb              = sizeof(STARTUPINFO);
	        sInfo.lpReserved      = NULL;
	        sInfo.lpReserved2     = NULL;
	        sInfo.cbReserved2     = 0;
	        sInfo.lpDesktop       = NULL;
	        sInfo.lpTitle         = NULL;
	        sInfo.dwFlags         = 0;
	        sInfo.dwX             = 0;
	        sInfo.dwY             = 0;
	        sInfo.dwFillAttribute = 0;
	        sInfo.wShowWindow     = SW_SHOW;
	        // The path to notepad.exe in this example is for
	        // Windows NT. Your path may be different.
	        if (!CreateProcess("c:\\winnt351\\system32\\notepad.exe",
	                 NULL,
	                           NULL,
	                           NULL,
	                           FALSE,
	                           0,
	                           NULL,
	                           NULL,
	                           &sInfo,
	                           &pInfo)) {
	           printf("ERROR: Cannot launch child process\n");
	           exit(1);
	        }
	
	        // Give the process time to execute and finish
	        WaitForSingleObject(pInfo.hProcess, 50L);
	
	      return pInfo.dwProcessId;
	     }
	
	Sample Program (DLL - to terminate the background program)
	----------------------------------------------------------
	
	     #include <windows.h>
	     #include <stdio.h>
	
	     HANDLE hInst;
	     HWND   hDlg;
	     HANDLE hHeap;
	
	     BOOL APIENTRY DllMain(HANDLE hInst, DWORD ul_reason_being_called, LPVOID
	     lpReserved)
	     {
	         return 1;
	             UNREFERENCED_PARAMETER(hInst);
	             UNREFERENCED_PARAMETER(ul_reason_being_called);
	             UNREFERENCED_PARAMETER(lpReserved);
	     }
	
	     void APIENTRY terminat(double processid)
	     {
	        //PROCESS_INFORMATION pInfo;
	        DWORD               exitCode;
	
	        HANDLE fhandle;
	        fhandle = OpenProcess(PROCESS_ALL_ACCESS, TRUE, (DWORD)processid);
	
	        if (GetExitCodeProcess(fhandle, &exitCode))
	        {
	           switch(exitCode)
	           {
	              case STILL_ACTIVE: printf("Process is still active\n");
	                                 break;
	              default:           printf("Exit code = %d\n", exitCode);
	                                 break;
	           }
	        }
	        else {
	           printf("GetExitCodeProcess() failed\n");
	        }
	
	        BOOL TermSucc;
	
	        TermSucc= TerminateProcess(fhandle, exitCode);
	           if (TermSucc == FALSE)
	              printf("TerminateProcess");
	           else
	              printf("Process terminated successfully!\n");
	
	     }
	
	Sample Program (FoxPro)
	-----------------------
	
	     PUBLIC DOUBLE phandle
	     phandle = 0
	
	     DECLARE DOUBLE backgrnd IN c:\BACKGRND.DLL
	     phandle = backgrnd()
	
	     WAIT WINDOW("Note Pad is now Running")
	
	     DECLARE terminat IN c:\TERMINAT.DLL DOUBLE
	     FoxHWND = terminat(phandle)
	
	Sample Program (Notes)
	----------------------
	
	- To create a .DLL file in Visual C++, please refer to a Help file in Microsoft
	  Visual C++ 4.0.
	
	- Make a note that the Backgrnd.dll and Terminat.dll should be in the same
	  directory as your project, or should be in the path of the Windows Win32
	  directory.
	
	The API function Backgrnd returns a process id. This process id should be used as
	a parameter to call terminate API function which will terminate the process
	based on the given id.
	
	Furthermore, the backgrnd.dll creates the process in the separate address space
	with an unique process id and handle. After the process is created, you have
	access to your FoxPro program (your FoxPro and the C program (DLL) will run
	simultaneously). Once the process is created with the primary thread, the C
	program will run separately from the FoxPro application until you specifically
	ask it to terminate. A good way to terminate the process is when the user quits
	the FoxPro program.
	
	You should implement the terminat.dll code inside the last event of your project
	such as a Destroy event.
	
	This sample code is designed to work with only one process and will only work
	under Windows NT or Windows 95.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	
