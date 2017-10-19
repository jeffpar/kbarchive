---
layout: page
title: "Q141143: How to Determine the Active &amp; Previously Active Forms"
permalink: /kb/141/Q141143/
---

## Q141143: How to Determine the Active &amp; Previously Active Forms

	Article: Q141143
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The command _SCREEN.ACTIVEFORM.NAME tells you the name of the active form. There
	is another way to determine the currently active form and to determine which
	form was active before the current form.
	
	MORE INFORMATION
	================
	
	1. Create three forms (Form1, Form2, and Form3).
	
	2. Open the debug window and type the following:
	
	     _SCREEN.FORMS(1).NAME
	     _SCREEN.FORMS(2).NAME
	     _SCREEN.FORMS(3).NAME
	     _SCREEN.ACTIVEFORM.NAME
	     _SCREEN.FORMCOUNT
	
	3. Inside the Command window, type the following:
	
	     DO FORM FORM1
	     DO FORM FORM2
	     DO FORM FORM3
	
	  Note the following from the debug window:
	
	     _SCREEN.FORMS(1).NAME         FORM1
	     _SCREEN.FORMS(2).NAME         FORM2
	     _SCREEN.FORMS(3).NAME         FORM3
	     _SCREEN.ACTIVEFORM.NAME       FORM3
	     _SCREEN.FORMCOUNT             3
	
	     Note that _SCREEN.FORMS(3)= _SCREEN.ACTIVEFORM
	
	4. Select Form1, and note the following changes from the debug window:
	
	     _SCREEN.FORMS(1).NAME         FORM2
	     _SCREEN.FORMS(2).NAME         FORM3
	     _SCREEN.FORMS(3).NAME         FORM1
	     _SCREEN.ACTIVEFORM.NAME       FORM1
	     _SCREEN.FORMCOUNT             3
	
	Notes
	-----
	
	_SCREEN.FORMS(_SCREEN.FORMCOUNT) always references the active form object.
	
	_SCREEN.FORMS(_SCREEN.FORMCOUNT).NAME references the name of the active form.
	
	_SCREEN.FORMS(_SCREEN.FORMCOUNT).CAPTION references the caption of the active
	form.
	
	_SCREEN.FORMS(_SCREEN.FORMCOUNT -1) always references the previously active form
	object.
	
	_SCREEN.FORMS(_SCREEN.FORMCOUNT-1).NAME references the name of the previously
	active form.
	
	_SCREEN.FORMS(_SCREEN.FORMCOUNT -1).CAPTION references the caption of the
	previously active form.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
