---
layout: page
title: "Q107839: INFO: BROWSE IN SCREEN Uses Active Window"
permalink: /kb/107/Q107839/
---

## Q107839: INFO: BROWSE IN SCREEN Uses Active Window

{% raw %}

	Article: Q107839
	Product(s): Microsoft FoxPro
	Version(s): MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0,5.0,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a, 2.5b 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The FoxPro 2.5 for MS-DOS and Windows "Language Reference" (page L3-250), the
	FoxPro 2.0 for MS-DOS "Commands & Functions" manual, and the Visual FoxPro
	online Help incorrectlystate that the BROWSE IN SCREEN command places a Browse
	window on the desktop in FoxPro for MS-DOS or in the main window in FoxPro for
	Windows, even if a user-defined window is active.
	
	Instead, to place a Browse window in the default size and location, you must also
	issue the NORMAL clause.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	The following series of commands illustrates this behavior:
	
	  USE <filename>
	  DEFINE WINDOW test FROM 1,1 TO 20,20
	  ACTIVATE WINDOW test
	  @1,1 SAY "hello" && test is the current output window
	  BROWSE IN SCREEN
	
	Note that the Browse information is displayed in the window "test".
	
	To correct this problem, issue the following series of commands:
	
	  USE <filename>
	  DEFINE WINDOW test FROM 1,1 TO 20,20
	  ACTIVATE WINDOW test
	  @1,1 SAY "hello" && test is the current output window
	  BROWSE IN SCREEN NORMAL
	
	
	Additional query words: VFoxWin FoxWin FoxDos docerr
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250bDOS kbFoxPro250 kbFoxPro250a kbFoxPro250b kbVFP300 kbVFP500 kbVFP600
	Version           : MS-DOS:2.0,2.5,2.5a,2.5b; WINDOWS:2.5,2.5a,2.5b,3.0,5.0,6.0
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
