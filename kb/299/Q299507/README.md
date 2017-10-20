---
layout: page
title: "Q299507: FIX: Disabled Label On a Form Only Wraps One of Two Colors"
permalink: /kb/299/Q299507/
---

## Q299507: FIX: Disabled Label On a Form Only Wraps One of Two Colors

{% raw %}

	Article: Q299507
	Product(s): Microsoft FoxPro
	Version(s): 5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbOOP kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fi
	Last Modified: 15-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you have a label on a form in Visual FoxPro (VFP) 5.0 or 6.0, and the label
	is disabled (Enabled = .F.) and its caption is wrapped (WordWrap = .T.), the
	label may appear to have extra words in its caption.
	
	CAUSE
	=====
	
	Only one of the two colors that make up the 3D disabled effect actually wraps.
	
	STATUS
	======
	
	This problem was corrected in Visual FoxPro version 7.0 for Windows.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In VFP 5.0 or 6.0, paste the following code in a new program.
	
	  *!* Q299507 FIX: Disabled Label On a Form Only Wraps One of Two Colors
	  LOCAL loForm
	  loForm = CREATEOBJECT("frmLblDemo")
	  loForm.lblDemo.ENABLED = .F.
	  loForm.SHOW(1)
	
	  DEFINE CLASS frmLblDemo AS FORM
	  	ADD OBJECT lblDemo AS DemoLabel
	  ENDDEFINE
	
	  DEFINE CLASS DemoLabel AS LABEL
	  	CAPTION  = 'This is a demo'
	  	WORDWRAP = .T.
	  	HEIGHT   = 100
	  	WIDTH    = 82
	  	TOP      = 100
	  	LEFT     = 100
	  ENDDEFINE
	
	2. Save and run the code (the name is unimportant).
	
	When this code is run, a new form appears. The form has one object, a label,
	which is disabled and has its WordWrap property set to .T.. Using the "Windows
	Standard" color scheme in Microsoft Windows, in VFP 5.0 and 6.0 the word "demo"
	appears twice in the label caption: once on the first line (in gray) and once on
	the second line (in white). However, the caption property of the label does not
	contain extra text.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbvfp500aBUG kbvfp500bug kbvfp600 kbvfp600bug kbGrpDSFox kbCodeSnippet kbvfp700fix kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : :5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
