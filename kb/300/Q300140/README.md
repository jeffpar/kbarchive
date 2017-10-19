---
layout: page
title: "Q300140: FIX: Minimized Modal Form Cannot Be Restored"
permalink: /kb/300/Q300140/
---

## Q300140: FIX: Minimized Modal Form Cannot Be Restored

	Article: Q300140
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbCtrl kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbCo
	Last Modified: 11-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you minimize a modal form that was called from another modal form, you cannot
	restore the minimized form.
	
	RESOLUTION
	==========
	
	To quit the program, click Cancel on the Program menu. This allows you to close
	the forms.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro (VFP) 5.0 or 6.0, paste the following code in a new program:
	
	  *!* Q300140 FIX: Minimized Modal Form Called From A Modal Form Cannot Be Restored
	  CLEAR ALL
	  PUBLIC ox
	  KEYBOARD '{enter}{enter}{ctrl+f9}'
	  ox = CREATEOBJECT('form1')
	  ox.Caption = 'Form '+ALLTRIM(STR(_Screen.FormCount))
	  ox.Show()
	
	  DEFINE CLASS form1 AS FORM
	
	  ADD OBJECT cmdNewForm AS CommandButton ;
	     WITH Left = 10, Top = 5, Height = 28, ;
	     Width = 100, Caption = "New Form"
	     
	  PROCEDURE  cmdNewForm.Click
	     * Create another Form
	     IF _Screen.FormCount < 3
	         LOCAL oy
	         oy = CREATEOBJECT('form1')
	         oy.Caption = 'Form '+ALLTRIM(STR(_Screen.FormCount))
	         oy.Show(1)
	     ENDIF
	
	  ENDPROC
	
	  ADD OBJECT cmdReleaseForm AS CommandButton ;
	     WITH Left = 120, Top = 5, Height = 28, ;
	     Width = 100, Caption = "Release Form"
	  PROCEDURE cmdReleaseForm.Click
	        THISFORM.Release
	         RETURN
	  ENDPROC
	
	  ENDDEFINE
	
	2. Save and run the code (the name is unimportant).
	
	Form 3 is minimized and you cannot restore it. Also, you cannot close the other
	forms.
	
	REFERENCES
	==========
	
	(c) Microsoft Corporation 2001, All Rights Reserved. Contributions by Mark
	Barnard, Microsoft Corporation.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCtrl kbvfp500 kbvfp500a kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet tslic_tslic kbvfp700fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
