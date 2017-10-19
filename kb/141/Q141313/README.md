---
layout: page
title: "Q141313: How to Have One Executable Call Another w/FoxPro for Macintosh"
permalink: /kb/141/Q141313/
---

## Q141313: How to Have One Executable Call Another w/FoxPro for Macintosh

	Article: Q141313
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.6a,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft FoxPro for Macintosh, version 2.6a 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Under Windows, FoxPro executables have an .exe extension, and it is possible to
	have one executable call another. FoxPro for Macintosh executables are not built
	with the .exe extension by default. FoxPro for Macintosh executables have no
	extension by default. Executables built with no extension cannot be called by
	another executable. A "file not found" message is returned. To allow an
	executable to call another executable, place an .exe extension on the name of
	the called executable.
	
	MORE INFORMATION
	================
	
	The following steps demonstrate how one executable file can call another
	executable on the Macintosh.
	
	1. Create a project called FIRST with one program that contains code similar to
	  this:
	
	     WAIT WINDOW "ONE"
	     DO SECOND
	
	2. Create a project called SECOND with one program that contains:
	
	     WAIT WINDOW "TWO"
	
	3. Build both projects so that the executables are both in the same folder.
	
	4. Close FoxPro, and open the folder containing the two executables.
	  Double-click the executable called FIRST. When it tries to execute the line
	  DO SECOND, the message "File 'Second' does not exist" will appear.
	
	5. Replace the line DO SECOND with DO SECOND.EXE. When building the second
	  executable give it the name SECOND.EXE. The first executable will now be able
	  to call the second executable successfully.
	
	Also note that if the calling executable (FIRST) is built after the called
	executable (SECOND), the message "Unable to find proc./func. SECOND" will appear
	during the build. When the .exe extension is added to the executable it will be
	placed in the project as an application and marked as excluded.
	
	Additional query words: VFoxMac FoxMac
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260aMac kbVFP300bMac
	Version           : MACINTOSH:2.6a,3.0b
	
	=============================================================================
	
