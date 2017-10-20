---
layout: page
title: "Q90415: Suppressing the &quot;Invalid Input&quot; Error Message in FoxPro"
permalink: /kb/090/Q90415/
---

## Q90415: Suppressing the &quot;Invalid Input&quot; Error Message in FoxPro

{% raw %}

	Article: Q90415
	Product(s): Microsoft FoxPro
	Version(s): MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft FoxPro for MS-DOS, versions 2.0, 2.5, 2.5a 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a 
	- Microsoft FoxPro for Macintosh, version 2.5b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When Microsoft FoxPro evaluates a user-defined function (UDF) that returns the
	Boolean value .F., FoxPro displays the message "Invalid Input (press space)" and
	halts execution until you press the SPACEBAR. To suppress this error message,
	return the value 0 when the condition is not met.
	
	The code example below accepts input for a screen variable called "mystate". The
	code calls a UDF to evaluate mystate, and displays a customized error message
	when the state is not equal to "WA".
	
	     mystate=SPACE(2)
	     @ 2,2 GET mystate VALID checkit()
	     READ
	   
	     PROCEDURE checkit
	     IF UPPER(mystate)<>"WA"
	        WAIT WINDOW "MYSTATE must be equal to WA" NOWAIT
	        RETURN 0
	     ENDIF
	     RETURN
	
	Additional query words: VFoxWin FoxMac FoxDos FoxWin prompt
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbFoxproSearch kbZNotKeyword3 kbFoxPro250bMac kbFoxPro200DOS kbFoxPro250DOS kbFoxPro250aDOS kbFoxPro250 kbFoxPro250a kbVFP300
	Version           : MACINTOSH:2.5b; MS-DOS:2.0,2.5,2.5a; WINDOWS:2.5,2.5a,3.0
	
	=============================================================================
	

{% endraw %}
