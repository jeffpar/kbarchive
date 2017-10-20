---
layout: page
title: "Q221613: FIX: Clicking Page Tab Executes Container Click Event"
permalink: /kb/221/Q221613/
---

## Q221613: FIX: Clicking Page Tab Executes Container Click Event

{% raw %}

	Article: Q221613
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbOOP kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A form's Click event fires when both it and the Click event of individual pages
	of a pageframe contain code. The page's Click event should be the only event
	that fires.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program that contains the following code:
	
	  frmMyForm = CREATEOBJECT("mytestform")
	  frmMyForm.SHOW(1)
	
	  DEFINE CLASS mytestform AS FORM
	  	CAPTION= "Click on the Page Tabs"
	
	  	ADD OBJECT pageframe1 AS PAGEFRAME WITH ;
	  		PAGECOUNT = 3, ;
	  		page1.CAPTION = "Page1", ;
	  		Page2.CAPTION = "Page2"
	
	  	PROCEDURE pageframe1.page1.CLICK
	  		WAIT WINDOW "Page 1" 
	  	ENDPROC
	
	  	PROCEDURE pageframe1.Page2.CLICK
	  		WAIT WINDOW "Page 2" 
	  	ENDPROC
	
	  	PROCEDURE pageframe1.page3.CLICK
	  		WAIT WINDOW "Page 3" 
	  	ENDPROC
	
	  	PROCEDURE CLICK
	  		WAIT WINDOW "Form Click" NOWAIT
	  	ENDPROC
	
	  ENDDEFINE
	
	2. Run the program.
	
	3. Click from tab to tab.
	
	  In Visual FoxPro 6.0, occasionally the form's Click event fires even though
	  you click on the pages of the pageframe. In Visual FoxPro 5.0a, the form's
	  Click event seems to fire much more often.
	
	  In Visual FoxPro 5.0, if the pageframe resides in a container object, then you
	  see similar behavior: the Click event of the container object fires. This
	  particular behavior does not seem to occur as often when running a form with
	  that configuration in Visual FoxPro 6.0.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbOOP kbvfp500aBUG kbvfp600 kbvfp600bug kbVS600sp3fix kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
