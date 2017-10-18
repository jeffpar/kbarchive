---
layout: page
title: "Q61968: Enabling Source Browser Menu Related to .BSC &amp; .MAK Files"
permalink: kb/061/Q61968/
---

## Q61968: Enabling Source Browser Menu Related to .BSC &amp; .MAK Files

	Article: Q61968
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Source Browser feature of the Programmer's WorkBench (PWB) versions 1.0 and
	1.1 is enabled or disabled depending upon the existence of a database file (.BSC
	file) AND a program list (.MAK file). The existence of a .BSC database file
	alone does not guarantee that the Browse menu will be enabled for all modules in
	a project, even if the .BSC file was built from .SBR files for every module. The
	setting of a program list is also required.
	
	Thus, if a .BSC file is built outside the PWB environment with PWBRMAKE, then
	upon entering the PWB environment, the Browser will be enabled for only one
	module at most (see below). To enable the Browse menu for ALL modules, choose
	Set Program List from the Make menu, then type the base name of the .BSC file
	(with .MAK or no extension) when you are prompted for the filename. If the .MAK
	file you enter does not exist, the dialog box appears for adding files to the
	program list. Select Save List without actually adding any files. The Browse
	menu will now be enabled for all files you open in the PWB editor.
	
	PWB 2.0 can open a custom browser database. In fact, it can open any browser
	database independently of a project file.
	
	MORE INFORMATION
	================
	
	The existence of a Source Browser database file means that the Browse menu will
	be enabled for a source file with a base name that matches the .BSC file.
	
	For example, assume a project consists of several modules, with the main source
	module named PROJECT.C. In addition, assume a Browser database file named
	PROJECT.BSC is built from the .SBR Browser information files produced by the
	compiler for every module in this project. If the file PROJECT.C is opened in
	the PWB editor, the Browse menu will be enabled because the base name (PROJECT)
	is the same as the base name of the database file PROJECT.BSC.
	
	On the other hand, if any of the other source files in the project is opened in
	the PWB editor, the Browse menu will be disabled because the base name of the
	file does not match the base name of the database file. Also, if PROJECT.C is
	made the current file (which enables the Browse menu) and a command is chosen
	from the Browse menu, such as Goto Reference (which causes a jump to a different
	module), the Browse menu will be disabled. In this case, the only way to
	reenable the Browse menu is to make PROJECT.C the current file again.
	
	To enable the Browse menu for all modules, set a program list to a file with the
	.MAK extension and the same base name as the .BSC file. Thus, in the example
	above, setting the program list to PROJECT.MAK will enable the Browse menu for
	all modules. In fact, this connection between the .BSC file and the .MAK file
	enables the Browse menu for the modules in the current project and for ANY file
	opened in the PWB editor.
	
	Therefore, if you open a file in the editor that is completely unrelated to the
	current project (and may not even have a related .BSC file), you can still use
	the Browse menu options. However, in this situation, the information available
	from the Browser still pertains to the original project only.
	
	In summary, the .MAK file and .BSC file relationship is based solely on the
	files' existence, NOT on the files' contents. The program list does NOT need to
	contain the names of the modules in the current project (or even be an actual
	makefile) in order for the Browser to function.
	
	Additional query words: kbinf 1.00 1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
