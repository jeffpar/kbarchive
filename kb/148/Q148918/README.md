---
layout: page
title: "Q148918: How to Capitalize Some Characters in a Text Box Automatically"
permalink: /kb/148/Q148918/
---

## Q148918: How to Capitalize Some Characters in a Text Box Automatically

	Article: Q148918
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b
	Operating System(s): 
	Keyword(s): kbcode
	Last Modified: 10-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When typing names into a text box, you can have the first letter of each word
	automatically capitalized. This can be done in the KeyPress event by checking
	each character that is typed and capitalizing it if it is the first character
	entered or if the character before it is blank. Names such as "Van Camp" would
	have the first letter of each part of the name automatically capitalized.
	However, names like "MacDonald" would still require that you manually capitalize
	the D key.
	
	MORE INFORMATION
	================
	
	Step-by-Step Procedure
	----------------------
	
	The following steps illustrate how to use the KeyPress event to check each
	character and enforce the rule that the first character of each word be
	capitalized.
	
	1. Create a new form, and place a text box on it.
	
	2. Create a new property for the form. On the Form menu, click New Property, and
	  in the Name box, type Lastchar. Click OK, and return to the form.
	
	3. In the When Event of the text box, place the following code:
	
	        THISFORM.lastchar = 32
	
	  This assigns the numeric value of a space (32) to the lastchar variable.
	
	4. In the KeyPress event of the text box, place the following code:
	
	    IF THISFORM.lastchar = 32   && Checks lastchar to see if it is
	                                 && equal the numeric value of a space.
	         NODEFAULT               && Doesn't allow the character to be
	                                 && entered because it is lowercase.
	         KEYBOARD UPPER(CHR(nKeyCode))  && Places the character into the
	                                        && text box in uppercase.
	     ENDIF
	     IF nKeyCode=127 AND LEN(ALLTRIM(this.value))=1  &&  Checks to see if
	                                     && the user has backspaced over
	                                     && the first letter in the text box.
	         THISFORM.lastchar=32        && Assigns numeric value of a space
	                                     && to lastchar.
	     ELSE
	         THISFORM.lastchar= nKeyCode && Assigns last keystroke to Lastchar
	     ENDIF
	
	5. Run the form, and type the following into the text box:
	
	  " van camp " (without the quotation marks)
	
	  Note that the V and C are automatically capitalized.
	
	6. Backspace over the whole name, and start typing another name. Note that the
	  first character is automatically capitalized as a new name is typed.
	
	Additional query words: VFoxWin
	
	======================================================================
	Keywords          : kbcode 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b
	Version           : WINDOWS:3.0,3.0b
	
	=============================================================================
	
