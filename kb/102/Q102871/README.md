---
layout: page
title: "Q102871: Callback Functions in Multiple Instance Applications"
permalink: /kb/102/Q102871/
---

## Q102871: Callback Functions in Multiple Instance Applications

{% raw %}

	Article: Q102871
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
	
	The following are some requirements for callback functions in multiple instance
	applications when compiling with Microsoft C version 7.0 or C version 8.0 for
	protected-mode-only Win16:
	
	- Callback functions must be branded with the "__export" keyword. The compiler
	  switches -GA -GEf force all far functions in a module to be __export. The
	  optimum method is to add the __export keyword to the particular callback
	  function and not use the -GEf switch. Example:
	
	        BOOL CALLBACK __export CallBackProc
	
	- Callback functions called via MakeProcInstance() must load DS from the value
	  in AX. Use the compiler switch -GA with the -GEa switch to generate prolog
	  code to load DS from the value in AX on all __export functions. The default
	  for -GA is load DS from SS, which is not a valid assumption in callbacks. The
	  code when loaded into memory should have three NOPs instructions at __export
	  function entry points. Check with your favorite debugger that can show
	  mixed/asm view once the module is loaded into memory.
	
	- Callback functions must have an export record in the EXE header. The classic
	  method is to list the function in the EXPORTS section of the module's .DEF
	  file. The callback's module can be built with the - GA -GEe switches to place
	  an export record in the .OBJ at compile time for all __export functions.
	
	- Callback functions must assume SS != DS, DS not loaded on function entry.
	  Compile with -Aw memory model customizer to have correct code generated.
	
	- Callback functions must not call C Run-time library code contained in the
	  application (xLIBCyW.LIB) libraries. They assume SS == DS.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	

{% endraw %}
