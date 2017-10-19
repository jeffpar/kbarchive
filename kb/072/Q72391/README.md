---
layout: page
title: "Q72391: BUG: Cannot Open MASM 6.0 Sample Programs from PWB Online Help"
permalink: /kb/072/Q72391/
---

## Q72391: BUG: Cannot Open MASM 6.0 Sample Programs from PWB Online Help

	Article: Q72391
	Product(s): Microsoft Programming Utilities
	Version(s): 1.0,1.1,2.0,2.1.49
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1, 2.0, 2.1.49 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Attempting to access the Microsoft Macro Assembler (MASM) version 6.0 sample
	help programs through the Programmer's WorkBench (PWB) version 1.00 or 1.10
	online help system will generate an error. For example, the following message
	results from trying to view the file C.ASM:
	
	  Cannot open [$ASMEX:MIXED\C.ASM]: Not found
	
	Selecting any one of the sample programs should cause a copy of the program to be
	loaded into the help window, but the DOS version of PWB generates the above
	message instead.
	
	RESOLUTION
	==========
	
	The following three methods may be used to work around this problem:
	
	1. Change directories to the MASM 6.0 samples subdirectory (by default, this is
	  C:\MASM\SAMPLES). This can be easily accomplished if the ASMEX environment
	  variable has been correctly set to point to your samples directory. Choose
	  Open on the File menu and type in "$ASMEX:" (without the quotation marks) and
	  press ENTER. Next, choose Cancel to return to the editor. Attempts to access
	  sample program files from the online help will now be successful as long as
	  you do not change the current directory.
	
	- or -
	
	2. Load the file directly into the editor. The programs will be in one of four
	  subdirectories under the MASM 6.0 samples directory: \DEMOS, \TSR, \MIXED, or
	  \SHOW. Choose Open on the File menu, and then there are three ways to open
	  the sample files:
	
	  a. Switch to the directory of the desired example file by using the dialog
	     box controls and then select the desired file.
	
	  b. Enter the full path name of the file and press ENTER, for example:
	
	  C:\MASM\SAMPLES\MIXED\C.ASM
	
	  c. Use the ASMEX environment variable to specify the path to the file, for
	     example:
	
	  $ASMEX:MIXED\C.ASM
	
	- or -
	
	3. Access the online help through the QuickHelp utility. The sample help files
	  are correctly located by QuickHelp.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article.
	
	MORE INFORMATION
	================
	
	To reproduce this error, follow these steps:
	
	1. Choose Contents on the PWB Help menu.
	
	2. Choose Assembly in the "Languages" section of the main "Microsoft Advisor
	  Help System" screen.
	
	3. Choose Example Code in the "Related Programs" section of the "MASM 6.00
	  Contents" help screen.
	
	4. Choose Mixed Languages from the "Example Code" selection screen.
	
	5. Choose a file, such as C.ASM, and the above error will be displayed.
	
	Additional query words: 1.00 1.10 2.00 2.10.49
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB200DOS kbPWB2149DOS
	Version           : :1.0,1.1,2.0,2.1.49
	
	=============================================================================
	
