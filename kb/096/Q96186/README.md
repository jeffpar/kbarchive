---
layout: page
title: "Q96186: PRB: LINK Error L2022: Export Undefined"
permalink: /kb/096/Q96186/
---

## Q96186: PRB: LINK Error L2022: Export Undefined

	Article: Q96186
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an application is processed by the Microsoft Segmented-Executable Linker,
	the error message L2022 "export undefined" is generated.
	
	Two possible causes of this error, and the corresponding steps to resolve the
	problem, follow.
	
	CAUSE
	=====
	
	CAUSE 1
	-------
	
	The name of a function that is used in the application is not properly listed in
	the EXPORTS statement in the module definition (DEF) file.
	
	CAUSE 2
	-------
	
	Unprintable characters appear at the end of the EXPORTS statement in the module
	definition (DEF) file.
	
	RESOLUTION
	==========
	
	RESOLUTION 1
	------------
	
	Determine the correct spelling of the label and correct the source file or the
	DEF file. For example, the names of functions called with the PASCAL calling
	convention are implicitly converted to uppercase letters. In functions exported
	with the CDECL calling convention, the case of the function name is preserved,
	and an underscore (_) is added to the function name as a prefix.
	
	RESOLUTION 2
	------------
	
	Modify the DEF file to remove the unwanted characters. Also make sure that the
	DEF file is saved from the text editor or word processor as plain text.
	
	MORE INFORMATION
	================
	
	The linker /INFORMATION option provides additional information about the linking
	process to assist in tracking and correcting errors.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
