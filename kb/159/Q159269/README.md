---
layout: page
title: "Q159269: FIX: Label Caption Longer Than 255 Characters Causes GPF"
permalink: /kb/159/Q159269/
---

## Q159269: FIX: Label Caption Longer Than 255 Characters Causes GPF

	Article: Q159269
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0
	Operating System(s): 
	Keyword(s): kbvfp600fix
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Visual FoxPro 5.0 causes a General Protection Fault (GPF) when the caption
	property of a Label is set more than 255 characters.
	
	WORKAROUND
	==========
	
	Set the caption property of a Label to something less than 255 characters.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	This behavior happens only in Visual FoxPro 5.0; it works as expected in Visual
	FoxPro 3.0 or 3.0b.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a Form and place a Label on it.
	
	2. In the INIT method of the form, put in the following code:
	
	        ThisForm.Label1.Caption = Replicate("X",256)
	
	3. Save and run the form.
	
	NOTE: Visual FoxPro terminates immediately when the form runs. (Generally the
	fault is an "Invalid Page Fault.")
	
	Additional query words: kbdse vfoxwin
	
	======================================================================
	Keywords          : kbvfp600fix 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500
	Version           : WINDOWS:5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
