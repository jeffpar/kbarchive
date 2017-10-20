---
layout: page
title: "Q268771: FIX: DOEVENTS Command Runs Slowly"
permalink: /kb/268/Q268771/
---

## Q268771: FIX: DOEVENTS Command Runs Slowly

{% raw %}

	Article: Q268771
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet
	Last Modified: 03-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The DOEVENTS command allows your program to yield time to process Windows
	events. However, in tight loops, DOEVENTS waits for an excessive amount of time
	for an event.
	
	WORKAROUND
	----------
	
	Use the MOUSE command as shown in "More Information" to give DOEVENTS something
	to read.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Microsoft Visual FoxPro version 7.0.
	
	MORE INFORMATION
	================
	
	In order to reduce the previously described waiting time, following these
	steps:
	
	1. Move the mouse while you're waiting. (This is not considered to be an optimum
	  solution.)
	
	2. Programmatically feed the app events for DOEVENTS to process.
	
	The following code shows calling DOEVENTS in a tight loop, programmatically
	feeding the app events for DOEVENTS to process, and displaying the resulting
	times to perform the loops:
	
	1. Copy the following code into a program file, and note the speed difference
	  between the call to DOEVENTS and the call to FastDoEvents.
	
	NOTE: This code works better if there is actually a window open. If there is no
	window open, DOEVENTS and FastDoEvents have similar execution times, which fall
	between the times recorded with a window open.
	
	  lnSeconds = SECONDS()
	  FOR i = 1 to 50
	     DOEVENTS
	  ENDfor
	  ? "Total time: " + STR(SECONDS() - lnSeconds, 7, 4)
	
	  lnSeconds = SECONDS()
	  FOR i = 1 to 50
	     FastDoEvents()
	  ENDfor
	  ? "Total time: " + STR(SECONDS() - lnSeconds, 7, 4)
	
	  FUNCTION FastDoEvents
	     LOCAL lnRow, lnCol, lcWindow
	
	     lcWindow = WONTOP()
	
	     lnRow = MROW(lcWindow)
	     lnCol = MCOL(lcWindow)
	
	     IF ( lnRow > 0 ) AND ( lnCol > 0 )
	        IF NOT EMPTY(lcWindow)
	           MOUSE AT lnRow, lnCol WINDOW (lcWindow)
	        ELSE
	           MOUSE AT lnRow, lnCol 
	        ENDif
	     ELSE
	        KEYBOARD " "
	        =INKEY()
	     ENDif
	
	     DOEVENTS
	  RETURN
	
	REFERENCES
	==========
	
	For more information on the DOEVENTS and MOUSE commands, please see the Visual
	FoxPro Language Reference.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox kbDSupport kbCodeSnippet 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
