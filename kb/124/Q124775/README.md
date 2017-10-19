---
layout: page
title: "Q124775: How to Play an .AVI File Using FoxPro for Windows"
permalink: /kb/124/Q124775/
---

## Q124775: How to Play an .AVI File Using FoxPro for Windows

	Article: Q124775
	Product(s): Microsoft FoxPro
	Version(s): 2.60a 3.00
	Operating System(s): 
	Keyword(s): kbcode kbmm
	Last Modified: 26-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, version 2.6a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article shows by example how to play a video .AVI file using FoxPro for
	Windows.
	
	MORE INFORMATION
	================
	
	The code example below employs the FOXTOOLS.FLL library to register a Windows
	system function, MMSYSTEM.DLL. MMSYSTEM.DLL ships with Windows versions 3.1 and
	later. The library is usually located in the \WINDOWS\SYSTEM subdirectory. After
	the REGFN() function registers the multimedia function, MciSendString, the AVI
	file plays within a window defined by the program.
	
	Sample Code
	-----------
	
	1. Install Video for Windows on the computer that will be used to run the sample
	  code.
	
	2. Create a program containing the following code, and run it:
	
	     IF ! 'FOXTOOLS' $ SET('LIBRARY')
	        SET LIBRARY TO SYS(2004)+"FOXTOOLS.FLL" ADDITIVE
	     ENDIF
	
	     x=""
	     avi=REGFN("MciSendString","@C@CII","I","mmsystem")
	
	     foxwh=mainhwnd()
	     cmd="open c:\fpw26\tazmovie.avi type AVIVideo alias "+ ;
	         "Animation parent "+LTRIM(STR(foxwh))+" style "+LTRIM(STR(12345))
	
	     *open the avi file
	     ret = CALLFN(avi,@cmd,@x, 0, 0)
	     IF ret > 0
	        WAIT WINDOW "Problems"
	     ENDIF
	
	     * Put the window at location 10 10 relative to the parent window
	     * with a size of 200 200
	     cmd="put Animation window at 20 20 200 200"
	     ret = CALLFN(avi,@cmd,@x, 0, 0)
	     IF ret > 0
	        WAIT WINDOW "Cannot create child window"
	     ENDIF
	
	     * The wait tells the MCI command to complete before returning
	     * control to the application.
	     cmd="play Animation wait"
	     ret = CALLFN(avi,@cmd,@x, 0, 0)
	     IF ret > 0
	        WAIT WINDOW "Cannot play AVI"
	     ENDIF
	
	     * Close windows so they don't crash when you exit the application.
	     cmd="close Animation"
	     ret = callfn(avi,@cmd,@x, 0, 0)
	     IF ret > 0
	        WAIT WINDOW "Cannot close AVI window"
	     ENDIF
	
	     SET LIBRARY TO
	
	Additional query words: VFoxWin FoxWin
	
	======================================================================
	Keywords          : kbcode kbmm 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260a kbVFP300
	Version           : 2.60a 3.00
	
	=============================================================================
	
