---
layout: page
title: "Q300055: FIX: Init Event Shows Twice In Event Tracking on Objects"
permalink: /kb/300/Q300055/
---

## Q300055: FIX: Init Event Shows Twice In Event Tracking on Objects

{% raw %}

	Article: Q300055
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbCod
	Last Modified: 29-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use AddObject() in the Init event of a class that adds a container, the
	Init event for objects in the container appears twice in the event log.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro (VFP) 5.0 or 6.0, paste the following code in a new program:
	
	   *!* Q300055 FIX: Init Event Shows Twice In Event Tracking On Objects Created With AddObject()
	  SET EVENTLIST TO INIT, DESTROY
	  SET EVENTTRACKING TO EventProb.LOG
	  SET EVENTTRACKING ON
	
	  ox = CREATEOBJECT('EventProb')
	  ox = NULL
	
	  SET EVENTTRACKING OFF
	  SET EVENTTRACKING TO
	  MODIFY FILE EventProb.LOG NOWAIT
	
	  DEFINE CLASS EventProb AS FORM
	  	PROCEDURE INIT
	  	THIS.ADDOBJECT('cntProb', 'ProbContainer')
	  ENDDEFINE
	
	  DEFINE CLASS ProbContainer AS CONTAINER
	  	ADD OBJECT txtDemo AS TEXTBOX
	  ENDDEFINE
	
	2. Save and run the code (the name is unimportant).
	
	The event log appears on the screen. Note that the Init event for the text box
	appears in the log twice, on lines 2 and 3.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbvfp700 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
