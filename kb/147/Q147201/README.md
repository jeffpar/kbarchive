---
layout: page
title: "Q147201: PRB: Header Files Ignored by Recompile All &amp; Build Process"
permalink: /kb/147/Q147201/
---

## Q147201: PRB: Header Files Ignored by Recompile All &amp; Build Process

{% raw %}

	Article: Q147201
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a Recompile All from the Project Manager does not force a recompile of
	program (.prg) files if the program has not been altered. As a result, header
	(.h) files that are referenced in the program file are ignored by the Recompile
	All and Build processes. Therefore, if changes are made to a header file that is
	referenced in a program file, the new changes are not automatically redefined.
	
	NOTE: This behavior applies only to header files that are referenced in unchanged
	program files. In other words, header files referenced in forms and classes are
	reprocessed by a Recompile All.
	
	CAUSE
	=====
	
	Each .prg file has an associated .fxp file after the first Build process. If the
	.fxp and .prg file datetime stamps are the same, then it is assumed that the
	.prg file hasn't changed, so it's left out of any subsequent recompile
	processes.
	
	RESOLUTION
	==========
	
	There are two ways to force a recompile of .prg files:
	
	- Delete all corresponding .fxp files before starting the build process from
	  within the Project Manager.
	
	-or-
	
	- Issue a COMPILE *.PRG command from the Command window.
	
	It is the presence of the .fxp file that prevents the Project Manager from
	recompiling all files.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a simple project, and add a .prg file that contains a #INCLUDE
	  statement that references a header (.h) file. Also include a WAIT WINDOW
	  statement that will display the contents of a constant variable that is
	  declared in the header file.
	
	2. Add the header file to the Text File section of Project Manager.
	
	3. In the header file, insert a #DEFINE command that places a value into the
	  constant referenced by the WAIT WINDOW.
	
	4. Build the project, and run it noting the value displayed from the constant.
	  Then change the value for the constant in the header file.
	
	5. Rebuild the project with the Recompile All Files check box selected.
	
	6. Rerun the application, and note that the displayed value does not reflect the
	  new value in the header file. The value is the same as the previously stored
	  value.
	
	7. Delete the .fxp file that corresponds to the .prg file.
	
	8. Rebuild the project with the Recompile All Files check box selected.
	
	9. Rerun the application, and note that the displayed value now reflects the
	  value in the header file.
	
	Additional query words: VFoxWin re-compile akz
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	

{% endraw %}
