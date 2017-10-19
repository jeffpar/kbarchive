---
layout: page
title: "Q69751: How to Make a Library File a Dependent of the Target in PWB"
permalink: /kb/069/Q69751/
---

## Q69751: How to Make a Library File a Dependent of the Target in PWB

	Article: Q69751
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
	
	In the Programmer's WorkBench (PWB), additional libraries may be specified in a
	Program List. However, these libraries are not put into the makefile as
	dependents of the target file. Thus, if one of these libraries is changed, this
	does not cause the project to be rebuilt unless you delete the existing target
	file or select Rebuild All to rebuild the entire project.
	
	To make a project automatically relink after an external library has been
	modified, you need to modify two build switches. This can be done permanently in
	the TOOLS.INI file or temporarily inside PWB in the Editor Settings (which can
	be reached from the Options menu). Then you must place the library(s) in the
	project's program list (as opposed to the Additional Libraries list in the Link
	Options dialog box).
	
	MORE INFORMATION
	================
	
	The following information describes the two methods for making the build-switch
	changes that are required to have libraries recognized as dependents of the
	target file in a project. For those who would like more extensive information on
	modifying and creating build switches, an application note is available from
	Microsoft on this subject. For details, query on the keyword "SW0330".
	
	You can verify the results of either of these build-switch changes by looking at
	the PWB-generated makefile and observing that external libraries are, in fact,
	listed as dependents of the project target.
	
	Making Permanent Build Switch Modifications in TOOLS.INI
	--------------------------------------------------------
	
	1. Use the Options menu items Build Options, C Compiler Options, and Link
	  Options to setup the various compiler and link options the way you want them.
	
	2. Select the Save Current Build Options function in the Build Options dialog
	  box and save the current build options under a unique name.
	
	3. Bring your TOOLS.INI file into the editor and locate the section that begins
	  with the unique name you just specified in step 2 above.
	
	4. Within this section, locate the line that reads
	
	  build: target $(PROJ).exe lrf_exe link_exe
	
	  and change it to:
	
	  " build: target $(PROJ).exe lrf_exe link_exe new_libs" (without the quotation
	  marks)
	
	5. Add a new line (anywhere in this section) that reads:
	
	  " build: command new_libs "ECHO $(LIBS) >NUL"" (without the quotation
	  marks)
	
	This will cause the target to be dependent upon any library(s) placed in the
	program list whenever these new build options are in effect; when you change an
	external library, the project will be relinked even if no other modules have
	changed.
	
	Making Temporary Build Switch Modifications in the Editor Settings
	------------------------------------------------------------------
	
	1. Select the Editor Settings function from the Options menu.
	
	2. Find the section containing the build switches.
	
	3. Within this section, locate the line that reads
	
	  build: target $(PROJ).exe lrf_exe link_exe
	
	  and change it to:
	
	  " build: target $(PROJ).exe lrf_exe link_exe new_libs" (without the quotation
	  marks)
	
	4. Add a new line (somewhere in this section) that reads:
	
	  " build: command new_libs "ECHO $(LIBS) >NUL"" (without the quotation
	  marks)
	
	These changes will be in effect only for the current programming session. Thus,
	this method is useful for testing, but the previous method is recommended for
	regular use.
	
	Additional query words: kbinf 1.00 1.10 PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
