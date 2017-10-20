---
layout: page
title: "Q185655: FIX: TMP File Errors If ALTER TABLE Runs Same Time As ODBC DLL"
permalink: /kb/185/Q185655/
---

## Q185655: FIX: TMP File Errors If ALTER TABLE Runs Same Time As ODBC DLL

{% raw %}

	Article: Q185655
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0,3.0b,5.0,5.0a
	Operating System(s): 
	Keyword(s): kbMDAC250
	Last Modified: 22-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If another process is using the VFP ODBC driver and DLL at the same time as the
	program is running in Visual FoxPro, and the temp file location is the same for
	Visual FoxPro as it is for the operating system, then one of the following error
	messages may occur:
	
	  [Microsoft][ODBC Visual FoxPro Driver] Field B does not accept null values.
	  Error calling sqlcolumns in test_odbc. DLLState is: 23000.
	
	  [Microsoft][ODBC Visual FoxPro Driver] Cannot open file f:\temp\62616984.tmp.
	  Error calling sqlcolumns in test_odbc. DLLState is: S1000
	
	  [Microsoft][ODBC Visual FoxPro Driver] Data type mismatch. Error calling
	  sqlcolumns in test_odbc. DLL State is 22005.
	
	NOTE: test_odbc refers to an ODBC data source name.
	
	Furthermore, if two instances of Visual FoxPro 3.0x or 5.0x are running at the
	same time and are they are creating temp files in the same location, the
	following errors may occur:
	
	  File access is denied.
	
	  File 'd:\temp\64382453.tmp' does not exist.
	
	  Not a table.
	
	  Alias <aliasname> is not found.
	
	  Error writing to file.
	
	CAUSE
	=====
	
	Visual FoxPro and the VFP ODBC driver both use the same naming convention and
	algorithm for temporary (.tmp) file creation. If both programs run concurrently,
	there is a conflict in the processes attempting to access the same file or same
	file name. This conflict creates different error messages.
	
	Visual FoxPro 5.0x uses a tempfile naming scheme based on the system clock. These
	names are generated for internal use and many times the filename is never
	actually created on the disk. However, there are many circumstances when FoxPro
	does create the temporary file on disk, so the name generation scheme could
	cause two processes or two instances of the run-time in the same process to
	generate the same temporary file name. If both processes try to create a
	temporary file on disk later, only the first one succeeds. Most often, the
	temporary files are used and closed before they are ever created on the disk.
	
	Visual FoxPro creates temporary files that have names like 64382453.tmp. The
	files are created in the location designated by the parameters given for
	TMPFILES=, EDITWORK=, PROGWORK=, and SORTWORK= in the Visual FoxPro
	configuration file, Config.fpw, by default or in the operating system's SET TEMP
	parameter location.
	
	RESOLUTION
	==========
	
	Each session of Visual FoxPro needs to have a separate location for its
	temporary files. The steps to implement this are given below.
	
	1. Create a subdirectory on the disk for Visual FoxPro's temporary files similar
	  to D:\vfptemp. Make sure that each session of Visual FoxPro has a unique
	  temporary file location.
	
	2. Create a Config.fpw for each session with parameters that point to the
	  temporary file location:
	
	        TMPFILES=D:\vfptemp
	        EDITWORK=D:\vfptemp
	        PROGWORK=D:\vfptemp
	        SORTWORK=D:\vfptemp
	
	3. Append a -c parameter to the Visual FoxPro startup command line for each
	  session to specify the Config.fpw file to use. An example is below:
	
	        "D:\Visual Studio\VFP\VFP.EXE" "-cd:\Visual Studio\config.fpw"
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro 5.0a, the least-significant-bits of the system clock are mapped
	into 8 base ten digits. The possible values are 10^8 = 100,000,000. This means
	that temporary file names are recycled every ~28 hours, since the system clock
	ticks at 1000 ticks/second. Also, if any two processes or instances generated a
	name within the same timer tick (easily possible on a fast machine), then the
	two could have a filename collision, as seen in the scenario below.
	
	Visual FoxPro 5.0x does not delete the .tmp files that are created using the
	CREATE CURSOR and/or ALTER TABLE commands.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Start Visual FoxPro 5.0a. This is the first session.
	
	2. Create a program file named Testtmp1.prg and add the following code, but do
	  not run the code yet:
	
	        * Testtmp1.prg
	        _SCREEN.CAPTION = "1st Session VFP"
	        * FOR ... NEXT loop needs to run long enough that focus
	        * may be switched to other FoxPro session and run similar prg.
	        * 1000 is arbitrary.
	        FOR i = 1 to 1000
	           CREATE CURSOR testa (a i, b i)
	           ALTER TABLE testa ADD c i
	           SELECT testa
	           USE
	        ENDFOR
	
	3. Start Visual FoxPro 5.0a again. This is the second session.
	
	4. Create a program file named Testtmp2.prg and add the following code, but do
	  not run the code yet:
	
	        * Testtmp2.prg
	        _SCREEN.CAPTION = "2nd Session VFP"
	        * FOR ... NEXT loop needs to run long enough that focus
	        * may be switched to other FoxPro session and run similar prg.
	        * 1000 is arbitrary.
	        FOR i = 1 to 1000
	           CREATE CURSOR testa (a i, b i)
	           ALTER TABLE testa ADD c i
	           SELECT testa
	           USE
	        ENDFOR
	
	5. Switch to the first session of Visual FoxPro and run the program.
	
	6. Switch to second session of Visual FoxPro and run the program.
	
	7. One of the error messages listed in the SYMPTOMS section appears in one or
	  both of the Visual FoxPro sessions.
	
	8. Clean the left over temporary files out of the Temp directory.
	
	REFERENCES
	==========
	
	Microsoft FoxPro Help; search on: "temporary files"
	
	(c) Microsoft Corporation 1998, All Rights Reserved. Contributions by Perry
	Newton, Microsoft Corporation
	
	
	Additional query words: kbDSupport kbdse kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbfixvfp600
	
	======================================================================
	Keywords          : kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300 kbVFP300b kbVFP500 kbVFP500a
	Version           : WINDOWS:2.5,3.0,3.0b,5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
