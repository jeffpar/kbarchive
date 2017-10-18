---
layout: page
title: "Q92988: Setting a Breakpoint on a Windows API Function"
permalink: kb/092/Q92988/
---

## Q92988: Setting a Breakpoint on a Windows API Function

	Article: Q92988
	Product(s): Microsoft Programming Utilities
	Version(s): 4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	During the process of debugging an application with CodeView for Windows,
	it is sometimes helpful to set a breakpoint on a Windows API. The text
	below details the required steps to set a breakpoint:
	
	1. Run the N2D.BAT file in the BIN directory (by default, WINDEV\BIN or
	  C700\BIN) to activate the Windows debugging kernel.
	
	2. Run the CVPACK utility on the GDI.EXE, KRNL286.EXE, KRNL386.EXE, and USER.EXE
	  files in the WINDOWS\SYSTEM directory. Running the utility allows CVW to
	  access the public symbols in these files.
	
	3. Start Windows and load CodeView for Windows (CVW).
	
	4. Load the application into CVW.
	
	5. In the CVW Command window, enter the following command:
	
	  " bp <FUNCTION_NAME> " (without the quotation marks)
	
	  where <FUNCTION_NAME> is the name of the function to break on. For
	  example, bp GETMESSAGE.
	
	  NOTE: The name of the function must be in uppercase letters because each
	  Windows API is called using the Pascal calling convention. Also, CVW version
	  4.0 hangs Windows if you set a breakpoint on an API function that CVW calls.
	  This problem is fixed in CVW version 4.01.
	
	6. When CVW halts execution, access the Calls menu. Function names in the menu
	  are ordered from the function called least recently at the bottom of the menu
	  to the function with the breakpoint at the top of the menu. Therefore, the
	  second function from the top of the menu is the function that called the API
	  function on which the breakpoint is set.
	
	If you are using Windows for Workgroups 3.11, the debug kernel files that
	Visual C++ 1.5 comes with do not have symbols. Because USER, GDI, and
	KRNL386 have not changed since Windows 3.1, you should use the Windows 3.1
	versions of these files. Visual C++ 1.0 has the Windows 3.1 debug kernel.
	
	Additional query words: kbinf 4.00 4.10 no32bit
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :4.0,4.01,4.1
	
	=============================================================================
	
