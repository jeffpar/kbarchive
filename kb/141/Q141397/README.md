---
layout: page
title: "Q141397: PRB: Insertion Point Left of Input Mask in Text Box on Page"
permalink: /kb/141/Q141397/
---

## Q141397: PRB: Insertion Point Left of Input Mask in Text Box on Page

{% raw %}

	Article: Q141397
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox
	Last Modified: 21-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A text box with an InputMask is placed on a page of a pageframe and the text box
	gets the focus when the page containing it is activated. Contrary to the input
	mask, the insertion point inside the text box is aligned to the far left. Any
	characters typed while the insertion point is to the left of the input mask are
	lost. This only occurs when the page containing the text box is not the
	ActivePage when the pageframe is initially displayed.
	
	RESOLUTION
	==========
	
	Use THIS.Refresh in the procedure associated with the Activate event of the page
	containing the text box.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a new form, and place a pageframe on the form.
	
	2. Place a text box on Page 2. The text box should be the first item to receive
	  focus when selecting page 2.
	
	3. Change the following properties of the text box:
	
	     Format=R
	     InputMask=(999)999-9999
	
	4. Run the form, and select Page 2. Note that the insertion point is blinking to
	  the left "(" when it should be to the right of "(".
	
	5. Type: 7045551212, and note that the first number is lost.
	
	Steps to Correct Behavior
	-------------------------
	
	1. Open the form for modification.
	
	2. Add the following code to the procedure associated with the Activate event of
	  Page 2:
	
	     THIS.Refresh
	
	3. Run the form. Note that the insertion point is now blinking to the right of
	  "(".
	
	4. Type "7045551212" (without the quotation marks), and note the first number is
	  not lost.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
