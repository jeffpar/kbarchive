---
layout: page
title: "Q69220: BUG: Can't Redirect File as Input When Running a Program in PWB"
permalink: /kb/069/Q69220/
---

## Q69220: BUG: Can't Redirect File as Input When Running a Program in PWB

	Article: Q69220
	Product(s): Microsoft Programming Utilities
	Version(s): MS-DOS:1.0,1.1; OS/2:1.0,1.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 24-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Programmer's Workbench for MS-DOS, versions 1.0, 1.1 
	- Microsoft Programmer's Workbench for OS/2, versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Programmer's WorkBench (PWB) contains three ways to run a
	program:
	
	1. You can choose Execute from the Run menu (and choose Command Line from the
	  Run menu to specify the command-line arguments).
	
	2. You can choose Run DOS Command from the Run menu.
	
	3. You can use the key combination "Arg textarg SHIFT+F9".
	
	However, a problem occurs if a file is redirected as input into a program that is
	executed using any of the methods above. The length of the input file, from
	which STDIN will receive data, will be erased and will receive a length of zero
	bytes. Thus, you cannot run a program (command) from the Programmer's WorkBench
	that expects STDIN to be redirected from a file. For example, if the command
	"PROG <INPUT.TXT" is entered under Run DOS Command from the Run menu, the
	file INPUT.TXT will be erased and have a length of zero. This problem occurs
	only in DOS. The OS/2 version of the Programmer's WorkBench works correctly.
	
	RESOLUTION
	==========
	
	One way to work around the problem is to create a batch file that performs the
	command. Rather than running the program directly, the program can be ran in the
	batch file with STDIN redirected from a file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Programmer's WorkBench
	version 1.1. We are researching this problem and will post new information here
	as it becomes available.
	
	MORE INFORMATION
	================
	
	Below is sample program that receives data redirected from a file, and prints it
	to the screen. To demonstrate the problem, you can use the sample program and do
	one of the following:
	
	Choose Execute from the Run Menu
	--------------------------------
	
	1. Open the source file or program list of the program you want to run.
	
	2. Enter the command line option "<input.txt" (without the quotation marks)
	  under Command Line in the Run menu. INPUT.TXT is the file that contains the
	  input for the program.
	
	3. Choose Execute from the Run menu.
	
	4. View the size of the file, INPUT.TXT.
	
	Choose Run DOS Command from the Run Menu
	----------------------------------------
	
	1. Choose Run DOS Command from the Run menu.
	
	2. Enter "prog <input.txt" (without the quotation marks) where "prog" is the
	  name of the executable and INPUT.TXT is the name of the input file.
	
	3. View the size of the file, INPUT.TXT.
	
	Type "Arg textarg SHIFT+F9"
	---------------------------
	
	1. Press ALT+A.
	
	2. Type in the command "prog <input.txt" (without the quotation marks).
	
	3. Press SHIFT+F9.
	
	4. View the size of the file, INPUT.TXT.
	
	Sample Code
	-----------
	
	  #include <stdio.h>
	  void main(void)
	  {
	     int c;
	     for (c=getchar();!feof(stdin);c=getchar())
	        printf("%c",(char)c);
	  }
	
	Additional query words: 1.00 1.10 buglist1.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbPWBSearch kbZNotKeyword3 kbPWB100DOS kbPWB110DOS kbPWB100OS2 kbPWB110OS2
	Version           : MS-DOS:1.0,1.1; OS/2:1.0,1.1
	
	=============================================================================
	
