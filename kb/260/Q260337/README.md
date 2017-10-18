---
layout: page
title: "Q260337: HOWTO: Use the Sleep API to Pause Program Execution in a DLL"
permalink: kb/260/Q260337/
---

## Q260337: HOWTO: Use the Sleep API to Pause Program Execution in a DLL

	Article: Q260337
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbAPI kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 18-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Sleep application program interface (API), causes the current program to
	suspend execution for a specified number of milliseconds. This is useful when
	you need to pause code execution in a DLL or multi-threaded DLL.
	
	MORE INFORMATION
	================
	
	Since you can not have an interface in a DLL, you can not use a WAIT or =INKEY
	function. The following code shows you how to declare the Sleep API and then how
	to call the Sleep API.
	
	The number you pass to the API is in milliseconds.
	
	  DECLARE Integer Sleep IN Win32API Integer
	  =Sleep(5000)      && Pause for 5 seconds
	
	NOTE: APIs are case sensitive. So, make sure that you type the command exactly as
	shown.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2000, All Rights Reserved. Contributions by Dean
	Christopher, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbAPI kbCOMt kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
