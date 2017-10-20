---
layout: page
title: "Q190539: HOWTO: Make Move or Resize Call Form's THIS_ACCESS Method"
permalink: /kb/190/Q190539/
---

## Q190539: HOWTO: Make Move or Resize Call Form's THIS_ACCESS Method

{% raw %}

	Article: Q190539
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Visual FoxPro 6.0 gives you the ability to attach events to properties. This is
	accomplished using Access and Assign methods. These events will fire when a
	property value is queried (that is, accessed) or set to a value (that is,
	assigned). The THIS_ACCESS method is a special case that is fired whenever any
	property of an object is queried or set. Normally, this method will be fired
	only when properties are programmatically set or queried. This article describes
	how to ensure the THIS_ACCESS method is called even if a property is implicitly
	changed. An example of when you may want to do this would be when a form is
	moved the form's Top property is changed.
	
	MORE INFORMATION
	================
	
	This example demonstrates how THIS_ACCESS is not called by properties that are
	implicitly changed.
	
	1. Run the following code from a program (.prg) file:
	
	        PUBLIC oform1
	
	        oform1=NEWOBJECT("form1")
	        oform1.SHOW
	        RETURN
	
	        DEFINE CLASS form1 AS FORM
	
	           DOCREATE = .T.
	           CAPTION = "Form1"
	           NAME = "Form1"
	
	           PROCEDURE this_access
	              LPARAMETERS cMemberName
	              ? cMemberName, TTOC(DATETIME())
	              RETURN THIS
	           ENDPROC
	
	       ENDDEFINE
	
	2. Resize or move the form with the mouse. Note that no output is echoed to the
	  form.
	
	This example shows how to make THIS_ACCESS be called when moving or resizing a
	form by adding code to the form's Moved and Resize methods.
	
	1. Run the following code from a program (.prg) file. Note the code added to the
	  Moved and Resize methods.
	
	        PUBLIC oform1
	
	        oform1=NEWOBJECT("form1")
	        oform1.SHOW
	        RETURN
	
	        DEFINE CLASS form1 AS FORM
	
	           AUTOCENTER = .T.
	           CAPTION = "Form1"
	           NAME = "Form1"
	
	           PROCEDURE this_access
	              LPARAMETERS cMemberName
	              ? cMemberName, TTOC(DATETIME())
	              RETURN THIS
	           ENDPROC
	
	           PROC MOVED
	              = THIS.TOP
	              = THIS.LEFT
	              ?
	           ENDPROC
	
	           PROC RESIZE
	              = THIS.WIDTH
	              = THIS.HEIGHT
	              ?
	           ENDPROC
	
	        ENDDEFINE
	
	2. Resize or move the form with the mouse. Note that the properties that are
	  queried get echoed to the form.
	
	REFERENCES
	==========
	
	Visual FoxPro Help file, "Access and Assign Methods" topic.
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp600 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
