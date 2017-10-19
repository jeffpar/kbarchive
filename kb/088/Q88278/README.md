---
layout: page
title: "Q88278: Creating Import Libraries with the &#95;&#95;export Modifier"
permalink: /kb/088/Q88278/
---

## Q88278: Creating Import Libraries with the &#95;&#95;export Modifier

	Article: Q88278
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The __export function modifier, widely advertised in version 7.0 of the
	Microsoft C/C++ Optimizing Compiler, can be used in conjunction with the /GD
	option switch to export a function from a dynamic-link library (DLL) for the
	Microsoft Windows operating system without listing the name of the function in
	the EXPORTS section of the DLL's module definition (.DEF) file.
	
	To create an import library for a DLL that uses this technique, the filename of
	the DLL must be listed as a parameter to the IMPLIB function. Otherwise, IMPLIB
	does not place the functions marked with __export into the import library.
	
	For more information on exporting functions, query on the following words in the
	Microsoft Knowledge Base:
	
	  __export and keyword and def and prolog
	
	MORE INFORMATION
	================
	
	The first argument to the IMPLIB command is the name of the import library to
	create. The second parameter is the name of the .DEF file, the name of the .DLL
	file, or both. The syntax listed in the IMPLIB online help file is as follows:
	
	  IMPLIB [options] implibname {dllfile... | deffile...}
	
	If a .DEF file is listed as the second parameter, IMPLIB places all functions
	listed in the EXPORTS section into the import library. This is the traditional
	method of creating a DLL import library and it applies to versions of the
	Microsoft C Compiler prior to version 7.0.
	
	If a DLL file is listed as the second parameter, IMPLIB places all functions
	marked with the __export keyword in the DLL source code in the import library.
	This method is required when the DLL source code contains exported functions
	that are not listed in the .DEF file. Otherwise, these functions would be
	excluded from the import library.
	
	In addition, if the DLL is developed in C++, the names of exported functions are
	generally not available to place in the .DEF file because C++ decorates function
	names. To create an import library for exported C++ functions, IMPLIB must read
	the function names from the DLL.
	
	To create an import library that contains only a subset of the functions marked
	__export, create a .DEF file containing only the names of the functions to
	include in the import library and specify the name of the .DEF file as an
	argument to IMPLIB.
	
	Note that any function that is marked with the __export keyword is compiled with
	the default DLL export attributes in the import library. To modify any of the
	attributes (for example, to add the NODATA or RESIDENTNAME attributes to the
	exported function), you must list the function name in the EXPORTS section of a
	.DEF file.
	
	An example of a function that must be listed in the .DEF file is a WEP (Windows
	exit procedure) function. Because the WEP must have the RESIDENTNAME attribute,
	the following information must appear in the EXPORTS section of the DLL's .DEF
	file:
	
	     SEGMENTS 'WEP_TEXT' FIXED PRELOAD
	     EXPORTS
	        WEP  @1  RESIDENTNAME
	
	The SEGMENTS declaration tells Windows to load the WEP_TEXT segment into a fixed
	memory location as it loads the DLL into memory.
	
	To place both the functions marked as __export and the WEP into the import
	library, specify both the .DEF file and the .DLL file as arguments to the IMPLIB
	command.
	
	For more information on using Microsoft C/C++ 7.0 to create a WEP function
	compatible with Windows 3.1, see pages 980 and 981 of the Microsoft Windows
	Software Development Kit (SDK) "Programmer's Reference, Volume 2: Functions"
	manual for version 3.1 and the DETAILS.TXT file distributed with Microsoft
	C/C++.
	
	For more information on using the /GD option switch with the __export keyword,
	see page 515 of the Microsoft C/C++ "Environment and Tools" manual for version
	7.0, or query in the Microsoft Knowledge Base on the word "/GD."
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
