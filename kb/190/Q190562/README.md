---
layout: page
title: "Q190562: FIX: SelectedFore/BackColor Ignored in Top-Level Forms"
permalink: kb/190/Q190562/
---

## Q190562: FIX: SelectedFore/BackColor Ignored in Top-Level Forms

	Article: Q190562
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
	
	If you have a Top-Level form and you set the SelectedForeColor and/or
	SelectedBackColor properties for controls in that form, those settings are
	ignored.
	
	RESOLUTION
	==========
	
	This problem is corrected in Microsoft Visual FoxPro 6.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Run the following from a program file:
	
	        PUBL OF1,OF2
	        OF1 = CREA("form1")
	        OF1.SHOW
	
	        OF2 = CREATEOBJECT("form2")
	        OF2.LEFT = _SCREEN.LEFT+OF2.LEFT+OF1.WIDTH+12
	        OF2.TOP = _SCREEN.TOP+75
	        OF2.SHOW
	
	        DEFINE CLASS FORM1 AS FORM
	           SHOWWINDOW = 0
	           HEIGHT = 50
	           WIDTH = 200
	           ADD OBJECT TEXT1 AS TEXTBOX WITH ;
	              TOP = 10, ;
	              LEFT = 10, ;
	              WIDTH = 150
	
	         PROC INIT
	           THIS.CAPTION = "ShowWindow = "+STR(THIS.SHOWWINDOW,1)
	           THISFORM.TEXT1.SELECTEDFORECOLOR=RGB(255,0,0)
	           THISFORM.TEXT1.SELECTEDBACKCOLOR=RGB(0,255,0)
	           THISFORM.TEXT1.VALUE = ;
	              STR(THISFORM.TEXT1.SELECTEDBACKCOLOR)+ ;
	              " "+STR(THISFORM.TEXT1.SELECTEDFORECOLOR)
	           THISFORM.TEXT1.SELSTART=0
	           THISFORM.TEXT1.SELLENGTH=LEN(THISFORM.TEXT1.VALUE)
	           THISFORM.TEXT1.HIDESELECTION = .F.
	         ENDPROC
	        ENDDEFINE
	
	        DEFINE CLASS FORM2 AS FORM1
	           SHOWWINDOW = 2
	        ENDDEFINE
	
	The Top-Level form (where ShowWindow = 2) displays the selected text as white
	foreground on a blue background. The form where ShowWindow = 0 displays the
	selected text as red foreground on bright green background. The edit box and
	combo box controls display the same behavior.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 1998, All Rights Reserved.
	Contributions by Jim Saunders, Microsoft Corporation
	
	
	Additional query words: kbVFp300bbug kbVFp500abug kbOOP kbvfp600
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
