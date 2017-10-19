---
layout: page
title: "Q86477: How to Specify a Full Path in the ExecProgram Macro"
permalink: /kb/086/Q86477/
---

## Q86477: How to Specify a Full Path in the ExecProgram Macro

	Article: Q86477
	Product(s): Miscellaneous Software Development Kits
	Version(s): 3.0,3.1,3.51,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) for Windows versions 3.0, 3.1 
	- Microsoft Win32 Software Development Kit (SDK), versions 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows help files (.HLP files) can be written such that selecting a designated
	topic executes a Windows-based application. This is done with the ExecProgram()
	macro. If the desired application does not reside in the same directory as the
	.HLP file, a full path to the .EXE must be specified. An invalid path produces
	an error.
	
	SYMPTOMS
	========
	
	Attempting to execute an application with a full path causes Windows to display
	the following Help message box:
	
	  Unable to Run Specified File.
	
	CAUSE
	=====
	
	A common mistake is to incorrectly specify the subdirectory delimiters in the
	path description.
	
	RESOLUTION
	==========
	
	The Windows Help Compiler can recognize escape sequences expressed using the
	backslash (\) character. When using the ExecProgram() macro, four backslashes
	(\\\\) separate each directory in a full path description:
	
	  ExecProgram( "c:\\\\winapps\\\\excel\\\\excel", 0 )
	
	With HC31.EXE version 3.10.505, you would use only two backslashes:
	
	  ExecProgram( "c:\\winapps\\excel\\excel", 0 )
	
	Additional query words: 3.00 3.10 4.00 95
	
	======================================================================
	Keywords          :  
	Technology        : kbWin32SDKSearch kbAudDeveloper kbWin3xSearch kbSDKSearch kbWin32sSearch kbWin32SDK400 kbWin32SDK351 kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : :3.0,3.1,3.51,4.0
	
	=============================================================================
	
