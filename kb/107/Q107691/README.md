---
layout: page
title: "Q107691: Using DebugOutput to Debug a Windows-Based Application"
permalink: kb/107/Q107691/
---

## Q107691: Using DebugOutput to Debug a Windows-Based Application

	Article: Q107691
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The DebugOutput() API has been added to Windows version 3.1. A Windows- based
	application can use this function to send a message to a debugging terminal
	connected to the COM1 port or to a window by using DBWIN. In the 16-bit Windows
	SDK, DBWIN is a sample application installed in the samples directory (by
	default, C:\WINDEV\SAMPLES\DBWIN directory). DBWIN is also a sample in Visual
	C++ for Windows. In the Win32 SDK for Windows NT 3.5 and Windows 95, DBWIN is
	located in MSTOOLS\BIN.
	
	NOTE: The DebugOutput() function works only under the debug version of Windows.
	However, there are certain issues that must be considered while using this
	function.
	
	MORE INFORMATION
	================
	
	1. DebugOutput() is present only in the debugging version of Windows. The retail
	  version of Windows contains a stub function at this entry point. While an
	  application won't fail if it calls this stub function, the stub won't produce
	  any output on the debug terminal. Before starting the debug version of
	  Windows and using DebugOutput(), certain issues must be considered. For
	  example, add the following lines to the [Windows] section of the WIN.INI
	  file
	
	     DebugOptions=0X0000
	     DebugFilter=0X0000
	     DebugTaskFilter=                  ; leave it blank
	
	  and add the following new section to your SYSTEM.INI file:
	
	     [Debug]
	     OutputTo=NUL
	
	  The setting for the OutputTo entry in the SYSTEM.INI file disables the default
	  debug kernel output to the AUX device (which maps to the COM1 port). This
	  setting is recommended because the DBWIN Windows sample application can be
	  used to redirect output to either COM1 or COM2.
	
	  The setting for the DebugOptions entry corresponds to the value for the
	  dwOptions member of the WINDEBUGINFO structure in the Windows SDK. The
	  setting for the DebugFilter entry corresponds to the value for the dwFilter
	  member of WINDEBUGINFO. To determine the proper hexadecimal value for a
	  setting, add the values of the options to be set. For example, to specify
	  DBO_CHECKHEAP and DBO_FREEFILL, the setting for the DebugOptions entry would
	  be 0x0021 (0x0001 plus 0x0020). For information about the possible values for
	  these options and a full description of the WINDEBUGINFO structure, see the
	  Microsoft Windows SDK "Programmer's Reference, Volume 3: Messages,
	  Structures, and Macros."
	
	2. The DebugOutput() function is prototyped in the WINDOWS.H header file
	  provided with the Windows SDK; however, it is not listed in the LIBW.LIB
	  import library. Therefore, a Windows-based application that uses the
	  DebugOutput function must import the function in the application's module
	  definition (DEF) file. Add the following lines to the DEF file to import the
	  DebugOutput function:
	
	     IMPORTS
	        _DebugOutput = KERNEL._DebugOutput
	
	  The leading underscore in the function name and the capitalization of the name
	  are important because the DebugOutput function is declared using the C
	  calling convention.
	
	3. The Windows SDK documentation states that the DBF_TRACE flag can be used to
	  supply trace information when an error occurs. This information may be useful
	  in debugging an application. However, the DBF_TRACE flag does not work by
	  itself; this flag must be OR'ed with another flag, typically the
	  DBF_APPLICATION flag. For example, the following works:
	
	     DebugOutput( DBF_TRACE | DBF_APPLICATION, "This is a trace
	     message.");
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
