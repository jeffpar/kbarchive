---
layout: page
title: "Q191644: BUG: WhatsThisHelp Displays Wrong Mouse Icon On Form Title Bar"
permalink: /kb/191/Q191644/
---

## Q191644: BUG: WhatsThisHelp Displays Wrong Mouse Icon On Form Title Bar

{% raw %}

	Article: Q191644
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you invoke WhatsThisHelp, on a form, and you put the mouse icon over the
	Title Bar of the form, it changes the mouse cursor back to a normal mouse.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Place the following code in a program (.prg) file and run the program:
	
	        oForm=CREATEOBJECT("test1")
	        oForm.VISIBLE=.T.
	        READ EVENTS
	
	        DEFINE CLASS test1 AS FORM
	           NAME="test1"
	           WHATSTHISHELP=.T.
	           ADD OBJECT 'btnClose' AS COMMANDBUTTON
	
	        PROCEDURE INIT
	           THIS.btnClose.LEFT=50
	           THIS.btnClose.TOP=100
	           THIS.btnClose.HEIGHT=20
	           THIS.btnClose.VISIBLE=.T.
	        ENDPROC
	
	        PROCEDURE btnClose.CLICK
	           CLEAR EVENTS
	           RELE THISFORM
	        ENDPROC
	        ENDDEFINE
	
	2. When the form displays, press SHIFT+F1 to turn on WhatsThisHelp.
	
	3. Move the mouse cursor over the title bar of the form.
	
	Notice that the mouse cursor changes to the default pointing cursor. If you click
	the title bar, WhatsThisHelp still functions. In Visual FoxPro 3.0, clicking the
	title bar invokes the Microsoft Visual FoxPro Help. In Visual FoxPro 5.0, a tool
	tip box appears with the following:
	
	  No Help topic associated with this topic.
	
	Additional query words: kbVFp600bug kbCtrl kbContainer kbVFp300bbug kbVFp500abug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	

{% endraw %}
