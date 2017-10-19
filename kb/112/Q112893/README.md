---
layout: page
title: "Q112893: PC Forms: Multiple Forms in a Single Executable File"
permalink: /kb/112/Q112893/
---

## Q112893: PC Forms: Multiple Forms in a Single Executable File

	Article: Q112893
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Electronic Forms Designer, version 1.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	With version 1.0 of Microsoft Electronic Forms Designer, it is possible to
	create a single executable file that contains multiple E-forms. By modifying the
	custom message declaration and adding code to the E-form project, a single
	executable file can be created that includes multiple forms. This can be useful
	if there is limited storage space for E-form executable files.
	
	MORE INFORMATION
	================
	
	By adding additional information to the custom message command string, it is
	possible to pass information to the E-form executable file regarding which
	"instance" to load. In addition, modifying code in the EFORM.BAS file determines
	the steps to take for each form. This can be accomplished in two steps:
	
	Step 1: Defining the Custom Message Class
	-----------------------------------------
	
	For example, suppose the E-form executable file, SAMPLE.EXE contains two
	instances of E-forms you want to use. The entries in the [Custom Messages]
	section of the MSMAIL.INI would be as follows:
	
	  IPM.VendorName.Sample111=3.0;;Sample Form 1;;MEFLIB.DLL;
	  <MC:IPM.VendorName.Sample111>C:\EFORMS\SAMPLE.EXE -MSG -MYFLAG
	  <COMMAND><MESSAGEID>;1111111000000000;First Sample Form;;;
	
	  IPM.VendorName.Sample222=3.0;;Sample Form 2;;MEFLIB.DLL;
	  <MC:IPM.VendorName.Sample222>C:\EFORMS\SAMPLE.EXE -MSG -MYOTHERFLAG
	  <COMMAND> <MESSAGEID>;1111111000000000;Second Sample Form;;;
	
	NOTE: Both custom message classes access the same executable file (SAMPLE.EXE).
	However, each entry includes a unique addition to the command string (-MYFLAG
	vs. -MYOTHERFLAG).
	
	Step 2: Modifying the Code
	--------------------------
	
	The next step is to add code to the E-form project to determine what to do when a
	custom command line is passed. This can be accomplished by adding the following
	lines to the ParseCommandLine function defined in EFORM.BAS:
	
	      ElseIf token Like "[-/]MYFLAG" Then
	       'load form for the first E-Form
	      ElseIf token Like "[-/]MYOTHERFLAG" Then
	       'load form for the second E-Form
	
	The code written in ParseCommandLine will determine what action is taken when a
	particular command string is passed.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword kbZNotKeyword2 kbMailSearch kbZNotKeyword3 kbEForms
	Version           : WINDOWS:1.0
	
	=============================================================================
	
