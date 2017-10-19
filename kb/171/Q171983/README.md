---
layout: page
title: "Q171983: PRB: SelectOnEntry Property Does Not Highlight Single Character"
permalink: /kb/171/Q171983/
---

## Q171983: PRB: SelectOnEntry Property Does Not Highlight Single Character

	Article: Q171983
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfp kbvfp500 kbvfp500a kbvfp600
	Last Modified: 21-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When setting the SelectOnEntry property in Visual FoxPro 5.0 to True (.T.), a
	single character is not highlighted when the object receives focus with some
	objects.
	
	Of all the objects in Visual FoxPro 5.0 that use the SelectOnEntry property, the
	TextBox and ComboBox are the ones that do not highlight a single character
	properly. The EditBox, Spinner, and Grid column objects highlight a single
	character properly. If any of the object just mentioned has more than one
	character in it, then the characters are highlighted properly when the
	SelectOnEntry is set to True.
	
	The same problem occurs when using the "K" setting in the Format property of the
	TextBox or ComboBox. Setting the Format property to "K" selects all text when
	the object receives focus. The SelectOnEntry property was not available in
	Visual FoxPro 3.0. The Format property value of "K" works properly with just one
	character in Visual FoxPro 3.0 and, therefore, the workaround below is not
	necessary. The ComboBox in Visual FoxPro 3.0 does not have a Format property or
	the SelectOnEntry property.
	
	RESOLUTION
	==========
	
	To allow a single character to become highlighted in a TextBox or ComboBox,
	check the length of the value to see if it is a single character. If it is only
	one character in length, using the KEYBOARD command allows the character to be
	highlighted. Place the following code into the Gotfocus event:
	
	     IF LEN(ALLTRIM(THIS.VALUE)) = 1 && Use This.Value works for
	     *                                  textboxes,
	        KEYBOARD '{shift + home}'    && and This.DisplayValue for
	     *                                 Comboboxes.
	        KEYBOARD '{shift + rightarrow}'
	     ENDIF
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and place a TextBox, ComboBox, and EditBox on the form.
	
	2. Change the SelectOnEntry property to True for each of the objects.
	
	3. After running the form, type one character into each of the objects. Tab
	  through the objects and note that the single character in the EditBox is the
	  only character that gets highlighted.
	
	4. Type more than one character into each of the objects and tab through the
	  objects. Note that the characters in each object gets highlighted properly.
	
	Additional query words: form designer
	
	======================================================================
	Keywords          : kbvfp kbvfp500 kbvfp500a kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP600 kbVFP500a
	Version           : WINDOWS:5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
