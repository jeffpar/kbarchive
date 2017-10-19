---
layout: page
title: "Q138937: How to Tell Which Directory Holds a Visual FoxPro App's .Exe"
permalink: /kb/138/Q138937/
---

## Q138937: How to Tell Which Directory Holds a Visual FoxPro App's .Exe

	Article: Q138937
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can find out (http://support.microsoft.com/download/support/mslfiles/out)
	which directory holds the Visual FoxPro Application .exe file from within the
	application. SYS(2004) and HOME() both return the location of the .esl library
	file but not the location of the .exe file. Visual FoxPro places the .esl file
	in the \Windows\System directory so that a single file can support several .exe
	files. You can use SYS(16) to return the location and the name of the currently
	running program (.exe file).
	
	MORE INFORMATION
	================
	
	You can try this by building an .EXE from the following program:
	
	  *Begin program
	  CLEAR
	  ?"SYS(2004) =" + SYS(2004)
	  ?
	  ?"HOME() = " + HOME()
	  ?
	  ?"SYS(16) = " + SYS(16)
	  WAIT
	  *End program
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	
