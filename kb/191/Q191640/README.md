---
layout: page
title: "Q191640: BUG: ActiveForm Property Returns Error When Not FormSet"
permalink: /kb/191/Q191640/
---

## Q191640: BUG: ActiveForm Property Returns Error When Not FormSet

{% raw %}

	Article: Q191640
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Referencing the ActiveForm property of a form through code returns the following
	error:
	
	  Property ActiveForm is not found.
	
	ActiveForm is, however, listed in the Properties dialog box of the form.
	
	RESOLUTION
	==========
	
	Do not reference the ActiveForm property of a form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this bug and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Even though the ActiveForm is listed as a property of the form object, it is
	only applicable to the FormSet object.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Place the following code in a program file.
	
	        **************************************************************
	        *!* Start Error Example (Form)
	        **************************************************************
	        ox=CREATEOBJECT('oForm')
	        ox.VISIBLE=.T.
	        READ EVENTS
	        *****************************************
	        DEFINE CLASS oForm AS FORM
	           NAME='MyFormFoo'
	           ADD OBJECT oCommand AS COMMANDBUTTON
	           ADD OBJECT oClose AS COMMANDBUTTON
	
	           PROCEDURE INIT
	              THIS.oCommand.LEFT=100
	              THIS.oCommand.TOP=100
	              THIS.oClose.LEFT=100
	              THIS.oClose.TOP=200
	           ENDPROC
	
	           PROCEDURE oCommand.CLICK
	              WAIT WINDOW   THISFORM.ACTIVEFORM.NAME
	           ENDPROC
	
	           PROCEDURE oClose.CLICK
	              CLEAR EVENTS
	              RELEASE THISFORM
	           ENDPROC
	
	        ENDDEFINE
	        **************************************************************
	        *!* End Error Example (Form)
	
	Run the program and click the oCommand button. This returns the following error:
	
	  Property ActiveForm is not found.
	
	Additional query words: kbVFp600bug kbContainer kbCtrl
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
