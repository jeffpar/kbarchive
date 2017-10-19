---
layout: page
title: "Q149431: PRB: Cannot Find Entry Point (DLL Name) in the DLL"
permalink: /kb/149/Q149431/
---

## Q149431: PRB: Cannot Find Entry Point (DLL Name) in the DLL

	Article: Q149431
	Product(s): Microsoft FoxPro
	Version(s): 3.00 3.00b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you declare a Win32 DLL, the following error occurs:
	
	  Cannot find entry point Mydll in the DLL
	
	Mydll is the name of the DLL being called.
	
	CAUSE
	=====
	
	This error occurs because all 32-Bit DLL procedure names are case sensitive.
	
	RESOLUTION
	==========
	
	To avoid this error, copy the function name, description, and parameters from
	the Win32 API function Help file into your Visual FoxPro program file. This
	documents the function in your code and ensures that the correct case is used.
	
	For example, the GetUserName function retrieves the name of the user currently
	logged onto the system:
	
	     BOOL GetUserName(
	
	        LPTSTR  lpBuffer,// address of name buffer
	        LPDWORD  nSize // address of size of name buffer
	       );
	     Parameters
	
	The lpBuffer parameter points to the buffer receiving the null-terminated string
	containing the user's logon name. If this buffer is not large enough to contain
	the entire user name, the function fails.
	
	The nSize parameter points to a DWORD that, on input, specifies the maximum size,
	in characters, of the buffer specified by the lpBuffer parameter. If this buffer
	is not large enough to contain the entire user name, the function fails. If the
	function succeeds, it will place the number of characters copied to the buffer
	into the DWORD to which nSize points.
	
	To call the GetUserName DLL in Visual FoxPro, use this command:
	
	     DECLARE GetUserName in Win32API ;
	        String @mybuffer, Integer @mybuffersize
	
	If the same DLL was declared as:
	
	     DECLARE GetuserName in Win32API ;
	        String @mybuffer, Integer @mybuffersize
	
	the following error message would display:
	
	  Cannot find entry point GetuserName in the DLL.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP600
	Version           : 3.00 3.00b
	
	=============================================================================
	
