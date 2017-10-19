---
layout: page
title: "Q61306: PRB: Browse Options Unavailable Under Strange Circumstances"
permalink: /kb/061/Q61306/
---

## Q61306: PRB: Browse Options Unavailable Under Strange Circumstances

	Article: Q61306
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 04-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under certain circumstances, the Browse options within the Programmer's
	WorkBench (PWB) may be unavailable. You can take all the steps outlined in the
	documentation required to generate a Browse Database, but the Browse options may
	be still grayed out.
	
	CAUSE
	=====
	
	The most likely cause is an invalid CURRENT.STS file. This file can be found in
	the INIT directory or the current working directory. CURRENT.STS is used to save
	the PWB settings from session to session. If this file is in a form that is not
	acceptable to the PWB, strange results may occur during use of the PWB.
	
	One instance in which CURRENT.STS might become corrupt is in the case of a system
	crash from within the PWB during a compile.
	
	
	To determine if a corrupt CURRENT.STS is the cause of the problem, take the
	following steps:
	
	1. Invoke the PWB with the /DS switch to force it to ignore the CURRENT.STS
	  file.
	
	  Note: This will reset all switches within the environment that were previously
	  recorded by CURRENT.STS.
	
	2. Take the normal steps required for preparing a Browse database. (Set a
	  program list, mark Generate Browse Information under the Browse options menu,
	  and rebuild the project.)
	
	Browse information should now be available. If disabling the CURRENT.STS does
	remedy the situation, the only permanent solution is to delete the CURRENT.STS
	file that is causing the problem.
	
	RESOLUTION
	==========
	
	Two possible solutions are deleting the make file and letting the PWB regenerate
	it, or deleting the CURRENT.STS file and resetting all the options for the
	editor.
	
	NOTE: Since deleting the CURRENT.STS file will result in the loss of all
	environment settings, it is advisable to note any important settings you may
	have set up before deleting the file.
	
	Additional query words: 1.00 1.10 hang stop halt PWBIss
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
