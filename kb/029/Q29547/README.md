---
layout: page
title: "Q29547: DOCERR: Initiating DDE Conversation w/ Instance of Win Excel"
permalink: /kb/029/Q29547/
---

## Q29547: DOCERR: Initiating DDE Conversation w/ Instance of Win Excel

	Article: Q29547
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The documentation for the EXEC() macro on page 70 of the "Microsoft Excel
	Function Reference" manual for version 3.0 and on page 138 of the "Microsoft
	Excel Function Reference" manual for version 4.0 incorrectly refers to its
	return value as "the Microsoft Windows task ID number of the started program."
	However, it is not the value returned by the Windows KERNEL routine
	GetCurrentTask(). EXEC() returns the instance handle to the EXEC()'d
	application.
	
	MORE INFORMATION
	================
	
	Windows and Excel do not provide an easy way to find out which instance of Excel
	called the application. However, the correct value can be obtained.
	
	The following is a sample macro that uses the REGISTER and CALL functions to
	obtain the instance handle to the version of Excel that is running. That
	information then can be passed to the application inside the EXEC call. However,
	the value in hInstance must be appended as a string for the EXEC call.
	
	The following is the text version of the macro sheet:
	
	  -------------------------------------------------------------
	               A                          |        B
	  This is an example of how to obtain the |
	  instance and then pass that value to the|
	  EXEC'd application:                     |
	                                          |
	  =STEP()                                 |
	  Get instance handle of current window.  |
	  =REGISTER("USER","GetFocus","H")"       |
	  =CALL(A7)                               | <== hWnd
	         -6                               | <==GWW_HINSTANCE
	  =REGISTER("user","GetWindowWord","HHI")"| <==GetInstance
	  =CALL(GetInstance,hWnd,GWW_HINSTANCE)"  | <== hInstance
	  =RETURN()                               |
	  Exec("YourApp.exe  hInstance",1)"       |
	  -------------------------------------------------------------
	
	NOTE: For Microsoft Excel versions 2.x, the corresponding documentation for the
	EXEC() macro is on page 275 of the "Microsoft Excel Functions and Macros"
	manual.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
