---
layout: page
title: "Q130460: Using a Variable as a Parameter for CreateObject()"
permalink: /kb/130/Q130460/
---

## Q130460: Using a Variable as a Parameter for CreateObject()

{% raw %}

	Article: Q130460
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 11-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	CreateObject() takes a classname as a parameter. This article shows by example
	how to set a variable equal to the classname, and than use that variable as the
	parameter for every CreateObject() function for that class. Should the class
	later be subclassed, you only need to change the variable name from the old
	classname to the new subclass name; only a single line of code had to change.
	
	MORE INFORMATION
	================
	
	The following program, which does not use the variable to hold the classname,
	creates three blank forms with a white backcolor. The program also defines
	GreyForm as a subclass of Form. It has its backcolor set to grey. To base each
	form off of the GreyForm class instead of the Form class, requires that each
	occurrence of createObject('Form') be replaced with CreateObject('GreyForm').
	
	  x=CreateObject('Form')
	  y=CreateObject('Form')
	  z=CreateObject('Form')
	  x.visible=.T.
	  y.visible=.T.
	  z.visible=.T.
	
	  DEFINE CLASS GreyForm as Form
	     BackColor=RGB(192,192,192)
	     Caption="Grey"
	  ENDDEFINE
	
	The following program is identical in function to the first one. However, it uses
	a variable to hold the classname. Now you need only change the first line to
	cForm="GreyForm" to base all of the forms off of the GreyForm subclass.
	
	  cForm="Form"
	  x=CreateObject(cForm)
	  y=CreateObject(cForm)
	  z=CreateObject(cForm)
	  x.visible=.T.
	  y.visible=.T.
	  z.visible=.T.
	
	  DEFINE CLASS GreyForm as Form
	     BackColor=RGB(192,192,192)
	     Caption="Grey"
	  ENDDEFINE
	
	Additional query words: VFoxWin KBfest
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	Version           : WINDOWS:3.0
	
	=============================================================================
	

{% endraw %}
