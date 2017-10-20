---
layout: page
title: "Q196024: BUG: Microsoft Date Time Picker Control Causes Exception Error"
permalink: /kb/196/Q196024/
---

## Q196024: BUG: Microsoft Date Time Picker Control Causes Exception Error

{% raw %}

	Article: Q196024
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbActiveX kbCtrl kbvfp600bug
	Last Modified: 31-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have a Microsoft Date and Time ActiveX control instantiated within a
	ToolBar and the focus is set to the Date and Time control, some of the ALT key
	combinations cause an exception error, and Visual FoxPro shuts down.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create and run a program with the following code:
	
	  
	
	        oTBar=CREATEOBJECT("mytoolbar")
	        oTBar.Show
	        READ EVENTS
	
	        DEFINE CLASS mytoolbar AS toolbar
	
	           Caption = "Toolbar1"
	           Height = 109
	           Left = 0
	           Top = 0
	           Width = 110
	           Name = "mytoolbar"
	
	           ADD OBJECT olecontrol1 AS olecontrol WITH ;
	              OLECLASS="MSComCtl2.DTPicker.2",;
	              Top = 5, ;
	              Left = 5, ;
	              Height = 100, ;
	              Width = 100, ;
	              Name = "Olecontrol1"
	
	           ADD OBJECT cmdbtn1 AS COMMANDBUTTON
	              procedure cmdbtn1.click
	                 clear events
	              endproc
	
	        ENDDEFINE
	
	2. When the ToolBar displays, click inside the Date Time Picker Control. You may
	  want to either highlight a date value or click the DOWN ARROW key.
	
	3. Using an ALT key combination like ALT+Z, ALT+C, or ALT+U and so on, causes
	  the following exception error:
	
	  Fatal Error: Exception code-C0000005 Called from ...........
	
	  Clicking OK, the only option, shuts down Visual FoxPro.
	
	NOTE: Any ALT key combination other than the Visual FoxPro System menu Hot Keys
	(ALT+F, ALT+E, ALT+V, ALT+T, ALT+P, ALT+W, ALT+H) causes the exception error.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbActiveX kbCtrl kbvfp600bug 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
