---
layout: page
title: "Q250080: BUG:Mouse Pointer Changes to Default Pointer on Text Box Border"
permalink: /kb/250/Q250080/
---

## Q250080: BUG:Mouse Pointer Changes to Default Pointer on Text Box Border

	Article: Q250080
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbContainer kbCtrl kbvfp500aBUG kbvfp600bug kbGrpDSFox kbDSupport
	Last Modified: 09-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The mouse pointer changes to the default pointer when hovering over a text box
	border regardless of the mouse pointer setting on the form and text box.
	
	RESOLUTION
	==========
	
	Placing NODEFAULT in the MouseMove event of the text box keeps the mouse pointer
	from changing.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Copy the following code into a program file (.prg) and run it:
	
	  PUBLIC oForm
	  oForm=CREATEOBJECT("Form")
	  WITH oForm
	    .ADDOBJECT("Text1","textbox")
	    .text1.VISIBLE = .T.
	    .SETALL('MousePointer',11)
	    .MOUSEPOINTER = 11
	    .SHOW
	  ENDWITH
	  RETURN
	
	2. Slowly hover the mouse pointer over the border of the text box. Notice that
	  the mouse pointer changes from an hourglass to the default arrow pointer.
	
	REFERENCES
	==========
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbContainer kbCtrl kbvfp500aBUG kbvfp600bug kbGrpDSFox kbDSupport 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
