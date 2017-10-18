---
layout: page
title: "Q85330: BUG: GetModuleFileName() Returns Relative File Path"
permalink: kb/085/Q85330/
---

## Q85330: BUG: GetModuleFileName() Returns Relative File Path

	Article: Q85330
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When the GetModuleFileName() function returns a reference to a dynamic-link
	library (DLL) file, the reference is relative (not fully qualified) under the
	following circumstances:
	
	- One of the directory references in the MS-DOS PATH environment variable is
	  relative. Assume that the relative directory reference refers to drive X.
	
	- An application is implicitly linked to a DLL. The DLL is installed in the
	  current (default) directory of drive X.
	
	- The application is installed in a directory other than the one in which the
	  DLL is installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in Windows version 3.1. We are
	researching this problem and will post new information here in the Microsoft
	Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	The following describes the situations under which this problem occurs:
	
	- The PATH statement in the AUTOEXEC.BAT file resembles the following:
	
	     PATH=C:\DOS;C:\WINDOWS;D:.;C:\APPS
	
	  The relative reference in this path refers to drive D.
	
	- Run an application from the C:\WINDOWS directory that implicitly links to a
	  DLL that is stored in the current (default) directory of the D drive.
	
	- If any application calls the GetModuleFileName() to retrieve the file name
	  for the DLL, the function returns a relative reference to the file (for
	  example, D:.\DLL.DLL).
	
	Additional query words: buglist3.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
