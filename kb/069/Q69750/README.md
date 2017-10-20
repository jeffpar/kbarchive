---
layout: page
title: "Q69750: Changing PWB Build from .COM to .EXE Causes File Conflict"
permalink: /kb/069/Q69750/
---

## Q69750: Changing PWB Build from .COM to .EXE Causes File Conflict

{% raw %}

	Article: Q69750
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under MS-DOS, the Programmer's WorkBench (PWB) will allow the build target for a
	project to be a .COM file or a .EXE file. If you are in the middle of a project
	and you switch the build options from one of these file types to the other, the
	previously built files may cause unexpected results when you try to run or debug
	the program.
	
	This problem is the result of the ordering in which MS-DOS invokes files, and not
	a problem with PWB. If a filename is entered at the MS-DOS command prompt,
	MS-DOS first looks for a file with a .COM extension. If no .COM file is found,
	then DOS searches for a .EXE file. Therefore, if both a .COM and a .EXE file
	with the same base name (for example, PROJ.COM and PROJ.EXE) appear in the same
	directory, MS-DOS will always invoke the .COM version (even if the .EXE
	extension is explicitly specified).
	
	MORE INFORMATION
	================
	
	Within PWB, a request to run your program causes the entire filename to be
	passed to MS-DOS for execution, but MS-DOS prevents an .EXE from overriding a
	.COM file of the same name. So, if you start a project with the target as a .COM
	file and later switch it to an .EXE, then the existing .COM file always
	supersedes the new .EXE and is unexpectedly run whenever you try to execute the
	program.
	
	The only way to ensure that you are dealing with the correct .EXE file is to
	delete the previous .COM file that you are no longer trying to build.
	
	It should also be noted that if you invoke CodeView from inside PWB, PWB will
	pass the correct filename (.COM or .EXE) to CodeView, but outside of PWB, the
	reverse of the above situation may exist. This results from the fact that
	CodeView always assumes that the file you specify to debug is an .EXE, unless
	the .COM extension is explicitly specified on the CodeView command line. Thus,
	if you switch your project from an .EXE to a .COM and both files exist in the
	current directory, the .EXE will be inadvertently brought up in CodeView when
	you invoke the debugger from the MS-DOS prompt if you forget to include the .COM
	extension.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS
	Version           : MS-DOS:1.0,1.1
	
	=============================================================================
	

{% endraw %}
