---
layout: page
title: "Q105116: RunWait.exe - DLL Provides Synchronous Spawn Function"
permalink: kb/105/Q105116/
---

## Q105116: RunWait.exe - DLL Provides Synchronous Spawn Function

	Article: Q105116
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kb16bitonly
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The sample RunWait.exe demonstrates how to use TOOLHELP.DLL to provide a
	dynamic-link library (DLL) function that spawns applications and waits for their
	termination before returning from the function call. The sample is compatible
	with Visual Basic (VB) and Windows 3.0. The sample loads a hidden task at DLL
	startup time to own the Toolhelp callback.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	RunWait.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The following is the VB function declaration (this must be on a single line in
	VB):
	
	  Declare Function SpawnAndWait& Lib "RUNLIB.DLL" (ByVal parenthwnd%,
	  ByVal lpszOp$, ByVal lpszFile$, ByVal lpszParams$, ByVal lpszDir$,
	  ByVal nShow%)
	
	  DWORD SpawnAndWait(hwnd, lpszOp, lpszFile, lpszParams, lpszDir, fsShowCmd)
	
	  HWND   hwnd        /* Handle of parent window                          */ 
	  LPCSTR lpszOp      /* Address of string for operation to perform       */ 
	  LPCSTR lpszFile    /* Address of string for filename                   */ 
	  LPCSTR lpszParams  /* Address of string for executable-file parameters */ 
	  LPSCTR lpszDir     /* Address of string for default directory          */ 
	  int    fsCmdShow   /* Whether file is shown when opened                */ 
	
	The SpawnAndWait function executes and waits for termination of the specified
	application or associated file.
	
	Parameter  Description
	----------------------
	
	hwnd       Identifies the parent window. This window receives any message
	          boxes an application produces (for example, for error
	          reporting).
	
	lpszOp     Points to a null-terminated string specifying the operation to
	          perform. This string can be "open" or "print". If this parameter
	          is NULL, "open" is the default value.
	
	lpszFile   Points to a null-terminated string specifying the file to
	          open.
	
	lpszParams Points to a null-terminated string specifying parameters
	          NULL; "open" is the default value. Passed to the application
	          when the lpszFile parameter specifies an executable file. If
	          lpszFile points to a string specifying a document file, this
	          parameter is NULL.
	
	lpszDir    Points to a null-terminated string specifying the default
	          directory.
	
	fsShowCmd  Specifies whether the application window is to be shown when
	          the application is opened. See ShowWindow for valid values.
	
	Returns
	-------
	
	HIWORD == hInstance of started application. Values less than 32 are errors
	         returned from ShellExecute. 0xFFFF is a general error.
	
	LOWORD == Return code of spawned application. 0xFFFF is a general error.
	
	Comments
	--------
	
	The file specified by the lpszFile parameter can be a document file or an
	executable file. If it is a document file, this function opens or prints it,
	depending on the value of the lpszOp parameter. If it is an executable file,
	this function opens it, even if the string "print" is pointed to by lpszOp.
	
	WARNING: This function will not wait on applications such as Word and Excel that
	respond to the DDE broadcast made by ShellExecute or the second instance of
	multiple data applications.
	
	WARNING: This function supports only one block at a time per task. Calling tasks
	should not call this function when it has a prior pending SpawnAndWait call.
	
	Sample Code
	-----------
	
	  DWORD SpawnAndWaitIndirect(lpSpawnWait)
	
	  LPSPAWNWAIT lpSpawnWait /* Far reference to SPAWNWAIT structure
	
	  typedef struct tagSPAWNWAIT
	  {
	     HWND   hwnd;
	     LPCSTR lpszOp;
	     LPCSTR lpszFile;
	     LPCSTR lpszParams;
	     LPCSTR lpszDir;
	     int    fsShowCmd;
	     LPMSGPROC lpmsgproc;
	  } SPAWNWAIT;
	
	  Member       Description
	
	  hwnd         Handle of parent window
	  lpszOp       Address of string for operation to perform
	  lpszFile     Address of string for filename
	  lpszParams   Address of string for executable-file parameters
	  lpszDir      Address of string for default directory
	  fsShowCmd    Whether file is shown when opened
	  lpmsgproc    Address of application provided MessagePump (must load
	               DS on entry)
	
	  void CALLBACK MessagePump(lpmsg)
	
	  LPSMG lpsg   /* Long pointer to MSG to process
	
	Message Proc is a place holder for an application-provided callback function
	(which must load DS on entry) that will process messages retrieved in RunLib's
	PeekMessage loop. It allows the calling application to do modeless dialog box
	and accelerator message processing.
	
	lpmsgproc should be set to NULL if it is not used. RunLib will do a default
	TranslateMessage/DispatchMessage instead.
	
	The following is an example of a message processing function for a MDI
	application:
	
	  void CALLBACK MyMessagePump(LPMSG lpmsg)
	  {
	     if(!TranslateMDISysAccel(hClient, lpsmg) &&
	        !TranslateAccelerator(hFram, hAccel, lpsmg))
	        {
	           TranslateMessage(lpsmg);
	           DispatchMessage(lpmsg);
	        }
	  }
	
	Returns
	-------
	
	HIWORD == hInstance of started application. Values less than 32 are errors
	         returned from ShellExecute. 0xFFFF is a general error.
	
	LOWORD == Return code of spawned application. 0xFFFF is a general
	         error.
	
	Comments
	--------
	
	The file specified by the lpszFile parameter can be a document file or an
	executable file. If it is a document file, this function opens or prints it,
	depending on the value of the lpszOp parameter. If it is an executable file,
	this function opens it, even if the string "print" is pointed to by lpszOp.
	
	WARNING: This function will not wait on applications such as Word and Excel that
	respond to the DDE broadcast made by ShellExecute or the second instance of
	multiple data applications.
	
	WARNING: This function supports only one block at a time per task. Calling tasks
	should not call this function when it has a prior pending SpawnAndWait call.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
