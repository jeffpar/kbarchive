---
layout: page
title: "Q164372: FIX: More Than One Keyboard Letter Will Activate Some Hot Keys"
permalink: kb/164/Q164372/
---

## Q164372: FIX: More Than One Keyboard Letter Will Activate Some Hot Keys

	Article: Q164372
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:3.0,3.0b,5.0
	Operating System(s): 
	Keyword(s): kbtool kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bugkbbuglist kbfixlist
	Last Modified: 04-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When assigning hot keys to the command button, check box, or option button
	objects, some keys trigger that hot key besides the letter key that was assigned
	to it. When assigning the letters G, O, R, or S as hot keys, pressing the
	Insert, Delete, Home, or End keys also triggers the objects that these letters
	are assigned to. Also, using the hot key letters A, B, and C can be triggered by
	the F7, F8, and F9 keys.
	
	RESOLUTION
	==========
	
	To work around this problem, use the ON KEY LABEL command to turn off these
	keys. Be careful using this method since it might cause problems in some
	instances because the Insert, Delete, Home, or End keys may not be available for
	things like editing data. The syntax for this command is ON KEY LABEL <key
	name> *. Note that the asterisk is what disables the key. To turn the key
	back on, issue ON KEY LABEL <key name> without the asterisk. Look in the
	"Steps to Reproduce Behavior" section for examples of using this command in a
	form.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. This problem has been fixed in Visual FoxPro
	5.0a.
	
	MORE INFORMATION
	================
	
	To allow an object to have hot key capability, place the "\<" symbols in
	front of the letter that is to be used as the hot key. For example, placing
	"\<Quit" in the Caption property of the object allows the pressing of the Q
	key to give focus to that object. Any letter in the caption can be assigned as
	the hot key. Another example would be "E\<xit", which allows the X key to
	become the hot key. No two objects on the form can have the same hot key letter.
	Whichever object was assigned the hot key letter first is the one that will
	receive focus.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a form and add seven command buttons to it.
	
	2. In the Caption property of each command button add the following:
	
	  Button 1: "\<GO TOP" (without the quotation marks)
	  Button 2: "\<OFF" (without the quotation marks)
	  Button 3: "\<RUN" (without the quotation marks)
	  Button 4: "\<SAVE" (without the quotation marks)
	  Button 5: "\<APPEND" (without the quotation marks)
	  Button 6: "\<BROWSE" (without the quotation marks)
	  Button 7: "\<CANCEL" (without the quotation marks)
	
	3. Run the form and press the Insert, Delete, Home, End, F7, F8, and F9 keys.
	  Note that after pressing each key, the focus is set to the corresponding
	  button.
	
	4. To fix the problem, close the form and add the following code to the Init
	  event of the form:
	
	        ON KEY LABEL INS *
	        ON KEY LABEL DEL *
	        ON KEY LABEL HOME *
	        ON KEY LABEL END *
	        ON KEY LABEL F7 *
	        ON KEY LABEL F8 *
	        ON KEY LABEL F9 *
	
	5. If you want to return the keys to their default functionality, add the
	  following code to the Destroy event of the form:
	
	        ON KEY LABEL INS
	        ON KEY LABEL DEL
	        ON KEY LABEL HOME
	        ON KEY LABEL END
	        ON KEY LABEL F7
	        ON KEY LABEL F8
	        ON KEY LABEL F9
	
	REFERENCES
	==========
	
	For information on a similar issue, please refer to the following article in the
	Microsoft Knowledge Base:
	
	  Q158830 FIX: OptionGroup with M, P, H, K Hot Keys Fire Valid
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool kbvfp kbvfp300bBUG kbvfp500aFIX kbvfp500bug kbbuglist kbfixlist
	Technology        : kbVFPsearch kbAudDeveloper kbVFP300 kbVFP300b kbVFP500
	Version           : WINDOWS:3.0,3.0b,5.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
