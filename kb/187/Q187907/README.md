---
layout: page
title: "Q187907: BUG: SDI Form Fails to Get Focus With _Screen.Visible=.F."
permalink: /kb/187/Q187907/
---

## Q187907: BUG: SDI Form Fails to Get Focus With _Screen.Visible=.F.

	Article: Q187907
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setting the Visible property of the _Screen to .F. in the Load event of a SDI
	(Single Document Interface) form prevents the form from gaining focus.
	
	RESOLUTION
	==========
	
	Place the _Screen.Visible command in the Activate event of the form instead of
	the Load event.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	If the Debugger is open when the program runs, the SDI form gets focus as
	expected.
	
	Steps to Reproduce Behavior
	---------------------------
	
	Create a program that contains the following code and run the program:
	
	Sample Code
	-----------
	
	     LOCAL aobj[1], xx
	     CREATE FORM SDI NOWAIT
	     ASELOBJ(aobj,1)
	     xx = aobj[1]
	     xx.ShowWindow = 2
	     xx.Autocenter = .T.
	     xx.WriteMethod('Load',[_screen.visible=.f.])
	     xx.WriteMethod('Unload',[_screen.visible=.T.])
	     KEYBOARD 'Y' CLEAR
	     RELEASE WINDOW 'Form Designer'
	     DO FORM SDI
	
	Additional query words: kbDSupport KBDSE kbVFp500abug
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
