---
layout: page
title: "Q96349: Errors in HELP Command Documentation"
permalink: kb/096/Q96349/
---

## Q96349: Errors in HELP Command Documentation

	Article: Q96349
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5x, 2.6x 
	- Microsoft FoxPro for Windows, versions 2.5x, 2.6x 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Page L3-559 of the "Language Reference" incorrectly states that the FoxPro for
	Windows-style Help file can be placed in a user-defined window or the main
	FoxPro window. This is true only if the .DBF-style Help file, not the
	Windows-style Help file, is being used. The manual incorrectly implies that the
	Windows-style Help file can be placed in a user-defined window or the FoxPro for
	Windows main screen with the IN WINDOW SCREEN or IN SCREEN option.
	
	In addition, the NOWAIT option works only with the .DBF-style Help file. The
	manual incorrectly indicates that the NOWAIT option will work with the
	Windows-style Help file.
	
	Additional query words: VFoxWin FoxWin FoxDos 2.50 2.50a 2.50b 2.60 2.60a docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbVFP300
	Version           : MS-DOS:2.0,2.5x,2.6x; WINDOWS:2.5x,2.6x,3.0
	
	=============================================================================
	
