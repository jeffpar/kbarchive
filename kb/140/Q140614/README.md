---
layout: page
title: "Q140614: PRB: SYS(2004) Returns Incorrect Directory"
permalink: /kb/140/Q140614/
---

## Q140614: PRB: SYS(2004) Returns Incorrect Directory

	Article: Q140614
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	SYS(2004) returns incorrect information. According to the online Help file,
	SYS(2004) should return the name of the directory or folder from which Visual
	FoxPro was started. However, if you are running several instances of Visual
	FoxPro, the SYS(2004) function returns only the directory from which the first
	instance was started.
	
	CAUSE
	=====
	
	Executable files created in Visual FoxPro are not standalone applications. They
	rely on the Vfp300.esl as a runtime library. The SYS(2004) function returns the
	location of this file during run time. Even if you have multiple copies of this
	run-time library, the operating system will not load several instances into
	memory; it only opens one copy. That is why the SYS(2004) function only reports
	the location of the first one that was started.
	
	RESOLUTION
	==========
	
	You can use one of the following alternate methods to obtain the startup
	directory:
	
	- Use the CURDIR() function to retrieve the working directory.
	
	- Store the name of the startup directory in a lookup table.
	
	- Write the location of the directory to an .ini file by using API calls.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	For information about an alternative method of obtaining the path to the
	installation, please see the following article in the Microsoft Knowledge Base:
	
	  Q138937 How to Tell Which Directory Holds a Visual FoxPro App's .Exe
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program file that contains the following line repeated twice:
	
	     WAIT WINDOW SYS(2004)
	
	2. Add this program to a new project, and build an executable.
	
	3. Create a second, new project and add the same program to it. Create this
	  executable with a different name and save it into a different directory.
	
	4. Copy the Vfp300.esl file into both of the directories, or place the
	  Windows\System directory in your PATH statement.
	
	5. Create icons for each of the executables, and set the working directories to
	  the executable's location.
	
	6. Try running each application separately. The WAIT WINDOW will report the
	  correct directory for each program.
	
	7. Close the executables if they are open.
	
	8. Start one of the executables. While it is waiting for you to press a key,
	  start the other executable. You will now see that the second instance reports
	  the same starting directory as the first one.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
