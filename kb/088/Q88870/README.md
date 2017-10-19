---
layout: page
title: "Q88870: PRB: /NOLOGO Option Does Not Work in PWB"
permalink: /kb/088/Q88870/
---

## Q88870: PRB: /NOLOGO Option Does Not Work in PWB

	Article: Q88870
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:2.0,2.1.49
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 12-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 2.0, 2.1.49 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Programmer's WorkBench (PWB) versions 2.0 and 2.1.49 will not use the /NOLOGO
	compiler option as expected. Specifying /NOLOGO as an additional option under
	the compiler options dialog box will not prevent the compiler logo from being
	displayed in the build results window.
	
	CAUSE
	=====
	
	PWB creates makefiles that use compiler response files. It places any compiler
	options within the response file. The compiler will display the logo before
	reading any command line options in the response file; therefore, the /NOLOGO
	option will be placed into the compiler response file and the logo will not be
	suppressed.
	
	RESOLUTION
	==========
	
	To prevent the compiler from displaying its logo in the Build Results window,
	you can modify one of the compiler build macros as follows:
	
	1. From the Options menu, choose Project Templates.
	
	2. Select Customize Project Template.
	
	3. In the list of build rules, and select the line that states 'macro CC "cl" '.
	
	4. Change the build rule to 'macro CC "cl /NOLOGO" '.
	
	5. Select Set Build Rule.
	
	6. Choose OK.
	
	After performing the steps above, the compiler logo will no longer be shown in
	the Build Results window. This feature can be useful when building a project
	with many source files and you want to minimize the amount of text in the "Build
	Results" window.
	
	MORE INFORMATION
	================
	
	After modifying the build rule using the steps above, the compiler command line
	will look something like the following:
	
	  cl /NOLOGO @<compiler_response_file_name>
	
	For more information about compiler response files, see the information in the
	online Help (search on "cl" and then select "Response Files").
	
	Additional query words: 2.00 MoveOverlay
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB200DOS kbPWB2149DOS
	Version           : MS-DOS:2.0,2.1.49
	
	=============================================================================
	
