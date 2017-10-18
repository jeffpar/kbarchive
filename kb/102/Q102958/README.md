---
layout: page
title: "Q102958: PRB: Passing Modified Environments to Child Processes"
permalink: kb/102/Q102958/
---

## Q102958: PRB: Passing Modified Environments to Child Processes

	Article: Q102958
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your application causes a general protection (GP) fault when starting to run
	under Windows.
	
	CAUSE
	=====
	
	To provide a new environment for Windows-based applications, the LoadModule()
	function must be used. LoadModule() is similar to the MS-DOS Interrupt 21h
	Function 4Bh call, which uses a structure to find the new environment.
	
	The element "envseg" must be set to the selector of a memory block that contains
	a correctly formatted environment block. The loader makes a copy of this memory
	block for the child process inside LoadModule(). This copy is formatted similar
	to an MS-DOS 2.x environment block. It does not have the MS-DOS versions 3.x and
	later additional information, such as the full pathname of the task, attached to
	the end. If startup code (such as the Microsoft C run time earlier than C/C++
	version 7.0) looks for this additional information, a general protection (GP)
	fault will occur. If you are certain that the task started via LoadModule() does
	not make this assumption, then it is safe to use it.
	
	Another bug with LoadModule() is the ownership of the copied memory created by
	the loader. It's set to that of the parent, and therefore it needs to outlive
	the child or its environment block will be freed when the parent terminates.
	
	RESOLUTION
	==========
	
	If it's necessary to provide a modified environment to MS-DOS-based
	applications, the supported technique is to use an MS-DOS batch file. The batch
	file first sets the new environment settings and then starts the MS-DOS-based
	application.
	
	  SET FOOS=BALL
	  DOSAPP
	
	If the application being started is not a Windows-based application, the .BAT
	file technique is the only supportable method.
	
	MORE INFORMATION
	================
	
	Regarding using LoadModule(), below is sample code that passes the current
	task's environment as envseg:
	
	Sample Code
	-----------
	
	   typedef struct tagCMDSHOW
	     {
	       WORD wFirst;
	       WORD wSecond;
	     }
	     CMDSHOW;
	
	     typedef CMDSHOW FAR * LPCMDSHOW ;
	
	     typedef struct tagPARAMETERBLOCK
	     {
	       WORD      wEnvSeg;
	       LPSTR     lpCmdLine;
	       LPCMDSHOW lpCmdShow;
	       DWORD     dwUnused;
	     }
	     PARAMETERBLOCK;
	
	     typedef PARAMETERBLOCK FAR * LPPARAMETERBLOCK ;
	
	     CMDSHOW        CmdShow;
	     PARAMETERBLOCK ParameterBlock;
	     char           szCmdName[] = "TASKMAN.EXE";
	     char           szCmdLine[] = "";
	
	     ParameterBlock.wEnvSeg            = HIWORD(GetDosEnvironment());
	     ParameterBlock.lpCmdLine          = szCmdLine;
	     ParameterBlock.lpCmdShow          = &CmdShow;
	     ParameterBlock.lpCmdShow->wFirst  = 2;
	     ParameterBlock.lpCmdShow->wSecond = SW_SHOW;
	     ParameterBlock.dwUnused           = NULL;
	
	     LoadModule(szCmdName, &ParameterBlock);
	
	Additional query words: 3.10 spawn
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
