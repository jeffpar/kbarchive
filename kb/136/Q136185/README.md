---
layout: page
title: "Q136185: PRB: _Screen.Hide or _Screen.Visible = .F. Won't Hide Desktop"
permalink: /kb/136/Q136185/
---

## Q136185: PRB: _Screen.Hide or _Screen.Visible = .F. Won't Hide Desktop

{% raw %}

	Article: Q136185
	Product(s): Microsoft FoxPro
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Visual FoxPro Help file states that the _Screen memory variable
	has a Hide method and a Visible property. You might expect that issuing a
	command such as _Screen.Hide or _Screen.Visible = .F. would cause the FoxPro
	desktop to disappear, but neither has any effect on the desktop.
	
	CAUSE
	=====
	
	This is by design. After a form or formset is hidden, Visual FoxPro activates
	the last active object. If no objects were active before the formset became
	active, the main Visual FoxPro window becomes active. Consequently, if you try
	to hide the main FoxPro window or set its Visible property to false when there
	were no prior active objects, Visual FoxPro has no place to go. As a result, the
	Hide method and Visible property for _Screen are disabled.
	
	STATUS
	======
	
	This behavior is by design.
	
	WORKAROUND
	==========
	
	One method of hiding the FoxPro desktop is to move it off screen. For example,
	create and run a program file with the following code:
	
	Sample Code
	-----------
	
	     frmHideDesktop = CREATEOBJECT("hidedesktop")
	     frmHideDesktop.SHOW(1)
	
	      DEFINE CLASS hidedesktop AS FORM
	          TOP = 17
	          LEFT = 24
	          DESKTOP = .T.
	          CAPTION = "HideShow Example"
	          MDIFORM = .T.
	          oleft = .F.
	
	          ADD OBJECT cmdHideShow AS hideshow WITH ;
	              TOP = 156, ;
	              LEFT = 175, ;
	              HEIGHT = 29, ;
	              WIDTH = 150, ;
	              CAPTION = "Hide _SCREEN", ;
	              NAME = "Command2"
	
	          ADD OBJECT cmdClose AS closebutton WITH ;
	              TOP = 196, ;
	              LEFT = 175, ;
	              HEIGHT = 29, ;
	              WIDTH = 150, ;
	              CAPTION = "Close", ;
	              NAME = "cmdClose"
	
	      ENDDEFINE
	
	      DEFINE CLASS hideshow AS COMMANDBUTTON
	
	              PROCEDURE CLICK
	              IF THIS.CAPTION = "Hide _SCREEN"
	                  THIS.CAPTION = "Show _SCREEN"
	                  THISFORM.oleft = _SCREEN.LEFT
	                  _SCREEN.LEFT = -10000
	              ELSE
	                  THIS.CAPTION = "Hide _SCREEN"
	                  _SCREEN.LEFT = THISFORM.oleft
	              ENDIF
	          ENDPROC
	      ENDDEFINE
	
	      DEFINE CLASS closebutton AS COMMANDBUTTON
	          PROCEDURE CLICK
	              _SCREEN.LEFT = THISFORM.oleft
	              THISFORM.RELEASE
	          ENDPROC
	      ENDDEFINE
	
	Additional query words: VfoxWin kbvfp300
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300
	
	=============================================================================
	

{% endraw %}
