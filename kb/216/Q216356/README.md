---
layout: page
title: "Q216356: Visual C++ Project Settings and .DBG File Creation"
permalink: /kb/216/Q216356/
---

## Q216356: Visual C++ Project Settings and .DBG File Creation

{% raw %}

	Article: Q216356
	Product(s): Microsoft C Compiler
	Version(s): winnt:4.0,5.0,6.0
	Operating System(s): 
	Keyword(s): kbDebug kbKernBase
	Last Modified: 03-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Editions, versions 4.0, 5.0, 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	   - the operating system: Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article explains the process of creating a debug (.dbg) file using the
	REBASE utility from any executable file or dynamic link library (DLL) generated
	using Microsoft Visual C++ 32-Bit Edition.
	
	MORE INFORMATION
	================
	
	To create a debug file using the REBASE utility from any executable file or DLL
	generated using Microsoft Visual C++ 32-Bit Edition complete the following
	steps:
	
	1. From the Project menu, click Settings. Make the following settings, and then
	  click OK.
	
	  a. In the Project Settings dialog box, select the build configuration which
	     needs to generate a .dbg file symbol from the Settings for dropdown list.
	     To apply the new settings to all configurations, select All
	     Configurations.
	
	  b. Select the names of the projects which will contribute symbol information
	     to .dbg files, such as static libraries. Projects which build DLLs need to
	     generate separate .dbg files, and need to have their settings changed as
	     well. Select more than one project name by holding down the Ctrl key when
	     clicking on the name.
	
	  c. Click the C/C++ tab. Select the General category, then select the type of
	     debug information to be generated for each source file from the Debug Info
	     dropdown list. We recommend Program Database.
	
	     NOTE: In Visual C++ version 6.0, you may select Program Database for Edit
	     and Continue for the Debug configuration; however, that setting is
	     incompatible with the default optimization settings for the Release
	     configuration. Notice that it is set to None by default for the Release
	     configuration. Changing this setting will not make the Release build run
	     slower.
	
	  d. Click the Link tab. Select Debug and choose the Debug info box, and select
	     either COFF format or Both Formats.
	
	  e. Also under the Link tab, select the Customize category. Clear the Use
	     program database box.
	
	  f. If you did not select All Configurations in step a, repeat steps a through
	     e for each build configuration which should generate .dbg files.
	
	2. Build the executable file or DLL with the embedded debug information.
	
	3. By default, REBASE is installed to the \bin subdirectory of the Visual C++
	  installation path. In order to run it, you may need to run the Vcvars32.bat
	  file in the command window first to set the system path properly. For
	  additional information, click the article number below to view the article in
	  the Microsoft Knowledge Base:
	
	  Q168403 Setup Doesn't Ask to Register Environment Variables
	
	4. Get the image base address by executing DUMPBIN as follows. This action is
	  required to extract the symbols without changing the base address of the
	  module.
	
	  dumpbin /headers IMAGE_FILE
	
	Where IMAGE_FILE is the name of the executable or DLL file. DUMPBIN /headers will
	dump an ample amount of header information. The image base value can be found in
	the OPTIONAL HEADER VALUES section labeled image base. By default, the image
	base value is 0x400000 for executable files and 0x10000000 for DLLs.
	
	5. Strip the symbols from the executable file or DLL and place them in a .dbg
	  file by using REBASE as follows:
	
	  rebase -b IMAGE_BASE -x DBG_PATH IMAGE_FILE
	
	Where IMAGE_BASE is the preferred base address of the image.
	
	DBG_PATH is the directory where the .dbg file will be created. DBG_PATH can be
	either "." or an absolute or relative path. If an absolute or relative path is
	specified, then the .dbg file is created in a subdirectory corresponding to the
	file type; for example: \exe or \dll, in that directory. If "." is specified,
	then the .dbg file will is created in the directory where IMAGE_FILE is located.
	IMAGE_FILE is the name of the executable or DLL file.
	
	  e.g. rebase -b 0x10000000 -x . sample.dll
	
	This strips the debug information from the sample.dll file and creates the
	sample.dbg file in the directory where the sample.dll file is located.
	
	REFERENCES
	==========
	
	  Q121366: INFO: PDB and DBG Files - What They Are and How They Work
	
	  Q128372: HOWTO: Remove Symbols from Device Drivers
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDebug kbKernBase 
	Technology        : kbVCsearch kbAudDeveloper kbVC32bitSearch
	Version           : winnt:4.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
