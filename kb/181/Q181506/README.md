---
layout: page
title: "Q181506: HOWTO: Make VC++ Recognize File Extensions as C/C++ Files"
permalink: /kb/181/Q181506/
---

## Q181506: HOWTO: Make VC++ Recognize File Extensions as C/C++ Files

	Article: Q181506
	Product(s): Microsoft C Compiler
	Version(s): 4.0,4.0a,4.1,4.2,4.2b,5.0,6.0,97
	Operating System(s): 
	Keyword(s): kbCompiler kbide kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbFAQ kbGrpDSTools kbvc600faq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Studio versions 97, 6.0 
	- Microsoft Visual C++, versions 4.0, 4.0a, 4.1 
	- Microsoft Visual C++, 32-bit Enterprise Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Professional Edition, versions 4.2, 4.2b, 5.0, 6.0 
	- Microsoft Visual C++, 32-bit Learning Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems that may require you to reinstall your operating system. Microsoft cannot guarantee that you can solve problems that result from using Registry Editor incorrectly. Use Registry Editor at your own risk.
	
	SUMMARY
	=======
	
	Microsoft's Visual C++ Integrated Development Environment (IDE) recognizes the
	following file extensions as C++ source files: .c, .cpp, and .cxx. In some
	cases, a programmer may want to use other file extensions for C++ files; for
	example, Unix C++ source files often use the .cc extension.
	
	Using the steps in this article, source files with other file extensions may
	benefit from the Visual C++ IDE's syntax coloring, automatic indentation, and
	other usage enhancements. This article describes how to automatically compile
	such files as C/C++ and associate the C++ icon with these files in Windows
	Explorer.
	
	MORE INFORMATION
	================
	
	The following procedure causes the Visual C++ IDE to recognize extensions other
	than .c, .cpp, and .cxx as a C/C++ source file. These changes involve altering
	registry settings.
	
	To start the Registry Editor:
	
	1. Close any running instances of Developer Studio.
	
	2. On the Start menu, click Run.
	
	3. Type "regedit" (without the quotation marks) and click OK to start the
	  Registry Editor.
	
	In the Registry Editor, repeat the following four steps for each new file
	extension to associate with a C/C++ icon. These steps illustrate how to
	associate the .cc file extension with the C++ source file icon:
	
	1. Right-click HKEY_CLASSES_ROOT and select New | Key.
	
	2. A key name will appear; change New Key #1 to .cc (the period is mandatory).
	
	3. Click the new .cc key, then double-click Default in the right-hand pane of
	  the Registry Editor.
	
	4. In the Value Data field, type "cppfile" (without the quotation marks). Click
	  OK.
	
	NOTE: To associate a file extension with the C source file icon, use cfile
	instead of cppfile. The values hppfile and hfile associate file extensions with
	C++ and C header file icons, respectively. (In Windows Explorer, the appropriate
	icon should now accompany files with the extension added in steps 1 through 4.
	Clicking the icon will launch Visual C++. Don't do this just yet, though.)
	
	The following steps apply to keys and values located on the home key. In the
	Registry Editor, locate the user settings home key for Developer Studio. For
	various versions, the home key is:
	
	Version 6.0 (ships with Visual Studio 6.0):
	
	HKEY_CURRENT_USER\Software\Microsoft\DevStudio\6.0\ 
	
	Version 5.0 (ships with Visual Studio 97):
	
	HKEY_CURRENT_USER\Software\Microsoft\DevStudio\5.0\ 
	
	Versions 4.x:
	
	HKEY_CURRENT_USER\Software\Microsoft\Developer
	
	The following registry keys cause the IDE to load the C/C++ compiler tool for the
	specified file extensions (.cc illustrated):
	
	1. Locate the following keys under Build System\Components\Platforms:
	
	  Win32(ALPHA)\Tools\C/C++ Compiler for Alpha<BR/>
	  Win32(PowerPC)\Tools\C/C++ Compiler for PowerPC<BR/>
	  Win32(x86)\Tools\C/C++ Compiler for 80x86
	
	  If WinCE 2.0 is installed, the following keys will also be present:
	
	  Win32(WCE x86em)\Tools\C++ Compiler for 80x86em (Emulation)<BR/>
	  Win32(WCE MIPS)\Tools\C/C++ Compiler Mips R4100<BR/>
	  Win32(WCE SH)\Tools\C/C++ Compiler for SH<BR/>
	
	2. Each of those keys has a setting called Input_Spec. Double-click Input_Spec;
	  then, in the Value Data field, add ";*.cc" (without the quotation marks) to
	  the end of the existing list of extensions. Click OK.
	
	The following registry key determines the file extensions selected for syntax
	coloring, smart indentation, and so on:
	
	1. Locate the key Text:
	
	  Text Editor\Tabs/Language Settings\C/C++
	
	2. Double-click the FileExtensions setting; add ";cc" (without the quotation
	  marks) to the end of the existing list of extensions. Click OK.
	
	3. Close the Registry Editor.
	
	4. Start Developer Studio and create a new file or open an existing one with the
	  extension(s) just added. Syntax coloring and automatic indentation should be
	  in effect.
	
	NOTE: The new extensions will not appear in the Files of type list when you click
	Open on the File menu. Use All Files (*.*) to view files with nonstandard
	extensions. Alternatively, double-click the file from Windows Explorer; once it
	loads into Visual C++, right-click inside the file's window and select Insert
	File into Project to add the file to a project.
	
	NOTE: External makefiles that are generated from Developer Studio will not have
	the correct inference rules for new file extensions. Inference rules must be
	added by either copying existing rules within the makefile (for example, adding
	SUFFIXES:.cc at the beginning of the makefile and copying the .cpp.obj: rule to
	create a .cc.obj: rule), or by adding rules in the TOOLS.INI file.
	
	Although the IDE starts the C/C++ compiler tool for the file extensions added in
	the steps above, the compiler needs to know whether to compile the file as C or
	C++. The compiler normally compiles .c files as C, and compiles .cpp and .cxx as
	C++. For all other extensions, the compiler needs an explicit parameter: /TC
	compiles files as C, /TP compiles files as C++. Each project that includes files
	with custom extensions needs an explicit /TC or /TP parameter. The following
	steps illustrate how to do this:
	
	1. Open a project in Developer Studio.
	
	2. Click Settings on the Project menu.
	
	3. In the resulting dialog box, select a configuration and a project (do not
	  select All Configurations or multiple projects).
	
	4. Click the C/C++ tab.
	
	5. In the Project Options text box at the bottom, add /TP or /TC to the end of
	  the listed options.
	
	6. Repeat steps 3 through 5 for each configuration and each project in the
	  workspace whose explicit compile type needs to be set. Click OK.
	
	NOTE: Using /Tp"file.cc" and /Tc"file.cc" nevertheless generates the warnings
	D4024 and D4027 with VC++ 6.0. However, with the registry changes mentioned
	here, the file is properly compiled as the type specified. You may disregard the
	warnings in this case.
	
	This setting treats ALL source files built by the CL compiler tool in the project
	as C++ (/TP) or C (/TC) files (the project options cannot be edited on a
	per-file basis). The entire project now uses either the C++ compiler or the C
	compiler. To treat individual files in a project as C++ or C source files, use
	the /Tp<source file> or /Tc<source file> settings. See REFERENCES
	for more information on the use of compiler settings.
	
	If necessary, a custom build step can launch the C/C++ compiler (CL.EXE) with
	settings specific to a single file. This is less desirable, because the custom
	build step requires explicitly listing all of the compiler options. See
	REFERENCES for online documentation of instructions on adding a custom build
	step.
	
	REFERENCES
	==========
	
	Visual C++ Programmer's Guide, Compiling and Linking, Details, Compiler
	Reference.
	
	Visual C++, Developer Studio Environment User's Guide, Working With Projects, How
	Do I... Topics: Working With Projects, Customizing a Build Process.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCompiler kbide kbVC400 kbVC410 kbVC420 kbVC500 kbVC600 kbFAQ kbGrpDSTools kbvc600faq 
	Technology        : kbVCsearch kbVC400 kbVSsearch kbAudDeveloper kbVC410 kbVC420 kbVC500 kbVC600 kbVC32bitSearch kbVC400a kbVC420b kbVS97 kbVS600 kbVS97Search kbVS600Search kbVC500Search
	Version           : :4.0,4.0a,4.1,4.2,4.2b,5.0,6.0,97
	Issue type        : kbhowto
	
	=============================================================================
	
