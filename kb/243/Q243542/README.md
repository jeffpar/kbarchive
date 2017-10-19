---
layout: page
title: "Q243542: PRB: File() Function Ignores Path if Given in Parameter"
permalink: /kb/243/Q243542/
---

## Q243542: PRB: File() Function Ignores Path if Given in Parameter

	Article: Q243542
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 27-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The File() function documentation states that you can include a path with the
	file name to search for a file in a directory or on a drive other than the
	current directory or drive. Under certain conditions the File() function can
	return .t. even though the file does not exist in the path given in the
	parameter.
	
	CAUSE
	=====
	
	If the file exists along the Visual FoxPro path, the function returns .t..
	
	RESOLUTION
	==========
	
	Use the Adir() function. Supply the file name you are checking for as the second
	parameter in the Adir() function. The Adir() function returns 1 if the file is
	found.
	
	  nFilesFound=adir(atemp,"C:\temp.txt")
	  IF nFilesFound=1
	       && Do processing on file
	  ELSE
	       && File does not exist
	  ENDIF
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	Copy the following code into a file and run the program:
	
	  CLEAR
	  SET PATH TO
	  SET DEFAULT TO C:\ 
	  fh=FCREATE('C:\program files\testf.prg')
	  =FCLOSE(fh)
	  ? FILE('C:\program files\testf.prg')
	  CD..
	  SET PATH TO 'program files'
	  ? "Path="+SET('path')
	  ? "default directory="+CURDIR()
	  ? FILE('c:\testf.prg')
	  SET PATH TO
	  ? FILE('C:\program files\testf.prg')
	  ? FILE('C:\testf.prg')
	  DELETE FILE 'C:\program files\testf.prg'
	  ? FILE('C:\testf.prg')
	
	Additional query words: KBDSE
	
	======================================================================
	Keywords          : kbvfp600 kbXBase kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
