---
layout: page
title: "Q77071: Correctly Configuring PWB for Windows Development"
permalink: kb/077/Q77071/
---

## Q77071: Correctly Configuring PWB for Windows Development

	Article: Q77071
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes how to set up Programmers WorkBench (PWB) so that it will
	properly create a Windows executable. This method cannot be used to create a
	Windows program with multiple named code segments. Creating applications with
	multiple named code segments is discussed in the PWBINFO.WRI file distributed
	with the Windows Software Development Kit (SDK). The SDK installation procedure
	copies PWBINFO.WRI into the Windows development directory (by default,
	C:\WINDEV).
	
	MORE INFORMATION
	================
	
	To create a Windows program, several modifications must be made to the PWB build
	options. The first step is to set the initial build options to Windows EXE. To
	change the initial build options, perform the following three steps:
	
	1. Choose Build Options from the Options menu.
	
	2. Choose Set Initial Build Options in the Build Options dialog box.
	
	3. Choose Windows EXE from the list of initial build options.
	
	Once the initial build options have been set, verify that the packed executable
	file option is disabled for both the debug and release options. The following
	eight steps describe how to disable the packed executable file option:
	
	1. Choose Link Options from the Options menu.
	
	2. Choose Set Release Options in the Link Options dialog box.
	
	3. Disable the Pack EXE File option in the LINK Release Options dialog box.
	
	4. Click OK.
	
	5. Choose Set Debug Options in the Link Options dialog box.
	
	6. Disable the Pack EXE File option in the LINK Debug Options dialog box.
	
	7. Click OK.
	
	8. Click OK.
	
	Next, the correct math library must be selected. Proceed with the following eight
	steps to enable the correct math emulation for both the debug and release
	options:
	
	1. Choose the C Compiler Options command from the Options menu.
	
	2. Choose Set Debug Options in the C Compiler Options dialog box.
	
	3. Enable the Emulation Calls option in the C Compiler Debug Options dialog box.
	
	4. Click OK.
	
	5. Choose Set Release Options in the C Compiler Options dialog box.
	
	6. Enable the Emulation Calls option in the C Compiler Release Options dialog
	  box.
	
	7. Click OK.
	
	8. Click OK.
	
	Next, enable the correct C compiler library. The following two steps set the
	library to the Windows library:
	
	1. Choose C Compiler Options from the Options menu.
	
	2. Select the Windows C Libraries in the C Compiler Options dialog box.
	
	At this point, save the build options for PWB to the disk. The following two
	steps accomplish this:
	
	1. Choose the Build Options command from the Options menu.
	
	2. Choose Save Current Build Options in the Build Options dialog box.
	
	Once the current build options have been saved, it is necessary to set the
	initial build options each time PWB is started. This ensures that the PWB
	session will use the appropriate build settings instead of the default settings.
	When beginning subsequent PWB sessions, follow these three steps:
	
	1. Choose the Build Options command from the Options menu.
	
	2. Choose Set Initial Build Options in the Build Options dialog box.
	
	3. Select the name of the set of build options that were previously saved. This
	  name appears near the bottom of the Set Initial Build Options list.
	
	To create a Windows program, it is necessary to create a program list. The four
	steps required to do this are as follows:
	
	1. Choose the Set Program List command from the Make menu.
	
	2. Replace the asterisk in the File Name field of the Set Program List dialog
	  box with the name of the program list file to create.
	
	3. Select Yes when PWB displays the "File Does Not Exist" message box.
	
	4. Build the program list by selecting the files in the File List required by
	  the program, selecting Add/Delete for each file. Be sure to include all C,
	  DEF, and RC files.
	
	Once the program list has been created, the options on the Make menu are
	available to compile or recompile the program. For more information on the Make
	menu, please consult the PWB documentation.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
