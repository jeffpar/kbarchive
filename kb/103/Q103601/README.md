---
layout: page
title: "Q103601: How the Menu Font Is Determined in FoxPro for Windows"
permalink: kb/103/Q103601/
---

## Q103601: How the Menu Font Is Determined in FoxPro for Windows

	Article: Q103601
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	User-defined menus that are not created as a part of _msysmenu will be displayed
	in the MS Sans Serif font unless the current output window's font is FoxFont, in
	which case FoxFont will be used.
	
	Below are three code examples that demonstrate this behavior and one example
	related to cross-platform applications.
	
	Menus that are created as part of _msysmenu will always be displayed in MS Sans
	Serif; for example:
	
	     DEFINE PAD test OF _msysmenu PROMPT "Test"
	     ON PAD test OF _msysmenu ACTIVATE POPUP test
	   
	     DEFINE POPUP test
	   
	     FOR CNT = 1 TO 10
	        DEFINE BAR CNT OF test PROMPT "test" + LTRIM(STR(CNT))
	     ENDFOR
	
	MORE INFORMATION
	================
	
	Sample 1
	--------
	
	     DEFINE MENU test
	     DEFINE PAD mypad OF test PROMPT "My Pad"
	     ON PAD mypad OF test ACTIVATE POPUP test
	   
	     DEFINE POPUP test
	     FOR CNT = 1 TO 10
	        DEFINE BAR CNT OF test PROMPT "test" + LTRIM(STR(CNT))
	     ENDFOR
	   
	     ACTIVATE MENU test NOWAIT
	
	Sample 2
	--------
	
	     DO WHILE .T.
	        @ 2,2 PROMPT "test1"
	        @ 2,12 PROMPT "test2"
	        MENU TO x
	     ENDDO
	
	Sample 3
	--------
	
	     DIMENSION arr(10)
	   
	     FOR CNT = 1 TO 10
	        arr(CNT) = "test" + LTRIM(STR(CNT))
	     ENDFOR
	
	     @ 2,2 MENU arr,10
	     READ MENU TO VAR
	
	Cross-Platform Applications
	---------------------------
	
	If you are developing applications that are to be run on both the MS-DOS and
	Windows platforms using the same code but without using platform-specific
	conditional statements, set the output window to FoxFont to ensure portability.
	
	If you are using platform-specific statements, the following code fragment shows
	the best way to handle these:
	
	     IF _WINDOWS
	        Do Windows-specific commands
	     ELSE
	        Do MS-DOS -specific commands
	     ENDIF
	
	Additional query words: VFoxWin FoxWin 2.50
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	
