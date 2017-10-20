---
layout: page
title: "Q189620: PRB: Form Scrollbar Property Read-Only at Run-Time"
permalink: /kb/189/Q189620/
---

## Q189620: PRB: Form Scrollbar Property Read-Only at Run-Time

{% raw %}

	Article: Q189620
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The ScrollBar property of a form is read-only during run-time if the initial
	value of the property is set to "0 - None". However, if you set the ScrollBar
	property to any non-zero value, then the property can be changed during
	run-time.
	
	RESOLUTION
	==========
	
	To change the Scrollbar property during run-time, set the property to something
	other than "0 - None" at design time and set the ScrollBar property to "0 -
	None" in the Init event of the form. This causes the form to initially run
	without scrollbars but with the ability to add scrollbars.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	When the Scrollbar property is set to something other than "0 - None",
	additional system resources are used to show the scrollbars. When the ScrollBar
	property is set to "0 - None", these system resources are not reserved
	unnecessarily.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. The following code illustrates how to change the ScrollBar during run-time
	  when the form initially runs with the ScrollBar property equal to "0 -
	  None".
	
	        frmScrollbar = CREATE("scrollbar")
	        frmScrollbar.SHOW(1)
	        *
	        DEFINE CLASS SCROLLBAR AS FORM
	            TOP = 13
	            LEFT = 13
	            HEIGHT = 176
	            WIDTH = 352
	            SCROLLBARS = 1 &&Any non-zero value
	            DOCREATE = .T.
	            CAPTION = "ScrollBar Example"
	            NAME = "Form1"
	
	            ADD OBJECT command1 AS COMMANDBUTTON WITH ;
	                TOP = 72, ;
	                LEFT = 180, ;
	                HEIGHT = 27, ;
	                WIDTH = 144, ;
	                CAPTION = "Change Scrollbar Prop", ;
	                NAME = "Command1"
	
	            ADD OBJECT spinner1 AS SPINNER WITH ;
	                HEIGHT = 24, ;
	                LEFT = 70, ;
	                SPINNERHIGHVALUE =   3.00, ;
	                SPINNERLOWVALUE =   0.00, ;
	                TOP = 72, ;
	                WIDTH = 50, ;
	                NAME = "Spinner1"
	
	            ADD OBJECT label1 AS LABEL WITH ;
	                HEIGHT = 48, ;
	                LEFT = 70, ;
	                TOP = 20, ;
	                WIDTH = 250, ;
	                WORDWRAP = .T., ;
	                CAPTION = ;
	                "Adjust the form size and then change the ;
	                 ScrollBar property."
	
	            PROCEDURE INIT
	                THIS.SCROLLBARS = 0
	            ENDPROC
	
	            PROCEDURE command1.CLICK
	                THISFORM.SCROLLBARS = THISFORM.spinner1.VALUE
	            ENDPROC
	
	        ENDDEFINE
	
	        *-- Code ends here.
	
	Additional query words: kbVFp600 kbOOP
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
