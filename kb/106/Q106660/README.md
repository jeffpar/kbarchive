---
layout: page
title: "Q106660: RUN /N Not Working Correctly with MS-DOS Batch File"
permalink: /kb/106/Q106660/
---

## Q106660: RUN /N Not Working Correctly with MS-DOS Batch File

	Article: Q106660
	Product(s): Microsoft FoxPro
	Version(s): 2.50 2.50a 2.50b 3.00
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In FoxPro for Windows versions 2.5, 2.5a, and 2.5b, the order in which lines of
	code are executed within a program file may seem to be altered when you are
	using the RUN command with a /N parameter to execute an MS-DOS executable or
	batch file. The /N parameter stands for NOWAIT and allows program execution to
	continue before the command is completed. This makes it seem as if the MS-DOS
	batch file is not being executed until after the other commands.
	
	MORE INFORMATION
	================
	
	In FoxPro for Windows, the /N parameter is used for calling Windows-based
	applications with the RUN command. The /N parameter of the RUN command has an
	optional numeric value that can be included immediately after it to specify how
	the Windows-based application is opened. The possible settings include /N1, /N2,
	/N3, /N4, and /N7.
	
	These parameters are not intended for use with MS-DOS executables or batch files.
	If any of these parameters are used to call an MS-DOS executable or batch file,
	Windows will execute the file in the background and FoxPro will remain the
	active application.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. In FoxPro for Windows, from the File menu, choose New.
	
	2. Select File, and then choose the New button.
	
	3. In the text editing window, type "DIR" (without the quotation marks).
	
	4. From the File menu, choose Save, and use RUNTEST.BAT as the filename. Choose
	  the Save button.
	
	5. From the File menu, choose New.
	
	6. Select Program, and then choose the New button.
	
	7. Enter the following two lines of code in the program window:
	
	        RUN /N4 runtest.bat
	        WAIT WINDOW "This is a test"
	
	8. From the File menu, choose Save, and use ATEST.PRG as the program name.
	  Choose the Save button.
	
	9. Run the program you just created, by issuing the following command in the
	  Command window:
	
	        DO atest
	
	The WAIT WINDOW message will appear on the screen before FoxPro shells to MS-DOS
	to execute the RUN command. This is because the batch file is running in the
	background, while FoxPro continues to execute the program code. This makes it
	seem like the WAIT WINDOW command is executed before the batch file, when
	actually both commands are being executed simultaneously under the multitasking
	environment.
	
	To correct this situation, remove the /N parameter from the RUN command. For
	example:
	
	     RUN runtest.bat
	
	This allows FoxPro to execute the RUN command first and then execute the
	following code after returning from the RUN command.
	
	REFERENCES
	==========
	
	"Language Reference," L3-840
	
	Additional query words: VFoxWin FoxWin 2.50 2.5a 2.5b
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300
	Version           : 2.50 2.50a 2.50b 3.00
	
	=============================================================================
	
