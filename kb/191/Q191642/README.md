---
layout: page
title: "Q191642: BUG: Adding Many Forms to a Formset Causes Errors"
permalink: /kb/191/Q191642/
---

## Q191642: BUG: Adding Many Forms to a Formset Causes Errors

	Article: Q191642
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 20-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Adding a large number of forms to a formset causes an internal consistency error
	in Visual FoxPro 3.0x. In Visual FoxPro 5.0x and 6.0, the following error
	message occurs:
	
	  Too many windows open.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Error number 1116, whose text is shown in the SYMPTOMS section, is a non-
	standard error message. The dialog only has an OK button. The dialog does not
	have a Help button option.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a program (.prg) that contains the following code:
	
	        CLEAR
	           x=CREAT("formset")
	        FOR i = 1 TO 228
	           xtest="test"+PADL(ALLT(STR(i)),4,"0")
	           x.ADDOBJECT(xtest,'form')
	        ENDFOR
	
	2. Run the code in Visual FoxPro 5.0x or 6.0 and you see the following error
	  message occur:
	
	  Too many windows open.
	
	3. Running the code in Visual FoxPro 3.0x creates the following error message
	  and FoxPro shuts down:
	
	  Internal Consistency error.
	
	Visual FoxPro for the Macintosh 3.0b does not produce an error when running this
	code.
	
	Additional query words: kbVFp500abug kbVFp300bbug kbVFp600bug kbContainer
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
