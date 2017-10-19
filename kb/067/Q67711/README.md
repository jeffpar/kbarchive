---
layout: page
title: "Q67711: Using Windows User, Kernel, and GDI Symbols in CodeView"
permalink: /kb/067/Q67711/
---

## Q67711: Using Windows User, Kernel, and GDI Symbols in CodeView

	Article: Q67711
	Product(s): Microsoft Programming Utilities
	Version(s): 3.05,3.14,4.0,4.01,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for Windows, versions 3.05, 3.14, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CodeView for Windows (CVW) can view symbolic information in Windows's core code
	and can set breakpoints inside Windows functions when the debugging versions of
	USER.EXE, GDI.EXE, KRNL286.EXE, and KRNL386.EXE are installed in your
	development environment.
	
	For Windows 3.0, Section 7.3.2 of the "Microsoft Windows Software Development Kit
	Tools" manual describes how to install the debugging version of Windows. The
	"Microsoft Windows Software Development Kit: Programming Tools" manual presents
	similar information for Windows 3.1 beginning on page 73.
	
	This article discusses using Windows symbols to set breakpoints, list module
	names and functions, and disassemble Windows code.
	
	MORE INFORMATION
	================
	
	For CVW to access Windows symbols, USER.EXE, GDI.EXE, and either KRNL286.EXE or
	KRNL386.EXE must be loaded into CVW as dynamic-link libraries (DLLs). This can
	be done with the /L command-line switch or in response to the DLL prompt when
	CVW starts.
	
	KRNL286.EXE should be used when debugging applications in standard mode and
	KRNL386.EXE should be used when debugging in enhanced mode.
	
	The symbolic information is available only while viewing assembly language
	listings of Windows code. By default, the symbols are not visible. To view the
	symbolic information, perform the following two steps:
	
	1. From the Options menu, choose Source Window.
	
	2. In the Source Window dialog box under the heading Assembly Listing, check the
	  Show Symbolic Name box. If this box is not checked, no symbols appear in any
	  assembly display.
	
	When the Source Window option has been set, you can step into Windows code or
	break into the debugger with the CTRL+ALT+SYS RQ key combination and see what
	function is currently being executed. Note that you will probably break into a
	private function within Windows for which no symbolic information is available.
	
	When the symbols are loaded, you can set breakpoints at a particular function
	name, disassemble a Windows function, list all the modules, and list all
	functions contained in those modules.
	
	Note that whenever you use the name of a Windows function that is defined with
	the PASCAL calling convention, you must type the name in uppercase letters. When
	the name of a Windows function begins with a capital letter, such as the GetDC
	function, the function is defined with the PASCAL calling convention. The name
	of a function defined with the C calling convention, such as the wsprintf
	function, begins with a lowercase letter.
	
	To set a breakpoint, use the BP command or the Watch menu, and specify the symbol
	for the function name.
	
	To disassemble Windows code, use the command
	
	     U [<module>!]<function name>
	
	where <module> is the name of the module you want to disassemble and
	<function name> is the name of a function in that module. The character
	"!" after the module name is required. Disassembly takes place in the source
	window.
	
	In CVW, the X* command lists all available modules. This command lists the names
	of all modules in the application and in any loaded DLLs.
	
	Once a module name is known, the following command lists all the functions within
	that module:
	
	     X? [<module>!]*
	
	Example
	-------
	
	KRNL386.EXE has a module named LDDEBUG. To list the functions in this module,
	enter the following in the command window:
	
	     X? LDDEBUG!*
	
	The output window displays many addresses with no symbols, but the listing
	includes OUTPUTDEBUGSTRING. This shows that the OutputDebugString function is
	implemented in the LDDEBUG module.
	
	If [<module>!] is not specified, the functions in the current module are
	displayed.
	
	Using the X command by itself displays all public symbols available to CVW.
	
	Additional query words: no32bit 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbCodeView kbCodeView305 kbCodeView314 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :3.05,3.14,4.0,4.01,4.1
	
	=============================================================================
	
